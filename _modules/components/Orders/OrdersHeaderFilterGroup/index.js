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
var _FilterValuesContext = require("../../../contexts/FilterValuesContext");
var _Shared = require("../../Shared");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrdersHeaderFilterGroupUI = function OrdersHeaderFilterGroupUI(props) {
  var _configs$filter_order, _dictionary$EXTERNAL_, _dictionary$DRIVER_GR;
  var filterValues = props.filterValues,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    handleChangeDriver = props.handleChangeDriver,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleChangeExternalId = props.handleChangeExternalId,
    handleChangeGroup = props.handleChangeGroup,
    isSelectedOrders = props.isSelectedOrders,
    disableDriverLocationsSockets = props.disableDriverLocationsSockets;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 1),
    dictionary = _useLanguage2[0].dictionary;
  var wrapperRef = (0, _react.useRef)(null);
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    _useConfig2$ = _useConfig2[0],
    configs = _useConfig2$.configs,
    loading = _useConfig2$.loading;
  var _useState = (0, _react.useState)({
      width: null,
      height: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    wrapperSize = _useState2[0],
    setWrapperSize = _useState2[1];
  var configFilter = (configs === null || configs === void 0 || (_configs$filter_order = configs.filter_order_options) === null || _configs$filter_order === void 0 ? void 0 : _configs$filter_order.value.split('|').map(function (value) {
    return value;
  })) || [];
  (0, _react.useEffect)(function () {
    var handleResize = function handleResize() {
      if (wrapperRef !== null && wrapperRef !== void 0 && wrapperRef.current) {
        var _wrapperRef$current, _wrapperRef$current2;
        var divWidth = wrapperRef === null || wrapperRef === void 0 || (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.offsetWidth;
        var divHeight = wrapperRef === null || wrapperRef === void 0 || (_wrapperRef$current2 = wrapperRef.current) === null || _wrapperRef$current2 === void 0 ? void 0 : _wrapperRef$current2.offsetHeight;
        setWrapperSize({
          width: divWidth,
          height: divHeight
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (Object.keys(filterValues).length > 0) {
      handleChangeFilterValues(filterValues);
    }
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, {
    ref: wrapperRef,
    wrapperWidth: wrapperSize.width,
    isSelectedOrders: isSelectedOrders
  }, !loading && configFilter.includes('external_id') && /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    placeholder: (_dictionary$EXTERNAL_ = dictionary === null || dictionary === void 0 ? void 0 : dictionary.EXTERNAL_ID) !== null && _dictionary$EXTERNAL_ !== void 0 ? _dictionary$EXTERNAL_ : 'External Id',
    onChange: handleChangeExternalId,
    search: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId) || '',
    isCustomLayout: true,
    hideSearchIcon: true,
    lazyLoad: true,
    CustomInput: _styles.Input,
    onSearch: function onSearch(value) {
      return handleChangeExternalId({
        target: {
          value: value
        }
      });
    },
    customClass: "external_id"
  }), !loading && configFilter.includes('driver') && /*#__PURE__*/_react.default.createElement(_DriverMultiSelector.DriverMultiSelector, {
    useDriversByProps: true,
    drivers: driversList.drivers,
    filterValues: filterValues,
    handleChangeDriver: handleChangeDriver,
    disableDriverLocationsSockets: disableDriverLocationsSockets
  }), !loading && configFilter.includes('driver_group') && /*#__PURE__*/_react.default.createElement(_DriversGroupTypeSelector.DriversGroupTypeSelector, {
    driverGroupList: driverGroupList,
    handleChangeGroup: handleChangeGroup,
    filterValues: filterValues.driverGroupBusinessIds,
    title: (_dictionary$DRIVER_GR = dictionary === null || dictionary === void 0 ? void 0 : dictionary.DRIVER_GROUP_ASSIGNED) !== null && _dictionary$DRIVER_GR !== void 0 ? _dictionary$DRIVER_GR : 'Driver group (assigned)'
  })));
};
var OrdersHeaderFilterGroup = exports.OrdersHeaderFilterGroup = function OrdersHeaderFilterGroup(props) {
  var _useFilterValues = (0, _FilterValuesContext.useFilterValues)(),
    _useFilterValues2 = _slicedToArray(_useFilterValues, 2),
    filterValues = _useFilterValues2[0],
    handleFilterValues = _useFilterValues2[1].handleFilterValues;
  var FilterControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersHeaderFilterGroupUI,
    driverGroupList: props.driverGroupList,
    filterValues: filterValues,
    setFilterValues: handleFilterValues
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrdersFilter, FilterControlProps));
};