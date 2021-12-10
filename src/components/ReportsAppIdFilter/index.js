import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import { ReportsAppIdFilter as ReportsAppIdFilterController } from './naked'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button } from '../../styles/Buttons'
import {
  ReportsAppIdContainer,
  BrandFilterOption,
  BusinessName,
  FilterBtnWrapper
} from './styles'

const ReportsAppIdFilterUI = (props) => {
  const {
    appIdList,
    appIds,
    handleChangeAppId,
    handleClickFilterButton,
    isAllCheck,
    handleChangeAllCheck
  } = props

  const [, t] = useLanguage()

  const isCheckEnableSate = (id) => {
    const found = appIds?.find(brandId => brandId === id)
    let valid = false
    if (found) {
      valid = true
    }
    return valid
  }

  return (
    <>
      <ReportsAppIdContainer>
        {appIdList.loading ? (
          [...Array(10).keys()].map(i => (
            <BrandFilterOption key={i}>
              <Skeleton width={15} height={15} />
              <BusinessName>
                <Skeleton width={120} height={24} />
              </BusinessName>
            </BrandFilterOption>
          ))
        ) : (
          <div>
            <BrandFilterOption
              onClick={handleChangeAllCheck}
            >
              {isAllCheck ? (
                <RiCheckboxFill className='fill' />
              ) : (
                <RiCheckboxBlankLine />
              )}
              <BusinessName>{t('ALL', 'All')}</BusinessName>
            </BrandFilterOption>
            {appIdList?.appIds.map((appId, i) => (
              <BrandFilterOption
                key={i}
                onClick={() => handleChangeAppId(appId?.id)}
              >
                {isCheckEnableSate(appId.id) ? (
                  <RiCheckboxFill className='fill' />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <BusinessName>{appId?.name}</BusinessName>
              </BrandFilterOption>
            ))}
          </div>
        )}
      </ReportsAppIdContainer>
      <FilterBtnWrapper>
        <Button
          borderRadius='7.6px'
          color='primary'
          disabled={appIdList.loading}
          onClick={handleClickFilterButton}
        >
          {t('FILTER', 'Filter')}
        </Button>
      </FilterBtnWrapper>
    </>
  )
}

export const ReportsAppIdFilter = (props) => {
  const reportsAppIdFilterProps = {
    ...props,
    propsToFetch: ['id', 'name', 'code'],
    UIComponent: ReportsAppIdFilterUI
  }
  return <ReportsAppIdFilterController {...reportsAppIdFilterProps} />
}
