"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionMaxOrders = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var EnterprisePromotionMaxOrders = exports.EnterprisePromotionMaxOrders = function EnterprisePromotionMaxOrders(props) {
  var _ref, _formState$changes$us, _formState$changes, _promotionState$promo, _formState$changes$us2, _formState$changes2, _promotionState$promo2;
  var promotionState = props.promotionState,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleChangeItem = props.handleChangeItem,
    onClickDone = props.onClickDone;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var conditions = [{
    value: '>',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '>')
  }, {
    value: '=',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "=")
  }, {
    value: '<',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '<')
  }, {
    value: '>=',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '>=')
  }, {
    value: '<=',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '<=')
  }, {
    value: '<>',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '<>')
  }];
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('OFFER_USER_ORDER_COUNT', 'Max. amount of orders in platform of user')), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('OFFER_USER_ORDER_COUNT', 'Max. amount of orders in platform of user')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "user_order_count",
    value: (_ref = (_formState$changes$us = (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.user_order_count) !== null && _formState$changes$us !== void 0 ? _formState$changes$us : promotionState === null || promotionState === void 0 || (_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.user_order_count) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CONDITION', 'Condition')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_CONDITION', 'Select a condition'),
    defaultValue: (_formState$changes$us2 = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.user_order_count_condition) !== null && _formState$changes$us2 !== void 0 ? _formState$changes$us2 : (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.user_order_count_condition,
    options: conditions,
    onChange: function onChange(val) {
      return handleChangeItem({
        user_order_count_condition: val
      });
    },
    optionInnerMaxHeight: "300px"
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onClickDone();
    }
  }, t('DONE', 'Done')));
};