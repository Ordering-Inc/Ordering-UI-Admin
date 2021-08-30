import React, { useState } from 'react'
import { useLanguage, Home as HomeController } from 'ordering-components-admin'
import { IconButton, Button } from '../../styles/Buttons'
import { useInfoShare } from '../../contexts/InfoShareContext'
import {
  List as MenuIcon,
  DashSquare,
  PlusSquare
} from 'react-bootstrap-icons'
import { HomeReports } from '../HomeReports'
import { HomeSingleTask } from '../HomeSingleTask'
import {
  HomeContainer,
  HeaderContainer,
  WelcomeMsg,
  GuideMsg,
  VideoAndReportsWrapper,
  HideAndShowWrapper,
  VideoOnBoardingWrapper,
  VideoOnBoardingContainer,
  IframeWrapper,
  FirstStoreToSellWrapper,
  FirstStoreToSellContent,
  OrderingHelpButton
} from './styles'

const HomeUI = (props) => {
  const {
    taskList
  } = props
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [isShowVideo, setIsShowVideo] = useState(true)
  const [isShowStore, setIsShowStore] = useState(true)

  return (
    <HomeContainer>
      <HeaderContainer>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{t('HOME', 'Home')}</h1>
      </HeaderContainer>
      <WelcomeMsg>{t('WELCOME_TO_ORDERING', 'Welcome to Ordering')}!</WelcomeMsg>
      <GuideMsg>{t('ORDERING_GUIDE_MSG', 'Our guide helps you to configure your Ordering products.')}</GuideMsg>
      <VideoAndReportsWrapper isRowDirection={isShowVideo}>
        <VideoOnBoardingWrapper>
          <HideAndShowWrapper>
            <span>{t('VIDEO_ONBOARDING', 'Video onboarding')}</span>
            <div onClick={() => setIsShowVideo(!isShowVideo)}>
              {
                isShowVideo ? <DashSquare /> : <PlusSquare />
              }
            </div>
          </HideAndShowWrapper>
          {
            isShowVideo && (
              <VideoOnBoardingContainer>
                <IframeWrapper
                  dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.youtube-nocookie.com/embed/Bi8WLLRzZ1g" frameborder="0" loading="lazy" allowfullscreen />' }}
                />
              </VideoOnBoardingContainer>
            )
          }
        </VideoOnBoardingWrapper>
        <HomeReports
          {...props}
          isShowVideo={isShowVideo}
        />
      </VideoAndReportsWrapper>
      <FirstStoreToSellWrapper>
        <HideAndShowWrapper className='home-store-title'>
          <span>{t('GET_YOUR_FIRST_STORE_READY_TO_SELL', 'Get your first store ready to sell.')}</span>
          <div onClick={() => setIsShowStore(!isShowStore)}>
            {
              isShowStore ? <DashSquare /> : <PlusSquare />
            }
          </div>
        </HideAndShowWrapper>
        {
          isShowStore && (
            <FirstStoreToSellContent>
              {
                taskList?.loading ? (
                  <>
                    {
                      [...Array(5).keys()].map(i => (
                        <HomeSingleTask
                          key={i}
                          isSkeleton
                        />
                      ))
                    }
                  </>
                ) : (
                  <>
                    {
                      taskList?.data?.length > 0 && taskList?.data.map((task, i) => (
                        <HomeSingleTask
                          {...props}
                          key={i}
                          task={task}
                        />
                      ))
                    }
                  </>
                )
              }
              <OrderingHelpButton>
                <p>{t('ORDERING_HELP_CONDITION_LINK', 'If you need anything else from your Ordering Team..')}</p>
                <Button color='lightPrimary' borderRadius='7.6px'>{t('CLICK_HERE', 'Click here')}!</Button>
              </OrderingHelpButton>
            </FirstStoreToSellContent>
          )
        }
      </FirstStoreToSellWrapper>
    </HomeContainer>
  )
}

export const Home = (props) => {
  const homeProps = {
    ...props,
    UIComponent: HomeUI
  }

  return <HomeController {...homeProps} />
}
