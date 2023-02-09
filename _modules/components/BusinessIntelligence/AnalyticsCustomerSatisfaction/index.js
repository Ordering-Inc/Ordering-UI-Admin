"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsCustomerSatisfaction = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AiOutlineStar = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineStar"));
var _AiFillStar = _interopRequireDefault(require("@meronex/icons/ai/AiFillStar"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Score = function Score(_ref) {
  var star = _ref.star,
    text = _ref.text;
  return /*#__PURE__*/_react.default.createElement(_styles.ScoreDiv, null, /*#__PURE__*/_react.default.createElement("p", null, text), /*#__PURE__*/_react.default.createElement(_styles.StarContent, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return star > i ? /*#__PURE__*/_react.default.createElement(_AiFillStar.default, {
      key: i
    }) : /*#__PURE__*/_react.default.createElement(_AiOutlineStar.default, {
      key: i
    });
  })));
};
var AnalyticsCustomerSatisfaction = function AnalyticsCustomerSatisfaction(props) {
  var _dataList$data, _dataList$data2, _dataList$data3, _dataList$data4, _dataList$data5, _dataList$data6, _dataList$data7, _dataList$data8, _dataList$data9, _dataList$data10, _dataList$data11, _dataList$data12, _dataList$data13, _dataList$data14, _dataList$data15, _dataList$data16, _dataList$data17, _dataList$data18, _dataList$data19, _dataList$data20;
  var dataList = props.dataList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var downloadElementRef = (0, _react.useRef)(null);
  var downloadImage = function downloadImage() {
    var csv = "".concat(t('TYPE', 'Type'), ", ").concat(t('RATE', 'Rate'), "\n");
    for (var row in dataList === null || dataList === void 0 ? void 0 : dataList.data) {
      csv += row + ',';
      csv += "".concat(dataList === null || dataList === void 0 ? void 0 : dataList.data[row], ",");
      csv += '\n';
    }
    var link = document.createElement('a');
    var fileSuffix = new Date().getTime();
    link.download = "customer_satification_".concat(fileSuffix, ".csv");
    var blob = new Blob(["\uFEFF", csv], {
      type: 'text/csv'
    });
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function () {
      link.href = reader.result;
      link.click();
    };
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.CustomerSatisfactionHeader, null, /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER_SATISFACTION', 'Customer Safisfaction')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: !(dataList !== null && dataList !== void 0 && (_dataList$data = dataList.data) !== null && _dataList$data !== void 0 && _dataList$data.general) && !(dataList !== null && dataList !== void 0 && (_dataList$data2 = dataList.data) !== null && _dataList$data2 !== void 0 && _dataList$data2.quality) && !(dataList !== null && dataList !== void 0 && (_dataList$data3 = dataList.data) !== null && _dataList$data3 !== void 0 && _dataList$data3.delivery) && !(dataList !== null && dataList !== void 0 && (_dataList$data4 = dataList.data) !== null && _dataList$data4 !== void 0 && _dataList$data4.service) && !(dataList !== null && dataList !== void 0 && (_dataList$data5 = dataList.data) !== null && _dataList$data5 !== void 0 && _dataList$data5.package)
  }, /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    onClick: downloadImage
  }))), dataList !== null && dataList !== void 0 && dataList.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonContainerWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 30
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.CustomerSatisfactionWrapper, null, !(dataList !== null && dataList !== void 0 && (_dataList$data6 = dataList.data) !== null && _dataList$data6 !== void 0 && _dataList$data6.general) && !(dataList !== null && dataList !== void 0 && (_dataList$data7 = dataList.data) !== null && _dataList$data7 !== void 0 && _dataList$data7.quality) && !(dataList !== null && dataList !== void 0 && (_dataList$data8 = dataList.data) !== null && _dataList$data8 !== void 0 && _dataList$data8.delivery) && !(dataList !== null && dataList !== void 0 && (_dataList$data9 = dataList.data) !== null && _dataList$data9 !== void 0 && _dataList$data9.service) && !(dataList !== null && dataList !== void 0 && (_dataList$data10 = dataList.data) !== null && _dataList$data10 !== void 0 && _dataList$data10.package) ? /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data')) : /*#__PURE__*/_react.default.createElement(_styles.CustomerSatisfactionContent, {
    ref: downloadElementRef
  }, (dataList === null || dataList === void 0 ? void 0 : (_dataList$data11 = dataList.data) === null || _dataList$data11 === void 0 ? void 0 : _dataList$data11.general) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 ? void 0 : (_dataList$data12 = dataList.data) === null || _dataList$data12 === void 0 ? void 0 : _dataList$data12.general,
    text: t('GENERAL', 'General')
  }), (dataList === null || dataList === void 0 ? void 0 : (_dataList$data13 = dataList.data) === null || _dataList$data13 === void 0 ? void 0 : _dataList$data13.quality) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 ? void 0 : (_dataList$data14 = dataList.data) === null || _dataList$data14 === void 0 ? void 0 : _dataList$data14.quality,
    text: t('QUALITY', 'Quality')
  }), (dataList === null || dataList === void 0 ? void 0 : (_dataList$data15 = dataList.data) === null || _dataList$data15 === void 0 ? void 0 : _dataList$data15.delivery) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 ? void 0 : (_dataList$data16 = dataList.data) === null || _dataList$data16 === void 0 ? void 0 : _dataList$data16.delivery,
    text: t('DELIVERY', 'Delivery')
  }), (dataList === null || dataList === void 0 ? void 0 : (_dataList$data17 = dataList.data) === null || _dataList$data17 === void 0 ? void 0 : _dataList$data17.service) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 ? void 0 : (_dataList$data18 = dataList.data) === null || _dataList$data18 === void 0 ? void 0 : _dataList$data18.service,
    text: t('SERVICE', 'Service')
  }), (dataList === null || dataList === void 0 ? void 0 : (_dataList$data19 = dataList.data) === null || _dataList$data19 === void 0 ? void 0 : _dataList$data19.package) && /*#__PURE__*/_react.default.createElement(Score, {
    star: dataList === null || dataList === void 0 ? void 0 : (_dataList$data20 = dataList.data) === null || _dataList$data20 === void 0 ? void 0 : _dataList$data20.package,
    text: t('PACKAGE', 'Package')
  }))));
};
exports.AnalyticsCustomerSatisfaction = AnalyticsCustomerSatisfaction;