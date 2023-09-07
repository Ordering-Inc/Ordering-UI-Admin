"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReceiveOrders = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReceiveOrders = function ReceiveOrders(props) {
  var _configs$white_label_, _formState$changes$em, _formState$changes;
  var formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    changeFormState = props.changeFormState;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isEnabledWhiteLabelModule = configs === null || configs === void 0 || (_configs$white_label_ = configs.white_label_module) === null || _configs$white_label_ === void 0 ? void 0 : _configs$white_label_.value;
  (0, _react.useEffect)(function () {
    if (user !== null && user !== void 0 && user.email) changeFormState({
      email: user === null || user === void 0 ? void 0 : user.email
    });
  }, [user]);
  return /*#__PURE__*/_react.default.createElement(_styles2.ReceiveOrdersContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('RECEIVE_ORDERS', 'Receive orders')), /*#__PURE__*/_react.default.createElement(_styles2.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('BY_EMAIL', 'By Email'), /*#__PURE__*/_react.default.createElement("sup", null, "*")), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "email",
    defaultValue: (_formState$changes$em = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : '',
    onChange: handleChangeInput,
    placeholder: t('ADD_EMAIL', 'Add email')
  })), !isEnabledWhiteLabelModule && /*#__PURE__*/_react.default.createElement(_styles2.DownloadWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DOWNLOADS_APPS', 'Downloads apps')), /*#__PURE__*/_react.default.createElement(_styles2.DownloadIconWrapper, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://apps.apple.com/us/app/store-app-2-0/id1608192050",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.appStore,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://play.google.com/store/apps/details?id=com.ordering.storeappv5&hl=en&gl=US",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.googlePlay,
    alt: ""
  }))))));
};
exports.ReceiveOrders = ReceiveOrders;