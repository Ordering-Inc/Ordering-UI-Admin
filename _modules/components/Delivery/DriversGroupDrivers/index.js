"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupDrivers = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversGroupDrivers = function DriversGroupDrivers(props) {
  var drivers = props.drivers,
    actionState = props.actionState,
    selectedDriverIds = props.selectedDriverIds,
    handleSelectDriver = props.handleSelectDriver,
    handleSelectAllDriver = props.handleSelectAllDriver;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredDrivers = _useState4[0],
    setFilteredDrivers = _useState4[1];
  (0, _react.useEffect)(function () {
    var _filteredDrivers = [];
    if (searchValue) {
      _filteredDrivers = drivers.filter(function (driver) {
        var _driver$name, _driver$email;
        return (driver === null || driver === void 0 ? void 0 : (_driver$name = driver.name) === null || _driver$name === void 0 ? void 0 : _driver$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase())) || (driver === null || driver === void 0 ? void 0 : (_driver$email = driver.email) === null || _driver$email === void 0 ? void 0 : _driver$email.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase()));
      });
    } else {
      _filteredDrivers = _toConsumableArray(drivers);
    }
    setFilteredDrivers(_filteredDrivers);
  }, [searchValue]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    placeholder: t('SEARCH', 'Search'),
    isCustomLayout: true,
    lazyLoad: true,
    search: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "button",
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllDriver(true);
    }
  }, t('SELECT_ALL', 'Select all')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "button",
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllDriver(false);
    }
  }, t('SELECT_NONE', 'Select none'))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessesContainer, null, filteredDrivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessWrapper, {
      key: driver.id,
      isDisabed: actionState.loading
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: selectedDriverIds.includes(driver.id),
      onChange: function onChange(e) {
        return handleSelectDriver(driver.id, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, driver !== null && driver !== void 0 && driver.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: driver === null || driver === void 0 ? void 0 : driver.photo,
      alt: "driver"
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.DriverInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, driver === null || driver === void 0 ? void 0 : driver.name, " ", driver === null || driver === void 0 ? void 0 : driver.lastname), /*#__PURE__*/_react.default.createElement("p", null, driver === null || driver === void 0 ? void 0 : driver.email)));
  })));
};
exports.DriversGroupDrivers = DriversGroupDrivers;