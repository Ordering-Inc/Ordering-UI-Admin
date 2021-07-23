import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useUtils, useLanguage, BusinessDetails as BusinessController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { convertHoursToMinutes } from '../../../../../utils'
import { Switch } from '../../styles/Switch'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'

import {
  SingleListBusinessContainer,
  WrapperImage,
  Image,
  BusinessGeneralInfo,
  InfoBlock,
  BusinessEnableWrapper,
  SingleBusinessCardContainer,
  BusinessHeader,
  BusinessLogo,
  BusinessContent,
  BusinessActionContainer,
  WrapperBusinessActionSelector
} from './styles'

const SingleBusinessUI = (props) => {
  const {
    isSkeleton,
    viewMethod,
    allowColumns,
    businessState,
    handleChangeActiveBusiness,
    handleDuplicateBusiness,
    handleDeleteBusiness,
    handleOpenBusinessDetails
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, parseDistance, optimizeImage }] = useUtils()
  const theme = useTheme()

  const handleClickBusiness = (e) => {
    const isInvalid = e.target.closest('.business_enable_control') || e.target.closest('.business_actions')
    if (isInvalid) return
    handleOpenBusinessDetails(businessState?.business)
  }
  return (
    <>
      {viewMethod === 'list' && (
        <>
          {(businessState?.loading || isSkeleton) ? (
            <SingleListBusinessContainer>
              <tr>
                {allowColumns?.business && (
                  <td className='business'>
                    <BusinessGeneralInfo>
                      <WrapperImage>
                        <Skeleton width={45} height={45} />
                      </WrapperImage>
                      <InfoBlock>
                        <p className='bold'><Skeleton width={120} /></p>
                        <p><Skeleton width={80} /></p>
                      </InfoBlock>
                    </BusinessGeneralInfo>
                  </td>
                )}
                {(allowColumns?.deliveryFee || allowColumns?.distance || allowColumns?.deliveryTime) && (
                  <>
                    <td>
                      {allowColumns?.deliveryFee && (
                        <InfoBlock>
                          <p className='bold'><Skeleton width={120} /></p>
                          <p><Skeleton width={80} /></p>
                        </InfoBlock>
                      )}
                    </td>
                    <td>
                      {allowColumns?.distance && (
                        <InfoBlock>
                          <p className='bold'><Skeleton width={120} /></p>
                          <p><Skeleton width={80} /></p>
                        </InfoBlock>
                      )}
                    </td>
                    <td>
                      {allowColumns?.deliveryTime && (
                        <InfoBlock>
                          <p className='bold'><Skeleton width={120} /></p>
                          <p><Skeleton width={80} /></p>
                        </InfoBlock>
                      )}
                    </td>
                  </>
                )}
                <td>
                  <Skeleton width={100} />
                </td>
                <td>
                  <Skeleton width={30} />
                </td>
              </tr>
            </SingleListBusinessContainer>
          ) : (
            <SingleListBusinessContainer
              onClick={(e) => handleClickBusiness(e)}
            >
              <tr>
                {allowColumns?.business && (
                  <td className='business'>
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
                {(allowColumns?.deliveryFee || allowColumns?.distance || allowColumns?.deliveryTime) && (
                  <>
                    <td>
                      {allowColumns?.deliveryFee && (
                        <InfoBlock>
                          <p className='bold'>{t('DELIVERY_FEE', 'Delivery fee')}</p>
                          <p>{parsePrice(businessState?.business?.delivery_price)}</p>
                        </InfoBlock>
                      )}
                    </td>
                    <td>
                      {allowColumns?.distance && (
                        <InfoBlock>
                          <p className='bold'>{t('DISTANCE', 'Distance')}</p>
                          <p>{parseDistance(businessState?.business?.distance)}</p>
                        </InfoBlock>
                      )}
                    </td>
                    <td>
                      {allowColumns?.deliveryTime && (
                        <InfoBlock>
                          <p className='bold'>{t('DELIVERY_TIME', 'Delivery time')}</p>
                          <p>{convertHoursToMinutes(businessState?.business?.delivery_time)}</p>
                        </InfoBlock>
                      )}
                    </td>
                  </>
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
                  <WrapperBusinessActionSelector className='business_actions'>
                    <DropdownButton
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={<FiMoreVertical />}
                      id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                    >
                      <Dropdown.Item
                        onClick={() => handleDuplicateBusiness()}
                      >
                        {t('DUPLICATE', 'Duplicate')}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleOpenBusinessDetails(businessState?.business)}
                      >
                        {t('EDIT', 'Edit')}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDeleteBusiness()}
                      >
                        {t('DELETE', 'Delete')}
                      </Dropdown.Item>
                    </DropdownButton>
                  </WrapperBusinessActionSelector>
                </td>
              </tr>
            </SingleListBusinessContainer>
          )}
        </>
      )}

      {viewMethod === 'card' && (
        <>
          {(businessState?.loading || isSkeleton) ? (
            <SingleBusinessCardContainer isSkeleton>
              <BusinessHeader isSkeleton>
                <BusinessLogo>
                  <Skeleton width={45} height={45} />
                </BusinessLogo>
              </BusinessHeader>
              <BusinessContent>
                <h1><Skeleton width={80} /></h1>
                <p><Skeleton width={80} /></p>
                <BusinessActionContainer>
                  <BusinessEnableWrapper className='business_enable_control'>
                    <Skeleton width={100} />
                  </BusinessEnableWrapper>
                  <Skeleton width={30} />
                </BusinessActionContainer>
              </BusinessContent>
            </SingleBusinessCardContainer>
          ) : (
            <SingleBusinessCardContainer
              onClick={(e) => handleClickBusiness(e)}
            >
              <BusinessHeader bgimage={optimizeImage(businessState?.business?.header, 'h_400,c_limit')}>
                <BusinessLogo bgimage={optimizeImage(businessState?.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
              </BusinessHeader>
              <BusinessContent>
                <h1>{businessState?.business?.name}</h1>
                <p>{businessState?.business?.city?.name}</p>
                <BusinessActionContainer>
                  <BusinessEnableWrapper className='business_enable_control'>
                    <span>{t('ENABLE', 'Enable')}</span>
                    <Switch
                      defaultChecked={businessState?.business?.enabled}
                      onChange={handleChangeActiveBusiness}
                    />
                  </BusinessEnableWrapper>
                  <WrapperBusinessActionSelector className='business_actions'>
                    <DropdownButton
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={<FiMoreVertical />}
                      id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                    >
                      <Dropdown.Item
                        onClick={() => handleDuplicateBusiness()}
                      >
                        {t('DUPLICATE', 'Duplicate')}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleOpenBusinessDetails(businessState?.business)}
                      >
                        {t('EDIT', 'Edit')}
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleDeleteBusiness()}
                      >
                        {t('DELETE', 'Delete')}
                      </Dropdown.Item>
                    </DropdownButton>
                  </WrapperBusinessActionSelector>
                </BusinessActionContainer>
              </BusinessContent>
            </SingleBusinessCardContainer>
          )}
        </>
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
        <SingleBusinessUI {...props} />
      ) : (
        <BusinessController {...singleBusinessProps} />
      )}
    </>
  )
}
