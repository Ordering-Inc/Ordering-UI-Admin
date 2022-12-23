import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils } from 'ordering-components-admin'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import { Envelope, Phone, CheckSquareFill, Square } from 'react-bootstrap-icons'
import { Switch } from '../../../styles'
import { ConfirmAdmin, Pagination, ColumnAllowSettingPopover } from '../../Shared'

import {
  UsersConatiner,
  UserTableWrapper,
  UsersTable,
  WrapperImage,
  Image,
  UserMainInfo,
  CheckBoxWrapper,
  InfoBlock,
  UserTypeWrapper,
  UserEnableWrapper,
  WrapperPagination,
  AddNewUserButton,
  UsersBottomContainer,
  VerifiedItemsContainer,
  VerifiedItem,
  AllCheckWrapper
} from './styles'

export const ProfessionalList = (props) => {
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
    setSelectedUsers
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [confirmAdmin, setConfirmAdmin] = useState({ open: false, handleOnConfirm: null })

  const [openPopover, setOpenPopover] = useState(false)
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [allowColumns, setAllowColumns] = useState({
    user: true,
    city: true,
    phone: true,
    email: true,
    action: true
    // total: true
  })

  const optionsDefault = [
    {
      value: 'user',
      content: t('USER', 'USER')
    },
    {
      value: 'city',
      content: t('CITY', 'City')
    },
    {
      value: 'phone',
      content: t('PHONE', 'Phone')
    },
    {
      value: 'email',
      content: t('EMAIL', 'Email')
    },
    {
      value: 'action',
      content: t('ACTION', 'Action')
    }
  ]

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  const onChangeUserDetails = (e, user) => {
    const isInvalid = e.target.closest('.user_checkbox') || e.target.closest('.user_enable_control') || e.target.closest('.user_action')
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
    if (usersList.loading || usersList.users.length > 0 || paginationProps.totalPages <= 1) return
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage)
    } else {
      handleChangePage(paginationProps.currentPage - 1)
    }
  }, [usersList.users, paginationProps])

  useEffect(() => {
    if (usersList.loading) return
    const userIds = usersList.users?.reduce((ids, user) => [...ids, user.id], [])
    const _isAllChecked = userIds.every(elem => selectedUsers.includes(elem))
    setIsAllChecked(_isAllChecked)
  }, [usersList.users, selectedUsers])

  return (
    <>
      <UsersConatiner>
        <UserTableWrapper>
          <UsersTable>
            <thead>
              <tr>
                {allowColumns?.user && (
                  <th>
                    <AllCheckWrapper>
                      <CheckBoxWrapper
                        className='user_checkbox'
                        isChecked={!usersList?.loading && isAllChecked}
                        onClick={() => handleSelecteAllUser()}
                      >
                        {(!usersList?.loading && isAllChecked) ? (
                          <CheckSquareFill />
                        ) : (
                          <Square />
                        )}
                      </CheckBoxWrapper>
                      {t('USER', 'User')}
                    </AllCheckWrapper>
                  </th>
                )}
                {allowColumns?.phone && (
                  <th>{t('PHONE', 'Phone')}</th>
                )}
                {allowColumns?.email && (
                  <th>{t('EMAIL', 'Email')}</th>
                )}
                <th className='allow-colums'>
                  <ColumnAllowSettingPopover
                    open={openPopover}
                    title={t('DISPLAYED_DATA_PROFESSIONAL', 'Displayed data the professional')}
                    allowColumns={allowColumns}
                    optionsDefault={optionsDefault}
                    onClick={() => setOpenPopover(!openPopover)}
                    onClose={() => setOpenPopover(false)}
                    handleChangeAllowColumns={handleChangeAllowColumns}
                  />
                </th>
              </tr>
            </thead>
            {usersList.loading ? (
              [...Array(10).keys()].map(i => (
                <tbody key={i}>
                  <tr>
                    {allowColumns?.user && (
                      <td>
                        <UserMainInfo>
                          <CheckBoxWrapper>
                            <Skeleton width={20} height={20} />
                          </CheckBoxWrapper>
                          <WrapperImage isSkeleton>
                            <Skeleton width={45} height={45} />
                          </WrapperImage>
                          <InfoBlock>
                            <p className='bold'><Skeleton width={150} /></p>
                            <p><Skeleton width={100} /></p>
                          </InfoBlock>
                        </UserMainInfo>
                      </td>
                    )}
                    {allowColumns?.phone && (
                      <td>
                        <Skeleton width={100} />
                      </td>
                    )}
                    {allowColumns?.email && (
                      <td>
                        <UserTypeWrapper>
                          <Skeleton width={80} />
                        </UserTypeWrapper>
                      </td>
                    )}
                    <td>
                      <Skeleton width={20} />
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
                    {allowColumns?.user && (
                      <td>
                        <UserMainInfo>
                          <CheckBoxWrapper
                            className='user_checkbox'
                            isChecked={selectedUsers.includes(user.id)}
                            onClick={() => handleSelectedUsers(user.id)}
                          >
                            {selectedUsers.includes(user.id) ? (
                              <CheckSquareFill />
                            ) : (
                              <Square />
                            )}
                          </CheckBoxWrapper>
                          <WrapperImage>
                            {user?.photo ? (
                              <Image bgimage={optimizeImage(user?.photo, 'h_50,c_limit')} />
                            ) : (
                              <FaUserAlt />
                            )}
                          </WrapperImage>
                          <InfoBlock>
                            <p className='bold'>{user.name} {user?.lastname}</p>
                            {allowColumns?.city && user?.city && <p>{user?.city}</p>}
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
                    )}
                    {allowColumns?.phone && (
                      <td>
                        <InfoBlock>
                          <p className='bold'>{t('PHONE')}</p>
                          <p>{user?.cellphone}</p>
                        </InfoBlock>
                      </td>
                    )}
                    {allowColumns?.email && (
                      <td>
                        <UserTypeWrapper>
                          <p>{user?.email}</p>
                        </UserTypeWrapper>
                      </td>
                    )}
                    <td>
                      {allowColumns?.action && (
                        <UserEnableWrapper className='user_enable_control'>
                          <span>{t('ENABLE', 'Enable')}</span>
                          <Switch
                            notAsync={user.level === 0}
                            defaultChecked={user?.enabled}
                            onChange={enabled => handleEnable(user, enabled)}
                          />
                        </UserEnableWrapper>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </UsersTable>
        </UserTableWrapper>
        <UsersBottomContainer>
          <AddNewUserButton onClick={() => handleOpenUserAddForm()}>
            {t('ADD_NEW_USER', 'Add new user')}
          </AddNewUserButton>
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
