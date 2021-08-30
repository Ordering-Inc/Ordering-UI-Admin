import React from 'react'
import { useEvent } from 'ordering-components-admin'
import {
  Container,
  SidebarContent,
  MenuLink,
  MenuLinkIcon
} from './styles'

import { useTheme } from 'styled-components'

export const SideMenu = (props) => {
  const theme = useTheme()
  const [events] = useEvent()
  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }
  return (
    <Container>
      <SidebarContent>
        <MenuLink
          active={
            window.location.pathname.includes('orders') ||
            window.location.pathname === '/delivery-dashboard'
          }
          onClick={() => handleGoToPage({ page: 'orders' })}
        >
          <MenuLinkIcon src={theme?.images?.icons?.ordersList} alt='orders list' />
        </MenuLink>

        <MenuLink
          active={window.location.pathname === '/shop'}
          onClick={() => handleGoToPage({ page: 'shop' })}
        >
          <MenuLinkIcon src={theme?.images?.icons?.shop} alt='shop' />
        </MenuLink>

        <MenuLink
          active={window.location.pathname === '/chart'}
          onClick={() => handleGoToPage({ page: 'chart' })}
        >
          <MenuLinkIcon src={theme?.images?.icons?.pieChart} alt='pie chart' />
        </MenuLink>

        <MenuLink
          active={window.location.pathname === '/setting'}
          onClick={() => handleGoToPage({ page: 'setting' })}
        >
          <MenuLinkIcon src={theme?.images?.icons?.setting} alt='setting' />
        </MenuLink>

        {/* <MenuLink
          active={window.location.pathname === '/support'}
          onClick={() => handleGoToPage({ page: '/support' })}
        >
          <MenuLinkIcon src={theme?.images?.icons?.support} alt='support' />
        </MenuLink> */}

      </SidebarContent>
    </Container>
  )
}
