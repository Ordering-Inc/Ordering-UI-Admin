import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useWebsocket } from '../../contexts/WebsocketContext'
import { useApi, useSession, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const CampaignListing = (props) => {
  const {
    UIComponent,
    paginationSettings,
    isSearchByName,
    isSearchByDescription
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [searchValue, setSearchValue] = useState(null)
  const [campaignList, setCampaignList] = useState({ campaigns: [], loading: false, error: null })
  const [filterValues, setFilterValues] = useState({ clear: false, changes: {} })
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })

  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }

  /**
   * Method to get the sites from API
   */
  const getCampaignList = async (page, pageSize) => {
    try {
      setCampaignList({ ...campaignList, loading: true })
      let where = null
      const conditions = []
      if (searchValue) {
        const searchConditions = []
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
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const fetchEndpoint = where
        ? `${ordering.root}/marketing_campaigns?page=${page}&page_size=${pageSize}&&where=${JSON.stringify(where)}`
        : `${ordering.root}/marketing_campaigns?page=${page}&page_size=${pageSize}`

      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCampaignList({
          loading: false,
          campaigns: content.result,
          error: null
        })
        setPaginationProps({
          ...paginationProps,
          currentPage: content.pagination.current_page,
          totalPages: content.pagination.total_pages,
          totalItems: content.pagination.total,
          from: content.pagination.from,
          to: content.pagination.to
        })
      } else {
        setCampaignList({
          ...campaignList,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setCampaignList({
        ...campaignList,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Default fuction for campaign workflow
   */
  const handleUpdateCampaign = async (id, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/marketing_campaigns/${id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        if (handleSuccessUpdateCampaign) {
          const updatedCampaigns = campaignList?.campaigns.filter(_action => {
            if (_action.id === id) {
              Object.assign(_action, content.result)
            }
            return true
          })
          handleSuccessUpdateCampaign(updatedCampaigns)
        }
        showToast(ToastType.Success, t('CAMPAIGN_SAVED', 'Campaign saved'))
      }
    } catch (err) {
      console.log(err.message)
    }
  }
  /**
   * Method to add the campaign in the campaign list
   * @param {Object} result campaign to add
   */
  const handleSuccessAddCampaign = (result) => {
    const campaigns = [...campaignList.campaigns, result]
    setPaginationProps({
      ...paginationProps,
      to: paginationProps?.to + 1,
      total: paginationProps?.total + 1
    })
    setCampaignList({ ...campaignList, campaigns })
  }

  /**
   * Method to update the campaign list
   */
  const handleSuccessUpdateCampaign = (result) => {
    setCampaignList({
      ...campaignList,
      campaigns: result
    })
  }

  /**
   * Method to delete the campaign in the campaign list
   * @param {Number} campaignId campaign to delete
   */
  const handleSuccessDeleteCampaign = (campaignId) => {
    const filteredCampaigns = campaignList.campaigns.filter(campaign => campaign.id !== campaignId)
    setPaginationProps({
      ...paginationProps,
      total: paginationProps?.total - 1
    })
    setCampaignList({ ...campaignList, campaigns: filteredCampaigns })
  }

  useEffect(() => {
    if (campaignList.loading) return
    getCampaignList(1, paginationProps.pageSize)
  }, [searchValue])

  useEffect(() => {
    if ((Object.keys(filterValues?.changes).length > 0 || filterValues.clear) && !campaignList.loading) getCampaignList(1, paginationProps.pageSize)
  }, [filterValues])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          paginationProps={paginationProps}
          campaignList={campaignList}
          getCampaignList={getCampaignList}
          setFilterValues={setFilterValues}
          setPaginationProps={setPaginationProps}
          handleChangeSearch={handleChangeSearch}
          handleUpdateCampaign={handleUpdateCampaign}
          handleSuccessAddCampaign={handleSuccessAddCampaign}
          handleSuccessUpdateCampaign={handleSuccessUpdateCampaign}
          handleSuccessDeleteCampaign={handleSuccessDeleteCampaign}
        />
      )}
    </>
  )
}

CampaignListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CampaignListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
