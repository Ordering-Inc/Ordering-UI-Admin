"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeviceListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
var _BusinessDeviceDetail = require("../BusinessDeviceDetail");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var BusinessDeviceListingUI = function BusinessDeviceListingUI(props) {
  var searchValue = props.searchValue,
    _onSearch = props.onSearch,
    deviceListState = props.deviceListState,
    handleUpdateDeviceList = props.handleUpdateDeviceList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    deviceList = _useState2[0],
    setDeviceList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedDevice = _useState6[0],
    setSelectedDevice = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isOpen = _useState8[0],
    setIsOpen = _useState8[1];
  var _useState9 = (0, _react.useState)({
      device_name: true,
      business: true
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    allowColumns = _useState10[0],
    setAllowColumns = _useState10[1];
  var optionsDefault = [{
    value: 'device_name',
    content: t('DEVICE_NAME', 'Device Name')
  }, {
    value: 'business',
    content: t('BUSINESS', 'Business')
  }];
  var handleCloseSidebar = function handleCloseSidebar() {
    setIsOpen(false);
    setSelectedDevice(null);
    (0, _utils.removeQueryToUrl)(['id']);
  };
  var handleOpenSideBar = function handleOpenSideBar(id) {
    if (id) {
      var device = deviceListState === null || deviceListState === void 0 ? void 0 : deviceListState.devices.find(function (item) {
        return item.id === id;
      });
      setSelectedDevice(device);
    } else {
      setSelectedDevice(null);
    }
    setIsOpen(true);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleClickBrand = function handleClickBrand(e, brandId, isInitialRender) {
    var _e$target;
    var isInvalid = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.brand_enable_control');
    if (isInvalid) return;
    handleOpenSideBar(brandId);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        id: brandId
      });
    }
  };
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };
  (0, _react.useEffect)(function () {
    var _deviceListState$devi;
    if ((deviceListState === null || deviceListState === void 0 || (_deviceListState$devi = deviceListState.devices) === null || _deviceListState$devi === void 0 ? void 0 : _deviceListState$devi.length) > 0) {
      var devices = [];
      if (searchValue) {
        var _deviceListState$devi2;
        devices = deviceListState === null || deviceListState === void 0 || (_deviceListState$devi2 = deviceListState.devices) === null || _deviceListState$devi2 === void 0 ? void 0 : _deviceListState$devi2.filter(function (device) {
          var _device$name;
          return (_device$name = device.name) === null || _device$name === void 0 ? void 0 : _device$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
        });
      } else {
        devices = _toConsumableArray(deviceListState === null || deviceListState === void 0 ? void 0 : deviceListState.devices);
      }
      setDeviceList(devices);
    }
  }, [deviceListState, searchValue]);
  (0, _react.useEffect)(function () {
    if ((deviceList === null || deviceList === void 0 ? void 0 : deviceList.length) > 0 && selectedDevice) {
      var _deviceListState$devi3;
      var device = deviceListState === null || deviceListState === void 0 || (_deviceListState$devi3 = deviceListState.devices) === null || _deviceListState$devi3 === void 0 ? void 0 : _deviceListState$devi3.find(function (item) {
        return item.id === (selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.id);
      });
      setSelectedDevice(device);
    }
  }, [deviceList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('DEVICES', 'Devices'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenSideBar();
    }
  }, t('ADD_NEW_DEVICE', 'Add new device')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BrandListTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandListTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.device_name) && /*#__PURE__*/_react.default.createElement("th", null, t('DEVICE_NAME', 'Device Name')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("th", null, t('BUSINESS', 'Business')), /*#__PURE__*/_react.default.createElement("th", {
    className: "allow-colums action"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    handleChangeAllowColumns: handleChangeAllowColumns,
    title: t('DISPLAYED_DATA_THE_ORDER', 'Displayed data the order')
  })))), deviceListState.loading ? _toConsumableArray(Array(8).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BrandBody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.device_name) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 20
    })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.BrandGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSkeleton: deviceListState === null || deviceListState === void 0 ? void 0 : deviceListState.loading
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 32,
      height: 32
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 20
    }))))), /*#__PURE__*/_react.default.createElement("td", null)));
  }) : deviceList.map(function (device) {
    var _device$business, _theme$images, _device$business2, _device$business3;
    return /*#__PURE__*/_react.default.createElement(_styles2.BrandBody, {
      key: device.id,
      active: device.id === (selectedDevice === null || selectedDevice === void 0 ? void 0 : selectedDevice.id),
      onClick: function onClick(e) {
        return handleClickBrand(e, device.id);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.device_name) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, device === null || device === void 0 ? void 0 : device.name))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.BrandGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage((device === null || device === void 0 || (_device$business = device.business) === null || _device$business === void 0 ? void 0 : _device$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit')
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, device === null || device === void 0 || (_device$business2 = device.business) === null || _device$business2 === void 0 ? void 0 : _device$business2.name), /*#__PURE__*/_react.default.createElement("span", null, device === null || device === void 0 || (_device$business3 = device.business) === null || _device$business3 === void 0 ? void 0 : _device$business3.address)))), /*#__PURE__*/_react.default.createElement("td", null)));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BrandListBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenSideBar();
    }
  }, t('ADD_NEW_DEVICE', 'Add new device'))), isOpen && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "deviceDetails",
    defaultSideBarWidth: 500,
    open: isOpen,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessDeviceDetail.BusinessDeviceDetail, {
    selectedDevice: selectedDevice,
    devices: deviceListState === null || deviceListState === void 0 ? void 0 : deviceListState.devices,
    handleUpdateDeviceList: handleUpdateDeviceList,
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('TRANSLATIONS', 'Translations'),
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
var BusinessDeviceListing = function BusinessDeviceListing(props) {
  var businessDeviceListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessDeviceListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessDeviceListing, businessDeviceListingProps);
};
exports.BusinessDeviceListing = BusinessDeviceListing;