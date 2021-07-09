import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import { SingleProductsCategory as SingleProductsCategoryController } from './naked'
import { Alert } from '../Confirm'
import { Switch } from '../../styles/Switch'
import { useTheme } from 'styled-components'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import {
  SingleCategoryContainer,
  CategoryContent,
  CategoryActionContainer,
  CategoryEnableWrapper,
  CategoryImage,
  DefaultImgWrapper,
  ActionSelectorWrapper
} from './styles'
import { InputName } from '../SingleBusinessProduct/styles'

export const SingleProductsCategoryUI = (props) => {
  const {
    category,
    categorySelected,
    handleChangeCategory,
    isSkeleton,
    handelChangeCategoryActive,
    handleUpdateClick,
    deleteCategory,
    handleOpenCategoryDetails
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const categoryNameEditRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isEditMode, setIsEditMode] = useState(false)
  const ActionIcon = <FiMoreVertical />

  const closeEditMode = (e) => {
    if (isEditMode && !e.target.closest('.category-name-edit') && !e.target.closest('.popup-component')) {
      const inputValue = categoryNameEditRef.current.value
      if (inputValue === '') {
        setAlertState({
          open: true,
          content: [t('CATEGORY_NAME_IS_REQUIRED', 'Category name is Required')]
        })
      } else {
        setIsEditMode(false)
        handleUpdateClick(inputValue)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeEditMode)
    return () => document.removeEventListener('click', closeEditMode)
  }, [isEditMode])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  return (
    <>
      <SingleCategoryContainer
        active={!isSkeleton && (category?.id === categorySelected?.id)}
        onClick={(e) => handleChangeCategory(e, category)}
      >
        {
          isSkeleton
            ? <Skeleton width={41} height={41} />
            : (
              category?.image
                ? <CategoryImage src={category?.image} alt={category?.name} />
                : <DefaultImgWrapper />
            )
        }

        <CategoryContent>
          {
            isSkeleton
              ? <Skeleton height={15} />
              : (
                isEditMode
                  ? (
                    <InputName
                      className='category-name-edit'
                      defaultValue={category?.name}
                      ref={categoryNameEditRef}
                    />
                  )
                  : <h2 onClick={() => setIsEditMode(true)}>{category?.name}</h2>
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

export const SingleProductsCategory = (props) => {
  const { isSkeleton } = props
  const singleProductsCategoryProps = {
    ...props,
    UIComponent: SingleProductsCategoryUI
  }
  return (
    <>
      {isSkeleton ? (
        <SingleProductsCategoryUI {...props} />
      ) : (
        <SingleProductsCategoryController {...singleProductsCategoryProps} />
      )}
    </>
  )
}
