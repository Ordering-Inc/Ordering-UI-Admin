"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupDrivers = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _DriverTemporalSchedule = require("../DriverTemporalSchedule");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversGroupDrivers = exports.DriversGroupDrivers = function DriversGroupDrivers(props) {
  var drivers = props.drivers,
    actionState = props.actionState,
    selectedDriverIds = props.selectedDriverIds,
    selectedDriverTemporaryIds = props.selectedDriverTemporaryIds,
    handleSelectDriver = props.handleSelectDriver,
    handleSelectAllDriver = props.handleSelectAllDriver,
    handleSelectDriverTemporary = props.handleSelectDriverTemporary;
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
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    driverTemporalSchedule = _useState6[0],
    setDriverTemporalScheduleModal = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    driverSchedule = _useState8[0],
    setDriverSchedule = _useState8[1];
  var handleOpenModal = function handleOpenModal(driver) {
    setDriverSchedule(driver);
    setDriverTemporalScheduleModal(true);
  };
  (0, _react.useEffect)(function () {
    var _filteredDrivers = [];
    if (searchValue) {
      _filteredDrivers = drivers.filter(function (driver) {
        var _driver$name, _driver$email;
        return (driver === null || driver === void 0 || (_driver$name = driver.name) === null || _driver$name === void 0 ? void 0 : _driver$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase())) || (driver === null || driver === void 0 || (_driver$email = driver.email) === null || _driver$email === void 0 ? void 0 : _driver$email.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase()));
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
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.DriverInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, driver === null || driver === void 0 ? void 0 : driver.name, " ", driver === null || driver === void 0 ? void 0 : driver.lastname), /*#__PURE__*/_react.default.createElement("p", null, driver === null || driver === void 0 ? void 0 : driver.email)), (selectedDriverIds === null || selectedDriverIds === void 0 ? void 0 : selectedDriverIds.includes(driver === null || driver === void 0 ? void 0 : driver.id)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: selectedDriverTemporaryIds === null || selectedDriverTemporaryIds === void 0 ? void 0 : selectedDriverTemporaryIds.some(function (_driver) {
        return (_driver === null || _driver === void 0 ? void 0 : _driver.id) === driver.id && (_driver === null || _driver === void 0 ? void 0 : _driver.temporarily_activated);
      }),
      onChange: function onChange(e) {
        return handleSelectDriverTemporary(driver === null || driver === void 0 ? void 0 : driver.id, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.DriverTemporaryContainer, null, /*#__PURE__*/_react.default.createElement("p", {
      onClick: function onClick() {
        var _selectedDriverTempor;
        return handleOpenModal((_selectedDriverTempor = selectedDriverTemporaryIds.find(function (_driver) {
          return (_driver === null || _driver === void 0 ? void 0 : _driver.id) === (driver === null || driver === void 0 ? void 0 : driver.id);
        })) !== null && _selectedDriverTempor !== void 0 ? _selectedDriverTempor : {
          id: driver === null || driver === void 0 ? void 0 : driver.id,
          temporarily_activated: true,
          temporary_at: null
        });
      }
    }, t('DRIVER_TEMPORAL', 'Temporal driver')))));
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "385px",
    height: "auto",
    padding: "30px",
    title: t('TEMPORAL_SCHEDULE', 'Temporal Schedule'),
    open: driverTemporalSchedule,
    onClose: function onClose() {
      return setDriverTemporalScheduleModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_DriverTemporalSchedule.DriverTemporalSchedule, {
    driverSchedule: driverSchedule,
    handleSelectDriverTemporary: handleSelectDriverTemporary,
    onClose: function onClose() {
      return setDriverTemporalScheduleModal(false);
    }
  })));
};