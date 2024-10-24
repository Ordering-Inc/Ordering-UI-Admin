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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
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
var BusinessGprsPrinters = function BusinessGprsPrinters(props) {
  var businessGprsPrintersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessGprsPrintersUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessGprsPrinters, businessGprsPrintersProps);
};
exports.BusinessGprsPrinters = BusinessGprsPrinters;