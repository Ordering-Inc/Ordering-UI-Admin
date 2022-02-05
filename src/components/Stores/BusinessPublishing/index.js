import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components-admin'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { Modal } from '../../Shared'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { BusinessPublishingOption } from '../BusinessPublishingOption'

import {
  MainContainer,
  PublishingContainer,
  PublishingListWrapper,
  PublishingOptionContainer,
  PublishingOption,
  PublishingName
} from './styles'

export const BusinessPublishing = (props) => {
  const {
    setIsExtendExtraOpen
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const { width } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  const [itemSelected, setItemSelected] = useState(null)

  const publishingItems = [
    {
      key: 'own_platform',
      title: t('YOUR_OWN_ORDERING_PLATFORM', 'Your own ordering platform'),
      description: t('YOUR_OWN_ORDERING_PLATFORM_DESCRIPTION', 'Lorem ipsum dolor sit amet')
    },
    {
      key: 'in_restaurant',
      title: t('IN_RESTAURANT_ORDERING', 'In restaurant ordering'),
      description: t('IN_RESTAURANT_ORDERING_DESCRIPTION', 'Lorem ipsum dolor sit amet')
    },
    {
      key: 'social_network',
      title: t('SOCIAL_NETWORK', 'Social network'),
      description: t('SOCIAL_NETWORK_DESCRIPTION', 'Lorem ipsum dolor sit amet')
    }
    // {
    //   title: t('MESSAGING_APP', 'Messaging app'),
    //   description: t('MESSAGING_APP_DESCRIPTION', 'Lorem ipsum dolor sit amet')
    // },
  ]

  const handleAction = (value, item = null) => {
    setItemSelected(item)
    setIsExtendExtraOpen(value)
    setIsOpen(value)
  }

  return (
    <MainContainer>
      <PublishingContainer>
        <h1>{t('PUBLISHING', 'Publishing')}</h1>

        <PublishingListWrapper>
          {publishingItems.map((item, i) => (
            <PublishingOptionContainer key={i} onClick={() => handleAction(true, item)}>
              <PublishingOption>
                <PublishingName>{item?.title}</PublishingName>
                <PublishingName
                  style={{
                    color: theme.colors.lightGray,
                    fontSize: 14
                  }}
                >
                  {item?.description}
                </PublishingName>
              </PublishingOption>
              <BsChevronRight style={{ color: theme.colors.lightGray }} />
            </PublishingOptionContainer>
          ))}
        </PublishingListWrapper>
      </PublishingContainer>

      {width >= 1000 ? (
        isOpen && (
          <BusinessPublishingOption
            business={props.business}
            open={isOpen}
            item={itemSelected}
            onClose={() => handleAction(false)}
          />
        )
      ) : (
        isOpen && (
          <Modal
            width='80%'
            open={isOpen}
            onClose={() => handleAction(false)}
          >
            <BusinessPublishingOption
              business={props.business}
              open={isOpen}
              item={itemSelected}
              onClose={() => handleAction(false)}
            />
          </Modal>
        )
      )}
    </MainContainer>
  )
}
