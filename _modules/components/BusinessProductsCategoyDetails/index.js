"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategoyDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _useWindowSize2 = require("../../hooks/useWindowSize");

var _utils = require("../../utils");

var _Confirm = require("../Confirm");

var _styles = require("../../styles");

var _FiCamera = _interopRequireDefault(require("@meronex/icons/fi/FiCamera"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles2 = require("./styles");

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

var BusinessProductsCategoyDetailsUI = function BusinessProductsCategoyDetailsUI(props) {
  var _configState$configs, _configState$configs$, _formState$changes, _formState$changes2, _formState$changes3, _formState$changes4, _formState$changes5, _formState$changes6;

  var open = props.open,
      onClose = props.onClose,
      formState = props.formState,
      handlechangeImage = props.handlechangeImage,
      handleChangeInput = props.handleChangeInput,
      handleUpdateClick = props.handleUpdateClick,
      handleChangeCheckBox = props.handleChangeCheckBox,
      businessState = props.businessState,
      category = props.category,
      categorySelected = props.categorySelected,
      parentCategories = props.parentCategories,
      handleChangeItem = props.handleChangeItem,
      isAddMode = props.isAddMode;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var useParentCategory = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.use_parent_category) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var categoryTypeImageInputRef = (0, _react.useRef)(null);

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      parentCategoriesOptions = _useState6[0],
      setParentCategoriesOptions = _useState6[1];

  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
  };

  var handleClose = function handleClose() {
    onClose();
    setIsMenuOpen(false);
  };

  var handleClickImage = function handleClickImage() {
    categoryTypeImageInputRef.current.click();
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

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    var _formState$result;

    if (formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.result]);

  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('editCategory').style.width = '100vw';
      } else {
        document.getElementById('editCategory').style.width = '500px';
      }
    }
  };

  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    var _parentCategoriesOptions = parentCategories.map(function (category) {
      return {
        value: category.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, category === null || category === void 0 ? void 0 : category.name)
      };
    });

    setParentCategoriesOptions(_parentCategoriesOptions);
  }, [parentCategories]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "editCategory"
  }, /*#__PURE__*/_react.default.createElement(_styles2.EditCategoryContent, null, businessState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessEnableWrapper, {
    className: "business_enable_control"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30,
    height: 30
  })), /*#__PURE__*/_react.default.createElement(_styles2.CategoryTypeImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 300,
    height: 300
  })), /*#__PURE__*/_react.default.createElement(_styles2.CategoryNameWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 300
  })), /*#__PURE__*/_react.default.createElement(_styles2.BtnWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 30
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessEnableWrapper, {
    className: "business_enable_control"
  }, (formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) && /*#__PURE__*/_react.default.createElement("span", null, formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.name), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.enabled) || false,
    onChange: function onChange(val) {
      return handleChangeCheckBox({
        enabled: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), /*#__PURE__*/_react.default.createElement(_styles2.CategoryTypeImage, {
    onClick: function onClick() {
      return handleClickImage();
    },
    disabled: formState === null || formState === void 0 ? void 0 : formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      categoryTypeImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState === null || formState === void 0 ? void 0 : formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState === null || formState === void 0 ? void 0 : formState.loading
  }, formState !== null && formState !== void 0 && (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.image,
    alt: "business type image",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.CategoryNameWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CATEGORY_NAME', 'Category name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('Enter_CATEGORY_NAME', 'Enter a category name'),
    name: "name",
    defaultValue: formState === null || formState === void 0 ? void 0 : formState.changes.name,
    onChange: handleChangeInput,
    autoComplete: "off"
  })), useParentCategory === '1' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, categorySelected && isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.BusinessEnableWrapper, {
    style: {
      paddingTop: 20,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: 15
    }
  }, t('ENABLE_PARENT_CATEGORY', 'Allow parent category')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: false,
    onChange: function onChange(val) {
      return handleChangeCheckBox({
        enabledParent: val
      });
    }
  })), !isAddMode && categorySelected && parentCategories.length > 0 && /*#__PURE__*/_react.default.createElement(_styles2.ParentCategorySelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PARENT_CATEGORY', 'Parent category')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_PARENT_CATEGORY', 'Select a parent category'),
    options: parentCategoriesOptions,
    defaultValue: formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.parent_category_id,
    onChange: function onChange(val) {
      return handleChangeItem({
        parent_category_id: val
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: handleUpdateClick
  }, category ? t('SAVE', 'Save') : t('ADD', 'Add')))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('BUSINESS_TYPE', 'Business type'),
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

var BusinessProductsCategoyDetails = function BusinessProductsCategoyDetails(props) {
  var businessCategoryEditProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsCategoyDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessProductsCategoyDetails, businessCategoryEditProps);
};

exports.BusinessProductsCategoyDetails = BusinessProductsCategoyDetails;