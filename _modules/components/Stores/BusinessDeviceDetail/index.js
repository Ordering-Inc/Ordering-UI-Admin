"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeviceDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var BusinessDeviceDetailUI = function BusinessDeviceDetailUI(props) {
  var _formState$changes5, _formState$changes$na, _formState$changes6, _formState$changes$bu, _formState$changes7, _formState$changes8, _formState$changes$us, _formState$changes9, _formState$changes$co, _formState$changes10;
  var selectedDevice = props.selectedDevice,
    deleteDevice = props.deleteDevice,
    formState = props.formState,
    handleChangeFormState = props.handleChangeFormState,
    businessList = props.businessList,
    updateDevice = props.updateDevice,
    addDevice = props.addDevice;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpand = _useState2[0],
    setIsExpand = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    businessOptions = _useState4[0],
    setBusinessOptions = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    ownerOptions = _useState6[0],
    setOwnerOptions = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    businessSearchVal = _useState8[0],
    setBusinessSearchVal = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    userSearchVal = _useState10[0],
    setUserSearchVal = _useState10[1];
  var _useState11 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    alertState = _useState12[0],
    setAlertState = _useState12[1];
  var moreOptions = [{
    value: 0,
    content: t('DELETE', 'Delete')
  }];
  var expandSideBar = function expandSideBar() {
    var element = document.getElementById('deviceDetails');
    if (!element) return;
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleSubmit = function handleSubmit() {
    var _formState$changes, _formState$changes2;
    var errors = [];
    if ((formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== undefined && !(formState !== null && formState !== void 0 && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.name)) {
      errors.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name')));
    }
    if (errors.length > 0) {
      setAlertState({
        open: true,
        content: errors
      });
      return;
    }
    selectedDevice ? updateDevice(selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.id) : addDevice();
  };
  (0, _react.useEffect)(function () {
    if (businessList !== null && businessList !== void 0 && businessList.loading) return;
    var options = businessList === null || businessList === void 0 ? void 0 : businessList.businesses.filter(function (option) {
      return option === null || option === void 0 ? void 0 : option.name.toLocaleLowerCase().includes(businessSearchVal.toLocaleLowerCase());
    }).map(function (business) {
      var _theme$images;
      return {
        value: business === null || business === void 0 ? void 0 : business.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement(_styles2.Logo, {
          src: (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)
        }), business === null || business === void 0 ? void 0 : business.name)
      };
    });
    setBusinessOptions(options);
  }, [businessSearchVal, businessList]);
  (0, _react.useEffect)(function () {
    var _formState$changes3;
    if (!(businessList !== null && businessList !== void 0 && businessList.loading) && (formState !== null && formState !== void 0 && (_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.business_id || selectedDevice !== null && selectedDevice !== void 0 && selectedDevice.business_id)) {
      var _businessList$busines;
      var owners = businessList === null || businessList === void 0 || (_businessList$busines = businessList.businesses.find(function (business) {
        var _formState$changes4;
        return business.id === ((formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.business_id) || (selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.business_id));
      })) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.owners;
      if ((owners === null || owners === void 0 ? void 0 : owners.length) > 0) {
        var options = owners.filter(function (option) {
          return option === null || option === void 0 ? void 0 : option.name.toLocaleLowerCase().includes(userSearchVal.toLocaleLowerCase());
        }).map(function (user) {
          return {
            value: user === null || user === void 0 ? void 0 : user.id,
            content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Logo, {
              src: user === null || user === void 0 ? void 0 : user.photo
            }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null), user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname)
          };
        });
        setOwnerOptions(options);
      }
    }
  }, [userSearchVal, selectedDevice, formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.business_id, businessList]);
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: formState === null || formState === void 0 || (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.result]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailHeder, null, /*#__PURE__*/_react.default.createElement("div", null, (selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.name) && /*#__PURE__*/_react.default.createElement("span", null, selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.name), !selectedDevice && /*#__PURE__*/_react.default.createElement("span", null, t('ADD_NEW_DEVICE', 'Add new device'))), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSideBar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), selectedDevice && /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    options: moreOptions,
    onChange: function onChange() {
      return deleteDevice();
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_formState$changes$na = formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.name,
    onChange: function onChange(e) {
      return handleChangeFormState({
        name: e.target.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('BUSINESS', 'Business')), businessList !== null && businessList !== void 0 && businessList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 44
  }) : /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: businessOptions,
    className: "select",
    defaultValue: (_formState$changes$bu = formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.business_id) !== null && _formState$changes$bu !== void 0 ? _formState$changes$bu : selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.business_id,
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleChangeFormState({
        business_id: value
      });
    },
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: businessSearchVal,
    handleChangeSearch: function handleChangeSearch(val) {
      return setBusinessSearchVal(val);
    }
  })), ((formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.business_id) || (selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.business_id)) && /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('BUSINESS_OWNER', 'Business owner')), businessList !== null && businessList !== void 0 && businessList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 44
  }) : /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: ownerOptions,
    className: "select",
    defaultValue: (_formState$changes$us = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.user_id) !== null && _formState$changes$us !== void 0 ? _formState$changes$us : selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.user_id,
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleChangeFormState({
        user_id: value
      });
    },
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: userSearchVal,
    handleChangeSearch: function handleChangeSearch(val) {
      return setUserSearchVal(val);
    }
  })), selectedDevice && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('DEVICE_CODE', 'Device Code')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_formState$changes$co = formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.code) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.code,
    onChange: function onChange(e) {
      return handleChangeFormState({
        code: e.target.value
      });
    },
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleSubmit
  }, t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('DEVICES', 'Devices'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var BusinessDeviceDetail = function BusinessDeviceDetail(props) {
  var businessDeviceDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessDeviceDetailUI,
    propsToFetch: ['id', 'name', 'logo', 'owners', 'address']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessDeviceDetail, businessDeviceDetailProps);
};
exports.BusinessDeviceDetail = BusinessDeviceDetail;