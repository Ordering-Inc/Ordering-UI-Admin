import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession } from 'ordering-components-admin'

export const DashboardBusinessList = (props) => {
  const {
    UIComponent,
    paginationSettings,
    searchValue,
    propsToFetch,
    initialPageSize,
    loadMorePageSize,
    isSearchByBusinessId,
    isSearchByBusinessEmail,
    isSearchByBusinessPhone
  } = props

  const [ordering] = useApi()
  const [session] = useSession()

  const [businessList, setBusinessList] = useState({ loading: false, error: null, businesses: [] })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })

  const [selectedBusinessActiveState, setSelectedBusinessActiveState] = useState(true)
  const [businessTypeSelected, setBusinessTypeSelected] = useState(null)
  
  /**
   * Method to get businesses from API
   * @param {number, number} pageSize page
   */
  const getBusinesses = async (pageSize, page) => {
    let where = []
    const conditions = []
    const options = {
      query: {
        page: page,
        page_size: pageSize
      }
    }

    conditions.push({ attribute: 'enabled', value: selectedBusinessActiveState })

    if (businessTypeSelected) {
      conditions.push({
        attribute: 'types',
        conditions: [{
          attribute: 'id',
          value: businessTypeSelected
        }]
      })
    }

    if (searchValue) {
      const searchConditions = []
      if (isSearchByBusinessId) {
        searchConditions.push(
          {
            attribute: 'id',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
      if (isSearchByBusinessEmail) {
        searchConditions.push(
          {
            attribute: 'email',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }

      if (isSearchByBusinessPhone) {
        searchConditions.push(
          {
            attribute: 'phone',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
      conditions.push({
        conector: 'OR',
        conditions: searchConditions
      })
    }

    if (conditions.length) {
      where = {
        conditions,
        conector: 'AND'
      }
    }

    const functionFetch = ordering
      .setAccessToken(session.token)
      .businesses()
      .asDashboard()
      .select(propsToFetch)
      .where(where)

    return await functionFetch.get(options)
  }

  /**
   * Method to load businesses
   */
  const loadBusinesses = async () => {
    if (!session.token) return
    try {
      setBusinessList({ ...businessList, loading: true })
      const response = await getBusinesses(initialPageSize, 1)

      setBusinessList({
        loading: false,
        businesses: response.content.error ? [] : response.content.result,
        error: response.content.error ? response.content.result: null
      })

      if (!response.content.error) {
        setPagination({
          currentPage: initialPageSize / loadMorePageSize,
          pageSize: response.content.pagination.page_size,
          totalPages: response.content.pagination.total_pages,
          total: response.content.pagination.total,
          from: response.content.pagination.from,
          to: response.content.pagination.to
        })
      }
    } catch (err) {
      if (err?.constructor?.name !== 'Cancel') {
        setBusinessList({ ...businessList, loading: false, error : [err.message] })
      }
    }
  }

  /**
   * Method to get businesses more
   */
  const loadMoreBusinesses = async () => {
    setBusinessList({ ...businessList, loading: true })
    try {
      const response = await getBusinesses(loadMorePageSize, pagination.currentPage + 1)
      setBusinessList({
        loading: false,
        businesses: response.content.error ? businessList.businesses : businessList.businesses.concat(response.content.result),
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size,
          totalPages: response.content.pagination.total_pages,
          total: response.content.pagination.total,
          from: response.content.pagination.from,
          to: response.content.pagination.to
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinessList({ ...businessList, loading: false, error: [err.message] })
      }
    }
  }

  /**
   * Method to change user active state for filter
   */
  const handleChangeBusinessActiveState = () => {
    setSelectedBusinessActiveState(!selectedBusinessActiveState)
  }

  /**
   * Change business type
   * @param {object} businessType Business type
   */
     const handleChangeBusinessType = (businessType) => {
      if (businessType !== businessTypeSelected) {
        setBusinessList({
          ...businessList,
          businesses: [],
          loading: true
        })
        setBusinessTypeSelected(businessType)
      }
    }

  /**
   * Listening session
   */
  useEffect(() => {
    if (props.businesses) {
      setBusinessList({
        ...businessList,
        businesses
      })
    } else {
      loadBusinesses()
    }
  }, [session, searchValue, selectedBusinessActiveState, businessTypeSelected])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessList={businessList}
            pagination={pagination}
            selectedBusinessActiveState={selectedBusinessActiveState}
            loadMoreBusinesses={loadMoreBusinesses}
            handleChangeBusinessActiveState={handleChangeBusinessActiveState}
            handleChangeBusinessType={handleChangeBusinessType}
          />
        )
      }
    </>
  )
}

DashboardBusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Enable/Disable search option
   * Search Businesses list by a business ID
   */
   isSearchByBusinessId: PropTypes.bool,
  /**
   * Enable/Disable search option
   * Search Businesses list by a business email
   */
   isSearchByBusinessEmail: PropTypes.bool,
  /**
   * Enable/Disable search option
   * Search Businesses list by a business phone
   */
   isSearchByBusinessPhone: PropTypes.bool,
  /**
   * Array of user props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string)
}

DashboardBusinessList.defaultProps = {
  initialPageSize: 10,
  loadMorePageSize: 10,
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'enabled', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug'],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
