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
  ReportsBusinessDistance
} from './components/BusinessIntelligence'
import { DeliveryUsersListing, DriversCompaniesListing, DriversGroupsListing } from './components/Delivery'
import { HomePage } from './components/Home'
import { LoginForm, ForgotPasswordForm } from './components/Login'
import { EnterprisePromotionListing, CampaignListing } from './components/Marketing'
import { Cms, IntegrationListing, LanguageManager, PlaceListing, Settings, SettingItemUI } from './components/Settings'
import { 
  BusinessBrandListing, 
  BusinessesListing, 
  BusinessProductsListing,
  BusinessesListingHeader,
  BusinessActiveStateFilter,
  BusinessTypeFilter,
  BusinessesList,
  BusinessCustomFields,
  BusinessDeliveryPickupMore,
  BusinessDetail,
  BusinessDetails,
  BusinessFrontLayout,
  BusinessMenu,
  BusinessMoreDetail,
  BusinessNotifications,
  BusinessOrderingChannels,
  BusinessPaymentMethods,
  BusinessPreorderDetails,
  BusinessPromotionList,
  BusinessSchedule,
  BusinessSupport,
  BusinessSummary,
  BusinessTaxAndFees,
  BusinessWebhooks,
  AddBusinessForm,
  ImportersLateralBar,
  Personalization,
  WizardBusiness
} from './components/Stores'
import { UsersListing, CustomersListing } from './components/Users'
import { RewardsPrograms } from './components/Loyalty'
import { OpenCartListing, RecoveryActionListing } from './components/CartRecovery'
import { FreeProductsList, PurchasedProductsList } from './components/Downloads'

import { Layout } from './components/Layout'
import { SidebarMenu } from './components/SidebarMenu'
import { NotNetworkConnectivity } from './components/NotNetworkConnectivity'
import {
  Alert,
  SpinnerLoader,
  Modal,
  SideBar,
  ProtectedRoute,
  MoreSidebarLayout
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
  CampaignListing,
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
  BusinessesListingHeader,
  BusinessActiveStateFilter,
  BusinessTypeFilter,
  BusinessesList,
  BusinessCustomFields,
  BusinessDeliveryPickupMore,
  BusinessDetail,
  BusinessDetails,
  BusinessFrontLayout,
  BusinessMenu,
  BusinessMoreDetail,
  BusinessNotifications,
  BusinessOrderingChannels,
  BusinessPaymentMethods,
  BusinessPreorderDetails,
  BusinessPromotionList,
  BusinessSchedule,
  BusinessSupport,
  BusinessSummary,
  BusinessTaxAndFees,
  BusinessWebhooks,
  AddBusinessForm,
  ImportersLateralBar,
  Personalization,
  WizardBusiness,

  UsersListing,
  CustomersListing,

  RewardsPrograms,

  OpenCartListing,
  RecoveryActionListing,
  FreeProductsList,
  PurchasedProductsList,

  Layout,
  SidebarMenu,
  NotNetworkConnectivity,
  Alert,
  SpinnerLoader,
  Modal,
  SideBar,
  ProtectedRoute,
  MoreSidebarLayout,

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
