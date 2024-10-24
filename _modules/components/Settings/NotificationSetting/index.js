"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationSetting = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _SettingsSelectUI = require("../SettingsSelectUI");
var _reactBootstrap = require("react-bootstrap");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
var _styles3 = require("../SettingsList/styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var NotificationSettingUI = function NotificationSettingUI(props) {
  var _superAdmin$options, _superAdmin$options2, _business$options, _business$options2, _customer$options, _customer$options2, _driver$options, _driver$options2, _settingsState$change;
  var configs = props.configs,
    handleInputChange = props.handleInputChange,
    handleCheckBoxChange = props.handleCheckBoxChange,
    settingsState = props.settingsState,
    handleClickUpdate = props.handleClickUpdate,
    isCampaign = props.isCampaign;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var generalList = ['onesignal_user_auth', 'onesignal_orderingapp_id', 'onesignal_businessapp_id', 'onesignal_deliveryapp_id', 'onesignal_orderingweb_id', 'onesignal_dashboardweb_id', 'driver_close_distance', 'notification_toast', 'notification_times_repeat', 'notification_each_time_repeat', 'notification_superadmin_repeat', 'notification_business_repeat', 'notification_driver_repeat'];
  var tooltips = {
    notification_times_repeat: t('MAX_TIMES_TO_REPEAT_15', 'Max times to repeat = 15'),
    notification_each_time_repeat: t('EACH_TIME_SETTING_SET_IN_SECONDS', 'Each time setting set in seconds'),
    notification_superadmin_repeat: t('NOTIFICATION_REPEAT_WORKS_WITH_PENDING_READY', 'Notification repeat works only with Pending (0) and Order Ready (4) status'),
    notification_business_repeat: t('PENDING_STATUS_WORKS_FOR_ADMIN_DRIVER_BUSINESS_USER', 'Pending status works for admin, driver, business user'),
    notification_driver_repeat: t('ORDER_READY_WORKS_WITH_DRIVER_USER', 'Order Ready works only with driver user')
  };
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    general = _useState4[0],
    setGeneral = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    superAdmin = _useState6[0],
    setSuperAdmin = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    business = _useState8[0],
    setBusiness = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    customer = _useState10[0],
    setCustomer = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    driver = _useState12[0],
    setDriver = _useState12[1];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    if (!configs || (configs === null || configs === void 0 ? void 0 : configs.length) === 0) return;
    var _general = configs.filter(function (config) {
      return generalList.includes(config.key);
    });
    var _superAdmin = configs.find(function (config) {
      return config.key === 'notification_superadmin_states';
    });
    var _business = configs.find(function (config) {
      return config.key === 'notification_business_states';
    });
    var _customer = configs.find(function (config) {
      return config.key === 'notification_customer_states';
    });
    var _driver = configs.find(function (config) {
      return config.key === 'notification_driver_states';
    });
    setGeneral(_toConsumableArray(_general));
    setSuperAdmin(_objectSpread({}, _superAdmin));
    setBusiness(_objectSpread({}, _business));
    setCustomer(_objectSpread({}, _customer));
    setDriver(_objectSpread({}, _driver));
  }, [configs]);
  (0, _react.useEffect)(function () {
    var _settingsState$result;
    if (settingsState !== null && settingsState !== void 0 && (_settingsState$result = settingsState.result) !== null && _settingsState$result !== void 0 && _settingsState$result.error) {
      var _settingsState$result2;
      setAlertState({
        open: true,
        content: settingsState === null || settingsState === void 0 || (_settingsState$result2 = settingsState.result) === null || _settingsState$result2 === void 0 ? void 0 : _settingsState$result2.result
      });
    }
  }, [settingsState === null || settingsState === void 0 ? void 0 : settingsState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.NotificationSettingContainer, null, !isCampaign && /*#__PURE__*/_react.default.createElement(_styles3.GeneralTitle, null, /*#__PURE__*/_react.default.createElement("p", null, t('SETTINGS', 'All Settings'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionTitle, null, t('GENERAL', 'General'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.GeneralWrapper, null, (general === null || general === void 0 ? void 0 : general.length) > 0 && general.map(function (config, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, config.type === 1 && /*#__PURE__*/_react.default.createElement(_styles3.FormGroupText, {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement(_styles2.TitleWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), (tooltips === null || tooltips === void 0 ? void 0 : tooltips[config === null || config === void 0 ? void 0 : config.key]) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "bottom",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, tooltips === null || tooltips === void 0 ? void 0 : tooltips[config === null || config === void 0 ? void 0 : config.key])
    }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "primary",
      className: "tour_btn"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)))), (config === null || config === void 0 ? void 0 : config.description) && /*#__PURE__*/_react.default.createElement(_styles3.Description, null, config === null || config === void 0 ? void 0 : config.description), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      onChange: function onChange(e) {
        return handleInputChange(e.target.value, config === null || config === void 0 ? void 0 : config.id);
      },
      className: "form-control",
      placeholder: config === null || config === void 0 ? void 0 : config.name
    })), config.type === 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), (tooltips === null || tooltips === void 0 ? void 0 : tooltips[config === null || config === void 0 ? void 0 : config.key]) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "bottom",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, tooltips === null || tooltips === void 0 ? void 0 : tooltips[config === null || config === void 0 ? void 0 : config.key])
    }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "primary",
      className: "tour_btn"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)))), (config === null || config === void 0 ? void 0 : config.description) && /*#__PURE__*/_react.default.createElement(_styles3.Description, null, config === null || config === void 0 ? void 0 : config.description), /*#__PURE__*/_react.default.createElement(_SettingsSelectUI.SettingsSelectUI, {
      noHeader: true,
      config: config,
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      handleSelectChange: function handleSelectChange(value) {
        return handleInputChange(value, config === null || config === void 0 ? void 0 : config.id);
      }
    })));
  }))), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionTitle, null, t('ADMINISTRATOR', 'Administrator'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles3.CheckBoxWrapper, null, (superAdmin === null || superAdmin === void 0 ? void 0 : superAdmin.description) && /*#__PURE__*/_react.default.createElement("p", null, superAdmin === null || superAdmin === void 0 ? void 0 : superAdmin.description), (superAdmin === null || superAdmin === void 0 || (_superAdmin$options = superAdmin.options) === null || _superAdmin$options === void 0 ? void 0 : _superAdmin$options.length) > 0 && (superAdmin === null || superAdmin === void 0 || (_superAdmin$options2 = superAdmin.options) === null || _superAdmin$options2 === void 0 ? void 0 : _superAdmin$options2.map(function (item, j) {
    return /*#__PURE__*/_react.default.createElement(_styles3.FormGroupWrapper, {
      key: j
    }, /*#__PURE__*/_react.default.createElement(_styles3.FormGroupCheck, {
      className: "checkbox"
    }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: item === null || item === void 0 ? void 0 : item.value,
      "data-id": superAdmin === null || superAdmin === void 0 ? void 0 : superAdmin.id,
      defaultChecked: superAdmin === null || superAdmin === void 0 ? void 0 : superAdmin.value.split('|').includes(item === null || item === void 0 ? void 0 : item.value),
      onChange: function onChange(e) {
        return handleCheckBoxChange(e, true, superAdmin === null || superAdmin === void 0 ? void 0 : superAdmin.value);
      }
    }), item.text)));
  })), !(superAdmin !== null && superAdmin !== void 0 && superAdmin.options) && /*#__PURE__*/_react.default.createElement(_styles3.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value')))), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "2"
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionTitle, null, t('BUSINESS', 'Business'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "2"
  }, /*#__PURE__*/_react.default.createElement(_styles3.CheckBoxWrapper, null, (business === null || business === void 0 ? void 0 : business.description) && /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.description), (business === null || business === void 0 || (_business$options = business.options) === null || _business$options === void 0 ? void 0 : _business$options.length) > 0 && (business === null || business === void 0 || (_business$options2 = business.options) === null || _business$options2 === void 0 ? void 0 : _business$options2.map(function (item, j) {
    return /*#__PURE__*/_react.default.createElement(_styles3.FormGroupWrapper, {
      key: j
    }, /*#__PURE__*/_react.default.createElement(_styles3.FormGroupCheck, {
      className: "checkbox"
    }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: item === null || item === void 0 ? void 0 : item.value,
      "data-id": business === null || business === void 0 ? void 0 : business.id,
      defaultChecked: business === null || business === void 0 ? void 0 : business.value.split('|').includes(item === null || item === void 0 ? void 0 : item.value),
      onChange: function onChange(e) {
        return handleCheckBoxChange(e, true, business === null || business === void 0 ? void 0 : business.value);
      }
    }), item.text)));
  })), !(business !== null && business !== void 0 && business.options) && /*#__PURE__*/_react.default.createElement(_styles3.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value')))), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionTitle, null, t('CUSTOMER', 'Customer'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_styles3.CheckBoxWrapper, null, (customer === null || customer === void 0 ? void 0 : customer.description) && /*#__PURE__*/_react.default.createElement("p", null, customer === null || customer === void 0 ? void 0 : customer.description), (customer === null || customer === void 0 || (_customer$options = customer.options) === null || _customer$options === void 0 ? void 0 : _customer$options.length) > 0 && (customer === null || customer === void 0 || (_customer$options2 = customer.options) === null || _customer$options2 === void 0 ? void 0 : _customer$options2.map(function (item, j) {
    return /*#__PURE__*/_react.default.createElement(_styles3.FormGroupWrapper, {
      key: j
    }, /*#__PURE__*/_react.default.createElement(_styles3.FormGroupCheck, {
      className: "checkbox"
    }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: item === null || item === void 0 ? void 0 : item.value,
      "data-id": customer === null || customer === void 0 ? void 0 : customer.id,
      defaultChecked: customer === null || customer === void 0 ? void 0 : customer.value.split('|').includes(item === null || item === void 0 ? void 0 : item.value),
      onChange: function onChange(e) {
        return handleCheckBoxChange(e, true, customer === null || customer === void 0 ? void 0 : customer.value);
      }
    }), item.text)));
  })), !(customer !== null && customer !== void 0 && customer.options) && /*#__PURE__*/_react.default.createElement(_styles3.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value')))), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "4"
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionTitle, null, t('DRIVER', 'Driver'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "4"
  }, /*#__PURE__*/_react.default.createElement(_styles3.CheckBoxWrapper, null, (driver === null || driver === void 0 ? void 0 : driver.description) && /*#__PURE__*/_react.default.createElement("p", null, driver === null || driver === void 0 ? void 0 : driver.description), (driver === null || driver === void 0 || (_driver$options = driver.options) === null || _driver$options === void 0 ? void 0 : _driver$options.length) > 0 && (driver === null || driver === void 0 || (_driver$options2 = driver.options) === null || _driver$options2 === void 0 ? void 0 : _driver$options2.map(function (item, j) {
    return /*#__PURE__*/_react.default.createElement(_styles3.FormGroupWrapper, {
      key: j
    }, /*#__PURE__*/_react.default.createElement(_styles3.FormGroupCheck, {
      className: "checkbox"
    }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: item === null || item === void 0 ? void 0 : item.value,
      "data-id": driver === null || driver === void 0 ? void 0 : driver.id,
      defaultChecked: driver === null || driver === void 0 ? void 0 : driver.value.split('|').includes(item === null || item === void 0 ? void 0 : item.value),
      onChange: function onChange(e) {
        return handleCheckBoxChange(e, true, driver === null || driver === void 0 ? void 0 : driver.value);
      }
    }), item.text)));
  })), !(driver !== null && driver !== void 0 && driver.options) && /*#__PURE__*/_react.default.createElement(_styles3.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value'))))), (settingsState === null || settingsState === void 0 || (_settingsState$change = settingsState.changes) === null || _settingsState$change === void 0 ? void 0 : _settingsState$change.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles3.SubmitBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleClickUpdate
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('NOTIFICATION_SETTINGS', 'Notifications settings'),
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
var NotificationSetting = function NotificationSetting(props) {
  var notificationSettingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: NotificationSettingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SettingsList, notificationSettingProps);
};
exports.NotificationSetting = NotificationSetting;
var ContextAwareToggle = function ContextAwareToggle(_ref) {
  var children = _ref.children,
    eventKey = _ref.eventKey,
    callback = _ref.callback;
  var currentEventKey = (0, _react.useContext)(_reactBootstrap.AccordionContext);
  var decoratedOnClick = (0, _reactBootstrap.useAccordionToggle)(eventKey, function () {
    return callback && callback(eventKey);
  });
  var isCurrentEventKey = currentEventKey === eventKey;
  var handleButtonClick = function handleButtonClick() {
    decoratedOnClick();
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.ToggleItemWrapper, {
    active: isCurrentEventKey,
    onClick: handleButtonClick
  }, children);
};