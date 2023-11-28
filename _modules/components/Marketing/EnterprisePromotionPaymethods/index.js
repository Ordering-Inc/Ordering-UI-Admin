"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionPaymethods = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EnterprisePromotionPaymethods = exports.EnterprisePromotionPaymethods = function EnterprisePromotionPaymethods(props) {
  var paymethodsState = props.paymethodsState,
    promotionState = props.promotionState,
    formState = props.formState,
    handleChangeItem = props.handleChangeItem,
    onClickDone = props.onClickDone;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var handleChangePaymethods = function handleChangePaymethods(checked, paymethodId) {
    var _formState$changes;
    var paymethods = [];
    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.paymethods) {
      var _formState$changes2;
      paymethods = _toConsumableArray((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.paymethods);
    } else {
      var _promotionState$promo;
      if (Array.isArray((_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.paymethods)) {
        var _promotionState$promo2;
        paymethods = (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 || (_promotionState$promo2 = _promotionState$promo2.paymethods) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.reduce(function (ids, paymedhod) {
          return [].concat(_toConsumableArray(ids), [paymedhod.id]);
        }, []);
      }
    }
    if (checked) {
      paymethods.push(paymethodId);
    } else {
      paymethods = paymethods.filter(function (value) {
        return value !== paymethodId;
      });
    }
    handleChangeItem({
      paymethods: paymethods
    });
  };
  var isDefaultChecked = function isDefaultChecked(paymethodId) {
    var _promotionState$promo3;
    if (Array.isArray((_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.paymethods)) {
      var _promotionState$promo4;
      var found = (_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : _promotionState$promo4.paymethods.find(function (paymethod) {
        return paymethod.id === paymethodId;
      });
      if (found) return true;else return false;
    } else return false;
  };
  var isChangesChecked = function isChangesChecked(paymethodId) {
    var _formState$changes3;
    var found = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.paymethods.find(function (value) {
      return value === paymethodId;
    });
    if (found) return true;else return false;
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.PaymethodsContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMEN_METHODS_ALLOWED', 'Payment methods allowed')), paymethodsState.paymethods.map(function (paymethod) {
    var _formState$changes4, _paymethod$gateway;
    return /*#__PURE__*/_react.default.createElement(_styles2.PaymethodItem, {
      key: paymethod.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.paymethods ? isChangesChecked(paymethod.id) : isDefaultChecked(paymethod.id),
      onChange: function onChange(e) {
        return handleChangePaymethods(e.target.checked, paymethod.id);
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, t(paymethod === null || paymethod === void 0 || (_paymethod$gateway = paymethod.gateway) === null || _paymethod$gateway === void 0 ? void 0 : _paymethod$gateway.toUpperCase(), paymethod.name)));
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onClickDone();
    }
  }, t('DONE', 'Done')));
};