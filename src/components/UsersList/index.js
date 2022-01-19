import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useLanguage, useUtils } from 'ordering-components-admin'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import HiOutlineMail from '@meronex/icons/hi/HiOutlineMail';
import FiSmartphone from '@meronex/icons/fi/FiSmartphone';
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'

import { Switch } from '../../styles/Switch'
import { UserTypeSelector } from '../UserTypeSelector'
import { Pagination } from '../Pagination'
import { ConfirmAdmin } from '../ConfirmAdmin'

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
  WrapperUserActionSelector,
  AddNewUserButton,
  UsersBottomContainer,
  VerifiedItem
} from './styles'

export const UsersList = (props) => {
  const {
    userDetailsId,
    usersList,
    paginationProps,
    getUsers,
    handleChangeUserType,
    handleChangeActiveUser,
    handleDeleteUser,
    selectedUsers,
    handleSelectedUsers,
    handleOpenUserDetails,
    handleOpenUserAddForm,
    isDriversPage,
    isDriversManagersPage
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()

  const [confirmAdmin, setConfirmAdmin] = useState({ open: false, handleOnConfirm: null })

  const getUserType = (type) => {
    const userTypes = [
      { key: 0, value: t('ADMINISTRATOR', 'Administrator') },
      { key: 1, value: t('CITY_MANAGER', 'City manager') },
      { key: 2, value: t('BUSINESS_OWNER', 'Business owner') },
      { key: 3, value: t('USER', 'User') }
    ]

    const objectStatus = userTypes.find(o => o.key === type)
    return objectStatus && objectStatus
  }

  const onChangeUserDetails = (e, user) => {
    const isInvalid = e.target.closest('.user_checkbox') || e.target.closest('.user_type_selector') || e.target.closest('.user_enable_control') || e.target.closest('.user_action')
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

  const onChangeUserType = (user, type) => {
    if (user.level !== 0) {
      handleChangeUserType(type)
    } else {
      setConfirmAdmin({
        open: true,
        handleOnConfirm: () => {
          setConfirmAdmin({ ...confirmAdmin, open: false })
          handleChangeUserType(type)
        }
      })
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

  return (
    <>
      <UsersConatiner>
        <UserTableWrapper>
          <UsersTable>
            <thead>
              <tr>
                <th>{t('USER', 'User')}</th>
                <th>{t('DETAILS', 'Details')}</th>
                <th />
                <th colSpan={2}>{t('ACTION', 'Action')}</th>
              </tr>
            </thead>
            {usersList.loading ? (
              [...Array(10).keys()].map(i => (
                <tbody key={i}>
                  <tr>
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
                    <td>
                      <InfoBlock>
                        <p className='bold'><Skeleton width={100} /></p>
                        <p><Skeleton width={100} /></p>
                      </InfoBlock>
                    </td>
                    <td>
                      {!(isDriversPage || isDriversManagersPage) && (
                        <UserTypeWrapper>
                          <Skeleton width={100} style={{ marginBottom: '10px' }} />
                          <p><Skeleton width={100} /></p>
                        </UserTypeWrapper>
                      )}
                    </td>
                    <td>
                      <UserEnableWrapper>
                        <span><Skeleton width={100} /></span>
                        <Skeleton width={50} />
                      </UserEnableWrapper>
                    </td>
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
                    <td>
                      <UserMainInfo>
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
                          <div style={{ position: 'absolute', top: 0, right: 10 }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              {!!user?.phone_verified && (
                                <VerifiedItem style={{ marginBottom: 2 }}>
                                  <FiSmartphone style={{ fontSize: 13, marginRight: 2 }} />
                                  {t('VERIFIED', 'Verified')}
                                </VerifiedItem>
                              )}

                              {!!user?.email_verified && (
                                <VerifiedItem>
                                  <HiOutlineMail style={{ fontSize: 14, marginRight: 2 }} />
                                  {t('VERIFIED', 'Verified')}
                                </VerifiedItem>
                              )}
                            </div>
                          </div>
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
                      {!(isDriversPage || isDriversManagersPage) && (
                        <UserTypeWrapper className='user_type_selector'>
                          <UserTypeSelector
                            userId={user.id}
                            defaultUserType={user?.level}
                            handleChangeUserType={(type) => onChangeUserType(user, type)}
                          />
                          <p>{getUserType(user?.level)?.value}</p>
                        </UserTypeWrapper>
                      )}
                    </td>
                    <td>
                      <UserEnableWrapper className='user_enable_control'>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <Switch
                          notAsync={user.level === 0}
                          defaultChecked={user?.enabled}
                          onChange={enabled => handleEnable(user, enabled)}
                        />
                      </UserEnableWrapper>
                    </td>
                    <td>
                      <WrapperUserActionSelector className='user_action'>
                        <DropdownButton
                          menuAlign={theme?.rtl ? 'left' : 'right'}
                          title={<FiMoreVertical />}
                          id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                        >
                          <Dropdown.Item onClick={() => handleOpenUserDetails(user)}>{t('EDIT', 'Edit')}</Dropdown.Item>
                          <Dropdown.Item onClick={() => handleDeleteUser(user?.id)}>{t('DELETE', 'Delete')}</Dropdown.Item>
                        </DropdownButton>
                      </WrapperUserActionSelector>
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </UsersTable>
        </UserTableWrapper>
        <UsersBottomContainer>
          <AddNewUserButton onClick={() => handleOpenUserAddForm()}>
            {
              isDriversPage
                ? t('ADD_NEW_DRIVER', 'Add new driver')
                : isDriversManagersPage
                  ? t('ADD_NEW_DRIVER_MANAGER', 'Add new driver manager')
                  : t('ADD_NEW_USER', 'Add new user')
            }
          </AddNewUserButton>
          {usersList?.users.length > 0 && (
            <WrapperPagination>
              <Pagination
                currentPage={paginationProps.currentPage}
                totalPages={paginationProps.totalPages}
                handleChangePage={handleChangePage}
                handleChangePageSize={handleChangePageSize}
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
