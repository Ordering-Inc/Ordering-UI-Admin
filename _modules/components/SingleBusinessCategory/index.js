"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessCategory = exports.SingleBusinessCategoryUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Confirm = require("../Confirm");

var _utils = require("../../utils");

var _Switch = require("../../styles/Switch");

var _styledComponents = require("styled-components");

var _reactBootstrap = require("react-bootstrap");

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _styles = require("./styles");

var _styles2 = require("../SingleBusinessProduct/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SingleBusinessCategoryUI = function SingleBusinessCategoryUI(props) {
  var _theme$images$icons, _categoryFormState$ch, _categoryFormState$ch2, _categoryFormState$ch3;

  var category = props.category,
      categorySelected = props.categorySelected,
      handleChangeCategory = props.handleChangeCategory,
      isSkeleton = props.isSkeleton,
      handelChangeCategoryActive = props.handelChangeCategoryActive,
      handleUpdateClick = props.handleUpdateClick,
      deleteCategory = props.deleteCategory,
      handleOpenCategoryDetails = props.handleOpenCategoryDetails,
      categoryFormState = props.categoryFormState,
      handlechangeImage = props.handlechangeImage,
      handleInputChange = props.handleInputChange,
      isEditMode = props.isEditMode,
      handleDragStart = props.handleDragStart,
      handleDragOver = props.handleDragOver,
      handleDrop = props.handleDrop,
      handleDragEnd = props.handleDragEnd;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var conatinerRef = (0, _react.useRef)(null);
  var ProductTypeImgRef = (0, _react.useRef)(null);

  var ActionIcon = /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null);

  var handleClickImage = function handleClickImage() {
    ProductTypeImgRef.current.click();
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var handleFiles = function handleFiles(files) {
    if (files.length === 1) {
      var _files$;

      var type = files[0].type.split('/')[0];

      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        });
        return;
      }

      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        });
        return;
      }

      handlechangeImage(files[0]);
    }
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
      return handleDragOver(e);
    },
    onDragEnd: function onDragEnd(e) {
      return handleDragEnd(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.DraggableContainer, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 41,
    height: 41
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
    alt: "six dots",
    draggable: true // onDragStart={e => handleDrag(e, category.id)}
    ,
    onDragStart: function onDragStart(e) {
      return handleDragStart(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.ProductTypeImage, {
    onClick: function onClick() {
      return handleClickImage();
    },
    disabled: categoryFormState === null || categoryFormState === void 0 ? void 0 : categoryFormState.loading,
    className: "img-section"
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      ProductTypeImgRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: categoryFormState === null || categoryFormState === void 0 ? void 0 : categoryFormState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: categoryFormState === null || categoryFormState === void 0 ? void 0 : categoryFormState.loading
  }, categoryFormState !== null && categoryFormState !== void 0 && (_categoryFormState$ch = categoryFormState.changes) !== null && _categoryFormState$ch !== void 0 && _categoryFormState$ch.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: categoryFormState === null || categoryFormState === void 0 ? void 0 : (_categoryFormState$ch2 = categoryFormState.changes) === null || _categoryFormState$ch2 === void 0 ? void 0 : _categoryFormState$ch2.image,
    alt: "business type image",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles2.UploadWrapper, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null))))))), /*#__PURE__*/_react.default.createElement(_styles.CategoryContent, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15
  }) : /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "name",
    value: (categoryFormState === null || categoryFormState === void 0 ? void 0 : (_categoryFormState$ch3 = categoryFormState.changes) === null || _categoryFormState$ch3 === void 0 ? void 0 : _categoryFormState$ch3.name) || '',
    onChange: handleInputChange,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles.CategoryActionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CategoryEnableWrapper, {
    className: "business_enable_control"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 100
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, category !== null && category !== void 0 && category.enabled ? /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')) : /*#__PURE__*/_react.default.createElement("span", null, t('DISABLE', 'Disable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: category === null || category === void 0 ? void 0 : category.enabled,
    onChange: handelChangeCategoryActive
  }))), /*#__PURE__*/_react.default.createElement(_styles.ActionSelectorWrapper, {
    className: "business_actions"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 15
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: ActionIcon,
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleOpenCategoryDetails(category);
    }
  }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: deleteCategory
  }, t('DELETE', 'Delete'))))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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