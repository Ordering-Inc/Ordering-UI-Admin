"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSpreadSheet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessSpreadSheetUI = function BusinessSpreadSheetUI(props) {
  var handleItemChange = props.handleItemChange,
    spreadSheetState = props.spreadSheetState,
    handleRowRemove = props.handleRowRemove,
    handleAfterSectionEnd = props.handleAfterSectionEnd,
    handleoutsideClickDeselects = props.handleoutsideClickDeselects,
    allowSpreadColumns = props.allowSpreadColumns;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    hiddenColumns = _useState4[0],
    setHiddenColumns = _useState4[1];
  var spreadSheetHeaderItems = [{
    title: t('ID', 'Id'),
    code: 'id',
    readOnly: true,
    type: 'numeric'
  }, {
    title: t('NAME', 'Name'),
    code: 'name',
    readOnly: false,
    type: 'text',
    editor: false
  }, {
    title: t('DESCRIPTION', 'Description'),
    code: 'description',
    readOnly: false,
    type: 'text'
  }, {
    title: t('PRICE', 'Price'),
    code: 'price',
    readOnly: false,
    type: 'numeric'
  }, {
    title: t('PRODUCT_COST', 'Product cost'),
    code: 'cost_price',
    readOnly: false,
    type: 'numeric'
  }, {
    title: t('INVENTORY', 'Inventory'),
    code: 'inventoried',
    readOnly: false,
    type: 'checkbox'
  }, {
    title: t('QUANTITY', 'Quantity'),
    code: 'quantity',
    readOnly: false,
    type: 'numeric'
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    var _spreadSheetState$res;
    if (spreadSheetState !== null && spreadSheetState !== void 0 && (_spreadSheetState$res = spreadSheetState.result) !== null && _spreadSheetState$res !== void 0 && _spreadSheetState$res.error) {
      var _spreadSheetState$res2;
      setAlertState({
        open: true,
        content: spreadSheetState === null || spreadSheetState === void 0 || (_spreadSheetState$res2 = spreadSheetState.result) === null || _spreadSheetState$res2 === void 0 ? void 0 : _spreadSheetState$res2.result
      });
    }
  }, [spreadSheetState === null || spreadSheetState === void 0 ? void 0 : spreadSheetState.result]);
  (0, _react.useEffect)(function () {
    var index = 0;
    var _hiddenColumns = [];
    for (var key in allowSpreadColumns) {
      if (!allowSpreadColumns[key]) {
        _hiddenColumns.push(index);
      }
      index++;
    }
    setHiddenColumns(_hiddenColumns);
  }, [allowSpreadColumns]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessSpreadSheetContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.SpreadSheetEditor, _extends({}, props, {
    isBusinessProducts: true,
    hotTableData: spreadSheetState.products,
    headerItems: spreadSheetHeaderItems,
    handleItemChange: handleItemChange,
    handleRowRemove: handleRowRemove,
    handleAfterSectionEnd: handleAfterSectionEnd,
    handleoutsideClickDeselects: handleoutsideClickDeselects,
    hiddenColumns: hiddenColumns,
    isRemove: true
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "700px",
    title: t('PRODUCT EDIT', 'Product Edit'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var BusinessSpreadSheet = function BusinessSpreadSheet(props) {
  var businessSpreadSheetProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessSpreadSheetUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessSpreadSheet, businessSpreadSheetProps);
};
exports.BusinessSpreadSheet = BusinessSpreadSheet;