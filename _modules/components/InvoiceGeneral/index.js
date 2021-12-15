"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceGeneral = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _FirstSelect = require("../../styles/Select/FirstSelect");

var _Checkbox = require("../../styles/Checkbox");

var _Confirm = require("../Confirm");

var _styles = require("./styles");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _AnalyticsCalendar = require("../AnalyticsCalendar");

var _Buttons = require("../../styles/Buttons");

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

var InvoiceGeneral = function InvoiceGeneral(props) {
  var driverList = props.driverList,
      businessList = props.businessList,
      selectedInvoice = props.selectedInvoice,
      invocing = props.invocing,
      handleChangeInvocing = props.handleChangeInvocing,
      getOrders = props.getOrders;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      typeInvoiceOptions = _useState2[0],
      setTypeInvoiceOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      businessOptions = _useState4[0],
      setBusinessOptions = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      driverOptions = _useState6[0],
      setDriverOptions = _useState6[1];

  var _useState7 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      alertState = _useState8[0],
      setAlertState = _useState8[1];

  var handleChangeFormState = function handleChangeFormState(type, value) {
    handleChangeInvocing(_objectSpread(_objectSpread({}, invocing), {}, _defineProperty({}, type, value)));
  };

  var pdfDownload = function pdfDownload() {
    if (businessList && (invocing === null || invocing === void 0 ? void 0 : invocing.business) === '') {
      setAlertState({
        open: true,
        content: t('SELECTED_BUSINESS_INVALID', 'The selected Business is invalid')
      });
    } else if (driverList && (invocing === null || invocing === void 0 ? void 0 : invocing.driver) === '') {
      setAlertState({
        open: true,
        content: t('SELECTED_DRIVER_INVALID', 'The selected Driver is invalid')
      });
    } else {
      getOrders();
    }
  };

  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeInvocing(_objectSpread(_objectSpread({}, invocing), {}, {
      from: date1,
      to: date2
    }));
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    if (driverList) {
      var _driverList$drivers;

      var selectedTypes = driverList === null || driverList === void 0 ? void 0 : (_driverList$drivers = driverList.drivers) === null || _driverList$drivers === void 0 ? void 0 : _driverList$drivers.map(function (item) {
        return {
          value: item.id,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, item.name)
        };
      });
      setDriverOptions(selectedTypes);
    }

    if (businessList) {
      var _businessList$busines;

      var types = businessList === null || businessList === void 0 ? void 0 : (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.map(function (business) {
        return {
          value: business.id,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, business.name)
        };
      });
      var typeIvoiceList = [{
        value: 'charge',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('CHARGE_BUSINESS_COMMISION_AND_FEES', 'Charge the business a commision and fees'))
      }, {
        value: 'payout',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('PAYOUT_BUSINESS', 'Payout the business'))
      }];
      setTypeInvoiceOptions(typeIvoiceList);
      setBusinessOptions(types);
    }
  }, [driverList === null || driverList === void 0 ? void 0 : driverList.drivers, businessList === null || businessList === void 0 ? void 0 : businessList.businesses]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InvoiceGeneralDetailContainer, {
    className: "row"
  }, selectedInvoice === 'business' && /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('SELECT_TYPE_INVOICE', 'Select type invoice')), driverList !== null && driverList !== void 0 && driverList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35
  }) : /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: typeInvoiceOptions,
    className: "select",
    defaultValue: invocing === null || invocing === void 0 ? void 0 : invocing.type,
    onChange: function onChange(value) {
      return handleChangeFormState('type', value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('DATES_RANGE', 'Date range')), /*#__PURE__*/_react.default.createElement(_styles.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, {
    handleChangeDate: handleChangeDate,
    defaultValue: invocing
  }))), selectedInvoice === 'business' && /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('BUSINESS', 'Business')), businessList !== null && businessList !== void 0 && businessList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35
  }) : /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: businessOptions,
    className: "select",
    defaultValue: invocing === null || invocing === void 0 ? void 0 : invocing.business,
    placeholder: t('BUSINESS_NAME', 'Business name'),
    onChange: function onChange(value) {
      return handleChangeFormState('business', value);
    }
  })), selectedInvoice === 'driver' && /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('DRIVER', 'Driver')), selectedInvoice === 'driver' && (driverList !== null && driverList !== void 0 && driverList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35
  }) : /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: driverOptions,
    className: "select",
    defaultValue: invocing === null || invocing === void 0 ? void 0 : invocing.driver,
    placeholder: t('SELECT_DRIVER', 'Select a driver'),
    onChange: function onChange(value) {
      return handleChangeFormState('driver', value);
    }
  }))), selectedInvoice === 'driver' && /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    id: "cancelled",
    defaultChecked: (invocing === null || invocing === void 0 ? void 0 : invocing.cancelled) || false,
    onClick: function onClick(e) {
      return handleChangeFormState('cancelled', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "cancelled"
  }, t('INCLUDE_CANCELED_ORDERS', 'Include canceled orders'))), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('PERCENTAGE_FEE', 'Percentage Fee')), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    placeholder: "0%",
    min: "0",
    defaultValue: invocing === null || invocing === void 0 ? void 0 : invocing.percentage_fee,
    onChange: function onChange(e) {
      return handleChangeFormState('percentage_fee', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('FIXED_FEE', 'Fixed Fee')), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    placeholder: "00",
    min: "0",
    defaultValue: invocing === null || invocing === void 0 ? void 0 : invocing.fixed_fee,
    onChange: function onChange(e) {
      return handleChangeFormState('fixed_fee', e.target.value);
    }
  })), selectedInvoice === 'driver' && /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('DELIVERY_PRICE', 'Delivery price'), " (", t('PERCENTAGE', 'Percentage'), ")"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    placeholder: "0%",
    min: "0",
    defaultValue: invocing === null || invocing === void 0 ? void 0 : invocing.percentage_delivery_price,
    onChange: function onChange(e) {
      return handleChangeFormState('percentage_delivery_price', e.target.value);
    }
  })), selectedInvoice === 'driver' && /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('DRIVER_TIP', 'Driver tip'), " (", t('PERCENTAGE', 'Percentage'), ")"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    placeholder: "0%",
    min: "0",
    defaultValue: invocing === null || invocing === void 0 ? void 0 : invocing.percentage_driver_tip,
    onChange: function onChange(e) {
      return handleChangeFormState('percentage_driver_tip', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('TAX', 'Tax')), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    placeholder: "00",
    min: "0",
    defaultValue: invocing === null || invocing === void 0 ? void 0 : invocing.tax,
    onChange: function onChange(e) {
      return handleChangeFormState('tax', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('MISC_AMOUNT', 'MISC amount')), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    placeholder: "00",
    min: "0",
    defaultValue: invocing === null || invocing === void 0 ? void 0 : invocing.misc_amount,
    onChange: function onChange(e) {
      return handleChangeFormState('misc_amount', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('MISC_DESCRIPTION', 'MISC description')), /*#__PURE__*/_react.default.createElement("textarea", {
    placeholder: t('WRITE_MISC_DESCRIPTION', 'Write a MISC description'),
    value: (invocing === null || invocing === void 0 ? void 0 : invocing.misc_description) || '',
    onChange: function onChange(e) {
      return handleChangeFormState('misc_description', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('NOTES', 'Notes')), /*#__PURE__*/_react.default.createElement("textarea", {
    placeholder: t('WRITE_A_NOTES', 'Write a Notes'),
    value: (invocing === null || invocing === void 0 ? void 0 : invocing.notes) || '',
    onChange: function onChange(e) {
      return handleChangeFormState('notes', e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.ActionBtnWrapper, {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "7.6px",
    color: "primary",
    disabled: (driverList === null || driverList === void 0 ? void 0 : driverList.loading) || (businessList === null || businessList === void 0 ? void 0 : businessList.loading),
    onClick: pdfDownload
  }, t('EXPORT', 'Export')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: selectedInvoice === 'business' ? t('BUSINESS_INVOICE', 'Business invoice') : t('DRIVER_INVOICE', 'Driver invoice'),
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

exports.InvoiceGeneral = InvoiceGeneral;