import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  useUtils,
  SingleBusinessCategory as SingleBusinessCategoryController
} from 'ordering-components-admin'
import { Alert } from '../../Shared'
import { IconButton } from '../../../styles'
import BiImage from '@meronex/icons/bi/BiImage'
import { Pencil } from 'react-bootstrap-icons'
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
    isEditMode
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
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
