import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { toast } from 'react-toastify'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  SingleBusinessCategory as SingleBusinessCategoryController
} from 'ordering-components-admin'
import { Alert } from '../Confirm'
import { bytesConverter } from '../../../../../utils'
import { Switch } from '../../styles/Switch'
import { useTheme } from 'styled-components'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import BiImage from '@meronex/icons/bi/BiImage'
import {
  SingleCategoryContainer,
  CategoryContent,
  CategoryActionContainer,
  CategoryEnableWrapper,
  ActionSelectorWrapper
} from './styles'
import {
  ProductTypeImage,
  UploadWrapper
} from '../SingleBusinessProduct/styles'

export const SingleBusinessCategoryUI = (props) => {
  const {
    category,
    categorySelected,
    handleChangeCategory,
    isSkeleton,
    handelChangeCategoryActive,
    handleUpdateClick,
    deleteCategory,
    handleOpenCategoryDetails,
    categoryFormState,
    handlechangeImage,
    handleInputChange,
    isEditMode
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const conatinerRef = useRef(null)
  const ProductTypeImgRef = useRef(null)
  const ActionIcon = <FiMoreVertical />

  const handleClickImage = () => {
    ProductTypeImgRef.current.click()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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

  const closeProductEdit = (e) => {
    const outsideDropdown = !conatinerRef.current?.contains(e.target)
    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (isEditMode && Object.keys(categoryFormState?.changes).length > 0 && !categoryFormState?.loading) {
          handleUpdateClick()
        }
      }
    }
  }

  useEffect(() => {
    if (categoryFormState?.result?.error) {
      setAlertState({
        open: true,
        content: categoryFormState?.result?.result
      })
    }
  }, [categoryFormState?.result])

  useEffect(() => {
    document.addEventListener('click', closeProductEdit)
    return () => document.removeEventListener('click', closeProductEdit)
  }, [categoryFormState])

  useEffect(() => {
    if (!categoryFormState?.loading &&
      !categoryFormState?.result?.error &&
      categoryFormState?.result?.result) {
      const toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
      let content = ''
      switch (categoryFormState?.status) {
        case 'update':
          content = t('CATEGORY_UPDATED', 'Category updated')
          break
        case 'delete':
          content = t('CATEGORY_DELETE', 'Category deleted')
          break
        case 'add':
          content = t('CATEGORY_ADD', 'Category added')
          break
        default:
          content = t('CATEGORY_SAVED', 'Category saved')
          break
      }
      toast.dark(content, toastConfigure)
    }
  }, [categoryFormState?.loading])

  return (
    <>
      <SingleCategoryContainer
        active={!isSkeleton && (category?.id === categorySelected?.id)}
        onClick={(e) => handleChangeCategory(e, category)}
        ref={conatinerRef}
      >
        {
          isSkeleton
            ? <Skeleton width={41} height={41} />
            : (
              <ProductTypeImage
                onClick={() => handleClickImage()}
                disabled={categoryFormState?.loading}
                className='img-section'
              >
                <ExamineClick
                  onFiles={files => handleFiles(files)}
                  childRef={(e) => { ProductTypeImgRef.current = e }}
                  accept='image/png, image/jpeg, image/jpg'
                  disabled={categoryFormState?.loading}
                >
                  <DragAndDrop
                    onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                    accept='image/png, image/jpeg, image/jpg'
                    disabled={categoryFormState?.loading}
                  >
                    {
                      categoryFormState?.changes?.image
                        ? (
                          <img src={categoryFormState?.changes?.image} alt='business type image' loading='lazy' />
                        )
                        : (
                          <UploadWrapper>
                            <BiImage />
                          </UploadWrapper>
                        )
                    }
                  </DragAndDrop>
                </ExamineClick>
              </ProductTypeImage>
            )
        }

        <CategoryContent>
          {
            isSkeleton
              ? <Skeleton height={15} />
              : (
                <input
                  type='text'
                  name='name'
                  value={categoryFormState?.changes?.name || ''}
                  onChange={handleInputChange}
                  autoComplete='off'
                />
              )
          }
          <CategoryActionContainer>
            <CategoryEnableWrapper className='business_enable_control'>
              {
                isSkeleton
                  ? <Skeleton height={15} width={100} />
                  : (
                    <>
                      {
                        category?.enabled
                          ? <span>{t('ENABLE', 'Enable')}</span>
                          : <span>{t('DISABLE', 'Disable')}</span>
                      }
                      <Switch
                        defaultChecked={category?.enabled}
                        onChange={handelChangeCategoryActive}
                      />
                    </>
                  )
              }
            </CategoryEnableWrapper>
            <ActionSelectorWrapper className='business_actions'>
              {
                isSkeleton
                  ? <Skeleton height={15} width={15} />
                  : (
                    <DropdownButton
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={ActionIcon}
                      className='actions-btn'
                      id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                    >
                      <Dropdown.Item onClick={() => handleOpenCategoryDetails(category)}>{t('EDIT', 'Edit')}</Dropdown.Item>
                      <Dropdown.Item onClick={deleteCategory}>{t('DELETE', 'Delete')}</Dropdown.Item>
                    </DropdownButton>
                  )
              }
            </ActionSelectorWrapper>
          </CategoryActionContainer>
        </CategoryContent>
      </SingleCategoryContainer>

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

export const SingleBusinessCategory = (props) => {
  const { isSkeleton } = props
  const singleBusinessCategoryProps = {
    ...props,
    UIComponent: SingleBusinessCategoryUI
  }
  return (
    <>
      {isSkeleton ? (
        <SingleBusinessCategoryUI {...props} />
      ) : (
        <SingleBusinessCategoryController {...singleBusinessCategoryProps} />
      )}
    </>
  )
}
