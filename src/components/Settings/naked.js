import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

const categoryHideList = ['cloudinary', 'tookan', 'order_type', 'others']
const configHideList = ['search_by_address', 'stripe_connect_sandbox']

/**
 * Component to manage Settings page behavior without UI component
 */
export const Settings = (props) => {
  const {
    UIComponent,
    settingsType
  } = props

  const [{ token, loading }] = useSession()
  const [ordering] = useApi()
  const [categoryList, setCategoryList] = useState({ categories: [], loading: false, error: null })
  const [isUpdateConfig, setIsUpdateConfig] = useState(false)
  const [parentId, setParentId] = useState(null)

  /**
   * Method to update the category
   */
  const handleUpdateCategoryList = (categories) => {
    setCategoryList({ ...categoryList, categories: categories })
    setIsUpdateConfig(true)
  }

  /**
   * Method to get parent categoryid
   */
  const getParentCategory = async () => {
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
      filterConditons.push({ attribute: 'key', value: settingsType })

      const functionFetch = `${ordering.root}/config_categories?where=${JSON.stringify(filterConditons)}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()

      if (!error && result.length > 0) {
        setParentId(result[0].id)
      } else {
        setCategoryList({
          ...categoryList,
          loading: false,
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
      filterConditons.push({ attribute: 'parent_category_id', value: parseInt(parentId) })

      const functionFetch = `${ordering.root}/config_categories?orderBy=id&where=${JSON.stringify(filterConditons)}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()

      if (!error) {
        const _result = result.filter(setting => !categoryHideList.includes(setting.key)).map(setting => {
          const configs = setting.configs?.filter(config => !configHideList.includes(config.key)).sort((a, b) => (a.rank * 1 > b.rank * 1) ? 1 : -1)
          return {
            ...setting,
            configs: [...configs]
          }
        })
        setCategoryList({
          ...categoryList,
          loading: false,
          categories: _result
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
    getParentCategory()
  }, [])

  useEffect(() => {
    if (parentId) getCagegories(parentId)
  }, [parentId])

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
   * Number to idenity setting group
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
