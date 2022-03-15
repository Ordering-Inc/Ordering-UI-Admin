import React, { useState } from 'react'
import { CampaignHeader } from '../CampaignHeader'
import { CampaignList } from '../CampaignList'
import { CampaignListing as CampaignListingController } from './naked'
import {
  CampaignListingContainer
} from './styles'

export const CampaignListingUI = (props) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)

  // const handleCloseDetail = () => {
  //   setIsOpenDetail(false)
  //   setSelectedAction(null)
  // }

  const handleOpenDetail = (action) => {
    setSelectedCampaign(action)
    setIsOpenDetail(true)
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
        />
      </CampaignListingContainer>
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
