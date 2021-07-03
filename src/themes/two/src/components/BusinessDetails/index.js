import React, { useState, useEffect } from 'react'
import { BusinessDetails as BusinessDetailsController } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { BusinessSummary } from '../BusinessSummary'
import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { BusinessSupport } from '../BusinessSupport'
import { BusinessInformation } from '../BusinessInformation'
import { BusinessSchedule } from '../BusinessSchedule'
import { BusinessMenu } from '../BusinessMenu'
import { BusinessDeliveryZone } from '../BusinessDeliveryZone'
import { BusinessPaymentMethods } from '../BusinessPaymentMethods'
import { BusinessCustomFields } from '../BusinessCustomFields'

import {
  BarContainer,
  BusinessDetailsExtraContent
} from './styles'
import { Personalization } from '../Personalization'

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
        <>
          {width >= 1000 ? (
            <>
              <BusinessDetailsExtraContent
                isExtendExtraOpen={isExtendExtraOpen}
              >
                <Button
                  borderRadius='5px'
                  color='secundary'
                  onClick={() => handleCloseExtraOpen()}
                >
                  <MdcClose />
                </Button>
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
              </BusinessDetailsExtraContent>
            </>
          ) : (
            <>
              {selectedItem === 'support' && (
                <Modal
                  width='80%'
                  open={selectedItem === 'support'}
                  onClose={() => handleCloseExtraOpen()}
                >
                  <BusinessSupport
                    businessState={businessState}
                  />
                </Modal>
              )}
              {selectedItem === 'information' && (
                <Modal
                  width='80%'
                  open={selectedItem === 'information'}
                  onClose={() => handleCloseExtraOpen()}
                >
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
                </Modal>
              )}
              {selectedItem === 'schedule' && (
                <Modal
                  width='80%'
                  open={selectedItem === 'schedule'}
                  onClose={() => handleCloseExtraOpen()}
                >
                  <BusinessSchedule
                    business={businessState?.business}
                    handleSuccessBusinessScheduleUpdate={handleUpdateBusinessState}
                  />
                </Modal>
              )}
              {selectedItem === 'menu' && (
                <Modal
                  width='80%'
                  open={selectedItem === 'menu'}
                  onClose={() => handleCloseExtraOpen()}
                >
                  <BusinessMenu
                    business={businessState?.business}
                    handleSuccessBusinessMenu={handleUpdateBusinessState}
                    setIsExtendExtraOpen={setIsExtendExtraOpen}
                  />
                </Modal>
              )}
              {selectedItem === 'delivery_zones' && (
                <Modal
                  width='80%'
                  open={selectedItem === 'delivery_zones'}
                  onClose={() => handleCloseExtraOpen()}
                >
                  <BusinessDeliveryZone
                    business={businessState?.business}
                    setIsExtendExtraOpen={setIsExtendExtraOpen}
                    onClose={() => setIsExtendExtraOpen(false)}
                    handleSuccessUpdate={handleUpdateBusinessState}
                  />
                </Modal>
              )}
              {selectedItem === 'payment_methods' && (
                <Modal
                  width='80%'
                  open={selectedItem === 'payment_methods'}
                  onClose={() => handleCloseExtraOpen()}
                >
                  <BusinessPaymentMethods
                    business={businessState?.business}
                    setIsExtendExtraOpen={setIsExtendExtraOpen}
                    handleSuccessUpdate={handleUpdateBusinessState}
                  />
                </Modal>
              )}
              {selectedItem === 'custom_fields' && (
                <Modal
                  width='80%'
                  open={selectedItem === 'custom_fields'}
                  onClose={() => handleCloseExtraOpen()}
                >
                  <BusinessCustomFields
                    businessId={businessState?.business.id}
                    metafields={businessState?.business?.metafields}
                    handleSuccessAddMetaFields={(result) => handleSuccessAddBusinessItem('metafields', result)}
                    handleSuccessDeleteBusinessMetaFields={(id) => handleSuccessDeleteBusinessItem('metafields', id)}
                  />
                </Modal>
              )}
              {selectedItem === 'personalization' && (
                <Modal
                  width='80%'
                  open={selectedItem === 'personalization'}
                  onClose={() => handleCloseExtraOpen()}
                >
                  <Personalization
                    isShowTitle
                  />
                </Modal>
              )}
            </>
          )}
        </>
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
