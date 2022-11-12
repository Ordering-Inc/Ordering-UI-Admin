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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EnterprisePromotionPaymethods = function EnterprisePromotionPaymethods(props) {
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
        var _promotionState$promo2, _promotionState$promo3;
        paymethods = (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : (_promotionState$promo3 = _promotionState$promo2.paymethods) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.reduce(function (ids, paymedhod) {
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
    var _promotionState$promo4;
    if (Array.isArray((_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : _promotionState$promo4.paymethods)) {
      var _promotionState$promo5;
      var found = (_promotionState$promo5 = promotionState.promotion) === null || _promotionState$promo5 === void 0 ? void 0 : _promotionState$promo5.paymethods.find(function (paymethod) {
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
    var _formState$changes4;
    return /*#__PURE__*/_react.default.createElement(_styles2.PaymethodItem, {
      key: paymethod.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.paymethods ? isChangesChecked(paymethod.id) : isDefaultChecked(paymethod.id),
      onChange: function onChange(e) {
        return handleChangePaymethods(e.target.checked, paymethod.id);
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, paymethod.name));
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onClickDone();
    }
  }, t('DONE', 'Done')));
};
exports.EnterprisePromotionPaymethods = EnterprisePromotionPaymethods;