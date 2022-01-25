import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../Pagination'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import { Switch } from '../../styles'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

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
  AddNewGroupButton
} from './styles'

export const DriversGroupsList = (props) => {
  const {
    curDriversGroup,
    driversGroupsState,
    searchValue,
    handleOpenDetails,
    handleUpdateDriversGroup,
    selectedGroupList,

    handleSelectGroup,
    handleAllSelectGroup
  } = props

  const [, t] = useLanguage()

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [groupsPerPage, setGroupsPerPage] = useState(10)

  // Get current groups
  const [currentGroups, setCurrentGroups] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * groupsPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setGroupsPerPage(pageSize)
  }

  useEffect(() => {
    if (driversGroupsState.loading) return
    let _totalPages
    let groups = []
    if (searchValue) {
      groups = driversGroupsState.groups.filter(plugin => plugin.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      groups = [...driversGroupsState.groups]
    }
    if (groups.length > 0) {
      _totalPages = Math.ceil(groups.length / groupsPerPage)
    }
    const indexOfLastPost = currentPage * groupsPerPage
    const indexOfFirstPost = indexOfLastPost - groupsPerPage
    const _currentGroups = groups.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentGroups(_currentGroups)
  }, [driversGroupsState, currentPage, groupsPerPage, searchValue])

  const handleClickDriverGroup = (e, group) => {
    const isInvalid = e.target.closest('.group-checkbox') || e.target.closest('.group-enabled')
    if (isInvalid) return
    handleOpenDetails(group)
  }

  const getTypeTag = (type) => {
    switch (parseInt(type)) {
      case 0:
        return t('IN_HOUSE_DRIVERS', 'In house drivers')
      case 1:
        return t('DRIVER_COMPANIES', 'Driver companies')
    }
  }

  return (
    <>
      <DriversGroupsContainer>
        <TableWrapper>
          <GroupsTable data-tour='tour_delivery_completed'>
            <thead>
              <tr>
                <th>
                  <GroupNameContainer isHeader>
                    <CheckBoxWrapper
                      onClick={() => handleAllSelectGroup()}
                      isChecked={!driversGroupsState.loading && (selectedGroupList.length === driversGroupsState.groups.length)}
                    >
                      {
                        !driversGroupsState.loading && (selectedGroupList.length === driversGroupsState.groups.length)
                          ? <MdCheckBox />
                          : <MdCheckBoxOutlineBlank />
                      }
                    </CheckBoxWrapper>
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
                <th>
                  <ActionsContainer>
                    {t('ACTIONS', 'Actions')}
                  </ActionsContainer>
                </th>
              </tr>
            </thead>
            {driversGroupsState.loading ? (
              [...Array(groupsPerPage).keys()].map(i => (
                <tbody key={i}>
                  <tr>
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
                    <td>
                      <ActionsContainer>
                        <EnableWrapper>
                          <Skeleton width={50} />
                        </EnableWrapper>
                      </ActionsContainer>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              currentGroups.map(group => (
                <tbody
                  key={group.id}
                  className={group.id === parseInt(curDriversGroup?.id) ? 'active' : null}
                  onClick={e => handleClickDriverGroup(e, group)}
                >
                  <tr>
                    <td>
                      <GroupNameContainer>
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
                        <p>{group?.name}</p>
                      </GroupNameContainer>
                    </td>
                    <td>
                      <DriverManagerContainer>
                        <WrapperImage>
                          {group?.photo ? (
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
                    <td>
                      <ActionsContainer>
                        <EnableWrapper className='group-enabled'>
                          <span>{t('ENABLE', 'Enable')}</span>
                          <Switch
                            defaultChecked={group?.enabled}
                            onChange={enabled => handleUpdateDriversGroup(group.id, { enabled: enabled })}
                          />
                        </EnableWrapper>
                      </ActionsContainer>
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </GroupsTable>
        </TableWrapper>
        {!driversGroupsState.loading && (
          <PagesBottomContainer>
            <AddNewGroupButton
              onClick={() => handleOpenDetails(null)}
            >
              {t('ADD_NEW_DRIVER_GROUP', 'Add new driver group')}
            </AddNewGroupButton>
            {currentGroups?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={groupsPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </PagesBottomContainer>
        )}
      </DriversGroupsContainer>
    </>
  )
}
