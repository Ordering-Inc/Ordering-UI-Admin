"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styledComponents = require("styled-components");
var _reactBootstrap = require("react-bootstrap");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _CampaignDetailGeneral = require("../CampaignDetailGeneral");
var _CampaignEmail = require("../CampaignEmail");
var _CampaignSMS = require("../CampaignSMS");
var _CampaignWhatsapp = require("../CampaignWhatsapp");
var _CampaignNotification = require("../CampaignNotification");
var _CampaignPopup = require("../CampaignPopup");
var _CampaignWebHook = require("../CampaignWebHook");
var _utils = require("../../../utils");
var _styles = require("../../../styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CampaignDetailUI = function CampaignDetailUI(props) {
  var _formState$changes, _campaignState$campai, _formState$changes$na, _formState$changes2, _campaignState$campai2, _contactState$changes, _contactState$changes2, _contactState$changes3, _contactState$changes4, _contactState$changes5, _contactState$changes6;
  var isAddMode = props.isAddMode,
    formState = props.formState,
    campaignState = props.campaignState,
    handleDeleteCampaign = props.handleDeleteCampaign,
    contactState = props.contactState;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirm = _useState2[0],
    setConfirm = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)('general'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedOption = _useState6[0],
    setSelectedOption = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isExpand = _useState8[0],
    setIsExpand = _useState8[1];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var contentOptionList = [{
    key: 'general',
    name: t('GENERAL', 'General')
  }, {
    key: 'content',
    name: t('CONTENT', 'Content')
  }];
  var onClickDeteteCampaign = function onClickDeteteCampaign() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('CAMPAIGN', 'Campaign')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteCampaign();
      }
    });
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('campaignDetail');
    if (!element) return;
    if (isExpand) element.style.width = '550px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (!(formState !== null && formState !== void 0 && formState.error) || formState.loading) return;
    setAlertState({
      open: true,
      content: formState === null || formState === void 0 ? void 0 : formState.error
    });
  }, [formState === null || formState === void 0 ? void 0 : formState.error]);
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setSelectedOption(tab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    if (tab) {
      handleTabClick(tab, true);
    } else {
      handleTabClick(selectedOption);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CampaignDetailContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, ((formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) || (campaignState === null || campaignState === void 0 || (_campaignState$campai = campaignState.campaign) === null || _campaignState$campai === void 0 ? void 0 : _campaignState$campai.name)) && /*#__PURE__*/_react.default.createElement(_styles2.CampaignName, null, (_formState$changes$na = formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : campaignState === null || campaignState === void 0 || (_campaignState$campai2 = campaignState.campaign) === null || _campaignState$campai2 === void 0 ? void 0 : _campaignState$campai2.name)), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, width > 576 && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: onClickDeteteCampaign
  }, t('DELETE', 'Delete')))))), /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, contentOptionList.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: option.key,
      active: selectedOption === option.key,
      onClick: function onClick() {
        return handleTabClick(option.key);
      }
    }, option.name);
  })), selectedOption === 'general' && /*#__PURE__*/_react.default.createElement(_CampaignDetailGeneral.CampaignDetailGeneral, props), selectedOption === 'content' && /*#__PURE__*/_react.default.createElement("div", null, (contactState === null || contactState === void 0 || (_contactState$changes = contactState.changes) === null || _contactState$changes === void 0 ? void 0 : _contactState$changes.contact_type) === 'email' && /*#__PURE__*/_react.default.createElement(_CampaignEmail.CampaignEmail, props), (contactState === null || contactState === void 0 || (_contactState$changes2 = contactState.changes) === null || _contactState$changes2 === void 0 ? void 0 : _contactState$changes2.contact_type) === 'sms' && /*#__PURE__*/_react.default.createElement(_CampaignSMS.CampaignSMS, props), (contactState === null || contactState === void 0 || (_contactState$changes3 = contactState.changes) === null || _contactState$changes3 === void 0 ? void 0 : _contactState$changes3.contact_type) === 'whatsapp' && /*#__PURE__*/_react.default.createElement(_CampaignWhatsapp.CampaignWhatsapp, props), (contactState === null || contactState === void 0 || (_contactState$changes4 = contactState.changes) === null || _contactState$changes4 === void 0 ? void 0 : _contactState$changes4.contact_type) === 'notification' && /*#__PURE__*/_react.default.createElement(_CampaignNotification.CampaignNotification, props), (contactState === null || contactState === void 0 || (_contactState$changes5 = contactState.changes) === null || _contactState$changes5 === void 0 ? void 0 : _contactState$changes5.contact_type) === 'popup' && /*#__PURE__*/_react.default.createElement(_CampaignPopup.CampaignPopup, props), (contactState === null || contactState === void 0 || (_contactState$changes6 = contactState.changes) === null || _contactState$changes6 === void 0 ? void 0 : _contactState$changes6.contact_type) === 'webhook' && /*#__PURE__*/_react.default.createElement(_CampaignWebHook.CampaignWebHook, props))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CAMPAIGN', 'Campaign'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
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
var CampaignDetail = exports.CampaignDetail = function CampaignDetail(props) {
  var campaignDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CampaignDetailUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CampaignDetail, campaignDetailProps);
};