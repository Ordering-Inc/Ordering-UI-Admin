import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useUtils,
  SingleBusinessCategory as SingleBusinessCategoryController
} from 'ordering-components-admin'
import { Alert, Confirm } from '../Confirm'
import { IconButton } from '../../styles'
import BiImage from '@meronex/icons/bi/BiImage'
import { Pencil, Trash } from 'react-bootstrap-icons'
import {
  SingleCategoryContainer,
  CategoryContent,
  CategoryContentInside,
  ImageContainer
} from './styles'
import {
  UploadWrapper
} from '../SingleBusinessProduct/styles'

export const SingleBusinessCategoryUI = (props) => {
  const {
    categorySelected,
    isSkeleton,
    handleUpdateClick,
    handleOpenCategoryDetails,
    categoryFormState,
    isEditMode,
    deleteCategory
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const conatinerRef = useRef(null)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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

  const handleDeleteClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CATEGORY', 'Are you sure that you want to delete this category?'),
      handleOnAccept: () => {
        deleteCategory()
        setConfirm({ ...confirm, open: false })
      }
    })
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

  return (
    <>
      <SingleCategoryContainer
        data-index={categorySelected?.id}
      >

        {
          isSkeleton
            ? <Skeleton width={41} height={41} />
            : (
              <>
                <ImageContainer
                  disabled={categoryFormState?.loading}
                  className='img-section'
                >
                  {
                    categoryFormState?.changes?.image
                      ? (
                        <img src={optimizeImage(categoryFormState?.changes?.image, 'h_50,c_limit')} alt='category image' loading='lazy' />
                      )
                      : (
                        <UploadWrapper>
                          <BiImage />
                        </UploadWrapper>
                      )
                  }
                </ImageContainer>
              </>
            )
        }
        <CategoryContent>
          {
            isSkeleton
              ? <Skeleton height={15} />
              : (
                <>
                  <h1>{categorySelected?.name || t('ALL', 'All')}</h1>
                  <CategoryContentInside>
                    <IconButton
                      color='black'
                      onClick={() => handleOpenCategoryDetails(categorySelected)}
                    >
                      <Pencil />
                    </IconButton>
                    <IconButton
                      color='black'
                      onClick={() => handleDeleteClick()}
                    >
                      <Trash />
                    </IconButton>
                  </CategoryContentInside>
                </>
              )
          }
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

      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        width='700px'
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const SingleBusinessCategoryEdit = (props) => {
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
