import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { RecoveryNotifications as RecoveryNotificationsController } from './naked'
import { Switch, Button } from '../../../styles'
import { Modal } from '../../Shared'

import {
  Container,
  NotificationBlock,
  BlockHeader,
  PreivewEditWrapper,
  PreviewContent,
  EmailPreviewWrapper,
  EmailPreviewHeader,
  PointGroup,
  EmailPreviewContent,
  SmsPreviewWrapper,
  SmsContentLayout,
  SmsPreviewContent,
  NotificationPreviewWrapper,
  NotificationPreviewLayout,
  NotificationContentHeader,
  NotificationContent,
  NotificationMessageContent,
  SmsPreviewContentWrapper
} from './styles'
import { NotificationPreview } from '../NotificationPreview'

const RecoveryNotificationsUI = (props) => {
  const {
    notificationListState,
    formState,
    handleChangeInput,
    handleUpdateClick,
    cleanFormState,
    handleDeleteClick
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [showPreview, setShowPreview] = useState(false)
  const [selectedNotification, setSelectedNotification] = useState(null)

  const handleEditNotification = (notification) => {
    setSelectedNotification(notification)
    setShowPreview(true)
  }

  const handleClosePreview = () => {
    cleanFormState && cleanFormState()
    setShowPreview(false)
    setSelectedNotification(null)
  }

  return (
    <>
      <Container>
        {notificationListState?.loading ? (
          <>
            {[...Array(2).keys()].map(i => (
              <NotificationBlock key={i}>
                <BlockHeader>
                  <Skeleton width={80} height={20} />
                  <Skeleton width={40} height={20} style={{ margin: '0px 10px' }} />
                </BlockHeader>
                <PreivewEditWrapper>
                  <Skeleton width={70} height={20} />
                  <Skeleton width={70} height={44} />
                </PreivewEditWrapper>
                <EmailPreviewWrapper isSkeleton />
              </NotificationBlock>
            ))}
          </>
        ) : (
          <>
            {notificationListState?.notifications.map((notification, i) => (
              <NotificationBlock
                key={i}
                noBorder={i === 0}
              >
                <BlockHeader>
                  <span>{notification.channel}</span>
                  <Switch
                    defaultChecked={notification?.enabled || false}
                    onChange={val => handleUpdateClick(notification.id, { enabled: val })}
                  />
                </BlockHeader>
                <PreivewEditWrapper>
                  <span>{t('PREVIEW', 'Preview')}</span>
                  <Button
                    color='secundary'
                    borderRadius='8px'
                    onClick={() => handleEditNotification(notification)}
                  >
                    {t('EDIT', 'Edit')}
                  </Button>
                </PreivewEditWrapper>
                <PreviewContent>
                  {notification?.channel === 'email' && (
                    <EmailPreviewWrapper>
                      <EmailPreviewHeader>
                        <PointGroup>
                          <div />
                          <div />
                          <div />
                        </PointGroup>
                      </EmailPreviewHeader>
                      <EmailPreviewContent>
                        <h2>{notification?.title}</h2>
                        <p>{notification.body}</p>
                      </EmailPreviewContent>
                    </EmailPreviewWrapper>
                  )}
                  {notification?.channel === 'sms' && (
                    <SmsPreviewWrapper>
                      <SmsContentLayout bgimage={theme.images.general.mobileHalfMask}>
                        <SmsPreviewContentWrapper>
                          <SmsPreviewContent>
                            <h2>{notification?.title}</h2>
                            <p>{notification.body}</p>
                          </SmsPreviewContent>
                        </SmsPreviewContentWrapper>
                      </SmsContentLayout>
                    </SmsPreviewWrapper>
                  )}
                  {notification?.channel === 'notification' && (
                    <NotificationPreviewWrapper>
                      <NotificationPreviewLayout>
                        <NotificationContentHeader bgimage={theme.images.general.whatsappHeader} />
                        <NotificationContent>
                          <NotificationMessageContent>
                            <h2>{notification?.title}</h2>
                            <p>{notification.body}</p>
                          </NotificationMessageContent>
                        </NotificationContent>
                      </NotificationPreviewLayout>
                    </NotificationPreviewWrapper>
                  )}
                </PreviewContent>
              </NotificationBlock>
            ))}
          </>
        )}
      </Container>
      <Modal
        width='70%'
        height='80vh'
        padding='30px'
        title={selectedNotification?.channel || t('NOTIFICATIONS', 'Notifications')}
        open={showPreview}
        onClose={() => handleClosePreview()}
      >
        <NotificationPreview
          notification={selectedNotification}
          handleChangeInput={handleChangeInput}
          formState={formState}
          handleUpdateClick={handleUpdateClick}
          handleDeleteClick={handleDeleteClick}
          onClose={() => handleClosePreview()}
        />
      </Modal>
    </>

  )
}

export const RecoveryNotifications = (props) => {
  const recoveryNotificationsProps = {
    ...props,
    UIComponent: RecoveryNotificationsUI
  }
  return <RecoveryNotificationsController {...recoveryNotificationsProps} />
}
