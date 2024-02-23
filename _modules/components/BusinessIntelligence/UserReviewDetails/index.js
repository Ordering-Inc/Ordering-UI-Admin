"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserReviewDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var UserReviewDetailsUI = function UserReviewDetailsUI(props) {
  var _userState$user, _userState$user2, _userState$user3, _userState$user4;
  var userState = props.userState,
    userReviewState = props.userReviewState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var getReviewPercent = function getReviewPercent(quality) {
    switch (quality) {
      case 1:
        return 0;
      case 2:
        return 25;
      case 3:
        return 50;
      case 4:
        return 75;
      case 5:
        return 100;
      default:
        return quality / 5 * 100;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, (_userState$user = userState.user) === null || _userState$user === void 0 ? void 0 : _userState$user.name, " ", (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.lastname)), /*#__PURE__*/_react.default.createElement(_styles.DriverPhotoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, (_userState$user3 = userState.user) !== null && _userState$user3 !== void 0 && _userState$user3.photo ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
    bgimage: optimizeImage((_userState$user4 = userState.user) === null || _userState$user4 === void 0 ? void 0 : _userState$user4.photo, 'w_120,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null))), userReviewState.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewItemContatiner, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 10
    }))), /*#__PURE__*/_react.default.createElement(_styles.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    }))), /*#__PURE__*/_react.default.createElement(_styles.Comment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200
    }))));
  }) : userReviewState === null || userReviewState === void 0 ? void 0 : userReviewState.reviews.map(function (review) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewItemContatiner, {
      key: review === null || review === void 0 ? void 0 : review.id
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewBar, {
      percentage: getReviewPercent(review === null || review === void 0 ? void 0 : review.qualification)
    })), /*#__PURE__*/_react.default.createElement(_styles.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('TERRIBLE', 'Terrible')), /*#__PURE__*/_react.default.createElement("p", null, t('BAD', 'Bad')), /*#__PURE__*/_react.default.createElement("p", null, t('OKAY', 'Okay')), /*#__PURE__*/_react.default.createElement("p", null, t('GOOD', 'Good')), /*#__PURE__*/_react.default.createElement("p", null, t('GREAT', 'Great')))), /*#__PURE__*/_react.default.createElement(_styles.Comment, null, review === null || review === void 0 ? void 0 : review.comment));
  }), !userReviewState.loading && userReviewState.reviews.length === 0 && /*#__PURE__*/_react.default.createElement(_styles.NotReviewed, null, t('ERROR_REVIEW_FIND', 'The review does not exist.'))));
};
var UserReviewDetails = exports.UserReviewDetails = function UserReviewDetails(props) {
  var userReivewDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserReviewDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserReviewDetails, userReivewDetailsProps);
};