import React, { useState, useEffect } from 'react'
import { BusinessDetails as BusinessDetailsController } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { BusinessSummary } from '../BusinessSummary'
import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { BusinessSupport } from '../BusinessSupport'

import {
  BarContainer,
  BusinessDetailsExtraContent
} from './styles'

export const BusinessDetailsUI = (props) => {
  const {
    open,
    businessState,
    handleChangeActiveBusiness,
    handleSucessUpdateBusiness
  } = props
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)

  const [itemSelected, setItemSelected] = useState(null)
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

  const handleItemSelected = (item) => {
    setItemSelected(item)
    setExtraOpen(true)
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
  return (
    <BarContainer id='business_details_bar'>
      <BusinessSummary
        businessState={businessState}
        handleChangeActiveBusiness={handleChangeActiveBusiness}
        actionSidebar={actionSidebar}
        handleItemSelected={handleItemSelected}
        handleSucessUpdateBusiness={handleSucessUpdateBusiness}
      />
      {extraOpen && (
        <>
          {width >= 1000 ? (
            <>
              <BusinessDetailsExtraContent>
                <Button
                  borderRadius='5px'
                  color='secundary'
                  onClick={() => setExtraOpen(false)}
                >
                  <MdcClose />
                </Button>
                {itemSelected === 'support' && (
                  <BusinessSupport
                    businessState={businessState}
                  />
                )}
              </BusinessDetailsExtraContent>
            </>
          ) : (
            <Modal>
              modal
            </Modal>
          )}
        </>
      )}
    </BarContainer>
  )
}

export const BusinessDetails = (props) => {
  const businessDetailsProps = {
    ...props,
    UIComponent: BusinessDetailsUI
  }

  return <BusinessDetailsController {...businessDetailsProps} />
}
