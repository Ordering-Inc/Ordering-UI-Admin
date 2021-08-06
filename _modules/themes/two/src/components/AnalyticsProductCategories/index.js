"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsProductCategories = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("./styles");

var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var htmlToImage = _interopRequireWildcard(require("html-to-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AnalyticsProductCategories = function AnalyticsProductCategories(props) {
  var isProducts = props.isProducts,
      productCategoryList = props.productCategoryList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var downloadElementRef = (0, _react.useRef)(null);

  var downloadImage = function downloadImage() {
    if (!(downloadElementRef === null || downloadElementRef === void 0 ? void 0 : downloadElementRef.current)) return;
    htmlToImage.toPng(downloadElementRef === null || downloadElementRef === void 0 ? void 0 : downloadElementRef.current).then(function (dataUrl) {
      var a = document.createElement('a');
      a.href = dataUrl;
      a.download = "".concat(isProducts ? t('TOP_PRODUCTS', 'Top Products') : t('TOP_CATEGORIES', 'Top Categories'), ".png"); // Trigger the download

      a.click();
    }).catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ProductCategoryHeader, null, /*#__PURE__*/_react.default.createElement("p", null, isProducts ? t('TOP_PRODUCTS', 'Top Products') : t('TOP_CATEGORIES', 'Top Categories')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: (productCategoryList === null || productCategoryList === void 0 ? void 0 : productCategoryList.data.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    onClick: downloadImage
  }))), (productCategoryList === null || productCategoryList === void 0 ? void 0 : productCategoryList.loading) ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonContainerWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 30
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.ProductCategoryContentWrapper, null, (productCategoryList === null || productCategoryList === void 0 ? void 0 : productCategoryList.data.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.ProductCategoryContainer, {
    ref: downloadElementRef
  }, productCategoryList === null || productCategoryList === void 0 ? void 0 : productCategoryList.data.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ProductCategoryContent, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("p", null, item === null || item === void 0 ? void 0 : item.name), /*#__PURE__*/_react.default.createElement(_styles.PercentContainer, {
      percent: item === null || item === void 0 ? void 0 : item.sales
    }, item === null || item === void 0 ? void 0 : item.sales, "%"));
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data'))));
};

exports.AnalyticsProductCategories = AnalyticsProductCategories;