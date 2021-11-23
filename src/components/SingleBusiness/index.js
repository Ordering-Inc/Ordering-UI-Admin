import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useUtils, useLanguage, BusinessDetails as BusinessController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Switch } from '../../styles/Switch'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { StarFill, ThreeDotsVertical } from 'react-bootstrap-icons'

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
  WrapperBusinessActionSelector,
  BusinessHeaderContent
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
    handleOpenBusinessDetails,
    detailsBusinessId
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
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
            <SingleBusinessContainer>
              <tr>
                {allowColumns?.id && (
                  <td className='business-id'>
                    <Skeleton width={30} />
                  </td>
                )}
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
                <td>
                  <Skeleton width={30} />
                </td>
              </tr>
            </SingleBusinessContainer>
          ) : (
            <SingleBusinessContainer
              active={businessState?.business.id === parseInt(detailsBusinessId)}
              onClick={(e) => handleClickBusiness(e)}
            >
              <tr>
                {allowColumns?.id && (
                  <td className='business-id'>
                    {businessState?.business?.id}
                  </td>
                )}
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
                {allowColumns?.featured && (
                  <td>
                    <InfoBlock>
                      {businessState?.business?.featured && (
                        <p>{t('FEATURE', 'Featured')}</p>
                      )}
                    </InfoBlock>
                  </td>
                )}
                {allowColumns?.ratings && (
                  <td>
                    {businessState?.business?.reviews?.total > 0 && (
                      <InfoBlock>
                        <p className='star'><StarFill /></p>
                        {businessState?.business?.reviews?.total && (
                          <p>{businessState?.business?.reviews?.total}</p>
                        )}
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
                <td>
                  <WrapperBusinessActionSelector className='business_actions'>
                    <DropdownButton
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={<ThreeDotsVertical />}
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
              <BusinessHeader bgimage={optimizeImage(businessState?.business?.header, 'h_400,c_limit')}>
                <BusinessHeaderContent>
                  <BusinessLogo bgimage={optimizeImage(businessState?.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
                  <span>{t('ID', 'ID')} {businessState?.business?.id}</span>
                </BusinessHeaderContent>
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
                      title={<ThreeDotsVertical />}
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
