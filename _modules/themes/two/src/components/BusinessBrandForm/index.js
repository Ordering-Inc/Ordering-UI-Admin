"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBrandForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Confirm = require("../Confirm");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _utils = require("../../../../../utils");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _styles = require("./styles");

var _SpinnerLoader = require("../SpinnerLoader");

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

var BusinessBrandFormUI = function BusinessBrandFormUI(props) {
  var _formState$changes, _formState$result3, _formState$result4, _formState$changes2, _formState$changes3, _formState$result5, _formState$result6, _formState$result6$re, _brand$name, _formState$changes4;

  var formState = props.formState,
      handlechangeImage = props.handlechangeImage,
      handleUpdateClick = props.handleUpdateClick,
      handleChangeInput = props.handleChangeInput,
      onClose = props.onClose,
      business = props.business,
      brand = props.brand,
      handleSelectBusinessBrand = props.handleSelectBusinessBrand,
      editMode = props.editMode;

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
  var businessTypeImageInputRef = (0, _react.useRef)(null);

  var handleClickImage = function handleClickImage() {
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
        if (Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0 || formState !== null && formState !== void 0 && formState.loading) {
          onClose && onClose();
        } else handleUpdateClick();
      }
    }
  };

  var checkBoxClick = function checkBoxClick(id) {
    handleSelectBusinessBrand && handleSelectBusinessBrand(id);
  };

  (0, _react.useEffect)(function () {
    var _formState$result;

    if (formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: [formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result]
      });
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    document.addEventListener('click', CloseAddBusinessTypeForm);
    return function () {
      return document.removeEventListener('click', CloseAddBusinessTypeForm);
    };
  }, [formState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, {
    ref: conatinerRef,
    isChecked: editMode && (business === null || business === void 0 ? void 0 : business.franchise_id) === brand.id
  }, editMode ? /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
    onClick: function onClick() {
      return checkBoxClick(brand === null || brand === void 0 ? void 0 : brand.id);
    }
  }, (business === null || business === void 0 ? void 0 : business.franchise_id) === (brand === null || brand === void 0 ? void 0 : brand.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)) : /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement(_styles.BusinessBrandImage, {
    onClick: function onClick() {
      return handleClickImage();
    },
    disabled: formState === null || formState === void 0 ? void 0 : formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      businessTypeImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState === null || formState === void 0 ? void 0 : formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState === null || formState === void 0 ? void 0 : formState.loading
  }, formState !== null && formState !== void 0 && formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !(formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.logo) || (formState === null || formState === void 0 ? void 0 : (_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) === 'Network Error' || formState !== null && formState !== void 0 && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && _formState$result4.error ? brand !== null && brand !== void 0 && brand.logo ? /*#__PURE__*/_react.default.createElement("img", {
    src: brand === null || brand === void 0 ? void 0 : brand.logo,
    alt: "business brand logo",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement("div", null) : (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.logo,
    alt: "business brand logo",
    loading: "lazy"
  }), !(brand !== null && brand !== void 0 && brand.logo) && /*#__PURE__*/_react.default.createElement(_styles.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))))), /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    defaultValue: formState !== null && formState !== void 0 && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result ? formState === null || formState === void 0 ? void 0 : (_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : (_formState$result6$re = _formState$result6.result) === null || _formState$result6$re === void 0 ? void 0 : _formState$result6$re.name : (_brand$name = brand === null || brand === void 0 ? void 0 : brand.name) !== null && _brand$name !== void 0 ? _brand$name : formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.name,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('BUSINESS_BRAND', 'Business brand'),
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
  }), (formState === null || formState === void 0 ? void 0 : formState.loading) && /*#__PURE__*/_react.default.createElement(_styles.LoadingWrapper, null, /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, null)));
};

var BusinessBrandForm = function BusinessBrandForm(props) {
  var businessBrandProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessBrandFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessBrandForm, businessBrandProps);
};

exports.BusinessBrandForm = BusinessBrandForm;