"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleProductsCategory = exports.SingleProductsCategoryUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Confirm = require("../Confirm");

var _Switch = require("../../styles/Switch");

var _BusinessActionSelector = require("../BusinessActionSelector");

var _styles = require("./styles");

var _styles2 = require("../SingleBusinessProduct/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SingleProductsCategoryUI = function SingleProductsCategoryUI(props) {
  var category = props.category,
      categorySelected = props.categorySelected,
      handleChangeCategory = props.handleChangeCategory,
      isSkeleton = props.isSkeleton,
      handelChangeCategoryActive = props.handelChangeCategoryActive,
      handleUpdateClick = props.handleUpdateClick,
      deleteCategory = props.deleteCategory;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var categoryNameEditRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isEditMode = _useState4[0],
      setIsEditMode = _useState4[1];

  var closeEditMode = function closeEditMode(e) {
    if (isEditMode && !e.target.closest('.category-name-edit') && !e.target.closest('.popup-component')) {
      var inputValue = categoryNameEditRef.current.value;

      if (inputValue === '') {
        setAlertState({
          open: true,
          content: [t('CATEGORY_NAME_IS_REQUIRED', 'Category name is Required')]
        });
      } else {
        setIsEditMode(false);
        handleUpdateClick(inputValue);
      }
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', closeEditMode);
    return function () {
      return document.removeEventListener('click', closeEditMode);
    };
  }, [isEditMode]);

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SingleCategoryContainer, {
    active: !isSkeleton && (category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id),
    onClick: function onClick(e) {
      return handleChangeCategory(e, category);
    }
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 41,
    height: 41
  }) : (category === null || category === void 0 ? void 0 : category.image) ? /*#__PURE__*/_react.default.createElement(_styles.CategoryImage, {
    src: category === null || category === void 0 ? void 0 : category.image,
    alt: category === null || category === void 0 ? void 0 : category.name
  }) : /*#__PURE__*/_react.default.createElement(_styles.DefaultImgWrapper, null), /*#__PURE__*/_react.default.createElement(_styles.CategoryContent, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15
  }) : isEditMode ? /*#__PURE__*/_react.default.createElement(_styles2.InputName, {
    className: "category-name-edit",
    defaultValue: category === null || category === void 0 ? void 0 : category.name,
    ref: categoryNameEditRef
  }) : /*#__PURE__*/_react.default.createElement("h2", {
    onClick: function onClick() {
      return setIsEditMode(true);
    }
  }, category === null || category === void 0 ? void 0 : category.name), /*#__PURE__*/_react.default.createElement(_styles.CategoryActionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CategoryEnableWrapper, {
    className: "business_enable_control"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 100
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (category === null || category === void 0 ? void 0 : category.enabled) ? /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')) : /*#__PURE__*/_react.default.createElement("span", null, t('DISABLE', 'Disable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: category === null || category === void 0 ? void 0 : category.enabled,
    onChange: handelChangeCategoryActive
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessActionSelector, {
    className: "business_actions"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 15
  }) : /*#__PURE__*/_react.default.createElement(_BusinessActionSelector.BusinessActionSelector, {
    business: category,
    handleDuplicateBusiness: function handleDuplicateBusiness() {
      return console.log('copy');
    },
    handleDeleteBusiness: deleteCategory,
    handleOpenBusinessDetails: function handleOpenBusinessDetails() {
      return console.log('open');
    }
  }))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('CATEGORY', 'Category'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};

exports.SingleProductsCategoryUI = SingleProductsCategoryUI;

var SingleProductsCategory = function SingleProductsCategory(props) {
  var isSkeleton = props.isSkeleton;

  var singleProductsCategoryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleProductsCategoryUI
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(SingleProductsCategoryUI, props) : /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SingleProductsCategory, singleProductsCategoryProps));
};

exports.SingleProductsCategory = SingleProductsCategory;