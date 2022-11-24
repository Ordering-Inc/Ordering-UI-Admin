import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { List as MenuIcon, HouseDoor, ViewStacked, Shop } from 'react-bootstrap-icons'
import { PostionItemUI } from './PostionItemUI'
import { SideBar } from '../../Shared'
import { PageBanners } from '../PageBanner'

import {
  AdBannersListingContainer,
  HeaderContainer,
  BannerPositionsList
} from './styles'

export const AdBannersListing = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [openPositionDetail, setOpenPositionDetail] = useState(null)
  const [moveDistance, setMoveDistance] = useState(0)

  const bannerPositions = [
    {
      key: 'web_home_page',
      title: t('WEB_HOME', 'Web home'),
      description: t('HOME_BANNER_DESCRIPTION', 'Add a banner to your home page and inform everyone about the latest news in your marketplace.'),
      icon: <HouseDoor />
    },
    {
      key: 'web_business_listing',
      title: t('WEB_BUSINESS_LISTING', 'Web business listing'),
      description: t('BUSINESS_LISTING_BANNER_DESCRIPTION', 'Add a banner inside your business listing to let everyone know about your latest promotions inside your businesses listed.'),
      icon: <ViewStacked />
    },
    {
      key: 'web_business_page',
      title: t('WEB_BUSINESS_PAGE', 'Web business page'),
      description: t('BUSINESS_PAGE_BANNER_DESCRIPTION', 'Add a banner inside the business page, and inform news and promotions specifically of the stores customers are ordering from.'),
      icon: <Shop />
    },
    {
      key: 'app_home_page',
      title: t('APP_HOME', 'App home'),
      description: t('HOME_BANNER_DESCRIPTION', 'Add a banner to your home page and inform everyone about the latest news in your marketplace.'),
      icon: <HouseDoor />
    },
    {
      key: 'app_business_listing',
      title: t('APP_BUSINESS_LISTING', 'App business listing'),
      description: t('BUSINESS_LISTING_BANNER_DESCRIPTION', 'Add a banner inside your business listing to let everyone know about your latest promotions inside your businesses listed.'),
      icon: <ViewStacked />
    },
    {
      key: 'app_business_page',
      title: t('APP_BUSINESS_PAGE', 'App business page'),
      description: t('BUSINESS_PAGE_BANNER_DESCRIPTION', 'Add a banner inside the business page, and inform news and promotions specifically of the stores customers are ordering from.'),
      icon: <Shop />
    }
  ]

  const handleSelectBannerPosition = (item) => {
    setOpenPositionDetail(item)
  }

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
        </HeaderContainer>
        <BannerPositionsList className='row'>
          {bannerPositions.map(item => (
            <div key={item.key} className='col-md-4 col-sm-6'>
              <PostionItemUI
                title={item.title}
                description={item.description}
                icon={item.icon}
                onClick={() => handleSelectBannerPosition(item)}
              />
            </div>
          ))}
        </BannerPositionsList>
      </AdBannersListingContainer>

      {openPositionDetail && (
        <SideBar
          open={openPositionDetail}
          onClose={() => {
            setOpenPositionDetail(null)
            setMoveDistance(0)
          }}
          defaultSideBarWidth={500 + moveDistance}
          moveDistance={moveDistance}
        >
          <PageBanners
            setMoveDistance={setMoveDistance}
            title={openPositionDetail?.title}
            defaultPosition={openPositionDetail?.key}
          />
        </SideBar>
      )}
    </>
  )
}
