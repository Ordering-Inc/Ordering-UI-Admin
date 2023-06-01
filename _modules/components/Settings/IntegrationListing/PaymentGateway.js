"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentGateway = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _SettingsDetail = require("../SettingsDetail");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("./styles");
var _BacCredomatic = require("../BacCredomatic");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var PaymentGatewayUI = function PaymentGatewayUI(props) {
  var _categoryList$categor;
  var categoryList = props.categoryList,
    showOption = props.showOption,
    setShowOption = props.setShowOption,
    handleCloseSettings = props.handleCloseSettings,
    handleOpenBasicSetting = props.handleOpenBasicSetting;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var allowOptions = ['stripe', 'stripe_connect'];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCategory = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showDetail = _useState4[0],
    setShowDetail = _useState4[1];
  var handleBackRedirect = function handleBackRedirect() {
    setShowDetail(false);
    setSelectedCategory(null);
    history.replace("".concat(location.pathname));
  };
  var onBasicSettingsRedirect = function onBasicSettingsRedirect(_ref) {
    var category = _ref.category;
    if (!category) {
      return events.emit('go_to_page', {
        page: 'integrations',
        replace: true
      });
    }
    if (category) {
      events.emit('go_to_page', {
        page: 'integrations',
        search: "?category=".concat(category),
        replace: true
      });
    }
  };
  var handleOpenSetting = function handleOpenSetting(category, initialRender) {
    setSelectedCategory(category);
    setShowOption('payment-gateway');
    setShowDetail(true);
    if (!initialRender) {
      history.replace("".concat(location.pathname, "?category=").concat(category === null || category === void 0 ? void 0 : category.id));
    }
  };
  (0, _react.useEffect)(function () {
    if (categoryList.loading) return;
    var categoryId = query.get('category');
    if (categoryId) {
      var categorySelected = categoryList === null || categoryList === void 0 ? void 0 : categoryList.categories.find(function (item) {
        return (item === null || item === void 0 ? void 0 : item.id) === parseInt(categoryId);
      });
      if (categorySelected) {
        handleOpenSetting(categorySelected, true);
      }
    }
  }, [categoryList.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles.CategorySection, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PAYMENT_GETWAYS', 'Payment Gateways')), !(categoryList !== null && categoryList !== void 0 && categoryList.loading) && /*#__PURE__*/_react.default.createElement(_styles.SettingList, null, categoryList === null || categoryList === void 0 ? void 0 : (_categoryList$categor = categoryList.categories) === null || _categoryList$categor === void 0 ? void 0 : _categoryList$categor.filter(function (item) {
    return allowOptions.includes(item.key);
  }).map(function (setting) {
    return /*#__PURE__*/_react.default.createElement(_styles.SettingItemContainer, {
      key: setting === null || setting === void 0 ? void 0 : setting.id,
      onClick: function onClick() {
        return handleOpenSetting(setting);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GearFill, null)), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, setting === null || setting === void 0 ? void 0 : setting.name), /*#__PURE__*/_react.default.createElement("p", null, setting === null || setting === void 0 ? void 0 : setting.description)));
  }), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContainer, {
    onClick: function onClick() {
      return handleOpenBasicSetting('bac_credomatic');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GearFill, null)), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, t('BAC_CREDOMATIC', 'BAC Credomatic')), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('BAC_CREDOMATIC_DESCRIPTION', 'Accept payments in Central America')
    }
  })))), (categoryList === null || categoryList === void 0 ? void 0 : categoryList.loading) && /*#__PURE__*/_react.default.createElement(_styles.SettingList, null, _toConsumableArray(Array(2).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SettingItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 24,
      height: 24
    })), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 18,
      width: 120
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 13,
      count: 2
    }))));
  })), showDetail && showOption === 'payment-gateway' && /*#__PURE__*/_react.default.createElement(_SettingsDetail.SettingsDetail, _extends({}, props, {
    open: showDetail,
    category: selectedCategory,
    onClose: handleBackRedirect,
    onBasicSettingsRedirect: onBasicSettingsRedirect
  })), showOption === 'bac_credomatic' && /*#__PURE__*/_react.default.createElement(_BacCredomatic.BacCredomatic, {
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }));
};
var PaymentGateway = function PaymentGateway(props) {
  var paymentGatewayProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentGatewayUI,
    settingsType: 'key_basic'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Settings, paymentGatewayProps);
};
exports.PaymentGateway = PaymentGateway;