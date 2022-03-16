import React, { useState } from 'react'
import { SideBar } from '../../Shared'
import { CampaignDetail } from '../CampaignDetail'
import { CampaignHeader } from '../CampaignHeader'
import { CampaignList } from '../CampaignList'
import { CampaignListing as CampaignListingController } from './naked'
import {
  CampaignListingContainer
} from './styles'

export const CampaignListingUI = (props) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)

  const handleOpenDetail = (action) => {
    setSelectedCampaign(action)
    setIsOpenDetail(true)
  }

  const handleCloseDetail = () => {
    setIsOpenDetail(false)
    setSelectedCampaign(null)
  }

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
          />
        </SideBar>
      )}
    </>
  )
}

export const CampaignListing = (props) => {
  const campaignListingProps = {
    ...props,
    UIComponent: CampaignListingUI
  }
  return <CampaignListingController {...campaignListingProps} />
}
