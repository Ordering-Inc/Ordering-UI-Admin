"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsAppIdFilter = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ReportsAppIdFilterUI = function ReportsAppIdFilterUI(props) {
  var appIdList = props.appIdList,
      appIds = props.appIds,
      handleChangeAppId = props.handleChangeAppId,
      handleClickFilterButton = props.handleClickFilterButton,
      isAllCheck = props.isAllCheck,
      handleChangeAllCheck = props.handleChangeAllCheck;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var isCheckEnableSate = function isCheckEnableSate(id) {
    var found = appIds === null || appIds === void 0 ? void 0 : appIds.find(function (brandId) {
      return brandId === id;
    });
    var valid = false;

    if (found) {
      valid = true;
    }

    return valid;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ReportsAppIdContainer, null, appIdList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.BrandFilterOption, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 15,
      height: 15
    }), /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 24
    })));
  }) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.BrandFilterOption, {
    onClick: handleChangeAllCheck
  }, isAllCheck ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, t('ALL', 'All'))), appIdList === null || appIdList === void 0 ? void 0 : appIdList.appIds.map(function (appId, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.BrandFilterOption, {
      key: i,
      onClick: function onClick() {
        return handleChangeAppId(appId === null || appId === void 0 ? void 0 : appId.id);
      }
    }, isCheckEnableSate(appId.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, appId === null || appId === void 0 ? void 0 : appId.name));
  }))), /*#__PURE__*/_react.default.createElement(_styles.FilterBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "7.6px",
    color: "primary",
    disabled: appIdList.loading,
    onClick: handleClickFilterButton
  }, t('FILTER', 'Filter'))));
};

var ReportsAppIdFilter = function ReportsAppIdFilter(props) {
  var reportsAppIdFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    propsToFetch: ['id', 'name', 'code'],
    UIComponent: ReportsAppIdFilterUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ReportsAppIdFilter, reportsAppIdFilterProps);
};

exports.ReportsAppIdFilter = ReportsAppIdFilter;