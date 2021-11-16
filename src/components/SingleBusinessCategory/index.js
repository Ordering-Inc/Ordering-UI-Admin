import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  SingleBusinessCategory as SingleBusinessCategoryController
} from 'ordering-components-admin'
import { Alert } from '../Confirm'
import { Switch } from '../../styles/Switch'

import {
  SingleCategoryContainer,
  CategoryContent,
  CategoryActionContainer,
  CategoryEnableWrapper
} from './styles'

export const SingleBusinessCategoryUI = (props) => {
  const {
    category,
    categorySelected,
    handleChangeCategory,
    isSkeleton,
    handelChangeCategoryActive,
    handleUpdateClick,
    categoryFormState,
    isEditMode,
    handleDragOver,
    handleDrop,
    handleDragEnd,
    onDataSelected,
    dataSelected,
    spaceTab
  } = props

  const [, t] = useLanguage()
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

  const handleDragOverChange = (e) => {
    const element = e.target.closest('.draggable-category')
    if (element) {
      onDataSelected(element.dataset.index)
    }
    handleDragOver(e)
  }

  const handleDragEndChange = (e) => {
    onDataSelected('')
    handleDragEnd(e)
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
        active={!isSkeleton && (category?.id === categorySelected?.id)}
        onClick={(e) => handleChangeCategory(e, category)}
        ref={conatinerRef}
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOverChange(e)}
        onDragEnd={e => handleDragEndChange(e)}
        className='draggable-category'
        data-index={category?.id}
        isAccept={dataSelected && dataSelected === category?.id.toString()}
        spaceTab={spaceTab}
      >
        <CategoryContent>
          {
            isSkeleton
              ? <Skeleton height={15} />
              : (
                <div>
                  {categoryFormState?.changes?.name}
                </div>
              )
          }
          <CategoryActionContainer>
            <CategoryEnableWrapper className='business_enable_control'>
              {
                isSkeleton
                  ? <Skeleton height={15} width={100} />
                  : (
                    <>
                      <Switch
                        defaultChecked={category?.enabled}
                        onChange={handelChangeCategoryActive}
                      />
                    </>
                  )
              }
            </CategoryEnableWrapper>
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
