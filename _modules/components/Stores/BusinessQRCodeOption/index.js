"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessQRCodeOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactQrCode = _interopRequireDefault(require("react-qr-code"));
var _reactToPrint = _interopRequireDefault(require("react-to-print"));
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessQRCodeOption = function BusinessQRCodeOption(props) {
  var open = props.open,
    item = props.item,
    business = props.business,
    onClose = props.onClose,
    siteState = props.siteState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    code = _useState6[0],
    setCode = _useState6[1];
  var numberRef = (0, _react.useRef)(null);
  var printerRef = (0, _react.useRef)();
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var generateQRCode = function generateQRCode() {
    var _numberRef$current, _siteState$site, _siteState$site2, _siteState$site3, _numberRef$current2, _numberRef$current3;
    var errors = [];
    if ((item === null || item === void 0 ? void 0 : item.key) !== 'pick_up' && !(numberRef !== null && numberRef !== void 0 && (_numberRef$current = numberRef.current) !== null && _numberRef$current !== void 0 && _numberRef$current.value)) {
      errors.push((item === null || item === void 0 ? void 0 : item.key) === 'eat_in' ? t('VALIDATION_ERROR_REQUIRED', 'Table number is required').replace('_attribute_', t('TABLE_NUMBER', 'Table number')) : t('VALIDATION_ERROR_REQUIRED', 'Spot number is required').replace('_attribute_', t('SPOT_NUMBER', 'Spot number')));
    }
    if (errors.length > 0) {
      setAlertState({
        open: true,
        content: errors
      });
      return;
    }
    var storeUrl = siteState !== null && siteState !== void 0 && (_siteState$site = siteState.site) !== null && _siteState$site !== void 0 && _siteState$site.domain && (siteState === null || siteState === void 0 ? void 0 : (_siteState$site2 = siteState.site) === null || _siteState$site2 === void 0 ? void 0 : _siteState$site2.ssl_process_status) === 'ended' ? "https://".concat(siteState === null || siteState === void 0 ? void 0 : (_siteState$site3 = siteState.site) === null || _siteState$site3 === void 0 ? void 0 : _siteState$site3.domain, "/store/").concat(business === null || business === void 0 ? void 0 : business.slug) : "https://".concat(ordering.project, ".tryordering.com/store/").concat(business === null || business === void 0 ? void 0 : business.slug);
    var tsNumber = (item === null || item === void 0 ? void 0 : item.key) !== 'pick_up' ? (item === null || item === void 0 ? void 0 : item.key) === 'eat_in' ? "&table_number=".concat(numberRef === null || numberRef === void 0 ? void 0 : (_numberRef$current2 = numberRef.current) === null || _numberRef$current2 === void 0 ? void 0 : _numberRef$current2.value) : "&spot_number=".concat(numberRef === null || numberRef === void 0 ? void 0 : (_numberRef$current3 = numberRef.current) === null || _numberRef$current3 === void 0 ? void 0 : _numberRef$current3.value) : '';
    var compltedUrl = "".concat(storeUrl, "?order_type=").concat(item.value).concat(tsNumber);
    setCode(compltedUrl);
  };
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      onClose && onClose();
    }
    setIsMenuOpen(value);
    document.getElementById('qrOption').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('qrOption').style.width = '100%';
      } else {
        document.getElementById('qrOption').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    setCode(null);
    if (numberRef !== null && numberRef !== void 0 && numberRef.current) {
      numberRef.current.value = '';
    }
  }, [item]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "qrOption"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/_react.default.createElement("h1", null, item === null || item === void 0 ? void 0 : item.title), /*#__PURE__*/_react.default.createElement(_styles2.CloseButton, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.X, {
    onClick: function onClick() {
      return onClose && onClose();
    }
  }))), code && /*#__PURE__*/_react.default.createElement(_styles2.QRCodeLayout, {
    ref: printerRef
  }, /*#__PURE__*/_react.default.createElement(_reactQrCode.default, {
    size: 256,
    style: {
      height: 'auto',
      maxWidth: '100%',
      width: '100%'
    },
    value: code,
    viewBox: "0 0 256 256"
  })), (item === null || item === void 0 ? void 0 : item.key) === 'pick_up' ? /*#__PURE__*/_react.default.createElement("h4", null, t('GENERATE_QR_CODE', 'Generate QR Code')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (item === null || item === void 0 ? void 0 : item.key) === 'eat_in' && code && /*#__PURE__*/_react.default.createElement(_styles2.TableNumberHintText, null, t('TO_GENERATE_NEW_QR_CODE_UPDATE_TABLE_NUMBER', 'To generate new QR codes, update the table number and regenerate the code.')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, (item === null || item === void 0 ? void 0 : item.key) === 'eat_in' ? t('TABLE_NUMBER', 'Table number') : t('SPOT_NUMBER', 'Spot number')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "0",
    ref: numberRef,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    onClick: generateQRCode
  }, t('GENERATE_CODE', 'Generate Code')), /*#__PURE__*/_react.default.createElement(_reactToPrint.default, {
    trigger: function trigger() {
      return /*#__PURE__*/_react.default.createElement(_styles.Button, {
        color: "primary",
        disabled: !code
      }, t('PRINT', 'Print'));
    },
    content: function content() {
      return printerRef.current;
    },
    removeAfterPrint: true
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERING', 'Ordering'),
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
exports.BusinessQRCodeOption = BusinessQRCodeOption;