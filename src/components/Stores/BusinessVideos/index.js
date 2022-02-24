import React, { useState, useEffect } from 'react'
import { useLanguage, BusinessGallery as BusinessGalleryController } from 'ordering-components-admin'
import { Confirm, Alert } from '../../Shared'
import { Input, Button } from '../../../styles'

import {
  Container,
  BusinessVideoPathWrapper,
  BusinessAddVideoWrapper
} from './styles'

const BusinessVideosUI = (props) => {
  const {
    businessVideos,
    formState,
    cleanFormState,
    handleChangeBusinessVideo,
    handleUpdateBusinessGallery,
    handleDeleteBusinessGallery
  } = props
  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleDeleteClick = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_VIDEO', 'Are you sure that you want to delete this video?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteBusinessGallery(id)
      }
    })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState])

  useEffect(() => {
    cleanFormState({ changes: {} })
  }, [])

  return (
    <>
      <Container>
        {businessVideos.map(video => (
          <BusinessVideoPathWrapper key={video.id}>
            <span>{video?.video}</span>
            <p
              onClick={() => handleDeleteClick(video.id)}
            >
              {t('DELETE', 'Delete')}
            </p>
          </BusinessVideoPathWrapper>
        ))}
        <BusinessAddVideoWrapper>
          <Input
            placeholder={t('VIDEO_URL', 'Video url')}
            value={formState?.changes?.video ?? ''}
            onChange={(e) => handleChangeBusinessVideo(e)}
            disabled={formState?.loading}
            autoComplete='off'
          />
          <Button
            disabled={!formState?.changes?.video}
            onClick={() => handleUpdateBusinessGallery()}
            color='primary'
          >
            {t('ADD', 'Add')}
          </Button>
        </BusinessAddVideoWrapper>
        <Alert
          title={t('ERROR', 'Error')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
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
    </>
  )
}

export const BusinessVideos = (props) => {
  const businessGalleryProps = {
    ...props,
    isVideoGallery: true,
    UIComponent: BusinessVideosUI
  }
  return <BusinessGalleryController {...businessGalleryProps} />
}
