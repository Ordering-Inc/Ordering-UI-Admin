import React, { useEffect, useState } from 'react'
import IosMenu from '@meronex/icons/ios/IosMenu'
import MdClose from '@meronex/icons/md/MdClose'
import { useEvent, useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'

import {
  Container,
  IconContent,
  SidebarContent,
  MenuClose,
  MenuLink,
  WrappContent,
  MenuLinkIcon,
  MenuLinkText,
  TextInfo
} from './styles'

export const MobileSidebarMenu = (props) => {
  const [events] = useEvent()
  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
    actionSidebar(false)
    setIsMenuOpen(false)
  }

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
    document.getElementById('sidebar_menu').style.width = value
      ? width > 489 ? '340px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 489) {
        console.log('in')
        document.getElementById('sidebar_menu').style.width = '100vh'
      } else {
        console.log('in2')
        document.getElementById('sidebar_menu').style.width = '340px'
      }
    }
  }, [width])

  return (
    <Container>
      <IconContent
        onClick={() => actionSidebar(true)}
      >
        <IosMenu />
      </IconContent>
      <SidebarContent
        id='sidebar_menu'
      >
        <MenuClose
          onClick={() => actionSidebar(false)}
        >
          <MdClose />
        </MenuClose>

        <MenuLink
          active={
            window.location.pathname.includes('orders') ||
            window.location.pathname === '/delivery-dashboard'
          }
          onClick={() => handleGoToPage({ page: 'orders' })}
        >
          <WrappContent>
            <MenuLinkIcon src={theme?.images?.icons?.ordersList} alt='orders list' />
            <MenuLinkText>
              <TextInfo>
                {t('ORDERS_AND_DELIVERY', 'Orders and delivery')}
              </TextInfo>
            </MenuLinkText>
          </WrappContent>
        </MenuLink>

        <MenuLink
          active={window.location.pathname === '/shop'}
          onClick={() => handleGoToPage({ page: 'shop' })}
        >
          <WrappContent>
            <MenuLinkIcon src={theme?.images?.icons?.shop} alt='shop' />
            <MenuLinkText>
              <TextInfo>
                {t('SHOP', 'Shop')}
              </TextInfo>
            </MenuLinkText>
          </WrappContent>
        </MenuLink>

        <MenuLink
          active={window.location.pathname === '/chart'}
          onClick={() => handleGoToPage({ page: 'chart' })}
        >
          <WrappContent>
            <MenuLinkIcon src={theme?.images?.icons?.pieChart} alt='pie chart' />
            <MenuLinkText>
              <TextInfo>
                {t('ANALITICS', 'Analytics')}
              </TextInfo>
            </MenuLinkText>
          </WrappContent>
        </MenuLink>

        <MenuLink
          active={window.location.pathname === '/setting'}
          onClick={() => handleGoToPage({ page: 'setting' })}
        >
          <WrappContent>
            <MenuLinkIcon src={theme?.images?.icons?.setting} alt='setting' />
            <MenuLinkText>
              <TextInfo>
                {t('SETTING', 'Setting')}
              </TextInfo>
            </MenuLinkText>
          </WrappContent>
        </MenuLink>

        {/* <MenuLink
          active={window.location.pathname === '/support'}
          onClick={() => handleGoToPage({ page: '/support' })}
        >
          <WrappContent>
            <MenuLinkIcon src={theme?.images?.icons?.support} alt='support' />
            <MenuLinkText>
              <TextInfo>
                {t('SUPPORT', 'Support')}
              </TextInfo>
            </MenuLinkText>
          </WrappContent>
        </MenuLink> */}

      </SidebarContent>
    </Container>
  )
}
