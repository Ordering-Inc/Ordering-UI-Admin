import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import { NotFoundSource } from '../../components/NotFoundSource'
import { Modal } from '../Modal'
import { SettingsList } from '../SettingsList'
import { useWindowSize } from '../../hooks/useWindowSize'
import { XLg, LifePreserver } from 'react-bootstrap-icons'
import { IconButton } from '../../styles/Buttons'
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
import { EmailSetting } from '../EmailSetting'

export const SettingsDetail = (props) => {
  const {
    open,
    onClose,
    onBasicSettingsRedirect,
    category,
    isUpdateConfig
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraInfoOpen, setExtraInfoOpen] = useState(false)
  const [extraSubCatOpen, setExtraSubCatOpen] = useState(false)

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
    }
  }

  const onCloseSettingsList = () => {
    setExtraSubCatOpen(false)
    onBasicSettingsRedirect({ category: category.id })
  }

  useEffect(() => {
    if (category && !isUpdateConfig) {
      setExtraInfoOpen(false)
      setExtraSubCatOpen(false)
    }
  }, [category])

  return (
    <Container
      id='catDescription'
    >
      <DescriptionContent>
        <DescriptionHeader>
          <HeaderIcons>
            {category?.support_url && (
              <IconButton onClick={() => handleExtraOpen(true)}>
                <LifePreserver />
              </IconButton>
            )}
            <IconButton
              color='black'
              onClick={handleClose}
            >
              <XLg />
            </IconButton>
          </HeaderIcons>
        </DescriptionHeader>
        {
          !category && (
            <SkeletonWrapper>
              <Skeleton width={100} height={30} />
              <Skeleton height={20} />
              <Skeleton height={50} />
              <Skeleton width={200} height={150} />
              <Skeleton height={20} />
            </SkeletonWrapper>
          )
        }
        {category && Object.keys(category).length > 0 && (
          <Content>
            <CategoryName>
              <p>{category.name}</p>
            </CategoryName>
            <Description>{category?.description}</Description>
            {
              category?.more_info && <MoreInfo>{t('MORE_INFO', 'More info')}</MoreInfo>
            }
            {category?.video && (
              <VideoContainer>
                <MdcPlayCircle onClick={playVideo} />
                <video muted id='categoryVideo' className='w-100 custom-video' playsInline>
                  <source src={category.video} type='video/mp4' />
                  <source src={category.video} type='video/webm' />
                </video>
              </VideoContainer>
            )}
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
              <IconButton
                color='black'
                onClick={() => setExtraInfoOpen(false)}
              >
                <XLg />
              </IconButton>
              <IframeWrapper dangerouslySetInnerHTML={{ __html: `<iframe src=${category.support_url} style="width: 100%; height: 100%;" />` }} />
            </CategoryDescriptionExtraContent>
          ) : (
            <>
              <Modal
                width='70%'
                height='90vh'
                open
                onClose={() => setExtraInfoOpen(false)}
              >
                <IframeWrapper dangerouslySetInnerHTML={{ __html: `<iframe src=${category.support_url} style="width: 100%; height: 100%;" />` }} />
              </Modal>
            </>
          )}
        </>
      )}

      {extraSubCatOpen && (
        <>
          {width >= 1000 ? (
            <CategoryDescriptionExtraContent>
              <IconButton
                color='black'
                onClick={onCloseSettingsList}
              >
                <XLg />
              </IconButton>
              <SubCategoryWrapper>
                {(category?.key === 'email_configs') ? (
                  <EmailSetting
                    {...props}
                    category={category}
                    onCloseSettingsList={onCloseSettingsList}
                  />
                ) : (
                  <SettingsList
                    {...props}
                    category={category}
                    onCloseSettingsList={onCloseSettingsList}
                  />
                )}
              </SubCategoryWrapper>
            </CategoryDescriptionExtraContent>
          ) : (
            <>
              <Modal
                width='70%'
                height='90vh'
                open
                onClose={onCloseSettingsList}
              >
                <SubCategoryWrapper>
                  <SettingsList
                    {...props}
                    category={category}
                    onCloseSettingsList={onCloseSettingsList}
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
