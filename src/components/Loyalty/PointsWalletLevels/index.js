import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, PointsWalletLevels as PointsWalletLevelsController } from 'ordering-components-admin'
import { Alert, NotFoundSource, SideBar, Modal } from '../../Shared'
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
  AddNewLevelButton,
  LevelBottomContainer
} from './styles'
import { LoyaltyLevelDetail } from '../LoyaltyLevelDetail'

const PointsWalletLevelsUI = (props) => {
  const {
    levelList,
    handleDeleteLevelList,
    handleUpdateLevelList,
    handleAddLevelList,
    handleParentSidebarMove
  } = props

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

  const handleOpenDetail = (level) => {
    setSelectedLevel(level)
    setExtraOpen(true)
    if (width >= 1100) {
      handleParentSidebarMove(550)
    }
  }

  const handleCloseLevelDetail = () => {
    setExtraOpen(false)
    setSelectedLevel(null)
    handleParentSidebarMove(0)
  }

  useEffect(() => {
    if (width < 1100) {
      handleParentSidebarMove(0)
    } else {
      if (extraOpen) handleParentSidebarMove(550)
    }
  }, [width, extraOpen])

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
            {levelList?.levels?.length > 0 ? levelList?.levels.map((level, i) => (
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
            )) : (
              <NotFoundSource />
            )}
          </>
        )}
      </LevelContainer>
      <LevelBottomContainer>
        <AddNewLevelButton
          onClick={() => handleOpenDetail({})}
        >
          {t('ADD_NEW_LEVEL', 'Add new level')}
        </AddNewLevelButton>
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
