import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, PointsWalletLevels as PointsWalletLevelsController } from 'ordering-components-admin'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import { Trash } from 'react-bootstrap-icons'
import { IconButton, Input } from '../../../styles'
import { useForm } from 'react-hook-form'
import { Alert } from '../../Shared'

import {
  Container,
  Title,
  LevelNameWrapper,
  LevelWrapper,
  LastWrapper,
  ButtonWrapper,
  PointsWrapper,
  AddSubOption
} from './styles'
import Skeleton from 'react-loading-skeleton'

const PointsWalletLevelsUI = (props) => {
  const {
    formState,
    editFormState,
    handleUpdateAddClick,
    handleChangeInput,
    levelList,
    handleUpdateDeleteClick,
    handleUpdateLevel,
    handleUpdateBtnClick
  } = props

  const [, t] = useLanguage()

  const { handleSubmit } = useForm()
  const [addSubOption, setAddSubOption] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const containerRef = useRef(null)

  const onSubmit = () => {
    if (Object.keys(formState?.changes).length > 0) {
      handleUpdateAddClick()
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!formState.error) return
    setAlertState({
      open: true,
      content: formState.error
    })
  }, [formState?.error])

  useEffect(() => {
    if (!editFormState.error) return
    setAlertState({
      open: true,
      content: editFormState.error
    })
  }, [editFormState?.error])

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
      <LevelWrapper isTitle>
        <LevelNameWrapper>
          <span>{t('NAME', 'Name')}</span>
        </LevelNameWrapper>
        <LastWrapper>
          <span>{t('IN_THE_LAST', 'In the last')}</span>
        </LastWrapper>
        <PointsWrapper>
          <span>{t('POINTS', 'Points')}</span>
        </PointsWrapper>
        <ButtonWrapper />
      </LevelWrapper>

      {levelList?.loading ? (
        <>
          {[...Array(5).keys()].map(i => (
            <LevelWrapper key={i}>
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
            </LevelWrapper>
          ))}
        </>
      ) : (
        <>
          {levelList?.levels?.map((level, i) => (
            <LevelWrapper key={i}>
              <LevelNameWrapper>
                <Input
                  value={(editFormState?.changes?.id === level.id && (typeof editFormState?.changes?.name !== 'undefined'))
                    ? editFormState?.changes?.name
                    : level.name ?? ''}
                  name='name'
                  autoComplete='off'
                  placeholder={t('NAME', 'name')}
                  onChange={(e) => handleUpdateLevel(e, level?.id)}
                />
              </LevelNameWrapper>
              <LastWrapper>
                <Input
                  value={(editFormState?.changes?.id === level.id && (typeof editFormState?.changes?.accumulation_rate !== 'undefined'))
                    ? editFormState?.changes?.accumulation_rate
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
                  value={(editFormState?.changes?.id === level.id && (typeof editFormState?.changes?.minimum_points !== 'undefined'))
                    ? editFormState?.changes?.minimum_points
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
                {editFormState?.changes?.id === level.id ? (
                  <IconButton
                    color='primary'
                    type='button'
                    onClick={() => handleUpdateBtnClick()}
                  >
                    <BsPlusSquare />
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
            </LevelWrapper>
          ))}
        </>
      )}

      {addSubOption ? (
        <LevelWrapper onSubmit={handleSubmit(onSubmit)} ref={containerRef}>
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
              <BsPlusSquare />
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
      <Alert
        title={t('LEVELS', 'Levels')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
