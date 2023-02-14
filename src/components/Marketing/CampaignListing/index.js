import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { SideBar } from '../../Shared'
import { CampaignDetail } from '../CampaignDetail'
import { CampaignHeader } from '../CampaignHeader'
import { CampaignList } from '../CampaignList'
import { CampaignListing as CampaignListingController } from 'ordering-components-admin'
import {
  CampaignListingContainer
} from './styles'

export const CampaignListingUI = (props) => {
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [selectedCampaignId, setSelectedCampaignId] = useState(null)

  const handleOpenDetail = (action) => {
    setSelectedCampaign(action)
    setSelectedCampaignId(action?.id)
    setIsOpenDetail(true)
    action && history.replace(`${location.pathname}?id=${action?.id}`)
  }

  const handleCloseDetail = () => {
    setIsOpenDetail(false)
    setSelectedCampaign(null)
    history.replace(`${location.pathname}`)
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
  const campaignListingProps = {
    ...props,
    UIComponent: CampaignListingUI,
    isSearchByContactType: true,
    isSearchByName: true
  }
  return <CampaignListingController {...campaignListingProps} />
}
