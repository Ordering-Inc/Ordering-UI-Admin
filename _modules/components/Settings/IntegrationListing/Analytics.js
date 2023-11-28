"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Analytics = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _SettingsDetail = require("../SettingsDetail");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AnalyticsUI = function AnalyticsUI(props) {
  var _categoryList$categor;
  var categoryList = props.categoryList,
    showOption = props.showOption,
    setShowOption = props.setShowOption;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var allowOptions = ['facebook_pixel', 'segment', 'google'];
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
    setShowOption('analytics');
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
  return /*#__PURE__*/_react.default.createElement(_styles.CategorySection, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ANALYTICS', 'Analytics')), !(categoryList !== null && categoryList !== void 0 && categoryList.loading) && /*#__PURE__*/_react.default.createElement(_styles.SettingList, null, categoryList === null || categoryList === void 0 || (_categoryList$categor = categoryList.categories) === null || _categoryList$categor === void 0 ? void 0 : _categoryList$categor.filter(function (item) {
    return allowOptions.includes(item.key);
  }).map(function (setting) {
    return /*#__PURE__*/_react.default.createElement(_styles.SettingItemContainer, {
      key: setting === null || setting === void 0 ? void 0 : setting.id,
      onClick: function onClick() {
        return handleOpenSetting(setting);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GearFill, null)), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, setting === null || setting === void 0 ? void 0 : setting.name), /*#__PURE__*/_react.default.createElement("p", null, setting === null || setting === void 0 ? void 0 : setting.description)));
  })), (categoryList === null || categoryList === void 0 ? void 0 : categoryList.loading) && /*#__PURE__*/_react.default.createElement(_styles.SettingList, null, _toConsumableArray(Array(2).keys()).map(function (i) {
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
  })), showDetail && showOption === 'analytics' && /*#__PURE__*/_react.default.createElement(_SettingsDetail.SettingsDetail, _extends({}, props, {
    open: showDetail,
    category: selectedCategory,
    onClose: handleBackRedirect,
    onBasicSettingsRedirect: onBasicSettingsRedirect
  })));
};
var Analytics = exports.Analytics = function Analytics(props) {
  var paymentGatewayProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AnalyticsUI,
    settingsType: 'key_operation'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Settings, paymentGatewayProps);
};