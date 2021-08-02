import React from 'react'
import { AnalyticsStatusSubFilter as AnalyticsStatusSubFilterController } from './naked'
import { Button } from '../../styles/Buttons'
import MdClose from '@meronex/icons/ios/MdClose'
import { AutoScroll } from '../AutoScroll'
import {
  SubFilterContainer,
  InnerContainer,
  SkeletonWrapper
} from './styles'
import Skeleton from 'react-loading-skeleton'

export const AnalyticsStatusSubFilterUI = (props) => {
  const {
    appIdList,
    filterList,
    handleChangeFilterList
  } = props

  const changeAnalyticsSubStatus = (id) => {
    if (filterList?.app_id !== id) handleChangeFilterList({ ...filterList, app_id: id })
    else handleChangeFilterList({ ...filterList, app_id: null })
  }

  return (
    <SubFilterContainer>
      <InnerContainer>
        <AutoScroll innerScroll scrollId='analyticsSubFilter'>
          {appIdList.loading ? (
            <SkeletonWrapper>
              {
                [...Array(5).keys()].map(i => (
                  <Skeleton width={70} key={i} height={30} />
                ))
              }
            </SkeletonWrapper>
          ) : (
            ['all', ...appIdList?.ids].map((appId, i) => (
              <Button
                key={i}
                color={(filterList?.app_id === appId) ? 'primary' : 'secundary'}
                onClick={() => changeAnalyticsSubStatus(appId)}
              >
                {appId}
                {(filterList?.app_id === appId) && <MdClose />}
              </Button>
            ))
          )}
        </AutoScroll>
      </InnerContainer>
    </SubFilterContainer>
  )
}

export const AnalyticsStatusSubFilter = (props) => {
  const analyticsStatusSubFilterProps = {
    ...props,
    UIComponent: AnalyticsStatusSubFilterUI
  }
  return (
    <AnalyticsStatusSubFilterController {...analyticsStatusSubFilterProps} />
  )
}
