"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCartsFilterGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BusinessesSelector = require("../BusinessesSelector");
var _CitySelector = require("../CitySelector");
var _DateTypeSelector = require("../DateTypeSelector");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
var _CustomerSelector = require("../CustomerSelector");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var OpenCartsFilterGroupUI = function OpenCartsFilterGroupUI(props) {
  var open = props.open,
    handleCloseFilterModal = props.handleCloseFilterModal,
    filterValues = props.filterValues,
    businessesList = props.businessesList,
    citiesList = props.citiesList,
    handleChangeDateRange = props.handleChangeDateRange,
    handleChangeBusinesses = props.handleChangeBusinesses,
    handleChangeCity = props.handleChangeCity,
    handleResetFilterValues = props.handleResetFilterValues,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleChangeCartId = props.handleChangeCartId,
    handleChangeCustomers = props.handleChangeCustomers;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var contentEndRef = (0, _react.useRef)();
  var handleAcceptFilter = function handleAcceptFilter() {
    handleChangeFilterValues(filterValues);
    handleCloseFilterModal();
  };
  var handleClearFilter = function handleClearFilter() {
    handleResetFilterValues();
    handleChangeFilterValues({});
  };
  var scrollDown = function scrollDown(e) {
    if (!e.target.closest('.ordering-calendar-btn')) return;
    var el = document.querySelector('.dialog-inner');
    if ((el === null || el === void 0 ? void 0 : el.scrollHeight) > (el === null || el === void 0 ? void 0 : el.clientHeight)) {
      var top = contentEndRef.current.offsetTop;
      el.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('click', scrollDown);
    return function () {
      return window.removeEventListener('click', scrollDown);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    title: t('FILTER', 'Filter'),
    width: "80%",
    padding: "30px",
    open: open,
    onClose: function onClose() {
      return handleCloseFilterModal();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.FilterGroupListContainer, {
    className: "filter-modal"
  }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "ID",
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.cartId) || '',
    onChange: function onChange(e) {
      return handleChangeCartId(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_BusinessesSelector.BusinessesSelector, {
    filterValues: filterValues,
    businessesList: businessesList,
    handleChangeBusinesses: handleChangeBusinesses
  }), /*#__PURE__*/_react.default.createElement(_CustomerSelector.CustomerSelector, {
    cartFilterValues: filterValues,
    handleChangeCustomers: handleChangeCustomers
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, {
    className: "city-filter"
  }, /*#__PURE__*/_react.default.createElement(_CitySelector.CitySelector, {
    cities: citiesList,
    filterValues: filterValues,
    handleChangeCity: handleChangeCity
  }), /*#__PURE__*/_react.default.createElement(_DateTypeSelector.DateTypeSelector, {
    handleChangeDateRange: handleChangeDateRange,
    filterValues: filterValues
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleAcceptFilter();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleClearFilter();
    }
  }, t('CLEAR', 'Clear')))), /*#__PURE__*/_react.default.createElement("div", {
    ref: contentEndRef
  }));
};
var OpenCartsFilterGroup = exports.OpenCartsFilterGroup = function OpenCartsFilterGroup(props) {
  var openCartFilterGroupProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OpenCartsFilterGroupUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OpenCartFilter, openCartFilterGroupProps);
};