import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, DragAndDrop, ExamineClick, PointsWalletLevels as PointsWalletLevelsController } from 'ordering-components-admin'
import { IconButton, Input } from '../../../styles'
import { useForm } from 'react-hook-form'
import { Alert, ImageCrop, Modal } from '../../Shared'
import { bytesConverter } from '../../../utils'
import BiImage from '@meronex/icons/bi/BiImage'
import { PlusSquare } from 'react-bootstrap-icons'

import {
  Container,
  Title,
  LevelNameWrapper,
  LevelWrapper,
  LastWrapper,
  ButtonWrapper,
  PointsWrapper,
  AddSubOption,
  LevelContainer,
  OriginalImageWrapper,
  ImageWrapper
} from './styles'
import { SingleLoyaltyLevel } from '../SingleLoyaltyLevel'

const PointsWalletLevelsUI = (props) => {
  const {
    formState,
    handleUpdateAddClick,
    handleChangeInput,
    levelList,
    handleChangeItem,
    handleDeleteLevelList,
    handleUpdateLevelList
  } = props

  const [, t] = useLanguage()

  const { handleSubmit } = useForm()
  const [addSubOption, setAddSubOption] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const containerRef = useRef(null)
  const imageRef = useRef(null)

  const onSubmit = () => {
    if (Object.keys(formState?.changes).length > 0) {
      handleUpdateAddClick()
    }
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg })
    setCropState({ name: null, data: null, open: false })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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
        handleChangeItem({ image: reader.result })
      }
      reader.onerror = error => console.log(error)
    }
  }

  useEffect(() => {
    if (!formState.error) return
    setAlertState({
      open: true,
      content: formState.error
    })
  }, [formState?.error])

  const closeLevelAddForm = (e) => {
    const outsideDropdown = !containerRef.current?.contains(e.target)
    if (outsideDropdown && Object.keys(formState?.changes).length === 0 && !e.target.closest('.sub-option')) setAddSubOption(false)
  }

  useEffect(() => {
    document.addEventListener('click', closeLevelAddForm)
    return () => document.removeEventListener('click', closeLevelAddForm)
  }, [formState])

  useEffect(() => {
    if (Object.keys(formState?.changes).length === 0) setAddSubOption(false)
  }, [formState?.changes])

  return (
    <Container>
      <Title>{t('LEVELS', 'Levels')}</Title>
      <LevelContainer>
        <LevelWrapper isTitle>
          <OriginalImageWrapper>
            <span>{t('IMAGE', 'Image')}</span>
          </OriginalImageWrapper>
          <LevelNameWrapper>
            <span>{t('NAME', 'Name')}</span>
          </LevelNameWrapper>
          <LastWrapper>
            <span>{t('ACCUMULATION_RATE', 'Accumulation rate')}</span>
          </LastWrapper>
          <PointsWrapper>
            <span>{t('POINTS_REQUIRED', 'Points required')}</span>
          </PointsWrapper>
          <ButtonWrapper />
        </LevelWrapper>

        {levelList?.loading ? (
          <>
            {[...Array(5).keys()].map(i => (
              <SingleLoyaltyLevel key={i} isSkeleton />
            ))}
          </>
        ) : (
          <>
            {levelList?.levels?.map((level, i) => (
              <SingleLoyaltyLevel
                key={i}
                level={level}
                handleDeleteLevelList={handleDeleteLevelList}
                handleUpdateLevelList={handleUpdateLevelList}
              />
            ))}
          </>
        )}

        {addSubOption ? (
          <LevelWrapper onSubmit={handleSubmit(onSubmit)} ref={containerRef}>
            <ImageWrapper onClick={() => handleClickImage()}>
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
                  {formState?.changes?.image
                    ? <img src={formState?.changes?.image} alt='header image' loading='lazy' />
                    : <BiImage />}
                </DragAndDrop>
              </ExamineClick>
            </ImageWrapper>
            <LevelNameWrapper>
              <Input
                name='name'
                autoComplete='off'
                placeholder={t('NAME', 'name')}
                defaultValue={formState?.changes?.name || ''}
                onChange={(e) => handleChangeInput(e)}
              />
            </LevelNameWrapper>
            <LastWrapper>
              <Input
                type='text'
                name='accumulation_rate'
                autoComplete='off'
                defaultValue={formState?.changes?.accumulation_rate || ''}
                onChange={(e) => handleChangeInput(e)}
                placeholder='0 days'
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
              />
            </LastWrapper>
            <PointsWrapper>
              <Input
                type='text'
                name='minimum_points'
                autoComplete='off'
                defaultValue={formState?.changes?.minimum_points || ''}
                onChange={(e) => handleChangeInput(e)}
                placeholder='0 points'
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
              />
            </PointsWrapper>
            <ButtonWrapper>
              <IconButton
                color='primary'
                type='submit'
              >
                <PlusSquare />
              </IconButton>
            </ButtonWrapper>
          </LevelWrapper>
        ) : (
          <AddSubOption
            onClick={() => setAddSubOption(true)}
            className='sub-option'
          >
            {t('ADD_SUBOPTION', 'Add suboption')}
          </AddSubOption>
        )}
      </LevelContainer>
      <Alert
        title={t('LEVELS', 'Levels')}
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
    </Container>
  )
}

export const PointsWalletLevels = (props) => {
  const pointsWalletLevelsProps = {
    ...props,
    UIComponent: PointsWalletLevelsUI
  }
  return <PointsWalletLevelsController {...pointsWalletLevelsProps} />
}
