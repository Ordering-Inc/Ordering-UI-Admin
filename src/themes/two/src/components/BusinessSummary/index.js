import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils } from 'ordering-components-admin'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import BsLifePreserver from '@meronex/icons/bs/BsLifePreserver'
import { Switch } from '../../styles/Switch'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'
import { BusinessFormDetails } from '../BusinessFormDetails'

import {
  BusinessDetailsContainer,
  DetailsHeader,
  BusinessName,
  LeftHeader,
  RightHeader,
  SupportButton,
  CloseButton,
  BusinessHeader,
  BusinessLogo,
  BusinessDetailsContent,
  BusinessDescription,
  BusinessConfigsContainer,
  BusinessConfigItem
} from './styles'

export const BusinessSummary = (props) => {
  const {
    businessState,
    actionSidebar,
    handleChangeActiveBusiness,
    selectedItem,
    handleSelectedItem,
    handleSucessUpdateBusiness
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const [isEdit, setIsEdit] = useState(false)

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
      value: t('MENU', 'Menu')
    },
    {
      key: 'delivery_zones',
      value: t('DELIVERY_ZONES', 'Delivery zones')
    },
    {
      key: 'payment_methods',
      value: t('PAYMENS_METHODS', 'Payment methods')
    },
    {
      key: 'custom_fields',
      value: t('CUSTOM_FIELDS', 'Custom fields')
    },
    {
      key: 'personalization',
      value: t('PERSONALIZATION', 'Personalization')
    }
  ]

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
            <SupportButton
              onClick={() => handleSelectedItem('support')}
            >
              <BsLifePreserver />
            </SupportButton>
            <CloseButton
              onClick={() => actionSidebar(false)}
            >
              <MdcClose />
            </CloseButton>
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
              <BusinessHeader bgimage={optimizeImage(businessState?.business?.header, 'h_400,c_limit')}>
                <BusinessLogo bgimage={optimizeImage(businessState?.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
              </BusinessHeader>
            )}

            <BusinessDetailsContent>
              <Button
                color='lightPrimary'
                borderRadius='5px'
              >
                {t('CATEGORIES_AND_PRODUCTS', 'Categories & products')}
              </Button>
              <BusinessDescription>
                {businessState?.business?.loading ? (
                  <Skeleton height={50} />
                ) : (
                  businessState?.business?.description
                )}
              </BusinessDescription>
              <BusinessConfigsContainer>
                {businessConfigs.map(config => (
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
                color='secundary'
                borderRadius='5px'
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
    </>
  )
}
