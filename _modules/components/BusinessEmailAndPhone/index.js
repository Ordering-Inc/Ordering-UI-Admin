"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessEmailAndPhone = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Inputs = require("../../styles/Inputs");

var _Confirm = require("../Confirm");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessEmailAndPhone = function BusinessEmailAndPhone(props) {
  var _business$email, _business$phone, _business$cellphone;

  var business = props.business,
      setFormState = props.setFormState,
      formState = props.formState;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    open: false,
    content: [],
    success: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var saveEmailOrders = function saveEmailOrders(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim() === '' || !re.test(email)) return;
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        email: email
      }
    }));
  };

  var saveBusinessTel = function saveBusinessTel(phone) {
    if (phone.trim() === '') {
      setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: true,
        content: [t('PHONE_REQUIRED')]
      }));
      return;
    }

    if (phone.length >= 7) {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          phone: phone
        }
      }));
    }
  };

  var saveBusinessCel = function saveBusinessCel(cellphone) {
    if (cellphone.length >= 10 || cellphone.length === 0) {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          cellphone: cellphone || ''
        }
      }));
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
      open: false,
      content: []
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessEmailAndPhoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('EMAIL_RECEIVE_ORDERS')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    defaultValue: (_business$email = business === null || business === void 0 ? void 0 : business.email) !== null && _business$email !== void 0 ? _business$email : '',
    placeholder: t('EMAIL_RECEIVE_ORDERS'),
    onChange: function onChange(e) {
      return saveEmailOrders(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('PHONE_NUMBER')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    defaultValue: (_business$phone = business === null || business === void 0 ? void 0 : business.phone) !== null && _business$phone !== void 0 ? _business$phone : '',
    placeholder: t('PHONE_NUMBER'),
    onChange: function onChange(e) {
      return saveBusinessTel(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('MOBILE_NUMBER'), " (", t('OPTIONAL'), ")"), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    defaultValue: (_business$cellphone = business === null || business === void 0 ? void 0 : business.cellphone) !== null && _business$cellphone !== void 0 ? _business$cellphone : '',
    placeholder: t('MOBILE_NUMBER'),
    onChange: function onChange(e) {
      return saveBusinessCel(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('ORDERS_APP_PUSH')), /*#__PURE__*/_react.default.createElement("span", {
    className: "info"
  }, t('ORDERS_APP_PUSH_DESC')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('EMAILS_AND_PHONES', 'Emails and phones'),
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

exports.BusinessEmailAndPhone = BusinessEmailAndPhone;