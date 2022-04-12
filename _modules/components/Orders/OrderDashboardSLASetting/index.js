"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = exports.StatusBlock = exports.OrderDashboardSLASetting = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactHookForm = require("react-hook-form");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _styledComponents = require("styled-components");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderDashboardSLASetting = function OrderDashboardSLASetting(props) {
  var _theme$images$icons, _theme$images$icons2, _theme$images$icons3;

  var setSlaSettingTime = props.setSlaSettingTime;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      settingOpen = _useState2[0],
      setSettingOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTabItem = _useState4[0],
      setCurrentTabItem = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedTabStatus = _useState6[0],
      setSelectedTabStatus = _useState6[1];

  var theme = (0, _styledComponents.useTheme)();
  var formMethods = (0, _reactHookForm.useForm)();

  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var defaultOrderTypes = [{
    key: 1,
    name: t('DELIVERY', 'Delivery')
  }, {
    key: 2,
    name: t('PICKUP', 'Pickup')
  }, {
    key: 3,
    name: t('EAT_IN', 'Eat in')
  }, {
    key: 4,
    name: t('CURBSIDE', 'Curbside')
  }, {
    key: 5,
    name: t('DRIVE_THRU', 'Drive thru')
  }];
  var deliveryStatus = [{
    key: t('OK', 'Ok'),
    des: t('DELIVERY_OK_STATUS_DESC', 'Get delivery time from the businesses.'),
    timmer: false,
    icon: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.clock1,
    backColor: '#00D27A'
  }, {
    key: t('AT_RISK', 'At risk'),
    des: t('DELIVERY_ATRISK_STATUS_DESC', 'Is the time between delivery time of busines and the delayed time.'),
    timmer: false,
    icon: (_theme$images$icons2 = theme.images.icons) === null || _theme$images$icons2 === void 0 ? void 0 : _theme$images$icons2.clockRisk,
    backColor: '#FFC700'
  }, {
    key: t('DELAYED', 'Delayed'),
    des: t('DELIVERY_DELAYED_STATUS_DESC', 'If this time is exceeded, the order will be delayed.'),
    timmer: true,
    icon: (_theme$images$icons3 = theme.images.icons) === null || _theme$images$icons3 === void 0 ? void 0 : _theme$images$icons3.clockDelayed,
    backColor: '#E63757'
  }];

  var handleCloseSettings = function handleCloseSettings() {
    setSettingOpen(false);
  };

  (0, _react.useEffect)(function () {
    setSelectedTabStatus(deliveryStatus);
  }, []);

  var _useState7 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      alertState = _useState8[0],
      setAlertState = _useState8[1];

  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [formMethods.errors]);

  var onSubmit = function onSubmit(data) {
    if (data && Object.keys(data).length > 0) {
      var _hour = parseInt(data.hour);

      var _min = parseInt(data.minute);

      var _settingTimeSecond = _hour * 3600 + _min * 60;

      setSlaSettingTime(_settingTimeSecond);
      showToast(_orderingComponentsAdmin.ToastType.Success, t('SLA_SETTING_UPDATED', 'SLAs setting updated'));
      setSettingOpen(false);
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.SettingContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundary",
    onClick: function onClick() {
      return setSettingOpen(true);
    }
  }, t('SLA_SETTING', 'SLA’s settings')), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    open: settingOpen,
    onClose: function onClose() {
      return handleCloseSettings();
    },
    width: "fit-content"
  }, /*#__PURE__*/_react.default.createElement(_styles2.SettingControlPanel, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.SettingHeader, null, t('SLA_SETTINGS', 'SLA’s settings')), /*#__PURE__*/_react.default.createElement(_styles2.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, defaultOrderTypes.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: item.key,
      active: item.key === currentTabItem,
      onClick: function onClick() {
        return setCurrentTabItem(item.key);
      }
    }, item.name);
  }))), /*#__PURE__*/_react.default.createElement(_styles2.DeliveryStatusWrapper, null, selectedTabStatus && selectedTabStatus.length > 0 && selectedTabStatus.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(StatusBlock, {
      key: i,
      item: item,
      last: i + 1 === selectedTabStatus.length,
      formMethods: formMethods
    });
  })), /*#__PURE__*/_react.default.createElement(_styles2.Actions, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit"
  }, t('ACCEPT', 'Accept'))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('SIGN_UP_FOR_BUSINESS', 'Sign up for business'),
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

exports.OrderDashboardSLASetting = OrderDashboardSLASetting;

var StatusBlock = function StatusBlock(props) {
  var item = props.item,
      last = props.last,
      formMethods = props.formMethods;

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showTime = _useState10[0],
      setShowTime = _useState10[1];

  (0, _react.useEffect)(function () {
    if (last) {
      setShowTime(true);
    }
  }, [last]);
  return /*#__PURE__*/_react.default.createElement(_styles2.StatusItems, null, /*#__PURE__*/_react.default.createElement(_styles2.ItemHeader, {
    onClick: function onClick() {
      return setShowTime(!showTime);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: item === null || item === void 0 ? void 0 : item.icon,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.ItemStatus, {
    backColor: item === null || item === void 0 ? void 0 : item.backColor
  }), /*#__PURE__*/_react.default.createElement("span", null, item === null || item === void 0 ? void 0 : item.key)), /*#__PURE__*/_react.default.createElement(_styles2.ItemContent, null, /*#__PURE__*/_react.default.createElement("p", null, item === null || item === void 0 ? void 0 : item.des)), showTime && /*#__PURE__*/_react.default.createElement(Timer, {
    formMethods: formMethods
  }), last && /*#__PURE__*/_react.default.createElement(_styles2.OverLine, null));
};

exports.StatusBlock = StatusBlock;

var Timer = function Timer(props) {
  var formMethods = props.formMethods;

  var _useLanguage3 = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  return /*#__PURE__*/_react.default.createElement(_styles2.TimerInputWrapper, null, /*#__PURE__*/_react.default.createElement("input", {
    name: "hour",
    type: "number",
    placeholder: "HH",
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_HOUR_REQUIRED', 'The field hour is required').replace('_attribute_', t('HOUR', 'Hour')),
      maxLength: {
        value: 2,
        message: t('VALIDATION_ERROR_TIME_MAX_LENGTH', 'The Time fields must be less than 2 characters.').replace('_attribute_', t('TIME', 'Time'))
      },
      max: {
        value: 12,
        message: t('VALIDATION_ERROR_HOUR_MAX_VALUE', 'The hour must be less than 12.')
      }
    })
  }), ":", /*#__PURE__*/_react.default.createElement("input", {
    name: "minute",
    type: "number",
    placeholder: "MM",
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_MINUTE_REQUIRED', 'The field minute is required').replace('_attribute_', t('MINUTE', 'Minute')),
      maxLength: {
        value: 2,
        message: t('VALIDATION_ERROR_TIME_MAX_LENGTH', 'The Time fields must be less than 2 characters.').replace('_attribute_', t('TIME', 'Time'))
      },
      max: {
        value: 60,
        message: t('VALIDATION_ERROR_MINUTE_MAX_VALUE', 'The minute must be less than 60.')
      }
    })
  }));
};

exports.Timer = Timer;