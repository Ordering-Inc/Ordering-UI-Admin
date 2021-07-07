import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession, useLanguage } from 'ordering-components-admin'

export const BusinessSpreadSheet = (props) => {
  const {
    UIComponent,
    categoryState,
    businessState,
    setBusinessState,
    categoryId,
    categorySelected
  } = props
  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [formState, setFormState] = useState({ products: null, loading: false, result: { error: false } })
  const [removingWithSupr, setRemovingWithSupr] = useState(false)
  const [undo, setUndo] = useState(false)

  /**
   * Method to remove a row from spreadSheet table
   * @param {Number} row Number of selected row
   * @param {Number} amount Count of selected row
   * @param {Array} datarows Numbers of selected row
   * @param {Object} hotTableObj Object for spreadSheet mode table
   */
  const handleRowRemove = (row, amount, dataRows, hotTableObj) => {
    const toRemove = []
    for (const dataRow of dataRows) {
      toRemove.push(hotTableObj.getSourceDataAtRow(dataRow).id)
    }
    if (removingWithSupr) {
      setRemovingWithSupr(false)
      deleteProducts(toRemove)
      return
    }
    deleteProducts(toRemove)
  }

  const handleItemChange = (changeItems, accionHanson, hotTableObj) => {
    if (undo) {
      setUndo(false)
      return
    }
    if (accionHanson !== 'loadData') {
      changeItems = !changeItems ? [] : changeItems
      const changes = []
      const itemToRemove = []
      const itemToUpdate = []
      const itemToAdd = []
      const id = categoryId || categorySelected.id
      changeItems.forEach(item => {
        const error = {
          name: false,
          price: false
        }
        if (item[2] !== item[3]) {
          let valid = true
          for (let j = 0; j < changes.length; j++) {
            if (changes[j] === item[0]) {
              valid = false
              break
            }
          }
          if (valid) {
            changes.push(item[0])
            var row = hotTableObj.getSourceDataAtRow(item[0])
            hotTableObj.validateRows(changes, function (res) { })
            if (!row.name) {
              error.name = true
              setFormState({
                ...formState,
                result: {
                  error: true,
                  result: [t('NAME_REQUIRED', 'Name Required')]
                }
              })
            }
            if (row.price && typeof (row.price) !== 'number') {
              var price = parseFloat(row.price)
              if (!price) {
                error.price = true
                setFormState({
                  ...formState,
                  result: {
                    error: true,
                    result: [t('PRODUCT_PRICE_NUMBER')]
                  }
                })
              } else row.price = price
            }
            if (row.quantity && typeof (row.quantity) !== 'number' && row.quantity !== 'NA') {
              const quantity = parseFloat(row.quantity)
              if (!quantity) {
                error.quantity = true
              } else row.quantity = quantity
            }
            if (!row.id) {
              if (!(error.price || error.name || error.quantity)) {
                const _add = {
                  name: row.name,
                  description: row.description ? row.description : ' ',
                  price: row.price ? row.price : 0,
                  category_id: id,
                  business_id: businessState?.business.id
                }
                if ((row.quantity && row.quantity !== 'NA') || row.quantity === 0) {
                  _add.quantity = row.quantity
                  _add.inventoried = true
                }
                itemToAdd.push(_add)
              }
            } else {
              if (!row.name && !row.price && !row.description) {
                row.row = item[0]
                itemToRemove.push(row)
              } else {
                if (!(error.price || error.name || error.quantity)) {
                  if (!row.description) row.description = null
                  var _update = {
                    id: row.id,
                    name: row.name,
                    description: row.description ? row.description : ' ',
                    price: row.price ? row.price : 0,
                    category_id: id,
                    business_id: businessState?.business.id
                  }
                  if ((row.quantity && row.quantity !== 'NA') || row.quantity === 0) {
                    _update.quantity = row.quantity
                    _update.inventoried = true
                  }
                  itemToUpdate.push(_update)
                }
              }
            }
          }
        }
      })

      if (itemToAdd.length > 0) {
        console.log(itemToAdd, 'this is itemToAdd')
        editProducts(itemToAdd, true, hotTableObj)
      }
      if (itemToUpdate.length > 0) {
        console.log(itemToUpdate, 'this is itemToUpdate')
        editProducts(itemToUpdate, false, hotTableObj)
      }

      if (itemToRemove.length > 0) {
        hotTableObj.alter('remove_row', itemToRemove[0].row, itemToRemove.length)
        setRemovingWithSupr(true)
      }
    }
  }

  const editProducts = async (params, isPost, hotTableObj) => {
    if (loading) return
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: isPost ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ products: JSON.stringify(params) })
      }

      const functionFetch = `${ordering.root}/bulks/products`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: isPost ? t('PRODUCT_ADD', 'Product added') : t('PRODUCT_ADD', 'Product updated')
          }
        })
        getProductsByCategoryId(hotTableObj)
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
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
   * Method to edit a product
   */
  const getProductsByCategoryId = async (hotTableObj) => {
    if (loading) return
    try {
      const id = categoryId || categorySelected.id
      const params = {
        business_id: businessState?.business.id,
        category_id: parseInt(id)
      }
      const { content: { error, result } } = await ordering.businesses(businessState?.business.id).categories(parseInt(id)).products().parameters(params).get()
      if (!error) {
        setFormState({
          ...formState,
          products: result,
          loading: false,
          result: {
            error: false,
            result: t('PRODUCT_SAVED', 'Product saved')
          }
        })
        if (setBusinessState) {
          const _categories = businessState.business.categories.map(item => {
            if (parseInt(item.id) === parseInt(id)) {
              return {
                ...item,
                products: result
              }
            }
            return item
          })
          setBusinessState({
            ...businessState,
            business: { ...businessState.business, categories: _categories }
          })
        }
        hotTableObj.loadData(result)
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
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

  const deleteProducts = async (params) => {
    if (loading) return
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ products: JSON.stringify(params) })
      }

      const functionFetch = `${ordering.root}/bulks/products`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: t('PRODUCT_DELETE', 'Product deleted')
          }
        })
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
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

  useEffect(() => {
    setFormState({ ...formState, products: categoryState.products })
  }, [categoryState?.products])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleItemChange={handleItemChange}
          spreadSheetState={formState}
          handleRowRemove={handleRowRemove}
        />
      )}
    </>
  )
}

BusinessSpreadSheet.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before single business card
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after single business card
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessSpreadSheet.defaultProps = {}
