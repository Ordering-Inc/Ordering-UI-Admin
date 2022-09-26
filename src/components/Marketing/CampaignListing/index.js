import React, { useState, useEffect } from 'react'
import { SideBar } from '../../Shared'
import { CampaignDetail } from '../CampaignDetail'
import { CampaignHeader } from '../CampaignHeader'
import { CampaignList } from '../CampaignList'
import { useConfig, useSession, CampaignListing as CampaignListingController } from 'ordering-components-admin'
import { DisabledFeatureAlert } from '../../DisabledFeatureAlert'
import {
  CampaignListingContainer
} from './styles'

export const CampaignListingUI = (props) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [{ configs }] = useConfig()
  const [{ user }] = useSession()
  const featureName = 'Marketing_dashboard'
  const [isDisabledFeature, setIsDisabledFeature] = useState(false)

  const handleOpenDetail = (action) => {
    setSelectedCampaign(action)
    setIsOpenDetail(true)
  }

  const handleCloseDetail = () => {
    setIsOpenDetail(false)
    setSelectedCampaign(null)
  }

  useEffect(() => {
    if (configs && Object.keys(configs).length > 0 && user) {
      if (!Object.keys(configs).includes(featureName) && user?.level === 0) {
        setIsDisabledFeature(false)
      }
    }
  }, [configs])

  return (
    <>
      <CampaignListingContainer>
        <CampaignHeader
          {...props}
          handleOpenDetail={handleOpenDetail}
          isDisabledFeature={isDisabledFeature}
        />
        <CampaignList
          {...props}
          handleOpenDetail={handleOpenDetail}
          selectedCampaign={selectedCampaign}
          isDisabledFeature={isDisabledFeature}
        />
      </CampaignListingContainer>
      {isDisabledFeature && (<DisabledFeatureAlert />)}
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
