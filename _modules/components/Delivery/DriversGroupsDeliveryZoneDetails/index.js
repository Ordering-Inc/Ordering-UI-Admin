"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, zoneState !== null && zoneState !== void 0 && zoneState.zone ? zoneState === null || zoneState === void 0 ? void 0 : (_zoneState$zone = zoneState.zone) === null || _zoneState$zone === void 0 ? void 0 : _zoneState$zone.name : t('ZONE_DELIVERY_SETTINGS', 'Zone delivery settings')), /*#__PURE__*/_react.default.createElement(_styles.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
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
var DriverGroupDeliveryZoneDetails = function DriverGroupDeliveryZoneDetails(props) {
  var driverGroupDeliveryZoneProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverGroupDeliveryZoneDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriverGroupDeliveryZone, driverGroupDeliveryZoneProps);
};
exports.DriverGroupDeliveryZoneDetails = DriverGroupDeliveryZoneDetails;