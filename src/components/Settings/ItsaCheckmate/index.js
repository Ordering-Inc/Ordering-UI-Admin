import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, IconButton } from '../../../styles'
import { DragScroll, Modal } from '../../Shared'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import { XLg, Check2Circle, ArrowsAngleContract, ArrowsAngleExpand } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  Header,
  Description,
  CategoryExtraContent,
  Container,
  DescriptionHeader,
  HeaderIcons,
  ItsaCheckmateContainer,
  SettingListConatiner,
  Tab,
  GetStarted,
  YoutubeVideoWrapper,
  YoutubeVideoInner
} from './styles'

export const ItsaCheckmate = (props) => {
  const {
    onClose
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [settingsOpen, setSettingsOpen] = useState(false)
  const [isExpand, setIsExpand] = useState(false)

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

  const expandSidebar = () => {
    const element = document.getElementById('catDescription')
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
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
            <a href='https://share.hsforms.com/1vuXwaFtfTTeZf362zJgqSg3neff' target='_blank' rel='noopener noreferrer'>
              <Button color='primary'>{t('SEND_FORM', 'Send Form')}</Button>
            </a>
          </GetStarted>
          <YoutubeVideoWrapper>
            <YoutubeVideoInner>
              <iframe
                title='youtube'
                src='https://www.youtube.com/embed/_caZDl4ZFp0?feature=oembed'
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
      <ItsaCheckmateContainer>
        <DescriptionHeader>
          <HeaderIcons>
            {width > 576 && !settingsOpen && (
              <IconButton
                color='black'
                onClick={expandSidebar}
              >
                {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
              </IconButton>
            )}
            <IconButton
              color='black'
              onClick={onClose}
            >
              <XLg />
            </IconButton>
          </HeaderIcons>
        </DescriptionHeader>
        <Header>
          <h1>{t('ITSACHECKMATE', 'ItsaCheckmate')}</h1>
          <Button color='lightPrimary'>{t('NEW', 'New')}</Button>
        </Header>
        <Description>
          <div
            className='sub-header'
            dangerouslySetInnerHTML={{ __html: t('ITSACHECKMATE_SUB_HEADER', 'Take control of all your <strong>Ordering Platform Menus</strong> in one place!') }}
          />
          <div className='menu-item'>
            <Check2Circle />
            <p>{t('ITSACHECKMATE_MENU_1', '86 items & modifiers')}</p>
          </div>
          <div className='menu-item'>
            <Check2Circle />
            <p>{t('ITSACHECKMATE_MENU_2', 'Turn on or off ordering platforms')}</p>
          </div>
          <div className='menu-item'>
            <Check2Circle />
            <p>{t('ITSACHECKMATE_MENU_3', 'Manage delivery hours')}</p>
          </div>
          <div className='menu-item'>
            <Check2Circle />
            <p>{t('ITSACHECKMATE_MENU_4', 'Add, edit, or delete items ')}</p>
          </div>
        </Description>
        <Button color='primary' borderRadius='8px' className='all-setting' onClick={() => setSettingsOpen(true)}>
          <span>{t('SETTINGS', 'All settings')}</span>
          <BsArrowRight />
        </Button>
      </ItsaCheckmateContainer>
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
