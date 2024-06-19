"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceGeneral = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _Checkbox = require("../../../styles/Checkbox");
var _Shared = require("../../Shared");
var _styles = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AnalyticsCalendar = require("../AnalyticsCalendar");
var _styles2 = require("../../../styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var InvoiceGeneral = exports.InvoiceGeneral = function InvoiceGeneral(props) {
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
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    businessSearchValue = _useState10[0],
    setBusinessSearchValue = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    driverSearchValue = _useState12[0],
    setDriverSearchValue = _useState12[1];
  var handleChangeFormState = function handleChangeFormState(type, value) {
    handleChangeInvocing(_objectSpread(_objectSpread({}, invocing), {}, _defineProperty({}, type, value)));
  };
  var onSave = function onSave() {
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
    if (driverList || driverSearchValue) {
      var selectedTypes;
      if (driverList) {
        var _driverList$drivers;
        selectedTypes = driverList === null || driverList === void 0 || (_driverList$drivers = driverList.drivers) === null || _driverList$drivers === void 0 ? void 0 : _driverList$drivers.map(function (item) {
          return {
            value: item.id,
            content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, item.name)
          };
        });
      }
      if (driverSearchValue) {
        selectedTypes = driverList === null || driverList === void 0 ? void 0 : driverList.drivers.filter(function (driver) {
          return driver === null || driver === void 0 ? void 0 : driver.name.toLocaleLowerCase().includes(driverSearchValue.toLocaleLowerCase());
        }).map(function (item) {
          return {
            value: item.id,
            content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, item.name)
          };
        });
      }
      setDriverOptions(selectedTypes);
    }
    if (businessList || businessSearchValue) {
      var types;
      if (businessList) {
        var _businessList$busines;
        types = businessList === null || businessList === void 0 || (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.map(function (business) {
          return {
            value: business.id,
            content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, business.name)
          };
        });
      }
      if (businessSearchValue) {
        types = businessList === null || businessList === void 0 ? void 0 : businessList.businesses.filter(function (business) {
          return business === null || business === void 0 ? void 0 : business.name.toLocaleLowerCase().includes(businessSearchValue.toLocaleLowerCase());
        }).map(function (business) {
          return {
            value: business.id,
            content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, business.name)
          };
        });
      }
      var typeIvoiceList = [{
        value: 'charge',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('TYPE_CHARGE_BUSINESS', 'Charge the business a commision and fees'))
      }, {
        value: 'payout',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('TYPE_PAYOUT_BUSINESS', 'Payout the business'))
      }];
      setTypeInvoiceOptions(typeIvoiceList);
      setBusinessOptions(types);
    }
  }, [driverList === null || driverList === void 0 ? void 0 : driverList.drivers, businessList === null || businessList === void 0 ? void 0 : businessList.businesses, businessSearchValue, driverSearchValue]);
  var handleChangeBusinessSearch = function handleChangeBusinessSearch(searchVal) {
    setBusinessSearchValue(searchVal);
  };
  var handleChangeDriverSearch = function handleChangeDriverSearch(searchVal) {
    setDriverSearchValue(searchVal);
  };
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
    placeholder: t('EXPORT_BUSINESS_NAME', 'Business name'),
    onChange: function onChange(value) {
      return handleChangeFormState('business', value);
    },
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: businessSearchValue,
    handleChangeSearch: handleChangeBusinessSearch
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
    },
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: driverSearchValue,
    handleChangeSearch: handleChangeDriverSearch
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
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
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
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
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
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
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
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
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
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
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
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
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
  }, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    borderRadius: "7.6px",
    color: "primary",
    disabled: (driverList === null || driverList === void 0 ? void 0 : driverList.loading) || (businessList === null || businessList === void 0 ? void 0 : businessList.loading),
    onClick: onSave
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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