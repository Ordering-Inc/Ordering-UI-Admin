import React, { useState, useEffect, useRef } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import { RecordCircleFill, Circle, ThreeDots, Image as ImageIcon } from 'react-bootstrap-icons'
import { useLanguage, DragAndDrop, ExamineClick, useUtils, LoyaltyLevelDetail as LoyaltyLevelDetailController } from 'ordering-components-admin'
import { Confirm, Alert, ImageCrop, Modal } from '../../Shared'
import { Input, Button } from '../../../styles'
import { bytesConverter } from '../../../utils'

import {
  Container,
  DetailsHeader,
  LeftHeader,
  RightHeader,
  LevelName,
  ActionSelectorWrapper,
  Content,
  FormController,
  ExPirationWrapper,
  CheckBoxWrapper,
  OptionInputWrapper,
  ButtonWrapper,
  LoyaltyImage,
  UploadImageIconContainer,
  UploadImageIcon
} from './styles'

const LoyaltyLevelDetailUI = (props) => {
  const {
    level,
    handleDeleteLevel,
    formState,
    handleChangeInput,
    handleChangeItem,
    addLevel,
    updateLevel,
    handlechangeImage
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const { handleSubmit } = useForm()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [expiration, setExpiration] = useState(null)
  const [maxValue, setMaxValue] = useState('')
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const imageRef = useRef()

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onClickDeleteLevel = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('LEVEL', 'Level')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteLevel()
      }
    })
  }

  const handleChangeMaxValue = (e) => {
    const value = e.target.value
    setMaxValue(value)
    if (value) handleChangeItem({ expire_after_minutes: (value * 24 * 60) })
    else handleChangeItem({ expire_after_minutes: null })
  }

  const handleChangeExpirtation = (index) => {
    if (index) {
      setExpiration(index)
      return
    }
    setExpiration(null)
    handleChangeItem({ expire_after_minutes: null })
    setMaxValue('')
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem(cropState?.name, croppedImg)
    setCropState({ name: null, data: null, open: false })
  }

  const onSubmit = () => {
    if (formState?.changes?.name === '') {
      setAlertState({
        open: true,
        content: t(
          'VALIDATION_ERROR_REQUIRED',
          'Value is required'
        ).replace('_attribute_', 'name')
      })
      return
    }
    if (formState?.changes?.accumulation_rate === '') {
      setAlertState({
        open: true,
        content: t(
          'VALIDATION_ERROR_REQUIRED',
          'Value is required'
        ).replace('_attribute_', 'accumulation_rate')
      })
      return
    }
    if (formState?.changes?.minimum_points === '') {
      setAlertState({
        open: true,
        content: t(
          'VALIDATION_ERROR_REQUIRED',
          'Value is required'
        ).replace('_attribute_', 'points_required')
      })
      return
    }
    if (level?.id) updateLevel()
    else addLevel()
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
        setCropState({ name: 'image', data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)

      handlechangeImage(files[0])
    }
  }

  useEffect(() => {
    if (!formState.error) return
    setAlertState({
      open: true,
      content: formState.error
    })
  }, [formState?.error])

  useEffect(() => {
    if (level?.expire_after_minutes) {
      setMaxValue(level?.expire_after_minutes / (24 * 60))
      setExpiration('days')
    } else {
      setExpiration(null)
      setMaxValue('')
    }
  }, [level?.expire_after_minutes])

  return (
    <>
      <Container>
        <DetailsHeader>
          <LeftHeader>
            <LevelName>{level?.id ? (formState?.changes?.name ?? level?.name) : t('NEW_LEVEL', 'New level')}</LevelName>
          </LeftHeader>
          {level?.id && (
            <RightHeader>
              <ActionSelectorWrapper>
                <DropdownButton
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  <Dropdown.Item onClick={onClickDeleteLevel}>
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </ActionSelectorWrapper>
            </RightHeader>
          )}
        </DetailsHeader>
        <Content onSubmit={handleSubmit(onSubmit)}>
          <LoyaltyImage
            onClick={() => handleClickImage()}
          >
            <ExamineClick
              onFiles={files => handleFiles(files)}
              childRef={(e) => { imageRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                {
                  (!formState.changes?.image || formState.error)
                    ? level?.image && (<img src={optimizeImage(level?.image, 'h_200,c_limit')} alt='tag image' loading='lazy' />)
                    : formState?.changes?.image && (<img src={formState?.changes?.image} alt='tag image' loading='lazy' />)
                }
                <UploadImageIconContainer>
                  <UploadImageIcon>
                    <ImageIcon />
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </LoyaltyImage>
          <FormController>
            <label>{t('NAME', 'Name')}</label>
            <Input
              name='name'
              placeholder={t('Name', 'name')}
              value={formState?.changes?.name ?? level?.name ?? ''}
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
            />
          </FormController>
          <FormController>
            <label>{t('ACCUMULATION_RATE', 'Accumulation rate')}</label>
            <Input
              name='accumulation_rate'
              placeholder={t('ACCUMULATION_RATE', 'Accumulation rate')}
              value={formState?.changes?.accumulation_rate ?? level?.accumulation_rate ?? ''}
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
              onKeyPress={(e) => {
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </FormController>
          <FormController>
            <label>{t('POINTS_REQUIRED', 'Points required')}</label>
            <Input
              name='minimum_points'
              placeholder={t('POINTS_REQUIRED', 'Points required')}
              value={formState?.changes?.minimum_points ?? level?.minimum_points ?? ''}
              onChange={handleChangeInput}
              disabled={formState.loading}
              autoComplete='off'
              onKeyPress={(e) => {
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </FormController>
          <FormController>
            <label>{t('MAXIMUM_OF_POINTS', 'Maximum of points')}</label>
            <Input
              name='maximum_accumulation_fixed'
              placeholder={t('MAXIMUM_OF_POINTS', 'Maximum of points')}
              value={formState?.changes?.maximum_accumulation_fixed ?? level?.maximum_accumulation_fixed ?? ''}
              onChange={handleChangeInput}
              disabled={formState.loading}
              onKeyPress={(e) => {
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
              autoComplete='off'
            />
          </FormController>
          <ExPirationWrapper>
            <h2>{t('EXPIRATION', 'Expiration')}</h2>
            <CheckBoxWrapper onClick={() => handleChangeExpirtation(null)}>
              {!expiration ? <RecordCircleFill className='active' /> : <Circle />}
              <p>{t('NO', 'No')}</p>
            </CheckBoxWrapper>
            <CheckBoxWrapper onClick={() => handleChangeExpirtation('days')}>
              {expiration ? <RecordCircleFill className='active' /> : <Circle />}
              <p>{t('EXPIRATION_IN_DAYS', 'Expiration in days')}</p>
            </CheckBoxWrapper>
            {expiration && (
              <OptionInputWrapper>
                <Input
                  type='text'
                  placeholder={`0 ${t('DAYS', 'days')}`}
                  name='expire_after_minutes'
                  value={maxValue}
                  onChange={handleChangeMaxValue}
                  onKeyPress={(e) => {
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              </OptionInputWrapper>
            )}
          </ExPirationWrapper>
          <ButtonWrapper>
            <Button
              color='primary'
              type='submit'
              disabled={Object.keys(formState?.changes).length === 0}
            >
              {level?.id ? ('SAVE', 'Save') : ('ADD', 'Add')}
            </Button>
          </ButtonWrapper>
        </Content>
      </Container>
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
      <Alert
        title={t('LEVEL', 'Level')}
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
        onRemove={() => setCropState({ ...cropState, open: false })}
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </>
  )
}

export const LoyaltyLevelDetail = (props) => {
  const loyaltyLevelDetailProps = {
    ...props,
    UIComponent: LoyaltyLevelDetailUI
  }
  return <LoyaltyLevelDetailController {...loyaltyLevelDetailProps} />
}
