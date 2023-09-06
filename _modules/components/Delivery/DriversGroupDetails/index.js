"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _DriversGroupGeneralForm = require("../DriversGroupGeneralForm");
var _DriversGroupBusinesses = require("../DriversGroupBusinesses");
var _DriversGroupPaymethods = require("../DriversGroupPaymethods");
var _DriversGroupLogistics = require("../DriversGroupLogistics");
var _DriversGroupLogs = require("../DriversGroupLogs");
var _DriversGroupDeliveryDetails = require("../DriversGroupDeliveryDetails");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversGroupDetailsUI = function DriversGroupDetailsUI(props) {
  var _configState$configs, _driversGroupState$dr, _driversGroupState$dr2, _driversGroupState$dr3, _driversGroupState$dr4;
  var driversGroupState = props.driversGroupState,
    actionState = props.actionState,
    handleParentSidebarMove = props.handleParentSidebarMove,
    handleDeleteDriversGroup = props.handleDeleteDriversGroup,
    handleNextTour = props.handleNextTour,
    handleUpdateDriversGroup = props.handleUpdateDriversGroup,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    actionDisabled = props.actionDisabled,
    driversGroupId = props.driversGroupId;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var autoAssignType = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.autoassign_type) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var _useState = (0, _react.useState)('general'),
    _useState2 = _slicedToArray(_useState, 2),
    showMenu = _useState2[0],
    setShowMenu = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    driversGroupMenus = _useState4[0],
    setDriversGroupMenus = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isOpenDetails = _useState10[0],
    setIsOpenDetails = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isExpand = _useState12[0],
    setIsExpand = _useState12[1];
  (0, _react.useEffect)(function () {
    var _driversGroupMenus = !driversGroupState.driversGroup ? [{
      key: 'general',
      value: t('GENERAL', 'General')
    }, {
      key: 'businesses',
      value: t('BUSINESSES', 'Businesses')
    }] : autoAssignType !== 'basic' ? [{
      key: 'general',
      value: t('GENERAL', 'General')
    }, {
      key: 'businesses',
      value: t('BUSINESSES', 'Businesses')
    }, {
      key: 'delivery_zones',
      value: t('DELIVERY_ZONES', 'Delivery Zones')
    }, {
      key: 'paymethods',
      value: t('PAYMENT_METHODS', 'Payment methods')
    }, {
      key: 'advanced_logistics',
      value: t('ADVANCED_LOGISTICS', 'Advanced logistics')
    }, {
      key: 'logs',
      value: t('LOGS', 'Logs')
    }] : [{
      key: 'general',
      value: t('GENERAL', 'General')
    }, {
      key: 'businesses',
      value: t('BUSINESSES', 'Businesses')
    }, {
      key: 'delivery_zones',
      value: t('DELIVERY_ZONES', 'Delivery Zones')
    }, {
      key: 'paymethods',
      value: t('PAYMENT_METHODS', 'Payment methods')
    }, {
      key: 'logs',
      value: t('LOGS', 'Logs')
    }];
    setDriversGroupMenus(_driversGroupMenus);
  }, [driversGroupState === null || driversGroupState === void 0 ? void 0 : driversGroupState.driversGroup]);
  var onDeleteGroup = function onDeleteGroup() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_DRIVER_GROUP', 'Are you sure to remove this driver group?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteDriversGroup();
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (width > 1000) setIsExtendExtraOpen(false);
  }, [width]);
  var handleNextClick = function handleNextClick() {
    setShowMenu('businesses');
    handleNextTour();
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('driver_group_details');
    if (!element) return;
    if (isExpand) element.style.width = '540px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    handleParentSidebarMove(0);
    setIsOpenDetails(false);
    setIsExtendExtraOpen(false);
  }, [showMenu, (_driversGroupState$dr = driversGroupState.driversGroup) === null || _driversGroupState$dr === void 0 ? void 0 : _driversGroupState$dr.id]);
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setShowMenu(tab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (driversGroupState.loading) return;
    var tab = query.get('tab');
    if (tab) {
      handleTabClick(tab, true);
    } else {
      handleTabClick(showMenu);
    }
  }, [driversGroupState.loading]);
  (0, _react.useEffect)(function () {
    setShowMenu('general');
  }, [driversGroupId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, driversGroupState.driversGroup ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, (_driversGroupState$dr2 = driversGroupState.driversGroup) === null || _driversGroupState$dr2 === void 0 ? void 0 : _driversGroupState$dr2.name), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (_driversGroupState$dr3 = driversGroupState.driversGroup) === null || _driversGroupState$dr3 === void 0 ? void 0 : _driversGroupState$dr3.enabled,
    onChange: function onChange(enabled) {
      return handleUpdateDriversGroup({
        enabled: enabled
      });
    },
    disabled: actionDisabled
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, width > 576 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onDeleteGroup();
    },
    disabled: actionDisabled
  }, t('DELETE', 'Delete')))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('ADD_NEW_DRIVER_GROUP', 'Add new driver group'))), width > 576 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)))), /*#__PURE__*/_react.default.createElement(_styles2.MenusContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, driversGroupMenus.map(function (menu) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: menu.key,
      active: menu.key === showMenu,
      onClick: function onClick() {
        return handleTabClick(menu.key);
      }
    }, menu.value);
  }))), showMenu === 'general' && /*#__PURE__*/_react.default.createElement(_DriversGroupGeneralForm.DriversGroupGeneralForm, _extends({}, props, {
    curDriversGroup: driversGroupState.driversGroup,
    handleNextClick: handleNextClick
  })), showMenu === 'businesses' && /*#__PURE__*/_react.default.createElement(_DriversGroupBusinesses.DriversGroupBusinesses, _extends({}, props, {
    curDriversGroup: driversGroupState.driversGroup
  })), showMenu === 'paymethods' && /*#__PURE__*/_react.default.createElement(_DriversGroupPaymethods.DriversGroupPaymethods, _extends({}, props, {
    curDriversGroup: driversGroupState.driversGroup
  })), showMenu === 'advanced_logistics' && /*#__PURE__*/_react.default.createElement(_DriversGroupLogistics.DriversGroupLogistics, _extends({}, props, {
    curDriversGroup: driversGroupState.driversGroup
  })), showMenu === 'logs' && /*#__PURE__*/_react.default.createElement(_DriversGroupLogs.DriversGroupLogs, {
    driversGroupId: (_driversGroupState$dr4 = driversGroupState.driversGroup) === null || _driversGroupState$dr4 === void 0 ? void 0 : _driversGroupState$dr4.id
  }), showMenu === 'delivery_zones' && /*#__PURE__*/_react.default.createElement(_DriversGroupDeliveryDetails.DriverGroupDeliveryDetails, _extends({}, props, {
    curDriversGroup: driversGroupState.driversGroup,
    handleParentSidebarMove: handleParentSidebarMove,
    drivergroup: driversGroupState.driversGroup,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    setIsOpenDetails: setIsOpenDetails,
    isOpenDetails: isOpenDetails
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var DriversGroupDetails = function DriversGroupDetails(props) {
  var driversGroupDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriversGroupDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupDetails, driversGroupDetailsProps);
};
exports.DriversGroupDetails = DriversGroupDetails;