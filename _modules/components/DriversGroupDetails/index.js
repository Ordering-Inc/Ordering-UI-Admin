"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../styles");

var _DragScroll = require("../DragScroll");

var _DriversGroupGeneralForm = require("../DriversGroupGeneralForm");

var _DriversGroupBusinesses = require("../DriversGroupBusinesses");

var _DriversGroupPaymethods = require("../DriversGroupPaymethods");

var _DriversGroupLogistics = require("../DriversGroupLogistics");

var _DriversGroupLogs = require("../DriversGroupLogs");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversGroupDetails = function DriversGroupDetails(props) {
  var curDriversGroup = props.curDriversGroup,
      handleParentSidebarMove = props.handleParentSidebarMove;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)('general'),
      _useState2 = _slicedToArray(_useState, 2),
      showMenu = _useState2[0],
      setShowMenu = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      useAdvanced = _useState4[0],
      setUseAdvanced = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      driversGroupMenus = _useState6[0],
      setDriversGroupMenus = _useState6[1];

  (0, _react.useEffect)(function () {
    var _driversGroupMenus = useAdvanced ? [{
      key: 'general',
      value: t('GENERAL', 'General')
    }, {
      key: 'businesses',
      value: t('BUSINESSES', 'Businesses')
    }, {
      key: 'paymethods',
      value: t('PAYMENT_METHODS', 'Payment methods')
    }, {
      key: 'advanced_logistics',
      value: t('ADVANCED_LOGISTICS', 'Advanced logistics')
    }, {
      key: 'logs',
      value: t('LOGS', 'Logs')
    }] : [{
      key: 'general',
      value: t('GENERAL', 'General')
    }, {
      key: 'businesses',
      value: t('BUSINESSES', 'Businesses')
    }, {
      key: 'paymethods',
      value: t('PAYMENT_METHODS', 'Payment methods')
    }, {
      key: 'logs',
      value: t('LOGS', 'Logs')
    }];

    setDriversGroupMenus(_driversGroupMenus);
  }, [useAdvanced]);
  (0, _react.useEffect)(function () {
    setUseAdvanced(!((curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_amount_drivers) === 0 && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.orders_group_max_orders) === 0));
  }, [curDriversGroup]);
  (0, _react.useEffect)(function () {
    handleParentSidebarMove(0);
  }, [showMenu]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, curDriversGroup ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.name), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.enabled
  })) : /*#__PURE__*/_react.default.createElement("h1", null, t('ADD_NEW_DRIVER_GROUP ', 'Add new driver group'))), curDriversGroup && /*#__PURE__*/_react.default.createElement(_styles2.MenusContainer, null, /*#__PURE__*/_react.default.createElement(_DragScroll.DragScroll, null, driversGroupMenus.map(function (menu) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: menu.key,
      active: menu.key === showMenu,
      onClick: function onClick() {
        return setShowMenu(menu.key);
      }
    }, menu.value);
  }))), (showMenu === 'general' || !curDriversGroup) && /*#__PURE__*/_react.default.createElement(_DriversGroupGeneralForm.DriversGroupGeneralForm, _extends({}, props, {
    useAdvanced: useAdvanced,
    setUseAdvanced: setUseAdvanced
  })), showMenu === 'businesses' && /*#__PURE__*/_react.default.createElement(_DriversGroupBusinesses.DriversGroupBusinesses, props), showMenu === 'paymethods' && /*#__PURE__*/_react.default.createElement(_DriversGroupPaymethods.DriversGroupPaymethods, props), showMenu === 'advanced_logistics' && /*#__PURE__*/_react.default.createElement(_DriversGroupLogistics.DriversGroupLogistics, props), showMenu === 'logs' && /*#__PURE__*/_react.default.createElement(_DriversGroupLogs.DriversGroupLogs, {
    driversGroupId: curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.id
  })));
};

exports.DriversGroupDetails = DriversGroupDetails;