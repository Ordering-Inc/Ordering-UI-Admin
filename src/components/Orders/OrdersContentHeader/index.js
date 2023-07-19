import React, { useState, useEffect } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import { SearchBar } from '../../Shared'
import { OrdersFilterGroup } from '../OrdersFilterGroup'
import { Funnel, List as MenuIcon, LifePreserver } from 'react-bootstrap-icons'
import MdcFilterOff from '@meronex/icons/mdc/MdcFilterOff'
import { OrdersDashboardSLAControls } from '../OrdersDashboardSLAControls'
import { OrderDashboardSLASetting } from '../OrderDashboardSLASetting'
import { IconButton, LinkButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { GoogleMapsApiKeySettingButton } from '../GoogleMapsApiKeySettingButton'
import { WebsocketStatus } from '../WebsocketStatus'
import TiWarningOutline from '@meronex/icons/ti/TiWarningOutline'

import {
  OrderContentHeaderContainer,
  HeaderSection,
  HeaderTitle,
  TopRightSection,
  SLAControlsWrapper,
  WrapperSearchAndFilter,
  WarningMessage
} from './styles'

export const OrdersContentHeader = (props) => {
  const {
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
    filterValues,
    selectedOrderIds,
    handleChangeFilterValues,
    handleOpenTour,
    filterModalOpen,
    setFilterModalOpen,
    setTimeStatus,
    setSlaSettingTime,
    isShowMapsKeySettingButton
  } = props

  const { width } = useWindowSize()
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const [filterApplied, setFilterApplied] = useState(false)
  const [configState] = useConfig()

  const handleClearFilters = () => {
    if (searchValue) handleChangeSearch('')
    if (filterApplied) handleChangeFilterValues({})
  }

  useEffect(() => {
    let _filterApplied = false
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false
    } else {
      Object.values(filterValues).forEach(value => {
        if (Array.isArray(value)) {
          if (value.length > 0) _filterApplied = true
        } else {
          if (value) _filterApplied = true
        }
      })
    }
    setFilterApplied(_filterApplied)
  }, [filterValues])

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
            <SearchBar
              isCustomLayout
              lazyLoad
              onSearch={handleChangeSearch}
              search={searchValue}
              placeholder={t('SEARCH', 'Search')}
            />
            <IconButton
              color='black'
              onClick={() => setFilterModalOpen && setFilterModalOpen(true)}
              name='filter-btn'
            >
              {filterApplied ? <Funnel /> : <MdcFilterOff />}
            </IconButton>
            {(filterApplied || !!searchValue) && (
              <WarningMessage>
                <TiWarningOutline />
                <span>{t('WARNING_FILTER_APPLIED', 'Filters applied. You may miss new orders.')}</span>
                <LinkButton onClick={() => handleClearFilters()}>{t('CLEAR_FILTERS', 'Clear filters')}</LinkButton>
              </WarningMessage>
            )}
          </WrapperSearchAndFilter>
        </TopRightSection>
      </OrderContentHeaderContainer>

      <OrdersFilterGroup
        open={filterModalOpen}
        handleCloseFilterModal={() => setFilterModalOpen && setFilterModalOpen(false)}
        driverGroupList={driverGroupList}
        driversList={driversList}
        paymethodsList={paymethodsList}
        businessesList={businessesList}
        citiesList={citiesList}
        handleChangeFilterValues={handleChangeFilterValues}
      />
    </>
  )
}
