import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useApi, useSession, useToast, ToastType, useLanguage } from 'ordering-components-admin'

/**
 * Component to manage BusinessBrandListing behavior without UI component
 */
export const BusinessBrandListing = (props) => {
  const {
    UIComponent
  } = props

  // const [ordering] = useApi()
  const [, t] = useLanguage()
  // const [{ loading }] = useSession()
  const [, { showToast }] = useToast()
  const [searchValue, setSearchValue] = useState(null)
  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const [brandListState, setBrandListState] = useState({ loading: false, brands: [], error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: null } })

  /**
   * Method to update brand list
   */
  const handleUpdateBrandList = (brands) => {
    setBrandListState({ ...brandListState, brands: brands })
  }

  const handleChangeState = (id, type, value) => {
    const changes = {
      [type]: value
    }
    updateBrand(id, changes)
  }

  const handleDeleteBrand = (id) => {
    deleteBrand(id)
  }

  /**
   * Method to delete a brand
   */
  const deleteBrand = async (id) => {
    try {
      setFormState({ ...formState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/franchises/${id}`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          changes: {},
          result: content,
          loading: false
        })
        if (handleUpdateBrandList) {
          const _brands = brandListState?.brands.filter(brand => brand.id !== id)
          handleUpdateBrandList(_brands)
        }
        showToast(ToastType.Success, t('BRAND_DELETED', 'Brand deleted'))
      } else {
        setFormState({
          ...formState,
          result: content,
          loading: false
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to update a brand
   */
  const updateBrand = async (id, changes) => {
    try {
      setFormState({ ...formState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/franchises/${id}`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          changes: {},
          result: content,
          loading: false
        })
        if (handleUpdateBrandList) {
          const _brands = brandListState?.brands.map(item => {
            if (item.id === content.result.id) {
              return {
                ...item,
                name: content.result.name,
                logo: content.result.logo,
                enabled: content.result.enabled
              }
            }
            return item
          })
          handleUpdateBrandList(_brands)
        }
        showToast(ToastType.Success, t('BRAND_UPDATED', 'Brand updated'))
      } else {
        setFormState({
          ...formState,
          result: content,
          loading: false
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to get brand list
   */
  const getBrands = async () => {
    if (loading) return
    try {
      setBrandListState({ ...brandListState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/franchises`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setBrandListState({
          ...brandListState,
          loading: false,
          brands: result
        })
      } else {
        setBrandListState({
          ...brandListState,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setBrandListState({
        ...brandListState,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getBrands()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          onSearch={setSearchValue}
          handleUpdateBrandList={handleUpdateBrandList}
          brandListState={brandListState}
          handleChangeState={handleChangeState}
          brandFormState={formState}
          handleDeleteBrand={handleDeleteBrand}
        />
      )}
    </>
  )
}

BusinessBrandListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessBrandListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
