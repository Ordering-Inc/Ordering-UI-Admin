import React, { useState, useEffect } from 'react'
import { BusinessDetails as BusinessDetailsController } from './naked'
import { useWindowSize } from '../../hooks/useWindowSize'
import { BusinessSummary } from '../BusinessSummary'
import { BusinessSupport } from '../BusinessSupport'
import { BusinessInformation } from '../BusinessInformation'
import { BusinessSchedule } from '../BusinessSchedule'
import { BusinessMenu } from '../BusinessMenu'
import { BusinessDeliveryZone } from '../BusinessDeliveryZone'
import { BusinessPaymentMethods } from '../BusinessPaymentMethods'
import { BusinessPromotionList } from '../BusinessPromotionList'
import { BusinessCustomFields } from '../BusinessCustomFields'
import { MoreSidebarLayout } from '../MoreSidebarLayout'
import { BusinessWebhooks } from '../BusinessWebhooks'
import {
  BarContainer
} from './styles'
import { Personalization } from '../Personalization'
import { BusinessMoreDetail } from '../BusinessMoreDetail'

export const BusinessDetailsUI = (props) => {
  const {
    open,
    businessId,
    businessState,
    handleChangeActiveBusiness,
    handleSucessUpdateBusiness,
    handleDeleteBusinessOwner,
    handleAddBusinessOwner,
    businessTypes,
    formState,
    setFormState,
    handleUpdateBusinessClick,
    setBusinessTypes,
    handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem,
    handleUpdateBusinessState
  } = props
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)
  const [isExtendExtraOpen, setIsExtendExtraOpen] = useState(false)

  const [selectedItem, setSelectedItem] = useState(null)
  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      props.onClose()
    }
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('business_details_bar').style.width = '100vw'
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('business_details_bar').style.width = '1000px'
        } else {
          document.getElementById('business_details_bar').style.width = '500px'
        }
      }
    }
  }

  const handleSelectedItem = (item) => {
    setIsExtendExtraOpen(false)
    setSelectedItem(item)
    setExtraOpen(true)
  }

  const handleCloseExtraOpen = () => {
    setIsExtendExtraOpen(false)
    setExtraOpen(false)
    setSelectedItem(null)
  }

  useEffect(() => {
    if (width > 1000) {
      setIsExtendExtraOpen(false)
    }
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (width < 1000) return
    if (extraOpen) {
      document.getElementById('business_details_bar').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [extraOpen])

  useEffect(() => {
    setExtraOpen(false)
    setIsExtendExtraOpen(false)
  }, [businessId])

  return (
    <BarContainer id='business_details_bar'>
      {(!isExtendExtraOpen || width < 1000) && (
        <BusinessSummary
          businessState={businessState}
          handleChangeActiveBusiness={handleChangeActiveBusiness}
          actionSidebar={actionSidebar}
          selectedItem={selectedItem}
          handleSelectedItem={handleSelectedItem}
          handleSucessUpdateBusiness={handleSucessUpdateBusiness}
        />
      )}
      {extraOpen && (
        <MoreSidebarLayout
          isExtendExtraOpen={isExtendExtraOpen}
          onClose={handleCloseExtraOpen}
        >
          {selectedItem === 'support' && (
            <BusinessSupport
              businessState={businessState}
            />
          )}
          {selectedItem === 'information' && (
            <BusinessInformation
              business={businessState?.business}
              handleDeleteBusinessOwner={handleDeleteBusinessOwner}
              handleAddBusinessOwner={handleAddBusinessOwner}
              formState={formState}
              setFormState={setFormState}
              businessTypes={businessTypes}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
              setBusinessTypes={setBusinessTypes}
              handleSuccessAddBusinessItem={handleSuccessAddBusinessItem}
              handleSuccessDeleteBusinessItem={handleSuccessDeleteBusinessItem}
            />
          )}
          {selectedItem === 'schedule' && (
            <BusinessSchedule
              business={businessState?.business}
              handleSuccessBusinessScheduleUpdate={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'menu' && (
            <BusinessMenu
              business={businessState?.business}
              handleSuccessBusinessMenu={handleUpdateBusinessState}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
            />
          )}
          {selectedItem === 'delivery_zones' && (
            <BusinessDeliveryZone
              business={businessState?.business}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              onClose={() => setIsExtendExtraOpen(false)}
              handleSuccessUpdate={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'payment_methods' && (
            <BusinessPaymentMethods
              business={businessState?.business}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              handleSuccessUpdate={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'promotions' && (
            <BusinessPromotionList
              promotions={businessState?.business?.offers}
              businessId={businessState?.business?.id}
              business={businessState?.business}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              handleSuccessUpdate={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'custom_fields' && (
            <BusinessCustomFields
              businessId={businessState?.business.id}
              metafields={businessState?.business?.metafields}
              handleSuccessAddMetaFields={(result) => handleSuccessAddBusinessItem('metafields', result)}
              handleSuccessDeleteBusinessMetaFields={(id) => handleSuccessDeleteBusinessItem('metafields', id)}
            />
          )}
          {selectedItem === 'personalization' && (
            <Personalization
              isShowTitle
            />
          )}
          {selectedItem === 'webhooks' && (
            <BusinessWebhooks
              business={businessState?.business}
              handleSuccessUpdate={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'more' && (
            <BusinessMoreDetail
              business={businessState?.business}
              handleSuccessUpdate={handleUpdateBusinessState}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
              formState={formState}
              setFormState={setFormState}
            />
          )}
        </MoreSidebarLayout>
      )}
    </BarContainer>
  )
}

export const BusinessDetails = (props) => {
  const businessDetailsProps = {
    ...props,
    asDashboard: true,
    UIComponent: BusinessDetailsUI
  }

  return <BusinessDetailsController {...businessDetailsProps} />
}
