"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _reactToastify = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var _Select = require("../../styles/Select");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _FiPhone = _interopRequireDefault(require("@meronex/icons/fi/FiPhone"));
var _MultiSelect = require("../../styles/MultiSelect");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_reactToastify.toast.configure();
var DriverSelectorUI = function DriverSelectorUI(props) {
  var order = props.order,
    driversList = props.driversList,
    defaultValue = props.defaultValue,
    isPhoneView = props.isPhoneView,
    isFilterView = props.isFilterView,
    singleDriverIds = props.singleDriverIds,
    small = props.small,
    padding = props.padding,
    orderView = props.orderView,
    driverActionStatus = props.driverActionStatus,
    handleAssignDriver = props.handleAssignDriver,
    handleChangeDriver = props.handleChangeDriver;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    defaultOption = _useState2[0],
    setDefaultOption = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    driversOptionList = _useState4[0],
    setDriversOptionList = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    driversMultiOptionList = _useState6[0],
    setDriversMultiOptionList = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isRemoveAction = _useState8[0],
    setIsRemoveAction = _useState8[1];
  var driversLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      small: small
    }, t('DRIVERS_LOADING', 'Drivers loading'), "...")
  }];
  (0, _react.useEffect)(function () {
    var _theme$images;
    var _driversOptionList = [{
      value: 'default',
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        padding: padding
      }, orderView ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, {
        small: small
      }, /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
        bgimage: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.noDriver,
        small: small
      })), /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverNameContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DriverName, {
        small: small
      }, t('NO_DRIVER', 'No Driver'))))) : t('SELECT_DRIVER', 'Select driver')),
      color: 'primary',
      disabled: !isFilterView
    }];
    if (!isFilterView) {
      _driversOptionList.push({
        value: 'remove',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
          padding: "3px"
        }, t('REMOVE_ASSIGNED_DRIVER', 'Remove assinged driver')),
        disabled: defaultValue === 'default'
      });
    }
    if (!driversList.loading) {
      var _driversOptionListTemp = driversList.drivers.map(function (driver, i) {
        return {
          value: driver.id,
          showDisable: !(isFilterView || driver !== null && driver !== void 0 && driver.enabled && driver !== null && driver !== void 0 && driver.available && !(driver !== null && driver !== void 0 && driver.busy)),
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
            small: small,
            isPhoneView: isPhoneView,
            padding: padding
          }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, {
            small: small
          }, driver.photo ? /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
            bgimage: driver.photo,
            small: small
          }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverNameContainer, {
            small: small
          }, /*#__PURE__*/_react.default.createElement(_styles.DriverName, {
            small: small
          }, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement(_styles.DriverText, {
            small: small
          }, t('DRIVER', 'Driver'))), isPhoneView && driver.cellphone && /*#__PURE__*/_react.default.createElement(_styles.PhoneContainer, null, /*#__PURE__*/_react.default.createElement(_FiPhone.default, null), driver.cellphone)))
        };
      });
      setDriversMultiOptionList(_driversOptionListTemp);
      var _iterator = _createForOfIteratorHelper(_driversOptionListTemp),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          _driversOptionList.push(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setDriversOptionList(_driversOptionList);
  }, [driversList, defaultValue]);
  var changeDriver = function changeDriver(driverId) {
    if (isFilterView) {
      if (driverId === 'default') {
        handleChangeDriver(null);
      } else {
        handleChangeDriver(driverId);
      }
      return;
    }
    if (driverId === 'default') return;
    if (driverId === 'remove') {
      driverId = null;
      setIsRemoveAction(true);
    } else {
      setIsRemoveAction(false);
    }
    handleAssignDriver({
      orderId: order.id,
      driverId: driverId
    });
  };
  var toastNotify = function toastNotify(notifyContent) {
    var toastConfigure = {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    };
    if (notifyContent.type === 'success') {
      _reactToastify.toast.info(notifyContent.content, toastConfigure);
    }
    if (notifyContent.type === 'error') {
      _reactToastify.toast.error(notifyContent.content, toastConfigure);
    }
    if (notifyContent.type === 'warning') {
      _reactToastify.toast.warn(notifyContent.content, toastConfigure);
    }
  };
  (0, _react.useEffect)(function () {
    if (!driverActionStatus) return;
    if (driverActionStatus.loading) return;
    var notifyContent = {};
    if (driverActionStatus.error === null) {
      if (!isRemoveAction) {
        notifyContent.content = t('Driver assigned to order');
        notifyContent.type = 'success';
      } else {
        notifyContent.content = t('Driver was removed');
        notifyContent.type = 'warning';
      }
    } else {
      if (Array.isArray(driverActionStatus.error)) {
        notifyContent.content = '';
        var _iterator2 = _createForOfIteratorHelper(driverActionStatus.error),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _error = _step2.value;
            notifyContent.content += _error;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        notifyContent.content = driverActionStatus.error;
      }
      notifyContent.type = 'error';
    }
    toastNotify(notifyContent);
  }, [driverActionStatus]);
  (0, _react.useEffect)(function () {
    setDefaultOption(defaultValue);
  }, [defaultValue]);
  var Placeholder = /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('SELECT_DRIVER', 'Select driver'));
  if (isFilterView) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !driversList.loading ? /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
      defaultValue: singleDriverIds,
      placeholder: Placeholder,
      options: driversMultiOptionList,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "150px",
      optionBottomBorder: true,
      onChange: function onChange(driver) {
        return handleChangeDriver(driver);
      }
    }) : /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
      defaultValue: "default",
      options: driversLoading,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "150px",
      optionBottomBorder: true
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !driversList.loading ? /*#__PURE__*/_react.default.createElement(_Select.Select, {
      defaultValue: defaultOption || 'default',
      options: driversOptionList,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "150px",
      optionBottomBorder: true,
      onChange: function onChange(driverId) {
        return changeDriver(driverId);
      }
    }) : /*#__PURE__*/_react.default.createElement(_Select.Select, {
      defaultValue: "default",
      options: driversLoading,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "150px",
      optionBottomBorder: true
    }));
  }
};
var DriverSelector = exports.DriverSelector = function DriverSelector(props) {
  var DriversControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversList, DriversControlProps));
};