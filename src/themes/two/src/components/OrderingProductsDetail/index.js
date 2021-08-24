import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Switch } from '../../styles/Switch'
import { XLg as CloseIcon } from 'react-bootstrap-icons'
import { IconButton } from '../../styles/Buttons'
import { useLanguage } from 'ordering-components-admin'
import { OrderingProductGeneral } from '../OrderingProductGeneral'

import {
  DetailContainerWrapper,
  DetailContainer,
  DetailHeaderContainer,
  TitleWrapper,
  HeaderTabContainer,
  Tab
} from './styles'

export const OrderingProductsDetail = (props) => {
  const {
    open,
    onClose,
    product,
    handleChangeState
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [detailType, setDetailType] = useState('general')

  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      onClose()
    }
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('orderingProductsDetail').style.width = '100vw'
      } else {
        document.getElementById('orderingProductsDetail').style.width = '500px'
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <DetailContainerWrapper id='orderingProductsDetail'>
      <DetailContainer>
        <DetailHeaderContainer>
          <TitleWrapper>
            <h2>{product?.name}</h2>
            <Switch
              defaultChecked={product?.enabled}
              onChange={(enabled) => handleChangeState(product.id, 'enabled', enabled)}
            />
          </TitleWrapper>
          <IconButton onClick={() => actionSidebar(null)}>
            <CloseIcon />
          </IconButton>
        </DetailHeaderContainer>
        <HeaderTabContainer>
          <Tab
            active={detailType === 'general'}
            onClick={() => setDetailType('general')}
          >
            {t('GENERAL', 'General')}
          </Tab>
          <Tab
            active={detailType === 'seo'}
            onClick={() => setDetailType('seo')}
          >
            {t('SEO', 'SEO')}
          </Tab>
        </HeaderTabContainer>
        {
          detailType === 'general' && (
            <OrderingProductGeneral
              {...props}
            />
          )
        }
      </DetailContainer>
    </DetailContainerWrapper>
  )
}
