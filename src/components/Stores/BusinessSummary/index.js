import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, useEvent, useApi } from 'ordering-components-admin'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { useTheme } from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { XLg, LifePreserver, ThreeDots, Laptop, Phone, ArrowsAngleExpand, ArrowsAngleContract } from 'react-bootstrap-icons'
import { Button, IconButton, Switch } from '../../../styles'
import { Confirm, Modal } from '../../Shared'
import { BusinessPreview } from '../BusinessPreview'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  BusinessDetailsContainer,
  DetailsHeader,
  BusinessName,
  LeftHeader,
  RightHeader,
  BusinessHeader,
  BusinessLogo,
  BusinessDetailsContent,
  BusinessDescription,
  BusinessConfigsContainer,
  BusinessConfigItem,
  ActionSelectorWrapper,
  BusinessPreviewHeader,
  ButtonWrapper
} from './styles'

export const BusinessSummary = (props) => {
  const {
    isAdmin,
    businessState,
    actionSidebar,
    handleChangeActiveBusiness,
    selectedItem,
    handleSelectedItem,
    handleDuplicateBusiness,
    handleDeleteBusiness,
    extraOpen
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [events] = useEvent()
  const theme = useTheme()
  const [ordering] = useApi()
  const { width } = useWindowSize()
  const [isBusinessPreview, setIsBusinessPreview] = useState(false)
  const [selectedView, setSelectedView] = useState('desktop')
  const [isExpand, setIsExpand] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleOpenCategory = () => {
    events.emit('go_to_page', { page: 'store', params: { store: businessState?.business?.slug } })
  }

  const handleOpenSite = () => {
    window.open(`https://${ordering.project}.tryordering.com/store/${businessState?.business?.slug}`, '_blank')
  }

  const itemsExcluded = ['publishing']

  const businessConfigs = [
    {
      key: 'store_details',
      value: t('STORE_DETAILS', 'Store details')
    },
    {
      key: 'schedule',
      value: t('SCHEDULE', 'Schedule')
    },
    {
      key: 'menu',
      value: t('MENU_V21', 'Menu')
    },
    {
      key: 'delivery_pickup_more',
      value: t('DELIVERY_PICKUP_MORE', 'Delivery, pickup & more')
    },
    {
      key: 'notifications',
      value: t('NOTIFICATIONS', 'Notifications')
    },
    {
      key: 'payment_methods',
      value: t('PAYMENTS_METHODS', 'Payment methods')
    },
    {
      key: 'tax_fees',
      value: t('TAX_AND_FEES', 'Tax & fees')
    },
    {
      key: 'promotions',
      value: t('PROMOTIONS', 'Promotions')
    },
    {
      key: 'preorder',
      value: t('PREORDERS_SETTING', 'Preorders and lead times')
    },
    {
      key: 'custom_fields',
      value: t('CUSTOM_FIELDS', 'Custom fields')
    },
    {
      key: 'personalization',
      value: t('PERSONALIZATION', 'Personalization')
    },
    {
      key: 'ordering_channels',
      value: t('ORDERING_CHANNELS', 'Ordering channels')
    },
    // {
    //   key: 'publishing',
    //   value: t('PUBLISHING', 'Publishing')
    // },
    {
      key: 'layout',
      value: t('LAYOUT', 'Layout')
    },
    {
      key: 'webhooks',
      value: t('WEBHOOKS', 'Webhooks')
    },
    {
      key: 'places',
      value: t('PLACES', 'Places')
    }
  ]

  const onClickDeleteBusiness = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_BUSINESS', 'Are you sure that you want to delete this business?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteBusiness()
      }
    })
  }

  const expandSideBar = () => {
    const element = document.getElementById('business_details_bar')
    if (!element) return

    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (extraOpen) setIsExpand(false)
  }, [extraOpen])

  return (
    <>
      <BusinessDetailsContainer>
        <DetailsHeader>
          <LeftHeader>
            {businessState?.loading ? (
              <BusinessName>
                <Skeleton width={100} />
              </BusinessName>
            ) : (
              <BusinessName>
                {businessState?.business?.name}
              </BusinessName>
            )}
            {businessState?.loading ? (
              <Skeleton width={50} />
            ) : (
              <Switch
                defaultChecked={businessState?.business?.enabled}
                onChange={handleChangeActiveBusiness}
              />
            )}
          </LeftHeader>
          <RightHeader>
            <IconButton
              disabled
              // onClick={() => handleSelectedItem('support')}
            >
              <LifePreserver />
            </IconButton>
            {width > 576 && !extraOpen && (
              <IconButton
                color='black'
                onClick={() => expandSideBar()}
              >
                {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
              </IconButton>
            )}
            <ActionSelectorWrapper>
              <DropdownButton
                menuAlign={theme?.rtl ? 'left' : 'right'}
                title={<ThreeDots />}
                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
              >
                <Dropdown.Item
                  onClick={() => setIsBusinessPreview(true)}
                >
                  {t('PREVIEW', 'Preview')}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleDuplicateBusiness()}
                >
                  {t('DUPLICATE', 'Duplicate')}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleSelectedItem('personalization')}
                >
                  {t('PERSONALIZATION', 'Personalization')}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleSelectedItem('custom_fields')}
                >
                  {t('CUSTOM_FIELDS', 'Custom fields')}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => onClickDeleteBusiness()}
                >
                  {t('DELETE', 'Delete')}
                </Dropdown.Item>
              </DropdownButton>
            </ActionSelectorWrapper>
            <IconButton
              color='black'
              onClick={() => actionSidebar(false)}
            >
              <XLg />
            </IconButton>
          </RightHeader>
        </DetailsHeader>
        {businessState?.loading ? (
          <BusinessHeader isSkeleton>
            <BusinessLogo>
              <Skeleton width={60} height={60} />
            </BusinessLogo>
          </BusinessHeader>
        ) : (
          <BusinessHeader bgimage={optimizeImage(businessState?.business?.header, 'h_200,c_limit')}>
            <BusinessLogo bgimage={optimizeImage(businessState?.business?.logo || theme.images?.dummies?.businessLogo, 'h_100,c_limit')} />
          </BusinessHeader>
        )}

        <BusinessDetailsContent>
          <ButtonWrapper>
            <Button
              color='lightPrimary'
              borderRadius='8px'
              onClick={handleOpenCategory}
              disabled={businessState?.loading}
            >
              {t('CATEGORIES_AND_PRODUCTS', 'Categories & products')}
            </Button>
            <Button
              color='primary'
              outline
              borderRadius='8px'
              onClick={handleOpenSite}
              disabled={businessState?.loading}
            >
              {t('STORE_WEBSITE', 'Store website')}
            </Button>
          </ButtonWrapper>
          <BusinessDescription>
            {businessState?.loading ? (
              <Skeleton width={300} />
            ) : (
              businessState?.business?.description
            )}
          </BusinessDescription>
          <BusinessConfigsContainer isLoading={businessState?.loading}>
            {(isAdmin
              ? businessConfigs
              : businessConfigs.filter(c => !itemsExcluded.includes(c.key))
            ).map(config => (
              <BusinessConfigItem
                key={config.key}
                active={selectedItem === config.key}
                onClick={() => handleSelectedItem(config.key)}
              >
                <span>{config.value}</span>
                <BsChevronRight />
              </BusinessConfigItem>
            ))}
          </BusinessConfigsContainer>
        </BusinessDetailsContent>
      </BusinessDetailsContainer>
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
      <Modal
        width='900px'
        open={isBusinessPreview}
        onClose={() => {
          setIsBusinessPreview(false)
          setSelectedView('desktop')
        }}
      >
        <BusinessPreviewHeader>
          <h1>{t('PREVIEW', 'Preview')}</h1>
          <div>
            <IconButton
              color={selectedView === 'desktop' ? 'primary' : 'black'}
              onClick={() => setSelectedView('desktop')}
            >
              <Laptop />
            </IconButton>
            <IconButton
              color={selectedView === 'mobile' ? 'primary' : 'black'}
              onClick={() => setSelectedView('mobile')}
            >
              <Phone />
            </IconButton>
          </div>
        </BusinessPreviewHeader>
        <BusinessPreview
          isMobileView={selectedView === 'mobile'}
          business={businessState?.business}
        />
      </Modal>
    </>
  )
}
