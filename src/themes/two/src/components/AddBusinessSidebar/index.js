import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { AddBusinessForm } from '../AddBusinessForm'
import {
  BarContainer,
  BusinessDetailsExtraContent
} from './styles'

export const AddBusinessSidebar = (props) => {
  const {
    open
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
        document.getElementById('add_business').style.width = '100vw'
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('add_business').style.width = '1000px'
        } else {
          document.getElementById('add_business').style.width = '500px'
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
      document.getElementById('add_business').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [extraOpen])
  return (
    <BarContainer id='add_business'>
      <AddBusinessForm
        {...props}
        actionSidebar={actionSidebar}
        handleItemSelected={handleItemSelected}
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
                  <div>business support</div>
                )}
              </BusinessDetailsExtraContent>
            </>
          ) : (
            <>
              {itemSelected === 'support' && (
                <Modal
                  open={itemSelected === 'support'}
                >
                  business support
                </Modal>
              )}
            </>
          )}
        </>
      )}
    </BarContainer>
  )
}
