import React, { useEffect, useState } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useLanguage } from 'ordering-components-admin'
import {
  Container,
  Header,
  LeftHeader,
  Tabs,
  Tab
} from './styles'
import { IconButton } from '../../../styles'
import { XLg } from 'react-bootstrap-icons'
import { FacebookProfile } from './FacebookProfile'
import { FacebookPost } from './FacebookPost'

export const BusinessSalesFacebook = (props) => {
  const { onClose, socialItem, businessSlug } = props

  const { width } = useWindowSize()
  const [, t] = useLanguage()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState('profile')

  const tabList = [
    { key: 'profile', title: t('PROFILE', 'Profile') },
    { key: 'post', title: t('POST', 'Post') }
  ]

  const actionSidebar = (value) => {
    if (!value) {
      onClose && onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('businessSocial').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('businessSocial').style.width = '100%'
      } else {
        document.getElementById('businessSocial').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <Container id='businessSocial'>
      <Header>
        <LeftHeader>
          <img src={socialItem.icon} alt='' />
          <h2>{socialItem.name}</h2>
        </LeftHeader>
        <IconButton onClick={onClose} color='black'>
          <XLg />
        </IconButton>
      </Header>
      <Tabs>
        {tabList.map(item => (
          <Tab
            key={item.key}
            onClick={() => setSelectedTab(item.key)}
            active={selectedTab === item.key}
          >
            {item.title}
          </Tab>
        ))}
      </Tabs>
      {selectedTab === 'profile' && <FacebookProfile businessSlug={businessSlug} />}
      {selectedTab === 'post' && <FacebookPost />}
    </Container>
  )
}
