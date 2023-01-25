import React, { useState, useRef, useEffect } from 'react'
import {
  useLanguage,
  ExamineClick,
  DragAndDrop,
  useUtils,
  BannerImageDetails as BannerImageDetailsController
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { CardImage, ThreeDots } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Select } from '../../../styles/Select/FirstSelect'
import { BusinessLink } from './BusinessLink'
import { ProductLink } from './ProductLink'
import { bytesConverter } from '../../../utils'
import { Alert, Modal, ImageCrop, Confirm } from '../../Shared'
import { Button } from '../../../styles'

import {
  Container,
  HeaderContainer,
  LeftHeader,
  RightHeader,
  DropDownWrapper,
  BannerImage,
  UploadImageIconContainer,
  FormController,
  SelectWrapper
} from './styles'

const BannerImageDetailsUI = (props) => {
  const {
    aspectRatio,
    imageState,
    changesState,
    handleChangeItem,
    selectedLinkType,
    setSelectedLinkType,
    handleDeleteBannerItem,
    handleSaveImage,
    businessList
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const linkOptions = [
    { value: 'product', content: t('PRODUCT_ID', 'Product') },
    { value: 'business', content: t('BUSINESS', 'Business') }
  ]

  const imageRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

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
        setCropState({ name: 'image', data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)

      if (imageRef.current?.value) imageRef.current.value = null
    }
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg, type: 'image' })
    setCropState({ name: null, data: null, open: false })
  }

  const onDeleteImage = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('IMAGE', 'Image')),
      handleOnAccept: async () => {
        setConfirm({ ...confirm, open: false })
        await handleDeleteBannerItem(imageState.image?.id)
        props.onClose && props.onClose()
      }
    })
  }

  useEffect(() => {
    if (!imageState?.error || imageState.loading) return
    setAlertState({
      open: true,
      content: imageState?.error
    })
  }, [imageState.error])

  return (
    <Container>
      <HeaderContainer>
        <LeftHeader>
          <h1>{t('IMAGE_DETAIL', 'Image detail')}</h1>
        </LeftHeader>
        <RightHeader>
          <DropDownWrapper>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item
                onClick={() => onDeleteImage()}
              >
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </DropDownWrapper>
        </RightHeader>
      </HeaderContainer>
      <BannerImage
        isWebBanner={aspectRatio !== 1}
        onClick={e => handleClickImage()}
      >
        <ExamineClick
          onFiles={files => handleFiles(files)}
          accept='image/png, image/jpeg, image/jpg'
          childRef={(e) => { imageRef.current = e }}
          disabled={changesState.loading}
        >
          <DragAndDrop
            onDrop={dataTransfer => handleFiles(dataTransfer.files)}
            accept='image/png, image/jpeg, image/jpg'
            disabled={changesState.loading}
          >
            {
              changesState?.changes?.image
                ? (<img src={changesState?.changes?.image} alt='item image' loading='lazy' />)
                : imageState.image?.url && (<img src={optimizeImage(imageState.image?.url, 'h_130,c_limit')} alt='item image' loading='lazy' />)
            }
            <UploadImageIconContainer>
              <CardImage />
              <p>{t('DRAG_AND_DROP', 'Drag and drop')}</p>
            </UploadImageIconContainer>
          </DragAndDrop>
        </ExamineClick>
      </BannerImage>
      <FormController>
        <label>{t('HOW_TO_LINK_IMAGE', 'How to link image')}</label>
        <SelectWrapper>
          <Select
            placeholder={t('SELECT_OPTION', 'Select option')}
            defaultValue={selectedLinkType}
            options={linkOptions}
            onChange={val => setSelectedLinkType(val)}
          />
        </SelectWrapper>
      </FormController>
      {selectedLinkType === 'business' && (
        <BusinessLink {...props} />
      )}
      {selectedLinkType === 'product' && (
        <ProductLink {...props} />
      )}

      <Button
        borderRadius='8px'
        color='primary'
        disabled={businessList.loading || imageState.loading}
        onClick={handleSaveImage}
      >
        {t('SAVE', 'Save')}
      </Button>

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
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
        onRemove={() => setCropState({ ...cropState, open: false })}
        className='ordering-img-crop'
      >
        <ImageCrop
          aspectRatio={aspectRatio}
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </Container>
  )
}

export const BannerImageDetails = (props) => {
  const linkProps = {
    ...props,
    UIComponent: BannerImageDetailsUI
  }
  return <BannerImageDetailsController {...linkProps} />
}
