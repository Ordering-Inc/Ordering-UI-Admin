"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

    if ((printersListState === null || printersListState === void 0 ? void 0 : (_printersListState$pr = printersListState.printers) === null || _printersListState$pr === void 0 ? void 0 : _printersListState$pr.length) === 0) return;
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