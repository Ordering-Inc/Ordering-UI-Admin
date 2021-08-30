import React, { useState } from 'react'
import { useEvent, useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'

import {
  HeaderContainer,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  RightHeader,
  SendFeedback
} from './styles'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'

import { UserPopover } from '../UserPopover'

export const Header = (props) => {
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [openPopover, setOpenPopover] = useState({})
  const theme = useTheme()
  const onlineStatus = useOnlineStatus()

  const handleTogglePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: !openPopover[type]
    })
  }

  const handleClosePopover = (type) => {
    setOpenPopover({
      ...openPopover,
      [type]: false
    })
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  return (
    <HeaderContainer>
      <InnerHeader>
        <LeftHeader>
          <LogoHeader onClick={() => handleGoToPage({ page: 'orders-deliveries' })}>
            <img alt='Logotype' src={theme?.images?.logos?.logotype} />
            <img alt='Isotype' src={theme?.images?.logos?.isotype} />
          </LogoHeader>
        </LeftHeader>
        {onlineStatus && (
          <RightHeader>
            <SendFeedback>
              <a className="typeform-share link"
                href="https://form.typeform.com/to/TL9rslqL?typeform-medium=embed-snippet"
                data-mode="popup"
                style={{ color: '#0445AF', textDecoration: 'underline', fontSize: 18 }}
                data-size="100"
                target="_blank"
              >
                {t('SEND_FEEDBACK', 'Send feedback')}
              </a>
            </SendFeedback>
            <UserPopover
              open={openPopover.user}
              onClick={() => handleTogglePopover('user')}
              onClose={() => handleClosePopover('user')}
            />
          </RightHeader>
        )}
      </InnerHeader>
    </HeaderContainer>
  )
}
