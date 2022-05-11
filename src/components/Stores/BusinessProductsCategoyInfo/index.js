import React, { useState, useEffect, useRef } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  useConfig
} from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { bytesConverter } from '../../../utils'
import { Alert, Confirm, Modal, ImageCrop } from '../../Shared'
import { Button, DefaultSelect, Input, Switch, TextArea } from '../../../styles'
// import FiCamera from '@meronex/icons/fi/FiCamera'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  BusinessEnableWrapper,
  BtnWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CategoryNameWrapper,
  ParentCategorySelectWrapper,
  Option,
  GenerateButtonWrapper,
  SkipButton,
  HeaderImage,
  LogoImage,
  SkeletonImgWrapper
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
  const logoImageInputRef = useRef(null)
  const [parentCategoriesOptions, setParentCategoriesOptions] = useState([])
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [autoGenerateCode, setAutoGenerate] = useState({
    isAutoGenerate: false,
    autoCodeText: categorySelected?.slug
  })

  const headerImageInputRef = useRef(null)

  const handleClickImage = (type) => {
    if (type === 'header') {
      headerImageInputRef.current.click()
    }

    if (type === 'image') {
      logoImageInputRef.current.click()
    }
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

      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        setCropState({ name: name, data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)

      handlechangeImage(files[0], name)
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
    str = str?.toLowerCase()

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

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg })
    setCropState({ name: null, data: null, open: false })
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
          value: formState.changes?.name ? stringToSlug(formState.changes.name) : stringToSlug(categorySelected.name)
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
      <HeaderImage
        onClick={() => handleClickImage('header')}
      >
        <ExamineClick
          onFiles={files => handleFiles(files, 'header')}
          childRef={(e) => { headerImageInputRef.current = e }}
          accept='image/png, image/jpeg, image/jpg'
          disabled={formState.loading}
        >
          <DragAndDrop
            onDrop={dataTransfer => handleFiles(dataTransfer.files, 'header')}
            accept='image/png, image/jpeg, image/jpg'
            disabled={formState.loading}
          >
            {formState.loading
              ? (<SkeletonImgWrapper><Skeleton /></SkeletonImgWrapper>)
              : ((!formState.changes?.header || formState.result?.result === 'Network Error' || formState.result.error)
                ? category?.header &&
                  (<img src={category?.header} alt='header image' loading='lazy' />)
                : formState?.changes?.header &&
                  <img src={formState?.changes?.header} alt='header image' loading='lazy' />
              )}
            <UploadImageIconContainer>
              <UploadImageIcon>
                <BiImage />
                <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
              </UploadImageIcon>
            </UploadImageIconContainer>
          </DragAndDrop>
        </ExamineClick>
      </HeaderImage>
      <LogoImage
        onClick={() => handleClickImage('image')}
      >
        <ExamineClick
          onFiles={files => handleFiles(files, 'image')}
          childRef={(e) => { logoImageInputRef.current = e }}
          accept='image/png, image/jpeg, image/jpg'
          disabled={formState.loading}
        >
          <DragAndDrop
            onDrop={dataTransfer => handleFiles(dataTransfer.files, 'image')}
            accept='image/png, image/jpeg, image/jpg'
            disabled={formState.loading}
          >
            {formState.loading
              ? (<SkeletonImgWrapper><Skeleton /></SkeletonImgWrapper>)
              : ((!formState.changes?.image || formState.result?.result === 'Network Error' || formState.result.error)
                ? category?.image &&
                  (<img src={category?.image} alt='logo image' loading='lazy' />)
                : formState?.changes?.image &&
                  <img src={formState?.changes?.image} alt='logo image' loading='lazy' />
              )}
            <UploadImageIconContainer small>
              <UploadImageIcon small>
                <BiImage />
              </UploadImageIcon>
            </UploadImageIconContainer>
          </DragAndDrop>
        </ExamineClick>
      </LogoImage>
      <CategoryNameWrapper>
        <label>{t('CATEGORY_NAME', 'Category name')}</label>
        <Input
          placeholder={t('ENTER_CATEGORY_NAME', 'Enter a category name')}
          name='name'
          value={formState?.changes?.name || ''}
          onChange={handleChangeInput}
          autoComplete='off'
        />
      </CategoryNameWrapper>
      <CategoryNameWrapper>
        <label>{t('DESCRIPTION', 'Description')}</label>
        <TextArea
          placeholder={t('TYPE_DESCRIPTION', 'Type description ')}
          name='description'
          value={formState?.changes?.description || ''}
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
            formState?.changes?.slug || ''
          }
        />
        <GenerateButtonWrapper>
          <Button
            color='lightPrimary'
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
              <span style={{ fontSize: 15 }}>{t('ADD_AS_SUBCATEGORY', 'Add as subcategory')}</span>
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
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('IMAGE_CROP', 'Image crop')}
        open={cropState?.open}
        onClose={() => setCropState({ ...cropState, open: false })}
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </>
  )
}
