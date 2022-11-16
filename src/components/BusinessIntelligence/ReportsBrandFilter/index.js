import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, ReportsBrandFilter as ReportsBrandFilterController } from 'ordering-components-admin'
import { CheckSquareFill as Checked, Square as UnChecked } from 'react-bootstrap-icons'
import { Button } from '../../../styles'
import {
  ReportsBrandFilterContainer,
  BrandFilterOption,
  BusinessName,
  FilterBtnWrapper
} from './styles'

const ReportsBrandFilterUI = (props) => {
  const {
    brandList,
    brandIds,
    handleChangeBrandId,
    handleClickFilterButton,
    isAllCheck,
    handleChangeAllCheck
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <ReportsBrandFilterContainer>
        {brandList.loading ? (
          [...Array(10).keys()].map(i => (
            <BrandFilterOption key={i}>
              <Skeleton width={18} height={18} />
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
                <Checked className='fill' />
              ) : (
                <UnChecked />
              )}
              <BusinessName>{t('ALL', 'All')}</BusinessName>
            </BrandFilterOption>
            {brandList?.brands.map((brand, i) => (
              <BrandFilterOption
                key={i}
                onClick={() => handleChangeBrandId(brand?.id)}
              >
                {brandIds?.includes(brand.id) ? (
                  <Checked className='fill' />
                ) : (
                  <UnChecked />
                )}
                <BusinessName>{brand?.name}</BusinessName>
              </BrandFilterOption>
            ))}
          </div>
        )}
      </ReportsBrandFilterContainer>
      <FilterBtnWrapper>
        <Button
          borderRadius='7.6px'
          color='primary'
          disabled={brandList.loading}
          onClick={handleClickFilterButton}
        >
          {t('FILTER', 'Filter')}
        </Button>
      </FilterBtnWrapper>
    </>
  )
}

export const ReportsBrandFilter = (props) => {
  const reportsBrandFilterProps = {
    ...props,
    propsToFetch: ['id', 'name', 'enabled'],
    UIComponent: ReportsBrandFilterUI
  }
  return <ReportsBrandFilterController {...reportsBrandFilterProps} />
}
