import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils } from 'ordering-components-admin'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import { Envelope, Phone } from 'react-bootstrap-icons'
import { Switch } from '../../../styles'
import { ConfirmAdmin, Pagination } from '../../Shared'

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
  VerifiedItem
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
    handleOpenUserAddForm
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [confirmAdmin, setConfirmAdmin] = useState({ open: false, handleOnConfirm: null })

  const getUserType = (type) => {
    const userTypes = [
      { key: 0, value: t('ADMINISTRATOR', 'Administrator') },
      { key: 1, value: t('CITY_MANAGER', 'City manager') },
      { key: 2, value: t('BUSINESS_OWNER', 'Business owner') },
      { key: 3, value: t('USER', 'User') },
      { key: 9, value: t('CALL_CENTER_AGENT', 'Call center agent') }
    ]

    const objectStatus = userTypes.find(o => o.key === type)
    return objectStatus && objectStatus
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
                <th>{t('PHONE', 'Phone')}</th>
                <th>{t('TYPE', 'Type')}</th>
                <th>{t('ACTION', 'Action')}</th>
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
                      <Skeleton width={100} />
                    </td>
                    <td>
                      <UserTypeWrapper>
                        <Skeleton width={80} />
                      </UserTypeWrapper>
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
                      <UserTypeWrapper>
                        <p>{getUserType(user?.level)?.value}</p>
                      </UserTypeWrapper>
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
