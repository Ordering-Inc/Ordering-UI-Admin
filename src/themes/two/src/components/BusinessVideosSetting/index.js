import React, { useState, useEffect } from 'react'
import { useLanguage, BusinessGallery as BusinessGalleryController } from 'ordering-components-admin'
import { Confirm, Alert } from '../Confirm'
import BsTrash from '@meronex/icons/bs/BsTrash'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import { Input } from '../../styles/Inputs'

import {
  Container,
  BusinessVideoPathWrapper,
  BusinessAddVideoWrapper,
  AddButton
} from './styles'

const BusinessVideosSettingUI = (props) => {
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
      content: t('QUESTION_DELETE_IMAGE', 'Are you sure that you want to delete this image?'),
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
            <BsTrash
              onClick={() => handleDeleteClick(video.id)}
            />
          </BusinessVideoPathWrapper>
        ))}
        <BusinessAddVideoWrapper>
          <Input
            placeholder={t('VIDEO_URL', 'Video url')}
            defaultValue={formState?.changes?.video ?? ''}
            onChange={(e) => handleChangeBusinessVideo(e)}
            disabled={formState?.loading}
            autoComplete='off'
          />
          <AddButton
            disabled={!formState?.changes?.video}
            onClick={() => handleUpdateBusinessGallery()}
          >
            <BsPlusSquare />
          </AddButton>
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
          title={t('ORDERING', 'Ordering')}
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

export const BusinessVideosSetting = (props) => {
  const businessGalleryProps = {
    ...props,
    UIComponent: BusinessVideosSettingUI
  }
  return <BusinessGalleryController {...businessGalleryProps} />
}
