import React, { useState, useRef, useEffect } from 'react'
import { Alert } from '../Confirm'
import { useLanguage, DragAndDrop, ExamineClick, BusinessBrandForm as BusinessBrandFormController } from 'ordering-components-admin'
import { bytesConverter } from '../../../../../utils'
import Skeleton from 'react-loading-skeleton'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  Container,
  BusinessBrandImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon
} from './styles'
import { SpinnerLoader } from '../SpinnerLoader'

const BusinessBrandFormUI = (props) => {
  const {
    formState,
    handlechangeImage,
    handleUpdateClick,
    handleChangeInput,
    onClose
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const conatinerRef = useRef(null)

  const businessTypeImageInputRef = useRef(null)
  const handleClickImage = () => {
    businessTypeImageInputRef.current.click()
  }

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

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const CloseAddBusinessTypeForm = (e) => {
    const outsideDropdown = !conatinerRef.current?.contains(e.target)
    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (Object.keys(formState?.changes).length === 0 || formState?.loading) onClose()
        else handleUpdateClick()
      }
    }
  }

  useEffect(() => {
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: [formState?.result?.result]
      })
    }
  }, [formState])

  useEffect(() => {
    document.addEventListener('click', CloseAddBusinessTypeForm)
    return () => document.removeEventListener('click', CloseAddBusinessTypeForm)
  }, [formState])

  return (
    <>
      <Container
        ref={conatinerRef}
      >
        <BusinessBrandImage
          onClick={() => handleClickImage()}
          disabled={formState?.loading}
        >
          <ExamineClick
            onFiles={files => handleFiles(files)}
            childRef={(e) => { businessTypeImageInputRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={formState?.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files)}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState?.loading}
            >
              {formState?.loading
                ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                : ((!formState?.changes?.logo || formState?.result?.result === 'Network Error' || formState?.result?.error)
                  ? <div />
                  : formState?.changes?.logo &&
                    <img src={formState?.changes?.logo} alt='business brand logo' loading='lazy' />
                )}
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BiImage />
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </BusinessBrandImage>
        <input
          name='name'
          placeholder={t('WRITE_A_NAME', 'Write a name')}
          defaultValue={
            formState?.result?.result
              ? formState?.result?.result?.name
              : formState?.changes?.name
          }
          onChange={handleChangeInput}
          disabled={formState.loading}
          autoComplete='off'
        />
      </Container>
      <Alert
        title={t('BUSINESS_BRAND', 'Business brand')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      {formState?.loading && <SpinnerLoader />}
    </>
  )
}

export const BusinessBrandForm = (props) => {
  const businessBrandProps = {
    ...props,
    UIComponent: BusinessBrandFormUI
  }
  return <BusinessBrandFormController {...businessBrandProps} />
}
