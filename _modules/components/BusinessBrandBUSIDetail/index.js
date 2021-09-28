"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBrandBUSIDetail = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SearchBar = require("../SearchBar");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../styles");

var _styledComponents = require("styled-components");

var _styles2 = require("./styles");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var BusinessBrandBUSIDetailUI = function BusinessBrandBUSIDetailUI(props) {
  var searchValue = props.searchValue,
      _onSearch = props.onSearch,
      businessList = props.businessList,
      brand = props.brand,
      handleChangeCheckBox = props.handleChangeCheckBox;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var theme = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      businesses = _useState2[0],
      setBusinesses = _useState2[1];

  (0, _react.useEffect)(function () {
    var _businessList$busines;

    if ((businessList === null || businessList === void 0 ? void 0 : (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.length) > 0) {
      var _businesses = [];

      if (searchValue) {
        var _businessList$busines2;

        _businesses = businessList === null || businessList === void 0 ? void 0 : (_businessList$busines2 = businessList.businesses) === null || _businessList$busines2 === void 0 ? void 0 : _businessList$busines2.filter(function (business) {
          var _business$name;

          return (_business$name = business.name) === null || _business$name === void 0 ? void 0 : _business$name.toLowerCase().includes(searchValue.toLowerCase());
        });
      } else {
        _businesses = _toConsumableArray(businessList === null || businessList === void 0 ? void 0 : businessList.businesses);
      }

      setBusinesses(_businesses);
    }
  }, [businessList === null || businessList === void 0 ? void 0 : businessList.businesses, searchValue]);
  return /*#__PURE__*/_react.default.createElement(_styles2.BrandBUSIDetailContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), brand ? businessList !== null && businessList !== void 0 && businessList.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BusinessListWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      style: {
        height: '100%'
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BusinessListWrapper, null, businesses.length > 0 && businesses.map(function (business, i) {
    var _theme$images, _theme$images$dummies;

    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      id: business === null || business === void 0 ? void 0 : business.id,
      defaultChecked: (business === null || business === void 0 ? void 0 : business.franchise_id) === (brand === null || brand === void 0 ? void 0 : brand.id),
      onClick: function onClick(e) {
        return handleChangeCheckBox(e, business.id, brand === null || brand === void 0 ? void 0 : brand.id);
      }
    }), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: business === null || business === void 0 ? void 0 : business.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo))
    })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, business === null || business === void 0 ? void 0 : business.name)));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.NoSelectedBrand, null, t('NO_SELECTED_BRAND', 'There is no selected brand')));
};

var BusinessBrandBUSIDetail = function BusinessBrandBUSIDetail(props) {
  var businessBrandBUSIDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessBrandBUSIDetailUI,
    propsToFetch: ['id', 'name', 'logo', 'franchise_id']
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessBrandBUSIDetail, businessBrandBUSIDetailProps);
};

exports.BusinessBrandBUSIDetail = BusinessBrandBUSIDetail;