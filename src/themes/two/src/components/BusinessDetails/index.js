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

import {
  BarContainer,
  BusinessDetailsExtraContent
} from './styles'

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
      {!isExtendExtraOpen && (
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
              </BusinessDetailsExtraContent>
            </>
          ) : (
            <>
              {selectedItem === 'support' && (
                <Modal
                  open={selectedItem === 'support'}
                >
                  <BusinessSupport
                    businessState={businessState}
                  />
                </Modal>
              )}
              {selectedItem === 'information' && (
                <Modal
                  open={selectedItem === 'information'}
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
