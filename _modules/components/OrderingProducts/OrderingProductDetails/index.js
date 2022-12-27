"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProductDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _OrderingProductGeneralDetails = require("../OrderingProductGeneralDetails");
var _SiteTheme = require("../SiteTheme");
var _styles2 = require("./styles");
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
var OrderingProductDetailsUI = function OrderingProductDetailsUI(props) {
  var _siteState$site, _siteState$site2;
  var siteState = props.siteState,
    isAddMode = props.isAddMode,
    handleDeleteSite = props.handleDeleteSite;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('general'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTab = _useState2[0],
    setSelectedTab = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var tabs = [{
    key: 'general',
    content: t('GENERAL', 'General')
  }, {
    key: 'theme',
    content: t('THEME', 'Theme')
  }];
  var moreOptions = [{
    value: 0,
    content: t('DELETE', 'Delete')
  }];
  var onClickDelete = function onClickDelete() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PRODUCT', 'Product')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteSite();
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, (_siteState$site = siteState.site) === null || _siteState$site === void 0 ? void 0 : _siteState$site.name)), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    options: moreOptions,
    onChange: function onChange() {
      return onClickDelete();
    }
  }))), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, tabs.map(function (tab) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: tab.key,
      active: selectedTab === tab.key,
      onClick: function onClick() {
        return setSelectedTab(tab.key);
      }
    }, tab.content);
  })), selectedTab === 'general' && /*#__PURE__*/_react.default.createElement(_OrderingProductGeneralDetails.OrderingProductGeneralDetails, props), selectedTab === 'theme' && /*#__PURE__*/_react.default.createElement(_SiteTheme.SiteTheme, {
    siteId: (_siteState$site2 = siteState.site) === null || _siteState$site2 === void 0 ? void 0 : _siteState$site2.id
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
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
var OrderingProductDetails = function OrderingProductDetails(props) {
  var productDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderingProductDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SiteDetails, productDetailsProps);
};
exports.OrderingProductDetails = OrderingProductDetails;