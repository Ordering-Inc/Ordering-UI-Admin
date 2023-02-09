"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReceiveOrders = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReceiveOrders = function ReceiveOrders(props) {
  var _formState$changes$em, _formState$changes;
  var formState = props.formState,
    handleChangeInput = props.handleChangeInput;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles2.ReceiveOrdersContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('RECEIVE_ORDERS', 'Receive orders')), /*#__PURE__*/_react.default.createElement(_styles2.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('BY_EMAIL', 'By Email')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "email",
    defaultValue: (_formState$changes$em = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : '',
    onChange: handleChangeInput,
    placeholder: t('ADD_EMAIL', 'Add email')
  })), /*#__PURE__*/_react.default.createElement(_styles2.DownloadWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DOWNLOADS_APPS', 'Downloads apps')), /*#__PURE__*/_react.default.createElement(_styles2.DownloadIconWrapper, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://apps.apple.com/us/app/customer-app-2-0/id1607414555",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.appStore,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://play.google.com/store/apps/details?id=com.ordering.onlineorderingappv5&hl=en&gl=US",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.googlePlay,
    alt: ""
  }))))));
};
exports.ReceiveOrders = ReceiveOrders;