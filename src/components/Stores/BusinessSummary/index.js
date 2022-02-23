import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils } from 'ordering-components-admin'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { useTheme } from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { XLg, LifePreserver, ThreeDots } from 'react-bootstrap-icons'
import { BusinessFormDetails } from '../BusinessFormDetails'
import { Button, IconButton, Switch } from '../../../styles'
import { Confirm } from '../../Shared'

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
  ActionSelectorWrapper
} from './styles'

export const BusinessSummary = (props) => {
  const {
    isAdmin,
    businessState,
    actionSidebar,
    handleChangeActiveBusiness,
    selectedItem,
    handleSelectedItem,
    handleSucessUpdateBusiness,
    handleDuplicateBusiness,
    handleDeleteBusiness
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const [isEdit, setIsEdit] = useState(false)
  const history = useHistory()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleOpenCategory = () => {
    history.push(`/stores/list/${businessState?.business?.slug}`)
  }

  const itemsExcluded = ['publishing']

  const businessConfigs = [
    {
      key: 'information',
      value: t('INFORMATION', 'Information')
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
      key: 'delivery_zones',
      value: t('DELIVERY_ZONES', 'Delivery zones')
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
      key: 'promotions',
      value: t('PROMOTIONS', 'Promotions')
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
      key: 'layout',
      value: t('LAYOUT', 'Layout')
    },
    {
      key: 'webhooks',
      value: t('WEBHOOKS', 'Webhooks')
    },
    {
      key: 'more',
      value: t('MORE', 'More')
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
            <ActionSelectorWrapper>
              <DropdownButton
                menuAlign={theme?.rtl ? 'left' : 'right'}
                title={<ThreeDots />}
                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
              >
                <Dropdown.Item
                  onClick={() => handleDuplicateBusiness()}
                >
                  {t('DUPLICATE', 'Duplicate')}
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
        {!isEdit ? (
          <>
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
              <Button
                color='lightPrimary'
                borderRadius='8px'
                onClick={handleOpenCategory}
                disabled={businessState?.loading}
              >
                {t('CATEGORIES_AND_PRODUCTS', 'Categories & products')}
              </Button>
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
              <Button
                color='secundaryDark'
                borderRadius='8px'
                disabled={businessState.loading}
                onClick={() => setIsEdit(true)}
              >
                {t('EDIT', 'Edit')}
              </Button>
            </BusinessDetailsContent>
          </>
        ) : (
          <BusinessFormDetails
            business={businessState.business}
            onCancel={() => setIsEdit(false)}
            handleSuccessUpdate={handleSucessUpdateBusiness}
          />
        )}
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
    </>
  )
}
