"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupGeneralForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactHookForm = require("react-hook-form");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _DriversGroupDrivers = require("../DriversGroupDrivers");
var _DriversGroupCompanies = require("../DriversGroupCompanies");
var _styles2 = require("./styles");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriversGroupGeneralForm = exports.DriversGroupGeneralForm = function DriversGroupGeneralForm(props) {
  var _ref, _changesState$name, _driversGroupState$dr, _ref2, _changesState$driver_, _driversGroupState$dr2, _changesState$type, _driversGroupState$dr3, _driversGroupState$dr4, _changesState$priorit, _driversGroupState$dr5;
  var driversGroupState = props.driversGroupState,
    driversManagers = props.driversManagers,
    changesState = props.changesState,
    handleChangesState = props.handleChangesState,
    handleUpdateDriversGroup = props.handleUpdateDriversGroup,
    handleAddDriversGroup = props.handleAddDriversGroup,
    actionDisabled = props.actionDisabled,
    isTourOpen = props.isTourOpen,
    handleNextClick = props.handleNextClick,
    selectedDriverManager = props.selectedDriverManager,
    handleSelectDriverManager = props.handleSelectDriverManager,
    handleSelectAllManagers = props.handleSelectAllManagers,
    handleChangeMaxDistance = props.handleChangeMaxDistance,
    useAdvanced = props.useAdvanced,
    handleLogistic = props.handleLogistic;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchManagerValue = _useState4[0],
    setSearchManagerValue = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    filteredManagers = _useState6[0],
    setFilteredManagers = _useState6[1];
  var typeOptions = [{
    value: 0,
    content: t('IN_HOUSE_DRIVERS', 'In house drivers')
  }, {
    value: 1,
    content: t('DRIVER_COMPANIES', 'Driver companies')
  }];
  var priorityOptions = [{
    value: -1,
    content: t('LOW', 'Low')
  }, {
    value: 0,
    content: t('NORMAL', 'Normal')
  }, {
    value: 1,
    content: t('HIGH', 'High')
  }, {
    value: 2,
    content: t('URGENT', 'Urgent')
  }];
  var onSubmit = function onSubmit() {
    if (driversGroupState.driversGroup) {
      if ((changesState === null || changesState === void 0 ? void 0 : changesState.drivers) === '[]') {
        setAlertState({
          open: true,
          content: [t('CHOOSE_LEAST_ONE_DRIVER', 'You must choose at least one driver.')]
        });
        return;
      }
      handleUpdateDriversGroup(changesState);
    } else {
      // if (user?.level !== 5 && !changesState?.administrator_id) {
      //   setAlertState({
      //     open: true,
      //     content: [t('VALIDATION_ERROR_REQUIRED', 'The manager is required.').replace('_attribute_', t('DRIVER_MANAGER', 'Driver manager'))]
      //   })
      //   return
      // }
      // if (typeof changesState?.priority === 'undefined') {
      //   setAlertState({
      //     open: true,
      //     content: [t('VALIDATION_ERROR_REQUIRED', 'The priority is required.').replace('_attribute_', t('PRIORITY', 'Priority'))]
      //   })
      //   return
      // }
      if ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 && !(changesState !== null && changesState !== void 0 && changesState.drivers)) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The drivers is required.').replace('_attribute_', t('DRIVERS', 'Drivers'))]
        });
        return;
      }
      if ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 1 && !(changesState !== null && changesState !== void 0 && changesState.driver_companies)) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_REQUIRED', 'The Driver company is required.').replace('_attribute_', t('DRIVER_COMPANY', 'Driver company'))]
        });
        return;
      }
      if (isTourOpen) {
        handleNextClick();
      } else {
        handleAddDriversGroup();
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    var _filteredManagers = [];
    if (searchManagerValue) {
      _filteredManagers = driversManagers.filter(function (manager) {
        var _manager$name, _manager$email;
        return (manager === null || manager === void 0 || (_manager$name = manager.name) === null || _manager$name === void 0 ? void 0 : _manager$name.toLowerCase().includes(searchManagerValue === null || searchManagerValue === void 0 ? void 0 : searchManagerValue.toLowerCase())) || (manager === null || manager === void 0 || (_manager$email = manager.email) === null || _manager$email === void 0 ? void 0 : _manager$email.toLowerCase().includes(searchManagerValue === null || searchManagerValue === void 0 ? void 0 : searchManagerValue.toLowerCase()));
      });
    } else {
      _filteredManagers = _toConsumableArray(driversManagers);
    }
    setFilteredManagers(_filteredManagers);
  }, [searchManagerValue, driversManagers]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    "data-tour": "tour_fill_group",
    onSubmit: handleSubmit(onSubmit),
    disabled: actionDisabled
  }, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    value: (_ref = (_changesState$name = changesState === null || changesState === void 0 ? void 0 : changesState.name) !== null && _changesState$name !== void 0 ? _changesState$name : (_driversGroupState$dr = driversGroupState.driversGroup) === null || _driversGroupState$dr === void 0 ? void 0 : _driversGroupState$dr.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangesState({
        name: e.target.value
      });
    },
    placeholder: t('NAME', 'Name'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Project is required').replace('_attribute_', t('NAME', 'Name'))
    }),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DRIVER_AVAILABLE_MAX_DISTANCE', 'Driver available max distance')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "driver_available_max_distance",
    value: (_ref2 = (_changesState$driver_ = changesState === null || changesState === void 0 ? void 0 : changesState.driver_available_max_distance) !== null && _changesState$driver_ !== void 0 ? _changesState$driver_ : (_driversGroupState$dr2 = driversGroupState.driversGroup) === null || _driversGroupState$dr2 === void 0 ? void 0 : _driversGroupState$dr2.driver_available_max_distance) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeMaxDistance(e.target.value);
    },
    placeholder: t('WITHOUT_RESTRICTIONS', 'Without restrictions'),
    autoComplete: "off"
  })), (user === null || user === void 0 ? void 0 : user.level) !== 5 && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DRIVER_MANAGER', 'Driver manager')), /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    placeholder: t('SEARCH', 'Search'),
    isCustomLayout: true,
    lazyLoad: true,
    search: searchManagerValue,
    onSearch: function onSearch(val) {
      return setSearchManagerValue(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "button",
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllManagers(true);
    }
  }, t('SELECT_ALL', 'Select all')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "button",
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllManagers(false);
    }
  }, t('SELECT_NONE', 'Select none'))), /*#__PURE__*/_react.default.createElement(_styles2.DriverManagerContainer, null, filteredManagers.map(function (driverManager) {
    return /*#__PURE__*/_react.default.createElement(_styles2.DriverManagerWrapper, {
      key: driverManager.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      value: driverManager === null || driverManager === void 0 ? void 0 : driverManager.id,
      checked: selectedDriverManager === null || selectedDriverManager === void 0 ? void 0 : selectedDriverManager.includes(driverManager === null || driverManager === void 0 ? void 0 : driverManager.id),
      onChange: function onChange(e) {
        return handleSelectDriverManager(driverManager === null || driverManager === void 0 ? void 0 : driverManager.id, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, driverManager !== null && driverManager !== void 0 && driverManager.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: driverManager === null || driverManager === void 0 ? void 0 : driverManager.photo,
      alt: "driverManager"
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.ManagerInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, driverManager === null || driverManager === void 0 ? void 0 : driverManager.name), /*#__PURE__*/_react.default.createElement("p", null, driverManager === null || driverManager === void 0 ? void 0 : driverManager.email)));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    isSecondIcon: true,
    placeholder: t('SELECT_TYPE', 'Select type'),
    options: typeOptions,
    defaultValue: (_changesState$type = changesState === null || changesState === void 0 ? void 0 : changesState.type) !== null && _changesState$type !== void 0 ? _changesState$type : (_driversGroupState$dr3 = driversGroupState.driversGroup) === null || _driversGroupState$dr3 === void 0 ? void 0 : _driversGroupState$dr3.type,
    onChange: function onChange(val) {
      return handleChangesState({
        type: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: useAdvanced,
    onChange: function onChange(e) {
      return handleLogistic(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, t('USE_ADVANCED_LOGISTIC', 'Use advanced logistic'))), (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && ((_driversGroupState$dr4 = driversGroupState.driversGroup) === null || _driversGroupState$dr4 === void 0 ? void 0 : _driversGroupState$dr4.type) === 0 ? /*#__PURE__*/_react.default.createElement(_DriversGroupDrivers.DriversGroupDrivers, props) : /*#__PURE__*/_react.default.createElement(_DriversGroupCompanies.DriversGroupCompanies, props), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    isSecondIcon: true,
    placeholder: t('SELECT_PRIORITY', 'Select priority'),
    options: priorityOptions,
    defaultValue: (_changesState$priorit = changesState === null || changesState === void 0 ? void 0 : changesState.priority) !== null && _changesState$priorit !== void 0 ? _changesState$priorit : (_driversGroupState$dr5 = driversGroupState.driversGroup) === null || _driversGroupState$dr5 === void 0 ? void 0 : _driversGroupState$dr5.priority,
    onChange: function onChange(val) {
      return handleChangesState({
        priority: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: Object.keys(changesState).length === 0
  }, isTourOpen ? t('NEXT', 'Next') : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, driversGroupState.driversGroup ? t('SAVE', 'Save') : t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }));
};