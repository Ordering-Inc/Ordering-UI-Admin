"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBrands = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _BusinessBrandForm = require("../BusinessBrandForm");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessBrandsUI = function BusinessBrandsUI(props) {
  var _brandList$brands;

  var business = props.business,
      formState = props.formState,
      setFormState = props.setFormState,
      handleUpdateBusinessClick = props.handleUpdateBusinessClick,
      brandList = props.brandList,
      handleUpdateBrandList = props.handleUpdateBrandList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAdd = _useState2[0],
      setIsAdd = _useState2[1];

  var handleSelectBusinessBrand = function handleSelectBusinessBrand(id) {
    if ((business === null || business === void 0 ? void 0 : business.franchise_id) === id) return;
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        franchise_id: id
      }
    }));
  };

  var handleSuccessAddBusinessBrand = function handleSuccessAddBusinessBrand(result) {
    setIsAdd(false);
    handleUpdateBrandList([].concat(_toConsumableArray(brandList === null || brandList === void 0 ? void 0 : brandList.brands), [result]));
  };

  (0, _react.useEffect)(function () {
    if (formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0) return;
    handleUpdateBusinessClick();
  }, [formState]);
  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, brandList !== null && brandList !== void 0 && brandList.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessBrand, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 32,
      height: 32,
      style: {
        marginLeft: '10px',
        marginRight: '10px'
      }
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 20
    }));
  }) : (brandList === null || brandList === void 0 ? void 0 : (_brandList$brands = brandList.brands) === null || _brandList$brands === void 0 ? void 0 : _brandList$brands.length) > 0 && (brandList === null || brandList === void 0 ? void 0 : brandList.brands.map(function (brand, i) {
    var _brand$name;

    return /*#__PURE__*/_react.default.createElement(_styles.BusinessBrand, {
      key: i,
      disabled: formState === null || formState === void 0 ? void 0 : formState.loading,
      isChecked: (business === null || business === void 0 ? void 0 : business.franchise_id) === brand.id,
      onClick: function onClick() {
        return handleSelectBusinessBrand(brand.id);
      }
    }, (business === null || business === void 0 ? void 0 : business.franchise_id) === brand.id ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), brand !== null && brand !== void 0 && brand.logo ? /*#__PURE__*/_react.default.createElement("img", {
      src: brand === null || brand === void 0 ? void 0 : brand.logo,
      alt: brand === null || brand === void 0 ? void 0 : (_brand$name = brand.name) === null || _brand$name === void 0 ? void 0 : _brand$name.toLowerCase(),
      width: "30px",
      height: "30px",
      loading: "lazy"
    }) : /*#__PURE__*/_react.default.createElement(_styles.DumyLogo, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)), /*#__PURE__*/_react.default.createElement("span", null, brand === null || brand === void 0 ? void 0 : brand.name));
  })), /*#__PURE__*/_react.default.createElement(_styles.AddNewBusinessBrandContainer, null, isAdd ? /*#__PURE__*/_react.default.createElement(_BusinessBrandForm.BusinessBrandForm, {
    onClose: function onClose() {
      return setIsAdd(false);
    },
    handleSuccessAddBusinessBrand: handleSuccessAddBusinessBrand
  }) : /*#__PURE__*/_react.default.createElement(_styles.AddNewBusinessBrandTitle, {
    onClick: function onClick() {
      return setIsAdd(true);
    }
  }, t('ADD_NEW_BRAND', 'Add new brand'))));
};

var BusinessBrands = function BusinessBrands(props) {
  var businessBrandsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessBrandsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessBrands, businessBrandsProps);
};

exports.BusinessBrands = BusinessBrands;