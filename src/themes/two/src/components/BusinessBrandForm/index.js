import React, { useState, useRef, useEffect } from 'react'
import { Alert } from '../Confirm'
import { useLanguage, DragAndDrop, ExamineClick, BusinessBrandForm as BusinessBrandFormController } from 'ordering-components-admin'
import { bytesConverter } from '../../../../../utils'
import Skeleton from 'react-loading-skeleton'
import BiImage from '@meronex/icons/bi/BiImage'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'

import {
  Container,
  BusinessBrandImage,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CheckBoxWrapper,
  LoadingWrapper
} from './styles'
import { SpinnerLoader } from '../SpinnerLoader'

const BusinessBrandFormUI = (props) => {
  const {
    formState,
    handlechangeImage,
    handleUpdateClick,
    handleChangeInput,
    onClose,
    business,
    brand,
    handleSelectBusinessBrand,
    editMode
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
        if (Object.keys(formState?.changes).length === 0 || formState?.loading) {
          onClose && onClose()
        } else handleUpdateClick()
      }
    }
  }

  const checkBoxClick = (id) => {
    handleSelectBusinessBrand && handleSelectBusinessBrand(id)
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
        isChecked={editMode && (business?.franchise_id === brand.id)}
      >
        {
          editMode ? (
            <CheckBoxWrapper onClick={() => checkBoxClick(brand?.id)}>
              {(business?.franchise_id === brand?.id) ? (
                <RiCheckboxFill className='fill' />
              ) : (
                <RiCheckboxBlankLine />
              )}
            </CheckBoxWrapper>
          ) : (
            <CheckBoxWrapper>
              <RiCheckboxBlankLine />
            </CheckBoxWrapper>
          )
        }
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
                  ? (brand?.logo ? (
                    <img src={brand?.logo} alt='business brand logo' loading='lazy' />
                  ) : <div />)
                  : formState?.changes?.logo &&
                    <img src={formState?.changes?.logo} alt='business brand logo' loading='lazy' />
                )}
              {
                !brand?.logo && (
                  <UploadImageIconContainer>
                    <UploadImageIcon>
                      <BiImage />
                    </UploadImageIcon>
                  </UploadImageIconContainer>
                )
              }
            </DragAndDrop>
          </ExamineClick>
        </BusinessBrandImage>
        <input
          name='name'
          placeholder={t('WRITE_A_NAME', 'Write a name')}
          defaultValue={
            formState?.result?.result
              ? formState?.result?.result?.name
              : (brand?.name ?? formState?.changes?.name)
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
      {formState?.loading && (
        <LoadingWrapper>
          <SpinnerLoader />
        </LoadingWrapper>
      )}
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
