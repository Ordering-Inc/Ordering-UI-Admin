import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
import { useApi, useSession } from 'ordering-components-admin'

export const ReportsBrandFilter = (props) => {
  const {
    UIComponent,
    filterList,
    handleChangeFilterList,
    propsToFetch,
    onClose
  } = props

  const [ordering] = useApi()

  /**
   * This state save the brand type info from API
   */
  const [brandList, setBrandList] = useState({ loading: true, error: null, brands: [], pagination: null })
  const [brandIds, setBrandIds] = useState(null)
  const [isAllCheck, setIsAllCheck] = useState(false)
  const [{ token, loading }] = useSession()

  /**
   * Method to change brand id
   * @param {number} id
   */
  const handleChangeBrandId = (id) => {
    const found = brandIds?.find(brandId => brandId === id)
    if (found) {
      const _brandIds = brandIds?.filter(brandId => brandId !== id)
      setBrandIds(_brandIds)
      setIsAllCheck(false)
    } else {
      const _brandIds = brandIds ? [...brandIds] : []
      _brandIds.push(id)
      if (_brandIds.length === brandList?.brands.length) setIsAllCheck(true)
      setBrandIds(_brandIds)
    }
  }

  /**
   * Method to change filter list
   */
  const handleClickFilterButton = () => {
    const _brandIds = brandIds ? [...brandIds] : null
    handleChangeFilterList({ ...filterList, franchises_id: _brandIds })
    onClose && onClose()
  }

  /**
   * Method to change all check status
   */
  const handleChangeAllCheck = () => {
    if (isAllCheck) {
      setBrandIds(null)
    } else {
      const _brandIds = []
      for (const brand of brandList.brands) {
        _brandIds.push(brand.id)
      }
      setBrandIds(_brandIds)
    }
    setIsAllCheck(!isAllCheck)
  }

  /**
   * Method to get brand list
   */
  const getBrands = async () => {
    if (loading) return
    try {
      setBrandList({ ...brandList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/franchises?params=${propsToFetch}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result, pagination } = await response.json()
      if (!error) {
        const availableBrands = result?.filter(brand => brand.enabled)
        setBrandList({
          ...brandList,
          loading: false,
          brands: availableBrands,
          pagination
        })
      } else {
        setBrandList({
          ...brandList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setBrandList({
        ...brandList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    getBrands()
    return controller.abort()
  }, [])

  useEffect(() => {
    if (brandList?.brands?.length === 0) return
    const _brandIds = brandList.brands.reduce((prev, cur) => [...prev, cur.id], [])
    setBrandIds([...filterList?.franchises_id || _brandIds])
    if (!filterList?.franchises_id || filterList?.franchises_id?.length === brandList?.brands.length) setIsAllCheck(true)
  }, [brandList?.brands])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          brandList={brandList}
          brandIds={brandIds}
          handleChangeBrandId={handleChangeBrandId}
          handleClickFilterButton={handleClickFilterButton}
          isAllCheck={isAllCheck}
          handleChangeAllCheck={handleChangeAllCheck}
        />
      )}
    </>
  )
}

ReportsBrandFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * filterList, this must be contains an object with filter list
   */
  filterList: PropTypes.object,
  /**
  * Method to change filter list
  */
  handleChangeFilterList: PropTypes.func,
  /**
  * Method to close brand filter Modal
  */
  onClose: PropTypes.func,
  /**
   * Array of brand props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before brand type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after brand type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before brand type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after brand type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ReportsBrandFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'logo', 'description', 'header', 'enabled', 'created_at', 'updated_at']
}
