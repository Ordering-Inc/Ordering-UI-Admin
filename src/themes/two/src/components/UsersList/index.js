import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import GrFormEdit from '@meronex/icons/gr/GrFormEdit'
import MdcDeleteOutline from '@meronex/icons/mdc/MdcDeleteOutline'
import { Switch } from '../../styles/Switch'
import { UserActionSelector } from '../UserActionSelector'
import { UserTypeSelector } from '../UserTypeSelector'

import {
  UsersConatiner,
  UsersTable,
  WrapperImage,
  Image,
  UserMainInfo,
  CheckBoxWrapper,
  InfoBlock,
  UserTypeWrapper,
  UserEnableWrapper
} from './styles'

export const UsersList = (props) => {
  const {
    usersList
  } = props
  const [, t] = useLanguage()

  const getUserType = (type) => {
    const userTypes = [
      { key: 0, value: t('USERS', 'Admintrator') },
      { key: 1, value: t('CITY_MANAGER', 'City manager') },
      { key: 2, value: t('BUSINESS_OWNER', 'Business owner') },
      { key: 3, value: t('USER', 'User') }
    ]

    const objectStatus = userTypes.find(o => o.key === type)
    return objectStatus && objectStatus
  }

  return (
    <>
      <UsersConatiner>
        <UsersTable>
          <thead>
            <tr>
              <th>{t('USER', 'User')}</th>
              <th colSpan={2}>{t('DETAILS', 'Details')}</th>
              <th colSpan={2}>{t('ACTION', 'Action')}</th>
            </tr>
          </thead>
          {usersList.loading ? (
            <tbody>
              <tr>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
              </tr>
            </tbody>
          ) : (
            usersList?.users.map(user => (
              <tbody key={user.id}>
                <tr>
                  <td>
                    <UserMainInfo>
                      <CheckBoxWrapper>
                        <RiCheckboxFill />
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
                    <UserTypeWrapper>
                      <UserTypeSelector />
                      <p>{getUserType(user?.level)?.value}</p>
                    </UserTypeWrapper>
                  </td>
                  <td>
                    <UserEnableWrapper>
                      <span>{t('ENABLE', 'Enable')}</span>
                      <Switch
                        defaultChecked={user?.enabled}
                      />
                    </UserEnableWrapper>
                  </td>
                  <td>
                    <UserActionSelector />
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </UsersTable>
      </UsersConatiner>
    </>
  )
}
