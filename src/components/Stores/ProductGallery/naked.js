import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

/**
 * Component to manage product extras behavior without UI component
 */
export const ProductGallery = (props) => {
  const {
    UIComponent,
    business,
    categoryId,
    product,
    handleSuccessUpdate
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [productGalleryState, setProductGalleryState] = useState({ loading: false, gallery: [], photos: [], videos: [], error: null })
  const [changesState, setChangesState] = useState({ changes: {}, itemId: null, loading: false, error: null })

  /**
   * Method to get the product gallery from API
   */
  const getProductGallery = async () => {
    try {
      setProductGalleryState({ ...productGalleryState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/categories/${categoryId}/products/${product.id}/gallery`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const photos = content.result.filter(item => item.type === 1)
        const videos = content.result.filter(item => item.type === 2)
        setProductGalleryState({
          ...productGalleryState,
          loading: false,
          gallery: content.result,
          photos: photos,
          videos: videos
        })
      } else {
        setProductGalleryState({
          ...productGalleryState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setProductGalleryState({
        ...productGalleryState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to add new product gallery from API
   * @param {Object} params
   */
  const handleAddProductGalleryItem = async (params) => {
    try {
      setChangesState({ ...changesState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/categories/${categoryId}/products/${product.id}/gallery`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({ ...changesState, loading: false, changes: {} })
        showToast(ToastType.Success, t('PRODUCT_GALLERY_ITEM_ADDED', 'Product gallery item added'))
        const gallery = [...productGalleryState.gallery, content.result]
        if (content.result?.type === 1) {
          setProductGalleryState({
            ...productGalleryState,
            gallery: gallery,
            photos: [...productGalleryState.photos, content.result]
          })
        }
        if (content.result?.type === 2) {
          setProductGalleryState({
            ...productGalleryState,
            gallery: gallery,
            videos: [...productGalleryState.videos, content.result]
          })
        }
        const updatedProduct = { ...product, gallery: gallery }
        handleSuccessUpdate && handleSuccessUpdate(updatedProduct)
      } else {
        setChangesState({ ...changesState, loading: false, error: content.result })
      }
    } catch (err) {
      setChangesState({ ...changesState, loading: false, error: [err.message] })
    }
  }

  /**
   * Medthod to update the product gallery from API
   */
  const handleUpdateProductGallery = async () => {
    try {
      setChangesState({ ...changesState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changesState?.changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/categories/${categoryId}/products/${product.id}/gallery/${changesState?.itemId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({ ...changesState, loading: false, changes: {} })
        const gallery = productGalleryState.gallery.filter(item => {
          if (item.id === content.result.id) {
            Object.assign(item, content.result)
          }
          return true
        })
        if (content.result?.type === 1) {
          const photos = productGalleryState.photos.filter(item => {
            if (item.id === content.result.id) {
              Object.assign(item, content.result)
            }
            return true
          })
          setProductGalleryState({
            ...setProductGalleryState,
            gallery: gallery,
            photos: photos
          })
        }
        if (content.result?.type === 2) {
          const videos = productGalleryState.videos.filter(item => {
            if (item.id === content.result.id) {
              Object.assign(item, content.result)
            }
            return true
          })
          setProductGalleryState({
            ...setProductGalleryState,
            gallery: gallery,
            videos: videos
          })
        }
        const updatedProduct = { ...product, gallery: gallery }
        handleSuccessUpdate && handleSuccessUpdate(updatedProduct)

        showToast(ToastType.Success, t('PRODUCT_GALLERY_ITEM_SAVED', 'Product gallery item saved'))
      } else {
        setChangesState({ ...changesState, loading: false, error: content.result })
      }
    } catch (err) {
      setChangesState({ ...changesState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete the product gallery item from API
   * @param {Number} itemId
   * @param {Number} type if photo or video
   */
  const handleDeteteProductGalleryItem = async (itemId, type) => {
    try {
      setChangesState({ ...changesState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/categories/${categoryId}/products/${product.id}/gallery/${itemId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setChangesState({ ...changesState, loading: false, changes: {} })
        const gallery = productGalleryState?.gallery.filter(item => item.id !== itemId)
        if (type === 1) {
          const photos = productGalleryState?.photos.filter(photo => photo.id !== itemId)
          setProductGalleryState({
            ...productGalleryState,
            gallery: gallery,
            photos: photos
          })
        }
        if (type === 2) {
          const videos = productGalleryState?.videos.filter(video => video.id !== itemId)
          setProductGalleryState({
            ...productGalleryState,
            gallery: gallery,
            videos: videos
          })
        }
        const updatedProduct = { ...product, gallery: gallery }
        handleSuccessUpdate && handleSuccessUpdate(updatedProduct)

        showToast(ToastType.Success, t('PRODUCT_GALLERY_ITEM_DELETED', 'Product gallery item deleted'))
      } else {
        setChangesState({ ...changesState, loading: false, error: content.result })
      }
    } catch (err) {
      setChangesState({ ...changesState, loading: false, error: [err.message] })
    }
  }

  /**
   * Update product photo data
   * @param {File} file Image to change business photo
   */
  const handleChangeImage = (file, itemId) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setChangesState({
        ...changesState,
        changes: {
          ...changesState?.changes,
          file: reader.result
        },
        itemId: itemId
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  let timeout = null
  const handleChangeInput = (e, itemId) => {
    if (!itemId) {
      handleChangeState(e, itemId)
      return
    }
    e.persist()
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      handleChangeState(e, itemId)
    }, 1000)
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeState = (e, itemId) => {
    setChangesState({
      ...changesState,
      changes: {
        ...changesState.changes,
        [e.target.name]: e.target.value
      },
      itemId: itemId
    })
  }

  /**
   * Method to add new product from changes
   */
  const handleAddGalleryProduct = () => {
    const params = {
      ...changesState.changes,
      type: 1
    }
    handleAddProductGalleryItem(params)
  }

  useEffect(() => {
    if (Object.keys(changesState?.changes).length === 0 || !changesState?.itemId) return
    handleUpdateProductGallery()
  }, [changesState?.changes])

  useEffect(() => {
    if (product?.gallery) {
      const photos = product?.gallery.filter(item => item.type === 1)
      const videos = product?.gallery.filter(item => item.type === 2)
      setProductGalleryState({
        ...productGalleryState,
        loading: false,
        gallery: product.gallery,
        photos: photos,
        videos: videos
      })
    } else {
      getProductGallery()
    }
  }, [product])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productGalleryState={productGalleryState}
          changesState={changesState}
          handleChangeImage={handleChangeImage}
          handleChangeInput={handleChangeInput}
          handleAddGalleryProduct={handleAddGalleryProduct}
          handleDeteteProductGalleryItem={handleDeteteProductGalleryItem}
        />
      )}
    </>
  )
}

ProductGallery.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before product gallery
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product gallery
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product gallery
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product gallery
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductGallery.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
