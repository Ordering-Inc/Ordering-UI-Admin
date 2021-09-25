import React from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  AnalyticsBusinessFilterContainer,
  BusinessFilterOption,
  BusinessName,
  FilterBtnWrapper
} from './styles'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button } from '../../styles/Buttons'
import { useLanguage, AnalyticsBusinessFilter as AnalyticsBusinessFilterController } from 'ordering-components-admin'

const AnalyticsBusinessFilterUI = (props) => {
  const {
    businessList,
    businessIds,
    handleChangeBusinessId,
    handleClickFilterButton,
    isAllCheck,
    handleChangeAllCheck
  } = props

  const [, t] = useLanguage()

  const isCheckEnableSate = (id) => {
    const found = businessIds?.find(businessId => businessId === id)
    let valid = false
    if (found) {
      valid = true
    }
    return valid
  }

  return (
    <>
      <AnalyticsBusinessFilterContainer>
        {businessList.loading ? (
          [...Array(10).keys()].map(i => (
            <BusinessFilterOption key={i}>
              <Skeleton width={15} height={15} />
              <BusinessName>
                <Skeleton width={120} height={24} />
              </BusinessName>
            </BusinessFilterOption>
          ))
        ) : (
          <div>
            <BusinessFilterOption
              onClick={handleChangeAllCheck}
            >
              {isAllCheck ? (
                <RiCheckboxFill className='fill' />
              ) : (
                <RiCheckboxBlankLine />
              )}
              <BusinessName>{t('ALL', 'All')}</BusinessName>
            </BusinessFilterOption>
            {businessList?.businesses.map((business, i) => (
              <BusinessFilterOption
                key={i}
                onClick={() => handleChangeBusinessId(business?.id)}
              >
                {isCheckEnableSate(business.id) ? (
                  <RiCheckboxFill className='fill' />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <BusinessName>{business?.name}</BusinessName>
              </BusinessFilterOption>
            ))}
          </div>
        )}
      </AnalyticsBusinessFilterContainer>
      <FilterBtnWrapper>
        <Button
          borderRadius='7.6px'
          color='primary'
          disabled={businessList.loading}
          onClick={handleClickFilterButton}
        >
          {t('FILTER', 'Filter')}
        </Button>
      </FilterBtnWrapper>
    </>
  )
}

export const AnalyticsBusinessFilter = (props) => {
  const AnalyticsBusinessFilterProps = {
    ...props,
    propsToFetch: ['id', 'name', 'slug'],
    UIComponent: AnalyticsBusinessFilterUI
  }
  return <AnalyticsBusinessFilterController {...AnalyticsBusinessFilterProps} />
}
