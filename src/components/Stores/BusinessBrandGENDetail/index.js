import React, { useState, useRef, useEffect } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  BusinessBrandGENDetail as BusinessBrandGENDetailContorller
} from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Alert, Modal, ImageCrop, ColorPicker } from '../../Shared'
import { bytesConverter, shape } from '../../../utils'
import FiCamera from '@meronex/icons/fi/FiCamera'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import { Button, Switch } from '../../../styles'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import {
  BrandGeneralDetail,
  BrandLogo,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CameraIconContainer,
  FormControl,
  Label,
  SaveBtnWrapper,
  SwitchWrapper,
  ColorShapeWrapper,
  ColorWrapper,
  ShapeWrapper,
  ShapeContentWrapper,
  ShapeBoxWrapper
} from './styles'

const BusinessBrandGENDetailUI = (props) => {
  const {
    brandFormState,
    brand,
    // handlechangeImage,
    handleChangeInput,
    handleUpdateClick,
    handleChangeItem,
    handleChangeRibbon
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const brandImageInputRef = useRef(null)

  const handleClickImage = () => {
    brandImageInputRef.current.click()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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

      // handlechangeImage(files[0], name)
    }
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg })
    setCropState({ name: null, data: null, open: false })
  }

  const handleSubmit = () => {
    if ((typeof (brandFormState?.changes?.ribbon?.enabled) !== 'undefined'
      ? brandFormState?.changes?.ribbon?.enabled
      : brand?.ribbon?.enabled) &&
      brandFormState?.changes?.ribbon?.text === ''
    ) {
      setAlertState({
        open: true,
        content: t(
          'VALIDATION_ERROR_REQUIRED',
          'The Ribbon text field is required'
        ).replace('_attribute_', t('Ribbon_Text', 'Ribbon text'))
      })
      return
    }
    handleUpdateClick && handleUpdateClick()
  }

  useEffect(() => {
    if (brandFormState?.result?.error) {
      setAlertState({
        open: true,
        content: brandFormState?.result?.result
      })
    }
  }, [brandFormState?.result])

  return (
    <>
      <BrandGeneralDetail>
        <BrandLogo
          onClick={() => handleClickImage()}
        >
          <ExamineClick
            onFiles={files => handleFiles(files, 'logo')}
            childRef={(e) => { brandImageInputRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={brandFormState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleFiles(dataTransfer.files, 'logo')}
              accept='image/png, image/jpeg, image/jpg'
              disabled={brandFormState.loading}
            >
              {brandFormState.loading
                ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                : ((!brandFormState.changes?.logo || brandFormState.result?.result === 'Network Error' || brandFormState.result?.error)
                  ? brand?.logo &&
                    (<img src={brand?.logo} alt='business brand logo' loading='lazy' />)
                  : brandFormState?.changes?.logo &&
                    <img src={brandFormState?.changes?.logo} alt='business brand logo' loading='lazy' />
                )}
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BsCardImage />
                  <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                </UploadImageIcon>
              </UploadImageIconContainer>
              <CameraIconContainer>
                <FiCamera />
              </CameraIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </BrandLogo>
        {brand && (
          <FormControl>
            <Label>{t('ID', 'ID')}</Label>
            <input
              value={brand?.id}
              disabled
            />
          </FormControl>
        )}
        <FormControl>
          <Label>{t('NAME', 'Name')}</Label>
          <input
            name='name'
            placeholder={t('WRITE_A_NAME', 'Write a name')}
            value={brandFormState?.changes?.name ?? brand?.name ?? ''}
            onChange={handleChangeInput}
            disabled={brandFormState.loading}
            autoComplete='off'
          />
        </FormControl>
        <FormControl>
          <Label>{t('SLUG', 'Slug')}</Label>
          <input
            name='slug'
            placeholder={t('WRITE_A_SLUG', 'Write a slug')}
            value={brandFormState?.changes?.slug ?? brand?.slug ?? ''}
            onChange={handleChangeInput}
            disabled={brandFormState.loading}
            autoComplete='off'
          />
        </FormControl>
        <SwitchWrapper>
          <span>{t('RIBBON', 'Ribbon')}</span>
          <Switch
            defaultChecked={brand?.ribbon?.enabled || false}
            onChange={val => handleChangeRibbon({ enabled: val })}
          />
        </SwitchWrapper>
        {
          (typeof (brandFormState?.changes?.ribbon?.enabled) !== 'undefined' ? brandFormState?.changes?.ribbon?.enabled : brand?.ribbon?.enabled) && (
            <>
              <FormControl>
                <label>{t('TEXT', 'Text')}</label>
                <input
                  name='text'
                  placeholder={t('TEXT', 'Text')}
                  value={brandFormState?.changes?.ribbon?.text ?? brand?.ribbon?.text}
                  onChange={(e) => handleChangeRibbon({ text: e.target.value })}
                  disabled={brandFormState.loading}
                  autoComplete='off'
                />
              </FormControl>
              <ColorShapeWrapper>
                <ColorWrapper>
                  <label>{t('COLOR', 'Color')}</label>
                  <ColorPicker
                    defaultColor={brandFormState?.changes?.ribbon?.color ?? brand?.ribbon?.color}
                    onChangeColor={(color) => handleChangeRibbon({ color })}
                  />
                </ColorWrapper>
                <ShapeWrapper>
                  <label>{t('SHAPE', 'Shape')}</label>
                  <ShapeContentWrapper>
                    {shape && Object.keys(shape).map((key, i) => (
                      <ShapeBoxWrapper
                        key={i}
                        shapeRect={shape[key] === shape?.rectangleRound}
                        round={shape[key] === shape?.capsuleShape}
                        active={brandFormState?.changes?.ribbon?.shape
                          ? (brandFormState?.changes?.ribbon?.shape === shape[key])
                          : (brand?.ribbon?.shape === shape[key])}
                        onClick={() => handleChangeRibbon({ shape: shape[key] })}
                      >
                        <div />
                        {(brandFormState?.changes?.ribbon?.shape
                          ? (brandFormState?.changes?.ribbon?.shape === shape[key])
                          : (brand?.ribbon?.shape === shape[key]))
                          ? <RecordCircleFill />
                          : <Circle />}
                      </ShapeBoxWrapper>
                    ))}
                  </ShapeContentWrapper>
                </ShapeWrapper>
              </ColorShapeWrapper>
            </>
          )
        }

        <SaveBtnWrapper>
          <Button
            borderRadius='7.6px'
            color='primary'
            disabled={brandFormState.loading}
            onClick={handleSubmit}
          >
            {t('SAVE', 'Save')}
          </Button>
        </SaveBtnWrapper>
      </BrandGeneralDetail>
      <Alert
        title={t('BUSINESS_BRAND', 'Business Brand')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
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

export const BusinessBrandGENDetail = (props) => {
  const businessBrandGENDetailProps = {
    ...props,
    UIComponent: BusinessBrandGENDetailUI
  }
  return <BusinessBrandGENDetailContorller {...businessBrandGENDetailProps} />
}
