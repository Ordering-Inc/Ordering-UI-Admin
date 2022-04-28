"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessWalletsList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Shared = require("../../Shared");

var _FirstSelect = require("../../../styles/Select/FirstSelect");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessWalletsListUI = function BusinessWalletsListUI(props) {
  var walletsListState = props.walletsListState,
      setIsExtendExtraOpen = props.setIsExtendExtraOpen,
      setIsOpenWalletDetails = props.setIsOpenWalletDetails,
      isClose = props.isClose,
      handleClosePaymethodDetails = props.handleClosePaymethodDetails,
      handleUpdateWallet = props.handleUpdateWallet;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpenDetails = _useState2[0],
      setIsOpenDetails = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      currentConfig = _useState4[0],
      setCurrentConfig = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      options = _useState6[0],
      setOptions = _useState6[1];

  var handleOpenWallet = function handleOpenWallet(config) {
    setIsOpenWalletDetails(true);
    handleClosePaymethodDetails();
    setCurrentConfig(config);
    setIsExtendExtraOpen(true);
    setIsOpenDetails(true);
  };

  var handleCloseWallet = function handleCloseWallet() {
    setIsOpenWalletDetails(false);
    setIsOpenDetails(false);
    setIsExtendExtraOpen(false);
    setCurrentConfig(null);
  };

  (0, _react.useEffect)(function () {
    var _currentConfig$option;

    if (!isOpenDetails || !(currentConfig !== null && currentConfig !== void 0 && currentConfig.options)) return;
    var selectedTypes = (_currentConfig$option = currentConfig.options) === null || _currentConfig$option === void 0 ? void 0 : _currentConfig$option.map(function (item) {
      return {
        value: item.value,
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t(item.text.toUpperCase()))
      };
    });
    setOptions(selectedTypes);
  }, [currentConfig, isOpenDetails]);
  (0, _react.useEffect)(function () {
    if (!isClose) return;
    setIsOpenWalletDetails(false);
    setIsOpenDetails(false);
    setCurrentConfig(null);
  }, [isClose]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, walletsListState.wallets.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WalletsListContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('WALLETS', 'Wallets')), walletsListState.wallets.map(function (config) {
    return /*#__PURE__*/_react.default.createElement(_styles.WalletOption, {
      key: config.id,
      active: config.id === (currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.id),
      onClick: function onClick() {
        return handleOpenWallet(config);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.WalletName, null, config.name), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  })), isOpenDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: isOpenDetails,
    onClose: handleCloseWallet
  }, /*#__PURE__*/_react.default.createElement(_styles.DetailsContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.name), (currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.type) === 2 && options && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.value,
    options: options,
    onChange: function onChange(typeValue) {
      return handleUpdateWallet(currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.id, {
        value: typeValue
      });
    },
    placeholder: t('SELECT_A_OPTION', 'Select a option')
  }))));
};

var BusinessWalletsList = function BusinessWalletsList(props) {
  var businessWalletsListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessWalletsListUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessWalletsList, businessWalletsListProps);
};

exports.BusinessWalletsList = BusinessWalletsList;