import { MessagesListing } from './components/Messages'
import { OrderingProductsListing } from './components/OrderingProducts'
import { PageNotFound } from './components/PageNotFound'
import { DeliveriesManager, DriversManager, OrdersManager } from './components/Orders'
import { Support } from './components/Support'
import { 
  BusinessAnalytics, 
  DriverAnalytics, 
  InvoiceManager, 
  Reports, 
  ReviewsListing, 
  ReviewProductsListing, 
  ReportsDriverGroupFilter, 
  ReportsDriverFilter,
  AnalyticsBusinessFilter,
  AnalyticsCalendar,
  ReportsSaleAndCategory,
  ReportsGeneralSales,
  ReportsAverageSales,
  ReportsPaymethodSales,
  ReportsCustomer,
  ReportsUsers,
  ReportsSales,
  ReportsOrders,
  ReportsTopDrivers,
  ReportsSpentTime,
  ReportsDriverDistance,
  ReportsOrderStatus,
  ReportsDriverSchedule,
  ReportsDriverOrder,
  ReportsDriverSpend,
  ReportsDriverOrderTime,
  ReportsBusinessSpend,
  ReportsOrderDistance,
  ReportsBusinessDistance,
} from './components/BusinessIntelligence'
import { DeliveryUsersListing, DriversCompaniesListing, DriversGroupsListing } from './components/Delivery'
import { HomePage } from './components/Home'
import { LoginForm, ForgotPasswordForm } from './components/Login'
import { EnterprisePromotionListing } from './components/Marketing'
import { Cms, IntegrationListing, LanguageManager, PlaceListing, Settings, SettingItemUI } from './components/Settings'
import { BusinessBrandListing, BusinessesListing, BusinessProductsListing } from './components/Stores'
import { UsersListing, CustomersListing } from './components/Users'

import { Layout } from './components/Layout'
import { SidebarMenu } from './components/SidebarMenu'
import { NotNetworkConnectivity } from './components/NotNetworkConnectivity'
import {
  Alert,
  SpinnerLoader,
  Modal,
  SideBar
} from './components/Shared'

import { capitalize } from './utils'

// contexts
import { ThemeContext, ThemeProvider, useTheme } from './contexts/ThemeContext'
import { ConfigFileContext } from './contexts/ConfigFileContext'
import { InfoShareContext, InfoShareProvider, useInfoShare } from './contexts/InfoShareContext'

// hooks
import { useOnlineStatus } from './hooks/useOnlineStatus'
import { useWindowSize } from './hooks/useWindowSize'

// styles
import { Button, IconButton } from './styles/Buttons'
import { Input, InputGroup, InputPrimary, InputGroupLeft, InputGroupPrimary, InputGroupRight, InputSecundary, TextArea } from './styles/Inputs'
import { Select } from './styles/Select'
import { Tab, Tabs } from './styles/Tabs'
import { Toast } from './styles/Toast'

export {
  DeliveriesManager,
  DriversManager,
  ForgotPasswordForm,
  MessagesListing,
  OrdersManager,
  PageNotFound,

  BusinessAnalytics,
  DriverAnalytics,
  InvoiceManager,
  Reports,
  ReviewsListing,
  ReviewProductsListing,
  ReportsDriverGroupFilter,
  ReportsDriverFilter,
  AnalyticsBusinessFilter,
  AnalyticsCalendar,
  ReportsSaleAndCategory,
  ReportsGeneralSales,
  ReportsAverageSales,
  ReportsPaymethodSales,
  ReportsCustomer,
  ReportsUsers,
  ReportsSales,
  ReportsOrders,
  ReportsTopDrivers,
  ReportsSpentTime,
  ReportsDriverDistance,
  ReportsOrderStatus,
  ReportsDriverSchedule,
  ReportsDriverOrder,
  ReportsDriverSpend,
  ReportsDriverOrderTime,
  ReportsBusinessSpend,
  ReportsOrderDistance,
  ReportsBusinessDistance,

  DeliveryUsersListing,
  DriversCompaniesListing,
  DriversGroupsListing,

  HomePage,
  LoginForm,

  EnterprisePromotionListing,
  OrderingProductsListing,

  Cms,
  IntegrationListing,
  LanguageManager,
  PlaceListing,
  Settings,
  SettingItemUI,

  Support,

  BusinessBrandListing,
  BusinessesListing,
  BusinessProductsListing,
  UsersListing,
  CustomersListing,

  Layout,
  SidebarMenu,
  NotNetworkConnectivity,
  Alert,
  SpinnerLoader,
  Modal,
  SideBar,

  capitalize,

  // contexts
  ThemeContext,
  ThemeProvider,
  useTheme,
  ConfigFileContext,
  InfoShareContext,
  InfoShareProvider,
  useInfoShare,

  // hooks
  useOnlineStatus,
  useWindowSize,

  // styles
  Button,
  IconButton,
  Input,
  InputGroup,
  InputPrimary,
  InputGroupLeft,
  InputGroupPrimary,
  InputGroupRight,
  InputSecundary,
  Select,
  Tab,
  Tabs,
  TextArea,
  Toast
}
