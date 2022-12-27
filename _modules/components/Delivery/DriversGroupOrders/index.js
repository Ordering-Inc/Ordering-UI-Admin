"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupOrders = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversGroupOrdersUI = function DriversGroupOrdersUI(props) {
  var _changesState$orders_, _maxTimeBetweenOrder$, _maxTimeBetweenOrder$2, _maxTimeBetweenOrder$3, _theme$images, _theme$images$icons, _ref, _changesState$orders_2, _theme$images2, _theme$images2$icons, _ref2, _changesState$orders_3, _changesState$orders_4, _theme$images3, _theme$images3$icons, _maxTimeBetweenBusine, _maxTimeBetweenBusine2, _maxTimeBetweenBusine3, _theme$images4, _theme$images4$icons, _maxTimeBetweenDelive, _maxTimeBetweenDelive2, _maxTimeBetweenDelive3;
  var curDriversGroup = props.curDriversGroup,
    changesState = props.changesState,
    handleChangesState = props.handleChangesState,
    maxTimeBetweenOrder = props.maxTimeBetweenOrder,
    maxTimeBetweenBusiness = props.maxTimeBetweenBusiness,
    maxTimeBetweenDelivery = props.maxTimeBetweenDelivery,
    handleChangeMaxTimeBetweenOrder = props.handleChangeMaxTimeBetweenOrder,
    handleChangeMaxTimeBetweenBusiness = props.handleChangeMaxTimeBetweenBusiness,
    handleChangeMaxTimeBetweenDelivery = props.handleChangeMaxTimeBetweenDelivery,
    onChangeNumberInput = props.onChangeNumberInput;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles2.GroupOrdersContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('GROUP_ORDERS', 'Group orders')), /*#__PURE__*/_react.default.createElement(_styles2.FieldWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAX_NUMBER_ORDERS', 'Maxiumum number of orders')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_changesState$orders_ = changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_max_orders) !== null && _changesState$orders_ !== void 0 ? _changesState$orders_ : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_orders,
    onChange: function onChange(e) {
      return onChangeNumberInput('orders_group_max_orders', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAX_TIME_BETWEEN_ORDER', 'Maxiumum time between orders')), /*#__PURE__*/_react.default.createElement(_styles2.MaxTimeInputsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_maxTimeBetweenOrder$ = maxTimeBetweenOrder === null || maxTimeBetweenOrder === void 0 ? void 0 : maxTimeBetweenOrder.hour) !== null && _maxTimeBetweenOrder$ !== void 0 ? _maxTimeBetweenOrder$ : '',
    onChange: function onChange(e) {
      return handleChangeMaxTimeBetweenOrder(e.target.value, 'hour');
    }
  }), /*#__PURE__*/_react.default.createElement("strong", null, "\u205A"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_maxTimeBetweenOrder$2 = maxTimeBetweenOrder === null || maxTimeBetweenOrder === void 0 ? void 0 : maxTimeBetweenOrder.minute) !== null && _maxTimeBetweenOrder$2 !== void 0 ? _maxTimeBetweenOrder$2 : '',
    onChange: function onChange(e) {
      return handleChangeMaxTimeBetweenOrder(e.target.value, 'minute');
    },
    maxlength: "2"
  }), /*#__PURE__*/_react.default.createElement("strong", null, "\u205A"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_maxTimeBetweenOrder$3 = maxTimeBetweenOrder === null || maxTimeBetweenOrder === void 0 ? void 0 : maxTimeBetweenOrder.second) !== null && _maxTimeBetweenOrder$3 !== void 0 ? _maxTimeBetweenOrder$3 : '',
    onChange: function onChange(e) {
      return handleChangeMaxTimeBetweenOrder(e.target.value, 'second');
    },
    maxlength: "2"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FieldWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maxiumum distance between businesses in meters')), /*#__PURE__*/_react.default.createElement(_styles2.MaxTimeBusinessInputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.IconImage, {
    url: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$icons = _theme$images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.shopToShop
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_ref = (_changesState$orders_2 = changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_max_distance_between_pickup) !== null && _changesState$orders_2 !== void 0 ? _changesState$orders_2 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_distance_between_pickup) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return onChangeNumberInput('orders_group_max_distance_between_pickup', e.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FieldWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maxiumum distance between deliveries in meters')), /*#__PURE__*/_react.default.createElement(_styles2.MaxTimeBusinessInputContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.IconImage, {
    url: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$icons = _theme$images2.icons) === null || _theme$images2$icons === void 0 ? void 0 : _theme$images2$icons.homeToHome
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_ref2 = (_changesState$orders_3 = changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_max_distance_between_delivery) !== null && _changesState$orders_3 !== void 0 ? _changesState$orders_3 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_distance_between_delivery) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return onChangeNumberInput('orders_group_max_distance_between_delivery', e.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FieldWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.UseMapsApiCheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: (_changesState$orders_4 = changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_use_maps_api) !== null && _changesState$orders_4 !== void 0 ? _changesState$orders_4 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_use_maps_api,
    onChange: function onChange(e) {
      return handleChangesState({
        orders_group_use_maps_api: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.MapsApiDescriptionContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('USE_MAPS_API', 'Use maps api')), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('GOOGLE_MAPS_EXTRA_COST', 'Using this, generates extra charges on yout Google Maps usage.')), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://console.cloud.google.com/home/dashboard",
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('GO_TO_GOOGLE_CONSOLE', 'Go to Google Console')))))), ((changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_use_maps_api) || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.orders_group_use_maps_api) === 'undefined' && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_use_maps_api)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FieldWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAX_TIME_BETWEEN_PICKUP', 'Maximum time between pickup points in seconds')), /*#__PURE__*/_react.default.createElement(_styles2.FieldRowContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.IconImage, {
    url: (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$icons = _theme$images3.icons) === null || _theme$images3$icons === void 0 ? void 0 : _theme$images3$icons.shopToShop
  }), /*#__PURE__*/_react.default.createElement(_styles2.MaxTimeInputsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_maxTimeBetweenBusine = maxTimeBetweenBusiness === null || maxTimeBetweenBusiness === void 0 ? void 0 : maxTimeBetweenBusiness.hour) !== null && _maxTimeBetweenBusine !== void 0 ? _maxTimeBetweenBusine : '',
    onChange: function onChange(e) {
      return handleChangeMaxTimeBetweenBusiness(e.target.value, 'hour');
    }
  }), /*#__PURE__*/_react.default.createElement("strong", null, "\u205A"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_maxTimeBetweenBusine2 = maxTimeBetweenBusiness === null || maxTimeBetweenBusiness === void 0 ? void 0 : maxTimeBetweenBusiness.minute) !== null && _maxTimeBetweenBusine2 !== void 0 ? _maxTimeBetweenBusine2 : '',
    onChange: function onChange(e) {
      return handleChangeMaxTimeBetweenBusiness(e.target.value, 'minute');
    },
    maxlength: "2"
  }), /*#__PURE__*/_react.default.createElement("strong", null, "\u205A"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_maxTimeBetweenBusine3 = maxTimeBetweenBusiness === null || maxTimeBetweenBusiness === void 0 ? void 0 : maxTimeBetweenBusiness.second) !== null && _maxTimeBetweenBusine3 !== void 0 ? _maxTimeBetweenBusine3 : '',
    onChange: function onChange(e) {
      return handleChangeMaxTimeBetweenBusiness(e.target.value, 'second');
    },
    maxlength: "2"
  })))), /*#__PURE__*/_react.default.createElement(_styles2.FieldWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAX_TIME_BETWEEN_DELIVERY', 'Maximum time between delivery points in seconds')), /*#__PURE__*/_react.default.createElement(_styles2.FieldRowContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.IconImage, {
    url: (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$icons = _theme$images4.icons) === null || _theme$images4$icons === void 0 ? void 0 : _theme$images4$icons.homeToHome
  }), /*#__PURE__*/_react.default.createElement(_styles2.MaxTimeInputsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_maxTimeBetweenDelive = maxTimeBetweenDelivery === null || maxTimeBetweenDelivery === void 0 ? void 0 : maxTimeBetweenDelivery.hour) !== null && _maxTimeBetweenDelive !== void 0 ? _maxTimeBetweenDelive : '',
    onChange: function onChange(e) {
      return handleChangeMaxTimeBetweenDelivery(e.target.value, 'hour');
    }
  }), /*#__PURE__*/_react.default.createElement("strong", null, "\u205A"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_maxTimeBetweenDelive2 = maxTimeBetweenDelivery === null || maxTimeBetweenDelivery === void 0 ? void 0 : maxTimeBetweenDelivery.minute) !== null && _maxTimeBetweenDelive2 !== void 0 ? _maxTimeBetweenDelive2 : '',
    onChange: function onChange(e) {
      return handleChangeMaxTimeBetweenDelivery(e.target.value, 'minute');
    },
    maxlength: "2"
  }), /*#__PURE__*/_react.default.createElement("strong", null, "\u205A"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_maxTimeBetweenDelive3 = maxTimeBetweenDelivery === null || maxTimeBetweenDelivery === void 0 ? void 0 : maxTimeBetweenDelivery.second) !== null && _maxTimeBetweenDelive3 !== void 0 ? _maxTimeBetweenDelive3 : '',
    onChange: function onChange(e) {
      return handleChangeMaxTimeBetweenDelivery(e.target.value, 'second');
    },
    maxlength: "2"
  }))))));
};
var DriversGroupOrders = function DriversGroupOrders(props) {
  var drivesGroupOrdersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriversGroupOrdersUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupOrders, drivesGroupOrdersProps);
};
exports.DriversGroupOrders = DriversGroupOrders;