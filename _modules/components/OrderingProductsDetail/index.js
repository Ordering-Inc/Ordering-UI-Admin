"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProductsDetail = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useWindowSize2 = require("../../hooks/useWindowSize");

var _Switch = require("../../styles/Switch");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Buttons = require("../../styles/Buttons");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _OrderingProductGeneral = require("../OrderingProductGeneral");

var _OrderingProductSEO = require("../OrderingProductSEO");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderingProductsDetail = function OrderingProductsDetail(props) {
  var open = props.open,
      onClose = props.onClose,
      product = props.product,
      handleChangeState = props.handleChangeState;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = (0, _react.useState)('general'),
      _useState4 = _slicedToArray(_useState3, 2),
      detailType = _useState4[0],
      setDetailType = _useState4[1];

  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);

    if (!value) {
      onClose();
    }
  };

  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('orderingProductsDetail').style.width = '100vw';
      } else {
        document.getElementById('orderingProductsDetail').style.width = '500px';
      }
    }
  };

  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles.DetailContainerWrapper, {
    id: "orderingProductsDetail"
  }, /*#__PURE__*/_react.default.createElement(_styles.DetailContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TitleWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, product === null || product === void 0 ? void 0 : product.name), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : product.enabled) || false,
    onChange: function onChange(enabled) {
      return handleChangeState(product === null || product === void 0 ? void 0 : product.id, 'enabled', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    onClick: function onClick() {
      return actionSidebar(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), /*#__PURE__*/_react.default.createElement(_styles.HeaderTabContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: detailType === 'general',
    onClick: function onClick() {
      return setDetailType('general');
    }
  }, t('GENERAL', 'General')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: detailType === 'seo',
    onClick: function onClick() {
      return setDetailType('seo');
    }
  }, t('SEO', 'SEO'))), detailType === 'general' && /*#__PURE__*/_react.default.createElement(_OrderingProductGeneral.OrderingProductGeneral, props), detailType === 'seo' && /*#__PURE__*/_react.default.createElement(_OrderingProductSEO.OrderingProductSEO, props)));
};

exports.OrderingProductsDetail = OrderingProductsDetail;