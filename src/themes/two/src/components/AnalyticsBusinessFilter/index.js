import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { AnalyticsBusinessFilter as AnalyticsBusinessFilterController } from './naked'
import {
  AnalyticsBusinessFilterContainer,
  BusinessFilterOption,
  BusinessName
} from './styles'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'

const AnalyticsBusinessFilterUI = (props) => {
  const {
    businessList,
    businessIds
  } = props

  const isCheckEnableSate = (id) => {
    const found = businessIds?.find(businessId => businessId === id)
    let valid = false
    if (found) {
      valid = true
    }
    return valid
  }
  return (
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
          {businessList?.businesses.map((business, i) => (
            <BusinessFilterOption
              key={i}
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
  )
}

export const AnalyticsBusinessFilter = (props) => {
  const AnalyticsBusinessFilterProps = {
    ...props,
    UIComponent: AnalyticsBusinessFilterUI
  }
  return <AnalyticsBusinessFilterController {...AnalyticsBusinessFilterProps} />
}
