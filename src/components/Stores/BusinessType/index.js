import React, { useState, useRef, useEffect } from 'react'
import { useLanguage, DragAndDrop, ExamineClick, BusinessType as BusinessTypeController } from 'ordering-components-admin'
import { Alert } from '../../Shared'
import { bytesConverter } from '../../../utils'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { ChevronRight } from 'react-bootstrap-icons'
import BiImage from '@meronex/icons/bi/BiImage'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  Container,
  BusinessTypeImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CheckBoxWrapper,
  BusinessTypeEditWrapper
} from './styles'

export const BusinessType = (props) => {
  // const {
  //   // businessTypeFormState,
  //   // handlechangeImage,
  //   // handleUpdateClick,
  //   // handleChangeInput,
  //   // businessType,
  //   // selectedBusinessTypes,
  //   // formState,
  //   // handleSelectBusinessTypes,
  //   // deleteBusinessType
  // } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const conatinerRef = useRef(null)
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const businessTypeImageInputRef = useRef(null)
  // const handleClickImage = (type) => {
  //   businessTypeImageInputRef.current.click()
  // }

  // const handleFiles = (files) => {
  //   if (files.length === 1) {
  //     const type = files[0].type.split('/')[0]
  //     if (type !== 'image') {
  //       setAlertState({
  //         open: true,
  //         content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
  //       })
  //       return
  //     }

  //     if (bytesConverter(files[0]?.size) > 2048) {
  //       setAlertState({
  //         open: true,
  //         content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
  //       })
  //       return
  //     }
  //     handlechangeImage(files[0])
  //   }
  // }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  // const CloseAddBusinessTypeForm = (e) => {
  //   const outsideDropdown = !conatinerRef.current?.contains(e.target)
  //   if (outsideDropdown) {
  //     if (!e.target.closest('.popup-component')) {
  //       if (Object.keys(businessTypeFormState?.changes).length > 0 && !businessTypeFormState?.loading) {
  //         handleUpdateClick()
  //       }
  //     }
  //   }
  // }

  // const checkKeyDown = (e) => {
  //   const keyCode = e.keyCode ? e.keyCode : e.which
  //   if (keyCode === 13 && Object.keys(businessTypeFormState?.changes).length > 0 && !businessTypeFormState?.loading) handleUpdateClick()
  // }

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('zone_setting').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('zone_setting').style.width = '100%'
      } else {
        document.getElementById('zone_setting').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  // useEffect(() => {
  //   if (businessTypeFormState?.result?.error) {
  //     setAlertState({
  //       open: true,
  //       content: [businessTypeFormState?.result?.result]
  //     })
  //   }
  // }, [businessTypeFormState])

  // useEffect(() => {
  //   document.addEventListener('click', CloseAddBusinessTypeForm)
  //   return () => document.removeEventListener('click', CloseAddBusinessTypeForm)
  // }, [businessTypeFormState])

  return (
    <>
      <Container
        ref={conatinerRef}
        id='zone_setting'
      >
        {/* <BusinessTypeEditWrapper>
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
            onKeyDown={(e) => checkKeyDown(e)}
          />
        </BusinessTypeEditWrapper>
        {/* <Trash onClick={deleteBusinessType} /> */}
        {/* <ChevronRight /> */}
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
