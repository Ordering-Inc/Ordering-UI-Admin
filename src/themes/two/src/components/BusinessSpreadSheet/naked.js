import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession, useLanguage } from 'ordering-components-admin'

export const BusinessSpreadSheet = (props) => {
  const {
    UIComponent,
    categoryState,
    business,
    handleUpdateBusinessState,
    categoryId,
    categorySelected
  } = props
  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [formState, setFormState] = useState({ products: null, loading: false, result: { error: false } })
  const [removingWithSupr, setRemovingWithSupr] = useState(false)
  const [undo, setUndo] = useState(false)
  const [curCell, setCurCell] = useState({
    row: -1,
    col: -1
  })

  /**
   * Method to remove a row from spreadSheet table
   * @param {Number} row Number of selected row
   * @param {Number} col Number of selected col
   * @param {Number} row1 Number of selected row
   * @param {Number} col1 Number of selected col
   * @param {Object} hotTableObj Object for spreadSheet mode table
   */
  const handleAfterSectionEnd = (row, col, row1, col1, hotTableObj) => {
    if ((curCell.row === row && curCell.col === col) || (row !== row1 || col !== col1)) return
    curCell.row = row
    curCell.col = col
    setCurCell({
      row: row,
      col: col
    })
    hotTableObj.deselectCell()
    hotTableObj.selectCell(row, col)
  }

  const handleoutsideClickDeselects = () => {
    setCurCell({
      row: -1,
      col: -1
    })
    return false
  }

  /**
   * Method to remove a row from spreadSheet table
   * @param {Number} row Number of selected row
   * @param {Number} amount Count of selected row
   * @param {Array} datarows Numbers of selected row
   * @param {Object} hotTableObj Object for spreadSheet mode table
   */
  const handleRowRemove = (row, amount, dataRows, hotTableObj) => {
    if (!hotTableObj) return
    const toRemove = []
    for (const dataRow of dataRows) {
      toRemove.push(hotTableObj?.getSourceDataAtRow(dataRow).id)
    }
    if (removingWithSupr) {
      setRemovingWithSupr(false)
    }
    setTimeout(() => {
      deleteProducts(toRemove)
    }, 1)
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
            const row = hotTableObj.getSourceDataAtRow(item[0])
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
              const price = parseFloat(row.price)
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
                  business_id: business?.id
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
                  const _update = {
                    id: row.id,
                    name: row.name,
                    description: row.description ? row.description : ' ',
                    price: row.price ? row.price : 0,
                    category_id: id,
                    business_id: business?.id
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
        editProducts(itemToAdd, true, hotTableObj)
      }

      if (itemToUpdate.length > 0) {
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
        getProductsByCategoryId()
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
  const getProductsByCategoryId = async () => {
    if (loading) return
    try {
      const id = categoryId || categorySelected.id
      const params = {
        business_id: business?.id,
        category_id: parseInt(id)
      }
      const { content: { error, result } } = await ordering.businesses(business?.id).categories(parseInt(id)).products().parameters(params).get()
      if (!error) {
        if (handleUpdateBusinessState) {
          const _categories = business?.categories.map(item => {
            if (parseInt(item.id) === parseInt(id)) {
              return {
                ...item,
                products: result
              }
            }
            return item
          })
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
        setFormState({
          ...formState,
          products: result,
          loading: false,
          result: {
            error: false,
            result: t('PRODUCT_SAVED', 'Product saved')
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
        getProductsByCategoryId()
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
    const spreadProducts = []
    for (const product of categoryState.products) {
      spreadProducts.push(product)
    }
    setFormState({ ...formState, products: spreadProducts })
  }, [categoryState?.products])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleItemChange={handleItemChange}
          spreadSheetState={formState}
          handleRowRemove={handleRowRemove}
          handleAfterSectionEnd={handleAfterSectionEnd}
          handleoutsideClickDeselects={handleoutsideClickDeselects}
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
   * Object for a business
   */
  businessState: PropTypes.object,
  /**
    * Function to set a business state
    */
  setBusinessState: PropTypes.func,
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
