import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { List as MenuIcon, HouseDoor, ViewStacked, Shop, InfoCircle } from 'react-bootstrap-icons'
import { PostionItemUI } from './PostionItemUI'
import { SideBar } from '../../Shared'
import { PageBanners } from '../PageBanner'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  AdBannersListingContainer,
  HeaderContainer,
  BannerPositionsList,
  InfoWrapper,
  InfoContent
} from './styles'

export const AdBannersListing = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [openPositionDetail, setOpenPositionDetail] = useState(null)
  const [moveDistance, setMoveDistance] = useState(0)

  const bannerPositions = [
    {
      key: 'web_home_page',
      title: t('WEB_HOME', 'Web home'),
      description: t('HOME_BANNER_DESCRIPTION', 'Add a banner to your home page and inform everyone about the latest news in your marketplace.'),
      icon: <HouseDoor />,
      info: t('RECOMMENDED_IMAGE_SIZE', 'Recommended size _size_').replace('_size_', '1440 x 300'),
      aspectRatio: 1440 / 300,
      isSearhShow: false
    },
    {
      key: 'web_business_listing',
      title: t('WEB_BUSINESS_LISTING', 'Web business listing'),
      description: t('BUSINESS_LISTING_BANNER_DESCRIPTION', 'Add a banner inside your business listing to let everyone know about your latest promotions inside your businesses listed.'),
      icon: <ViewStacked />,
      info: t('RECOMMENDED_IMAGE_SIZE', 'Recommended size _size_').replace('_size_', '1440 x 300'),
      aspectRatio: 1440 / 300,
      isSearhShow: false
    },
    {
      key: 'web_business_page',
      title: t('WEB_BUSINESS_PAGE', 'Web business page'),
      description: t('BUSINESS_PAGE_BANNER_DESCRIPTION', 'Add a banner inside the business page, and inform news and promotions specifically of the stores customers are ordering from.'),
      icon: <Shop />,
      info: t('RECOMMENDED_IMAGE_SIZE', 'Recommended size _size_').replace('_size_', '1440 x 300'),
      aspectRatio: 1440 / 300,
      isSearhShow: true
    },
    {
      key: 'app_business_listing',
      title: t('APP_BUSINESS_LISTING', 'App business listing'),
      description: t('BUSINESS_LISTING_BANNER_DESCRIPTION', 'Add a banner inside your business listing to let everyone know about your latest promotions inside your businesses listed.'),
      icon: <ViewStacked />,
      info: t('RECOMMENDED_IMAGE_SIZE', 'Recommended size _size_').replace('_size_', '300 x 300'),
      aspectRatio: 300 / 300,
      isSearhShow: false,
      showAspectRatioBox: true
    },
    {
      key: 'app_business_page',
      title: t('APP_BUSINESS_PAGE', 'App business page'),
      description: t('BUSINESS_PAGE_BANNER_DESCRIPTION', 'Add a banner inside the business page, and inform news and promotions specifically of the stores customers are ordering from.'),
      icon: <Shop />,
      info: t('RECOMMENDED_IMAGE_SIZE', 'Recommended size _size_').replace('_size_', '300 x 300'),
      aspectRatio: 300 / 300,
      isSearhShow: true,
      showAspectRatioBox: true
    }
  ]

  const handleSelectBannerPosition = (key, isInitialRender) => {
    const selectedItem = bannerPositions.find(item => item.key === key)
    setOpenPositionDetail(selectedItem)
    if (!isInitialRender) {
      removeQueryToUrl(['banner'])
      addQueryToUrl({ position: key })
    }
  }

  const handleCloseDetails = () => {
    setOpenPositionDetail(null)
    setMoveDistance(0)
    removeQueryToUrl(['position', 'banner'])
  }

  useEffect(() => {
    const position = query.get('position')
    if (position) {
      handleSelectBannerPosition(position, true)
    }
  }, [])

  return (
    <>
      <AdBannersListingContainer>
        <HeaderContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('AD_BANNERS', 'Ad banners')}</h1>
          <InfoWrapper>
            <IconButton
              color='primary'
            >
              <InfoCircle />
            </IconButton>
            <InfoContent>
              {t('AD_BANNERS_INFO', 'Add banners for your homepage, business list and inside of each business. Use the recommended measures provided in each option for a better quality of your images.')}
            </InfoContent>
          </InfoWrapper>
        </HeaderContainer>
        <BannerPositionsList className='row'>
          {bannerPositions.map(item => (
            <div key={item.key} className='col-md-4 col-sm-6'>
              <PostionItemUI
                title={item.title}
                description={item.description}
                icon={item.icon}
                onClick={() => handleSelectBannerPosition(item.key)}
              />
            </div>
          ))}
        </BannerPositionsList>
      </AdBannersListingContainer>

      {openPositionDetail && (
        <SideBar
          open={openPositionDetail}
          onClose={() => handleCloseDetails()}
          defaultSideBarWidth={500 + moveDistance}
          moveDistance={moveDistance}
        >
          <PageBanners
            setMoveDistance={setMoveDistance}
            title={openPositionDetail?.title}
            bannerInfo={openPositionDetail?.info}
            defaultPosition={openPositionDetail?.key}
            aspectRatio={openPositionDetail?.aspectRatio}
            isSearhShow={openPositionDetail?.isSearhShow}
            showAspectRatioBox={openPositionDetail?.showAspectRatioBox}
          />
        </SideBar>
      )}
    </>
  )
}
