"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
        content: spreadSheetState === null || spreadSheetState === void 0 ? void 0 : (_spreadSheetState$res2 = spreadSheetState.result) === null || _spreadSheetState$res2 === void 0 ? void 0 : _spreadSheetState$res2.result
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