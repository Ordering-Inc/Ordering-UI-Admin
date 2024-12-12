import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils } from 'ordering-components-admin'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { Envelope, Phone } from 'react-bootstrap-icons'

import { Switch, LinkButton } from '../../../styles'
import { Pagination, ConfirmAdmin } from '../../Shared'
import { addQueryToUrl } from '../../../utils'

import {
  UsersConatiner,
  UserTableWrapper,
  UsersTable,
  WrapperImage,
  Image,
  UserMainInfo,
  CheckBoxWrapper,
  InfoBlock,
  UserEnableWrapper,
  WrapperPagination,
  UsersBottomContainer,
  VerifiedItemsContainer,
  VerifiedItem,
  UserIdWrapper,
  ActionsContainer
} from './styles'

export const UsersList = (props) => {
  const {
    userDetailsId,
    usersList,
    paginationProps,
    getUsers,
    handleChangeActiveUser,
    selectedUsers,
    handleSelectedUsers,
    handleOpenUserDetails,
    handleOpenUserAddForm,
    isDriversPage,
    isDriversManagersPage,
    actionDisabled,
    setSelectedUsers,
    handleChangeAvailable,
    handleChangeBusyUser,
    isUseQuery
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [confirmAdmin, setConfirmAdmin] = useState({ open: false, handleOnConfirm: null })
  const [isAllChecked, setIsAllChecked] = useState(false)

  const onChangeUserDetails = (e, user) => {
    const isInvalid = e.target.closest('.user_checkbox') || e.target.closest('.user_type_selector') || e.target.closest('.user_enable_control') || e.target.closest('.user_action') || e.target.closest('.user_available_control') || e.target.closest('.user_busy_control')
    if (isInvalid) return
    handleOpenUserDetails(user)
  }

  const handleChangePage = (page) => {
    getUsers(page, 10)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getUsers(expectedPage, pageSize)
  }

  const handleEnable = (user, enabled) => {
    if (user.level !== 0) {
      handleChangeActiveUser({ id: user.id, enabled: enabled })
    } else {
      setConfirmAdmin({
        open: true,
        handleOnConfirm: () => {
          setConfirmAdmin({ ...confirmAdmin, open: false })
          handleChangeActiveUser({ id: user.id, enabled: enabled })
        }
      })
    }
  }

  const handleBusy = (user, busy) => {
    if (user.level !== 0) {
      handleChangeBusyUser({ id: user.id, busy: busy })
    } else {
      setConfirmAdmin({
        open: true,
        handleOnConfirm: () => {
          setConfirmAdmin({ ...confirmAdmin, open: false })
          handleChangeBusyUser({ id: user.id, busy: busy })
        }
      })
    }
  }

  const handleSelecteAllUser = () => {
    const userIds = usersList.users?.reduce((ids, user) => [...ids, user.id], [])
    if (!isAllChecked) {
      setSelectedUsers([...selectedUsers, ...userIds])
    } else {
      const userIdsToDeleteSet = new Set(userIds)
      const updatedSelectedOrderIds = selectedUsers.filter((name) => {
        return !userIdsToDeleteSet.has(name)
      })
      setSelectedUsers(updatedSelectedOrderIds)
    }
  }

  useEffect(() => {
    if (usersList.loading) return
    const userIds = usersList.users?.reduce((ids, user) => [...ids, user.id], [])
    const _isAllChecked = userIds.every(elem => selectedUsers.includes(elem))
    setIsAllChecked(_isAllChecked)
  }, [usersList.users, selectedUsers])

  useEffect(() => {
    if (usersList.loading || usersList.users.length > 0 || paginationProps.totalPages <= 1) return
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage)
    } else {
      handleChangePage(paginationProps.currentPage - 1)
    }
  }, [usersList.users, paginationProps])

  useEffect(() => {
    if (!isUseQuery || !paginationProps?.currentPage || !paginationProps?.pageSize || !paginationProps?.totalPages) return
    addQueryToUrl({
      page: paginationProps.currentPage,
      pageSize: paginationProps.pageSize
    })
  }, [paginationProps?.currentPage, paginationProps?.pageSize, paginationProps?.totalPages])

  return (
    <>
      <UsersConatiner>
        <UserTableWrapper>
          <UsersTable>
            <thead>
              <tr>
                {(isDriversPage || isDriversManagersPage) && (
                  <th>
                    <UserIdWrapper>
                      <CheckBoxWrapper
                        className='all-checkbox'
                        isChecked={!usersList?.loading && isAllChecked}
                        onClick={() => handleSelecteAllUser()}
                      >
                        {(!usersList?.loading && isAllChecked) ? (
                          <MdCheckBox />
                        ) : (
                          <MdCheckBoxOutlineBlank />
                        )}
                      </CheckBoxWrapper>
                      {t('ID', 'ID')}
                    </UserIdWrapper>
                  </th>
                )}
                <th>{t('USER', 'User')}</th>
                <th>{t('DETAILS', 'Details')}</th>
                <th colSpan={2}>{t('ACTION', 'Action')}</th>
              </tr>
            </thead>
            {usersList.loading ? (
              [...Array(10).keys()].map(i => (
                <tbody key={i}>
                  <tr>
                    {(isDriversPage || isDriversManagersPage) && (
                      <td>
                        <UserIdWrapper>
                          <CheckBoxWrapper>
                            <Skeleton width={20} height={20} />
                          </CheckBoxWrapper>
                          <Skeleton width={40} />
                        </UserIdWrapper>
                      </td>
                    )}
                    <td>
                      <UserMainInfo>
                        <WrapperImage isSkeleton>
                          <Skeleton width={45} height={45} />
                        </WrapperImage>
                        <InfoBlock>
                          <p className='bold'><Skeleton width={150} /></p>
                          <p><Skeleton width={100} /></p>
                        </InfoBlock>
                      </UserMainInfo>
                    </td>
                    <td>
                      <InfoBlock>
                        <p className='bold'><Skeleton width={100} /></p>
                        <p><Skeleton width={100} /></p>
                      </InfoBlock>
                    </td>
                    <td>
                      <UserEnableWrapper>
                        <span><Skeleton width={100} /></span>
                        <Skeleton width={50} />
                      </UserEnableWrapper>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              usersList?.users.map(user => (
                <tbody key={user.id} className={user.id === parseInt(userDetailsId) ? 'active' : null}>
                  <tr
                    onClick={(e) => onChangeUserDetails(e, user)}
                  >
                    {(isDriversPage || isDriversManagersPage) && (
                      <td>
                        <UserIdWrapper>
                          <CheckBoxWrapper
                            className='user_checkbox'
                            isChecked={selectedUsers.includes(user.id)}
                            onClick={() => handleSelectedUsers(user.id)}
                          >
                            {selectedUsers.includes(user.id) ? (
                              <MdCheckBox />
                            ) : (
                              <MdCheckBoxOutlineBlank />
                            )}
                          </CheckBoxWrapper>
                          {user?.id}
                        </UserIdWrapper>
                      </td>
                    )}
                    <td>
                      <UserMainInfo>
                        <WrapperImage>
                          {user?.photo ? (
                            <Image bgimage={optimizeImage(user?.photo, 'h_50,c_limit')} />
                          ) : (
                            <FaUserAlt />
                          )}
                        </WrapperImage>
                        <InfoBlock>
                          <p className='bold'>{user.name} {user?.lastname}</p>
                          <p>{user?.email}</p>
                        </InfoBlock>
                        {(user?.phone_verified || user?.email_verified) && (
                          <VerifiedItemsContainer>
                            {!!user?.phone_verified && (
                              <VerifiedItem>
                                <Phone />
                                {t('VERIFIED', 'Verified')}
                              </VerifiedItem>
                            )}

                            {!!user?.email_verified && (
                              <VerifiedItem>
                                <Envelope />
                                {t('VERIFIED', 'Verified')}
                              </VerifiedItem>
                            )}
                          </VerifiedItemsContainer>
                        )}
                      </UserMainInfo>
                    </td>
                    <td>
                      <InfoBlock>
                        <p className='bold'>{t('PHONE')}</p>
                        <p>{user?.cellphone}</p>
                      </InfoBlock>
                    </td>
                    <td>
                      <ActionsContainer>
                        <UserEnableWrapper className='user_busy_control'>
                          <span>{t('BUSY', 'Busy')}</span>
                          <Switch
                            disabled={actionDisabled || !user?.busy}
                            notAsync={user.level === 0}
                            defaultChecked={user?.busy}
                            onChange={busy => handleBusy(user, busy)}
                          />
                        </UserEnableWrapper>
                        <UserEnableWrapper className='user_enable_control'>
                          <span>{t('ENABLE', 'Enable')}</span>
                          <Switch
                            disabled={actionDisabled}
                            notAsync={user.level === 0}
                            defaultChecked={user?.enabled}
                            onChange={enabled => handleEnable(user, enabled)}
                          />
                        </UserEnableWrapper>
                        {isDriversPage && (
                          <UserEnableWrapper className='user_available_control'>
                            <span>{t('AVAILABLE', 'Available')}</span>
                            <Switch
                              disabled={actionDisabled}
                              notAsync
                              defaultChecked={user?.available}
                              onChange={available => handleChangeAvailable({ id: user.id, available: available })}
                            />
                          </UserEnableWrapper>
                        )}
                      </ActionsContainer>
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </UsersTable>
        </UserTableWrapper>
        <UsersBottomContainer>
          <LinkButton
            onClick={() => handleOpenUserAddForm()}
            disabled={actionDisabled}
          >
            {
              isDriversPage
                ? t('ADD_NEW_DRIVER', 'Add new driver')
                : isDriversManagersPage
                  ? t('ADD_NEW_DRIVER_MANAGER', 'Add new driver manager')
                  : t('ADD_NEW_USER', 'Add new user')
            }
          </LinkButton>
          {usersList?.users.length > 0 && (
            <WrapperPagination>
              <Pagination
                currentPage={paginationProps.currentPage}
                totalPages={paginationProps.totalPages}
                handleChangePage={handleChangePage}
                handleChangePageSize={handleChangePageSize}
                defaultPageSize={paginationProps?.pageSize}
              />
            </WrapperPagination>
          )}
        </UsersBottomContainer>
      </UsersConatiner>

      <ConfirmAdmin
        open={confirmAdmin.open}
        onClose={() => setConfirmAdmin({ ...confirmAdmin, open: false })}
        onConfirm={confirmAdmin.handleOnConfirm}
      />
    </>
  )
}
