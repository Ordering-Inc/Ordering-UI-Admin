import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSession, useLanguage, BusinessDetails as BusinessDetailsController } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { BusinessSummary } from '../BusinessSummary'
import { BusinessSupport } from '../BusinessSupport'
import { BusinessDetail } from '../BusinessDetail'
import { BusinessSchedule } from '../BusinessSchedule'
import { BusinessMenu } from '../BusinessMenu'
import { BusinessDeliveryPickupMore } from '../BusinessDeliveryPickupMore'
import { BusinessPaymentMethods } from '../BusinessPaymentMethods'
import { BusinessPreorderDetails } from '../BusinessPreorderDetails'
import { BusinessTaxAndFees } from '../BusinessTaxAndFees'
import { BusinessPromotionList } from '../BusinessPromotionList'
import { BusinessCustomFields } from '../BusinessCustomFields'
import { BusinessWebhooks } from '../BusinessWebhooks'
import { BusinessNotifications } from '../BusinessNotifications'
import { BusinessOrderingChannels } from '../BusinessOrderingChannels'
import { BusinessFrontLayout } from '../BusinessFrontLayout'
// import { BusinessPublishing } from '../BusinessPublishing'
import { BusinessPlaceGroupList } from '../BusinessPlaceGroupList'
import { BusinessLogs } from '../BusinessLogs'
import { SpoonityApiKey } from '../SpoonityApiKey'

import { MoreSidebarLayout, Personalization, Alert } from '../../Shared'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  BarContainer
} from './styles'
import { BusinessSalesChannel } from '../BusinessSalesChannel'
import { BusinessQRCodeOptions } from '../BusinessQRCodeOptions'

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
    handleUpdateBusinessState,
    handleDuplicateBusiness,
    handleDeleteBusiness,
    actionStatus,
    handleUpdatePreorderConfigs,
    handleUpdateSpoonityKey,
    handleSyncEvent,
    spoonityKeyState,
    siteState
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [{ user }] = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)
  const [isExtendExtraOpen, setIsExtendExtraOpen] = useState(false)
  const [isExpand, setIsExpand] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const spoonityConfig = businessState?.business?.configs?.find(config => config.key === 'spoonity_integration_api_key')

  const isAdmin = user?.level === 0

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
        if (isExpand) {
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
  }

  const handleSelectedItem = (item, isInitialRender) => {
    setIsExtendExtraOpen(false)
    setSelectedItem(item)
    setExtraOpen(true)
    if (!isInitialRender) {
      addQueryToUrl({ section: item })
    }
  }

  const handleCloseExtraOpen = () => {
    setIsExtendExtraOpen(false)
    setExtraOpen(false)
    setSelectedItem(null)
    removeQueryToUrl(['section', 'tab', 'business_type', 'paymethod', 'payemthod_tab', 'setting_tab', 'menu', 'zone', 'zone_tab', 'wallet'])
  }

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    toggleMainContent()
  }, [extraOpen, isExpand, width])

  useEffect(() => {
    setExtraOpen(false)
    setIsExtendExtraOpen(false)
  }, [businessId])

  const onCloseSidebar = (e) => {
    if (e.code === 'Escape' && width >= 1000) {
      props.onClose() && props.onClose()
    }
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

  useEffect(() => {
    if (!actionStatus?.error) return
    setAlertState({
      open: true,
      content: actionStatus?.error
    })
  }, [actionStatus?.error])

  useEffect(() => {
    if (!businessState?.error) return
    setAlertState({
      open: true,
      content: businessState?.error
    })
  }, [businessState?.error])

  useEffect(() => {
    if (businessState?.loading) return
    const detailKey = query.get('section')
    if (detailKey) {
      handleSelectedItem(detailKey, true)
    }
  }, [businessState?.loading])

  return (
    <BarContainer id='business_details_bar'>
      {(!isExtendExtraOpen || width < 1000) && (
        <BusinessSummary
          isAdmin={isAdmin}
          businessState={businessState}
          handleChangeActiveBusiness={handleChangeActiveBusiness}
          actionSidebar={actionSidebar}
          selectedItem={selectedItem}
          handleSelectedItem={handleSelectedItem}
          handleSucessUpdateBusiness={handleSucessUpdateBusiness}
          handleDuplicateBusiness={handleDuplicateBusiness}
          handleDeleteBusiness={handleDeleteBusiness}
          handleUpdateBusinessClick={handleUpdateBusinessClick}
          handleSyncEvent={handleSyncEvent}
          extraOpen={extraOpen}
          spoonityConfig={spoonityConfig}
          siteState={siteState}
          isExpand={isExpand}
          setIsExpand={setIsExpand}
          formState={formState}
          setFormState={setFormState}
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
          {selectedItem === 'store_details' && (
            <BusinessDetail
              business={businessState?.business}
              handleDeleteBusinessOwner={handleDeleteBusinessOwner}
              handleAddBusinessOwner={handleAddBusinessOwner}
              formState={formState}
              setFormState={setFormState}
              businessTypes={businessTypes || businessState?.business?.types}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
              setBusinessTypes={setBusinessTypes}
              handleSuccessAddBusinessItem={handleSuccessAddBusinessItem}
              handleSuccessDeleteBusinessItem={handleSuccessDeleteBusinessItem}
              handleSucessUpdateBusiness={handleSucessUpdateBusiness}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              isExtendExtraOpen={isExtendExtraOpen}
              handleUpdateBusinessState={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'schedule' && (
            <BusinessSchedule
              business={businessState?.business}
              handleSuccessUpdate={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'menu' && (
            <BusinessMenu
              business={businessState?.business}
              handleSuccessBusinessMenu={handleUpdateBusinessState}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
            />
          )}
          {selectedItem === 'delivery_pickup_more' && (
            <BusinessDeliveryPickupMore
              business={businessState?.business}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              handleUpdateBusinessState={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'notifications' && (
            <BusinessNotifications
              business={businessState?.business}
              handleSuccessUpdate={handleUpdateBusinessState}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
              formState={formState}
              setFormState={setFormState}
            />
          )}
          {selectedItem === 'payment_methods' && (
            <BusinessPaymentMethods
              business={businessState?.business}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              handleSuccessUpdate={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'tax_fees' && (
            <BusinessTaxAndFees
              formState={formState}
              setFormState={setFormState}
              business={businessState?.business}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
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
          {selectedItem === 'preorder' && (
            <BusinessPreorderDetails
              formState={formState}
              setFormState={setFormState}
              business={businessState?.business}
              actionStatus={actionStatus}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
              handleUpdatePreorderConfigs={handleUpdatePreorderConfigs}
            />
          )}
          {selectedItem === 'custom_fields' && (
            <BusinessCustomFields
              businessId={businessState?.business?.id}
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
          {selectedItem === 'ordering_channels' && (
            <BusinessOrderingChannels
              business={businessState?.business}
              handleSuccessUpdate={handleUpdateBusinessState}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
              formState={formState}
              setFormState={setFormState}
            />
          )}
          {/* {selectedItem === 'publishing' && isAdmin && (
            <BusinessPublishing
              business={businessState?.business}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
            />
          )} */}
          {selectedItem === 'publishing' && isAdmin && (
            <BusinessQRCodeOptions
              business={businessState?.business}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
            />
          )}
          {selectedItem === 'sales_channels' && (
            <BusinessSalesChannel
              business={businessState?.business}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              siteState={siteState}
            />
          )}
          {selectedItem === 'layout' && (
            <BusinessFrontLayout
              business={businessState?.business}
              handleSuccessUpdate={handleUpdateBusinessState}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
              formState={formState}
              setFormState={setFormState}
            />
          )}
          {selectedItem === 'webhooks' && (
            <BusinessWebhooks
              business={businessState?.business}
              handleSuccessUpdate={handleUpdateBusinessState}
            />
          )}
          {selectedItem === 'places' && (
            <BusinessPlaceGroupList
              business={businessState?.business}
              handleSuccessUpdate={handleUpdateBusinessState}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
            />
          )}
          {selectedItem === 'spoonity_key' && (
            <SpoonityApiKey
              business={businessState?.business}
              handleSuccessUpdate={handleUpdateBusinessState}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
              spoonityConfig={spoonityConfig}
              handleUpdateSpoonityKey={handleUpdateSpoonityKey}
              spoonityKeyState={spoonityKeyState}
            />
          )}
          {selectedItem === 'logs' && (
            <BusinessLogs
              businessId={businessState?.business?.id}
            />
          )}
        </MoreSidebarLayout>
      )}

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
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
