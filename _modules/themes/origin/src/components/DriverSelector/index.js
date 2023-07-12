"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
var DriverSelector = function DriverSelector(props) {
  var DriversControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversList, DriversControlProps));
};
exports.DriverSelector = DriverSelector;