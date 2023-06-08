import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useLanguage, ApiKeysList as ApiKeysListController } from 'ordering-components-admin'
import { Button, IconButton } from '../../../styles'
import { Alert, Confirm, Modal } from '../../Shared'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import { ArrowsAngleContract, ArrowsAngleExpand, XLg } from 'react-bootstrap-icons'

import {
  Header,
  Description,
  CategoryExtraContent,
  Container,
  DescriptionHeader,
  HeaderIcons,
  DoordashConnectContainer,
  Paragraph
} from './styles'
import { useWindowSize } from '../../../hooks/useWindowSize'

const BacCredomaticUI = (props) => {
  const {
    actionState,
    onClose
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
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

  const handleGoToLink = (link) => {
    window.open(link, '_blank')
  }

  const expandSidebar = () => {
    const element = document.getElementById('catDescription')
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

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

  const handleOpenMore = (isInitialRender) => {
    setSettingsOpen(true)
    if (!isInitialRender) {
      const id = query.get('id')
      history.replace(`${location.pathname}?id=${id}&more=settings`)
    }
  }

  const handleCloseDescription = () => {
    setSettingsOpen(false)
    const id = query.get('id')
    history.replace(`${location.pathname}?id=${id}`)
  }

  useEffect(() => {
    const more = query.get('more')
    if (more === 'settings') {
      handleOpenMore(true)
    }
  }, [])

  const DoordashConnectDescription = () => {
    return (
      <CategoryExtraContent>
        <IconButton
          color='black'
          onClick={() => handleCloseDescription()}
        >
          <XLg />
        </IconButton>
        <div>
          <Header>
            <h1>{t('MORE_INFO', 'More Info')}</h1>
          </Header>
          <Paragraph>
            <h3>{t('SUPPORT', 'Support')}</h3>
            <p>
              {t('BAC_CREDOMATIC_CONNECT_SUPPORT', 'Are you having trouble connecting this')}
            </p>
            <p>
              <a onClick={() => handleGoToLink(t('BAC_CREDOMATIC_CONNECT_SUPPORT_LINK', 'https://www.ordering.co/contact-ordering'))}>{t('CONTACT_US', 'Contact us')}</a>; <span>{t('WE_ARE_HAPPY_TO_HELP', 'we are happy to help.')}</span>
            </p>
          </Paragraph>
        </div>
      </CategoryExtraContent>
    )
  }

  return (
    <Container
      id='catDescription'
    >
      <DoordashConnectContainer>
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
          <h1>{t('BAC_CREDOMATIC', 'BAC Credomatic')}</h1>
        </Header>
        <Description>
          {t('CONNECT_WITH_BAC_CREDOMATIC_DESCRIPTION', 'BAC Credomatic is a financial group in Central America, with operations in Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica , Panama, Grand Cayman, The Bahamas, and the United States.')}
        </Description>
        <Button color='primary' borderRadius='8px' className='all-setting' onClick={() => handleOpenMore()}>
          <span>{t('SETTINGS', 'All settings')}</span>
          <BsArrowRight />
        </Button>
      </DoordashConnectContainer>
      {settingsOpen && (
        <>
          {width >= 1000 ? (
            <DoordashConnectDescription />
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
                <DoordashConnectDescription />
              </Modal>
            </>
          )}
        </>
      )}
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const BacCredomatic = (props) => {
  const bacCredomaticProps = {
    ...props,
    UIComponent: BacCredomaticUI
  }

  return <ApiKeysListController {...bacCredomaticProps} />
}
