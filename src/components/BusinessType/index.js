import React, { useState, useRef, useEffect } from 'react'
import { Alert } from '../Confirm'
import { useLanguage, DragAndDrop, ExamineClick } from 'ordering-components-admin'
import { bytesConverter } from '../../utils'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { BusinessType as BusinessTypeController } from './naked'
import { Trash } from 'react-bootstrap-icons'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  Container,
  BusinessTypeImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CheckBoxWrapper,
  BusinessTypeEditWrapper
} from './styles'

const BusinessTypeUI = (props) => {
  const {
    businessTypeFormState,
    handlechangeImage,
    handleUpdateClick,
    handleChangeInput,
    businessType,
    selectedBusinessTypes,
    formState,
    handleSelectBusinessTypes,
    deleteBusinessType
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const conatinerRef = useRef(null)

  const businessTypeImageInputRef = useRef(null)
  const handleClickImage = (type) => {
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
        if (Object.keys(businessTypeFormState?.changes).length > 0 && !businessTypeFormState?.loading) {
          handleUpdateClick()
        }
      }
    }
  }

  useEffect(() => {
    if (businessTypeFormState?.result?.error) {
      setAlertState({
        open: true,
        content: [businessTypeFormState?.result?.result]
      })
    }
  }, [businessTypeFormState])

  useEffect(() => {
    document.addEventListener('click', CloseAddBusinessTypeForm)
    return () => document.removeEventListener('click', CloseAddBusinessTypeForm)
  }, [businessTypeFormState])

  return (
    <>
      <Container
        ref={conatinerRef}
      >
        <BusinessTypeEditWrapper>
          <CheckBoxWrapper
            disabled={formState?.loading}
            isChecked={selectedBusinessTypes.includes(businessType.id)}
            onClick={() => handleSelectBusinessTypes(businessType.id)}
          >
            {selectedBusinessTypes.includes(businessType.id) ? (
              <RiCheckboxFill />
            ) : (
              <RiCheckboxBlankLine />
            )}
          </CheckBoxWrapper>
          <BusinessTypeImage
            onClick={() => handleClickImage()}
            disabled={businessTypeFormState?.loading}
          >
            <ExamineClick
              onFiles={files => handleFiles(files)}
              childRef={(e) => { businessTypeImageInputRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
              disabled={businessTypeFormState?.loading}
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                accept='image/png, image/jpeg, image/jpg'
                disabled={businessTypeFormState?.loading}
              >
                {businessTypeFormState?.loading
                  ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                  : ((!businessTypeFormState?.changes?.image || businessTypeFormState?.result?.result === 'Network Error' || businessTypeFormState?.result?.error)
                    ? <img src={businessType?.image || theme.images?.categories?.all} alt='business type image' loading='lazy' />
                    : businessTypeFormState?.changes?.image &&
                      <img src={businessTypeFormState?.changes?.image} alt='business type image' loading='lazy' />
                  )}
                <UploadImageIconContainer className='upload-icon'>
                  <UploadImageIcon>
                    <BiImage />
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </BusinessTypeImage>
          <input
            name='name'
            placeholder={t('WRITE_A_NAME', 'Write a name')}
            defaultValue={
              businessType
                ? businessType?.name
                : businessTypeFormState?.changes?.name
            }
            onChange={handleChangeInput}
            disabled={businessTypeFormState.loading}
            autoComplete='off'
            className='business-type-name'
          />
        </BusinessTypeEditWrapper>
        <Trash onClick={deleteBusinessType} />
      </Container>
      <Alert
        title={t('BUSINESS_TYPE', 'Business type')}
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

export const BusinessType = (props) => {
  const businessTypeProps = {
    ...props,
    UIComponent: BusinessTypeUI
  }
  return <BusinessTypeController {...businessTypeProps} />
}
