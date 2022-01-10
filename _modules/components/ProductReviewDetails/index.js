"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductReviewDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ProductReviewDetailsUI = function ProductReviewDetailsUI(props) {
  var product = props.product,
      productReviewList = props.productReviewList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name)), /*#__PURE__*/_react.default.createElement(_styles.ProductImageContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, product !== null && product !== void 0 && product.images ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
    bgimage: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_120,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ImageFill, null))), productReviewList !== null && productReviewList !== void 0 && productReviewList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewContentWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LikeSignWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70
    }))), /*#__PURE__*/_react.default.createElement(_styles.ReviewComment, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)));
  }) : productReviewList.reviews.map(function (review) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewContentWrapper, {
      key: review.id
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LikeSignWrapper, {
      isLike: (review === null || review === void 0 ? void 0 : review.qualification) === 5
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HandThumbsUp, null), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HandThumbsDown, null))), /*#__PURE__*/_react.default.createElement(_styles.ReviewComment, null, review === null || review === void 0 ? void 0 : review.comment));
  }), !productReviewList.loading && productReviewList.reviews.length === 0 && /*#__PURE__*/_react.default.createElement(_styles.NotReviewed, null, t('ERROR_REVIEW_FIND', 'The review does not exist.'))));
};

var ProductReviewDetails = function ProductReviewDetails(props) {
  var productReviewProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductReviewDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductReviews, productReviewProps);
};

exports.ProductReviewDetails = ProductReviewDetails;