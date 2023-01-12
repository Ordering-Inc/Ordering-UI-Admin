import React, { useState, useEffect } from 'react'
import { useLanguage, AdBannersList as AdBannersListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { SideBar, Alert, SearchBar } from '../../Shared'
import { Button, Switch, IconButton } from '../../../styles'
import { ChevronRight, InfoCircle } from 'react-bootstrap-icons'
import { BannerDetails } from '../BannerDetails'
import {
  Container,
  HeaderContainer,
  BannersHeader,
  BannersListWrapper,
  BannerItemWrapper,
  BannerTitleConatiner,
  BannerActionsWrapper,
  EnableWrapper,
  AddNewBanner,
  InfoWrapper,
  InfoContent,
  SearchBarWrapper
} from './styles'

const PageBannersUI = (props) => {
  const {
    title,
    bannerInfo,
    bannersListState,
    setMoveDistance,
    sitesState,
    actionState,
    handleSuccessUpdate,
    handleUpdateBanner,
    handleSuccessAdd,
    defaultPosition,
    handleSuccessDelete,
    aspectRatio,
    isSearhShow
  } = props
  const [, t] = useLanguage()
  const [openItemsDetail, setOpenItemsDetail] = useState(false)
  const [selectedBanner, setSelectedBanner] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [], handleOnAccept: null })
  const [searchValue, setSearchValue] = useState('')
  const [bannerMoveDistance, setBannerMoveDistance] = useState(0)

  const handleOpenBannerItemsDetail = (e, banner) => {
    const isInvalid = e.target.closest('.banner-enabled')
    if (isInvalid) return
    setSelectedBanner(banner)
    setOpenItemsDetail(true)
    setMoveDistance(500)
  }

  const handleCloseDetail = () => {
    setMoveDistance(0)
    setOpenItemsDetail(false)
    setSelectedBanner(null)
  }

  useEffect(() => {
    if (!actionState?.error || actionState.loading) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState])

  useEffect(() => {
    setSearchValue('')
    handleCloseDetail()
  }, [defaultPosition])

  return (
    <>
      <Container>
        <HeaderContainer>
          <div>
            <h1>{title}</h1>
            <InfoWrapper>
              <IconButton
                color='primary'
              >
                <InfoCircle />
              </IconButton>
              <InfoContent>{bannerInfo}</InfoContent>
            </InfoWrapper>
          </div>

          <Button
            color='lightPrimary'
            borderRadius='8px'
            onClick={e => handleOpenBannerItemsDetail(e, {})}
          >
            {t('ADD_BANNER', 'Add banner')}
          </Button>
        </HeaderContainer>

        {isSearhShow && (
          <SearchBarWrapper>
            <SearchBar
              search={searchValue}
              isCustomLayout
              onSearch={(value) => setSearchValue(value)}
              placeholder={t('SEARCH', 'Search')}
            />
          </SearchBarWrapper>
        )}

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
            bannersListState.banners.filter(item => item.name.toUpperCase().includes(searchValue.toUpperCase())).map(banner => (
              <BannerItemWrapper
                key={banner.id}
                active={selectedBanner?.id === banner.id}
                onClick={e => handleOpenBannerItemsDetail(e, banner)}
              >
                <BannerTitleConatiner>
                  {banner?.name}
                </BannerTitleConatiner>
                <BannerActionsWrapper>
                  <EnableWrapper className='banner-enabled'>
                    <span>{t('ENABLE', 'Enable')}</span>
                    <Switch
                      defaultChecked={banner.enabled}
                      onChange={enabled => handleUpdateBanner({ enabled: enabled }, banner.id)}
                    />
                  </EnableWrapper>
                  <ChevronRight />
                </BannerActionsWrapper>
              </BannerItemWrapper>
            ))
          )}
        </BannersListWrapper>
        {!bannersListState.loading && (
          <AddNewBanner
            onClick={e => handleOpenBannerItemsDetail(e, {})}
          >
            {t('ADD_BANNER', 'Add banner')}
          </AddNewBanner>
        )}
      </Container>

      {openItemsDetail && (
        <SideBar
          isBorderShow
          open={openItemsDetail}
          onClose={() => {
            handleCloseDetail()
            setBannerMoveDistance(0)
          }}
          moveDistance={bannerMoveDistance}
          defaultSideBarWidth={500 + bannerMoveDistance}
        >
          <BannerDetails
            banner={selectedBanner}
            sitesState={sitesState}
            handleSuccessUpdate={handleSuccessUpdate}
            handleSuccessAdd={handleSuccessAdd}
            handleSuccessDelete={handleSuccessDelete}
            onClose={() => handleCloseDetail()}
            defaultPosition={defaultPosition}
            aspectRatio={aspectRatio}
            setBannerMoveDistance={setBannerMoveDistance}
          />
        </SideBar>
      )}

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => alertState?.handleOnAccept ? alertState.handleOnAccept() : setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const PageBanners = (props) => {
  const bannersProps = {
    ...props,
    UIComponent: PageBannersUI
  }
  return <AdBannersListController {...bannersProps} />
}
