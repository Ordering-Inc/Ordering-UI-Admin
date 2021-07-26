import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import Prev from '@meronex/icons/md/MdKeyboardArrowLeft'
import Next from '@meronex/icons/md/MdKeyboardArrowRight'
import { Switch } from '../../styles/Switch'
import { UserTypeSelector } from '../UserTypeSelector'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'

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
  WrapperPageState,
  PageButton,
  WrapperUserActionSelector,
  AddNewUserButton
} from './styles'

export const UsersList = (props) => {
  const {
    usersList,
    paginationDetail,
    paginationProps,
    getUsers,
    handleChangeUserType,
    handleChangeActiveUser,
    handleDeleteUser,
    selectedUsers,
    handleSelectedUsers,
    handleOpenUserDetails,
    handleOpenUserAddForm
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

  const prevNextPage = (isNextPage) => {
    getUsers && getUsers(false, isNextPage)
  }

  const onChangeUserDetails = (e, user) => {
    const isInvalid = e.target.closest('.user_checkbox') || e.target.closest('.user_type_selector') || e.target.closest('.user_enable_control') || e.target.closest('.user_action')
    if (isInvalid) return
    handleOpenUserDetails(user)
  }

  return (
    <>
      <UsersConatiner>
        <UserTableWrapper>
          <UsersTable>
            <thead>
              <tr>
                <th>{t('USER', 'User')}</th>
                <th colSpan={2}>{t('DETAILS', 'Details')}</th>
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
                      <UserTypeWrapper>
                        <Skeleton width={100} style={{ marginBottom: '10px' }} />
                        <p><Skeleton width={100} /></p>
                      </UserTypeWrapper>
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
                <tbody key={user.id}>
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
                            <RiCheckboxFill />
                          ) : (
                            <RiCheckboxBlankLine />
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
                      <UserTypeWrapper className='user_type_selector'>
                        <UserTypeSelector
                          userId={user.id}
                          defaultUserType={user?.level}
                          handleChangeUserType={handleChangeUserType}
                        />
                        <p>{getUserType(user?.level)?.value}</p>
                      </UserTypeWrapper>
                    </td>
                    <td>
                      <UserEnableWrapper className='user_enable_control'>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <UserActiveControlSwitch
                          userId={user.id}
                          defaultChecked={user?.enabled}
                          handleChangeActiveUser={handleChangeActiveUser}
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
        {usersList?.users.length > 0 && (
          <WrapperPagination>
            <WrapperPageState>
              {`${paginationDetail?.from} - ${paginationDetail?.to} of ${paginationDetail?.total}`}
            </WrapperPageState>
            <PageButton
              disabled={paginationProps?.currentPage === 1 || usersList.loading}
              onClick={() => prevNextPage(false)}
            >
              <Prev />
            </PageButton>
            <PageButton
              disabled={usersList.loading || paginationProps?.totalPages === paginationProps?.currentPage || paginationProps?.totalPages === 1}
              onClick={() => prevNextPage(true)}
            >
              <Next />
            </PageButton>
          </WrapperPagination>
        )}
        <AddNewUserButton onClick={() => handleOpenUserAddForm()}>
          {t('ADD_NEW_USER', 'Add new user')}
        </AddNewUserButton>
      </UsersConatiner>
    </>
  )
}

const UserActiveControlSwitch = (props) => {
  const {
    defaultChecked,
    userId,
    handleChangeActiveUser
  } = props
  const onChangeActiveUser = (enabled) => {
    handleChangeActiveUser({ id: userId, enabled: enabled })
  }
  return (
    <Switch
      defaultChecked={defaultChecked}
      onChange={onChangeActiveUser}
    />
  )
}
