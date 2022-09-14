"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrap = require("react-bootstrap");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styledComponents = require("styled-components");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _DriversGroupGeneralForm = require("../DriversGroupGeneralForm");

var _DriversGroupBusinesses = require("../DriversGroupBusinesses");

var _DriversGroupPaymethods = require("../DriversGroupPaymethods");

var _DriversGroupLogistics = require("../DriversGroupLogistics");

var _DriversGroupLogs = require("../DriversGroupLogs");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversGroupDetailsUI = function DriversGroupDetailsUI(props) {
  var _configState$configs, _configState$configs$, _configState$configs2, _driversGroupState$dr3, _driversGroupState$dr4, _driversGroupState$dr5;

  var driversGroupState = props.driversGroupState,
      actionState = props.actionState,
      handleParentSidebarMove = props.handleParentSidebarMove,
      handleDeleteDriversGroup = props.handleDeleteDriversGroup,
      handleNextTour = props.handleNextTour,
      handleUpdateDriversGroup = props.handleUpdateDriversGroup;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var autoAssignType = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.autoassign_type) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;
  var advancedLogistics = !!(configState !== null && configState !== void 0 && (_configState$configs2 = configState.configs) !== null && _configState$configs2 !== void 0 && _configState$configs2.advanced_logistics);

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

  var _useState7 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      confirm = _useState8[0],
      setConfirm = _useState8[1];

  var _useState9 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      alertState = _useState10[0],
      setAlertState = _useState10[1];

  (0, _react.useEffect)(function () {
    var _driversGroupMenus = !driversGroupState.driversGroup ? [{
      key: 'general',
      value: t('GENERAL', 'General')
    }, {
      key: 'businesses',
      value: t('BUSINESSES', 'Businesses')
    }] : useAdvanced && autoAssignType !== 'basic' && advancedLogistics ? [{
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

  var onDeleteGroup = function onDeleteGroup(driversGroupId) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_DRIVER_GROUP', 'Are you sure to remove this driver group?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteDriversGroup();
      }
    });
  };

  var handleNextClick = function handleNextClick() {
    setShowMenu('businesses');
    handleNextTour();
  };

  (0, _react.useEffect)(function () {
    var _driversGroupState$dr, _driversGroupState$dr2;

    setUseAdvanced(!(((_driversGroupState$dr = driversGroupState.driversGroup) === null || _driversGroupState$dr === void 0 ? void 0 : _driversGroupState$dr.autoassign_amount_drivers) === 0 && ((_driversGroupState$dr2 = driversGroupState.driversGroup) === null || _driversGroupState$dr2 === void 0 ? void 0 : _driversGroupState$dr2.orders_group_max_orders) === 0));
  }, [driversGroupState.driversGroup]);
  (0, _react.useEffect)(function () {
    handleParentSidebarMove(0);
  }, [showMenu]);
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, driversGroupState.driversGroup ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, (_driversGroupState$dr3 = driversGroupState.driversGroup) === null || _driversGroupState$dr3 === void 0 ? void 0 : _driversGroupState$dr3.name), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (_driversGroupState$dr4 = driversGroupState.driversGroup) === null || _driversGroupState$dr4 === void 0 ? void 0 : _driversGroupState$dr4.enabled,
    onChange: function onChange(enabled) {
      return handleUpdateDriversGroup({
        enabled: enabled
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onDeleteGroup();
    }
  }, t('DELETE', 'Delete'))))) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('ADD_NEW_DRIVER_GROUP', 'Add new driver group')))), /*#__PURE__*/_react.default.createElement(_styles2.MenusContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, driversGroupMenus.map(function (menu) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: menu.key,
      active: menu.key === showMenu,
      onClick: function onClick() {
        return setShowMenu(menu.key);
      }
    }, menu.value);
  }))), showMenu === 'general' && /*#__PURE__*/_react.default.createElement(_DriversGroupGeneralForm.DriversGroupGeneralForm, _extends({}, props, {
    useAdvanced: useAdvanced,
    setUseAdvanced: setUseAdvanced,
    handleNextClick: handleNextClick
  })), showMenu === 'businesses' && /*#__PURE__*/_react.default.createElement(_DriversGroupBusinesses.DriversGroupBusinesses, props), showMenu === 'paymethods' && /*#__PURE__*/_react.default.createElement(_DriversGroupPaymethods.DriversGroupPaymethods, props), showMenu === 'advanced_logistics' && /*#__PURE__*/_react.default.createElement(_DriversGroupLogistics.DriversGroupLogistics, props), showMenu === 'logs' && /*#__PURE__*/_react.default.createElement(_DriversGroupLogs.DriversGroupLogs, {
    driversGroupId: (_driversGroupState$dr5 = driversGroupState.driversGroup) === null || _driversGroupState$dr5 === void 0 ? void 0 : _driversGroupState$dr5.id
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
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

var DriversGroupDetails = function DriversGroupDetails(props) {
  var driversGroupDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriversGroupDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupDetails, driversGroupDetailsProps);
};

exports.DriversGroupDetails = DriversGroupDetails;