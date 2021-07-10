"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateBusinessCategory = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactToastify = require("react-toastify");

var _utils = require("../../../../../utils");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Switch = require("../../styles/Switch");

var _Confirm = require("../Confirm");

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _styles = require("./styles");

var _styles2 = require("../SingleProductsCategory/styles");

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

var CreateBusinessCategoryUI = function CreateBusinessCategoryUI(props) {
  var _categoryState$catego, _categoryState$result4, _categoryState$catego2, _categoryState$catego3, _categoryState$catego4, _categoryState$catego5;

  var categoryState = props.categoryState,
      handleChangeInput = props.handleChangeInput,
      handlechangeImage = props.handlechangeImage,
      handleUpdateClick = props.handleUpdateClick,
      setIsAddCategory = props.setIsAddCategory;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var categoryImageInputRef = (0, _react.useRef)(null);
  var conatinerRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var handleClickImage = function handleClickImage() {
    categoryImageInputRef.current.click();
  };

  var handleFiles = function handleFiles(files, name) {
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

      handlechangeImage(files[0], name);
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var CloseAddBusinessTypeForm = function CloseAddBusinessTypeForm(e) {
    var _conatinerRef$current;

    var outsideDropdown = !((_conatinerRef$current = conatinerRef.current) === null || _conatinerRef$current === void 0 ? void 0 : _conatinerRef$current.contains(e.target));

    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (Object.keys(categoryState === null || categoryState === void 0 ? void 0 : categoryState.category).length > 1 && !(categoryState === null || categoryState === void 0 ? void 0 : categoryState.loading)) {
          handleUpdateClick();
        } else {
          setIsAddCategory(false);
        }
      }
    }
  };

  (0, _react.useEffect)(function () {
    var _categoryState$result;

    if (categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$result = categoryState.result) === null || _categoryState$result === void 0 ? void 0 : _categoryState$result.error) {
      var _categoryState$result2;

      setAlertState({
        open: true,
        content: categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$result2 = categoryState.result) === null || _categoryState$result2 === void 0 ? void 0 : _categoryState$result2.result
      });
    }
  }, [categoryState === null || categoryState === void 0 ? void 0 : categoryState.result]);
  (0, _react.useEffect)(function () {
    document.addEventListener('click', CloseAddBusinessTypeForm);
    return function () {
      return document.removeEventListener('click', CloseAddBusinessTypeForm);
    };
  }, [categoryState]);
  (0, _react.useEffect)(function () {
    if ((categoryState === null || categoryState === void 0 ? void 0 : categoryState.category) && !(categoryState === null || categoryState === void 0 ? void 0 : categoryState.result.error) && !(categoryState === null || categoryState === void 0 ? void 0 : categoryState.loading)) {
      var _categoryState$result3;

      var toastConfigure = {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      };
      var content = categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$result3 = categoryState.result) === null || _categoryState$result3 === void 0 ? void 0 : _categoryState$result3.result;

      _reactToastify.toast.dark(content, toastConfigure);
    }
  }, [categoryState === null || categoryState === void 0 ? void 0 : categoryState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CreateBusinessCategoryContainer, {
    ref: conatinerRef
  }, /*#__PURE__*/_react.default.createElement(_styles.CategoryImage, {
    onClick: handleClickImage
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'image');
    },
    childRef: function childRef(e) {
      categoryImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: categoryState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'image');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: categoryState.loading
  }, !categoryState.loading && ((_categoryState$catego = categoryState.category) === null || _categoryState$catego === void 0 ? void 0 : _categoryState$catego.image) && ((_categoryState$result4 = categoryState.result) === null || _categoryState$result4 === void 0 ? void 0 : _categoryState$result4.result) !== 'Network Error' ? /*#__PURE__*/_react.default.createElement("img", {
    src: categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$catego2 = categoryState.category) === null || _categoryState$catego2 === void 0 ? void 0 : _categoryState$catego2.image,
    alt: "header image",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIconContainer, {
    small: "true"
  }, /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, {
    small: "true"
  })))))), /*#__PURE__*/_react.default.createElement(_styles2.CategoryContent, null, /*#__PURE__*/_react.default.createElement(_styles.InputCategoryName, {
    name: "name",
    placeholder: t('WRITE_NAME', 'Write name'),
    defaultValue: ((_categoryState$catego3 = categoryState.category) === null || _categoryState$catego3 === void 0 ? void 0 : _categoryState$catego3.name) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e.target.value, true);
    },
    autoComplete: "off",
    disabled: categoryState.loading
  }), /*#__PURE__*/_react.default.createElement(_styles2.CategoryActionContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryEnableWrapper, {
    className: "business_enable_control"
  }, ((_categoryState$catego4 = categoryState.category) === null || _categoryState$catego4 === void 0 ? void 0 : _categoryState$catego4.enabled) ? /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')) : /*#__PURE__*/_react.default.createElement("span", null, t('DISABLE', 'Disable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: ((_categoryState$catego5 = categoryState.category) === null || _categoryState$catego5 === void 0 ? void 0 : _categoryState$catego5.enabled) || false,
    onChange: handleChangeInput
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, {
    className: "business_actions"
  }, /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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

var CreateBusinessCategory = function CreateBusinessCategory(props) {
  var createBusinessCategoryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CreateBusinessCategoryUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CreateBusinessCategory, createBusinessCategoryProps);
};

exports.CreateBusinessCategory = CreateBusinessCategory;