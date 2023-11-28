"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebhookDelaySelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Select = require("../../../styles/Select");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var WebhookDelaySelector = exports.WebhookDelaySelector = function WebhookDelaySelector(props) {
  var defaultValue = props.defaultValue,
    handleChangeDelay = props.handleChangeDelay;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var delayOptions = [{
    value: '0',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "0 ", t('MINUTES', 'Minutes'))
  }, {
    value: '300',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "5 ", t('MINUTES', 'Minutes'))
  }, {
    value: '600',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "10 ", t('MINUTES', 'Minutes'))
  }, {
    value: '900',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "15 ", t('MINUTES', 'Minutes'))
  }, {
    value: 'delivery_time',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('DELIVERY_TIME', 'Delivery time'))
  }, {
    value: 'pickup_time',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('PICKUP_TIME', 'Pickup time'))
  }, {
    value: 'preparation_time',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('PREPARATION_TIME', 'Preparation time'))
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: delayOptions,
    defaultValue: defaultValue,
    onChange: function onChange(delay) {
      return handleChangeDelay(delay);
    }
  }));
};