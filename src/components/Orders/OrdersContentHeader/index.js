import React, { memo } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import { SearchBar } from '../../Shared'
import { OrdersFilterGroup } from '../OrdersFilterGroup'
import { List as MenuIcon, LifePreserver } from 'react-bootstrap-icons'
import { OrdersDashboardSLAControls } from '../OrdersDashboardSLAControls'
import { OrderDashboardSLASetting } from '../OrderDashboardSLASetting'
import { IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { GoogleMapsApiKeySettingButton } from '../GoogleMapsApiKeySettingButton'
import { WebsocketStatus } from '../WebsocketStatus'

import {
  OrderContentHeaderContainer,
  HeaderSection,
  HeaderTitle,
  TopRightSection,
  SLAControlsWrapper,
  WrapperSearchAndFilter
} from './styles'

export const OrdersContentHeader = memo((props) => {
  const {
    isLateralBar,
    isDisableTitle,
    isSelectedOrders,
    title,
    handleChangeSearch,
    searchValue,
    driverGroupList,
    driversList,
    citiesList,
    paymethodsList,
    businessesList,
    selectedOrderIds,
    handleChangeFilterValues,
    handleOpenTour,
    filterModalOpen,
    setFilterModalOpen,
    setTimeStatus,
    setSlaSettingTime,
    isShowMapsKeySettingButton,
    adminsList
  } = props

  const { width } = useWindowSize()
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const [configState] = useConfig()

  const isShowSearchFilters = !configState?.configs?.search_box_enabled || configState?.configs?.search_box_enabled?.value === '1'

  return (
    <>
      <OrderContentHeaderContainer
        isDisableControl={isSelectedOrders}
      >
        {!isDisableTitle && (
          <HeaderSection>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <HeaderTitle>
              {title}
            </HeaderTitle>
            {selectedOrderIds && width > 768 && (
              <OverlayTrigger
                placement='bottom'
                overlay={
                  <Tooltip>
                    {t('START_TUTORIAL', 'Start tutorial')}
                  </Tooltip>
                }
              >
                <IconButton
                  color='dark'
                  className='tour_btn'
                  onClick={() => handleOpenTour()}
                >
                  <LifePreserver />
                </IconButton>
              </OverlayTrigger>
            )}

          </HeaderSection>
        )}
        <TopRightSection isCustomLayout={isSelectedOrders}>
          <WebsocketStatus />
          {isShowMapsKeySettingButton && (
            <GoogleMapsApiKeySettingButton />
          )}
          {(configState?.configs?.order_deadlines_enabled?.value === '1') && (
            <SLAControlsWrapper>
              <OrderDashboardSLASetting
                setSlaSettingTime={setSlaSettingTime}
              />
              <OrdersDashboardSLAControls
                setTimeStatus={setTimeStatus}
              />
            </SLAControlsWrapper>
          )}
          <WrapperSearchAndFilter
            fullWidth={isDisableTitle}
          >
            {isShowSearchFilters && (
              <SearchBar
                isCustomLayout
                lazyLoad
                onSearch={handleChangeSearch}
                search={searchValue}
                placeholder={t('SEARCH', 'Search')}
              />
            )}
            <OrdersFilterGroup
              isLateralBar={isLateralBar}
              filterModalOpen={filterModalOpen}
              setFilterModalOpen={setFilterModalOpen}
              driverGroupList={driverGroupList}
              driversList={driversList}
              paymethodsList={paymethodsList}
              businessesList={businessesList}
              citiesList={citiesList}
              adminsList={adminsList}
              handleChangeFilterValues={handleChangeFilterValues}
              searchValue={searchValue}
              handleChangeSearch={handleChangeSearch}
            />
          </WrapperSearchAndFilter>
        </TopRightSection>
      </OrderContentHeaderContainer>
    </>
  )
})
