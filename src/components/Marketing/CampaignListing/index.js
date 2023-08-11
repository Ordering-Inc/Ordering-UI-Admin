import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SideBar } from '../../Shared'
import { CampaignDetail } from '../CampaignDetail'
import { CampaignHeader } from '../CampaignHeader'
import { CampaignList } from '../CampaignList'
import { CampaignListing as CampaignListingController } from 'ordering-components-admin'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  CampaignListingContainer
} from './styles'

export const CampaignListingUI = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [selectedCampaignId, setSelectedCampaignId] = useState(null)

  const handleOpenDetail = (action) => {
    setSelectedCampaign(action)
    setSelectedCampaignId(action?.id)
    setIsOpenDetail(true)
    addQueryToUrl({ id: action?.id })
  }

  const handleCloseDetail = () => {
    setIsOpenDetail(false)
    setSelectedCampaign(null)
    removeQueryToUrl(['id', 'tab'])
  }

  useEffect(() => {
    const id = query.get('id')
    if (id) {
      setSelectedCampaign({})
      setSelectedCampaignId(Number(id))
      setIsOpenDetail(true)
    }
  }, [])

  return (
    <>
      <CampaignListingContainer>
        <CampaignHeader
          {...props}
          handleOpenDetail={handleOpenDetail}
        />
        <CampaignList
          {...props}
          handleOpenDetail={handleOpenDetail}
          selectedCampaign={selectedCampaign}
          setSelectedCampaign={setSelectedCampaign}
        />
      </CampaignListingContainer>
      {isOpenDetail && (
        <SideBar
          sidebarId='campaignDetail'
          open={isOpenDetail}
          onClose={() => handleCloseDetail()}
          defaultSideBarWidth={550}
        >
          <CampaignDetail
            {...props}
            campaign={selectedCampaign}
            campaignId={selectedCampaignId}
            onClose={() => handleCloseDetail()}
          />
        </SideBar>
      )}
    </>
  )
}

export const CampaignListing = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const defaultPage = query.get('page') || 1
  const defaultPageSize = query.get('pageSize') || 10
  const campaignListingProps = {
    ...props,
    UIComponent: CampaignListingUI,
    isSearchByContactType: true,
    isSearchByName: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  }
  return <CampaignListingController {...campaignListingProps} />
}
