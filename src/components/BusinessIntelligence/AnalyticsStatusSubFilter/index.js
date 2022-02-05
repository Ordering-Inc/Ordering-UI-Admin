import React from 'react'
import { AnalyticsStatusSubFilter as AnalyticsStatusSubFilterController } from 'ordering-components-admin'
import { Button } from '../../../styles'
import MdClose from '@meronex/icons/ios/MdClose'
import { DragScroll } from '../../Shared'
import {
  SubFilterContainer,
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
      <DragScroll>
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
      </DragScroll>
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
