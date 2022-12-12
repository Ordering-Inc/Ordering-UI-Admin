import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, IconButton } from '../../../styles'
import { DragScroll, Modal } from '../../Shared'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import { XLg } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  Header,
  AllSetting,
  Description,
  CategoryExtraContent,
  Container,
  DescriptionHeader,
  HeaderIcons,
  DeliverectContainer,
  SettingListConatiner,
  Tab,
  GetStarted,
  YoutubeVideoWrapper,
  YoutubeVideoInner
} from './styles'

export const Deliverect = (props) => {
  const {
    onClose
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [settingsOpen, setSettingsOpen] = useState(false)

  const toggleMainContent = () => {
    if (width <= 500) {
      document.getElementById('catDescription').style.width = '100vw'
    } else {
      if ((settingsOpen) && width >= 1000) {
        document.getElementById('catDescription').style.width = '1000px'
      } else {
        document.getElementById('catDescription').style.width = '500px'
      }
    }
  }

  useEffect(() => {
    if (width < 1000) return
    if (settingsOpen) {
      document.getElementById('catDescription').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [settingsOpen])

  useEffect(() => {
    toggleMainContent()
  }, [width])

  const LalaMoveConnectDescription = () => {
    return (
      <CategoryExtraContent>
        <IconButton
          color='black'
          onClick={() => setSettingsOpen(false)}
        >
          <XLg />
        </IconButton>
        <div>
          <Header>
            <h1>{t('MORE_INFO', 'More Info')}</h1>
          </Header>
          <SettingListConatiner>
            <DragScroll>
              <Tab
                active
              >
                {t('GENERAL', 'General')}
              </Tab>
            </DragScroll>
          </SettingListConatiner>
          <GetStarted>
            <h2>{t('GET_STARTED_RIGHT_HERE', 'Get started right here')}</h2>
            <p>{t('FILL_UP_THIS_FORM_TO_REQUEST_INFORMATION', 'Fill up this form to request more information')}</p>
            <a href='https://share.hsforms.com/1uGzNQ71IS2KXCAFC0mTBCg3neff' target='_blank' rel='noopener noreferrer'>
              <Button color='primary'>{t('SEND_FORM', 'Send Form')}</Button>
            </a>
          </GetStarted>
          <YoutubeVideoWrapper>
            <YoutubeVideoInner>
              <iframe
                title='youtube'
                src='https://www.youtube.com/embed/_v8nPmW_E-0?playlist=_v8nPmW_E-0&loop=1'
              />
            </YoutubeVideoInner>
          </YoutubeVideoWrapper>
        </div>
      </CategoryExtraContent>
    )
  }

  return (
    <Container
      id='catDescription'
    >
      <DeliverectContainer>
        <DescriptionHeader>
          <HeaderIcons>
            <IconButton
              color='black'
              onClick={onClose}
            >
              <XLg />
            </IconButton>
          </HeaderIcons>
        </DescriptionHeader>
        <Header>
          <h1>{t('DELIVERECT', 'Deliverect')}</h1>
          <Button color='lightPrimary'>{t('NEW', 'New')}</Button>
        </Header>
        <Description dangerouslySetInnerHTML={{ __html: t('SYNC_DEC_SECOND', 'Deliverect integrates all your <span>online orders</span> to your <span>existing POS</span> or our <span>Delivery Manger app.</span> Restaurants large and small rely on Deliverect to reduce failures and order mistakes while speeding up order preparation.') }} />
        <AllSetting onClick={() => setSettingsOpen(true)}>
          <span>{t('SETTINGS', 'All settings')}</span>
          <BsArrowRight />
        </AllSetting>
      </DeliverectContainer>
      {settingsOpen && (
        <>
          {width >= 1000 ? (
            <LalaMoveConnectDescription />
          ) : (
            <>
              <Modal
                width='70%'
                height='90vh'
                open
                padding='0px'
                onClose={() => setSettingsOpen(false)}
                hideCloseDefault
              >
                <LalaMoveConnectDescription />
              </Modal>
            </>
          )}
        </>
      )}
    </Container>
  )
}
