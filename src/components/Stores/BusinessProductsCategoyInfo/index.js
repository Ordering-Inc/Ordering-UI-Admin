import React, { useState, useEffect, useRef } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  useConfig
} from 'ordering-components-admin'
import { bytesConverter } from '../../../utils'
import { Alert, Confirm } from '../../Shared'
import { Button, DefaultSelect, Input, Switch } from '../../../styles'
import FiCamera from '@meronex/icons/fi/FiCamera'

import {
  BusinessEnableWrapper,
  CategoryTypeImage,
  BtnWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CategoryNameWrapper,
  ParentCategorySelectWrapper,
  Option,
  GenerateButtonWrapper,
  SkipButton
} from './styles'

export const BusinessProductsCategoyInfo = (props) => {
  const {
    formState,
    handlechangeImage,
    handleChangeInput,
    handleUpdateClick,
    handleChangeCheckBox,
    category,
    categorySelected,
    parentCategories,
    handleChangeItem,
    isAddMode,
    isTutorialMode,
    handleTutorialSkip
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()
  const useParentCategory = configState?.configs?.use_parent_category?.value

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const categoryTypeImageInputRef = useRef(null)
  const [parentCategoriesOptions, setParentCategoriesOptions] = useState([])
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [autoGenerateCode, setAutoGenerate] = useState({
    isAutoGenerate: false,
    autoCodeText: categorySelected?.slug
  })

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

  const stringToSlug = str => {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'aaaaaaeeeeiiiioooouuuunc------'

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '_') // collapse whitespace and replace by -
      .replace(/-+/g, '_') // collapse dashes
      .replace(/^-+/, '') // trim - from start of text
      .replace(/-+$/, '') // trim - from end of text

    return str
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

  useEffect(() => {
    if (autoGenerateCode.isAutoGenerate) {
      const generateCode = {
        target: {
          name: 'slug',
          value: formState.changes.name ? stringToSlug(formState.changes.name) : stringToSlug(categorySelected.name)
        }
      }
      setAutoGenerate({
        ...autoGenerateCode,
        autoCodeText: generateCode.target.value
      })
      handleChangeInput(generateCode)
      setAutoGenerate({
        ...autoGenerateCode,
        isAutoGenerate: false
      })
    }
  }, [autoGenerateCode])

  return (
    <>
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
      <CategoryNameWrapper>
        <label>{t('SLUG', 'Slug')}</label>
        <Input
          name='slug'
          placeholder={t('SLUG', 'Slug')}
          onChange={handleChangeInput}
          disabled={formState.loading}
          autoComplete='off'
          value={
            formState?.changes?.slug || formState?.result?.result?.slug || ''
          }
        />
        <GenerateButtonWrapper>
          <Button
            color='primary'
            borderRadius='7.6px'
            disabled={formState.loading || !formState.changes?.name}
            onClick={() => setAutoGenerate({
              ...autoGenerateCode,
              isAutoGenerate: true
            })}
          >
            {formState?.loading ? t('LOADING', 'Loading') : t('AUTOGENERATE', 'Auto Generate')}
          </Button>
        </GenerateButtonWrapper>
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
