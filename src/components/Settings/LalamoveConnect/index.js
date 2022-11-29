import React, { useState, useEffect } from 'react'
import { useLanguage, ApiKeysList as ApiKeysListController } from 'ordering-components-admin'
import { Button, IconButton } from '../../../styles'
import { Alert, Confirm, DragScroll, Modal } from '../../Shared'
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
  LalaMoveConnectContainer,
  SettingListConatiner,
  Tab,
  Paragraph,
  PurchaseWrapper
} from './styles'

const LalaMoveConnectUI = (props) => {
  const {
    actionState,
    onClose
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
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

  const handleGoToLink = (link) => {
    window.open(link, '_blank')
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
          <Paragraph>
            <h2>{t('REQUIREMENTS', 'Requirements')}</h2>
            <p>
              {t('LALAMOVE_CONNECT_REQUIREMENTS',
                'For this integration to work you need: \n' +
                '1.- LalaMove account. \n' +
                '2.- The advanced logistics module must be active. \n' +
                '3.- Package of Ordering.'
              )}
            </p>
          </Paragraph>
          <Paragraph>
            <h2>{t('ARTICLE', 'Article')}</h2>
            <p>
              {t('LALAMOVE_CONNECT_ARTICLE', 'To connect with LalaMove, you’ll have to use plugins, put in your LalaMove credentials, connect your LalaMove account, and create a driver company inside this dashboard; follow the next article step by step and get this connected in less than 5 minutes.')}
            </p>
            <a onClick={() => handleGoToLink(t('LALAMOVE_CONNECT_ARTICLE_LINK', 'https://support.ordering.co/hc/en-us/articles/10673894748941'))}>
              {t('VIEW_ARTICLE', 'View Article')}
            </a>
          </Paragraph>
          <Paragraph>
            <h2>{t('SUPPORT', 'Support')}</h2>
            <p>
              {t('LALAMOVE_CONNECT_SUPPORT', 'Are you having trouble connecting this?')}
            </p>
            <p>
              <a onClick={() => handleGoToLink(t('LALAMOVE_CONNECT_SUPPORT_LINK', 'https://www.ordering.co/contact-ordering'))}>{t('CONTACT_US', 'Contact us')}</a>; <span>{t('WE_ARE_HAPPY_TO_HELP', 'we are happy to help.')}</span>
            </p>
          </Paragraph>
          <Paragraph>
            <h2>{t('PRICE_INSTALATION', 'Price and installation time.')}</h2>
            <p>
              <span className='bold'>{t('DOORDASH_CONNECT_PRICE', '$99 monthly')}</span> | {t('DOORDASH_CONNECT_INSTALLATION', 'less than 24 hrs to get it installed in your project.')}
            </p>
          </Paragraph>
          <PurchaseWrapper>
            <Button
              outline
              color='primary'
              onClick={() => handleGoToLink(t('PURCHASE_INTEGRATION_LINK', 'https://www.ordering.co/ordering-sales'))}
            >
              {t('PURCHASE_INTEGRATION', 'Purchase Integration')}
            </Button>
          </PurchaseWrapper>
        </div>
      </CategoryExtraContent>
    )
  }

  return (
    <Container
      id='catDescription'
    >
      <LalaMoveConnectContainer>
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
          <h1>{t('CONNECT_WITH_LALAMOVE', 'Connect with Lalamove')}</h1>
          <Button color='lightPrimary'>{t('NEW', 'New')}</Button>
        </Header>
        <Description>
          {t('CONNECT_WITH_LALAMOVE_DESCRIPTION', 'If you have already worked with LalaMove or are running your business with LalaMove and Ordering simultaneously, this integration will help you connect both platforms and assign orders through them, making your job easy and automated.')}
        </Description>
        <AllSetting onClick={() => setSettingsOpen(true)}>
          <span>{t('SETTINGS', 'All settings')}</span>
          <BsArrowRight />
        </AllSetting>
      </LalaMoveConnectContainer>
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

export const LalaMoveConnect = (props) => {
  const apiKeysProps = {
    ...props,
    UIComponent: LalaMoveConnectUI
  }

  return <ApiKeysListController {...apiKeysProps} />
}
