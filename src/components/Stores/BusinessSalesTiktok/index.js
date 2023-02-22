import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { IconButton } from '../../../styles'
import { XLg } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import {
  Container,
  Header,
  LeftHeader,
  Step,
  LinkText
} from './styles'

export const BusinessSalesTiktok = (props) => {
  const { onClose, socialItem } = props

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
      <p>{t('BUSINESS_TIKTOK_DESC', 'On TikTok, we must create a catalog; for this, we will click on the button: Add Catalog. A pop-up will appear that we will fill in with the information you request.')}</p>
      <LinkText>
        <a href='https://ads.tiktok.com/i18n/home' target='_blank' rel='noopener noreferrer'>https://ads.tiktok.com/i18n/home</a>
      </LinkText>
      <Step>
        <h3>{t('STEP', 'Step')} 1</h3>
        <p>{t('BUSINESS_TIKTOK_STEP1_DESC', 'Please put the name of the Catalog that we are creating.')}</p>
        <img src={theme.images.salesChannels.tiktokStep1} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 2</h3>
        <p>{t('BUSINESS_TIKTOK_STEP2_DESC', 'Then click on the Business Center account. If you already have one created, select the one you need; if not, click Create.')}</p>
        <img src={theme.images.salesChannels.tiktokStep2} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 3</h3>
        <p>{t('BUSINESS_TIKTOK_STEP3_DESC', 'Write the name of your Business Center, select the Time Zone, and click the Create button.')}</p>
        <img src={theme.images.salesChannels.tiktokStep3} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 4</h3>
        <p>{t('BUSINESS_TIKTOK_STEP4_DESC', 'Then click again on the Business Center field, and the one you just created will appear, select it.')}</p>
        <img src={theme.images.salesChannels.tiktokStep4} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 5</h3>
        <p>{t('BUSINESS_TIKTOK_STEP5_DESC', 'Click on the Industry field and select the option that appears, in this case, E-commerce.')}</p>
        <img src={theme.images.salesChannels.tiktokStep5} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 6</h3>
        <p>{t('BUSINESS_TIKTOK_STEP6_DESC', 'Select the Default location and Default Currency according to your need, and click the Create button.')}</p>
        <img src={theme.images.salesChannels.tiktokStep6} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 7</h3>
        <p>{t('BUSINESS_TIKTOK_STEP7_DESC', 'TikTok will show you a brief tour of your Dashboard so you can get to know it.')}</p>
        <img src={theme.images.salesChannels.tiktokStep7} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 8</h3>
        <p>{t('BUSINESS_TIKTOK_STEP8_DESC', 'After watching the tutorial, TikTok will enable your Dashboard to start uploading the things you need, and the first thing you\'ll do is add products. Just click on the Products option in the Sidebar and click on the Add Products button.')}</p>
        <img src={theme.images.salesChannels.tiktokStep8} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 9</h3>
        <p>{t('BUSINESS_TIKTOK_STEP9_DESC', 'Select the option you like the most to upload your products; when you choose it, click Next.')}</p>
        <img src={theme.images.salesChannels.tiktokStep9} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 10</h3>
        <p>{t('BUSINESS_TIKTOK_STEP10_DESC', 'Fill in the requested fields; click on the Import button when ready.')}</p>
        <img src={theme.images.salesChannels.tiktokStep10} alt='' />
      </Step>
    </Container>
  )
}
