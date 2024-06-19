"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSupport = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessSupport = exports.BusinessSupport = function BusinessSupport(props) {
  var _businessState$busine;
  var businessState = props.businessState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    getTimeAgo = _useUtils2[0].getTimeAgo;
  return /*#__PURE__*/_react.default.createElement(_styles2.BusinessSupportContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_DETAILS', 'Product details')), /*#__PURE__*/_react.default.createElement(_styles2.BusinessOwnersContainer, null, businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 || (_businessState$busine = _businessState$busine.owners) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.map(function (owner) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessOwnerInfo, {
      key: owner.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, owner !== null && owner !== void 0 && owner.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: owner === null || owner === void 0 ? void 0 : owner.photo
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", null, owner === null || owner === void 0 ? void 0 : owner.name, " ", owner === null || owner === void 0 ? void 0 : owner.lastname), /*#__PURE__*/_react.default.createElement("p", null, getTimeAgo(owner === null || owner === void 0 ? void 0 : owner.updated_at, {
      utc: false
    }), " ", /*#__PURE__*/_react.default.createElement(_BsDot.default, null), " ", t('UPDATED', 'Updated'))));
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary"
  }, t('UNFOLLOW', 'Unfollow'))));
};