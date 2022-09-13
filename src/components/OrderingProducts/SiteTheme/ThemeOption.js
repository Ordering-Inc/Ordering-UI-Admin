import React, { useState, useRef } from 'react'
import { useLanguage, DragAndDrop, ExamineClick, useToast, ToastType } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { ColorPicker, Alert, ImageCrop, Modal } from '../../Shared'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import { bytesConverter } from '../../../utils'
import { SecondSelect as Select, Checkbox, Input } from '../../../styles'

import {
  OptionContainer,
  OptionHeader,
  Option,
  ColorPickerContainer,
  ComponentImage,
  UploadImageIconContainer,
  UploadImageIcon
} from './styles'

export const ThemeOption = (props) => {
  const {
    name,
    optionObject,
    valueObject,
    path,
    themeValues,
    setThemeValues,
    handleAddThemeGallery
  } = props

  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const imageRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [imageUploadState, setImageUploadState] = useState({ loading: false, image: null })

  const getOptions = (options) => {
    return options.map(option => {
      return {
        value: option,
        content: <Option>{typeof option === 'string' ? t(option.toUpperCase(), option.replace(/_/g, ' ')) : option}</Option>
      }
    })
  }

  const getTitle = (key) => {
    return t(key.toUpperCase, key.replace(/_/g, ' '))
  }

  const validHexColor = (colorCode) => {
    const RegExp6 = /^#[0-9A-F]{6}$/i
    const RegExp3 = /^#[0-9A-F]{3}$/i
    return RegExp6.test(colorCode) || RegExp3.test(colorCode)
  }

  const updateObject = (object, newValue, path) => {
    const stack = path.split('.')
    while (stack.length > 1) {
      object = object[stack.shift()]
    }
    object[stack.shift()] = newValue
  }

  const handleChangeValue = (value) => {
    const _themeValues = { ...themeValues }
    updateObject(_themeValues, value, path)
    setThemeValues(_themeValues)
  }

  const handleClickImage = () => {
    imageRef.current.click()
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
      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        setCropState({ name: 'photo', data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)
    }
  }

  const handleChangePhoto = async (croppedImg) => {
    try {
      setImageUploadState({
        ...imageUploadState,
        loading: true
      })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setCropState({ name: null, data: null, open: false })
      const { error, result } = await handleAddThemeGallery(croppedImg)
      if (!error) {
        showToast(ToastType.Success, t('IMAGE_SAVED', 'Image saved'))
        handleChangeValue(result?.image)
      } else {
        setAlertState({
          open: true,
          content: result
        })
      }
      setImageUploadState({
        loading: false,
        image: error ? null : result?.image
      })
    } catch (error) {
      setImageUploadState({
        ...imageUploadState,
        loading: false
      })
      setAlertState({
        open: true,
        content: [error.message]
      })
    }
  }

  return (
    <OptionContainer>
      <OptionHeader>
        {optionObject?.value_type === 'boolean' && (
          <Checkbox
            defaultChecked={valueObject}
            onChange={e => handleChangeValue(e.target.checked)}
          />
        )}
        <h5>{getTitle(name)}</h5>
      </OptionHeader>
      {(optionObject?.value_type === 'integer' && !optionObject?.options) && (
        <Input
          defaultValue={valueObject}
          onChange={e => handleChangeValue(e.target.value)}
        />
      )}
      {(optionObject?.value_type === 'string' && validHexColor(valueObject)) && (
        <ColorPickerContainer>
          <ColorPicker
            defaultColor={valueObject}
            onChangeColor={color => handleChangeValue(color)}
          />
        </ColorPickerContainer>
      )}
      {optionObject?.options && (
        <Select
          placeholder={<Option isPlaceholder>{t('SELECT_ITEM', 'Select a _attribute_').replace('_attribute_', getTitle(name))}</Option>}
          defaultValue={valueObject}
          options={getOptions(optionObject?.options)}
          onChange={value => handleChangeValue(value)}
        />
      )}
      {(name === 'image' || name === 'dummy_image') && optionObject?.value_type === 'string' && (
        <ComponentImage
          isThemeOption
          onClick={() => handleClickImage()}
        >
          <ExamineClick
            onFiles={files => handleFiles(files)}
            childRef={(e) => { imageRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={imageUploadState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files)}
              accept='image/png, image/jpeg, image/jpg'
              disabled={imageUploadState.loading}
            >
              {imageUploadState.loading && (
                <Skeleton width={160} height={160} />
              )}
              {!imageUploadState.loading && (imageUploadState.image || valueObject) && (
                <img src={imageUploadState.image || valueObject} alt='image' loading='lazy' />
              )}
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BsCardImage />
                  <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </ComponentImage>
      )}
      {typeof optionObject !== 'string' && Object.keys(optionObject).filter(subOption => subOption !== 'value_type' && subOption !== 'options').map(subOption => (
        <React.Fragment key={subOption}>
          {subOption !== 'components' && (
            <ThemeOption
              name={subOption}
              optionObject={optionObject[subOption]}
              valueObject={valueObject[subOption]}
              path={path + '.' + subOption}
              themeValues={themeValues}
              setThemeValues={setThemeValues}
              handleAddThemeGallery={handleAddThemeGallery}
            />
          )}
        </React.Fragment>
      ))}
      <Alert
        title={t('ORDERING_PRODUCTS', 'Ordering products')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
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
    </OptionContainer>
  )
}
