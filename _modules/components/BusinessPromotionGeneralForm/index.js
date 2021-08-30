"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPromotionGeneralForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Buttons = require("../../styles/Buttons");

var _Inputs = require("../../styles/Inputs");

var _FirstSelect = require("../../styles/Select/FirstSelect");

var _Confirm = require("../Confirm");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _utils = require("../../utils");

var _reactDaterangePicker = _interopRequireDefault(require("react-daterange-picker"));

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("./styles");

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

var BusinessPromotionGeneralFormUI = function BusinessPromotionGeneralFormUI(props) {
  var _formState$result3, _formState$changes6, _promotionState$promo5, _promotionState$promo6, _formState$changes7, _formState$changes8, _ref, _formState$changes$na, _formState$changes9, _promotionState$promo7, _formState$changes10, _formState$changes11, _promotionState$promo8, _ref2, _formState$changes$co, _formState$changes12, _promotionState$promo9, _ref3, _formState$changes$de, _formState$changes13, _promotionState$promo10, _formState$changes14, _formState$changes15, _promotionState$promo11, _formState$changes16, _formState$changes17, _promotionState$promo12, _formState$changes18, _formState$changes19, _promotionState$promo13, _formState$changes20, _formState$changes21, _promotionState$promo14, _formState$changes$ra, _ref4, _formState$changes$ra2, _formState$changes22, _promotionState$promo15, _ref5, _formState$changes$mi, _formState$changes23, _promotionState$promo16, _ref6, _formState$changes$li, _formState$changes24, _promotionState$promo17;

  var isAddMode = props.isAddMode,
      promotionState = props.promotionState,
      formState = props.formState,
      handleChangeImage = props.handleChangeImage,
      handleChangeInput = props.handleChangeInput,
      handleChangeItem = props.handleChangeItem,
      handleUpdateClick = props.handleUpdateClick,
      handleAddClick = props.handleAddClick;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var inputRef = (0, _react.useRef)(null);
  var calendarRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      dateRange = _useState4[0],
      setDateRange = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isShowCalendar = _useState6[0],
      setIsShowCalendar = _useState6[1];

  var discountTypes = [{
    value: 1,
    content: t('PERCENTAGE', 'Percentage')
  }, {
    value: 2,
    content: t('PRICE', 'Price')
  }];

  var handleClickImage = function handleClickImage() {
    inputRef.current.click();
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

      handleChangeImage(files[0]);
    }
  };

  var handleClickOutside = function handleClickOutside(e) {
    var _calendarRef$current;

    if (!isShowCalendar) return;
    var outsideCalendar = !((_calendarRef$current = calendarRef.current) !== null && _calendarRef$current !== void 0 && _calendarRef$current.contains(e.target));

    if (outsideCalendar) {
      setIsShowCalendar(false);
    }
  };

  var handleDates = function handleDates(dates) {
    var _dates$start, _dates$end;

    setDateRange(dates);
    handleChangeItem({
      start: dates === null || dates === void 0 ? void 0 : (_dates$start = dates.start) === null || _dates$start === void 0 ? void 0 : _dates$start.format('YYYY-MM-DD'),
      end: dates === null || dates === void 0 ? void 0 : (_dates$end = dates.end) === null || _dates$end === void 0 ? void 0 : _dates$end.format('YYYY-MM-DD')
    });
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var onButtonClick = function onButtonClick() {
    var _formState$changes, _promotionState$promo, _formState$changes2, _formState$changes3, _formState$changes4, _promotionState$promo2, _formState$changes5;

    if (!((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.name) && !(promotionState !== null && promotionState !== void 0 && (_promotionState$promo = promotionState.promotion) !== null && _promotionState$promo !== void 0 && _promotionState$promo.name) || ((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.name) === '') {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_NAME_REQUIRED', 'The field Name is required')
      });
      return;
    }

    if ((formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.type) === 2 && (!((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.coupon) && !(promotionState !== null && promotionState !== void 0 && (_promotionState$promo2 = promotionState.promotion) !== null && _promotionState$promo2 !== void 0 && _promotionState$promo2.coupon) || ((_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.coupon) === '')) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_COUPON_REQUIRED', 'The field Coupon is required')
      });
      return;
    }

    isAddMode ? handleAddClick() : handleUpdateClick();
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isShowCalendar]);
  (0, _react.useEffect)(function () {
    if (Object.keys(promotionState === null || promotionState === void 0 ? void 0 : promotionState.promotion).length) {
      var _promotionState$promo3, _promotionState$promo4;

      setDateRange(_moment.default.range(promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.start, promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : _promotionState$promo4.end));
    } else {
      setDateRange(null);
    }
  }, [promotionState]);
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result2;

    if (!(formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error)) return;
    setAlertState({
      open: true,
      content: formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
    });
  }, [formState === null || formState === void 0 ? void 0 : (_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.error]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.PromotionImage, {
    className: "user-image"
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    onClick: function onClick() {
      return handleClickImage();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: handleFiles,
    childRef: function childRef(e) {
      inputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes6 = formState.changes) !== null && _formState$changes6 !== void 0 && _formState$changes6.image) || formState.result.error ? promotionState !== null && promotionState !== void 0 && (_promotionState$promo5 = promotionState.promotion) !== null && _promotionState$promo5 !== void 0 && _promotionState$promo5.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo6 = promotionState.promotion) === null || _promotionState$promo6 === void 0 ? void 0 : _promotionState$promo6.image,
    alt: "promotion image",
    width: "90px",
    height: "90px",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CardImage, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))) : (formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.image,
    alt: "promotion image",
    loading: "lazy"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Camera, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Camera, null)))), /*#__PURE__*/_react.default.createElement(_styles.ItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "name",
    value: (_ref = (_formState$changes$na = (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo7 = promotionState.promotion) === null || _promotionState$promo7 === void 0 ? void 0 : _promotionState$promo7.name) !== null && _ref !== void 0 ? _ref : '',
    placeholder: t('NAME', 'Name'),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), ((formState === null || formState === void 0 ? void 0 : (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.type) === 2 || !(formState !== null && formState !== void 0 && (_formState$changes11 = formState.changes) !== null && _formState$changes11 !== void 0 && _formState$changes11.type) && (promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo8 = promotionState.promotion) === null || _promotionState$promo8 === void 0 ? void 0 : _promotionState$promo8.type) === 2) && /*#__PURE__*/_react.default.createElement(_styles.ItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('COUPON', 'Coupon')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "coupon",
    value: (_ref2 = (_formState$changes$co = (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.coupon) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo9 = promotionState.promotion) === null || _promotionState$promo9 === void 0 ? void 0 : _promotionState$promo9.coupon) !== null && _ref2 !== void 0 ? _ref2 : '',
    placeholder: t('COUPON_CODE', 'Coupon code'),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.ItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    rows: 3,
    name: "description",
    value: (_ref3 = (_formState$changes$de = (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo10 = promotionState.promotion) === null || _promotionState$promo10 === void 0 ? void 0 : _promotionState$promo10.description) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: t('WRITE_A_LITTLE_DESCRIPTION', 'Write a little description')
  })), /*#__PURE__*/_react.default.createElement(_styles.DateRangeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('DATE_RANGE', 'Date range')), /*#__PURE__*/_react.default.createElement(_styles.CalendarContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    borderRadius: "8px",
    onClick: function onClick() {
      return setIsShowCalendar(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Calendar4, null), /*#__PURE__*/_react.default.createElement("span", null, dateRange ? "".concat(parseDate(dateRange === null || dateRange === void 0 ? void 0 : dateRange.start, {
    utc: false,
    outputFormat: 'YYYY/MM/DD'
  }), " - ").concat(parseDate(dateRange === null || dateRange === void 0 ? void 0 : dateRange.end, {
    utc: false,
    outputFormat: 'YYYY/MM/DD'
  })) : t('SELECT_DATE_RANGE', 'Select Date Range'))), isShowCalendar && /*#__PURE__*/_react.default.createElement(_styles.CalendarWrapper, {
    ref: calendarRef
  }, /*#__PURE__*/_react.default.createElement(_reactDaterangePicker.default, {
    onSelect: function onSelect(dates) {
      return handleDates(dates);
    },
    value: dateRange
  })))), /*#__PURE__*/_react.default.createElement(_styles.PromotionTypeContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PromotionTypeWrapper, {
    active: formState !== null && formState !== void 0 && (_formState$changes14 = formState.changes) !== null && _formState$changes14 !== void 0 && _formState$changes14.type ? (formState === null || formState === void 0 ? void 0 : (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.type) === 2 : (promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo11 = promotionState.promotion) === null || _promotionState$promo11 === void 0 ? void 0 : _promotionState$promo11.type) === 2,
    onClick: function onClick() {
      return handleChangeItem({
        type: 2
      });
    }
  }, (formState !== null && formState !== void 0 && (_formState$changes16 = formState.changes) !== null && _formState$changes16 !== void 0 && _formState$changes16.type ? (formState === null || formState === void 0 ? void 0 : (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.type) === 2 : (promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo12 = promotionState.promotion) === null || _promotionState$promo12 === void 0 ? void 0 : _promotionState$promo12.type) === 2) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('COUPON', 'Coupon'))), /*#__PURE__*/_react.default.createElement(_styles.PromotionTypeWrapper, {
    active: formState !== null && formState !== void 0 && (_formState$changes18 = formState.changes) !== null && _formState$changes18 !== void 0 && _formState$changes18.type ? (formState === null || formState === void 0 ? void 0 : (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.type) === 1 : (promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo13 = promotionState.promotion) === null || _promotionState$promo13 === void 0 ? void 0 : _promotionState$promo13.type) === 1,
    onClick: function onClick() {
      return handleChangeItem({
        type: 1
      });
    }
  }, (formState !== null && formState !== void 0 && (_formState$changes20 = formState.changes) !== null && _formState$changes20 !== void 0 && _formState$changes20.type ? (formState === null || formState === void 0 ? void 0 : (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : _formState$changes21.type) === 1 : (promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo14 = promotionState.promotion) === null || _promotionState$promo14 === void 0 ? void 0 : _promotionState$promo14.type) === 1) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('DISCOUNT', 'Discount')))), /*#__PURE__*/_react.default.createElement(_styles.DiscountContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('DISCOUNT_TYPE', 'Discount type')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: (_formState$changes$ra = formState.changes.rate_type) !== null && _formState$changes$ra !== void 0 ? _formState$changes$ra : promotionState.promotion.rate_type,
    options: discountTypes,
    onChange: function onChange(val) {
      return handleChangeItem({
        rate_type: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "number",
    name: "rate",
    value: (_ref4 = (_formState$changes$ra2 = (_formState$changes22 = formState.changes) === null || _formState$changes22 === void 0 ? void 0 : _formState$changes22.rate) !== null && _formState$changes$ra2 !== void 0 ? _formState$changes$ra2 : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo15 = promotionState.promotion) === null || _promotionState$promo15 === void 0 ? void 0 : _promotionState$promo15.rate) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: 0
  }))), /*#__PURE__*/_react.default.createElement(_styles.MinimumLimitContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('MINIMUM_PURCHASE', 'Minimum purchase')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "number",
    name: "minimum",
    value: (_ref5 = (_formState$changes$mi = (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 ? void 0 : _formState$changes23.minimum) !== null && _formState$changes$mi !== void 0 ? _formState$changes$mi : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo16 = promotionState.promotion) === null || _promotionState$promo16 === void 0 ? void 0 : _promotionState$promo16.minimum) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: 0
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('LIMIT', 'Limit')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "number",
    name: "limit",
    value: (_ref6 = (_formState$changes$li = (_formState$changes24 = formState.changes) === null || _formState$changes24 === void 0 ? void 0 : _formState$changes24.limit) !== null && _formState$changes$li !== void 0 ? _formState$changes$li : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo17 = promotionState.promotion) === null || _promotionState$promo17 === void 0 ? void 0 : _promotionState$promo17.limit) !== null && _ref6 !== void 0 ? _ref6 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: 0
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onButtonClick();
    },
    disabled: formState.loading || Object.keys(formState.changes).length === 0
  }, formState.loading ? t('LOADING', 'Loading') : isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ORDERING', 'Ordering'),
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

var BusinessPromotionGeneralForm = function BusinessPromotionGeneralForm(props) {
  var businessPromotionFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPromotionGeneralFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPromotionForm, businessPromotionFormProps);
};

exports.BusinessPromotionGeneralForm = BusinessPromotionGeneralForm;