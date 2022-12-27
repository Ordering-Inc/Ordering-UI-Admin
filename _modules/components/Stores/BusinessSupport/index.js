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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessSupport = function BusinessSupport(props) {
  var _businessState$busine, _businessState$busine2;
  var businessState = props.businessState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    getTimeAgo = _useUtils2[0].getTimeAgo;
  return /*#__PURE__*/_react.default.createElement(_styles2.BusinessSupportContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_DETAILS', 'Product details')), /*#__PURE__*/_react.default.createElement(_styles2.BusinessOwnersContainer, null, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : (_businessState$busine2 = _businessState$busine.owners) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.map(function (owner) {
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
exports.BusinessSupport = BusinessSupport;