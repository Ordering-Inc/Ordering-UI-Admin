import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { AnalyticsDriversFilter as AnalyticsDriversFilterController } from './naked'
import {
  AnalyticsBusinessFilterContainer,
  FilterBtnWrapper,
  TreeViewItemContainer,
  TreeViewParentItem,
  TreeViewParentLabel,
  TreeViewChildrenItem,
  TreeViewChildrenLabel,
  TreeViewChildrenContainer,
  SelectBtnWrapper
} from './styles'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import AiFillMinusSquare from '@meronex/icons/ai/AiFillMinusSquare'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button } from '../../styles/Buttons'
import { useLanguage } from 'ordering-components-admin'

const AnalyticsDriversFilterUI = (props) => {
  const {
    usersList,
    handleClickFilterButton,
    groupList,
    handleChangeCollapse,
    userIds,
    handleChangeUserId,
    isParentCheck,
    parentClick,
    isAllCheck,
    changeAllCheckStatus
  } = props

  const [, t] = useLanguage()

  const isCheckEnableSate = (id) => {
    const found = userIds?.find(userId => userId === id)
    let valid = false
    if (found) {
      valid = true
    }
    return valid
  }

  return (
    <AnalyticsBusinessFilterContainer>
      {usersList.loading ? (
        <>
          <SelectBtnWrapper>
            {
              [...Array(2).keys()].map(i => (
                <Skeleton width={70} key={i} height={30} />
              ))
            }
          </SelectBtnWrapper>
          {
            [...Array(10).keys()].map(i => (
              <TreeViewParentItem key={i}>
                <Skeleton width={15} height={15} />
                <TreeViewParentLabel>
                  <Skeleton width={120} height={24} />
                </TreeViewParentLabel>
              </TreeViewParentItem>
            ))
          }
        </>
      ) : (
        <div>
          <SelectBtnWrapper>
            <Button
              color={(isAllCheck === 'all') ? 'primary' : 'secundary'}
              onClick={() => changeAllCheckStatus('all')}
            >
              {t('SELECT_ALL', 'Select All')}
            </Button>
            <Button
              color={(isAllCheck === 'none') ? 'primary' : 'secundary'}
              onClick={() => changeAllCheckStatus('none')}
            >
              {t('SELECT_NONE', 'Select None')}
            </Button>
          </SelectBtnWrapper>

          {
            groupList?.map((group, i) => (
              <TreeViewItemContainer key={i}>
                <TreeViewParentItem>
                  <div onClick={(() => parentClick(group.id))}>
                    {(isParentCheck(group.id) === 'all') ? (
                      <RiCheckboxFill className='fill' />
                    ) : ((isParentCheck(group.id) === 'some')
                      ? <AiFillMinusSquare className='fill' />
                      : <RiCheckboxBlankLine />
                    )}
                  </div>
                  <TreeViewParentLabel onClick={() => handleChangeCollapse(group.id)}>{group.name}</TreeViewParentLabel>
                </TreeViewParentItem>
                {
                  group.isCollapse && (
                    <TreeViewChildrenContainer>
                      {
                        group?.children.map((user, i) => (
                          <TreeViewChildrenItem key={i}>
                            <div onClick={() => handleChangeUserId(user.id)}>
                              {isCheckEnableSate(user.id) ? (
                                <RiCheckboxFill className='fill' />
                              ) : (
                                <RiCheckboxBlankLine />
                              )}
                            </div>
                            <TreeViewChildrenLabel>{user.name}</TreeViewChildrenLabel>
                          </TreeViewChildrenItem>
                        ))
                      }
                    </TreeViewChildrenContainer>
                  )
                }
              </TreeViewItemContainer>
            ))
          }
        </div>
      )}
      <FilterBtnWrapper>
        <Button
          borderRadius='7.6px'
          color='primary'
          disabled={usersList.loading}
          onClick={handleClickFilterButton}
        >
          {t('FILTER', 'Filter')}
        </Button>
      </FilterBtnWrapper>
    </AnalyticsBusinessFilterContainer>
  )
}

export const AnalyticsDriversFilter = (props) => {
  const analyticsDriversFilterProps = {
    ...props,
    propsToFetch: ['id', 'name', 'driver_groups'],
    UIComponent: AnalyticsDriversFilterUI
  }
  return <AnalyticsDriversFilterController {...analyticsDriversFilterProps} />
}
