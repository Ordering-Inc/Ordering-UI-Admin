import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { RecoveryNotificationList as RecoveryNotificationListController } from './naked'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { Modal, Alert } from '../../Shared'
import { Switch, Button } from '../../../styles'
import { SingleRecoveryNotification } from '../SingleRecoveryNotification'

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
  SmsPreviewContentWrapper,
  AddNewNotificationButton
} from './styles'

const RecoveryNotificationListUI = (props) => {
  const {
    action,
    notificationListState,
    handleUpdateClick,
    handleAddNotifications,
    handleUpdateNotifications,
    handleDeleteNotifications,
    actionState
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [showPreview, setShowPreview] = useState(false)
  const [selectedNotification, setSelectedNotification] = useState(null)
  const [isAddModal, setIsAddModal] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleEditNotification = (notification) => {
    setSelectedNotification(notification)
    setShowPreview(true)
  }

  const handleClosePreview = () => {
    setShowPreview(false)
    setSelectedNotification(null)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!actionState?.error || actionState.loading) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  return (
    <>
      <Container>
        {notificationListState?.loading ? (
          <>
            {[...Array(2).keys()].map(i => (
              <NotificationBlock key={i} noBorder={i === 0}>
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
            <AddNewNotificationButton>
              <span onClick={() => setIsAddModal(true)}>{t('ADD_NEW_NOTIFICATION', 'Add new notification')}</span>
            </AddNewNotificationButton>
          </>
        )}
      </Container>

      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={selectedNotification?.channel || t('NOTIFICATIONS', 'Notifications')}
        open={showPreview}
        onClose={() => handleClosePreview()}
      >
        <SingleRecoveryNotification
          notification={selectedNotification}
          handleAddNotifications={handleAddNotifications}
          handleUpdateNotifications={handleUpdateNotifications}
          handleDeleteNotifications={handleDeleteNotifications}
          onClose={() => handleClosePreview()}
          action={action}
        />
      </Modal>
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('NOTIFICATIONS', 'Notifications')}
        open={isAddModal}
        onClose={() => setIsAddModal(false)}
      >
        <SingleRecoveryNotification
          isAdd
          action={action}
          notification={selectedNotification}
          handleAddNotifications={handleAddNotifications}
          handleUpdateNotifications={handleUpdateNotifications}
          handleDeleteNotifications={handleDeleteNotifications}
          onClose={() => setIsAddModal(false)}
        />
      </Modal>

      <Alert
        title={t('RECOVERY_ACTIONS', 'Recovery actions')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const RecoveryNotificationList = (props) => {
  const recoveryNotificationsProps = {
    ...props,
    UIComponent: RecoveryNotificationListUI
  }
  return <RecoveryNotificationListController {...recoveryNotificationsProps} />
}
