import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, BusinessDetails as BusinessDetailsController } from 'ordering-components-admin'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import BsLifePreserver from '@meronex/icons/bs/BsLifePreserver'
import { Switch } from '../../styles/Switch'

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
} from './styles'

const BusinessDetailsUI = (props) => {
  const {
    businessState,
    actionSidebar,
    handleChangeActiveBusiness
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  return (
    <BusinessDetailsContainer>
      <DetailsHeader>
        <LeftHeader>
          {businessState?.business?.name ? (
            <BusinessName>{businessState?.business?.name}</BusinessName>
          ) : (
            <BusinessName>
              <Skeleton width={100} />
            </BusinessName>
          )}
          {businessState?.business?.enabled ? (
            <Switch
              defaultChecked={businessState?.business?.enabled}
              onChange={handleChangeActiveBusiness}
            />
          ) : (
            <Skeleton width={50} />
          )}
        </LeftHeader>
        <RightHeader>
          <SupportButton>
            <BsLifePreserver />
          </SupportButton>
          <CloseButton
            onClick={() => actionSidebar(false)}
          >
            <MdcClose />
          </CloseButton>
        </RightHeader>
      </DetailsHeader>
      {businessState?.business?.header ? (
        <BusinessHeader bgimage={optimizeImage(businessState?.business?.header, 'h_400,c_limit')}>
          <BusinessLogo bgimage={optimizeImage(businessState?.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
        </BusinessHeader>
      ) : (
        <BusinessHeader isSkeleton>
          <BusinessLogo>
            <Skeleton width={60} height={60} />
          </BusinessLogo>
        </BusinessHeader>
      )}
    </BusinessDetailsContainer>
  )
}

export const BusinessDetails = (props) => {
  const businessDetailsProps = {
    ...props,
    UIComponent: BusinessDetailsUI
  }

  return <BusinessDetailsController {...businessDetailsProps} />
}
