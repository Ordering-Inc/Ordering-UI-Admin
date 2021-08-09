import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { LogoutButton } from '../LogoutButton'
import {
  ListCheck,
  HouseDoor,
  PersonFill,
  Chat as ChatIcon,
  Shop as ShopIcon,
  People as PeopleIcon,
  BarChartLine as BarChartLineIcon,
  Gear as GearIcon,
  Headset as HeadsetIcon,
  Globe2,
  GraphUp
} from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { useEvent, useLanguage, useSession } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Accordion, Image, Button, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { LanguageSelector } from '../LanguageSelector'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import {
  SidebarContainer,
  SidebarInnerContainer,
  SidebarHeader,
  BurgerButton,
  SidebarContent,
  UserInfo,
  MenuContainer,
  MenuContent,
  SubMenu,
  LanguageSelectorContainer
} from './styles'

export const SidebarMenu = (props) => {
  const location = useLocation()
  const theme = useTheme()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [sessionState] = useSession()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const windowSize = useWindowSize()

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

  const marketingSubMenus = [
    {
      id: 1,
      title: t('MARKET_SUITE', 'Market suite'),
      pageName: 'marketSuite'
    },
    {
      id: 2,
      title: t('ANALYTICS', 'Analytics'),
      pageName: 'marketAnalytics'
    },
    {
      id: 3,
      title: t('PROMOTIONS', 'Promotions'),
      pageName: 'promotions',
      url: '/marketing/promotions'
    },
    {
      id: 4,
      title: t('PROMOTIONS_ENTERPRISE', 'Promotions enterprise'),
      pageName: 'promotionsEnterprise'
    },
    {
      id: 5,
      title: t('CAMPAIGN', 'Campaign'),
      pageName: 'campaign'
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

  const analyticsSubMenus = [
    {
      id: 1,
      title: t('CONTROL_PANEL_BUSINESS', 'Business'),
      pageName: 'business_analytics',
      url: '/analytics/business'
    },
    {
      id: 2,
      title: t('DRIVERS', 'Drivers'),
      pageName: 'drivers_analytics',
      url: '/analytics/drivers'
    },
    {
      id: 3,
      title: t('PROMOTIONS', 'Promotions'),
      pageName: 'promotions_analytics',
      url: '/analytics/promotions'
    },
    {
      id: 4,
      title: t('BUSINESS_INTELLIGENCE', 'Business Intelligence'),
      pageName: 'intelligence_analytics',
      url: '/analytics/business_intelligence'
    }
  ]
  const handleGoToPage = (data) => {
    if (windowSize.width < 768) {
      handleMenuCollapse(true)
    }
    events.emit('go_to_page', data)
  }

  useEffect(() => {
    if (windowSize.width < 1024) {
      handleMenuCollapse(true)
    }
  }, [windowSize.width])

  return (
    <>
      <SidebarContainer
        id='side_bar'
        isCollapse={isCollapse}
      >
        <SidebarInnerContainer
          className='d-flex flex-column'
        >
          <SidebarHeader
            className='p-1'
          >
            <Image
              src={theme?.images?.logos?.logotype}
              fluid
              width='150px'
              height='45px'
            />
            <BurgerButton
              onClick={() => handleMenuCollapse(true)}
            >
              <svg viewBox='0 0 50 32'>
                <path d='M49,4H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,4,49,4z' />
                <path d='M49,16H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,16,49,16z' />
                <path d='M49,28H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,28,49,28z' />
                <path d='M8.1,22.8c-0.3,0-0.5-0.1-0.7-0.3L0.7,15l6.7-7.8c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4L3.3,15l5.5,6.2 c0.4,0.4,0.3,1-0.1,1.4C8.6,22.7,8.4,22.8,8.1,22.8z' />
              </svg>
            </BurgerButton>
          </SidebarHeader>

          <SidebarContent className='d-flex flex-column justify-content-between p-1 pt-0'>
            <div className='d-flex flex-column'>
              <Accordion>
                <MenuContainer>
                  <ContextAwareToggle
                    eventKey='0'
                    active={
                      location.pathname === '/home'
                    }
                    page='home'
                    handleGoToPage={handleGoToPage}
                  >
                    <HouseDoor />
                    <span>{t('HOME', 'Home')}</span>
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
                    <span>{t('ORDERS', 'Orders')}</span>
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
                    <span>{t('MESSAGES', 'Messages')}</span>
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
                    <span>{t('STORES', 'Stores')}</span>
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
                    <span>{t('USERS', 'Users')}</span>
                  </ContextAwareToggle>
                </MenuContainer>

                <MenuContainer>
                  <ContextAwareToggle
                    eventKey='5'
                    active={
                      location.pathname === '/analytics/business' ||
                      location.pathname === '/analytics/drivers' ||
                      location.pathname === '/analytics/promotions' ||
                      location.pathname === '/analytics/business_intelligence'
                    }
                  >
                    <BarChartLineIcon />
                    <span>{t('ANALYTICS', 'Analytics')}</span>
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey='5'>
                    <MenuContent>
                      {analyticsSubMenus.map(item => (
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

                <MenuContainer>
                  <ContextAwareToggle
                    eventKey='6'
                    active={
                      location.pathname === '/marketing/promotions'
                    }
                  >
                    <GraphUp />
                    <span>{t('MARKETING', 'Marketing')}</span>
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey='6'>
                    <MenuContent>
                      {marketingSubMenus.map(item => (
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
            </div>
            <div className='d-flex flex-column'>
              <LanguageSelectorContainer>
                <Globe2 />
                <LanguageSelector />
              </LanguageSelectorContainer>
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
                      <span>{t('SETTINGS', 'Settings')}</span>
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
                <span>{t('SUPPORT', 'Support')}</span>
              </Button>
            </div>
          </SidebarContent>
          <UserInfo
            id='user_info'
            className='d-flex flex-column px-1'
          >
            <Button
              className='d-flex align-items-center'
              onClick={() => handleGoToPage({ page: 'profile' })}
              variant={location.pathname === '/profile' && 'primary'}
            >
              {sessionState?.user?.photo ? (
                <Image src={sessionState?.user?.photo} width='30px' height='30px' roundedCircle />
              ) : (
                <PersonFill />
              )}
              <span>{sessionState?.user?.name} {sessionState?.user?.lastname}</span>
            </Button>
            <LogoutButton />
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
