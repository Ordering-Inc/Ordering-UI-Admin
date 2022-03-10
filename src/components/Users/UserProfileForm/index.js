import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Camera as CameraIcon } from 'react-bootstrap-icons'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import {
  UserFormDetails as UserProfileController,
  useLanguage,
  DragAndDrop,
  ExamineClick
} from 'ordering-components-admin'

import { UserFormDetailsUI } from '../UserFormDetails'
import { Alert } from '../../Shared'
import { bytesConverter } from '../../../utils'

import {
  Container,
  UserProfileContainer,
  UserImage,
  Image,
  Camera,
  UploadImageIcon,
  SkeletonWrapper,
  WrapperForm
} from './styles'

const UserProfileFormUI = (props) => {
  const {
    handleButtonUpdateClick,
    handlechangeImage,
    formState,
    isHiddenAddress,
    userState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const inputRef = useRef(null)

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handlechangeImage(files[0])
    }
  }

  const handleClickImage = () => {
    inputRef.current.click()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (formState.changes?.photo) {
      const isImage = true
      handleButtonUpdateClick(null, isImage)
    }
  }, [formState.changes?.photo])

  return (
    <>
      <Container>
        <UserProfileContainer mbottom={isHiddenAddress && 25}>
          <UserImage className='user-image'>
            <Image onClick={() => handleClickImage()} isImage={userState?.result?.result?.photo || (formState?.changes?.photo && !formState.result.error)}>
              <ExamineClick onFiles={handleFiles} childRef={(e) => { inputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                  {formState.loading
                    ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                    : ((!formState.changes?.result?.photo || formState.result?.result === 'Network Error' || formState.result.error)
                      ? userState?.result?.result?.photo
                        ? (<img src={userState?.result?.result?.photo} alt='user image' width='90px' height='90px' loading='lazy' />)
                        : (
                          <UploadImageIcon>
                            <FaUserAlt />
                          </UploadImageIcon>
                        )
                      : formState?.changes?.photo &&
                        <img src={formState?.changes?.photo} alt='user image' loading='lazy' />
                    )}
                </DragAndDrop>
              </ExamineClick>
              <Camera><CameraIcon /></Camera>
            </Image>
          </UserImage>
        </UserProfileContainer>
        <WrapperForm>
          <UserFormDetailsUI
            {...props}
            userData={userState?.result?.result}
            isHiddenAddress={isHiddenAddress}
          />
        </WrapperForm>
      </Container>
      <Alert
        title={t('PROFILE', 'Profile')}
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

export const UserProfileForm = (props) => {
  const UserProfileProps = {
    ...props,
    useSessionUser: false,
    UIComponent: UserProfileFormUI
  }

  return (
    <UserProfileController {...UserProfileProps} />
  )
}
