"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessGprsPrinters = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Select = require("../../../styles/Select");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
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
var BusinessGprsPrintersUI = function BusinessGprsPrintersUI(props) {
  var _business$printer_id;
  var business = props.business,
    formState = props.formState,
    setFormState = props.setFormState,
    printersListState = props.printersListState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    printers = _useState2[0],
    setPrinters = _useState2[1];
  var filePath = "".concat(ordering.root.replace('https', 'http'), "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/queue.txt");
  var filePathConfirm = "".concat(ordering.root.replace('https', 'http'), "/business/").concat(business === null || business === void 0 ? void 0 : business.id, "/queue/confirm");
  var changePrinter = function changePrinter(name, value) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _defineProperty({}, name, value)
    }));
  };
  (0, _react.useEffect)(function () {
    var _printersListState$pr;
    if ((printersListState === null || printersListState === void 0 || (_printersListState$pr = printersListState.printers) === null || _printersListState$pr === void 0 ? void 0 : _printersListState$pr.length) === 0) return;
    var _printers = [];
    var _iterator = _createForOfIteratorHelper(printersListState === null || printersListState === void 0 ? void 0 : printersListState.printers),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var printer = _step.value;
        _printers.push({
          value: printer.id,
          content: printer.model
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    setPrinters(_printers);
  }, [printersListState === null || printersListState === void 0 ? void 0 : printersListState.printers]);
  return /*#__PURE__*/_react.default.createElement(_styles2.BusinessGprsPrintersContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('GPRS_PRINTERS', 'Gprs printers')), /*#__PURE__*/_react.default.createElement(_styles2.SwitchboxWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('ACCEPT_GPRS_PRINTER', 'Accept GPRS printer')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: business === null || business === void 0 ? void 0 : business.use_printer,
    onChange: function onChange(checked) {
      return changePrinter('use_printer', checked);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('PRINTER_MODEL', 'Printer model')), (printersListState === null || printersListState === void 0 ? void 0 : printersListState.loading) && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null), !(printersListState !== null && printersListState !== void 0 && printersListState.loading) && (printers === null || printers === void 0 ? void 0 : printers.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: (_business$printer_id = business === null || business === void 0 ? void 0 : business.printer_id) !== null && _business$printer_id !== void 0 ? _business$printer_id : '',
    options: printers,
    onChange: function onChange(value) {
      return changePrinter('printer_id', value);
    },
    placeholder: t('SELECT_PRINTER'),
    notAsync: true
  }))), (business === null || business === void 0 ? void 0 : business.printer_id) && (business === null || business === void 0 ? void 0 : business.use_printer) && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('GPRS_QUEUE_PATH')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    type: "text",
    defaultValue: filePath,
    placeholder: t('GPRS_QUEUE_PATH'),
    readOnly: true
  })), (business === null || business === void 0 ? void 0 : business.printer_id) && (business === null || business === void 0 ? void 0 : business.use_printer) && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('GPRS_QUEUE_PATH_CONFIRM')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    type: "text",
    defaultValue: filePathConfirm,
    placeholder: t('GPRS_QUEUE_PATH_CONFIRM'),
    readOnly: true
  })));
};
var BusinessGprsPrinters = exports.BusinessGprsPrinters = function BusinessGprsPrinters(props) {
  var businessGprsPrintersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessGprsPrintersUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessGprsPrinters, businessGprsPrintersProps);
};