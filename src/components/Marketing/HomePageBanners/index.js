import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AdBannersList as AdBannersListController } from './naked'
import Skeleton from 'react-loading-skeleton'
import { SideBar } from '../../Shared'
import { Button, Switch } from '../../../styles'
import { ChevronRight } from 'react-bootstrap-icons'
import { BannerItemsDetails } from '../BannerItemsDetails'
import {
  Container,
  HeaderContainer,
  BannersHeader,
  BannersListWrapper,
  BannerItemWrapper,
  BannerTitleConatiner,
  BannerActionsWrapper,
  EnableWrapper
} from './styles'

const HomePageBannersUI = (props) => {
  const {
    bannersListState,
    setMoveDistance
  } = props
  const [, t] = useLanguage()
  const [openItemsDetail, setOpenItemsDetail] = useState(false)
  const [selectedBanner, setSelectedBanner] = useState(null)

  const handleOpenBannerItemsDetail = (banner) => {
    setSelectedBanner(banner)
    setOpenItemsDetail(true)
    setMoveDistance(500)
  }

  const handleCloseDetail = () => {
    setMoveDistance(0)
    setOpenItemsDetail(false)
    setSelectedBanner(null)
  }

  return (
    <>
      <Container>
        <HeaderContainer>
          <h1>{t('HOME', 'Home')}</h1>
          <Button
            color='lightPrimary'
            borderRadius='8px'
          >
            {t('ADD_BANNER_IMAGE', 'Add banner image')}
          </Button>
        </HeaderContainer>
        <BannersHeader>
          {t('BANNERS', 'Banners')}
        </BannersHeader>
        <BannersListWrapper>
          {bannersListState.loading ? (
            [...Array(10).keys()].map(i => (
              <BannerItemWrapper key={i}>
                <BannerTitleConatiner>
                  <Skeleton width={100} />
                </BannerTitleConatiner>
                <BannerActionsWrapper>
                  <EnableWrapper>
                    <Skeleton width={100} />
                  </EnableWrapper>
                  <Skeleton width={20} />
                </BannerActionsWrapper>
              </BannerItemWrapper>
            ))
          ) : (
            bannersListState.banners.map(banner => (
              <BannerItemWrapper
                key={banner.id}
                onClick={() => handleOpenBannerItemsDetail(banner)}
              >
                <BannerTitleConatiner>
                  {banner?.name}
                </BannerTitleConatiner>
                <BannerActionsWrapper>
                  <EnableWrapper>
                    <span>{t('ENABLE', 'Enable')}</span>
                    <Switch
                      defaultChecked={banner.enabled}
                    />
                  </EnableWrapper>
                  <ChevronRight />
                </BannerActionsWrapper>
              </BannerItemWrapper>
            ))
          )}
        </BannersListWrapper>
      </Container>

      {openItemsDetail && (
        <SideBar
          isBorderShow
          open={openItemsDetail}
          onClose={() => handleCloseDetail()}
        >
          <BannerItemsDetails
            banner={selectedBanner}
          />
        </SideBar>
      )}
    </>
  )
}

export const HomePageBanners = (props) => {
  const bannersProps = {
    ...props,
    defaultPosition: 'home_page',
    UIComponent: HomePageBannersUI
  }
  return <AdBannersListController {...bannersProps} />
}
