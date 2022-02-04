import React, { useState } from 'react'
import {
  UserDetails as UserDetailsController,
  useLanguage,
  useUtils
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { Confirm } from '../Confirm'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Envelope, Phone, ThreeDots, PersonFill, ChevronRight } from 'react-bootstrap-icons'

import {
  DetailsContainer,
  HeaderContainer,
  LeftHeader,
  ActionSelectorWrapper,
  VerifiedItem,
  PhotoWrapper,
  MenusContainer,
  OptionMenu
} from './styles'

const CustomerDetailsUI = (props) => {
  const {
    userState,
    handleDeleteUser,
    handleSuccessUserUpdate
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [showOption, setShowOption] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const customerMenus = [
    { key: 'user_details', value: t('USER_DETAILS', 'User details') },
    { key: 'businesses_opened', value: t('BUSINESSES_OPENED', 'Businesses opened') },
    { key: 'products_opened', value: t('PRODUCTS_OPENED', 'Products opened') },
    { key: 'cash_wallet', value: t('CASH_WALLET', 'Cash wallet') },
    { key: 'points_wallet', value: t('POINTS_WALLET', 'Points wallet') }
  ]

  const onDeleteCustomer = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_USER', 'Are you sure that you want to delete this user?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteUser()
      }
    })
  }

  return (
    <>
      <DetailsContainer>
        <HeaderContainer>
          <LeftHeader>
            {userState?.loading ? (
              <Skeleton width={150} />
            ) : (
              <span className='customer-name'>{userState.user?.name} {userState.user?.lastname}</span>
            )}
            {!!userState.user?.phone_verified && (
              <VerifiedItem>
                <Phone />
                {t('VERIFIED', 'Verified')}
              </VerifiedItem>
            )}

            {!!userState.user?.email_verified && (
              <VerifiedItem>
                <Envelope />
                {t('VERIFIED', 'Verified')}
              </VerifiedItem>
            )}
          </LeftHeader>
          <ActionSelectorWrapper>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item onClick={() => onDeleteCustomer()}>
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
        </HeaderContainer>

        <PhotoWrapper>
          {userState.loading ? (
            <Skeleton />
          ) : (
            userState.user?.photo ? (
              <img src={optimizeImage(userState.user?.photo, 'w_220,c_limit')} alt='' />
            ) : (
              <PersonFill />
            )
          )}
        </PhotoWrapper>

        <MenusContainer isLoading={userState.loading}>
          {customerMenus.map(option => (
            <OptionMenu
              key={option.key}
              active={showOption === option.key}
              onClick={() => setShowOption(option.key)}
            >
              <span>{option.value}</span>
              <ChevronRight />
            </OptionMenu>
          ))}
        </MenusContainer>
      </DetailsContainer>
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const CustomerDetails = (props) => {
  const customerDetailsProps = {
    ...props,
    UIComponent: CustomerDetailsUI
  }

  return (
    <>
      <UserDetailsController {...customerDetailsProps} />
    </>
  )
}
