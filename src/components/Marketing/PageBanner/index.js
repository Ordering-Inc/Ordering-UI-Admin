import React, { useState, useEffect } from 'react'
import { useLanguage, AdBannersList as AdBannersListController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { SideBar, Alert } from '../../Shared'
import { Button, Switch } from '../../../styles'
import { ChevronRight } from 'react-bootstrap-icons'
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
  AddNewBanner
} from './styles'

const PageBannersUI = (props) => {
  const {
    title,
    bannersListState,
    setMoveDistance,
    sitesState,
    actionState,
    handleSuccessUpdate,
    handleUpdateBanner,
    handleSuccessAdd,
    defaultPosition,
    handleSuccessDelete
  } = props
  const [, t] = useLanguage()
  const [openItemsDetail, setOpenItemsDetail] = useState(false)
  const [selectedBanner, setSelectedBanner] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [], handleOnAccept: null })

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

  return (
    <>
      <Container>
        <HeaderContainer>
          <h1>{title}</h1>
          <Button
            color='lightPrimary'
            borderRadius='8px'
            onClick={e => handleOpenBannerItemsDetail(e, {})}
          >
            {t('ADD_BANNER', 'Add banner')}
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
          onClose={() => handleCloseDetail()}
        >
          <BannerDetails
            banner={selectedBanner}
            sitesState={sitesState}
            handleSuccessUpdate={handleSuccessUpdate}
            handleSuccessAdd={handleSuccessAdd}
            handleSuccessDelete={handleSuccessDelete}
            onClose={() => handleCloseDetail()}
            defaultPosition={defaultPosition}
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
