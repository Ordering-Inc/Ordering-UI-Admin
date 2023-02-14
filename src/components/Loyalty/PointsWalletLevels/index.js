import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useLanguage, useUtils, PointsWalletLevels as PointsWalletLevelsController } from 'ordering-components-admin'
import { Alert, SideBar, Modal } from '../../Shared'
import { ChevronRight } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  Container,
  Title,
  LevelContainer,
  LevelItemContainer,
  InfoWrapper,
  WrapperImage,
  LevelName,
  Image,
  LevelBottomContainer
} from './styles'
import { LoyaltyLevelDetail } from '../LoyaltyLevelDetail'
import { Button } from '../../../styles'

const PointsWalletLevelsUI = (props) => {
  const {
    levelList,
    handleDeleteLevelList,
    handleUpdateLevelList,
    handleAddLevelList,
    handleParentSidebarMove
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()
  const { width } = useWindowSize()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [extraOpen, setExtraOpen] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState(null)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleOpenDetail = (level, isInitialRender) => {
    setSelectedLevel(level)
    setExtraOpen(true)
    if (width >= 1100) {
      handleParentSidebarMove(550)
    }
    if (level && !isInitialRender) {
      const id = query.get('id')
      history.replace(`${location.pathname}?id=${id}&level=${level.id}`)
    }
  }

  const handleCloseLevelDetail = () => {
    setExtraOpen(false)
    setSelectedLevel(null)
    handleParentSidebarMove(0)
    const id = query.get('id')
    history.replace(`${location.pathname}?id=${id}`)
  }

  useEffect(() => {
    if (width < 1100) {
      handleParentSidebarMove(0)
    } else {
      if (extraOpen) handleParentSidebarMove(550)
    }
  }, [width, extraOpen])

  useEffect(() => {
    if (levelList.loading) return
    const levelId = query.get('level')
    if (levelId) {
      const initLevel = levelList?.levels.find(level => level.id === Number(levelId))
      if (initLevel) {
        handleOpenDetail(initLevel, true)
      }
    }
  }, [levelList.loading])

  return (
    <Container>
      <Title>{t('LEVELS', 'Levels')}</Title>
      <LevelContainer>
        {levelList?.loading ? (
          <>
            {
              [...Array(5).keys()].map(i => (
                <LevelItemContainer key={i}>
                  <InfoWrapper>
                    <WrapperImage>
                      <Skeleton className='d-flex h-100' />
                    </WrapperImage>
                    <LevelName>
                      <Skeleton width={100} />
                    </LevelName>
                  </InfoWrapper>
                  <Skeleton width={16} height={16} />
                </LevelItemContainer>
              ))
            }
          </>
        ) : (
          <>
            {levelList?.levels?.length > 0 && levelList?.levels.map((level, i) => (
              <LevelItemContainer
                key={i}
                onClick={() => handleOpenDetail(level)}
                active={level?.id === selectedLevel?.id}
              >
                <InfoWrapper>
                  <WrapperImage>
                    <Image bgimage={optimizeImage(level?.image || theme.images?.dummies?.businessLogo)} />
                  </WrapperImage>
                  <LevelName>{level?.name}</LevelName>
                </InfoWrapper>
                <ChevronRight />
              </LevelItemContainer>
            ))}
          </>
        )}
      </LevelContainer>
      <LevelBottomContainer>
        <Button
          color='primary'
          borderRadius='8px'
          onClick={() => handleOpenDetail({})}
        >
          {t('ADD_NEW_LEVEL', 'Add new level')}
        </Button>
      </LevelBottomContainer>
      {extraOpen && (
        <>
          {width >= 1100 ? (
            <SideBar
              isBorderShow
              open={extraOpen}
              defaultSideBarWidth={550}
              sidebarId='loyaltyLevel'
              onClose={handleCloseLevelDetail}
            >
              <LoyaltyLevelDetail
                level={selectedLevel}
                handleDeleteLevelList={handleDeleteLevelList}
                handleUpdateLevelList={handleUpdateLevelList}
                handleAddLevelList={handleAddLevelList}
                setSelectedLevel={setSelectedLevel}
                onClose={handleCloseLevelDetail}
              />
            </SideBar>
          ) : (
            <Modal
              width='70%'
              height='90vh'
              padding='0px'
              open={extraOpen}
              onClose={handleCloseLevelDetail}
            >
              <LoyaltyLevelDetail
                level={selectedLevel}
                handleDeleteLevelList={handleDeleteLevelList}
                handleUpdateLevelList={handleUpdateLevelList}
                handleAddLevelList={handleAddLevelList}
                setSelectedLevel={setSelectedLevel}
                onClose={handleCloseLevelDetail}
              />
            </Modal>
          )}
        </>
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
