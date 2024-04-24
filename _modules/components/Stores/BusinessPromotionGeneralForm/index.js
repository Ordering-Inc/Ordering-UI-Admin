"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPromotionGeneralForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("../../../styles");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _Shared = require("../../Shared");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _utils = require("../../../utils");
var _reactDateRange = require("react-date-range");
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
var _moment = _interopRequireDefault(require("moment"));
var _styles3 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessPromotionGeneralFormUI = function BusinessPromotionGeneralFormUI(props) {
  var _configs$advanced_off, _formState$result3, _formState$changes6, _promotionState$promo5, _promotionState$promo6, _formState$changes7, _formState$changes8, _ref, _formState$changes$na, _formState$changes9, _promotionState$promo7, _formState$changes10, _formState$changes11, _promotionState$promo8, _ref2, _formState$changes$co, _formState$changes12, _promotionState$promo9, _ref3, _formState$changes$de, _formState$changes13, _promotionState$promo10, _formState$changes14, _formState$changes15, _promotionState$promo11, _formState$changes16, _formState$changes17, _promotionState$promo12, _formState$changes18, _formState$changes19, _promotionState$promo13, _formState$changes20, _formState$changes21, _promotionState$promo14, _formState$changes22, _formState$changes23, _promotionState$promo15, _formState$changes$ra, _ref4, _formState$changes$ra2, _formState$changes24, _promotionState$promo16, _ref5, _formState$changes$mi, _formState$changes25, _promotionState$promo17, _ref6, _formState$changes$li, _formState$changes26, _promotionState$promo18, _formState$changes27, _promotionState$promo19, _formState$changes28, _promotionState$promo20, _formState$changes29, _promotionState$promo21, _formState$changes30, _formState$changes31, _promotionState$promo22, _ref7, _formState$changes$co2, _formState$changes32, _promotionState$promo23, _formState$changes33, _promotionState$promo24, _formState$changes34, _promotionState$promo25, _formState$changes35, _promotionState$promo26, _formState$changes36, _formState$changes37, _promotionState$promo27, _formState$changes38, _formState$changes39, _promotionState$promo28, _promotionState$promo29;
  var isAddMode = props.isAddMode,
    promotionState = props.promotionState,
    formState = props.formState,
    handleChangeImage = props.handleChangeImage,
    handleChangeInput = props.handleChangeInput,
    handleChangeItem = props.handleChangeItem,
    handleUpdateClick = props.handleUpdateClick,
    handleAddClick = props.handleAddClick;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isAdvancedOffersActivated = configs === null || configs === void 0 || (_configs$advanced_off = configs.advanced_offers_module) === null || _configs$advanced_off === void 0 ? void 0 : _configs$advanced_off.value;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var inputRef = (0, _react.useRef)(null);
  var calendarRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)([{
      startDate: null,
      endDate: null,
      key: 'selection'
    }]),
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
  var promotionTypes = [{
    value: 1,
    content: t('MOBILE_FRONT_SUB_TOTAL', 'Subtotal')
  }, {
    value: 2,
    content: t('DELIVERY_FEE', 'Delivery fee')
  }, {
    value: 3,
    content: t('BUSINESS_SERVICE_FEE', 'Service fee')
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
  var handleChangeDates = function handleChangeDates(item) {
    handleChangeItem({
      start: (0, _moment.default)(item.selection.startDate).format('YYYY-MM-DD 00:00:00'),
      end: item.selection.endDate ? (0, _moment.default)(item.selection.endDate).format('YYYY-MM-DD 23:59:59') : null
    });
    setDateRange([item.selection]);
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
    if ((formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.type) === 2 && (!((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.coupon) && !(promotionState !== null && promotionState !== void 0 && (_promotionState$promo2 = promotionState.promotion) !== null && _promotionState$promo2 !== void 0 && _promotionState$promo2.coupon) || ((_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.coupon) === '')) {
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
    var _formState$result, _formState$result2;
    if (!(formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error)) return;
    setAlertState({
      open: true,
      content: formState === null || formState === void 0 || (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
    });
  }, [formState === null || formState === void 0 || (_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.error]);
  (0, _react.useEffect)(function () {
    if (Object.keys(promotionState === null || promotionState === void 0 ? void 0 : promotionState.promotion).length) {
      var _promotionState$promo3, _promotionState$promo4;
      setDateRange([{
        startDate: new Date(promotionState === null || promotionState === void 0 || (_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.start),
        endDate: new Date(promotionState === null || promotionState === void 0 || (_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : _promotionState$promo4.end),
        key: 'selection'
      }]);
    } else {
      setDateRange([{
        startDate: null,
        endDate: null,
        key: 'selection'
      }]);
    }
  }, [promotionState]);
  return /*#__PURE__*/_react.default.createElement(_styles3.Container, null, /*#__PURE__*/_react.default.createElement(_styles3.PromotionImage, null, /*#__PURE__*/_react.default.createElement(_styles3.Image, {
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
  }, !((_formState$changes6 = formState.changes) !== null && _formState$changes6 !== void 0 && _formState$changes6.image) || formState.result.error ? promotionState !== null && promotionState !== void 0 && (_promotionState$promo5 = promotionState.promotion) !== null && _promotionState$promo5 !== void 0 && _promotionState$promo5.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: promotionState === null || promotionState === void 0 || (_promotionState$promo6 = promotionState.promotion) === null || _promotionState$promo6 === void 0 ? void 0 : _promotionState$promo6.image,
    alt: "promotion image",
    width: "90px",
    height: "90px",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles3.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CardImage, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))) : (formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.image,
    alt: "promotion image",
    loading: "lazy"
  }))), /*#__PURE__*/_react.default.createElement(_styles3.Camera, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Camera, null)))), /*#__PURE__*/_react.default.createElement(_styles3.ItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles3.Label, null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    value: (_ref = (_formState$changes$na = (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : promotionState === null || promotionState === void 0 || (_promotionState$promo7 = promotionState.promotion) === null || _promotionState$promo7 === void 0 ? void 0 : _promotionState$promo7.name) !== null && _ref !== void 0 ? _ref : '',
    placeholder: t('NAME', 'Name'),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), !isAdvancedOffersActivated && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.type) === 2 || !(formState !== null && formState !== void 0 && (_formState$changes11 = formState.changes) !== null && _formState$changes11 !== void 0 && _formState$changes11.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo8 = promotionState.promotion) === null || _promotionState$promo8 === void 0 ? void 0 : _promotionState$promo8.type) === 2) && /*#__PURE__*/_react.default.createElement(_styles3.ItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles3.Label, null, t('COUPON', 'Coupon')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "coupon",
    value: (_ref2 = (_formState$changes$co = (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.coupon) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : promotionState === null || promotionState === void 0 || (_promotionState$promo9 = promotionState.promotion) === null || _promotionState$promo9 === void 0 ? void 0 : _promotionState$promo9.coupon) !== null && _ref2 !== void 0 ? _ref2 : '',
    placeholder: t('COUPON_CODE', 'Coupon code'),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles3.ItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles3.Label, null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 3,
    name: "description",
    value: (_ref3 = (_formState$changes$de = (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : promotionState === null || promotionState === void 0 || (_promotionState$promo10 = promotionState.promotion) === null || _promotionState$promo10 === void 0 ? void 0 : _promotionState$promo10.description) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Write a little description')
  })), /*#__PURE__*/_react.default.createElement(_styles3.DateRangeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles3.Label, null, t('DATES_RANGE', 'Date range')), /*#__PURE__*/_react.default.createElement(_styles3.CalendarContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundary",
    borderRadius: "8px",
    onClick: function onClick() {
      return setIsShowCalendar(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Calendar4, null), /*#__PURE__*/_react.default.createElement("span", null, dateRange[0].startDate ? "".concat((0, _moment.default)(dateRange[0].startDate).format('YYYY/MM/DD'), " - ").concat((0, _moment.default)(dateRange[0].endDate).format('YYYY/MM/DD')) : t('SELECT_DATE_RANGE', 'Select Date Range'))), isShowCalendar && /*#__PURE__*/_react.default.createElement(_styles3.CalendarWrapper, {
    ref: calendarRef,
    notSelected: !dateRange[0].startDate
  }, /*#__PURE__*/_react.default.createElement(_reactDateRange.DateRange, {
    editableDateInputs: true,
    onChange: function onChange(item) {
      return handleChangeDates(item);
    },
    moveRangeOnFirstSelection: false,
    ranges: dateRange
  })))), isAdvancedOffersActivated && /*#__PURE__*/_react.default.createElement(_styles3.PoromotionTargetWrapper, null, /*#__PURE__*/_react.default.createElement(_styles3.Label, null, t('PROMOTION_TYPES', 'Promotion types')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: typeof ((_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.target) !== 'undefined' ? (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.target : (_promotionState$promo11 = promotionState.promotion) === null || _promotionState$promo11 === void 0 ? void 0 : _promotionState$promo11.target,
    options: promotionTypes,
    onChange: function onChange(val) {
      return handleChangeItem({
        target: val
      });
    }
  })), !isAdvancedOffersActivated && /*#__PURE__*/_react.default.createElement(_styles3.PromotionTypeContainer, null, /*#__PURE__*/_react.default.createElement(_styles3.PromotionTypeWrapper, {
    active: formState !== null && formState !== void 0 && (_formState$changes16 = formState.changes) !== null && _formState$changes16 !== void 0 && _formState$changes16.type ? (formState === null || formState === void 0 || (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.type) === 2 : (promotionState === null || promotionState === void 0 || (_promotionState$promo12 = promotionState.promotion) === null || _promotionState$promo12 === void 0 ? void 0 : _promotionState$promo12.type) === 2,
    onClick: function onClick() {
      return handleChangeItem({
        type: 2
      });
    }
  }, (formState !== null && formState !== void 0 && (_formState$changes18 = formState.changes) !== null && _formState$changes18 !== void 0 && _formState$changes18.type ? (formState === null || formState === void 0 || (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.type) === 2 : (promotionState === null || promotionState === void 0 || (_promotionState$promo13 = promotionState.promotion) === null || _promotionState$promo13 === void 0 ? void 0 : _promotionState$promo13.type) === 2) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('COUPON', 'Coupon'))), /*#__PURE__*/_react.default.createElement(_styles3.PromotionTypeWrapper, {
    active: formState !== null && formState !== void 0 && (_formState$changes20 = formState.changes) !== null && _formState$changes20 !== void 0 && _formState$changes20.type ? (formState === null || formState === void 0 || (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : _formState$changes21.type) === 1 : (promotionState === null || promotionState === void 0 || (_promotionState$promo14 = promotionState.promotion) === null || _promotionState$promo14 === void 0 ? void 0 : _promotionState$promo14.type) === 1,
    onClick: function onClick() {
      return handleChangeItem({
        type: 1
      });
    }
  }, (formState !== null && formState !== void 0 && (_formState$changes22 = formState.changes) !== null && _formState$changes22 !== void 0 && _formState$changes22.type ? (formState === null || formState === void 0 || (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 ? void 0 : _formState$changes23.type) === 1 : (promotionState === null || promotionState === void 0 || (_promotionState$promo15 = promotionState.promotion) === null || _promotionState$promo15 === void 0 ? void 0 : _promotionState$promo15.type) === 1) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('DISCOUNT', 'Discount')))), /*#__PURE__*/_react.default.createElement(_styles3.DiscountContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles3.Label, null, t('DISCOUNT_TYPE', 'Discount type')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: (_formState$changes$ra = formState.changes.rate_type) !== null && _formState$changes$ra !== void 0 ? _formState$changes$ra : promotionState.promotion.rate_type,
    options: discountTypes,
    onChange: function onChange(val) {
      return handleChangeItem({
        rate_type: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles3.Label, null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "rate",
    value: (_ref4 = (_formState$changes$ra2 = (_formState$changes24 = formState.changes) === null || _formState$changes24 === void 0 ? void 0 : _formState$changes24.rate) !== null && _formState$changes$ra2 !== void 0 ? _formState$changes$ra2 : promotionState === null || promotionState === void 0 || (_promotionState$promo16 = promotionState.promotion) === null || _promotionState$promo16 === void 0 ? void 0 : _promotionState$promo16.rate) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: 0
  }))), /*#__PURE__*/_react.default.createElement(_styles3.MinimumLimitContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles3.Label, null, t('MINIMUN_PURCHASED', 'Minimum purchase')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "minimum",
    value: (_ref5 = (_formState$changes$mi = (_formState$changes25 = formState.changes) === null || _formState$changes25 === void 0 ? void 0 : _formState$changes25.minimum) !== null && _formState$changes$mi !== void 0 ? _formState$changes$mi : promotionState === null || promotionState === void 0 || (_promotionState$promo17 = promotionState.promotion) === null || _promotionState$promo17 === void 0 ? void 0 : _promotionState$promo17.minimum) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: 0
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles3.Label, null, t('LIMIT', 'Limit')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "limit",
    value: (_ref6 = (_formState$changes$li = (_formState$changes26 = formState.changes) === null || _formState$changes26 === void 0 ? void 0 : _formState$changes26.limit) !== null && _formState$changes$li !== void 0 ? _formState$changes$li : promotionState === null || promotionState === void 0 || (_promotionState$promo18 = promotionState.promotion) === null || _promotionState$promo18 === void 0 ? void 0 : _promotionState$promo18.limit) !== null && _ref6 !== void 0 ? _ref6 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: 0
  }))), isAdvancedOffersActivated && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles3.SectionTitle, null, t('QUESTION_HOW_GOING_APPLIED', 'How it\'s going to be applied?')), /*#__PURE__*/_react.default.createElement(_styles3.CouponContainer, null, /*#__PURE__*/_react.default.createElement(_styles3.CouponHeader, {
    active: ((_formState$changes27 = formState.changes) === null || _formState$changes27 === void 0 ? void 0 : _formState$changes27.type) === 2 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo19 = promotionState.promotion) === null || _promotionState$promo19 === void 0 ? void 0 : _promotionState$promo19.type) === 2,
    onClick: function onClick() {
      return handleChangeItem({
        type: 2
      });
    }
  }, ((_formState$changes28 = formState.changes) === null || _formState$changes28 === void 0 ? void 0 : _formState$changes28.type) === 2 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo20 = promotionState.promotion) === null || _promotionState$promo20 === void 0 ? void 0 : _promotionState$promo20.type) === 2 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('COUPON', 'Coupon'))), (((_formState$changes29 = formState.changes) === null || _formState$changes29 === void 0 ? void 0 : _formState$changes29.type) === 2 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo21 = promotionState.promotion) === null || _promotionState$promo21 === void 0 ? void 0 : _promotionState$promo21.type) === 2) && /*#__PURE__*/_react.default.createElement(_styles3.CouponContent, null, /*#__PURE__*/_react.default.createElement(_styles3.ShowInCartContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: typeof ((_formState$changes30 = formState.changes) === null || _formState$changes30 === void 0 ? void 0 : _formState$changes30.public) !== 'undefined' ? (_formState$changes31 = formState.changes) === null || _formState$changes31 === void 0 ? void 0 : _formState$changes31.public : (_promotionState$promo22 = promotionState.promotion) === null || _promotionState$promo22 === void 0 ? void 0 : _promotionState$promo22.public,
    onChange: function onChange(e) {
      return handleChangeItem({
        public: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('SHOW_IN_CART', 'Show in cart')), /*#__PURE__*/_react.default.createElement("p", null, t('PLEASE_INDICATE_COUPON_FOR_CART', 'Please indicate if you want the coupon to be seen in the cart or hidden')))), /*#__PURE__*/_react.default.createElement(_styles3.CouponCodeContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('COUPON_CODE', 'Coupon code')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "coupon",
    value: (_ref7 = (_formState$changes$co2 = (_formState$changes32 = formState.changes) === null || _formState$changes32 === void 0 ? void 0 : _formState$changes32.coupon) !== null && _formState$changes$co2 !== void 0 ? _formState$changes$co2 : promotionState === null || promotionState === void 0 || (_promotionState$promo23 = promotionState.promotion) === null || _promotionState$promo23 === void 0 ? void 0 : _promotionState$promo23.coupon) !== null && _ref7 !== void 0 ? _ref7 : '',
    onChange: function onChange(e) {
      return handleChangeItem({
        coupon: e.target.value.replace(/\s+/g, '')
      });
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles3.DiscountOption, null, /*#__PURE__*/_react.default.createElement(_styles3.CouponHeader, {
    active: ((_formState$changes33 = formState.changes) === null || _formState$changes33 === void 0 ? void 0 : _formState$changes33.type) === 1 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo24 = promotionState.promotion) === null || _promotionState$promo24 === void 0 ? void 0 : _promotionState$promo24.type) === 1,
    onClick: function onClick() {
      return handleChangeItem({
        type: 1
      });
    }
  }, ((_formState$changes34 = formState.changes) === null || _formState$changes34 === void 0 ? void 0 : _formState$changes34.type) === 1 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo25 = promotionState.promotion) === null || _promotionState$promo25 === void 0 ? void 0 : _promotionState$promo25.type) === 1 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('DISCOUNT', 'discount'))), (((_formState$changes35 = formState.changes) === null || _formState$changes35 === void 0 ? void 0 : _formState$changes35.type) === 1 || !(formState !== null && formState !== void 0 && formState.changes.type) && (promotionState === null || promotionState === void 0 || (_promotionState$promo26 = promotionState.promotion) === null || _promotionState$promo26 === void 0 ? void 0 : _promotionState$promo26.type) === 1) && /*#__PURE__*/_react.default.createElement(_styles3.AutomaticDiscountEnableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: typeof ((_formState$changes36 = formState.changes) === null || _formState$changes36 === void 0 ? void 0 : _formState$changes36.auto) !== 'undefined' ? (_formState$changes37 = formState.changes) === null || _formState$changes37 === void 0 ? void 0 : _formState$changes37.auto : (_promotionState$promo27 = promotionState.promotion) === null || _promotionState$promo27 === void 0 ? void 0 : _promotionState$promo27.auto,
    onChange: function onChange(e) {
      return handleChangeItem({
        auto: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('AUTOMATIC_DISCOUNT', 'Automatic discount')))), /*#__PURE__*/_react.default.createElement(_styles3.StackableContainer, null, /*#__PURE__*/_react.default.createElement("span", null, t('ALLOW_COMBINE_OFFER', 'Allow to combine offer (discount/coupon) with others?')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: typeof ((_formState$changes38 = formState.changes) === null || _formState$changes38 === void 0 ? void 0 : _formState$changes38.stackable) !== 'undefined' ? (_formState$changes39 = formState.changes) === null || _formState$changes39 === void 0 ? void 0 : _formState$changes39.stackable : (_promotionState$promo28 = (_promotionState$promo29 = promotionState.promotion) === null || _promotionState$promo29 === void 0 ? void 0 : _promotionState$promo29.stackable) !== null && _promotionState$promo28 !== void 0 ? _promotionState$promo28 : false,
    onChange: function onChange(val) {
      return handleChangeItem({
        stackable: val
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onButtonClick();
    },
    disabled: formState.loading || Object.keys(formState.changes).length === 0
  }, formState.loading ? t('LOADING', 'Loading') : isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
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
var BusinessPromotionGeneralForm = exports.BusinessPromotionGeneralForm = function BusinessPromotionGeneralForm(props) {
  var businessPromotionFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPromotionGeneralFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPromotionForm, businessPromotionFormProps);
};