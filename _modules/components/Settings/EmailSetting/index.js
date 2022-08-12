"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailSetting = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _SettingsSelectUI = require("../SettingsSelectUI");

var _reactBootstrap = require("react-bootstrap");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _styles2 = require("./styles");

var _styles3 = require("../SettingsList/styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EmailSettingUI = function EmailSettingUI(props) {
  var _superAdmin$options, _superAdmin$options2, _business$options, _business$options2, _customer$options, _customer$options2, _cityManager$options, _cityManager$options2, _settingsState$change;

  var configs = props.configs,
      handleInputChange = props.handleInputChange,
      handleCheckBoxChange = props.handleCheckBoxChange,
      settingsState = props.settingsState,
      handleClickUpdate = props.handleClickUpdate;

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

  var generalList = ['email_main_name', 'email_reply_name', 'email_reply', 'email_main', 'email_smtp_host', 'email_smtp_port', 'email_smtp_username', 'email_smtp_password', 'email_smtp_encryption', 'email_smtp_use_default'];

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
      cityManager = _useState12[0],
      setCityManager = _useState12[1];

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
      return config.key === 'email_superadmin_states';
    });

    var _business = configs.find(function (config) {
      return config.key === 'email_business_states';
    });

    var _customer = configs.find(function (config) {
      return config.key === 'email_customer_states';
    });

    var _cityManager = configs.find(function (config) {
      return config.key === 'email_city_manager_states';
    });

    setGeneral(_toConsumableArray(_general));
    setSuperAdmin(_objectSpread({}, _superAdmin));
    setBusiness(_objectSpread({}, _business));
    setCustomer(_objectSpread({}, _customer));
    setCityManager(_objectSpread({}, _cityManager));
  }, [configs]);
  (0, _react.useEffect)(function () {
    var _settingsState$result;

    if (settingsState !== null && settingsState !== void 0 && (_settingsState$result = settingsState.result) !== null && _settingsState$result !== void 0 && _settingsState$result.error) {
      var _settingsState$result2;

      setAlertState({
        open: true,
        content: settingsState === null || settingsState === void 0 ? void 0 : (_settingsState$result2 = settingsState.result) === null || _settingsState$result2 === void 0 ? void 0 : _settingsState$result2.result
      });
    }
  }, [settingsState === null || settingsState === void 0 ? void 0 : settingsState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.EmailSettingsContainer, null, /*#__PURE__*/_react.default.createElement(_styles3.GeneralTitle, null, /*#__PURE__*/_react.default.createElement("p", null, t('SETTINGS', 'All Settings'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionTitle, null, t('GENERAL', 'General'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.GeneralWrapper, null, (general === null || general === void 0 ? void 0 : general.length) > 0 && general.map(function (config, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, config.type === 1 && /*#__PURE__*/_react.default.createElement(_styles3.FormGroupText, {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), (config === null || config === void 0 ? void 0 : config.description) && /*#__PURE__*/_react.default.createElement(_styles3.Description, null, config === null || config === void 0 ? void 0 : config.description), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      onChange: function onChange(e) {
        return handleInputChange(e.target.value, config === null || config === void 0 ? void 0 : config.id);
      },
      className: "form-control",
      placeholder: config === null || config === void 0 ? void 0 : config.name
    })), config.type === 2 && /*#__PURE__*/_react.default.createElement(_SettingsSelectUI.SettingsSelectUI, {
      config: config,
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      handleSelectChange: function handleSelectChange(value) {
        return handleInputChange(value, config === null || config === void 0 ? void 0 : config.id);
      }
    }));
  }))), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionTitle, null, t('ADMINISTRATOR', 'Administrator'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles3.CheckBoxWrapper, null, (superAdmin === null || superAdmin === void 0 ? void 0 : superAdmin.description) && /*#__PURE__*/_react.default.createElement("p", null, superAdmin === null || superAdmin === void 0 ? void 0 : superAdmin.description), (superAdmin === null || superAdmin === void 0 ? void 0 : (_superAdmin$options = superAdmin.options) === null || _superAdmin$options === void 0 ? void 0 : _superAdmin$options.length) > 0 && (superAdmin === null || superAdmin === void 0 ? void 0 : (_superAdmin$options2 = superAdmin.options) === null || _superAdmin$options2 === void 0 ? void 0 : _superAdmin$options2.map(function (item, j) {
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
  }, /*#__PURE__*/_react.default.createElement(_styles3.CheckBoxWrapper, null, (business === null || business === void 0 ? void 0 : business.description) && /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.description), (business === null || business === void 0 ? void 0 : (_business$options = business.options) === null || _business$options === void 0 ? void 0 : _business$options.length) > 0 && (business === null || business === void 0 ? void 0 : (_business$options2 = business.options) === null || _business$options2 === void 0 ? void 0 : _business$options2.map(function (item, j) {
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
    eventKey: "3",
    as: "div"
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionTitle, null, t('CUSTOMER', 'Customer'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_styles3.CheckBoxWrapper, null, (customer === null || customer === void 0 ? void 0 : customer.description) && /*#__PURE__*/_react.default.createElement("p", null, customer === null || customer === void 0 ? void 0 : customer.description), (customer === null || customer === void 0 ? void 0 : (_customer$options = customer.options) === null || _customer$options === void 0 ? void 0 : _customer$options.length) > 0 && (customer === null || customer === void 0 ? void 0 : (_customer$options2 = customer.options) === null || _customer$options2 === void 0 ? void 0 : _customer$options2.map(function (item, j) {
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
    eventKey: "4",
    as: "div"
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionTitle, null, t('CITY_MANAGER', 'City manager'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "4"
  }, /*#__PURE__*/_react.default.createElement(_styles3.CheckBoxWrapper, null, (cityManager === null || cityManager === void 0 ? void 0 : cityManager.description) && /*#__PURE__*/_react.default.createElement("p", null, cityManager === null || cityManager === void 0 ? void 0 : cityManager.description), (cityManager === null || cityManager === void 0 ? void 0 : (_cityManager$options = cityManager.options) === null || _cityManager$options === void 0 ? void 0 : _cityManager$options.length) > 0 && (cityManager === null || cityManager === void 0 ? void 0 : (_cityManager$options2 = cityManager.options) === null || _cityManager$options2 === void 0 ? void 0 : _cityManager$options2.map(function (item, j) {
    return /*#__PURE__*/_react.default.createElement(_styles3.FormGroupWrapper, {
      key: j
    }, /*#__PURE__*/_react.default.createElement(_styles3.FormGroupCheck, {
      className: "checkbox"
    }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      name: item === null || item === void 0 ? void 0 : item.value,
      "data-id": cityManager === null || cityManager === void 0 ? void 0 : cityManager.id,
      defaultChecked: cityManager === null || cityManager === void 0 ? void 0 : cityManager.value.split('|').includes(item === null || item === void 0 ? void 0 : item.value),
      onChange: function onChange(e) {
        return handleCheckBoxChange(e, true, cityManager === null || cityManager === void 0 ? void 0 : cityManager.value);
      }
    }), item.text)));
  })), !(cityManager !== null && cityManager !== void 0 && cityManager.options) && /*#__PURE__*/_react.default.createElement(_styles3.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value'))))), (settingsState === null || settingsState === void 0 ? void 0 : (_settingsState$change = settingsState.changes) === null || _settingsState$change === void 0 ? void 0 : _settingsState$change.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles3.SubmitBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleClickUpdate
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('SETTINGS', 'Settings'),
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

var EmailSetting = function EmailSetting(props) {
  var emailSettingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: EmailSettingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SettingsList, emailSettingProps);
};

exports.EmailSetting = EmailSetting;

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