"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsOrderTypeFilter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ReportsOrderTypeFilter = exports.ReportsOrderTypeFilter = function ReportsOrderTypeFilter(props) {
  var _configs$order_types_;
  var filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAllCheck = _useState2[0],
    setIsAllCheck = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    orderTypeIds = _useState4[0],
    setOrderTypeIds = _useState4[1];
  var configTypes = (configs === null || configs === void 0 || (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var defaultOrderTypes = [{
    value: 1,
    name: t('DELIVERY', 'Delivery'),
    enabled: true
  }, {
    value: 2,
    name: t('PICKUP', 'Pickup'),
    enabled: true
  }, {
    value: 3,
    name: t('EAT_IN', 'Eat in'),
    enabled: true
  }, {
    value: 4,
    name: t('CURBSIDE', 'Curbside'),
    enabled: true
  }, {
    value: 5,
    name: t('DRIVE_THRU', 'Drive thru'),
    enabled: true
  }];
  var _useState5 = (0, _react.useState)(defaultOrderTypes.filter(function (type) {
      return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
    })),
    _useState6 = _slicedToArray(_useState5, 2),
    orderTypes = _useState6[0],
    setOrderTypes = _useState6[1];
  var handleChangeAllCheck = function handleChangeAllCheck() {
    if (isAllCheck) {
      setOrderTypeIds(null);
    } else {
      var _orderTypeIds = [];
      var _iterator = _createForOfIteratorHelper(orderTypes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var type = _step.value;
          _orderTypeIds.push(type.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      setOrderTypeIds(_orderTypeIds);
    }
    setIsAllCheck(!isAllCheck);
  };
  var handleChangeOrderTypeId = function handleChangeOrderTypeId(id) {
    var found = orderTypeIds === null || orderTypeIds === void 0 ? void 0 : orderTypeIds.find(function (typeId) {
      return typeId === id;
    });
    if (found) {
      var _orderTypeIds = orderTypeIds === null || orderTypeIds === void 0 ? void 0 : orderTypeIds.filter(function (orderTypeId) {
        return orderTypeId !== id;
      });
      setOrderTypeIds(_orderTypeIds);
      setIsAllCheck(false);
    } else {
      var _orderTypeIds2 = orderTypeIds ? _toConsumableArray(orderTypeIds) : [];
      _orderTypeIds2.push(id);
      if (_orderTypeIds2.length === orderTypes.length) setIsAllCheck(true);
      setOrderTypeIds(_orderTypeIds2);
    }
  };
  var isCheckEnableSate = function isCheckEnableSate(id) {
    var found = orderTypeIds === null || orderTypeIds === void 0 ? void 0 : orderTypeIds.find(function (typeId) {
      return typeId === id;
    });
    var valid = false;
    if (found) {
      valid = true;
    }
    return valid;
  };
  var handleClickFilterButton = function handleClickFilterButton() {
    var _orderTypeIds = orderTypeIds ? _toConsumableArray(orderTypeIds) : null;
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      delivery_types_ids: _orderTypeIds
    }));
    onClose && onClose();
  };
  (0, _react.useEffect)(function () {
    var _filterList$delivery_;
    var _orderTypeIds = orderTypes === null || orderTypes === void 0 ? void 0 : orderTypes.reduce(function (prev, cur) {
      return [].concat(_toConsumableArray(prev), [cur.value]);
    }, []);
    setOrderTypeIds(_toConsumableArray((filterList === null || filterList === void 0 ? void 0 : filterList.delivery_types_ids) || _orderTypeIds));
    if (!(filterList !== null && filterList !== void 0 && filterList.delivery_types_ids) || (filterList === null || filterList === void 0 || (_filterList$delivery_ = filterList.delivery_types_ids) === null || _filterList$delivery_ === void 0 ? void 0 : _filterList$delivery_.length) === orderTypes.length) setIsAllCheck(true);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderTypeFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderTypeFilterOption, {
    onClick: handleChangeAllCheck
  }, isAllCheck ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles2.OrderTypeName, null, t('ALL', 'All'))), orderTypes.map(function (type, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.OrderTypeFilterOption, {
      key: i,
      onClick: function onClick() {
        return handleChangeOrderTypeId(type === null || type === void 0 ? void 0 : type.value);
      }
    }, isCheckEnableSate(type.value) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles2.OrderTypeName, null, type === null || type === void 0 ? void 0 : type.name));
  })), /*#__PURE__*/_react.default.createElement(_styles2.FilterBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    onClick: handleClickFilterButton
  }, t('FILTER', 'Filter'))));
};