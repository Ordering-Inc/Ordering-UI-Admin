import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  useConfig
  // BusinessProductsCategoyDetails as BusinessProductsCategoyDetailsController
} from 'ordering-components-admin'
import {
  BusinessProductsCategoyDetails as BusinessProductsCategoyDetailsController
} from './naked'
import { bytesConverter } from '../../utils'
import { Alert, Confirm } from '../Confirm'
import { Button, DefaultSelect, Input, Switch } from '../../styles'
import FiCamera from '@meronex/icons/fi/FiCamera'
import { ThreeDots } from 'react-bootstrap-icons'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'

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
  ParentCategorySelectWrapper,
  Option,
  RightHeader,
  ActionSelectorWrapper,
  SkipButton
} from './styles'

const BusinessProductsCategoyDetailsUI = (props) => {
  const {
    formState,
    handlechangeImage,
    handleChangeInput,
    handleUpdateClick,
    handleChangeCheckBox,
    businessState,
    category,
    categorySelected,
    parentCategories,
    handleChangeItem,
    isAddMode,
    handleDeleteCategory,

    isTutorialMode,
    handleTutorialSkip
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [configState] = useConfig()
  const useParentCategory = configState?.configs?.use_parent_category?.value

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const categoryTypeImageInputRef = useRef(null)
  const [parentCategoriesOptions, setParentCategoriesOptions] = useState([])
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

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

  const handleDeleteClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete this product?'),
      handleOnAccept: () => {
        handleDeleteCategory()
        setConfirm({ ...confirm, open: false })
      }
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

  useEffect(() => {
    const _parentCategoriesOptions = parentCategories.map(category => {
      return {
        value: category.id,
        content: <Option>{category?.name}</Option>
      }
    })
    setParentCategoriesOptions(_parentCategoriesOptions)
  }, [parentCategories])

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
                  <Skeleton width={30} height={30} />
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
                    {isAddMode ? (
                      <span>{t('NEW_CATEGORY', 'New category')}</span>
                    ) : (
                      <>
                        {
                          formState?.changes?.name && (
                            <span>{formState?.changes?.name}</span>
                          )
                        }
                        <Switch
                          defaultChecked={formState?.changes?.enabled || false}
                          onChange={(val) => handleChangeCheckBox({ enabled: val })}
                        />
                      </>
                    )}
                  </BusinessEnableWrapper>
                  <RightHeader>
                    {!isAddMode && (
                      <ActionSelectorWrapper>
                        <DropdownButton
                          className='product_actions'
                          menuAlign={theme?.rtl ? 'left' : 'right'}
                          title={<ThreeDots />}
                          id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                        >
                          <Dropdown.Item
                            onClick={() => handleDeleteClick()}
                          >
                            {t('DELETE', 'Delete')}
                          </Dropdown.Item>
                        </DropdownButton>
                      </ActionSelectorWrapper>
                    )}
                  </RightHeader>
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
                      {
                      formState?.changes?.image
                        ? <img src={formState?.changes?.image} alt='business type image' loading='lazy' />
                        : <div />
                      }
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
                    placeholder={t('ENTER_CATEGORY_NAME', 'Enter a category name')}
                    name='name'
                    defaultValue={formState?.changes.name}
                    onChange={handleChangeInput}
                    autoComplete='off'
                  />
                </CategoryNameWrapper>
                {useParentCategory === '1' && (
                  <>
                    {categorySelected && isAddMode && (
                      <BusinessEnableWrapper style={{ paddingTop: 20, display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: 15 }}>{t('ENABLE_PARENT_CATEGORY', 'Allow parent category')}</span>
                        <Switch
                          defaultChecked={false}
                          onChange={(val) => handleChangeCheckBox({ enabledParent: val })}
                        />
                      </BusinessEnableWrapper>
                    )}

                    {!isAddMode && categorySelected && parentCategories.length > 0 && (
                      <ParentCategorySelectWrapper>
                        <label>{t('PARENT_CATEGORY', 'Parent category')}</label>
                        <DefaultSelect
                          placeholder={t('SELECT_PARENT_CATEGORY', 'Select a parent category')}
                          options={parentCategoriesOptions}
                          defaultValue={formState?.changes?.parent_category_id}
                          onChange={val => handleChangeItem({ parent_category_id: val })}
                        />
                      </ParentCategorySelectWrapper>
                    )}
                  </>
                )}
                <BtnWrapper>
                  {isTutorialMode ? (
                    <>
                      <SkipButton
                        onClick={() => handleTutorialSkip()}
                      >
                        {t('TUTORIAL_SKIP', 'Skip')}
                      </SkipButton>
                      <Button
                        borderRadius='8px'
                        color='primary'
                        onClick={handleUpdateClick}
                      >
                        {t('SAVE_AND_CONTINUE', 'Save and continue')}
                      </Button>
                    </>
                  ) : (
                    <Button
                      borderRadius='8px'
                      color='primary'
                      onClick={handleUpdateClick}
                    >
                      {category ? t('SAVE', 'Save') : t('ADD', 'Add')}
                    </Button>
                  )}
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
export const BusinessProductsCategoyDetails = (props) => {
  const businessCategoryEditProps = {
    ...props,
    UIComponent: BusinessProductsCategoyDetailsUI
  }

  return (
    <BusinessProductsCategoyDetailsController {...businessCategoryEditProps} />
  )
}
