"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryPickUp = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

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

var BusinessDeliveryPickUp = function BusinessDeliveryPickUp(props) {
  var business = props.business,
      formState = props.formState,
      setFormState = props.setFormState;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      hours = _useState2[0],
      setHours = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      minutes = _useState4[0],
      setMinutes = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      curDeliveryTime = _useState6[0],
      setCurDeliveryTime = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      curPickupTime = _useState8[0],
      setCurPickupTime = _useState8[1];

  var setTimeList = function setTimeList() {
    var _hours = [];
    var _minutes = [];

    for (var i = 0; i < 24; i++) {
      var _configState$configs, _configState$configs$;

      var text = (i < 10 ? '0' : ' ') + i;

      if (parseInt(configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.time_format) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value) !== 24) {
        if (i === 0) text = '12 ' + t('AM');else if (i === 12) text = '12 ' + t('PM');else if (i < 12) text = (i < 10 ? '0' : '') + i + ' ' + t('AM');else if (i < 24) text = (i - 12 < 10 ? '0' : '') + (i - 12) + ' ' + t('PM');
      }

      _hours.push({
        text: text,
        hour: i
      });
    }

    for (var _i2 = 0; _i2 < 60; _i2++) {
      var _text = (_i2 < 10 ? '0' : '') + _i2;

      _minutes.push({
        text: _text,
        minute: _i2
      });
    }

    setHours(_hours);
    setMinutes(_minutes);
  };

  var handleChangeDeliveryTime = function handleChangeDeliveryTime(evt) {
    var type = evt.target.name;
    var value = evt.target.value;
    setCurDeliveryTime(_objectSpread(_objectSpread({}, curDeliveryTime), {}, _defineProperty({}, type, value)));
    var deliveryTime = '';
    if (type === 'hour') deliveryTime = value + ':' + (curDeliveryTime === null || curDeliveryTime === void 0 ? void 0 : curDeliveryTime.minute);else deliveryTime = (curDeliveryTime === null || curDeliveryTime === void 0 ? void 0 : curDeliveryTime.hour) + ':' + value;
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        delivery_time: deliveryTime
      }
    }));
  };

  var handleChangePickupTime = function handleChangePickupTime(evt) {
    var type = evt.target.name;
    var value = evt.target.value;
    setCurPickupTime(_objectSpread(_objectSpread({}, curPickupTime), {}, _defineProperty({}, type, value)));
    var pickupTime = '';
    if (type === 'hour') pickupTime = value + ':' + (curPickupTime === null || curPickupTime === void 0 ? void 0 : curPickupTime.minute);else pickupTime = (curPickupTime === null || curPickupTime === void 0 ? void 0 : curPickupTime.hour) + ':' + value;
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        pickup_time: pickupTime
      }
    }));
  };

  (0, _react.useEffect)(function () {
    var _business$delivery_ti, _business$delivery_ti2, _business$pickup_time, _business$pickup_time2;

    setTimeList();
    setCurDeliveryTime({
      hour: business !== null && business !== void 0 && business.delivery_time ? (business === null || business === void 0 ? void 0 : (_business$delivery_ti = business.delivery_time) === null || _business$delivery_ti === void 0 ? void 0 : _business$delivery_ti.split(':')[0]) * 1 + '' : '0',
      minute: business !== null && business !== void 0 && business.delivery_time ? (business === null || business === void 0 ? void 0 : (_business$delivery_ti2 = business.delivery_time) === null || _business$delivery_ti2 === void 0 ? void 0 : _business$delivery_ti2.split(':')[1]) * 1 + '' : '0'
    });
    setCurPickupTime({
      hour: business !== null && business !== void 0 && business.pickup_time ? (business === null || business === void 0 ? void 0 : (_business$pickup_time = business.pickup_time) === null || _business$pickup_time === void 0 ? void 0 : _business$pickup_time.split(':')[0]) * 1 + '' : '0',
      minute: business !== null && business !== void 0 && business.pickup_time ? (business === null || business === void 0 ? void 0 : (_business$pickup_time2 = business.pickup_time) === null || _business$pickup_time2 === void 0 ? void 0 : _business$pickup_time2.split(':')[1]) * 1 + '' : '0'
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessDeliveryPickUpContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryTimeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('DELIVERY_TIME'), " (", t('HH_MM'), ")"), /*#__PURE__*/_react.default.createElement(_styles.TimeBlock, null, /*#__PURE__*/_react.default.createElement("select", {
    value: curDeliveryTime === null || curDeliveryTime === void 0 ? void 0 : curDeliveryTime.hour,
    name: "hour",
    onChange: handleChangeDeliveryTime
  }, hours === null || hours === void 0 ? void 0 : hours.map(function (hour, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: hour.hour,
      key: i
    }, hour.text);
  })), ":", /*#__PURE__*/_react.default.createElement("select", {
    value: curDeliveryTime === null || curDeliveryTime === void 0 ? void 0 : curDeliveryTime.minute,
    name: "minute",
    onChange: handleChangeDeliveryTime
  }, minutes === null || minutes === void 0 ? void 0 : minutes.map(function (minute, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: minute.minute,
      key: i
    }, minute.text);
  })))), /*#__PURE__*/_react.default.createElement(_styles.DeliveryTimeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('PICKUP_TIME'), " (", t('HH_MM'), ")"), /*#__PURE__*/_react.default.createElement(_styles.TimeBlock, null, /*#__PURE__*/_react.default.createElement("select", {
    value: curPickupTime === null || curPickupTime === void 0 ? void 0 : curPickupTime.hour,
    name: "hour",
    onChange: handleChangePickupTime
  }, hours === null || hours === void 0 ? void 0 : hours.map(function (hour, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: hour.hour,
      key: i
    }, hour.text);
  })), ":", /*#__PURE__*/_react.default.createElement("select", {
    value: curPickupTime === null || curPickupTime === void 0 ? void 0 : curPickupTime.minute,
    name: "minute",
    onChange: handleChangePickupTime
  }, minutes === null || minutes === void 0 ? void 0 : minutes.map(function (minute, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: minute.minute,
      key: i
    }, minute.text);
  })))));
};

exports.BusinessDeliveryPickUp = BusinessDeliveryPickUp;