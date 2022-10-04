import React, { useState } from 'react'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import {
  List as MenuIcon,
  Rulers,
  Map,
  MapFill,
  ClockHistory,
  FileRuled,
  FileEarmarkRuled,
  CalendarCheck,
  Cart4,
  GeoAltFill,
  Vr,
  Alarm,
  Truck,
  Shop,
  Cart3,
  PersonCheck,
  Star,
  CreditCard,
  ShopWindow,
  Bag,
  Tag
} from 'react-bootstrap-icons'
import { useLanguage } from 'ordering-components-admin'
import { SideBar } from '../../Shared'
import { SettingItemUI } from '../SettingItemUI'
import { ReportsBusinessDistance } from '../ReportsBusinessDistance'
import { ReportsOrderDistance } from '../ReportsOrderDistance'
import { ReportsBusinessSpend } from '../ReportsBusinessSpend'
import { ReportsDriverSpend } from '../ReportsDriverSpend'
import { ReportsDriverOrder } from '../ReportsDriverOrder'
import { ReportsDriverOrderTime } from '../ReportsDriverOrderTime'
import { ReportsDriverSchedule } from '../ReportsDriverSchedule'
import { ReportsOrderStatus } from '../ReportsOrderStatus'
import { ReportsHeatMap } from '../ReportsHeatMap'
import { ReportsDriverDistance } from '../ReportsDriverDistance'
import { ReportsSpentTime } from '../ReportsSpentTime'
import { ReportsTopDrivers } from '../ReportsTopDrivers'
import { ReportsOrders } from '../ReportsOrders'
import { ReportsSales } from '../ReportsSales'
import { ReportsUsers } from '../ReportsUsers'
import { ReportsCustomer } from '../ReportsCustomer'
import { ReportsPaymethodSales } from '../ReportsPaymethodSales'
import { ReportsSaleAndCategory } from '../ReportsSaleAndCategory'
import { ReportsAverageSales } from '../ReportsAverageSales'
import { ReportsGeneralSales } from '../ReportsGeneralSales'

import {
  ReportsContainer,
  HeaderTitleContainer,
  ReportsList
} from './styles'

export const Reports = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedReport, setSelectedReport] = useState(0)
  const { width } = useWindowSize()
  const sidebarWidth = 240

  const advancedReportsList = [
    { id: 1, name: t('DISTANCE', 'Distance'), description: t('DISTANCE_DESC', 'Distance'), icon: <Rulers /> },
    { id: 2, name: t('DISTANCE_STORE_CUSTOMER', 'Distance in KM from the store to customer'), description: t('DISTANCE_STORE_CUSTOMER_DESC', 'Distance in KM from the store to customer'), icon: <Map /> },
    { id: 3, name: t('DISTANCE_STORE_CUSTOMER_RANGE_KM', 'Distance in KM from the store to customer (Range KM)'), description: t('DISTANCE_STORE_CUSTOMER_RANGE_KM_DESC', 'Distance in KM from the store to customer (Range KM)'), icon: <MapFill /> },
    { id: 4, name: t('SERVICE_TIMES', 'Service Times'), description: t('SERVICE_TIMES_DESCRIPTION', 'Service Times'), icon: <ClockHistory /> },
    { id: 5, name: t('DETAIL_COMPLETED_ORDERS', 'Detail of the completed orders of each delivery agency'), description: t('DETAIL_COMPLETED_ORDERS_DESC', 'Detail of the completed orders of each delivery agency'), icon: <FileRuled /> },
    { id: 6, name: t('NUMBER_ORDERS_SPECIFIC_RANGE', 'Number of orders within a specific range'), description: t('NUMBER_ORDERS_SPECIFIC_RANGE_DESC', 'Number of orders within a specific range'), icon: <FileEarmarkRuled /> },
    { id: 7, name: t('DRIVER_SCHEDULE', 'Driver schedule'), description: t('DRIVER_SCHEDULE_DESC', 'Driver schedule description'), icon: <CalendarCheck /> },
    { id: 8, name: t('ORDER_STATUS_TEXT', 'Order status'), description: t('ORDER_STATUS_DESC', 'Order status description'), icon: <Cart4 /> },
    { id: 9, name: t('HEAT_MAP_WITH', 'Heat map with'), description: t('HEAT_MAP_WITH_DESC', 'Heat map with description'), icon: <GeoAltFill /> },
    { id: 10, name: t('DRIVER_DISTANCE', 'Driver distance'), description: t('DRIVER_DISTANCE_DESC', 'Driver distance description'), icon: <Vr /> },
    { id: 11, name: t('DRIVER_TIME', 'Driver Time'), description: t('DRIVER_TIME_DESC', 'Driver time description'), icon: <Alarm /> },
    { id: 12, name: t('TOP_DRIVERS', 'Top drivers'), description: t('TOP_DRIVERS_DESC', 'Top drivers description'), icon: <Truck /> },
    { id: 13, name: t('ORDERS', 'Orders'), description: t('ORDERS_DESC', 'Orders description'), icon: <Cart3 /> },
    { id: 14, name: t('SALES', 'Sales'), description: t('SALES_DESC', 'Sales description'), icon: <Shop /> },
    { id: 15, name: t('REGISTER_USERS', 'Register users'), description: t('REGISTER_USERS_DESC', 'Register users description'), icon: <PersonCheck /> },
    { id: 16, name: t('CUSTOMER_SATISFACTION', 'Customer safisfaction'), description: t('CUSTOMER_SATISFACTION_DESC', 'Customer safisfaction description'), icon: <Star /> },
    { id: 17, name: t('PAYMETHOD_SALES', 'Paymethod sales'), description: t('PAYMETHOD_SALES_DESC', 'Paymethod sales description'), icon: <CreditCard /> },
    { id: 18, name: t('AVERAGE_SALES', 'Average sales'), description: t('AVERAGE_SALES_DESC', 'Average sales description'), icon: <ShopWindow /> },
    { id: 19, name: t('GENERAL_SALES', 'General sales'), description: t('GENERAL_SALES_DESC', 'General sales description'), icon: <Bag /> },
    { id: 20, name: t('TOP_SELLING_AND_CATEOGRY', 'Top selling and category'), description: t('TOP_SELLING_AND_CATEOGRY_DESC', 'Top selling and category description'), icon: <Tag /> }
  ]

  const handleCloseSidebar = () => {
    setIsOpen(false)
    setSelectedReport(0)
  }

  const handleOpenSlider = (index) => {
    setSelectedReport(index)
    setIsOpen(true)
  }

  return (
    <ReportsContainer>
      <HeaderTitleContainer>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{t('ADVANCED_REPORTS', 'Advanced Reports')}</h1>
      </HeaderTitleContainer>
      <ReportsList className='row'>
        {advancedReportsList && advancedReportsList.map((report, i) => (
          <div
            key={i}
            className='col-md-6 col-lg-4'
            onClick={() => handleOpenSlider(report.id)}
          >
            <SettingItemUI
              title={report.name}
              // description={t('DISTANCE_DESC')}
              description={report.description}
              icon={report.icon}
              active={selectedReport === report.id}
            />
          </div>
        ))}
      </ReportsList>
      {isOpen && (
        <SideBar
          sidebarId='brand-details'
          defaultSideBarWidth={width - sidebarWidth}
          open={isOpen}
          onClose={() => handleCloseSidebar()}
        >
          {selectedReport === 1 && <ReportsBusinessDistance />}
          {selectedReport === 2 && <ReportsOrderDistance />}
          {selectedReport === 3 && <ReportsBusinessSpend />}
          {selectedReport === 4 && <ReportsDriverOrderTime />}
          {selectedReport === 5 && <ReportsDriverSpend />}
          {selectedReport === 6 && <ReportsDriverOrder />}
          {selectedReport === 7 && <ReportsDriverSchedule />}
          {selectedReport === 8 && <ReportsOrderStatus />}
          {selectedReport === 9 && <ReportsHeatMap />}
          {selectedReport === 10 && <ReportsDriverDistance />}
          {selectedReport === 11 && <ReportsSpentTime />}
          {selectedReport === 12 && <ReportsTopDrivers />}
          {selectedReport === 13 && <ReportsOrders />}
          {selectedReport === 14 && <ReportsSales />}
          {selectedReport === 15 && <ReportsUsers />}
          {selectedReport === 16 && <ReportsCustomer />}
          {selectedReport === 17 && <ReportsPaymethodSales />}
          {selectedReport === 18 && <ReportsAverageSales />}
          {selectedReport === 19 && <ReportsGeneralSales />}
          {selectedReport === 20 && <ReportsSaleAndCategory />}
        </SideBar>
      )}
    </ReportsContainer>
  )
}
