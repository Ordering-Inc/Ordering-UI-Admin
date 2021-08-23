import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { Switch } from '../../styles/Switch'
import { UserTypeSelector } from '../UserTypeSelector'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { Pagination } from '../Pagination'

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
  UsersBottomContainer
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
    isDelivery
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

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

  return (
    <>
      <UsersConatiner>
        <UserTableWrapper isDelivery={isDelivery}>
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
                      {!isDelivery && (
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
                            <Image bgimage={user?.photo} />
                          ) : (
                            <FaUserAlt />
                          )}
                        </WrapperImage>
                        <InfoBlock>
                          <p className='bold'>{user.name} {user?.lastname}</p>
                          <p>{user?.email}</p>
                        </InfoBlock>
                      </UserMainInfo>
                    </td>
                    <td>
                      <InfoBlock>
                        <p className='bold'>{t('PHONE')}</p>
                        <p>{user?.cellphone}</p>
                      </InfoBlock>
                    </td>
                    <td>
                      {!isDelivery && (
                        <UserTypeWrapper className='user_type_selector'>
                          <UserTypeSelector
                            userId={user.id}
                            defaultUserType={user?.level}
                            handleChangeUserType={handleChangeUserType}
                          />
                          <p>{getUserType(user?.level)?.value}</p>
                        </UserTypeWrapper>
                      )}
                    </td>
                    <td>
                      <UserEnableWrapper className='user_enable_control'>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <Switch
                          defaultChecked={user?.enabled}
                          onChange={enabled => handleChangeActiveUser({ id: user.id, enabled: enabled })}
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
            {isDelivery ? t('ADD_NEW_DRIVER', 'Add new driver') : t('ADD_NEW_USER', 'Add new user')}
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
    </>
  )
}
