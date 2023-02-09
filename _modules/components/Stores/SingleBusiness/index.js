"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusiness = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleBusinessUI = function SingleBusinessUI(props) {
  var _businessState$busine, _businessState$busine3, _businessState$busine4, _businessState$busine5, _theme$images, _theme$images$dummies, _businessState$busine6, _businessState$busine7, _businessState$busine8, _businessState$busine9, _businessState$busine10, _businessState$busine11, _businessState$busine12, _businessState$busine13, _businessState$busine14, _businessState$busine15, _businessState$busine16, _theme$images2, _theme$images2$dummie, _businessState$busine17, _businessState$busine18, _businessState$busine19, _businessState$busine20, _businessState$busine21;
  var isSkeleton = props.isSkeleton,
    viewMethod = props.viewMethod,
    allowColumns = props.allowColumns,
    businessState = props.businessState,
    handleChangeActiveBusiness = props.handleChangeActiveBusiness,
    handleOpenBusinessDetails = props.handleOpenBusinessDetails,
    detailsBusinessId = props.detailsBusinessId,
    businessIds = props.businessIds,
    handleChangeBusinessIds = props.handleChangeBusinessIds;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var theme = (0, _styledComponents.useTheme)();
  var handleClickBusiness = function handleClickBusiness(e) {
    var isInvalid = e.target.closest('.business_enable_control') || e.target.closest('.business_actions') || e.target.closest('.business-id') || e.target.closest('.featured');
    if (isInvalid) return;
    handleOpenBusinessDetails(businessState === null || businessState === void 0 ? void 0 : businessState.business);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, viewMethod === 'list' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessState !== null && businessState !== void 0 && businessState.loading || isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles2.SingleBusinessContainer, null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessIdWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 18,
    height: 18
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 40,
    style: {
      margin: '0px 5px'
    }
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
    className: "business"
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
    isSkeleton: (businessState === null || businessState === void 0 ? void 0 : businessState.loading) || isSkeleton
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 45,
    height: 45
  })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "bold"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.featured) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "bold"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60
  })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.ratings) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "bold"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })))) : /*#__PURE__*/_react.default.createElement(_styles2.SingleBusinessContainer, {
    active: (businessState === null || businessState === void 0 ? void 0 : businessState.business.id) === parseInt(detailsBusinessId),
    onClick: function onClick(e) {
      return handleClickBusiness(e);
    }
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessIdWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    className: "business-id",
    isChecked: businessIds.includes(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.id),
    onClick: function onClick() {
      var _businessState$busine2;
      return handleChangeBusinessIds(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.id);
    }
  }, !(businessState !== null && businessState !== void 0 && businessState.loading) && businessIds.includes(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.id) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), businessState === null || businessState === void 0 ? void 0 : (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.id)), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
    className: "business"
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
    bgimage: optimizeImage((businessState === null || businessState === void 0 ? void 0 : (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_50,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "bold"
  }, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.name), /*#__PURE__*/_react.default.createElement("p", null, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : (_businessState$busine8 = _businessState$busine7.city) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.name)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.featured) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.FeaturedWrapper, {
    className: "featured"
  }, /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.featured,
    onChange: function onChange(enabled) {
      return handleChangeActiveBusiness(enabled, true);
    }
  }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.ratings) && /*#__PURE__*/_react.default.createElement("td", null, (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : (_businessState$busine11 = _businessState$busine10.reviews) === null || _businessState$busine11 === void 0 ? void 0 : _businessState$busine11.total) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "star"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, null), /*#__PURE__*/_react.default.createElement("span", null, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine12 = businessState.business) === null || _businessState$busine12 === void 0 ? void 0 : (_businessState$busine13 = _businessState$busine12.reviews) === null || _businessState$busine13 === void 0 ? void 0 : _businessState$busine13.total)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessEnableWrapper, {
    className: "business_enable_control"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine14 = businessState.business) === null || _businessState$busine14 === void 0 ? void 0 : _businessState$busine14.enabled,
    onChange: handleChangeActiveBusiness
  })))))), viewMethod === 'card' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessState !== null && businessState !== void 0 && businessState.loading || isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles2.SingleBusinessCardContainer, {
    isSkeleton: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessHeader, {
    isSkeleton: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessHeaderContent, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 45,
    height: 45
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessContent, null, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessActionContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessEnableWrapper, {
    className: "business_enable_control"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  })))) : /*#__PURE__*/_react.default.createElement(_styles2.SingleBusinessCardContainer, {
    onClick: function onClick(e) {
      return handleClickBusiness(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessHeader, {
    bgimage: optimizeImage(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine15 = businessState.business) === null || _businessState$busine15 === void 0 ? void 0 : _businessState$busine15.header, 'h_100,c_limit')
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessHeaderContent, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogo, {
    bgimage: optimizeImage((businessState === null || businessState === void 0 ? void 0 : (_businessState$busine16 = businessState.business) === null || _businessState$busine16 === void 0 ? void 0 : _businessState$busine16.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_200,c_limit')
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessContent, null, /*#__PURE__*/_react.default.createElement("h1", null, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine17 = businessState.business) === null || _businessState$busine17 === void 0 ? void 0 : _businessState$busine17.name), /*#__PURE__*/_react.default.createElement("p", null, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine18 = businessState.business) === null || _businessState$busine18 === void 0 ? void 0 : (_businessState$busine19 = _businessState$busine18.city) === null || _businessState$busine19 === void 0 ? void 0 : _businessState$busine19.name), /*#__PURE__*/_react.default.createElement(_styles2.BusinessActionContainer, null, /*#__PURE__*/_react.default.createElement("span", null, t('ID', 'ID'), " ", businessState === null || businessState === void 0 ? void 0 : (_businessState$busine20 = businessState.business) === null || _businessState$busine20 === void 0 ? void 0 : _businessState$busine20.id), /*#__PURE__*/_react.default.createElement(_styles2.BusinessEnableWrapper, {
    className: "business_enable_control"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine21 = businessState.business) === null || _businessState$busine21 === void 0 ? void 0 : _businessState$busine21.enabled,
    onChange: handleChangeActiveBusiness
  })))))));
};
var SingleBusiness = function SingleBusiness(props) {
  var isSkeleton = props.isSkeleton;
  var singleBusinessProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleBusinessUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(SingleBusinessUI, props) : /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessDetails, singleBusinessProps));
};
exports.SingleBusiness = SingleBusiness;