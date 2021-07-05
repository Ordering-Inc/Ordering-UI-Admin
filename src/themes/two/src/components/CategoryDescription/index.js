import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, CategoryDescription as CategoryDescriptionController } from 'ordering-components-admin'
import { NotFoundSource } from '../../../../../components/NotFoundSource'
import { Modal } from '../Modal'
import { SubCategory } from '../SubCategory'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import BsLifePreserver from '@meronex/icons/bs/BsLifePreserver'
import MdcPlayCircle from '@meronex/icons/mdc/MdcPlayCircle'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'

import {
  Container,
  DescriptionContent,
  DescriptionHeader,
  HeaderIcons,
  Content,
  CategoryName,
  Description,
  VideoContainer,
  AllSetting,
  MoreInfo,
  CategoryDescriptionExtraContent,
  IframeWrapper,
  SubCategoryWrapper,
  SkeletonWrapper
} from './styles'

const CategoryDescriptionUI = (props) => {
  const {
    open,
    onClose,
    configId,
    onBasicSettingsRedirect
  } = props

  const {
    category,
    loading
  } = props.category

  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraInfoOpen, setExtraInfoOpen] = useState(false)
  const [extraSubCatOpen, setExtraSubCatOpen] = useState(false)

  useEffect(() => {
    if (configId) setExtraSubCatOpen(true)
  }, [configId])

  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      props.onClose()
    }
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('catDescription').style.width = '100vw'
      } else {
        if ((extraInfoOpen || extraSubCatOpen) && width >= 1000) {
          document.getElementById('catDescription').style.width = '1000px'
        } else {
          document.getElementById('catDescription').style.width = '500px'
        }
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (width < 1000) return
    if (extraInfoOpen || extraSubCatOpen) {
      document.getElementById('catDescription').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [extraInfoOpen, extraSubCatOpen])

  const handleClose = () => {
    onClose()
    setIsMenuOpen(false)
    const vid = document.getElementById('categoryVideo')
    if (vid) vid.pause()
  }

  const playVideo = () => {
    const vid = document.getElementById('categoryVideo')
    vid.play()
  }

  const handleExtraOpen = (isMoreInfo) => {
    if (isMoreInfo) {
      setExtraInfoOpen(true)
      setExtraSubCatOpen(false)
    } else {
      setExtraInfoOpen(false)
      setExtraSubCatOpen(true)
      onBasicSettingsRedirect({ category: category.id, config: category.id })
    }
  }

  const onCloseSubCat = () => {
    setExtraSubCatOpen(false)
    onBasicSettingsRedirect({ category: category.id, config: null })
  }

  return (
    <Container
      id='catDescription'
    >
      <DescriptionContent>
        <DescriptionHeader>
          <HeaderIcons>
            <BsLifePreserver />
            <MdcClose onClick={handleClose} />
          </HeaderIcons>
        </DescriptionHeader>
        {
          loading && (
            <SkeletonWrapper>
              <Skeleton width={100} height={30} />
              <Skeleton height={20} />
              <Skeleton height={50} />
              <Skeleton width={200} height={150} />
              <Skeleton height={20} />
            </SkeletonWrapper>
          )
        }
        {!loading && category && Object.keys(category).length > 0 && (
          <Content>
            <CategoryName>
              <p>{category.name}</p>
            </CategoryName>
            <Description>{category?.description}</Description>
            {
              category?.support_url && <MoreInfo onClick={() => handleExtraOpen(true)}>{t('MORE_INFO', 'More info')}</MoreInfo>
            }
            <VideoContainer>
              <MdcPlayCircle onClick={playVideo} />
              <video muted id="categoryVideo" className="w-100 custom-video" playsInline>
                <source src={category.video} type="video/mp4" />
                <source src={category.video} type="video/webm" />
              </video>
            </VideoContainer>
            <AllSetting onClick={() => handleExtraOpen(false)}>
              <span>{t('ALL_SETTINGS', 'All settings')}</span>
              <BsArrowRight />
            </AllSetting>
          </Content>
        )}
      </DescriptionContent>
      {extraInfoOpen && category.support_url && (
        <>
          {width >= 1000 ? (
            <CategoryDescriptionExtraContent>
              <Button
                borderRadius='5px'
                color='secundary'
                onClick={() => setExtraInfoOpen(false)}
              >
                <MdcClose />
              </Button>
              <IframeWrapper>
                <iframe src={category.support_url} style={{ width: '100%', height: '100%' }}></iframe>
              </IframeWrapper>
            </CategoryDescriptionExtraContent>
          ) : (
            <>
              <Modal
                width='70%'
                height='90vh'
                open
                onClose={() => setExtraInfoOpen(false)}
              >
                <IframeWrapper>
                  <iframe src={category.support_url} style={{ width: '100%', height: '100%' }}></iframe>
                </IframeWrapper>
              </Modal>
            </>
          )}
        </>
      )}

      {extraSubCatOpen && (
        <>
          {width >= 1000 ? (
            <CategoryDescriptionExtraContent>
              <Button
                borderRadius='5px'
                color='secundary'
                onClick={onCloseSubCat}
              >
                <MdcClose />
              </Button>
              <SubCategoryWrapper>
                <SubCategory
                  categoryId={category?.id}
                  onCloseSubCat={onCloseSubCat}
                  configId={configId}
                />
              </SubCategoryWrapper>
            </CategoryDescriptionExtraContent>
          ) : (
            <>
              <Modal
                width='70%'
                height='90vh'
                open
                onClose={onCloseSubCat}
              >
                <SubCategoryWrapper>
                  <SubCategory
                    categoryId={category?.id}
                    onCloseSubCat={onCloseSubCat}
                    configId={configId}
                  />
                </SubCategoryWrapper>
              </Modal>
            </>
          )}
        </>
      )}

      {extraInfoOpen && !category.support_url && (
        <NotFoundSource
          content={t('NOT_FOUND_SUPPORTURL', 'Sorry, we couldn\'t find the support url.')}
          btnTitle={t('PROFILE_CATEGORY_REDIRECT', 'Go to Category')}
          onClickButton={handleClose}
        />
      )}
    </Container>
  )
}
export const CategoryDescription = (props) => {
  const categoryDescroptionProps = {
    ...props,
    UIComponent: CategoryDescriptionUI
  }

  return (
    <CategoryDescriptionController {...categoryDescroptionProps} />
  )
}
