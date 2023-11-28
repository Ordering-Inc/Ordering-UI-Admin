"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckoutFieldsSetting = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactRouterDom = require("react-router-dom");
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var CheckoutFieldsSettingUI = function CheckoutFieldsSettingUI(props) {
  var checkoutFieldsState = props.checkoutFieldsState,
    handleChangeCheckoutFieldSetting = props.handleChangeCheckoutFieldSetting,
    sitesState = props.sitesState,
    setMoveDistance = props.setMoveDistance,
    selectedSiteId = props.selectedSiteId,
    setSelectedSiteId = props.setSelectedSiteId,
    actionState = props.actionState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var history = (0, _reactRouterDom.useHistory)();
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isExpand = _useState4[0],
    setIsExpand = _useState4[1];
  var orderValidationFields = ['name', 'middle_name', 'lastname', 'second_lastname', 'email', 'mobile_phone', 'city_dropdown_option', 'address', 'zipcode', 'address_notes', 'coupon', 'driver_tip', 'comments', 'birthdate'];
  var handleOpenSiteSettingDetails = function handleOpenSiteSettingDetails(siteId, isInitialRender) {
    // handleGetSiteConfigs(siteId)
    setSelectedSiteId(siteId);
    setMoveDistance(500);
    if (!isInitialRender) {
      var category = query.get('category');
      history.replace("".concat(location.pathname, "?category=").concat(category, "&site=").concat(siteId));
    }
  };
  var expandSideBar = function expandSideBar() {
    var element = document.getElementById('sideSlider');
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  var handleCloseDetails = function handleCloseDetails() {
    setSelectedSiteId(null);
    setMoveDistance(0);
    var category = query.get('category');
    history.replace("".concat(location.pathname, "?category=").concat(category));
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SitesListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CHECKOUT_CUSTOMER_FIELDS', 'Checkout and Customer fields')), width > 576 && !selectedSiteId && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSideBar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null))), sitesState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SitesWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SiteItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 14
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.SitesWrapper, null, sitesState.sites.map(function (site) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SiteItem, {
      key: site.id,
      active: site.id === selectedSiteId,
      onClick: function onClick() {
        return handleOpenSiteSettingDetails(site.id);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, site.name), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null));
  }))), selectedSiteId && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: selectedSiteId,
    onClose: function onClose() {
      return handleCloseDetails();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.CheckoutFieldsDetailsContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SETTINGS', 'Settings')), /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "name"
  }, t('FIELD', 'Field')), /*#__PURE__*/_react.default.createElement("div", {
    className: "required"
  }, t('REQUIRED', 'Required')), /*#__PURE__*/_react.default.createElement("div", {
    className: "status"
  }, t('STATE', 'Status'))), actionState !== null && actionState !== void 0 && actionState.loading && actionState !== null && actionState !== void 0 && actionState.isPost ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "name"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "required"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 30,
      style: {
        borderRadius: 20
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "status"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 30,
      style: {
        borderRadius: 20
      }
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, checkoutFieldsState.fields.filter(function (item) {
    return (item === null || item === void 0 ? void 0 : item.site_id) === parseInt(selectedSiteId);
  }).sort(function (a, b) {
    var indexA = orderValidationFields.indexOf(a === null || a === void 0 ? void 0 : a.validation_field.code);
    var indexB = orderValidationFields.indexOf(b === null || b === void 0 ? void 0 : b.validation_field.code);
    return indexA - indexB;
  }).map(function (field) {
    var _field$validation_fie, _field$validation_fie2, _field$validation_fie3;
    return /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
      key: field.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "name"
    }, t(field === null || field === void 0 || (_field$validation_fie = field.validation_field) === null || _field$validation_fie === void 0 ? void 0 : _field$validation_fie.code.toUpperCase())), /*#__PURE__*/_react.default.createElement("div", {
      className: "required"
    }, /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: field.required,
      disabled: (field === null || field === void 0 || (_field$validation_fie2 = field.validation_field) === null || _field$validation_fie2 === void 0 ? void 0 : _field$validation_fie2.code) === 'email',
      onChange: function onChange(val) {
        return handleChangeCheckoutFieldSetting(field.validation_field_id, selectedSiteId, {
          required: val
        });
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "status"
    }, /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: field.enabled,
      disabled: (field === null || field === void 0 || (_field$validation_fie3 = field.validation_field) === null || _field$validation_fie3 === void 0 ? void 0 : _field$validation_fie3.code) === 'email',
      onChange: function onChange(val) {
        return handleChangeCheckoutFieldSetting(field.validation_field_id, selectedSiteId, {
          enabled: val
        });
      }
    })));
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
var CheckoutFieldsSetting = exports.CheckoutFieldsSetting = function CheckoutFieldsSetting(props) {
  var checkoutFieldsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CheckoutFieldsSettingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CheckoutFieldsSetting, checkoutFieldsProps);
};