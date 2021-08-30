"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Switch = require("../../styles/Switch");

var _styledComponents = require("styled-components");

var _styles = require("../../styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ReviewDetails = function ReviewDetails(props) {
  var _theme$images, _theme$images$dummies;

  var review = props.review,
      handleUpdateReview = props.handleUpdateReview;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var getReviewPercent = function getReviewPercent(quality) {
    return quality / 5 * 100;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, review === null || review === void 0 ? void 0 : review.business_name), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: review === null || review === void 0 ? void 0 : review.enabled,
    onChange: function onChange(enabled) {
      return handleUpdateReview(review === null || review === void 0 ? void 0 : review.business_id, review.id, {
        enabled: enabled
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
    bgimage: optimizeImage((review === null || review === void 0 ? void 0 : review.business_logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo))
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.QualityWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('QUALITY', 'Quality of products'))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewBar, {
    percentage: getReviewPercent(review === null || review === void 0 ? void 0 : review.quality)
  })), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('Terrible')), /*#__PURE__*/_react.default.createElement("p", null, t('Bad')), /*#__PURE__*/_react.default.createElement("p", null, t('Okay')), /*#__PURE__*/_react.default.createElement("p", null, t('Good')), /*#__PURE__*/_react.default.createElement("p", null, t('Great')))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.QualityWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('SERVICE', 'service'))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewBar, {
    percentage: getReviewPercent(review === null || review === void 0 ? void 0 : review.service)
  })), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('Terrible')), /*#__PURE__*/_react.default.createElement("p", null, t('Bad')), /*#__PURE__*/_react.default.createElement("p", null, t('Okay')), /*#__PURE__*/_react.default.createElement("p", null, t('Good')), /*#__PURE__*/_react.default.createElement("p", null, t('Great')))), (review === null || review === void 0 ? void 0 : review.delivery) && /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.QualityWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('PUNCTUALITY', 'Punctuality'))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewBar, {
    percentage: getReviewPercent(review === null || review === void 0 ? void 0 : review.delivery)
  })), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('Terrible')), /*#__PURE__*/_react.default.createElement("p", null, t('Bad')), /*#__PURE__*/_react.default.createElement("p", null, t('Okay')), /*#__PURE__*/_react.default.createElement("p", null, t('Good')), /*#__PURE__*/_react.default.createElement("p", null, t('Great')))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.QualityWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_PACKAGING', 'Product Packaging'))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewBar, {
    percentage: getReviewPercent(review === null || review === void 0 ? void 0 : review.package)
  })), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('Terrible')), /*#__PURE__*/_react.default.createElement("p", null, t('Bad')), /*#__PURE__*/_react.default.createElement("p", null, t('Okay')), /*#__PURE__*/_react.default.createElement("p", null, t('Good')), /*#__PURE__*/_react.default.createElement("p", null, t('Great')))), /*#__PURE__*/_react.default.createElement(_styles2.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('COMMENTS', 'Comments')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 3,
    defaultValue: review === null || review === void 0 ? void 0 : review.comment,
    readOnly: true
  }))));
};

exports.ReviewDetails = ReviewDetails;