import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  UserDetails as UserDetailsController,
  useLanguage,
  useUtils
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { Envelope, Phone, ThreeDots, PersonFill, ChevronRight, ArrowsAngleContract, ArrowsAngleExpand } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { UserDetails } from '../UserDetails'
import { CustomerCashWallet } from '../CustomerCashWallet'
import { Confirm, SideBar } from '../../Shared'
import { IconButton, Switch } from '../../../styles'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  DetailsContainer,
  HeaderContainer,
  LeftHeader,
  ActionSelectorWrapper,
  VerifiedItem,
  PhotoWrapper,
  MenusContainer,
  OptionMenu,
  UserDetailsWrapper,
  UserName,
  RightHeader
} from './styles'
import { CustomerPointsWallet } from '../CustomerPointsWallet'
import { useWindowSize } from '../../../hooks/useWindowSize'

const CustomerDetailsUI = (props) => {
  const {
    userState,
    handleDeleteUser,
    handleParentSidebarMove,
    handleChangeActiveUser,
    setSideBarWidth,
    userId
  } = props

  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const { width } = useWindowSize()

  const firstRender = useRef(true)
  const [showOption, setShowOption] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [menuMoveDistance, setMenuMoveDistance] = useState(0)
  const [isExpand, setIsExpand] = useState(false)

  const customerMenus = [
    { key: 'user_details', value: t('USER_DETAILS', 'User details') },
    // { key: 'businesses_opened', value: t('BUSINESSES_OPENED', 'Businesses opened') },
    // { key: 'products_opened', value: t('PRODUCTS_OPENED', 'Products opened') },
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

  const handleClickMenu = (key, isInitialRender) => {
    setShowOption(key)
    setSideBarWidth(isExpand ? width : 1000)
    handleParentSidebarMove(isExpand ? width / 2 : 500)
    setIsOpenMenu(true)
    if (!isInitialRender) {
      addQueryToUrl({ section: key })
    }
    firstRender.current = false
  }

  const handleCloseMenu = () => {
    setSideBarWidth(isExpand ? width : 500)
    handleParentSidebarMove(0)
    setShowOption(null)
    setIsOpenMenu(false)
    setMenuMoveDistance(0)
    removeQueryToUrl(['section', 'tab'])
  }

  const expandSidebar = () => {
    const element = document.getElementById('customer_details')
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (firstRender.current) return
    handleParentSidebarMove(0)
    setIsOpenMenu(false)
    setShowOption(null)
    setSideBarWidth(500)
    removeQueryToUrl(['section', 'tab'])
  }, [userId])

  useEffect(() => {
    if (userState.loading) return
    const section = query.get('section')
    if (section) {
      handleClickMenu(section, true)
    }
  }, [userState.loading])

  return (
    <>
      <DetailsContainer>
        <HeaderContainer>
          <LeftHeader>
            <UserName>
              {userState?.loading ? (
                <Skeleton width={150} />
              ) : (
                <span className='customer-name'>{userState.user?.name} {userState.user?.lastname}</span>
              )}
              {userState?.loading ? (
                <Skeleton width={50} style={{ margin: '0px 5px' }} />
              ) : (
                <>
                  {handleChangeActiveUser && (
                    <Switch
                      defaultChecked={userState?.user?.enabled || false}
                      onChange={enabled => handleChangeActiveUser({ ...userState?.user, enabled: enabled })}
                    />
                  )}
                </>
              )}
            </UserName>
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
          <RightHeader>
            {width > 576 && !isOpenMenu && (
              <IconButton
                color='black'
                onClick={() => expandSidebar()}
              >
                {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
              </IconButton>
            )}
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
          </RightHeader>
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
              onClick={() => handleClickMenu(option.key)}
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

      {isOpenMenu && (
        <SideBar
          open={isOpenMenu}
          onClose={() => handleCloseMenu()}
          isBorderShow
          defaultSideBarWidth={isExpand ? width / 2 : 500 + menuMoveDistance}
          moveDistance={menuMoveDistance}
        >
          {showOption === 'user_details' && (
            <UserDetailsWrapper>
              <UserDetails
                userId={props.userId}
                user={userState.user}
                setExtraOpen={isOpen => setMenuMoveDistance(isOpen ? 500 : 0)}
              />
            </UserDetailsWrapper>
          )}
          {showOption === 'cash_wallet' && (
            <CustomerCashWallet
              userId={userState.user?.id}
            />
          )}
          {showOption === 'points_wallet' && (
            <CustomerPointsWallet
              userId={userState.user?.id}
              user={userState.user}
            />
          )}
        </SideBar>
      )}
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
