import React, { useEffect, useState } from 'react'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import EnFacebook from '@meronex/icons/en/EnFacebook'
import RiFileCopyLine from '@meronex/icons/ri/RiFileCopyLine'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components-admin'

import {
  Container,
  Header,
  CloseButton,
  SectionText,
  SectionWrapper
} from './styles'

import { useWindowSize } from '../../hooks/useWindowSize'
import { Button, Input } from '../../styles'

export const BusinessPublishingOption = (props) => {
  const {
    open,
    item,
    business,
    onClose
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkToBusiness = `${t('LINK_BUSINESS_REDIRECT', 'https://reactdemo.tryordering.com/')}${business?.slug}`

  const actionSidebar = (value) => {
    if (!value) {
      onClose && onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('publishing_option').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  const paragraphList = {
    own_platform: [
      {
        title: t('SINGLE_BUSINESS_APP', 'Single Business App'),
        description: t('SINGLE_BUSINESS_APP_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
      },
      {
        title: t('BRAND_APP', 'Brand App'),
        description: t('BRAND_APP_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
      },
    ],
    in_restaurant: [
      {
        title: t('MOBILE_ORDER_AND_PAY', 'Mobile Order and Pay'),
        description: t('MOBILE_ORDER_AND_PAY_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
      },
      {
        title: t('SELF_ORDERING_KIOSK', 'Self Ordering Kiosk'),
        description: t('SELF_ORDERING_KIOSK_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
      },
      {
        title: t('POS', 'Pos'),
        description: t('POS_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
      },
    ]
  }

  const ParagraphSection = (props) => {
    const {
      title,
      description,
      isHideBtn,
      isTitleLight
    } = props
    return (
      <SectionWrapper>
        <SectionText style={{ fontWeight: isTitleLight ? 'normal' : 'bold' }}>{title}</SectionText>
        <SectionText
          style={{
            color: theme.colors.lightGray,
            fontSize: 14
          }}
        >
          {description}
        </SectionText>
        {!isHideBtn && (
          <Button
            borderRadius='5px'
            color='primary'
            style={{ marginTop: 10 }}
            onClick={() => {}}
          >
            {t('BUY_NOW', 'Buy now')}
          </Button>
        )}
      </SectionWrapper>
    )
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('publishing_option').style.width = '100%'
      } else {
        document.getElementById('publishing_option').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <Container id='publishing_option'>
      <Header>
        {item?.title && (<h1>{item?.title}</h1>)}
        <CloseButton>
          <MdcClose onClick={() => onClose && onClose()} />
        </CloseButton>
      </Header>

      {/* {item?.key === 'own_platform' && (
        <>
          <ParagraphSection
            isHideBtn
            title={t('MARKETPLACE', 'Marketplace')}
            description={t('MARKETPLACE_DESCRIPTION', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu neque cursus nulla consectetur.')}
          />
          <SectionWrapper>
            <SectionText>{t('CUSTOM_SLUG', 'Custom slug')}</SectionText>
            <SectionText
              style={{
                color: theme.colors.primary,
                fontSize: 12,
                fontStyle: 'italic'
              }}
            >
              <a
                href={linkToBusiness}
                target='_blank'
                style={{ textDecoration: 'none' }}
              >
                ({linkToBusiness})
              </a>
            </SectionText>
          </SectionWrapper>
        </>
      )} */}

      {item?.key === 'social_network' && (
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10
          }}>
            <EnFacebook
              style={{
                color: '#3B5998',
                fontSize: '32px'
              }}
            />
            <span
              style={{
                fontWeight: 'bold',
                marginLeft: 15
              }}
            >
              {t('FACEBOOK', 'Facebook')}
            </span>
          </div>
          <SectionWrapper>
            <ParagraphSection
              isHideBtn
              isTitleLight
              title={t('FACEBOOK_SHOP_NOW', 'Facebook shop now')}
              description={t('FACEBOOK_SHOP_NOW_DESCRIPTION', `Add a direct link to your menu on your restaurant's Facebook page.`)}
            />
            <div
              style={{
                display: 'flex',
                width: '100%',
                marginBottom: 20
              }}
            >
              <Input
                type='text'
                readonly
                placeholder={linkToBusiness}
                style={{ width: '85%' }}
              />
              <div
                style={{
                  width: '15%',
                  fontSize: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <RiFileCopyLine
                  onClick={() => navigator.clipboard.writeText(linkToBusiness)}
                />
              </div>
            </div>

            <ParagraphSection
              isHideBtn
              isTitleLight
              title={t('FACEBOOK_SHARING', 'Facebook sharing')}
              description={t('FACEBOOK_SHARING_DESCRIPTION', 'Use this personalized link when posting on Facebook. This link works on desktop, mobile, tablet and helps you sell more through Facebook.')}
            />
            <div
              style={{
                display: 'flex',
                width: '100%'
              }}
            >
              <Input
                type='text'
                readonly
                placeholder={linkToBusiness}
                style={{ width: '85%' }}
              />
              <div
                style={{
                  width: '15%',
                  fontSize: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <RiFileCopyLine
                  onClick={() => navigator.clipboard.writeText(linkToBusiness)}
                />
              </div>
            </div>
          </SectionWrapper>
        </div>
      )}

      {item?.key && paragraphList[item?.key]?.length > 0 && paragraphList[item?.key].map((paragraph, i) => (
        <ParagraphSection
          key={i}
          title={paragraph.title}
          description={paragraph.description}
        />
      ))}
    </Container>
  )
}
