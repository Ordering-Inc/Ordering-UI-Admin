"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignDetailContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _CampaignEmail = require("../CampaignEmail");
var _CampaignSMS = require("../CampaignSMS");
var _CampaignWhatsapp = require("../CampaignWhatsapp");
var _CampaignNotification = require("../CampaignNotification");
var _CampaignPopup = require("../CampaignPopup");
var _CampaignWebHook = require("../CampaignWebHook");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CampaignDetailContentUI = function CampaignDetailContentUI(props) {
  var _contactState$changes, _contactState$changes2, _contactState$changes3, _contactState$changes4, _contactState$changes5, _contactState$changes6, _contactState$changes7;
  var handleChangeType = props.handleChangeType,
    contactState = props.contactState,
    isAddMode = props.isAddMode;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    typeOptions = _useState2[0],
    setTypeOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    contactTypeSearchVal = _useState4[0],
    setContactTypeSearchVal = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var typeList = [{
    value: 'email',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('EMAIL', 'Email'))
  }, {
    value: 'sms',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('SMS', 'SMS'))
  }, {
    value: 'notification',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('PUSH_NOTIFICATIONS', 'Push notifications'))
  }, {
    value: 'webhook',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('WEBHOOK', 'Webhook'))
  }
  // { value: 'popup', content: <Option>{t('POPUP', 'Popup')}</Option> },
  // { value: 'whatsapp', content: <Option>{t('WHATSAPP', 'Whatsapp')}</Option> }
  ];

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    var options = typeList.filter(function (option) {
      return option === null || option === void 0 ? void 0 : option.value.toLocaleLowerCase().includes(contactTypeSearchVal.toLocaleLowerCase());
    });
    setTypeOptions(options);
  }, [contactTypeSearchVal]);
  (0, _react.useEffect)(function () {
    if (!(contactState !== null && contactState !== void 0 && contactState.error) || contactState.loading) return;
    setAlertState({
      open: true,
      content: contactState === null || contactState === void 0 ? void 0 : contactState.error
    });
  }, [contactState === null || contactState === void 0 ? void 0 : contactState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CONTACT_TYPE', 'Contact type')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: typeOptions,
    className: "select",
    defaultValue: (contactState === null || contactState === void 0 || (_contactState$changes = contactState.changes) === null || _contactState$changes === void 0 ? void 0 : _contactState$changes.contact_type) || '',
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleChangeType('contact_type', value);
    }
    // isShowSearchBar
    ,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    isDisabled: !isAddMode,
    searchValue: contactTypeSearchVal,
    handleChangeSearch: function handleChangeSearch(val) {
      return setContactTypeSearchVal(val);
    }
  })), (contactState === null || contactState === void 0 || (_contactState$changes2 = contactState.changes) === null || _contactState$changes2 === void 0 ? void 0 : _contactState$changes2.contact_type) === 'email' && /*#__PURE__*/_react.default.createElement(_CampaignEmail.CampaignEmail, props), (contactState === null || contactState === void 0 || (_contactState$changes3 = contactState.changes) === null || _contactState$changes3 === void 0 ? void 0 : _contactState$changes3.contact_type) === 'sms' && /*#__PURE__*/_react.default.createElement(_CampaignSMS.CampaignSMS, props), (contactState === null || contactState === void 0 || (_contactState$changes4 = contactState.changes) === null || _contactState$changes4 === void 0 ? void 0 : _contactState$changes4.contact_type) === 'whatsapp' && /*#__PURE__*/_react.default.createElement(_CampaignWhatsapp.CampaignWhatsapp, props), (contactState === null || contactState === void 0 || (_contactState$changes5 = contactState.changes) === null || _contactState$changes5 === void 0 ? void 0 : _contactState$changes5.contact_type) === 'notification' && /*#__PURE__*/_react.default.createElement(_CampaignNotification.CampaignNotification, props), (contactState === null || contactState === void 0 || (_contactState$changes6 = contactState.changes) === null || _contactState$changes6 === void 0 ? void 0 : _contactState$changes6.contact_type) === 'popup' && /*#__PURE__*/_react.default.createElement(_CampaignPopup.CampaignPopup, props), (contactState === null || contactState === void 0 || (_contactState$changes7 = contactState.changes) === null || _contactState$changes7 === void 0 ? void 0 : _contactState$changes7.contact_type) === 'webhook' && /*#__PURE__*/_react.default.createElement(_CampaignWebHook.CampaignWebHook, props)), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }));
};
var CampaignDetailContent = function CampaignDetailContent(props) {
  var campaignDetailContentProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CampaignDetailContentUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CampaignDetailContent, campaignDetailContentProps);
};
exports.CampaignDetailContent = CampaignDetailContent;