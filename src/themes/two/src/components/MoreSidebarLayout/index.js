import React, { useState, useEffect } from 'react'
import { Modal } from '../Modal'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'
import MdcClose from '@meronex/icons/mdc/MdcClose'

import {
  MainContainer
} from './styles'
export const MoreSidebarLayout = (props) => {
  const {
    isExtendExtraOpen
  } = props
  const { width } = useWindowSize()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (width > 1000) setIsModalOpen(false)
    else setIsModalOpen(true)
  }, [width])
  return (
    <>
      {width > 1000 ? (
        <MainContainer
          isExtendExtraOpen={isExtendExtraOpen}
        >
          <Button
            borderRadius='5px'
            color='secundary'
            onClick={() => props.onClose()}
          >
            <MdcClose />
          </Button>
          {props.children}
        </MainContainer>
      ) : (
        <Modal
          width='80%'
          open={isModalOpen}
          onClose={() => props.onClose()}
        >
          {props.children}
        </Modal>
      )}
    </>
  )
}
