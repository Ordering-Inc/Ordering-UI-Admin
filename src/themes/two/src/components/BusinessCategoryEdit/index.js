import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  BusinessCategoryEdit as BusinessCategoryEditController
} from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { bytesConverter } from '../../../../../utils'
import { Alert } from '../Confirm'
import { Switch } from '../../styles/Switch'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import FiCamera from '@meronex/icons/fi/FiCamera'

import {
  Container,
  EditCategoryContent,
  HeaderContainer,
  BusinessEnableWrapper,
  CategoryTypeImage,
  BtnWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CategoryNameWrapper,
  SkeletonWrapper
} from './styles'

const BusinessCategoryEditUI = (props) => {
  const {
    open,
    onClose,
    formState,
    handlechangeImage,
    handleChangeInput,
    handleUpdateClick,
    handleChangeCheckBox,
    businessState
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const categoryTypeImageInputRef = useRef(null)

  const actionSidebar = (value) => {
    setIsMenuOpen(value)
  }

  const handleClose = () => {
    onClose()
    setIsMenuOpen(false)
  }

  const handleClickImage = () => {
    categoryTypeImageInputRef.current.click()
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

  useEffect(() => {
    if (formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState?.result])

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('editCategory').style.width = '100vw'
      } else {
        document.getElementById('editCategory').style.width = '500px'
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <>
      <Container id='editCategory'>
        <EditCategoryContent>
          {
            businessState.loading ? (
              <>
                <HeaderContainer>
                  <BusinessEnableWrapper className='business_enable_control'>
                    <Skeleton width={100} />
                    <Skeleton width={50} />
                  </BusinessEnableWrapper>
                  <Button onClick={handleClose}>
                    <Skeleton width={30} height={30} />
                  </Button>
                </HeaderContainer>
                <CategoryTypeImage>
                  <Skeleton width={300} height={300} />
                </CategoryTypeImage>
                <CategoryNameWrapper>
                  <label>
                    <Skeleton width={70} />
                  </label>
                  <Skeleton width={300} />
                </CategoryNameWrapper>
                <BtnWrapper>
                  <Skeleton width={70} height={30} />
                </BtnWrapper>
              </>
            ) : (
              <>
                <HeaderContainer>
                  <BusinessEnableWrapper className='business_enable_control'>
                    <span>{t('CATEGORY_NAME', 'Category name')}</span>
                    <Switch
                      defaultChecked={formState?.changes?.enabled || false}
                      onChange={handleChangeCheckBox}
                    />
                  </BusinessEnableWrapper>
                  <Button onClick={handleClose}>
                    <MdcClose />
                  </Button>
                </HeaderContainer>
                <CategoryTypeImage
                  onClick={() => handleClickImage()}
                  disabled={formState?.loading}
                >
                  <ExamineClick
                    onFiles={files => handleFiles(files)}
                    childRef={(e) => { categoryTypeImageInputRef.current = e }}
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
                        : ((!formState?.changes?.image || formState?.result?.result === 'Network Error' || formState?.result?.error)
                          ? <div />
                          : formState?.changes?.image &&
                            (
                              <img src={formState?.changes?.image} alt='business type image' loading='lazy' />
                            ))}
                      <UploadImageIconContainer>
                        <UploadImageIcon>
                          <FiCamera />
                        </UploadImageIcon>
                      </UploadImageIconContainer>
                    </DragAndDrop>
                  </ExamineClick>
                </CategoryTypeImage>
                <CategoryNameWrapper>
                  <label>{t('CATEGORY_NAME', 'Category name')}</label>
                  <Input
                    placeholder={t('Enter_CATEGORY_NAME', 'Enter a category name')}
                    name='name'
                    defaultValue={formState?.changes.name}
                    onChange={handleChangeInput}
                    autoComplete='off'
                  />
                </CategoryNameWrapper>
                <BtnWrapper>
                  <Button onClick={handleUpdateClick}>{t('SAVE', 'Save')}</Button>
                </BtnWrapper>
              </>
            )
          }

        </EditCategoryContent>
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
export const BusinessCategoryEdit = (props) => {
  const businessCategoryEditProps = {
    ...props,
    UIComponent: BusinessCategoryEditUI
  }

  return (
    <BusinessCategoryEditController {...businessCategoryEditProps} />
  )
}
