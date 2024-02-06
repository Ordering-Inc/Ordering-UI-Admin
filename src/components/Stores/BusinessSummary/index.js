import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, useEvent, useApi, useConfig, useSession } from 'ordering-components-admin'
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
import { checkSiteUrl } from '../../../utils'

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
    handleSyncEvent,
    extraOpen,
    spoonityConfig,
    siteState,
    isExpand,
    setIsExpand
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const [ordering] = useApi()
  const { width } = useWindowSize()
  const [isBusinessPreview, setIsBusinessPreview] = useState(false)
  const [selectedView, setSelectedView] = useState('desktop')
  const [sessionState] = useSession()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const isEnabledWhiteLabelModule = configs?.white_label_module?.value
  const isAllowRegisteredBusiness = ((sessionState?.user?.level === 0) || (sessionState?.user?.level === 2 && configs?.allow_business_owner_register_business?.value === '1'))
  const projectsForEnableSync = ['dominosordering']
  const enableSyncFunctions = projectsForEnableSync.includes(ordering.project)
  const handleOpenCategory = () => {
    events.emit('go_to_page', { page: 'store', params: { store: businessState?.business?.slug } })
  }

  const handleOpenSite = () => {
    const storeUrl = siteState?.site?.domain && siteState?.site?.ssl_process_status === 'ended'
      ? `https://${siteState?.site?.domain}/store/${businessState?.business?.slug}`
      : configs?.site_url?.value
        ? `${checkSiteUrl(configs?.site_url?.value)}store/${businessState?.business?.slug}`
        : `https://${ordering.project}.tryordering.com/store/${businessState?.business?.slug}`
    window.open(storeUrl, '_blank')
  }

  const itemsExcluded = !!spoonityConfig ? ['publishing', 'personalization'] : ['publishing', 'spoonity_key', 'personalization']

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
    {
      key: 'publishing',
      value: t('PUBLISHING', 'Publishing')
    },
    {
      key: 'sales_channels',
      value: t('SALES_CHANNELS', 'Sales channels')
    },
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
    }, {
      key: 'spoonity_key',
      value: t('SPOONITY_KEY', 'Sponity key')
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
                {isAllowRegisteredBusiness && (
                  <Dropdown.Item
                    onClick={() => handleDuplicateBusiness()}
                  >
                    {t('DUPLICATE', 'Duplicate')}
                  </Dropdown.Item>
                )}
                {!isEnabledWhiteLabelModule && (
                  <Dropdown.Item
                    onClick={() => handleSelectedItem('personalization')}
                  >
                    {t('PERSONALIZATION', 'Personalization')}
                  </Dropdown.Item>
                )}
                <Dropdown.Item
                  onClick={() => handleSelectedItem('custom_fields')}
                >
                  {t('CUSTOM_FIELDS', 'Custom fields')}
                </Dropdown.Item>
                {enableSyncFunctions && (
                  <>
                    <Dropdown.Item
                      onClick={() => handleSyncEvent('business')}
                    >
                      {t('SYNC_BUSINESS', 'Sync Business')}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleSyncEvent('products')}
                    >
                      {t('SYNC_PRODUCTS', 'Sync Products')}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleSyncEvent('coupons')}
                    >
                      {t('SYNC_COUPONS', 'Sync Coupons')}
                    </Dropdown.Item>
                  </>
                )}
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
            {!isEnabledWhiteLabelModule && (
              <Button
                color='primary'
                outline
                borderRadius='8px'
                onClick={handleOpenSite}
                disabled={businessState?.loading}
              >
                {t('STORE_WEBSITE', 'Store website')}
              </Button>
            )}
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
              ? !!spoonityConfig
                ? businessConfigs
                : businessConfigs.filter(configs => configs.key !== 'spoonity_key')
              : businessConfigs.filter(c => !itemsExcluded.includes(c.key))
            ).filter(item => isEnabledWhiteLabelModule ? !['personalization', 'sales_channels'].includes(item.key) : true).map(config => (
              <BusinessConfigItem
                key={config.key}
                active={selectedItem === config.key}
                onClick={() => handleSelectedItem(config.key)}
              >
                <span>{config.value}</span>
                <BsChevronRight />
              </BusinessConfigItem>
            )
            )}
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
