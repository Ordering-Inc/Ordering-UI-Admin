import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { LogoutButton } from '../LogoutButton'
import {
  XLg,
  List as MenuIcon,
  ArrowBarLeft,
  ListCheck,
  HouseDoor,
  PersonFill,
  Chat as ChatIcon,
  Shop as ShopIcon,
  People as PeopleIcon,
  BarChartLine as BarChartLineIcon,
  Gear as GearIcon,
  Headset as HeadsetIcon
} from 'react-bootstrap-icons'
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

  const settingsSubMenus = [
    {
      id: 1,
      title: t('BASIC_SETTINGS', 'Basic settings'),
      pageName: 'basicSettings',
      url: '/settings/basic'
    },
    {
      id: 2,
      title: t('OPERATION_SETTINGS', 'Operation settings'),
      pageName: 'operationSettings',
      url: '/settings/operation'
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
              <MenuIcon />
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
                <ArrowBarLeft />
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
                <XLg />
              </IconContent>
            </MenuClose>
          )}
          <SidebarContent className='d-flex flex-column justify-content-between p-1 pt-0'>
            <div className='d-flex flex-column'>
              <Accordion>
                <MenuContainer>
                  <ContextAwareToggle eventKey='0'>
                    <HouseDoor />
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
                    <ListCheck />
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
                  <ContextAwareToggle
                    eventKey='2'
                    page='messages'
                    handleGoToPage={handleGoToPage}
                    active={location.pathname === '/messages'}
                  >
                    <ChatIcon />
                    {!isCollapse && <span className='mx-2'>{t('MESSAGES', 'Messages')}</span>}
                  </ContextAwareToggle>
                </MenuContainer>

                <MenuContainer>
                  <ContextAwareToggle
                    eventKey='3'
                    page='businesses'
                    handleGoToPage={handleGoToPage}
                    active={
                      location.pathname === '/businesses' ||
                      location.pathname.includes('/store/')
                    }
                  >
                    <ShopIcon />
                    {!isCollapse && <span className='mx-2'>{t('STORES', 'Stores')}</span>}
                  </ContextAwareToggle>
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
                    <PeopleIcon />
                    {!isCollapse && <span className='mx-2'>{t('USERS', 'Users')}</span>}
                  </ContextAwareToggle>
                </MenuContainer>

                <MenuContainer>
                  <ContextAwareToggle eventKey='5'>
                    <BarChartLineIcon />
                    {!isCollapse && <span className='mx-2'>{t('ANALYTICS', 'Analytics')}</span>}
                  </ContextAwareToggle>
                </MenuContainer>
              </Accordion>
            </div>
            <div className='d-flex flex-column'>
              {sessionState?.user?.level === 0 && (
                <Accordion>
                  <MenuContainer>
                    <ContextAwareToggle
                      eventKey='5'
                      active={
                        location.pathname === '/settings/basic' ||
                        location.pathname === '/settings/operation'
                      }
                    >
                      <GearIcon />
                      {!isCollapse && <span className='mx-2'>{t('SETTINGS', 'Settings')}</span>}
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey='5'>
                      <MenuContent>
                        {settingsSubMenus.map(item => (
                          <SubMenu
                            key={item.id}
                            active={location.pathname.includes(item.pageName) || location.pathname.includes(item?.url)}
                            onClick={() => handleGoToPage({ page: item.pageName })}
                          >
                            {item.title}
                          </SubMenu>
                        ))}
                      </MenuContent>
                    </Accordion.Collapse>
                  </MenuContainer>
                </Accordion>
              )}

              <Button
                className='d-flex align-items-center'
                variant={location.pathname === '/support' && 'primary'}
                onClick={() => handleGoToPage({ page: 'support' })}
              >
                <HeadsetIcon />
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
                <PersonFill />
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
