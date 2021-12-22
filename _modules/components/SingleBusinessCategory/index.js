"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessCategoryUI = exports.SingleBusinessCategory = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Confirm = require("../Confirm");

var _Switch = require("../../styles/Switch");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SingleBusinessCategoryUI = function SingleBusinessCategoryUI(props) {
  var _categoryFormState$ch;

  var category = props.category,
      categorySelected = props.categorySelected,
      handleChangeCategory = props.handleChangeCategory,
      isSkeleton = props.isSkeleton,
      handelChangeCategoryActive = props.handelChangeCategoryActive,
      handleUpdateClick = props.handleUpdateClick,
      categoryFormState = props.categoryFormState,
      isEditMode = props.isEditMode,
      handleDragOver = props.handleDragOver,
      handleDrop = props.handleDrop,
      handleDragEnd = props.handleDragEnd,
      onDataSelected = props.onDataSelected,
      dataSelected = props.dataSelected,
      spaceTab = props.spaceTab;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var conatinerRef = (0, _react.useRef)(null);

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var closeProductEdit = function closeProductEdit(e) {
    var _conatinerRef$current;

    var outsideDropdown = !((_conatinerRef$current = conatinerRef.current) !== null && _conatinerRef$current !== void 0 && _conatinerRef$current.contains(e.target));

    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (isEditMode && Object.keys(categoryFormState === null || categoryFormState === void 0 ? void 0 : categoryFormState.changes).length > 0 && !(categoryFormState !== null && categoryFormState !== void 0 && categoryFormState.loading)) {
          handleUpdateClick();
        }
      }
    }
  };

  var handleDragOverChange = function handleDragOverChange(e) {
    var element = e.target.closest('.draggable-category');

    if (element) {
      onDataSelected(element.dataset.index);
    }

    handleDragOver(e);
  };

  var handleDragEndChange = function handleDragEndChange(e) {
    onDataSelected('');
    handleDragEnd(e);
  };

  (0, _react.useEffect)(function () {
    var _categoryFormState$re;

    if (categoryFormState !== null && categoryFormState !== void 0 && (_categoryFormState$re = categoryFormState.result) !== null && _categoryFormState$re !== void 0 && _categoryFormState$re.error) {
      var _categoryFormState$re2;

      setAlertState({
        open: true,
        content: categoryFormState === null || categoryFormState === void 0 ? void 0 : (_categoryFormState$re2 = categoryFormState.result) === null || _categoryFormState$re2 === void 0 ? void 0 : _categoryFormState$re2.result
      });
    }
  }, [categoryFormState === null || categoryFormState === void 0 ? void 0 : categoryFormState.result]);
  (0, _react.useEffect)(function () {
    document.addEventListener('click', closeProductEdit);
    return function () {
      return document.removeEventListener('click', closeProductEdit);
    };
  }, [categoryFormState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SingleCategoryContainer, {
    active: !isSkeleton && (category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id),
    onClick: function onClick(e) {
      return handleChangeCategory(e, category);
    },
    ref: conatinerRef,
    onDrop: function onDrop(e) {
      return handleDrop(e);
    },
    onDragOver: function onDragOver(e) {
      return handleDragOverChange(e);
    },
    onDragEnd: function onDragEnd(e) {
      return handleDragEndChange(e);
    },
    className: "draggable-category",
    "data-index": category === null || category === void 0 ? void 0 : category.id,
    isAccept: dataSelected && dataSelected === (category === null || category === void 0 ? void 0 : category.id.toString()),
    spaceTab: spaceTab
  }, /*#__PURE__*/_react.default.createElement(_styles.CategoryContent, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15
  }) : /*#__PURE__*/_react.default.createElement("div", null, categoryFormState === null || categoryFormState === void 0 ? void 0 : (_categoryFormState$ch = categoryFormState.changes) === null || _categoryFormState$ch === void 0 ? void 0 : _categoryFormState$ch.name), /*#__PURE__*/_react.default.createElement(_styles.CategoryActionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CategoryEnableWrapper, {
    className: "business_enable_control"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 100
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: category === null || category === void 0 ? void 0 : category.enabled,
    onChange: handelChangeCategoryActive
  })))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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

exports.SingleBusinessCategoryUI = SingleBusinessCategoryUI;

var SingleBusinessCategory = function SingleBusinessCategory(props) {
  var isSkeleton = props.isSkeleton;

  var singleBusinessCategoryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleBusinessCategoryUI
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(SingleBusinessCategoryUI, props) : /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SingleBusinessCategory, singleBusinessCategoryProps));
};

exports.SingleBusinessCategory = SingleBusinessCategory;