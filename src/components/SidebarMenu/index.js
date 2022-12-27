import React, { useEffect, useContext, useState } from 'react'
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
  WindowDock,
  Award,
  BoxArrowUpRight,
  Cart3,
  Cash,
  BagCheck,
  X as CloseIcon
} from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { SidebarMenu as SidebarMenuController, useEvent, useLanguage, useSession, useConfig, useApi } from 'ordering-components-admin'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Accordion, Image, Button, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { LanguageSelector } from '../LanguageSelector'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { firstLetterCapital } from '../../utils'
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
  LanguageSelectorContainer,
  LogoWrapper,
  PoweredWrapper,
  MobileMessage
} from './styles'

const SidebarMenuUI = (props) => {
  const { getBillingToken, billingUrl } = props

  const location = useLocation()
  const theme = useTheme()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [sessionState] = useSession()
  const [{ configs }] = useConfig()
  const [ordering] = useApi()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const windowSize = useWindowSize()
  const isPoweredByOrderingModule = configs?.powered_by_ordering_module?.value

  const [showMessage, setShowMessage] = useState(false)

  const ordersSubMenus = [
    {
      id: 1,
      title: t('ORDERS_LIST', 'Orders list'),
      pageName: 'orders',
      url: '/orders'
    },
    {
      id: 2,
      title: t('DELIVERY_DASHBOARD', 'Deliveries dashboard'),
      pageName: 'deliveries',
      url: '/deliveries'
    },
    {
      id: 3,
      title: t('DRIVERS_DASHBOARD', 'Drivers Dashboard'),
      pageName: 'drivers',
      url: '/drivers'
    },
    {
      id: 4,
      title: t('APPOINTMENTS', 'Appointments'),
      pageName: 'appointments',
      url: '/appointments'
    },
    {
      id: 5,
      title: t('GIFT_CARD_MANAGER', 'Gift card manager'),
      pageName: 'giftCards',
      url: '/gift-cards'
    }
  ]

  const loyaltySubMenus = [
    {
      id: 1,
      title: t('LOYALTY_AUTOMATION', 'Loyalty automation'),
      pageName: 'rewards_programs',
      url: '/loyalty/rewards-programs'
    }
    // {
    //   id: 2,
    //   title: t('LOYALTY_LEVELS', 'Loyalty levels'),
    //   pageName: 'loyalty_levels',
    //   url: '/loyalty/levels'
    // },
    // {
    //   id: 3,
    //   title: t('REPORTS', 'Reports'),
    //   pageName: 'loyalty_reports',
    //   url: '/loyalty/reports'
    // }
  ]

  const cartRecoveryMenus = [
    {
      id: 1,
      title: t('OPEN_CARTS', 'Open carts'),
      pageName: 'open_carts',
      url: '/cart-recovery/open-carts'
    },
    {
      id: 2,
      title: t('CART_RECOVERY_AUTOMATION', 'Cart recovery automation'),
      pageName: 'recovery_actions',
      url: '/cart-recovery/recovery-actions'
    }
  ]

  const myProductMenus = [
    {
      id: 1,
      title: t('ORDERING_WEBSITE', 'Ordering website'),
      pageName: 'ordering_website',
      url: '/my-products/ordering-website'
    },
    {
      id: 2,
      title: t('CUSTOMER_APP', 'Customer app'),
      pageName: 'customer_app',
      url: '/my-products/customer-app'
    },
    {
      id: 3,
      title: t('STORE_APP', 'Store app'),
      pageName: 'store_app',
      url: '/my-products/store-app'
    },
    {
      id: 4,
      title: t('DRIVER_APP', 'Driver app'),
      pageName: 'driver_app',
      url: '/my-products/driver-app'
    },
    {
      id: 5,
      title: t('POS_APP', 'POS'),
      pageName: 'pos_app',
      url: '/my-products/pos-app'
    },
    {
      id: 6,
      title: t('CALL_CENTER_APP', 'Call center'),
      pageName: 'call_center_app',
      url: '/my-products/call-center-app'
    },
    {
      id: 7,
      title: t('KIOSK_APP', 'Kiosk'),
      pageName: 'kiosk_app',
      url: '/my-products/kiosk-app'
    }
  ]

  const storesSubMenus = [
    {
      id: 1,
      title: t('STORES', 'Stores'),
      pageName: 'businesses',
      url: '/stores/list'
    },
    {
      id: 2,
      title: t('PRODUCTS', 'Products'),
      pageName: 'store',
      url: '/stores/products'
    },
    {
      id: 3,
      title: t('BRANDS', 'Brands'),
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
    },
    {
      id: 3,
      title: t('PROFESSIONALS', 'Professionals'),
      pageName: 'professionals',
      url: '/users/professionals'
    }
  ]

  const buisnessOwnerUsersMenuIncluded = [3]

  const settingsSubMenus = [
    {
      id: 1,
      title: t('BASIC_SETTINGS', 'Basic settings'),
      pageName: 'basic_settings',
      url: '/settings/basic'
    },
    {
      id: 2,
      title: t('OPERATION_SETTINGS', 'Operation settings'),
      pageName: 'operation_settings',
      url: '/settings/operation'
    },
    {
      id: 3,
      title: t('PLUGIN_SETTINGS', 'Plugin settings'),
      pageName: 'plugin_settings',
      url: '/settings/plugin'
    },
    {
      id: 4,
      title: t('CMS_HEADING', 'CMS'),
      pageName: 'pages',
      url: '/settings/pages'
    },
    {
      id: 5,
      title: t('INTEGRATION', 'Integrations'),
      pageName: 'integrations',
      url: '/settings/integrations'
    },
    {
      id: 6,
      title: t('COUNTRIES_CITIES', 'Countries/Cities'),
      pageName: 'places',
      url: '/settings/places'
    },
    {
      id: 7,
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
      title: t('ENTERPRISE_REPORTS', 'Enterprise reports'),
      pageName: 'reports',
      url: '/intelligence/reports'
    }
  ]

  const businessOwnerIntelligencesIncluded = [1]

  const deliverySubmenus = [
    {
      id: 1,
      title: t('DRIVERS', 'Drivers'),
      pageName: 'delivery_drivers',
      url: '/delivery/drivers-list',
      enabled: sessionState?.user?.level === 5 || sessionState?.user?.level === 0 || sessionState?.user?.level === 2
    },
    {
      id: 2,
      title: t('DRIVER_MANAGERS', 'Drivers manager'),
      pageName: 'drivers_managers',
      url: '/delivery/drivers-managers',
      enabled: sessionState?.user?.level === 0
    },
    {
      id: 3,
      title: t('DELIVERY_COMPANIES', 'Delivery companies'),
      pageName: 'drivers_companies',
      url: '/delivery/drivers-companies',
      enabled: sessionState?.user?.level === 0
    },
    {
      id: 4,
      title: t('DELIVERY_AUTOMATION', 'Delivery automation'),
      pageName: 'drivers_groups',
      url: '/delivery/drivers-groups',
      enabled: sessionState?.user?.level === 5 || sessionState?.user?.level === 0
    }
  ]

  const marketingSubmenus = [
    {
      id: 1,
      title: t('PROMOTION_AUTOMATION', 'Promotions automation'),
      pageName: 'enterprise_promotions',
      url: '/marketing/promotions-enterprise'
    },
    {
      id: 2,
      title: t('CAMPAIGN', 'Campaign'),
      pageName: 'campaign',
      url: '/marketing/campaign'
    },
    {
      id: 3,
      title: t('AD_BANNERS', 'Ad banners'),
      pageName: 'ad_banners',
      url: '/marketing/ad-banners'
    }
  ]

  const handleGoToPage = (data) => {
    if (windowSize.width < 768) {
      handleMenuCollapse(true)
    }
    events.emit('go_to_page', data)
  }

  const handleGoToLink = (link) => {
    window.open(link, '_blank')
  }

  const handleOpenSite = () => {
    handleGoToLink(`https://${ordering.project}.tryordering.com`)
  }

  useEffect(() => {
    if (windowSize.width < 1024) {
      handleMenuCollapse(true)
    }
  }, [windowSize.width])

  const handleClickBilling = async () => {
    const billingState = await getBillingToken()
    if (!billingState?.error && billingState?.result?.access_token) {
      window.open(`${billingUrl}?token=${billingState?.result?.access_token}`, '_blank')
    }
  }

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setShowMessage(true)
    }
  }, [])

  return (
    <>
      {showMessage && (
        <MobileMessage>
          <div>
            <CloseIcon onClick={() => setShowMessage(false)} />
            {t('FOR_THE_BEST_EXPERIENCE_WHILE_SETTING_UP', 'For the best experience while setting up your project, we recommend using a computer.')}
          </div>
        </MobileMessage>
      )}
      <SidebarContainer
        id='side_bar'
        isCollapse={isCollapse}
      >
        <SidebarInnerContainer
          className='d-flex flex-column'
        >
          <SidebarHeader>
            <LogoWrapper>
              <Image
                src={configs?.dashboard_logo?.value || theme?.images?.logos?.logotype}
                onClick={() => handleGoToPage({ page: 'home' })}
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
            </LogoWrapper>
            {isPoweredByOrderingModule && (
              <PoweredWrapper>
                {t('POWERED_BY_ORDERING', 'Powered by Ordering.co')}
              </PoweredWrapper>
            )}
          </SidebarHeader>
          <SidebarMainContent>
            <SidebarContent className='d-flex flex-column justify-content-between p-1 pt-0'>
              <div className='d-flex flex-column'>
                {sessionState?.user?.level === 0 && (
                  <Button
                    className='d-flex align-items-center'
                    variant={false}
                    onClick={handleOpenSite}
                  >
                    <BoxArrowUpRight />
                    <span>{t('MY_WEBSITE', 'My Website')}</span>
                  </Button>
                )}
                <Accordion>
                  {/* {sessionState?.user?.level === 0 && (
                    <Button
                      className='d-flex align-items-center'
                      variant={false}
                      onClick={() => handleGoToLink('https://apps.tryordering.com/store/marketplace')}
                    >
                      <BoxArrowUpRight />
                      <span>{t('MARKETPLACE', 'Marketplace')}</span>
                    </Button>
                  )} */}

                  {sessionState?.user?.level !== 5 && sessionState?.user?.level !== 8 && (
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

                  {sessionState?.user?.level !== 8 && (
                    <MenuContainer>
                      <ContextAwareToggle
                        eventKey='1'
                        active={
                          location.pathname === '/orders' ||
                          location.pathname === '/deliveries' ||
                          location.pathname === '/drivers' ||
                          location.pathname === '/appointments' ||
                          location.pathname === '/gift-cards'
                        }
                      >
                        <ListCheck />
                        <span>{t('ORDERS', 'Orders')}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='1'>
                        <MenuContent>
                          {ordersSubMenus.map(item => (
                            !(sessionState?.user?.level === 2 && item.pageName === 'drivers') &&
                            !(sessionState?.user?.level === 5 && item.pageName === 'appointments') && (
                              <SubMenu
                                key={item.id}
                                active={location.pathname.includes(item.url)}
                                onClick={() => handleGoToPage({ page: item.pageName })}
                              >
                                {firstLetterCapital(item.title)}
                              </SubMenu>
                            )
                          ))}
                        </MenuContent>
                      </Accordion.Collapse>
                    </MenuContainer>
                  )}

                  {(sessionState?.user?.level !== 5 && sessionState?.user?.level !== 8) && (
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

                  {(sessionState?.user?.level !== 5 && sessionState?.user?.level !== 8) && (
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
                                active={location.pathname.includes(item?.url)}
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

                  {(sessionState?.user?.level === 0 || sessionState?.user?.level === 2) && (
                    <MenuContainer>
                      <ContextAwareToggle
                        eventKey='4'
                        active={
                          location.pathname === '/users/customers' ||
                          location.pathname === '/users/managers' ||
                          location.pathname === '/users/operation' ||
                          location.pathname === '/users/professionals'
                        }
                      >
                        <PeopleIcon />
                        <span>{t('USERS', 'Users')}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='4'>
                        <MenuContent>
                          {
                            (sessionState?.user?.level === 2
                              ? usersSubMenus.filter(menu => buisnessOwnerUsersMenuIncluded.includes(menu.id))
                              : usersSubMenus
                            ).map(item => (
                              <SubMenu
                                key={item.id}
                                active={location.pathname.includes(item.pageName) || location.pathname.includes(item?.url)}
                                onClick={() => handleGoToPage({ page: item.pageName })}
                              >
                                {item.title}
                              </SubMenu>
                            ))
                          }
                        </MenuContent>
                      </Accordion.Collapse>
                    </MenuContainer>
                  )}

                  {(sessionState?.user?.level !== 5 && sessionState?.user?.level !== 8) && (
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
                        <span>{firstLetterCapital(t('BUSINESS_INTELLIGENCE', 'Business Intelligence'))}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='5'>
                        <MenuContent>
                          {
                            (sessionState?.user?.level === 2
                              ? businessIntelligenceSubMenus.filter(menu => businessOwnerIntelligencesIncluded.includes(menu.id))
                              : businessIntelligenceSubMenus
                            ).map(item => (
                              <SubMenu
                                key={item.id}
                                active={location.pathname.includes(item.pageName) || location.pathname.includes(item?.url)}
                                onClick={() => handleGoToPage({ page: item.pageName })}
                              >
                                {firstLetterCapital(item.title)}
                              </SubMenu>
                            ))
                          }
                        </MenuContent>
                      </Accordion.Collapse>
                    </MenuContainer>
                  )}

                  {(sessionState?.user?.level === 0 || sessionState?.user?.level === 5 || sessionState?.user?.level === 2) && (
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
                            item.enabled && (
                              <SubMenu
                                key={item.id}
                                active={location.pathname.includes(item.pageName) || location.pathname.includes(item?.url)}
                                onClick={() => handleGoToPage({ page: item.pageName })}
                              >
                                {firstLetterCapital(item.title)}
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
                        eventKey='8'
                        active={
                          location.pathname === '/marketing/promotions-enterprise' ||
                          location.pathname === '/marketing/campaign'
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
                              {firstLetterCapital(item.title)}
                            </SubMenu>
                          ))}
                        </MenuContent>
                      </Accordion.Collapse>
                    </MenuContainer>
                  )}

                  {sessionState?.user?.level === 0 && (
                    <MenuContainer>
                      <ContextAwareToggle
                        eventKey='9'
                        active={
                          location.pathname === '/loyalty/rewards-programs' ||
                          location.pathname === '/loyalty/levels' ||
                          location.pathname === '/loyalty/reports'
                        }
                      >
                        <Award />
                        <span>{t('LOYALTY', 'Loyalty')}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='9'>
                        <MenuContent>
                          {loyaltySubMenus.map(item => (
                            <SubMenu
                              key={item.id}
                              active={location.pathname.includes(item.url)}
                              onClick={() => handleGoToPage({ page: item.pageName })}
                            >
                              {firstLetterCapital(item.title)}
                            </SubMenu>
                          ))}
                        </MenuContent>
                      </Accordion.Collapse>
                    </MenuContainer>
                  )}

                  {sessionState?.user?.level === 0 && (
                    <MenuContainer>
                      <ContextAwareToggle
                        eventKey='10'
                        active={
                          location.pathname === '/cart-recovery/open-carts' ||
                          location.pathname === '/cart-recovery/recovery-actions'
                        }
                      >
                        <Cart3 />
                        <span>{t('CART_RECOVERY', 'Cart recovery')}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='10'>
                        <MenuContent>
                          {cartRecoveryMenus.map(item => (
                            <SubMenu
                              key={item.id}
                              active={location.pathname.includes(item.url)}
                              onClick={() => handleGoToPage({ page: item.pageName })}
                            >
                              {firstLetterCapital(item.title)}
                            </SubMenu>
                          ))}
                        </MenuContent>
                      </Accordion.Collapse>
                    </MenuContainer>
                  )}
                  {sessionState?.user?.level === 0 && (
                    <MenuContainer>
                      <span>{t('SALES_CHANNELS_AND_PRODUCTS', 'Sales channels and products')}</span>
                      <ContextAwareToggle
                        eventKey='12'
                        active={
                          location.pathname === '/my-products/ordering-website' ||
                          location.pathname === '/my-products/customer-app' ||
                          location.pathname === '/my-products/store-app' ||
                          location.pathname === '/my-products/driver-app' ||
                          location.pathname === '/my-products/pos-app' ||
                          location.pathname === '/my-products/call-center-app' ||
                          location.pathname === '/my-products/kiosk-app'
                        }
                      >
                        <BagCheck />
                        <span>{t('MY_PRODUCTS', 'My products')}</span>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey='12'>
                        <MenuContent>
                          {myProductMenus.map(item => (
                            <SubMenu
                              key={item.id}
                              active={location.pathname.includes(item.url)}
                              onClick={() => handleGoToPage({ page: item.pageName })}
                            >
                              {item.title}
                            </SubMenu>
                          ))}
                        </MenuContent>
                      </Accordion.Collapse>
                    </MenuContainer>
                  )}
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
                              {firstLetterCapital(item.title)}
                            </SubMenu>
                          ))}
                        </MenuContent>
                      </Accordion.Collapse>
                    </MenuContainer>
                  </Accordion>
                )}
                {sessionState?.user?.level === 0 && (
                  <Button
                    className='d-flex align-items-center'
                    variant={location.pathname === '/ordering-products' && 'primary'}
                    onClick={() => handleGoToPage({ page: 'ordering_products' })}
                  >
                    <WindowDock />
                    <span>{t('ORDERING_PRODUCTS', 'Ordering products')}</span>
                  </Button>
                )}
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
                {sessionState?.user?.level === 0 && (
                  <Button
                    className='d-flex align-items-center'
                    variant={false}
                    onClick={() => handleClickBilling()}
                  >
                    <Cash />
                    <span>{t('BILLING', 'Billing')}</span>
                  </Button>
                )}
              </div>
            </SidebarContent>
            <UserInfo
              id='user_info'
              className='d-flex flex-column px-1'
            >
              <Button
                className='d-000flex align-items-center'
                variant={location.pathname === '/profile' && 'primary'}
                onClick={() => handleGoToPage({ page: 'profile' })}
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

export const SidebarMenu = (props) => {
  const sidebarMenu = {
    ...props,
    UIComponent: SidebarMenuUI
  }
  return <SidebarMenuController {...sidebarMenu} />
}
