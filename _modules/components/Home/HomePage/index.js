"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styledComponents = require("styled-components");
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
var _reactHubspotForm = _interopRequireDefault(require("react-hubspot-form"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HomeUI = function HomeUI(props) {
  var _projectStatus$projec, _sessionState$user, _projectStatus$projec2, _projectStatus$projec3, _project$projectStatu, _projectStatus$projec4, _projectStatus$projec5, _project$projectStatu2, _projectStatus$projec6, _projectStatus$projec7, _project$projectStatu3, _projectStatus$projec8, _project$projectStatu4, _projectStatus$projec9, _sessionState$user2, _sessionState$user3;
  var projectStatus = props.projectStatus,
    ordersList = props.ordersList,
    todaySalelsList = props.todaySalelsList,
    monthSalesList = props.monthSalesList,
    getCurrentDateRange = props.getCurrentDateRange;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
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
  };
  var generateData = function generateData() {
    var values = [];
    timeAxes.forEach(function (axe) {
      var _monthSalesList$sales;
      var index = monthSalesList === null || monthSalesList === void 0 ? void 0 : (_monthSalesList$sales = monthSalesList.sales) === null || _monthSalesList$sales === void 0 ? void 0 : _monthSalesList$sales.findIndex(function (history) {
        return axe === (history === null || history === void 0 ? void 0 : history.time);
      });
      if (index !== -1) {
        var _monthSalesList$sales2, _monthSalesList$sales3;
        values.push({
          x: monthSalesList === null || monthSalesList === void 0 ? void 0 : (_monthSalesList$sales2 = monthSalesList.sales[index]) === null || _monthSalesList$sales2 === void 0 ? void 0 : _monthSalesList$sales2.time,
          y: monthSalesList === null || monthSalesList === void 0 ? void 0 : (_monthSalesList$sales3 = monthSalesList.sales[index]) === null || _monthSalesList$sales3 === void 0 ? void 0 : _monthSalesList$sales3.sales
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.HomeContainer, null, width > 997 && /*#__PURE__*/_react.default.createElement(_styles.OrderingButtonWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('WHAT_DO_YOU_WANT_SEE_ORDERING', 'What do you want to see in ordering?')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return setShowForm(true);
    }
  }, t('CLICK_HERE', 'Click here'))), /*#__PURE__*/_react.default.createElement(_styles.Breadcrumb, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('HOME', 'Home'))), (projectStatus === null || projectStatus === void 0 ? void 0 : projectStatus.loading) && /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  })), !(projectStatus !== null && projectStatus !== void 0 && projectStatus.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(projectStatus !== null && projectStatus !== void 0 && (_projectStatus$projec = projectStatus.project) !== null && _projectStatus$projec !== void 0 && _projectStatus$projec.current_status) ? /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WelcomeMsg, null, t('WELCOME_TO_ORDERING', 'Welcome to Ordering'), "!"), /*#__PURE__*/_react.default.createElement(_styles.GuideMsg, null, t('ORDERING_GUIDE_MSG', 'Our guide helps you to configure your Ordering products.'))) : /*#__PURE__*/_react.default.createElement(_styles.ProjectStatusContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ProjectInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.GreetingText, null, t('WELCOME', 'Welcome'), " ", sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.name, "!"), /*#__PURE__*/_react.default.createElement(_styles.ProjectStatusDescription, null, (_projectStatus$projec2 = projectStatus.project) !== null && _projectStatus$projec2 !== void 0 && _projectStatus$projec2.current_status_until && ((_projectStatus$projec3 = projectStatus.project) === null || _projectStatus$projec3 === void 0 ? void 0 : _projectStatus$projec3.current_status) === 'past_due' ? (_project$projectStatu = project[(_projectStatus$projec4 = projectStatus.project) === null || _projectStatus$projec4 === void 0 ? void 0 : _projectStatus$projec4.current_status]) === null || _project$projectStatu === void 0 ? void 0 : _project$projectStatu.description.replace('_days_', (0, _utils.getCurrentDiffDays)((_projectStatus$projec5 = projectStatus.project) === null || _projectStatus$projec5 === void 0 ? void 0 : _projectStatus$projec5.current_status_until)) : (_project$projectStatu2 = project[(_projectStatus$projec6 = projectStatus.project) === null || _projectStatus$projec6 === void 0 ? void 0 : _projectStatus$projec6.current_status]) === null || _project$projectStatu2 === void 0 ? void 0 : _project$projectStatu2.description), /*#__PURE__*/_react.default.createElement(_styles.ProjectStatusWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProjectCurrentStatus, {
    isActive: ((_projectStatus$projec7 = projectStatus.project) === null || _projectStatus$projec7 === void 0 ? void 0 : _projectStatus$projec7.current_status) === 'active'
  }, (_project$projectStatu3 = project[(_projectStatus$projec8 = projectStatus.project) === null || _projectStatus$projec8 === void 0 ? void 0 : _projectStatus$projec8.current_status]) === null || _project$projectStatu3 === void 0 ? void 0 : _project$projectStatu3.status), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return window.open("https://".concat(ordering === null || ordering === void 0 ? void 0 : ordering.project, ".tryordering.com"), '_blank');
    }
  }, t('VISIT_MY_WEBSITE', 'Visit my Website')))), /*#__PURE__*/_react.default.createElement("img", {
    src: (_project$projectStatu4 = project[(_projectStatus$projec9 = projectStatus.project) === null || _projectStatus$projec9 === void 0 ? void 0 : _projectStatus$projec9.current_status]) === null || _project$projectStatu4 === void 0 ? void 0 : _project$projectStatu4.image,
    alt: ""
  }))), width < 997 && /*#__PURE__*/_react.default.createElement(_styles.OrderingButtonBlock, null, /*#__PURE__*/_react.default.createElement("h2", null, t('WHAT_DO_YOU_WANT', 'What do you want to'), /*#__PURE__*/_react.default.createElement("span", null, " ".concat(t('SEE_IN_ORDERING', 'see in ordering')), "?")), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return setShowForm(true);
    }
  }, t('CLICK_HERE', 'Click here'))), /*#__PURE__*/_react.default.createElement(_styles.ParagraphHeaders, null, /*#__PURE__*/_react.default.createElement("p", null, t('REPORTS', 'Reports')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
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
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cash, null))))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.level) !== 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ParagraphHeaders, null, /*#__PURE__*/_react.default.createElement("p", null, t('SUPPORT', 'Support'))), /*#__PURE__*/_react.default.createElement(_styles.AssistanceWidgets, null, /*#__PURE__*/_react.default.createElement(_styles.AssistanceTitle, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SUPPORT_TITLE_START', 'Which kind of'), ' ', /*#__PURE__*/_react.default.createElement("span", null, t('SUPPORT_TITLE_END', 'assistance do you need?'))), /*#__PURE__*/_react.default.createElement("p", null, t('ASSIST_SUB_TITILE', 'Choose the asistance you are looking for in the buttons below.'))), /*#__PURE__*/_react.default.createElement(_styles.AssistanceBody, null, /*#__PURE__*/_react.default.createElement(_styles.WidgeBlock, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CONTACT_SALES_TEAM', 'Contact our Sales Team')), /*#__PURE__*/_react.default.createElement("p", null, t('CONTACT_SALES_SUB_TITLE', 'Ask about pricing, custom work, budget and more money talk')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
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
  }, t('TECH_SUPPORT', 'Tech Support')))))), (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.level) === 0 && /*#__PURE__*/_react.default.createElement(_styles.FeedbackWidgets, null, /*#__PURE__*/_react.default.createElement(_styles.ParagraphHeaders, null, /*#__PURE__*/_react.default.createElement("p", null, t('FEEDBACK', 'Feedback'))), /*#__PURE__*/_react.default.createElement(_styles.FeedbackContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SHARE_WITH_US_YOUR_IDEAS', 'Share with us your ideas')), /*#__PURE__*/_react.default.createElement("p", {
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
var HomePage = function HomePage(props) {
  var homeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: HomeUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Home, homeProps);
};
exports.HomePage = HomePage;