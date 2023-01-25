"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFilterGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _constants = require("../../../config/constants");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Orders = require("../../Orders");
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
var UserFilterGroupUI = function UserFilterGroupUI(props) {
  var _filterValues$ordersC, _filterValues$ordersC2;
  var filterValues = props.filterValues,
    handleChangeValue = props.handleChangeValue,
    handleChangeCity = props.handleChangeCity,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleResetFilterValues = props.handleResetFilterValues,
    isFilterModal = props.isFilterModal,
    onClose = props.onClose,
    loyaltyLevelState = props.loyaltyLevelState,
    handleChangeDateType = props.handleChangeDateType,
    handleChangeFromDate = props.handleChangeFromDate,
    handleChangeEndDate = props.handleChangeEndDate;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    phoneCodeList = _useState2[0],
    setPhoneCodeList = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    loyaltyLevels = _useState4[0],
    setLoyaltyLevels = _useState4[1];
  var conditions = [{
    value: 'gt',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '>')
  }, {
    value: 'eq',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "=")
  }, {
    value: 'lt',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '<')
  }, {
    value: 'ge',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '>=')
  }, {
    value: 'le',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '<=')
  }];
  var enableOptions = [{
    value: true,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('YES', 'Yes'))
  }, {
    value: false,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('NO', 'No'))
  }];
  var userOptions = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('ADMINISTRATOR', 'Administrator'))
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('CITY_MANAGER', 'City manager'))
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('BUSINESS_OWNER', 'Business owner'))
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('USER', 'User'))
  }, {
    value: 9,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('CALL_CENTER_AGENT', 'Call center agent'))
  }];
  var handleAcceptFilter = function handleAcceptFilter() {
    handleChangeFilterValues(_objectSpread({}, filterValues));
    onClose();
  };
  var handleClearFilter = function handleClearFilter() {
    handleResetFilterValues();
    handleChangeFilterValues({});
  };
  (0, _react.useEffect)(function () {
    _constants.countryList.splice(0, 1);
    var list = _constants.countryList.map(function (country) {
      return {
        value: country.dial_code.replace('+', ''),
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "(", country.dial_code, ") ", country.name)
      };
    });
    setPhoneCodeList(list);
  }, [_constants.countryList]);
  (0, _react.useEffect)(function () {
    if (loyaltyLevelState !== null && loyaltyLevelState !== void 0 && loyaltyLevelState.loading) return;
    var levels = loyaltyLevelState === null || loyaltyLevelState === void 0 ? void 0 : loyaltyLevelState.levels.map(function (item) {
      return {
        value: item.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, item.name)
      };
    });
    setLoyaltyLevels(levels);
  }, [loyaltyLevelState]);
  return /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    title: t('FILTER', 'Filter'),
    width: "80%",
    padding: "30px",
    open: isFilterModal,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('NAME', 'Name'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.name) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        name: e.target.value
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('EMAIL', 'Email'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.email) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        email: e.target.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('LAST_NAME', 'Last name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('LAST_NAME', 'Last name'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.lastname) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        lastname: e.target.value
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('COUNTRY_PHONE_CODE', 'Country phone code')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryPhoneCode,
    options: phoneCodeList,
    onChange: function onChange(val) {
      return handleChangeValue({
        countryPhoneCode: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('PHONE_NUMBER', 'Phone number')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('PHONE_NUMBER', 'Phone number'),
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.cellphone) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        cellphone: e.target.value
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('PHONE_VERIFIED', 'Phone verified')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.phoneVerified,
    options: enableOptions,
    onChange: function onChange(val) {
      return handleChangeValue({
        phoneVerified: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EMAIL_VERIFIED', 'Email verified')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.emailVerified,
    options: enableOptions,
    onChange: function onChange(val) {
      return handleChangeValue({
        emailVerified: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('ENABLED', 'Enabled')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.enabled,
    options: enableOptions,
    onChange: function onChange(val) {
      return handleChangeValue({
        enabled: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('AMOUNT_OF_ORDERS', 'Amount of orders')), /*#__PURE__*/_react.default.createElement(_styles2.RangeSelectWrapper, {
    className: "range"
  }, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_CONDITION', 'Select a condition'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$ordersC = filterValues.ordersCount) === null || _filterValues$ordersC === void 0 ? void 0 : _filterValues$ordersC.condition,
    options: conditions,
    onChange: function onChange(condition) {
      return handleChangeValue({
        ordersCount: _objectSpread(_objectSpread({}, filterValues === null || filterValues === void 0 ? void 0 : filterValues.ordersCount), {}, {
          condition: condition
        })
      });
    },
    optionInnerMaxHeight: "300px"
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('NUMBER', 'Number'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$ordersC2 = filterValues.ordersCount) === null || _filterValues$ordersC2 === void 0 ? void 0 : _filterValues$ordersC2.value) || '',
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    onChange: function onChange(e) {
      return handleChangeValue({
        ordersCount: _objectSpread(_objectSpread({}, filterValues === null || filterValues === void 0 ? void 0 : filterValues.ordersCount), {}, {
          value: e.target.value
        })
      });
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('USER_TYPE', 'User type')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.userType,
    options: userOptions,
    onChange: function onChange(val) {
      return handleChangeValue({
        userType: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('LOYALTY_LEVEL', 'Loyalty level')), loyaltyLevelState !== null && loyaltyLevelState !== void 0 && loyaltyLevelState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 54
  }) : /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.loyaltyLevel,
    options: loyaltyLevels,
    onChange: function onChange(val) {
      return handleChangeValue({
        loyaltyLevel: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('SIGN_UP_DATE', 'Sign up date')), /*#__PURE__*/_react.default.createElement(_Orders.DateTypeSelector, {
    filterValues: filterValues,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('CITY', 'City')), /*#__PURE__*/_react.default.createElement(_Shared.CitySelector, {
    filterValues: filterValues,
    handleChangeCity: handleChangeCity
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleAcceptFilter();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleClearFilter();
    }
  }, t('CLEAR', 'Clear')))));
};
var UserFilterGroup = function UserFilterGroup(props) {
  var userFilterGroupProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserFilterGroupUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersFilter, userFilterGroupProps);
};
exports.UserFilterGroup = UserFilterGroup;