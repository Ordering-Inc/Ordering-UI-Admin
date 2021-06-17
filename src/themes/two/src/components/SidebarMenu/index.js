import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import AiOutlineHome from '@meronex/icons/ai/AiOutlineHome'
import BsListCheck from '@meronex/icons/bs/BsListCheck'
import BiMessageRounded from '@meronex/icons/bi/BiMessageRounded'
import BiStore from '@meronex/icons/bi/BiStore'
import FiUsers from '@meronex/icons/fi/FiUsers'
import MdcGoogleAnalytics from '@meronex/icons/mdc/MdcGoogleAnalytics'
import FiSettings from '@meronex/icons/fi/FiSettings'
import BiSupport from '@meronex/icons/bi/BiSupport'
import MdcArrowLeft from '@meronex/icons/mdc/MdcArrowLeft'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { LogoutButton } from '../LogoutButton'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'

import { useTheme } from 'styled-components'
import { useEvent, useLanguage, useSession } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Accordion, Image, Button, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import {
  Header,
  SidebarContainer,
  SidebarInnerContainer,
  LogoWrap,
  SidebarContent,
  UserInfo,
  CollapseButton,
  IconContent,
  MenuClose,
  MenuContainer,
  MenuContent,
  SubMenu
} from './styles'

export const SidebarMenu = (props) => {
  const location = useLocation()
  const theme = useTheme()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [sessionState] = useSession()
  const windowSize = useWindowSize()

  const [isCollapse, setIsCollapse] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const ordersSubMenus = [
    {
      id: 1,
      title: t('ORDERS_MANAGER', 'Orders manager'),
      pageName: 'orders'
    },
    {
      id: 2,
      title: t('DELIVERIES_DASHBOARD', 'Deliveries dashboard'),
      pageName: 'deliveries'
    },
    {
      id: 3,
      title: t('DRIVERS_DASHBOARD', 'Drivers Dashboard'),
      pageName: 'drivers'
    }
  ]

  const storesSubMenus = [
    {
      id: 1,
      title: t('STORES_LIST', 'Stores list'),
      pageName: 'businesses'
    },
    {
      id: 2,
      title: t('DELIVERY_ZONES', 'Delivery zones'),
      pageName: 'delivery_zones'
    },
    {
      id: 3,
      title: t('COUPONS', 'Coupons'),
      pageName: 'coupons'
    },
    {
      id: 4,
      title: t('DISCOUNTS', 'Discounts'),
      pageName: 'discounts'
    },
    {
      id: 5,
      title: t('BUSINESS_SCHEDULE', 'Business schedule'),
      pageName: 'business_schedule'
    },
    {
      id: 6,
      title: t('TAXES', 'Taxes'),
      pageName: 'taxes'
    },
    {
      id: 7,
      title: t('PAYMENT_METHODS', 'Payment methods'),
      pageName: 'payment_methods'
    },
    {
      id: 8,
      title: t('PERSONALIZATION', 'Personalization'),
      pageName: 'personalization'
    }
  ]

  const handleGoToPage = (data) => {
    setMenuOpen(false)
    events.emit('go_to_page', data)
  }

  useEffect(() => {
    if (windowSize.width >= 760 || !isCollapse) return
    setIsCollapse(false)
  }, [windowSize.width])

  useEffect(() => {
    if (menuOpen) {
      document.getElementById('side_bar').style.width = '100vw'
    } else {
      document.getElementById('side_bar').style.width = '0px'
    }
  }, [menuOpen])

  return (
    <>
      {windowSize.width < 760 && (
        <Header>
          {!menuOpen && (
            <IconContent
              onClick={() => setMenuOpen(true)}
            >
              <IosMenu />
            </IconContent>
          )}
          <LogoWrap
            className='d-flex justify-content-center align-items-center'
            onClick={() => handleGoToPage({ page: 'home' })}
          >
            {isCollapse ? (
              <Image src={theme?.images?.logos?.isotype} fluid width='35px' height='45px' />
            ) : (
              <Image src={theme?.images?.logos?.logotype} fluid width='150px' height='45px' />
            )}
          </LogoWrap>
        </Header>
      )}
      <SidebarContainer
        id='side_bar'
        isCollapse={isCollapse}
      >
        <SidebarInnerContainer
          className='d-flex flex-column'
        >
          {windowSize.width >= 760 ? (
            <>
              <CollapseButton
                className='position-absolute bg-white p-1'
                onClick={() => setIsCollapse(!isCollapse)}
                isCollapse={isCollapse}
              >
                <MdcArrowLeft />
              </CollapseButton>
              <LogoWrap
                className='d-flex justify-content-center align-items-center'
                onClick={() => handleGoToPage({ page: 'home' })}
              >
                {isCollapse ? (
                  <Image src={theme?.images?.logos?.isotype} fluid width='35px' height='45px' />
                ) : (
                  <Image src={theme?.images?.logos?.logotype} fluid width='150px' height='45px' />
                )}
              </LogoWrap>
            </>
          ) : (
            <MenuClose>
              <IconContent
                isClose
                onClick={() => setMenuOpen(false)}
              >
                <MdClose />
              </IconContent>
            </MenuClose>
          )}
          <SidebarContent className='d-flex flex-column justify-content-between p-1 pt-0'>
            <div className='d-flex flex-column'>
              <Accordion>
                <MenuContainer>
                  <ContextAwareToggle eventKey='0'>
                    <AiOutlineHome />
                    {!isCollapse && <span className='mx-2'>{t('HOME', 'Home')}</span>}
                  </ContextAwareToggle>
                </MenuContainer>

                <MenuContainer>
                  <ContextAwareToggle
                    eventKey='1'
                    active={
                      location.pathname === '/orders' ||
                      location.pathname === '/deliveries' ||
                      location.pathname === '/drivers'
                    }
                  >
                    <BsListCheck />
                    {!isCollapse && <span className='mx-2'>{t('ORDERS', 'Orders')}</span>}
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey='1'>
                    <MenuContent>
                      {ordersSubMenus.map(item => (
                        <SubMenu
                          key={item.id}
                          active={location.pathname.includes(item.pageName)}
                          onClick={() => handleGoToPage({ page: item.pageName })}
                        >
                          {item.title}
                        </SubMenu>
                      ))}
                    </MenuContent>
                  </Accordion.Collapse>
                </MenuContainer>

                <MenuContainer>
                  <ContextAwareToggle eventKey='2'>
                    <BiMessageRounded />
                    {!isCollapse && <span className='mx-2'>{t('MESSAGES', 'Messages')}</span>}
                  </ContextAwareToggle>
                </MenuContainer>

                <MenuContainer>
                  <ContextAwareToggle
                    eventKey='3'
                    active={
                      location.pathname === '/businesses'
                    }
                  >
                    <BiStore />
                    {!isCollapse && <span className='mx-2'>{t('STORES', 'Stores')}</span>}
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey='3'>
                    <MenuContent>
                      {storesSubMenus.map(item => (
                        <SubMenu
                          key={item.id}
                          active={location.pathname.includes(item.pageName)}
                          onClick={() => handleGoToPage({ page: item.pageName })}
                        >
                          {item.title}
                        </SubMenu>
                      ))}
                    </MenuContent>
                  </Accordion.Collapse>
                </MenuContainer>

                <MenuContainer>
                  <ContextAwareToggle
                    eventKey='4'
                    page='users'
                    handleGoToPage={handleGoToPage}
                    active={
                      location.pathname === '/users'
                    }
                  >
                    <FiUsers />
                    {!isCollapse && <span className='mx-2'>{t('USERS', 'Users')}</span>}
                  </ContextAwareToggle>
                </MenuContainer>

                <MenuContainer>
                  <ContextAwareToggle eventKey='5'>
                    <MdcGoogleAnalytics />
                    {!isCollapse && <span className='mx-2'>{t('ANALYTICS', 'Analytics')}</span>}
                  </ContextAwareToggle>
                </MenuContainer>
              </Accordion>
            </div>
            <div className='d-flex flex-column'>
              <Button
                className='d-flex align-items-center m-1'
                variant={location.pathname === '/settings' && 'primary'}
                onClick={() => handleGoToPage({ page: 'settings' })}
              >
                <FiSettings />
                {!isCollapse && <span className='mx-2'>{t('SETTINGS', 'Settings')}</span>}
              </Button>
              <Button
                className='d-flex align-items-center m-1'
                variant={location.pathname === '/support' && 'primary'}
                onClick={() => handleGoToPage({ page: 'support' })}
              >
                <BiSupport />
                {!isCollapse && <span className='mx-2'>{t('SUPPORT', 'Support')}</span>}
              </Button>
            </div>
          </SidebarContent>
          <UserInfo
            id='user_info'
            className='d-flex flex-column px-1'
          >
            <Button
              className='d-flex align-items-center m-1'
              onClick={() => handleGoToPage({ page: 'profile' })}
              variant={location.pathname === '/profile' && 'primary'}
            >
              {sessionState?.user?.photo ? (
                <Image src={sessionState?.user?.photo} width='30px' height='30px' roundedCircle />
              ) : (
                <FaUserAlt />
              )}
              {!isCollapse && <span className='mx-2'>{sessionState?.user?.name}</span>}
            </Button>
            <LogoutButton isCollapse={isCollapse} />
          </UserInfo>
        </SidebarInnerContainer>
      </SidebarContainer>
    </>
  )
}

const ContextAwareToggle = ({ children, eventKey, callback, page, handleGoToPage, active }) => {
  const currentEventKey = useContext(AccordionContext)
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  )
  const isCurrentEventKey = currentEventKey === eventKey

  const handleButtonClick = () => {
    if (page) {
      handleGoToPage({ page: page })
    }
    decoratedOnClick()
  }
  return (
    <Button
      variant={active
        ? 'primary'
        : isCurrentEventKey && 'light'}
      onClick={handleButtonClick}
    >
      {children}
    </Button>
  )
}
