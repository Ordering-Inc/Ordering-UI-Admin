"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactChartjs = require("react-chartjs-2");
var _moment = _interopRequireDefault(require("moment"));
var _Buttons = require("../../../styles/Buttons");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _ProjectContext = require("../../../contexts/ProjectContext");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styledComponents = require("styled-components");
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
var _reactHubspotForm = _interopRequireDefault(require("react-hubspot-form"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HomeUI = function HomeUI(props) {
  var _configs$white_label_, _projectStatus$projec, _sessionState$user, _projectStatus$projec2, _projectStatus$projec3, _project$projectStatu, _projectStatus$projec4, _projectStatus$projec5, _project$projectStatu2, _projectStatus$projec6, _projectStatus$projec7, _project$projectStatu3, _projectStatus$projec8, _project$projectStatu4, _projectStatus$projec9, _sessionState$user2, _sessionState$user3;
  var ordersList = props.ordersList,
    todaySalelsList = props.todaySalelsList,
    monthSalesList = props.monthSalesList,
    getCurrentDateRange = props.getCurrentDateRange;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useSite = (0, _orderingComponentsAdmin.useSite)(),
    _useSite2 = _slicedToArray(_useSite, 1),
    site = _useSite2[0].site;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    timeAxes = _useState2[0],
    setTimeAxes = _useState2[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useProjectState = (0, _ProjectContext.useProjectState)(),
    _useProjectState2 = _slicedToArray(_useProjectState, 1),
    projectStatus = _useProjectState2[0];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    sessionState = _useSession2[0];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showForm = _useState4[0],
    setShowForm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isSubmitted = _useState6[0],
    setIsSubmitted = _useState6[1];
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var isEnabledWhiteLabelModule = configs === null || configs === void 0 || (_configs$white_label_ = configs.white_label_module) === null || _configs$white_label_ === void 0 ? void 0 : _configs$white_label_.value;
  var project = {
    active: {
      description: t('ORDERING_GUIDE_MSG', 'Our guide helps you to configure your Ordering products.'),
      status: t('PROJECT_ACTIVE', 'Project Active'),
      image: theme.images.project.active
    },
    past_due: {
      description: t('PROJECT_PAST_DUE_PAYMENT', 'Your account will be suspended in the next _days_ days due to your billing status, please check it to avoid any issues.'),
      status: t('PROJECT_PAST_DUE_PAYMENT', 'Project Past Due Payment'),
      image: theme.images.project.pastDuePayment
    }
  };
  var goToLink = function goToLink(location) {
    if (location === 'sales') {
      window.open('https://www.ordering.co/contact-ordering', '_blank');
    }
    if (location === 'tech') {
      window.open('https://support.ordering.co', '_blank');
    }
    if (location === 'canny') {
      window.open('https://feedback.ordering.co', '_blank');
    }
    if (location === 'onboarding') {
      window.open("https://calendly.com/luisana/group-onboarding-conference?month=".concat((0, _moment.default)().format('YYYY-MM')), '_blank');
    }
  };
  var generateData = function generateData() {
    var values = [];
    timeAxes.forEach(function (axe) {
      var _monthSalesList$sales;
      var index = monthSalesList === null || monthSalesList === void 0 || (_monthSalesList$sales = monthSalesList.sales) === null || _monthSalesList$sales === void 0 ? void 0 : _monthSalesList$sales.findIndex(function (history) {
        return axe === (history === null || history === void 0 ? void 0 : history.time);
      });
      if (index !== -1) {
        var _monthSalesList$sales2, _monthSalesList$sales3;
        values.push({
          x: monthSalesList === null || monthSalesList === void 0 || (_monthSalesList$sales2 = monthSalesList.sales[index]) === null || _monthSalesList$sales2 === void 0 ? void 0 : _monthSalesList$sales2.time,
          y: monthSalesList === null || monthSalesList === void 0 || (_monthSalesList$sales3 = monthSalesList.sales[index]) === null || _monthSalesList$sales3 === void 0 ? void 0 : _monthSalesList$sales3.sales
        });
      } else {
        values.push({
          x: axe,
          y: 0
        });
      }
    });
    return values;
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  var updateTimeAxes = function updateTimeAxes() {
    var unitdate = getTimeAxes(getCurrentDateRange()).time.unit;
    var maxdate = (0, _moment.default)(getTimeAxes(getCurrentDateRange()).time.max).endOf(unitdate);
    var mindate = (0, _moment.default)(getTimeAxes(getCurrentDateRange()).time.min).startOf(unitdate);
    var curDate = mindate;
    var newTimeAxes = [];
    var adder = 'd';
    switch (unitdate) {
      case 'day':
        adder = 'd';
        break;
      case 'month':
        adder = 'M';
        break;
      case 'year':
        adder = 'y';
        break;
      case 'hour':
        adder = 'h';
        break;
      default:
        break;
    }
    do {
      newTimeAxes.push((0, _moment.default)(curDate._d.getTime()).format('YYYY-MM-DD HH:mm:ss'));
      curDate = curDate.clone().add(1, adder);
    } while (curDate <= maxdate);
    setTimeAxes(newTimeAxes);
  };
  var getTimeAxes = function getTimeAxes(lapse) {
    var xAxes = {
      type: 'time',
      grid: {
        display: false
      },
      time: {
        stepSize: 1,
        displayFormats: {
          hour: 'LT'
        }
      },
      ticks: {
        fontSize: 12,
        fontColor: '#CED4DA'
      }
    };
    xAxes.time.unit = 'day';
    xAxes.time.min = (0, _moment.default)().subtract(30, 'days').format('YYYY-MM-DD');
    xAxes.time.max = (0, _moment.default)().format('YYYY-MM-DD');
    return xAxes;
  };
  var defaultData = {
    datasets: [{
      data: generateData(),
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: '#2C7BE5',
      tension: 0.4,
      borderWidth: 3
    }]
  };
  var options = {
    scales: {
      x: getTimeAxes(),
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 11,
            color: '#CED4DA'
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    pointRadius: 0
  };
  var getTotalSales = function getTotalSales() {
    var data = 0;
    var _iterator = _createForOfIteratorHelper(monthSalesList === null || monthSalesList === void 0 ? void 0 : monthSalesList.sales),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sale = _step.value;
        data += sale.sales;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return parsePrice(data, {
      separator: '.'
    });
  };
  (0, _react.useEffect)(function () {
    updateTimeAxes();
  }, []);
  var FormLoading = function FormLoading() {
    return /*#__PURE__*/_react.default.createElement("div", null, _toConsumableArray(Array(4).keys()).map(function (key) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: key
      }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        height: 15,
        width: 300,
        style: {
          marginBottom: 10
        }
      }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        height: 35,
        style: {
          marginBottom: 30
        }
      }));
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.HomeContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Breadcrumb, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('HOME', 'Home'))), (projectStatus === null || projectStatus === void 0 ? void 0 : projectStatus.loading) && /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  })), !(projectStatus !== null && projectStatus !== void 0 && projectStatus.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(projectStatus !== null && projectStatus !== void 0 && (_projectStatus$projec = projectStatus.project) !== null && _projectStatus$projec !== void 0 && _projectStatus$projec.current_status) ? /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WelcomeMsg, null, t('WELCOME_TO_ORDERING', 'Welcome to Ordering'), "!"), /*#__PURE__*/_react.default.createElement(_styles.GuideMsg, null, t('ORDERING_GUIDE_MSG', 'Our guide helps you to configure your Ordering products.'))) : /*#__PURE__*/_react.default.createElement(_styles.ProjectStatusContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ProjectInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.GreetingText, null, t('WELCOME', 'Welcome'), " ", sessionState === null || sessionState === void 0 || (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.name, "!"), /*#__PURE__*/_react.default.createElement(_styles.ProjectStatusDescription, null, (_projectStatus$projec2 = projectStatus.project) !== null && _projectStatus$projec2 !== void 0 && _projectStatus$projec2.current_status_until && ((_projectStatus$projec3 = projectStatus.project) === null || _projectStatus$projec3 === void 0 ? void 0 : _projectStatus$projec3.current_status) === 'past_due' ? (_project$projectStatu = project[(_projectStatus$projec4 = projectStatus.project) === null || _projectStatus$projec4 === void 0 ? void 0 : _projectStatus$projec4.current_status]) === null || _project$projectStatu === void 0 ? void 0 : _project$projectStatu.description.replace('_days_', (0, _utils.getCurrentDiffDays)((_projectStatus$projec5 = projectStatus.project) === null || _projectStatus$projec5 === void 0 ? void 0 : _projectStatus$projec5.current_status_until)) : (_project$projectStatu2 = project[(_projectStatus$projec6 = projectStatus.project) === null || _projectStatus$projec6 === void 0 ? void 0 : _projectStatus$projec6.current_status]) === null || _project$projectStatu2 === void 0 ? void 0 : _project$projectStatu2.description), /*#__PURE__*/_react.default.createElement(_styles.ProjectStatusWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProjectCurrentStatus, {
    isActive: ((_projectStatus$projec7 = projectStatus.project) === null || _projectStatus$projec7 === void 0 ? void 0 : _projectStatus$projec7.current_status) === 'active'
  }, (_project$projectStatu3 = project[(_projectStatus$projec8 = projectStatus.project) === null || _projectStatus$projec8 === void 0 ? void 0 : _projectStatus$projec8.current_status]) === null || _project$projectStatu3 === void 0 ? void 0 : _project$projectStatu3.status), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      var _configs$site_url;
      return window.open(site !== null && site !== void 0 && site.domain && (site === null || site === void 0 ? void 0 : site.ssl_process_status) === 'ended' ? "https://".concat(site === null || site === void 0 ? void 0 : site.domain) : (configs === null || configs === void 0 || (_configs$site_url = configs.site_url) === null || _configs$site_url === void 0 ? void 0 : _configs$site_url.value) || "https://".concat(ordering === null || ordering === void 0 ? void 0 : ordering.project, ".tryordering.com"), '_blank');
    }
  }, t('VISIT_MY_WEBSITE', 'Visit my Website')))), /*#__PURE__*/_react.default.createElement("img", {
    src: (_project$projectStatu4 = project[(_projectStatus$projec9 = projectStatus.project) === null || _projectStatus$projec9 === void 0 ? void 0 : _projectStatus$projec9.current_status]) === null || _project$projectStatu4 === void 0 ? void 0 : _project$projectStatu4.image,
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement(_styles.ParagraphHeaders, null, /*#__PURE__*/_react.default.createElement("p", null, t('REPORTS', 'Reports')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "lightPrimary",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'business_analytics'
      });
    }
  }, t('SEE_MORE_REPORTS', 'See more reports'))), /*#__PURE__*/_react.default.createElement(_styles.Reports, null, /*#__PURE__*/_react.default.createElement(_styles.SalesGraphContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ChartHeaderContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('THIS_MONTH_SALES', 'This month sales')), monthSalesList !== null && monthSalesList !== void 0 && monthSalesList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 30
  }) : /*#__PURE__*/_react.default.createElement("h3", null, getTotalSales())), monthSalesList !== null && monthSalesList !== void 0 && monthSalesList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }) : /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: defaultData,
    options: options,
    height: width > 1400 ? '106px' : ''
  })), /*#__PURE__*/_react.default.createElement(_styles.OrdersAndSalesWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersOrSalesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsContent, null, /*#__PURE__*/_react.default.createElement("p", null, t('TODAY_ORDERS', 'Today Orders')), ordersList !== null && ordersList !== void 0 && ordersList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 30
  }) : /*#__PURE__*/_react.default.createElement("h2", null, ordersList === null || ordersList === void 0 ? void 0 : ordersList.orders)), /*#__PURE__*/_react.default.createElement(_styles.BoxIconContainer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Basket, null))), /*#__PURE__*/_react.default.createElement(_styles.OrdersOrSalesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsContent, null, /*#__PURE__*/_react.default.createElement("p", null, t('TODAY_SALES', 'Today Sales')), todaySalelsList !== null && todaySalelsList !== void 0 && todaySalelsList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 30
  }) : /*#__PURE__*/_react.default.createElement("h2", null, parsePrice(todaySalelsList === null || todaySalelsList === void 0 ? void 0 : todaySalelsList.sales, {
    separator: '.'
  }))), /*#__PURE__*/_react.default.createElement(_styles.BoxIconContainer, {
    isSales: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cash, null))))), (sessionState === null || sessionState === void 0 || (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.level) !== 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ParagraphHeaders, null, /*#__PURE__*/_react.default.createElement("p", null, t('SUPPORT', 'Support'))), /*#__PURE__*/_react.default.createElement(_styles.AssistanceWidgets, null, /*#__PURE__*/_react.default.createElement(_styles.AssistanceTitle, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SUPPORT_TITLE_START', 'Which kind of'), ' ', /*#__PURE__*/_react.default.createElement("span", null, t('SUPPORT_TITLE_END', 'assistance do you need?'))), /*#__PURE__*/_react.default.createElement("p", null, t('ASSIST_SUB_TITILE', 'Choose the asistance you are looking for in the buttons below.'))), /*#__PURE__*/_react.default.createElement(_styles.AssistanceBody, null, /*#__PURE__*/_react.default.createElement(_styles.WidgeBlock, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CONTACT_SALES_TEAM', 'Contact our Sales Team')), /*#__PURE__*/_react.default.createElement("p", null, t('CONTACT_SALES_SUB_TITLE', 'Ask about pricing, custom work, budget and more money talk')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return goToLink('sales');
    }
  }, t('SALES_CONTACT', 'Sales Contact'))), /*#__PURE__*/_react.default.createElement(_styles.WidgeBlock, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CONTACT_SUPPORT_TEAM', 'Contact our Support Team')), /*#__PURE__*/_react.default.createElement("p", null, t('CONTACT_SUPPORT_SUB_TITLE', 'Ask about your ordering installation, products and features')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return goToLink('tech');
    }
  }, t('TECH_SUPPORT', 'Tech Support'))))), !isEnabledWhiteLabelModule && /*#__PURE__*/_react.default.createElement(_styles.OnboardingLessonsContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ONBOARDING_LESSONS', 'On-boarding Lessons')), /*#__PURE__*/_react.default.createElement("p", null, t('BOOK_TRAINING_TOTDAY', 'Book your training today')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return goToLink('onboarding');
    }
  }, t('SCHEDULE_TODAY', 'Schedule Today')))), (sessionState === null || sessionState === void 0 || (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.level) === 0 && /*#__PURE__*/_react.default.createElement(_styles.FeedbackWidgets, null, /*#__PURE__*/_react.default.createElement(_styles.ParagraphHeaders, null, /*#__PURE__*/_react.default.createElement("p", null, t('FEEDBACK', 'Feedback'))), /*#__PURE__*/_react.default.createElement(_styles.FeedbackContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SHARE_WITH_US_YOUR_IDEAS', 'Share with us your ideas')), /*#__PURE__*/_react.default.createElement("p", {
    className: "center"
  }, t('FEEDBACK_DESCRIPTION', 'Do you think our functionalities can be improved or do you want to see a new feature?')), /*#__PURE__*/_react.default.createElement("p", null, t('SHARE_US_YOUR_COMMENTS', 'Share us your comments')), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return goToLink('canny');
    }
  }, t('REQUESTS', 'Requests')))))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "769px",
    padding: "30px",
    title: t('ORDERING', 'Ordering'),
    open: showForm,
    onClose: function onClose() {
      setIsSubmitted(false);
      setShowForm(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.HubspotFormWrapper, null, /*#__PURE__*/_react.default.createElement(_reactHubspotForm.default, {
    region: "na1",
    portalId: "6130635",
    formId: "a307934c-a5da-4b85-845e-f6d616351814",
    onFormSubmitted: function onFormSubmitted() {
      return setIsSubmitted(true);
    },
    onReady: function onReady(form) {
      return console.log('Form ready!');
    },
    loading: /*#__PURE__*/_react.default.createElement(FormLoading, null)
  }), isSubmitted && /*#__PURE__*/_react.default.createElement(_styles.CloseButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      setIsSubmitted(false);
      setShowForm(false);
    }
  }, t('CLOSE', 'Close'))))));
};
var HomePage = exports.HomePage = function HomePage(props) {
  var homeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: HomeUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Home, homeProps);
};