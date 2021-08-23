import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import {
  useSession,
  useApi,
  useToast,
  ToastType,
  useLanguage
} from 'ordering-components-admin'

export const OrderingProducts = (props) => {
  const {
    UIComponent,
    propsToFetch
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [pagesListState, setPagesListState] = useState({ pages: [], loading: false, error: null })
  const [editPageId, setEditPageId] = useState(null)
  const [changeState, setChangeState] = useState({ changes: {}, loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get the pages from API
   */
  const getPages = async () => {
    try {
      setPagesListState({ ...pagesListState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/pages?params=${propsToFetch.toString()}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setPagesListState({ pages: content.result, loading: false })
      }
    } catch (err) {
      setPagesListState({ ...pagesListState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the page from API
   */
  const handleUpdatePage = async () => {
    try {
      const _changes = { ...changeState.changes }
      let changes = {}
      for (const key in _changes) {
        if (_changes[key] !== '') {
          changes = { ...changes, [key]: _changes[key] }
        }
      }
      if (Object.keys(changes).length === 0) return
      showToast(ToastType.Info, t('LOADING', 'Loading'))

      setChangeState({ ...changeState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changeState?.changes)
      }
      const response = await fetch(`${ordering.root}/pages/${editPageId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const updatedPages = pagesListState.pages.filter(page => {
          if (page.id === editPageId) {
            page.name = changeState.changes?.name ? changeState.changes?.name : page?.name
            page.enabled = changeState.changes?.enabled ?? page?.enabled
          }
          return page
        })
        handleUpdatePageList(updatedPages)
        setChangeState({ ...changeState, loading: false, changes: {} })
        showToast(ToastType.Success, t('PAGE_SAVED', 'Page saved'))
      } else {
        setChangeState({
          ...changeState,
          result: { error: true, result: content.result },
          loading: false
        })
      }
    } catch (err) {
      setChangeState({ ...changeState, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete the page from API
   */
  const handleDeletePage = async (pageId) => {
    try {
      setActionState({ ...actionState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/pages/${pageId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const updatedPages = pagesListState.pages.filter(page => page.id !== pageId)
        handleUpdatePageList(updatedPages)
        showToast(ToastType.Success, t('PAGE_DELETED', 'Page Deleted'))
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to control the change state
   * @param {number} id page id
   * @param {string} field name to change
   * @param {string || boolean} value
   */
  let timeout = null
  const handleChangeState = (id, field, value) => {
    setEditPageId(id)
    if (field === 'name') {
      clearTimeout(timeout)
      timeout = setTimeout(function () {
        setChangeState({
          ...changeState,
          changes: {
            [field]: value
          }
        })
      }, 1000)
    } else {
      setChangeState({
        ...changeState,
        changes: {
          [field]: value
        }
      })
    }
  }

  const handleUpdatePageList = (updatedPages) => {
    setPagesListState({ ...pagesListState, pages: updatedPages })
  }

  useEffect(() => {
    if (changeState.loading || Object.keys(changeState?.changes).length === 0) return
    handleUpdatePage()
  }, [changeState])

  useEffect(() => {
    getPages()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          pagesListState={pagesListState}
          handleChangeState={handleChangeState}
          handleUpdatePageList={handleUpdatePageList}
          handleDeletePage={handleDeletePage}
        />
      )}
    </>
  )
}

OrderingProducts.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before page list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after page list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before page list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after page list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderingProducts.defaultProps = {
  propsToFetch: ['name', 'enabled'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
