import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Camera as CameraIcon } from 'react-bootstrap-icons'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { DriverGroupSetting } from '../DriverGroupSetting'

import {
  UserFormDetails as UserProfileController,
  useLanguage,
  DragAndDrop,
  ExamineClick
} from 'ordering-components-admin'

import { UserFormDetailsUI } from '../UserFormDetails'
import { Alert } from '../Confirm'
import { Button } from '../../styles/Buttons'
import { bytesConverter } from '../../../../../utils'

import {
  Container,
  UserProfileContainer,
  UserImage,
  Image,
  SideForm,
  Camera,
  UserData,
  UploadImageIcon,
  SkeletonWrapper,
  WrapperForm
} from './styles'

const UserProfileFormUI = (props) => {
  const {
    userData,
    handleButtonUpdateClick,
    handlechangeImage,
    formState,
    cleanFormState,
    toggleIsEdit,
    isHiddenAddress,
    userState,
    isDriversPage
  } = props

  const [, t] = useLanguage()
  const [edit, setEdit] = useState(false)
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

  const toggleEditState = (val) => {
    setEdit(val)
    toggleIsEdit()
    if (!val) {
      cleanFormState({ changes: {} })
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
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        <UserProfileContainer mbottom={isHiddenAddress && 25}>
          <UserImage className='user-image'>
            <Image isEdit={edit} onClick={() => handleClickImage()} isImage={userState?.result?.result?.photo || (formState?.changes?.photo && !formState.result.error)}>
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
              {edit && (
                <Camera><CameraIcon /></Camera>
              )}
            </Image>
          </UserImage>

          {!edit && (
            <SideForm className='user-form'>
              {formState.loading ? (
                <UserData>
                  <Skeleton width={250} height={25} />
                  <Skeleton width={180} height={25} />
                  <Skeleton width={210} height={25} />
                  <Skeleton width={100} height={40} />
                </UserData>
              ) : (
                <UserData>
                  <h1>{userData?.name || userState?.result?.result?.name} {userData?.lastname || userState?.result?.result?.lastname}</h1>
                  <p>{userData?.email || userState?.result?.result?.email}</p>
                  {(userData?.cellphone || userState?.result?.result?.cellphone) && (
                    <p>{(userData?.country_phone_code || userState?.result?.result?.country_phone_code) && `+${(userData?.country_phone_code || userState?.result?.result?.country_phone_code)} `}{(userData?.cellphone || userState?.result?.result?.cellphone)}</p>
                  )}
                  {(userData?.birthdate || userState?.result?.result?.birthdate) && (
                    <p>
                      <span>{t('BIRTHDATE', 'Birthdate')}</span>
                      <span>: </span>
                      <span>{userData?.birthdate || userState?.result?.result?.birthdate}</span>
                    </p>
                  )}
                </UserData>
              )}
            </SideForm>
          )}
        </UserProfileContainer>
        {edit && (
          <WrapperForm>
            <UserFormDetailsUI
              {...props}
              userData={userState?.result?.result}
              onCancel={toggleEditState}
              onCloseProfile={() => setEdit(false)}
              isHiddenAddress={isHiddenAddress}
            />
          </WrapperForm>
        )}
        {!edit && (
          <Button
            color='secundaryDark'
            borderRadius='8px'
            onClick={() => toggleEditState(true)}
          >
            {t('EDIT', 'Edit')}
          </Button>
        )}

        {isDriversPage && !edit && (
          <DriverGroupSetting userId={userData?.id || userState?.result?.result?.id} />
        )}
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
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
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
