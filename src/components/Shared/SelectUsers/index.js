import React from 'react'
import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../Pagination'
import { SearchBar } from '../SearchBar'
import { Button, Checkbox } from '../../../styles'
import {
  UsersContainer,
  SearchBarWrapper,
  UserItem,
  WrapperPagination
} from './styles'

const SelectUsersUI = (props) => {
  const {
    usersList,
    paginationProps,
    getUsers,
    searchValue,
    onSearch,

    isAddMode,
    isDisabled,
    selectedUserIds,
    handleSelectUser,
    handleAddPromotion,
    handleUpdateClick
  } = props
  const [, t] = useLanguage()

  const handleChangePage = (page) => {
    getUsers(page, 10)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(paginationProps.from / pageSize)
    getUsers(expectedPage, pageSize)
  }

  return (
    <UsersContainer>
      <SearchBarWrapper>
        <SearchBar
          isCustomLayout
          placeholder={t('SEARCH', 'Search')}
          searchValue={searchValue}
          onSearch={onSearch}
        />
      </SearchBarWrapper>
      {usersList.loading ? (
        [...Array(10).keys()].map(i => (
          <UserItem key={i}>
            <Skeleton width={18} height={18} />
            <span className='name'>
              <Skeleton width={100} />
            </span>
          </UserItem>
        ))
      ) : (
        usersList.users.map(user => (
          <UserItem key={user.id}>
            <Checkbox
              checked={selectedUserIds.includes(user.id)}
              onChange={(e) => handleSelectUser(e.target.checked, user.id)}
            />
            <span className='name'>{user?.name} {user?.lastname}</span>
          </UserItem>
        ))
      )}

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

      <Button
        borderRadius='8px'
        color='primary'
        disabled={isDisabled}
        onClick={() => {
          isAddMode ? handleAddPromotion() : handleUpdateClick()
        }}
      >
        {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
      </Button>
    </UsersContainer>
  )
}

export const SelectUsers = (props) => {
  const usersProps = {
    ...props,
    defaultUserTypesSelected: [3],
    UIComponent: SelectUsersUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true
  }
  return <UsersListController {...usersProps} />
}
