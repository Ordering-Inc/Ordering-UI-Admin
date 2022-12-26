"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessOrderingChannels = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
var _BusinessWidgets = require("../BusinessWidgets");
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
var BusinessOrderingChannels = function BusinessOrderingChannels(props) {
  var formState = props.formState,
    handleUpdateBusinessClick = props.handleUpdateBusinessClick,
    business = props.business,
    setFormState = props.setFormState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    slug = _useState2[0],
    setSlug = _useState2[1];
  var _useState3 = (0, _react.useState)('custom_slug'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedOption = _useState4[0],
    setSelectedOption = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: [],
      success: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var optionList = [{
    key: 'custom_slug',
    name: t('CUSTOM_SLUG', 'Custom slug')
  }, {
    key: 'widgets',
    name: t('WIDGETS', 'Widgets')
  }];
  var changeCustomslug = function changeCustomslug() {
    if (slug === '') {
      setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: true,
        content: [t('SLUG_REQUIRED', 'Slug is required')]
      }));
      return;
    }
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        slug: slug
      }
    }));
  };
  var closeAlert = function closeAlert() {
    setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
      open: false,
      content: []
    }));
  };
  var handleChangeOption = function handleChangeOption(key) {
    setSelectedOption(key);
  };
  (0, _react.useEffect)(function () {
    if (formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0) return;
    handleUpdateBusinessClick();
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (business) setSlug(business === null || business === void 0 ? void 0 : business.slug);
  }, [business]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessOrderingChannelsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('EXTENSIONS', 'Extensions')), /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, optionList.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: option.key,
      active: selectedOption === option.key,
      onClick: function onClick() {
        return handleChangeOption(option.key);
      }
    }, option.name);
  })), selectedOption === 'custom_slug' && /*#__PURE__*/_react.default.createElement(_styles2.BusinessCustomSlugContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    value: slug,
    placeholder: t('SLUG', 'Slug'),
    onChange: function onChange(e) {
      return setSlug(e.target.value);
    },
    onKeyPress: function onKeyPress(e) {
      if (e.which === 32) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: changeCustomslug
  }, t('SAVE', 'Save'))), selectedOption === 'widgets' && /*#__PURE__*/_react.default.createElement(_BusinessWidgets.BusinessWidgets, {
    business: business
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('EXTENSION', 'Extension'),
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
exports.BusinessOrderingChannels = BusinessOrderingChannels;