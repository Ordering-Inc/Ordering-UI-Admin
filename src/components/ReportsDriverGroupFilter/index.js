import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button } from '../../styles/Buttons'
import { ReportsDriverGroupFilter as ReportsDriverGroupFilterController } from './naked'
import {
  ReportsDriverGroupContainer,
  DriverGroupOption,
  BusinessName,
  FilterBtnWrapper
} from './styles'

const ReportsDriverGroupFilterUI = (props) => {
  const {
    driverGroupList,
    driverGroupIds,
    handleChangeDriverGroupId,
    handleClickFilterButton,
    isAllCheck,
    handleChangeAllCheck
  } = props

  const [, t] = useLanguage()

  const isCheckEnableSate = (id) => {
    const found = driverGroupIds?.find(groupId => groupId === id)
    let valid = false
    if (found) {
      valid = true
    }
    return valid
  }

  return (
    <>
      <ReportsDriverGroupContainer>
        {driverGroupList.loading ? (
          [...Array(10).keys()].map(i => (
            <DriverGroupOption key={i}>
              <Skeleton width={15} height={15} />
              <BusinessName>
                <Skeleton width={120} height={24} />
              </BusinessName>
            </DriverGroupOption>
          ))
        ) : (
          <div>
            <DriverGroupOption
              onClick={handleChangeAllCheck}
            >
              {isAllCheck ? (
                <RiCheckboxFill className='fill' />
              ) : (
                <RiCheckboxBlankLine />
              )}
              <BusinessName>{t('ALL', 'All')}</BusinessName>
            </DriverGroupOption>
            {driverGroupList?.driverGroups.map((group, i) => (
              <DriverGroupOption
                key={i}
                onClick={() => handleChangeDriverGroupId(group?.id)}
              >
                {isCheckEnableSate(group.id) ? (
                  <RiCheckboxFill className='fill' />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <BusinessName>{group?.name}</BusinessName>
              </DriverGroupOption>
            ))}
          </div>
        )}
      </ReportsDriverGroupContainer>
      <FilterBtnWrapper>
        <Button
          borderRadius='7.6px'
          color='primary'
          disabled={driverGroupList.loading}
          onClick={handleClickFilterButton}
        >
          {t('FILTER', 'Filter')}
        </Button>
      </FilterBtnWrapper>
    </>
  )
}

export const ReportsDriverGroupFilter = (props) => {
  const reportsDriverGroupFilterProps = {
    ...props,
    propsToFetch: ['id', 'name', 'enabled', 'drivers'],
    UIComponent: ReportsDriverGroupFilterUI
  }
  return <ReportsDriverGroupFilterController {...reportsDriverGroupFilterProps} />
}
