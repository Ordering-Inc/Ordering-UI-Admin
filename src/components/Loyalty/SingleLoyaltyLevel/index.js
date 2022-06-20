import React, { useRef, useState } from 'react'
import { useLanguage, DragAndDrop, ExamineClick, SingleLoyaltyLevel as SingleLoyaltyLevelController } from 'ordering-components-admin'
import { bytesConverter } from '../../../utils'
import Skeleton from 'react-loading-skeleton'
import { Alert, ImageCrop, Modal } from '../../Shared'
import BiImage from '@meronex/icons/bi/BiImage'
import { Input, IconButton } from '../../../styles'
import { Trash, PlusSquare } from 'react-bootstrap-icons'

import {
  Container,
  ImageWrapper,
  LevelNameWrapper,
  LastWrapper,
  PointsWrapper,
  ButtonWrapper
} from './styles'

const SingleLoyaltyLevelUI = (props) => {
  const {
    handleChangeLevel,
    level,
    formState,
    handleUpdateLevel,
    handleUpdateBtnClick,
    handleUpdateDeleteClick,
    isSkeleton
  } = props

  const [, t] = useLanguage()
  const imageRef = useRef(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false, id: null })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleClickImage = () => {
    imageRef.current.click()
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeLevel({ image: croppedImg }, cropState?.id)
    setCropState({ name: null, data: null, open: false, id: null })
  }

  const handleFiles = (files, levelId) => {
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
        setCropState({ name: 'image', data: reader.result, open: true, id: levelId })
        handleChangeLevel({ image: reader.result }, levelId)
      }
      reader.onerror = error => console.log(error)
    }
  }

  return (
    <>
      {isSkeleton ? (
        <Container>
          <ImageWrapper>
            <Skeleton height={40} />
          </ImageWrapper>
          <LevelNameWrapper>
            <Skeleton height={40} />
          </LevelNameWrapper>
          <LastWrapper>
            <Skeleton height={40} />
          </LastWrapper>
          <PointsWrapper>
            <Skeleton height={40} />
          </PointsWrapper>
          <ButtonWrapper>
            <Skeleton width={25} height={25} />
          </ButtonWrapper>
        </Container>
      ) : (
        <Container>
          <ImageWrapper onClick={() => handleClickImage()}>
            <ExamineClick
              onFiles={files => handleFiles(files, level?.id)}
              childRef={(e) => { imageRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files, level?.id)}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                {((formState?.changes?.id === level.id) && formState?.changes?.image)
                  ? <img src={formState?.changes?.image} alt='header image' loading='lazy' />
                  : (level?.image
                    ? <img src={level?.image} alt='header image' loading='lazy' />
                    : <BiImage />
                  )}
              </DragAndDrop>
            </ExamineClick>
          </ImageWrapper>
          <LevelNameWrapper>
            <Input
              value={(formState?.changes?.id === level.id && (typeof formState?.changes?.name !== 'undefined'))
                ? formState?.changes?.name
                : level.name ?? ''}
              name='name'
              autoComplete='off'
              placeholder={t('NAME', 'name')}
              onChange={(e) => handleUpdateLevel(e, level?.id)}
            />
          </LevelNameWrapper>
          <LastWrapper>
            <Input
              value={(formState?.changes?.id === level.id && (typeof formState?.changes?.accumulation_rate !== 'undefined'))
                ? formState?.changes?.accumulation_rate
                : level.accumulation_rate ?? ''}
              placeholder='0 days'
              name='accumulation_rate'
              autoComplete='off'
              onChange={(e) => handleUpdateLevel(e, level?.id)}
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </LastWrapper>
          <PointsWrapper>
            <Input
              value={(formState?.changes?.id === level.id && (typeof formState?.changes?.minimum_points !== 'undefined'))
                ? formState?.changes?.minimum_points
                : level.minimum_points ?? ''}
              placeholder='0 points'
              name='minimum_points'
              autoComplete='off'
              onChange={(e) => handleUpdateLevel(e, level?.id)}
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </PointsWrapper>
          <ButtonWrapper>
            {formState?.changes?.id === level.id ? (
              <IconButton
                color='primary'
                type='button'
                onClick={() => handleUpdateBtnClick()}
              >
                <PlusSquare />
              </IconButton>
            ) : (
              <IconButton
                color='black'
                type='button'
                onClick={() => handleUpdateDeleteClick(level.id)}
              >
                <Trash />
              </IconButton>
            )}
          </ButtonWrapper>
        </Container>
      )}

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
    </>
  )
}

export const SingleLoyaltyLevel = (props) => {
  const singleLoyaltyLevelProps = {
    ...props,
    UIComponent: SingleLoyaltyLevelUI
  }
  return <SingleLoyaltyLevelController {...singleLoyaltyLevelProps} />
}
