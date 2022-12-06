import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useUtils, useLanguage, BusinessDetails as BusinessController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Switch } from '../../../styles'
import { StarFill, CheckSquareFill, Square } from 'react-bootstrap-icons'

import {
  SingleBusinessContainer,
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
  BusinessHeaderContent,
  BusinessIdWrapper,
  CheckBoxWrapper,
  FeaturedWrapper
} from './styles'

const SingleBusinessUI = (props) => {
  const {
    isSkeleton,
    viewMethod,
    allowColumns,
    businessState,
    handleChangeActiveBusiness,
    handleOpenBusinessDetails,
    detailsBusinessId,
    businessIds,
    handleChangeBusinessIds
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()

  const handleClickBusiness = (e) => {
    const isInvalid = e.target.closest('.business_enable_control') ||
      e.target.closest('.business_actions') ||
      e.target.closest('.business-id') ||
      e.target.closest('.featured')
    if (isInvalid) return
    handleOpenBusinessDetails(businessState?.business)
  }

  return (
    <>
      {viewMethod === 'list' && (
        <>
          {(businessState?.loading || isSkeleton) ? (
            <SingleBusinessContainer>
              <tr>
                <td>
                  <BusinessIdWrapper>
                    <Skeleton width={18} height={18} />
                    <Skeleton width={40} style={{ margin: '0px 5px' }} />
                  </BusinessIdWrapper>
                </td>
                {allowColumns?.business && (
                  <td className='business'>
                    <BusinessGeneralInfo>
                      <WrapperImage isSkeleton={businessState?.loading || isSkeleton}>
                        <Skeleton width={45} height={45} />
                      </WrapperImage>
                      <InfoBlock>
                        <p className='bold'><Skeleton width={120} /></p>
                        <p><Skeleton width={80} /></p>
                      </InfoBlock>
                    </BusinessGeneralInfo>
                  </td>
                )}
                {allowColumns?.featured && (
                  <td>
                    <InfoBlock>
                      <p className='bold'><Skeleton width={60} /></p>
                    </InfoBlock>
                  </td>
                )}
                {allowColumns?.ratings && (
                  <td>
                    <InfoBlock>
                      <p className='bold'><Skeleton width={30} /></p>
                      <p><Skeleton width={50} /></p>
                    </InfoBlock>
                  </td>
                )}
                <td>
                  <Skeleton width={100} />
                </td>
              </tr>
            </SingleBusinessContainer>
          ) : (
            <SingleBusinessContainer
              active={businessState?.business.id === parseInt(detailsBusinessId)}
              onClick={(e) => handleClickBusiness(e)}
            >
              <tr>
                <td>
                  <BusinessIdWrapper>
                    <CheckBoxWrapper
                      className='business-id'
                      isChecked={businessIds.includes(businessState?.business?.id)}
                      onClick={() => handleChangeBusinessIds(businessState?.business?.id)}
                    >
                      {(!businessState?.loading && businessIds.includes(businessState?.business?.id)) ? (
                        <CheckSquareFill />
                      ) : (
                        <Square />
                      )}
                    </CheckBoxWrapper>
                    {businessState?.business?.id}
                  </BusinessIdWrapper>
                </td>
                {allowColumns?.business && (
                  <td className='business'>
                    <BusinessGeneralInfo>
                      <WrapperImage>
                        <Image bgimage={optimizeImage(businessState?.business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
                      </WrapperImage>
                      <InfoBlock>
                        <p className='bold'>{businessState?.business?.name}</p>
                        <p>{businessState?.business?.city?.name}</p>
                      </InfoBlock>
                    </BusinessGeneralInfo>
                  </td>
                )}
                {allowColumns?.featured && (
                  <td>
                    <FeaturedWrapper className='featured'>
                      <Switch
                        defaultChecked={businessState?.business?.featured}
                        onChange={(enabled) => handleChangeActiveBusiness(enabled, true)}
                      />
                    </FeaturedWrapper>
                  </td>
                )}
                {allowColumns?.ratings && (
                  <td>
                    {businessState?.business?.reviews?.total > 0 && (
                      <InfoBlock>
                        <p className='star'>
                          <StarFill />
                          <span>{businessState?.business?.reviews?.total}</span>
                        </p>
                      </InfoBlock>
                    )}
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
              </tr>
            </SingleBusinessContainer>
          )}
        </>
      )}

      {viewMethod === 'card' && (
        <>
          {(businessState?.loading || isSkeleton) ? (
            <SingleBusinessCardContainer isSkeleton>
              <BusinessHeader isSkeleton>
                <BusinessHeaderContent>
                  <BusinessLogo>
                    <Skeleton width={45} height={45} />
                  </BusinessLogo>
                  <Skeleton width={50} />
                </BusinessHeaderContent>
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
              <BusinessHeader bgimage={optimizeImage(businessState?.business?.header, 'h_100,c_limit')}>
                <BusinessHeaderContent>
                  <BusinessLogo bgimage={optimizeImage(businessState?.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                </BusinessHeaderContent>
              </BusinessHeader>
              <BusinessContent>
                <h1>{businessState?.business?.name}</h1>
                <p>{businessState?.business?.city?.name}</p>
                <BusinessActionContainer>
                  <span>{t('ID', 'ID')} {businessState?.business?.id}</span>
                  <BusinessEnableWrapper className='business_enable_control'>
                    <span>{t('ENABLE', 'Enable')}</span>
                    <Switch
                      defaultChecked={businessState?.business?.enabled}
                      onChange={handleChangeActiveBusiness}
                    />
                  </BusinessEnableWrapper>
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
