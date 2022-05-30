import React, { useState } from 'react'
import { useUtils, useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import Prev from '@meronex/icons/md/MdKeyboardArrowLeft'
import Next from '@meronex/icons/md/MdKeyboardArrowRight'
import BsDot from '@meronex/icons/bs/BsDot'
import { useTheme } from 'styled-components'
import { OrdersLateralBar } from '../../Orders'

import {
  Container,
  CustomersListConatainer,
  Card,
  WrapperImage,
  Image,
  InfoContainer,
  AssignedOrdersCount,
  WrapperPagination,
  WrapperPageState,
  PageButton
} from './styles'

const ChatContactListUI = (props) => {
  const {
    isDriver,
    isCustomer,
    usersList,
    paginationProps,
    paginationDetail,
    getUsers
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [isOpenOrders, setIsOpenOrders] = useState(false)
  const [openUser, setOpenUser] = useState(null)

  const handleOpenOrders = (user) => {
    setOpenUser(user)
    setIsOpenOrders(true)
  }

  const prevNextPage = (isNextPage) => {
    getUsers && getUsers(false, isNextPage)
  }

  return (
    <Container>
      <CustomersListConatainer>
        {usersList.loading ? (
          <>
            {[...Array(10).keys()].map(i => (
              <Card
                key={i}
              >
                <WrapperImage isSkeleton>
                  <Skeleton width={45} height={45} />
                </WrapperImage>
                <InfoContainer>
                  <div>
                    <Skeleton width={100} />
                  </div>
                  <Skeleton width={100} />
                </InfoContainer>
              </Card>
            ))}
          </>
        ) : (
          <>
            {usersList.users.map(user => (
              <Card
                key={user.id}
                // onClick={(e) => handleClickUser(e, user)}
                active={user?.id === openUser?.id}
              >
                <WrapperImage>
                  <Image bgimage={optimizeImage(user?.photo || theme.images?.icons?.noDriver, 'h_200,c_limit')} />
                </WrapperImage>
                <InfoContainer>
                  <div>
                    <p>{user?.name} {user?.lastname}</p>
                    <BsDot />
                    <AssignedOrdersCount
                      className='driver_orders'
                      disabled={isDriver && (!user?.assigned_orders_count || user?.assigned_orders_count === 0)}
                      onClick={() => handleOpenOrders(user)}
                    >
                      {isDriver && <>{user?.assigned_orders_count}</>} {t('ORDERS', 'Orders')}
                    </AssignedOrdersCount>
                  </div>
                </InfoContainer>
              </Card>
            ))}
          </>
        )}
      </CustomersListConatainer>
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

      {isOpenOrders && openUser && (
        <OrdersLateralBar
          open={isOpenOrders}
          isDriver={isDriver}
          isCustomer={isCustomer}
          user={openUser}
          onClose={() => setIsOpenOrders(false)}
        />
      )}
    </Container>
  )
}

export const ChatContactList = (props) => {
  const customersControlProps = {
    ...props,
    UIComponent: ChatContactListUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    defaultUserTypesSelected: props.isDriver ? [4] : [3],
    propsToFetch: ['name', 'lastname', 'photo', 'assigned_orders_count']
  }
  return (
    <UsersListController {...customersControlProps} />
  )
}
