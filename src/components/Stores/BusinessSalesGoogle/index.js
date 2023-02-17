import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { IconButton, Input } from '../../../styles'
import { XLg, Files } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import {
  Container,
  Header,
  LeftHeader,
  Step,
  LinkText,
  CopyInputWrapper
} from './styles'

export const BusinessSalesGoogle = (props) => {
  const { onClose, socialItem, businessSlug } = props

  const { width } = useWindowSize()
  const [, t] = useLanguage()
  const theme = useTheme()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const actionSidebar = (value) => {
    if (!value) {
      onClose && onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('businessSocial').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('businessSocial').style.width = '100%'
      } else {
        document.getElementById('businessSocial').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <Container id='businessSocial'>
      <Header>
        <LeftHeader>
          <img src={socialItem.icon} alt='' />
          <h2>{socialItem.name}</h2>
        </LeftHeader>
        <IconButton onClick={onClose} color='black'>
          <XLg />
        </IconButton>
      </Header>
      <p>{t('BUSINESS_GOOGLE_DESC', 'Lorem ipsum dolor sit amet consectetur. Vitae odio aliquam adipiscing vitae. Nulla sed integer congue gravida lobortis tristique condimentum fusce tincidunt.')}</p>
      <LinkText>
        <a href='https://www.google.com/intl/es/business/sign-up' target='_blank' rel='noopener noreferrer'>https://www.google.com/intl/es/business/sign-up</a>
      </LinkText>
      <Step>
        <h3>{t('STEP', 'Step')} 1</h3>
        <p>{t('BUSINESS_GOOGLE_STEP1_DESC', 'On Google My Business, access your Locations page.')}</p>
        <img src={theme.images.salesChannels.googleStep1} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 2</h3>
        <p>{t('BUSINESS_GOOGLE_STEP2_DESC', 'Then click on info section on the sidebar inside your location.')}</p>
        <img src={theme.images.salesChannels.googleStep2} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 3</h3>
        <p>{t('BUSINESS_GOOGLE_STEP3_DESC', 'Scroll down and find Order ahead links and Menu link fields. Paste the link below.')}</p>
        <CopyInputWrapper isBottom>
          <Input
            defaultValue='https://yourbusinessname.com/store/storename'
            disabled
          />
        </CopyInputWrapper>
        <img src={theme.images.salesChannels.googleStep3} alt='' />
      </Step>
    </Container>
  )
}
