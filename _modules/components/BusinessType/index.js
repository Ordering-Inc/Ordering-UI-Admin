"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessType = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Confirm = require("../Confirm");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _utils = require("../../utils");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styledComponents = require("styled-components");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

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

var BusinessTypeUI = function BusinessTypeUI(props) {
  var _businessTypeFormStat3, _businessTypeFormStat4, _businessTypeFormStat5, _theme$images, _theme$images$categor, _businessTypeFormStat6, _businessTypeFormStat7, _businessTypeFormStat8;

  var businessTypeFormState = props.businessTypeFormState,
      handlechangeImage = props.handlechangeImage,
      handleUpdateClick = props.handleUpdateClick,
      handleChangeInput = props.handleChangeInput,
      businessType = props.businessType,
      selectedBusinessTypes = props.selectedBusinessTypes,
      formState = props.formState,
      handleSelectBusinessTypes = props.handleSelectBusinessTypes,
      deleteBusinessType = props.deleteBusinessType;

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
  var businessTypeImageInputRef = (0, _react.useRef)(null);

  var handleClickImage = function handleClickImage(type) {
    businessTypeImageInputRef.current.click();
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

  var CloseAddBusinessTypeForm = function CloseAddBusinessTypeForm(e) {
    var _conatinerRef$current;

    var outsideDropdown = !((_conatinerRef$current = conatinerRef.current) !== null && _conatinerRef$current !== void 0 && _conatinerRef$current.contains(e.target));

    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (Object.keys(businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : businessTypeFormState.changes).length > 0 && !(businessTypeFormState !== null && businessTypeFormState !== void 0 && businessTypeFormState.loading)) {
          handleUpdateClick();
        }
      }
    }
  };

  var checkKeyDown = function checkKeyDown(e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode === 13 && Object.keys(businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : businessTypeFormState.changes).length > 0 && !(businessTypeFormState !== null && businessTypeFormState !== void 0 && businessTypeFormState.loading)) handleUpdateClick();
  };

  (0, _react.useEffect)(function () {
    var _businessTypeFormStat;

    if (businessTypeFormState !== null && businessTypeFormState !== void 0 && (_businessTypeFormStat = businessTypeFormState.result) !== null && _businessTypeFormStat !== void 0 && _businessTypeFormStat.error) {
      var _businessTypeFormStat2;

      setAlertState({
        open: true,
        content: [businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : (_businessTypeFormStat2 = businessTypeFormState.result) === null || _businessTypeFormStat2 === void 0 ? void 0 : _businessTypeFormStat2.result]
      });
    }
  }, [businessTypeFormState]);
  (0, _react.useEffect)(function () {
    document.addEventListener('click', CloseAddBusinessTypeForm);
    return function () {
      return document.removeEventListener('click', CloseAddBusinessTypeForm);
    };
  }, [businessTypeFormState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, {
    ref: conatinerRef
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessTypeEditWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
    disabled: formState === null || formState === void 0 ? void 0 : formState.loading,
    isChecked: selectedBusinessTypes.includes(businessType.id),
    onClick: function onClick() {
      return handleSelectBusinessTypes(businessType.id);
    }
  }, selectedBusinessTypes.includes(businessType.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement(_styles.BusinessTypeImage, {
    onClick: function onClick() {
      return handleClickImage();
    },
    disabled: businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : businessTypeFormState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      businessTypeImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : businessTypeFormState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : businessTypeFormState.loading
  }, businessTypeFormState !== null && businessTypeFormState !== void 0 && businessTypeFormState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !(businessTypeFormState !== null && businessTypeFormState !== void 0 && (_businessTypeFormStat3 = businessTypeFormState.changes) !== null && _businessTypeFormStat3 !== void 0 && _businessTypeFormStat3.image) || (businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : (_businessTypeFormStat4 = businessTypeFormState.result) === null || _businessTypeFormStat4 === void 0 ? void 0 : _businessTypeFormStat4.result) === 'Network Error' || businessTypeFormState !== null && businessTypeFormState !== void 0 && (_businessTypeFormStat5 = businessTypeFormState.result) !== null && _businessTypeFormStat5 !== void 0 && _businessTypeFormStat5.error ? /*#__PURE__*/_react.default.createElement("img", {
    src: (businessType === null || businessType === void 0 ? void 0 : businessType.image) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$categor = _theme$images.categories) === null || _theme$images$categor === void 0 ? void 0 : _theme$images$categor.all),
    alt: "business type image",
    loading: "lazy"
  }) : (businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : (_businessTypeFormStat6 = businessTypeFormState.changes) === null || _businessTypeFormStat6 === void 0 ? void 0 : _businessTypeFormStat6.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : (_businessTypeFormStat7 = businessTypeFormState.changes) === null || _businessTypeFormStat7 === void 0 ? void 0 : _businessTypeFormStat7.image,
    alt: "business type image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.UploadImageIconContainer, {
    className: "upload-icon"
  }, /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))))), /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    defaultValue: businessType ? businessType === null || businessType === void 0 ? void 0 : businessType.name : businessTypeFormState === null || businessTypeFormState === void 0 ? void 0 : (_businessTypeFormStat8 = businessTypeFormState.changes) === null || _businessTypeFormStat8 === void 0 ? void 0 : _businessTypeFormStat8.name,
    onChange: handleChangeInput,
    disabled: businessTypeFormState.loading,
    autoComplete: "off",
    className: "business-type-name",
    onKeyDown: function onKeyDown(e) {
      return checkKeyDown(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
    onClick: deleteBusinessType
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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

var BusinessType = function BusinessType(props) {
  var businessTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessTypeUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessType, businessTypeProps);
};

exports.BusinessType = BusinessType;