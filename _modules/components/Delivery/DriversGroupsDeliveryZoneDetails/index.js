"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverGroupDeliveryZoneDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _DriversGroupDeliveryZoneInformation = require("../DriversGroupDeliveryZoneInformation");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverGroupDeliveryZoneDetailsUI = function DriverGroupDeliveryZoneDetailsUI(props) {
  var _zoneState$zone;
  var drivergroup = props.drivergroup,
    driverGroupsZones = props.driverGroupsZones,
    zoneState = props.zoneState,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleChangeFormState = props.handleChangeFormState,
    handleUpdateDriverGroupDeliveryZone = props.handleUpdateDriverGroupDeliveryZone,
    handleAddDriverGroupDeliveryZone = props.handleAddDriverGroupDeliveryZone,
    handleDeleteDriverGroupDeliveryZone = props.handleDeleteDriverGroupDeliveryZone,
    handleUploadKmlFiles = props.handleUploadKmlFiles,
    kmlData = props.kmlData;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirm = _useState2[0],
    setConfirm = _useState2[1];
  var _useState3 = (0, _react.useState)('information'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedMenuOption = _useState4[0],
    setSelectedMenuOption = _useState4[1];
  var tabs = [{
    key: 'information',
    content: t('INFORMATION', 'Information')
  }];
  var onClickDelete = function onClickDelete() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_DELIVERYZONE', 'Are you sure that you want to delete this delivery zone?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteDriverGroupDeliveryZone();
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, zoneState !== null && zoneState !== void 0 && zoneState.zone ? zoneState === null || zoneState === void 0 || (_zoneState$zone = zoneState.zone) === null || _zoneState$zone === void 0 ? void 0 : _zoneState$zone.name : t('ZONE_DELIVERY_SETTINGS', 'Zone delivery settings')), /*#__PURE__*/_react.default.createElement(_styles.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDelete();
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_styles.TabContainer, null, tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: tab === null || tab === void 0 ? void 0 : tab.key,
      active: selectedMenuOption === (tab === null || tab === void 0 ? void 0 : tab.key),
      onClick: function onClick() {
        return setSelectedMenuOption(tab === null || tab === void 0 ? void 0 : tab.key);
      }
    }, tab === null || tab === void 0 ? void 0 : tab.content);
  })), selectedMenuOption === 'information' && /*#__PURE__*/_react.default.createElement(_DriversGroupDeliveryZoneInformation.DriverGroupDeliveryZoneInformation, {
    drivergroup: drivergroup,
    zone: zoneState === null || zoneState === void 0 ? void 0 : zoneState.zone,
    driverGroupsZones: driverGroupsZones === null || driverGroupsZones === void 0 ? void 0 : driverGroupsZones.zones,
    formState: formState,
    handleChangeInput: handleChangeInput,
    handleChangeFormState: handleChangeFormState,
    handleUpdateDriverGroupDeliveryZone: handleUpdateDriverGroupDeliveryZone,
    handleAddDriverGroupDeliveryZone: handleAddDriverGroupDeliveryZone,
    kmlData: kmlData,
    handleUploadKmlFiles: handleUploadKmlFiles
  })), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm === null || confirm === void 0 ? void 0 : confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm === null || confirm === void 0 ? void 0 : confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var DriverGroupDeliveryZoneDetails = exports.DriverGroupDeliveryZoneDetails = function DriverGroupDeliveryZoneDetails(props) {
  var driverGroupDeliveryZoneProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverGroupDeliveryZoneDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriverGroupDeliveryZone, driverGroupDeliveryZoneProps);
};