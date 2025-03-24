import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { Switch, LinkButton } from '../../../styles'
import { Pagination } from '../../Shared'
import { addQueryToUrl } from '../../../utils'

import {
  DriversGroupsContainer,
  TableWrapper,
  GroupsTable,
  GroupNameContainer,
  CheckBoxWrapper,
  DriverManagerContainer,
  WrapperImage,
  Image,
  InfoBlock,
  DriverGroupTypeContainer,
  ActionsContainer,
  EnableWrapper,
  PagesBottomContainer,
  GroupIdWrapper
} from './styles'

export const DriversGroupsList = (props) => {
  const {
    curDriversGroup,
    driversGroupsState,
    handleOpenDetails,
    handleUpdateDriversGroup,
    selectedGroupList,
    isFromStore,
    handleSelectGroup,
    handleAllSelectGroup,
    actionDisabled,
    isUseQuery,
    pagination,
    setPagination
  } = props

  const [, t] = useLanguage()

  const handleChangePage = (page) => {
    setPagination({
      ...pagination,
      currentPage: page
    })
  }

  const handleChangePageSize = (pageSize) => {
    setPagination({
      ...pagination,
      pageSize
    })
  }

  const handleClickDriverGroup = (e, group) => {
    const isInvalid = e.target.closest('.group-checkbox') || e.target.closest('.group-enabled')
    if (isInvalid) return
    !isFromStore && handleOpenDetails(group)
  }

  const getTypeTag = (type) => {
    switch (parseInt(type)) {
      case 0:
        return t('IN_HOUSE_DRIVERS', 'In house drivers')
      case 1:
        return t('DRIVER_COMPANIES', 'Driver companies')
    }
  }

  useEffect(() => {
    if (!isUseQuery || !pagination.totalPages) return
    addQueryToUrl({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    })
  }, [pagination, pagination.totalPages])

  return (
    <>
      <DriversGroupsContainer>
        <TableWrapper>
          <GroupsTable data-tour='tour_delivery_completed' disabled={isFromStore}>
            <thead>
              <tr>
                <th>
                  <GroupIdWrapper>
                    <CheckBoxWrapper
                      onClick={() => handleAllSelectGroup()}
                      isChecked={!driversGroupsState.loading && (selectedGroupList.length === driversGroupsState.groups.length)}
                    >
                      {!isFromStore && (
                        <>
                          {
                            !driversGroupsState.loading && (selectedGroupList.length === driversGroupsState.groups.length)
                              ? <MdCheckBox />
                              : <MdCheckBoxOutlineBlank />
                          }
                        </>
                      )}
                    </CheckBoxWrapper>
                    <span>{t('ID', 'ID')}</span>
                  </GroupIdWrapper>
                </th>
                <th>
                  <GroupNameContainer isHeader>
                    <p>{t('GROUP', 'Group')}</p>
                  </GroupNameContainer>
                </th>
                <th>
                  <DriverManagerContainer isHeader>
                    {t('DRIVER_MANAGER', 'Driver manager')}
                  </DriverManagerContainer>
                </th>
                <th>
                  <DriverGroupTypeContainer isHeader>
                    {t('TYPE', 'Type')}
                  </DriverGroupTypeContainer>
                </th>
                {!isFromStore && (
                  <th>
                    <ActionsContainer>
                      {t('ACTIONS', 'Actions')}
                    </ActionsContainer>
                  </th>
                )}
              </tr>
            </thead>
            {driversGroupsState.loading ? (
              [...Array(pagination.pageSize).keys()].map(i => (
                <tbody key={i}>
                  <tr>
                    <td>
                      <GroupIdWrapper>
                        {!isFromStore && <Skeleton width={18} height={18} />}
                        <Skeleton width={40} style={{ margin: '0px 5px' }} />
                      </GroupIdWrapper>
                    </td>
                    <td>
                      <GroupNameContainer>
                        <Skeleton width={100} />
                      </GroupNameContainer>
                    </td>
                    <td>
                      <DriverManagerContainer>
                        <WrapperImage isSkeleton>
                          <Skeleton width={45} height={45} />
                        </WrapperImage>
                        <InfoBlock>
                          <p><Skeleton width={100} /></p>
                          <p><Skeleton width={80} /></p>
                        </InfoBlock>
                      </DriverManagerContainer>
                    </td>
                    <td>
                      <DriverGroupTypeContainer>
                        <Skeleton width={70} />
                      </DriverGroupTypeContainer>
                    </td>
                    {!isFromStore && (
                      <td>
                        <ActionsContainer>
                          <EnableWrapper>
                            <Skeleton width={50} />
                          </EnableWrapper>
                        </ActionsContainer>
                      </td>
                    )}
                  </tr>
                </tbody>
              ))
            ) : (
              driversGroupsState?.groups?.map(group => (
                <tbody
                  key={group.id}
                  className={group.id === parseInt(curDriversGroup?.id) ? 'active' : null}
                  onClick={e => handleClickDriverGroup(e, group)}
                >
                  <tr>
                    <td>
                      <GroupIdWrapper>
                        {!isFromStore && (
                          <CheckBoxWrapper
                            className='group-checkbox'
                            onClick={() => handleSelectGroup(group.id)}
                            isChecked={selectedGroupList.includes(group.id)}
                          >
                            {
                              selectedGroupList.includes(group.id)
                                ? <MdCheckBox />
                                : <MdCheckBoxOutlineBlank />
                            }
                          </CheckBoxWrapper>
                        )}
                        <span>{group?.id}</span>
                      </GroupIdWrapper>
                    </td>
                    <td>
                      <GroupNameContainer>
                        <p>{group?.name}</p>
                      </GroupNameContainer>
                    </td>
                    <td>
                      <DriverManagerContainer>
                        <WrapperImage>
                          {group?.administrator?.photo ? (
                            <Image bgimage={group?.administrator?.photo} />
                          ) : (
                            <FaUserAlt />
                          )}
                        </WrapperImage>
                        <InfoBlock>
                          <p className='bold'>
                            {group?.administrator?.name} {group?.administrator?.lastname}
                          </p>
                          <p>
                            {group?.administrator?.email}
                          </p>
                        </InfoBlock>
                      </DriverManagerContainer>
                    </td>
                    <td>
                      <DriverGroupTypeContainer>
                        {getTypeTag(group?.type)}
                      </DriverGroupTypeContainer>
                    </td>
                    {!isFromStore && (
                      <td>
                        <ActionsContainer>
                          <EnableWrapper className='group-enabled'>
                            <span>{t('ENABLE', 'Enable')}</span>
                            <Switch
                              disabled={actionDisabled}
                              defaultChecked={group?.enabled}
                              onChange={enabled => handleUpdateDriversGroup?.(group.id, { enabled: enabled })}
                            />
                          </EnableWrapper>
                        </ActionsContainer>
                      </td>
                    )}
                  </tr>
                </tbody>
              ))
            )}
          </GroupsTable>
        </TableWrapper>
        {!driversGroupsState.loading && (
          <PagesBottomContainer>
            {!isFromStore && (
              <LinkButton
                onClick={() => handleOpenDetails(null)}
                disabled={actionDisabled}
              >
                {t('ADD_NEW_DRIVER_GROUP', 'Add new driver group')}
              </LinkButton>
            )}
            {driversGroupsState?.groups?.length > 0 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={pagination.pageSize}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </PagesBottomContainer>
        )}
      </DriversGroupsContainer>
    </>
  )
}
