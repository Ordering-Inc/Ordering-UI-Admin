"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentMethods = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PaymentMethods = function PaymentMethods(props) {
  var paymethodsList = props.paymethodsList,
    handleChangePaymethodIds = props.handleChangePaymethodIds,
    paymethodIds = props.paymethodIds;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var handleChangeIds = function handleChangeIds(id) {
    var updateIds = [];
    if (paymethodIds.includes(id)) updateIds = paymethodIds.filter(function (paymethodId) {
      return paymethodId !== id;
    });else updateIds = [].concat(_toConsumableArray(paymethodIds), [id]);
    handleChangePaymethodIds(updateIds);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PAYMENT_METHODS', 'Payment methods')), /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, !(paymethodsList !== null && paymethodsList !== void 0 && paymethodsList.loading) && (paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods.map(function (paymethod, idx) {
    return /*#__PURE__*/_react.default.createElement(_styles.PaymethodItem, {
      key: paymethod === null || paymethod === void 0 ? void 0 : paymethod.id,
      isBorderTop: idx === 0,
      onClick: function onClick() {
        return handleChangeIds(paymethod.id);
      }
    }, paymethodIds.includes(paymethod === null || paymethod === void 0 ? void 0 : paymethod.id) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "enabled"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement("span", null, paymethod === null || paymethod === void 0 ? void 0 : paymethod.name));
  }))));
};
exports.PaymentMethods = PaymentMethods;