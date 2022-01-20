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
  Truck,
  GraphUp,
  WindowDock
} from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { useEvent, useLanguage, useSession } from 'ordering-components-admin'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Accordion, Image, Button, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { LanguageSelector } from '../LanguageSelector'
import { useInfoShare } from '../../contexts/InfoShareContext'
import {
  SidebarContainer,
  SidebarInnerContainer,
  SidebarHeader,
  BurgerButton,
  SidebarMainContent,
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
      title: t('DELIVERY_DASHBOARD', 'Deliveries dashboard'),
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
      pageName: 'businesses',
      url: '/stores/list'
    },
    {
      id: 2,
      title: t('BRAND_MANAGER', 'Brand manager'),
      pageName: 'brand',
      url: '/stores/brand'
    }
  ]

  const usersSubMenus = [
    {
      id: 1,
      title: t('CUSTOMERS', 'Customers'),
      pageName: 'customers',
      url: '/users/customers'
    },
    {
      id: 2,
      title: t('MANAGERS', 'Managers'),
      pageName: 'managers',
      url: '/users/managers'
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
    },
    {
      id: 3,
      title: t('CMS_HEADING', 'CMS'),
      pageName: 'pages',
      url: '/settings/pages'
    },
    {
      id: 4,
      title: t('INTEGRATION', 'Integrations'),
      pageName: 'integrations',
      url: '/settings/integrations'
    },
    {
      id: 5,
      title: t('COUNTRIES_CITIES', 'Countries/Cities'),
      pageName: 'places',
      url: '/settings/places'
    },
    {
      id: 6,
      title: t('LANGUAGE_MANAGER', 'Language manager'),
      pageName: 'language',
      url: '/settings/language'
    }
  ]

  const businessIntelligenceSubMenus = [
    {
      id: 1,
      title: t('BUSINESS_ANALYTICS', 'Business analytics'),
      pageName: 'business_analytics',
      url: '/intelligence/business'
    },
    {
      id: 2,
      title: t('DRIVERS_ANALYTICS', 'Drivers analytics'),
      pageName: 'drivers_analytics',
      url: '/intelligence/drivers'
    },
    {
      id: 3,
      title: t('REVIEWS_MANAGER', 'Reviews manager'),
      pageName: 'reviews',
      url: '/intelligence/reviews'
    },
    {
      id: 4,
      title: t('INVOICE_MANAGER', 'Invoice manager'),
      pageName: 'invoice',
      url: '/intelligence/invoice'
    },
    {
      id: 5,
      title: t('ADVANCED_REPORTS', 'Advanced Reports'),
      pageName: 'reports',
      url: '/intelligence/reports'
    }
  ]

  const deliverySubmenus = [
    {
      id: 1,
      title: t('DRIVERS', 'Drivers'),
      pageName: 'delivery_drivers',
      url: '/delivery/drivers-list'
    },
    {
      id: 2,
      title: t('DRIVER_MANAGERS', 'Drivers manager'),
      pageName: 'drivers_managers',
      url: '/delivery/drivers-managers'
    },
    {
      id: 3,
      title: t('DRIVERS_COMPANIES', 'Drivers companies'),
      pageName: 'drivers_companies',
      url: '/delivery/drivers-companies'
    },
    {
      id: 4,
      title: t('DRIVERS_GROUPS', 'Drivers groups'),
      pageName: 'drivers_groups',
      url: '/delivery/drivers-groups'
    }
  ]

  const marketingSubmenus = [
    {
      id: 1,
      title: t('PROMOTIONS_ENTERPRISE', 'Promotions enterprise'),
      pageName: 'enterprise_promotions',
      url: '/marketing/promotions-enterprise'
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
              onClick={() => handleGoToPage({ page: 'home' })}
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
          <SidebarMainContent>
            <SidebarContent className='d-flex flex-column justify-content-between p-1 pt-0'>
              <div className='d-flex flex-column'>
                <Accordion>
                  {sessionState?.user?.level !== 5 && (
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
                  )}

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
                          !(sessionState?.user?.level === 5 && item.pageName === 'drivers') &&
                          !(sessionState?.user?.level === 5 && item.pageName === 'deliveries') && (
                            <SubMenu
                              key={item.id}
                              active={location.pathname.includes(item.pageName)}
                              onClick={() => handleGoToPage({ page: item.pageName })}
                            >
                              {item.title}
                            </SubMenu>
                          )
                        ))}
                      </MenuContent>
                    </Accordion.Collapse>
                  </MenuContainer>

                  {sessionState?.user?.level !== 5 && (
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
                  )}

                  {sessionState?.user?.level !== 5 && (
                    <MenuContainer>
                      <ContextAwareToggle
                        eventKey='3'
                        active={
                          location.pathname.includes('stores')
                        }
                      >
                        <ShopIcon />
                        <span>{t('STORES', 'Stores')}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='3'>
                        <MenuContent>
                          {storesSubMenus.map(item => (
                            !(sessionState?.user?.level === 2 && item.pageName === 'brand') && (
                              <SubMenu
                                key={item.id}
                                active={location.pathname.includes(item.pageName) || location.pathname.includes(item?.url)}
                                onClick={() => handleGoToPage({ page: item.pageName })}
                              >
                                {item.title}
                              </SubMenu>
                            )
                          ))}
                        </MenuContent>
                      </Accordion.Collapse>
                    </MenuContainer>
                  )}

                  {sessionState?.user?.level === 0 && (
                    <MenuContainer>
                      <ContextAwareToggle
                        eventKey='4'
                        active={
                          location.pathname === '/users/customers' ||
                          location.pathname === '/users/managers' ||
                          location.pathname === '/users/operation'
                        }
                      >
                        <PeopleIcon />
                        <span>{t('USERS', 'Users')}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='4'>
                        <MenuContent>
                          {usersSubMenus.map(item => (
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
                  )}

                  {sessionState?.user?.level !== 5 && (
                    <MenuContainer>
                      <ContextAwareToggle
                        eventKey='5'
                        active={
                          location.pathname === '/intelligence/business' ||
                          location.pathname === '/intelligence/drivers' ||
                          location.pathname.includes('/intelligence/reviews') ||
                          location.pathname === '/intelligence/invoice' ||
                          location.pathname === '/intelligence/reports'
                        }
                      >
                        <BarChartLineIcon />
                        <span>{t('BUSINESS_INTELLIGENCE', 'Business Intelligence')}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='5'>
                        <MenuContent>
                          {businessIntelligenceSubMenus.map(item => (
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
                  )}

                  {sessionState?.user?.level === 0 && (
                    <MenuContainer>
                      <ContextAwareToggle
                        eventKey='7'
                        active={
                          location.pathname === '/delivery/drivers-list' ||
                          location.pathname === '/delivery/drivers-managers' ||
                          location.pathname === '/delivery/drivers-companies' ||
                          location.pathname === '/delivery/drivers-groups'
                        }
                      >
                        <Truck />
                        <span>{t('DELIVERY', 'Delivery')}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='7'>
                        <MenuContent>
                          {deliverySubmenus.map(item => (
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
                  )}

                  <MenuContainer>
                    <ContextAwareToggle
                      eventKey='8'
                      active={
                        location.pathname === '/marketing/promotions-enterprise'
                      }
                    >
                      <GraphUp />
                      <span>{t('MARKETING', 'Marketing')}</span>
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey='8'>
                      <MenuContent>
                        {marketingSubmenus.map(item => (
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
              <div className='d-flex flex-column mt-4'>
                <LanguageSelectorContainer>
                  <LanguageSelector />
                </LanguageSelectorContainer>
                {sessionState?.user?.level === 0 && (
                  <Accordion>
                    <MenuContainer>
                      <ContextAwareToggle
                        eventKey='5'
                        active={
                          location.pathname === '/settings/basic' ||
                          location.pathname === '/settings/operation' ||
                          location.pathname === '/settings/pages' ||
                          location.pathname === '/settings/integrations' ||
                          location.pathname === '/settings/places' ||
                          location.pathname === '/settings/advanced' ||
                          location.pathname === '/settings/language'
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
                  variant={location.pathname === '/ordering-products' && 'primary'}
                  onClick={() => handleGoToPage({ page: 'ordering_products' })}
                >
                  <WindowDock />
                  <span>{t('ORDERING_PRODUCTS', 'Ordering products')}</span>
                </Button>
                {sessionState?.user?.level === 0 && (
                  <Button
                    className='d-flex align-items-center'
                    variant={location.pathname === '/support' && 'primary'}
                    onClick={() => handleGoToPage({ page: 'support' })}
                  >
                    <HeadsetIcon />
                    <span>{t('SUPPORT', 'Support')}</span>
                  </Button>
                )}
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
          </SidebarMainContent>
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
