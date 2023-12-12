"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersHeaderFilterGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _DriversGroupTypeSelector = require("../DriversGroupTypeSelector");
var _DriverMultiSelector = require("../DriverMultiSelector");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var OrdersHeaderFilterGroupUI = function OrdersHeaderFilterGroupUI(props) {
  var _configs$filter_order;
  var filterValues = props.filterValues,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    handleChangeDriver = props.handleChangeDriver,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleChangeExternalId = props.handleChangeExternalId,
    handleChangeGroupUnassigned = props.handleChangeGroupUnassigned;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShow = _useState2[0],
    setIsShow = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    filterApplied = _useState4[0],
    setFilterApplied = _useState4[1];
  var metafieldRef = (0, _react.useRef)();
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var configFilter = (configs === null || configs === void 0 || (_configs$filter_order = configs.filter_order_options) === null || _configs$filter_order === void 0 ? void 0 : _configs$filter_order.value.split('|').map(function (value) {
    return value;
  })) || [];
  var handleClickOutside = function handleClickOutside(e) {
    var _metafieldRef$current;
    if (!isShow) return;
    var outsideCalendar = !((_metafieldRef$current = metafieldRef.current) !== null && _metafieldRef$current !== void 0 && _metafieldRef$current.contains(e.target));
    if (outsideCalendar) {
      setIsShow(false);
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isShow]);
  (0, _react.useEffect)(function () {
    var _filterApplied = false;
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false;
    } else {
      Object.values(filterValues).forEach(function (value) {
        if (Array.isArray(value)) {
          if (value.length > 0) _filterApplied = true;
        } else {
          if (value) _filterApplied = true;
        }
      });
      handleChangeFilterValues(filterValues);
    }
    setFilterApplied(_filterApplied);
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, configFilter.includes('external_id') && /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('EXTERNAL_ID', 'External Id'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId) || '',
    onChange: handleChangeExternalId
  }), configFilter.includes('driver') && /*#__PURE__*/_react.default.createElement(_DriverMultiSelector.DriverMultiSelector, {
    drivers: driversList.drivers,
    filterValues: filterValues,
    handleChangeDriver: handleChangeDriver
  }), configFilter.includes('driver_group_general') && /*#__PURE__*/_react.default.createElement(_DriversGroupTypeSelector.DriversGroupTypeSelector, {
    driverGroupList: driverGroupList,
    handleChangeGroup: handleChangeGroupUnassigned,
    filterValues: filterValues.groupTypesUnassigned,
    title: t('DRIVER_GROUP_NOT_ASSIGNED', 'Driver group (general)')
  })));
};
var OrdersHeaderFilterGroup = function OrdersHeaderFilterGroup(props) {
  var FilterControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersHeaderFilterGroupUI,
    driverGroupList: props.driverGroupList
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrdersFilter, FilterControlProps));
};
exports.OrdersHeaderFilterGroup = OrdersHeaderFilterGroup;