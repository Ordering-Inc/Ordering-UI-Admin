import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage Settings page behavior without UI component
 */
export const Settings = (props) => {
  const {
    UIComponent,
    settingsType
  } = props

  const [categoryList, setCategoryList] = useState({ categories: [], loading: false, error: null })
  const [isUpdateConfig, setIsUpdateConfig] = useState(false)
  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  /**
   * Method to update the category
   */
  const handleUpdateCategoryList = (categories) => {
    setCategoryList({ ...categoryList, categories: categories })
    setIsUpdateConfig(true)
  }

  /**
   * Method to get Configration List
   */
  const getCagegories = async () => {
    if (loading) return
    try {
      setCategoryList({ ...categoryList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const filterConditons = []
      if (settingsType === 'basic') filterConditons.push({ attribute: 'parent_category_id', value: 1 })
      else filterConditons.push({ attribute: 'parent_category_id', value: 2 })

      const functionFetch = `${ordering.root}/config_categories?orderBy=rank&where=${JSON.stringify(filterConditons)}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setCategoryList({
          ...categoryList,
          loading: false,
          categories: result
        })
      } else {
        setCategoryList({
          ...categoryList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setCategoryList({
        ...categoryList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getCagegories()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isUpdateConfig={isUpdateConfig}
          handChangeConfig={setIsUpdateConfig}
          categoryList={categoryList}
          handleUpdateCategoryList={handleUpdateCategoryList}
        />
      )}
    </>
  )
}

Settings.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * String to idenity setting group
   */
  settingsType: PropTypes.string,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

Settings.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
