import React, { useRef, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { bytesConverter } from '../../utils'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  BusinessCategoryCreator as BusinessCategoryCreatorController
} from 'ordering-components-admin'
import { Switch } from '../../styles/Switch'
import { Alert } from '../Confirm'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { Image as ImageIcon } from 'react-bootstrap-icons'
import {
  CreateBusinessCategoryContainer,
  InputCategoryName,
  CategoryImage,
  UploadImageIcon,
  UploadImageIconContainer
} from './styles'
import {
  CategoryContent,
  CategoryActionContainer,
  CategoryEnableWrapper,
  ActionSelectorWrapper
} from '../SingleBusinessCategory/styles'

const BusinessCategoryCreatorUI = (props) => {
  const {
    categoryState,
    handleChangeInput,
    handlechangeImage,
    handleUpdateClick,
    setIsAddCategory
  } = props
  const [, t] = useLanguage()

  const categoryImageInputRef = useRef(null)
  const conatinerRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleClickImage = () => {
    categoryImageInputRef.current.click()
  }

  const handleFiles = (files, name) => {
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
      handlechangeImage(files[0], name)
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
        if (Object.keys(categoryState?.category).length > 1 && !categoryState?.loading) {
          handleUpdateClick()
        } else {
          setIsAddCategory(false)
        }
      }
    }
  }

  useEffect(() => {
    if (categoryState?.result?.error) {
      setAlertState({
        open: true,
        content: categoryState?.result?.result
      })
    }
  }, [categoryState?.result])

  useEffect(() => {
    document.addEventListener('click', CloseAddBusinessTypeForm)
    return () => document.removeEventListener('click', CloseAddBusinessTypeForm)
  }, [categoryState])

  useEffect(() => {
    if (!categoryState?.loading && !categoryState?.result.error && categoryState?.result?.result) {
      const toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
      const content = t('CATEGORY_ADD', 'Category added')
      toast.dark(content, toastConfigure)
    }
  }, [categoryState?.loading])

  return (
    <>
      <CreateBusinessCategoryContainer ref={conatinerRef}>
        <CategoryImage onClick={handleClickImage}>
          <ExamineClick
            onFiles={files => handleFiles(files, 'image')}
            childRef={(e) => { categoryImageInputRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={categoryState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files, 'image')}
              accept='image/png, image/jpeg, image/jpg'
              disabled={categoryState.loading}
            >
              {(!categoryState.loading && categoryState.category?.image && categoryState.result?.result !== 'Network Error')
                ? (<img src={categoryState?.category?.image} alt='header image' loading='lazy' />)
                : (
                  <UploadImageIconContainer
                    isImage={categoryState?.category?.image}
                  >
                    <UploadImageIcon>
                      <ImageIcon />
                    </UploadImageIcon>
                  </UploadImageIconContainer>
                )}
            </DragAndDrop>
          </ExamineClick>
        </CategoryImage>
        <CategoryContent>
          <InputCategoryName
            name='name'
            placeholder={t('WRITE_NAME', 'Write name')}
            defaultValue={categoryState.category?.name || ''}
            onChange={(e) => handleChangeInput(e.target.value, true)}
            autoComplete='off'
            disabled={categoryState.loading}
          />
          <CategoryActionContainer>
            <CategoryEnableWrapper className='business_enable_control'>
              {
                categoryState.category?.enabled
                  ? <span>{t('ENABLE', 'Enable')}</span>
                  : <span>{t('DISABLE', 'Disable')}</span>
              }
              <Switch
                defaultChecked={categoryState.category?.enabled || false}
                onChange={handleChangeInput}
              />
            </CategoryEnableWrapper>
            <ActionSelectorWrapper className='business_actions'>
              <FiMoreVertical />
            </ActionSelectorWrapper>
          </CategoryActionContainer>
        </CategoryContent>
      </CreateBusinessCategoryContainer>
      <Alert
        title={t('CATEGORY', 'Category')}
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

export const BusinessCategoryCreator = (props) => {
  const businessCategoryCreatorProps = {
    ...props,
    UIComponent: BusinessCategoryCreatorUI
  }
  return (
    <BusinessCategoryCreatorController {...businessCategoryCreatorProps} />
  )
}
