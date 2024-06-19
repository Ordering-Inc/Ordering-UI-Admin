"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessFilterGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var BusinessFilterGroupUI = function BusinessFilterGroupUI(props) {
  var filterValues = props.filterValues,
    handleChangeValue = props.handleChangeValue,
    handleChangeCity = props.handleChangeCity,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleResetFilterValues = props.handleResetFilterValues,
    isFilterModal = props.isFilterModal,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];

  // const conditions = [
  //   { value: '>', content: <Option>{'>'}</Option> },
  //   { value: '=', content: <Option>=</Option> },
  //   { value: '<', content: <Option>{'<'}</Option> },
  //   { value: '>=', content: <Option>{'>='}</Option> },
  //   { value: '<=', content: <Option>{'<='}</Option> }
  // ]

  var enableOptions = [{
    value: true,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('YES', 'Yes'))
  }, {
    value: false,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('NO', 'No'))
  }];
  var handleAcceptFilter = function handleAcceptFilter() {
    handleChangeFilterValues(_objectSpread({}, filterValues));
    onClose();
  };
  var handleClearFilter = function handleClearFilter() {
    handleResetFilterValues();
    handleChangeFilterValues({});
  };
  return /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    title: t('FILTER', 'Filter'),
    width: "80%",
    padding: "30px",
    open: isFilterModal,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('NAME', 'Name'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.name) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        name: e.target.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXTERNAL_ID', 'External id')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('EXTERNAL_ID', 'External id'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        externalId: e.target.value
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('FEATURED', 'FEATURED')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.featured,
    options: enableOptions,
    onChange: function onChange(val) {
      return handleChangeValue({
        featured: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('CITY', 'City')), /*#__PURE__*/_react.default.createElement(_Shared.CitySelector, {
    filterValues: filterValues,
    handleChangeCity: handleChangeCity
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
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
  }, t('CLEAR', 'Clear')))));
};
var BusinessFilterGroup = exports.BusinessFilterGroup = function BusinessFilterGroup(props) {
  var businessFilterGroupProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessFilterGroupUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessFilter, businessFilterGroupProps);
};