import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessProductListing = (props) => {
  const {
    isSearchByName,
    isSearchByDescription,
    slug,
    categoryId,
    productId,
    isInitialRender,
    ordering,
    UIComponent
  } = props

  const [categorySelected, setCategorySelected] = useState(null)
  const [searchValue, setSearchValue] = useState(null)
  const [businessState, setBusinessState] = useState({ business: {}, menus: null, loading: true, error: null })
  const [categoriesState, setCategoriesState] = useState({})
  const [requestsState, setRequestsState] = useState({})
  const [productModal, setProductModal] = useState({ product: null, loading: false, error: null })

  const categoryStateDefault = {
    loading: true,
    pagination: { currentPage: 0, pageSize: 20, totalItems: null, totalPages: 0, nextPageItems: 10 },
    products: []
  }

  const [categoryState, setCategoryState] = useState(categoryStateDefault)
  const [errors, setErrors] = useState(null)
  const [errorQuantityProducts, setErrorQuantityProducts] = useState(false)

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  const handleChangeCategory = (e, category) => {
    const isInvalid = e.target.closest('.business_enable_control') || e.target.closest('.business_actions')
    if (isInvalid || category?.id === categorySelected?.id) return
    setCategorySelected(category)
  }

  /**
   * Change search value
   * @param {string} search search string
   */
  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }

  const isMatchSearch = (name, description) => {
    if (!searchValue) return true
    return (name && (name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName)) ||
      (description && (description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription))
  }

  const getProducts = async (newFetch) => {
    if (!businessState?.business?.lazy_load_products_recommended) {
      const categoryState = {
        ...categoryStateDefault,
        loading: false
      }
      if (categorySelected) {
        const productsFiltered = businessState?.business?.categories?.find(
          category => category.id === categorySelected.id
        )?.products?.filter(
          product => isMatchSearch(product.name, product.description)
        )
        categoryState.products = productsFiltered || []
      } else {
        const productsFiltered = businessState?.business?.categories?.reduce(
          (products, category) => {
            if (category.products) {
              return [...products, ...category.products]
            }
            return [...products]
          }
          , []
        ).filter(
          product => isMatchSearch(product.name, product.description)
        )
        categoryState.products = productsFiltered || []
      }

      setCategoryState({ ...categoryState })
      return
    }

    const categoryKey = searchValue
      ? 'search'
      : categorySelected.id === 'featured'
        ? 'featured'
        : categorySelected.id
          ? `categoryId:${categorySelected.id}`
          : 'all'

    const categoryState = categoriesState[categoryKey] || categoryStateDefault
    const pagination = categoryState.pagination
    if (!newFetch && pagination.currentPage > 0 && pagination.currentPage === pagination.totalPages) {
      setCategoryState({ ...categoryState, loading: false })
      return
    }

    setCategoryState({ ...categoryState, loading: true })

    const parameters = {
      page: newFetch ? 1 : pagination.currentPage + 1,
      page_size: pagination.pageSize
    }

    let where = null
    const searchConditions = []
    if (searchValue) {
      if (isSearchByName) {
        searchConditions.push(
          {
            attribute: 'name',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
      if (isSearchByDescription) {
        searchConditions.push(
          {
            attribute: 'description',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
    }

    where = {
      conditions: searchConditions,
      conector: 'OR'
    }

    try {
      const functionFetch = categorySelected.id && categorySelected.id !== 'featured'
        ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products()
        : ordering.businesses(businessState.business.id).products()
      const source = {}
      requestsState.products = source
      setRequestsState({ ...requestsState })
      const productEndpoint = where.conditions.length > 0
        ? functionFetch.parameters(parameters).where(where)
        : functionFetch.parameters(parameters)
      const { content: { error, result, pagination } } = await productEndpoint.get({ cancelToken: source })
      if (!error) {
        const newcategoryState = {
          pagination: {
            ...categoryState.pagination,
            currentPage: pagination.current_page,
            totalItems: pagination.total,
            totalPages: pagination.total_pages
          },
          loading: false,
          products: newFetch ? [...result] : [...categoryState.products, ...result]
        }

        categoriesState[categoryKey] = newcategoryState
        setCategoryState({ ...newcategoryState })
        setCategoriesState({ ...categoriesState })
      } else {
        setErrors(result)
      }
    } catch (err) {
      setErrors([err.message])
    }
  }

  const getProduct = async () => {
    if (categoryId && productId && businessState.business.id) {
      try {
        setProductModal({
          ...productModal,
          loading: true
        })
        const source = {}
        requestsState.product = source

        const { content: { result } } = await ordering
          .businesses(businessState.business.id)
          .categories(categoryId)
          .products(productId)
          .get({ cancelToken: source })
        const product = Array.isArray(result) ? null : result
        setProductModal({
          ...productModal,
          product,
          loading: false
        })
      } catch (e) {
        setProductModal({
          ...productModal,
          loading: false,
          error: [e]
        })
      }
    }
  }

  useEffect(() => {
    if (isInitialRender) {
      getProduct()
    }
  }, [JSON.stringify(businessState.business?.id), isInitialRender])

  const getBusiness = async () => {
    try {
      setBusinessState({ ...businessState, loading: true })
      const source = {}
      requestsState.business = source
      setRequestsState({ ...requestsState })

      const { content: { result } } = await ordering.businesses(slug).asDashboard().get()

      if (!result?.categories || result?.categories?.length === 0) {
        setErrorQuantityProducts(true)
      }

      setBusinessState({
        ...businessState,
        business: result,
        loading: false
      })
    } catch (err) {
      setBusinessState({
        ...businessState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to update the business
   */
  const handleUpdateBusinessState = (result) => {
    const business = { ...businessState?.business }
    Object.assign(business, result)
    setBusinessState({
      ...businessState,
      business: business
    })
  }

  useEffect(() => {
    if (!businessState.loading && categorySelected) {
      getProducts(true)
    } else if (businessState?.business?.categories) {
      setCategorySelected(businessState?.business?.categories[0])
    }
  }, [businessState])

  useEffect(() => {
    if (searchValue !== null) getProducts(!!searchValue)
  }, [searchValue])

  useEffect(() => {
    getProducts(!!searchValue)
  }, [categorySelected?.id])

  useEffect(() => {
    getBusiness()
  }, [slug])

  /**
   * Cancel business request
   */
  useEffect(() => {
    const request = requestsState.business
    return () => {
      request && request.cancel && request.cancel()
    }
  }, [requestsState.business])

  /**
   * Cancel products request on unmount and pagination
   */
  useEffect(() => {
    const request = requestsState.products
    return () => {
      request && request.cancel && request.cancel()
    }
  }, [requestsState.products])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          errors={errors}
          categorySelected={categorySelected}
          searchValue={searchValue}
          categoryState={categoryState}
          businessState={businessState}
          productModal={productModal}
          errorQuantityProducts={errorQuantityProducts}
          handleChangeCategory={handleChangeCategory}
          handleChangeSearch={handleChangeSearch}
          getNextProducts={getProducts}
          setCategorySelected={setCategorySelected}
          setBusinessState={setBusinessState}
          handleUpdateBusinessState={handleUpdateBusinessState}
          updateProductModal={(val) => setProductModal({ ...productModal, product: val })}
        />
      )}
    </>
  )
}

BusinessProductListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * true, flag to decide search parmeter
   */
  isSearchByName: PropTypes.bool,
  /**
   * true, flag to decide search parmeter
   */
  isSearchByDescription: PropTypes.bool,
  /**
   * Slug from Store
   */
  slug: PropTypes.string,
  /**
   * True, flag to make initial API call
   */
  isInitialRender: PropTypes.bool

}

BusinessProductListing.defaultProps = {
}
