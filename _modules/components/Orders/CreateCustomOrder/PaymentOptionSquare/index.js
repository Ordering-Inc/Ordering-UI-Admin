"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionSquare = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../../Shared");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PaymentOptionSquareUI = function PaymentOptionSquareUI(props) {
  var paymentMethods = props.paymentMethods,
    methodSelected = props.methodSelected,
    handleChangeMethodSelected = props.handleChangeMethodSelected,
    isLoading = props.isLoading,
    isLoadingMethod = props.isLoadingMethod,
    alertState = props.alertState,
    setAlertState = props.setAlertState,
    isLoadingPlace = props.isLoadingPlace;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.PaymentSquareContainer, null, isLoading && _toConsumableArray(Array(3).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 50
    }));
  }), !isLoading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Tabs, null, paymentMethods.map(function (method) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: method === null || method === void 0 ? void 0 : method.value,
      disabled: methodSelected === (method === null || method === void 0 ? void 0 : method.value),
      active: methodSelected === (method === null || method === void 0 ? void 0 : method.value),
      onClick: function onClick() {
        return handleChangeMethodSelected(method === null || method === void 0 ? void 0 : method.value);
      }
    }, method === null || method === void 0 ? void 0 : method.name);
  })), isLoadingMethod && methodSelected && _toConsumableArray(Array(3).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 50
    }));
  }), /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isLoading: isLoadingMethod || isLoadingPlace
  }, methodSelected === 'card_payments' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "card-container"
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    id: "card-button",
    type: "button"
  }, t('ACCEPT', 'Accept'))), methodSelected === 'ach_bank_transfer' && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    id: "ach-button",
    type: "button"
  }, t('PAY_WITH_BANK_ACCOUNT', 'Pay with Bank Account')), methodSelected === 'gift_cards' && /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    id: "gift-card-container"
  }), /*#__PURE__*/_react.default.createElement("button", {
    id: "gift-card-button",
    type: "button"
  }, t('PAY_WITH_GIFT_CARD', 'Pay with Gift Card'))), isLoadingPlace && /*#__PURE__*/_react.default.createElement(_styles2.Spinner, null, /*#__PURE__*/_react.default.createElement(_Shared.SpinnerLoader, {
    style: {
      height: 100
    }
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('SQUARE_ERROR', 'Square Error'),
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
var PaymentOptionSquare = exports.PaymentOptionSquare = function PaymentOptionSquare(props) {
  var paymentPaypalProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionSquareUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PaymentOptionSquare, paymentPaypalProps);
};