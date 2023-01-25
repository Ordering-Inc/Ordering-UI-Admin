import React, { useState, useEffect } from 'react'
import { XLg, LifePreserver, ArrowsAngleContract, ArrowsAngleExpand } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useLanguage } from 'ordering-components-admin'
import { IconButton } from '../../../styles'
import { Modal, NotFoundSource } from '../../Shared'
import MdcPlayCircle from '@meronex/icons/mdc/MdcPlayCircle'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import { EmailSetting } from '../EmailSetting'
import { NotificationSetting } from '../NotificationSetting'
import { SettingsList } from '../SettingsList'
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
  CategoryExtraContent,
  IframeWrapper,
  SubCategoryWrapper,
  SkeletonWrapper
} from './styles'

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
  const [isExpand, setIsExpand] = useState(false)

  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      props.onClose()
    }
  }

  const expandSidebar = () => {
    const element = document.getElementById('catDescription')
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
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

  const onCloseSidebar = (e) => {
    if (e.code === 'Escape') {
      props.onClose() && props.onClose()
    }
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

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
              {width > 576 && !extraInfoOpen && !extraSubCatOpen && (
                <IconButton
                  color='black'
                  onClick={expandSidebar}
                >
                  {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
                </IconButton>
              )}
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
              <span>{t('SETTINGS', 'All settings')}</span>
              <BsArrowRight />
            </AllSetting>
          </Content>
        )}
      </DescriptionContent>
      {extraInfoOpen && category.support_url && (
        <>
          {width >= 1000 ? (
            <CategoryExtraContent>
              <IconButton
                color='black'
                onClick={() => setExtraInfoOpen(false)}
              >
                <XLg />
              </IconButton>
              <IframeWrapper dangerouslySetInnerHTML={{ __html: `<iframe src=${category.support_url} style="width: 100%; height: 100%;" />` }} />
            </CategoryExtraContent>
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
            <CategoryExtraContent>
              <IconButton
                color='black'
                onClick={onCloseSettingsList}
              >
                <XLg />
              </IconButton>
              <SubCategoryWrapper>
                {(category?.key === 'email_configs') && (
                  <EmailSetting
                    {...props}
                    category={category}
                    onCloseSettingsList={onCloseSettingsList}
                  />
                )}
                {category?.key === 'notification' && (
                  <NotificationSetting
                    {...props}
                    category={category}
                    onCloseSettingsList={onCloseSettingsList}
                  />
                )}
                {(category?.key !== 'email_configs' && category?.key !== 'notification') && (
                  <SettingsList
                    {...props}
                    category={category}
                    onCloseSettingsList={onCloseSettingsList}
                  />
                )}
              </SubCategoryWrapper>
            </CategoryExtraContent>
          ) : (
            <>
              <Modal
                width='70%'
                height='90vh'
                open
                onClose={onCloseSettingsList}
              >
                <SubCategoryWrapper>
                  {(category?.key === 'email_configs') && (
                    <EmailSetting
                      {...props}
                      category={category}
                      onCloseSettingsList={onCloseSettingsList}
                    />
                  )}
                  {category?.key === 'notification' && (
                    <NotificationSetting
                      {...props}
                      category={category}
                      onCloseSettingsList={onCloseSettingsList}
                    />
                  )}
                  {(category?.key !== 'email_configs' && category?.key !== 'notification') && (
                    <SettingsList
                      {...props}
                      category={category}
                      onCloseSettingsList={onCloseSettingsList}
                    />
                  )}
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
