import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useUtils, useLanguage, BusinessDetails as BusinessController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { convertHoursToMinutes } from '../../../../../utils'
import { Switch } from '../../styles/Switch'
import { BusinessActionSelector } from '../BusinessActionSelector'
import {
  SingleBusinessContainer,
  WrapperImage,
  Image,
  BusinessGeneralInfo,
  InfoBlock,
  BusinessEnableWrapper
} from './styles'

const SingleBusinessUI = (props) => {
  const {
    isSkeleton,
    allowColumns,
    businessState,
    handleChangeActiveBusiness,
    handleDuplicateBusiness,
    handleDeleteBusiness
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const theme = useTheme()

  return (
    <>
      {(businessState?.loading || isSkeleton) ? (
        <SingleBusinessContainer>
          <tr>
            {allowColumns?.business && (
              <td>
                <BusinessGeneralInfo>
                  <WrapperImage>
                    <Skeleton width={45} height={45} />
                  </WrapperImage>
                  <InfoBlock>
                    <p className='bold'><Skeleton width={150} /></p>
                    <p><Skeleton width={100} /></p>
                  </InfoBlock>                     
                </BusinessGeneralInfo>
              </td>
            )}
            {allowColumns?.deliveryFee && (
              <td>
                <InfoBlock>
                  <p className='bold'><Skeleton width={150} /></p>
                  <p><Skeleton width={100} /></p>
                </InfoBlock> 
              </td>
            )}
            {allowColumns?.distance && (
              <td>
                <InfoBlock>
                  <p className='bold'><Skeleton width={150} /></p>
                  <p><Skeleton width={100} /></p>
                </InfoBlock> 
              </td>
            )}
            {allowColumns?.deliveryTime && (
              <td>
                <InfoBlock>
                  <p className='bold'><Skeleton width={150} /></p>
                  <p><Skeleton width={100} /></p>
                </InfoBlock> 
              </td>
            )}
            <td>
              <Skeleton width={100} />
            </td>
            <td>
              <Skeleton width={30} />
            </td>
          </tr>
        </SingleBusinessContainer>
      ) : (
        <SingleBusinessContainer>
          <tr>
            {allowColumns?.business && (
              <td>
                <BusinessGeneralInfo>
                  <WrapperImage>
                    <Image bgimage={optimizeImage(businessState?.business?.logo || theme.images?.dummies?.businessLogo)} />
                  </WrapperImage>
                  <InfoBlock>
                    <p className='bold'>{businessState?.business?.name}</p>
                    <p>{businessState?.business?.city?.name}</p>
                  </InfoBlock>                     
                </BusinessGeneralInfo>
              </td>
            )}
            {allowColumns?.deliveryFee && (
              <td>
                <InfoBlock>
                  <p className='bold'>{t('DELIVERY_FEE', 'Delivery fee')}</p>
                  <p>{parsePrice(businessState?.business?.delivery_price)}</p>
                </InfoBlock>
              </td>
            )}
            {allowColumns?.distance && (
              <td>
                <InfoBlock>
                  <p className='bold'>{t('DISTANCE', 'Distance')}</p>
                  <p>{parseDistance(businessState?.business?.distance)}</p>
                </InfoBlock>
              </td>
            )}
            {allowColumns?.deliveryTime && (
              <td>
                <InfoBlock>
                  <p className='bold'>{t('DELIVERY_TIME', 'Delivery time')}</p>
                  <p>{convertHoursToMinutes(businessState?.business?.delivery_time)}</p>
                </InfoBlock>
              </td>
            )}
            <td>
              <BusinessEnableWrapper className='business_enable_control'>
                <span>{t('ENABLE', 'Enable')}</span>
                <Switch
                  defaultChecked={businessState?.business?.enabled}
                  onChange={handleChangeActiveBusiness}
                />
              </BusinessEnableWrapper>
            </td>
            <td>
              <BusinessActionSelector
                business={businessState?.business}
                handleDuplicateBusiness={handleDuplicateBusiness}
                handleDeleteBusiness={handleDeleteBusiness}
                handleOpenBusinessDetails={() => console.log('open')}
              />
            </td>
          </tr>
        </SingleBusinessContainer>
      )}
    </>
  )
}

export const SingleBusiness = (props) => {
  const { isSkeleton } = props
  const singleBusinessProps = {
    ...props,
    UIComponent: SingleBusinessUI
  }
  return (
    <>
      {isSkeleton ? (
        <SingleBusinessUI isSkeleton />
      ) : (
        <BusinessController {...singleBusinessProps} />
      )}
    </>
  )
}
