"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPublishingOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MdcClose = _interopRequireDefault(require("@meronex/icons/mdc/MdcClose"));
var _EnFacebook = _interopRequireDefault(require("@meronex/icons/en/EnFacebook"));
var _RiFileCopyLine = _interopRequireDefault(require("@meronex/icons/ri/RiFileCopyLine"));
var _styledComponents = require("styled-components");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles2 = require("../../../styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessPublishingOption = function BusinessPublishingOption(props) {
  var _paragraphList$item$k;
  var open = props.open,
    item = props.item,
    business = props.business,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var linkToBusiness = "".concat(t('LINK_BUSINESS_REDIRECT', 'https://reactdemo.tryordering.com/')).concat(business === null || business === void 0 ? void 0 : business.slug);
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      onClose && onClose();
    }
    setIsMenuOpen(value);
    document.getElementById('publishing_option').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };
  var paragraphList = {
    own_platform: [{
      title: t('SINGLE_BUSINESS_APP', 'Single Business App'),
      description: t('SINGLE_BUSINESS_APP_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
    }, {
      title: t('BRAND_APP', 'Brand App'),
      description: t('BRAND_APP_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
    }],
    in_restaurant: [{
      title: t('MOBILE_ORDER_AND_PAY', 'Mobile Order and Pay'),
      description: t('MOBILE_ORDER_AND_PAY_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
    }, {
      title: t('SELF_ORDERING_KIOSK', 'Self Ordering Kiosk'),
      description: t('SELF_ORDERING_KIOSK_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
    }, {
      title: t('POS', 'Pos'),
      description: t('POS_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
    }]
  };
  var ParagraphSection = function ParagraphSection(props) {
    var title = props.title,
      description = props.description,
      isHideBtn = props.isHideBtn,
      isTitleLight = props.isTitleLight;
    return /*#__PURE__*/_react.default.createElement(_styles.SectionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SectionText, {
      style: {
        fontWeight: isTitleLight ? 'normal' : 'bold'
      }
    }, title), /*#__PURE__*/_react.default.createElement(_styles.SectionText, {
      style: {
        color: theme.colors.lightGray,
        fontSize: 14
      }
    }, description), !isHideBtn && /*#__PURE__*/_react.default.createElement(_styles2.Button, {
      borderRadius: "5px",
      color: "primary",
      style: {
        marginTop: 10
      },
      onClick: function onClick() {}
    }, t('BUY_NOW', 'Buy now')));
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('publishing_option').style.width = '100%';
      } else {
        document.getElementById('publishing_option').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "publishing_option"
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/_react.default.createElement("h1", null, item === null || item === void 0 ? void 0 : item.title), /*#__PURE__*/_react.default.createElement(_styles.CloseButton, null, /*#__PURE__*/_react.default.createElement(_MdcClose.default, {
    onClick: function onClick() {
      return onClose && onClose();
    }
  }))), (item === null || item === void 0 ? void 0 : item.key) === 'social_network' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_EnFacebook.default, {
    style: {
      color: '#3B5998',
      fontSize: '32px'
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontWeight: 'bold',
      marginLeft: 15
    }
  }, t('FACEBOOK', 'Facebook'))), /*#__PURE__*/_react.default.createElement(_styles.SectionWrapper, null, /*#__PURE__*/_react.default.createElement(ParagraphSection, {
    isHideBtn: true,
    isTitleLight: true,
    title: t('FACEBOOK_SHOP_NOW', 'Facebook shop now'),
    description: t('FACEBOOK_SHOP_NOW_DESCRIPTION', "Add a direct link to your menu on your restaurant's Facebook page.")
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      marginBottom: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    type: "text",
    readonly: true,
    placeholder: linkToBusiness,
    style: {
      width: '85%'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '15%',
      fontSize: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_RiFileCopyLine.default, {
    onClick: function onClick() {
      return navigator.clipboard.writeText(linkToBusiness);
    }
  }))), /*#__PURE__*/_react.default.createElement(ParagraphSection, {
    isHideBtn: true,
    isTitleLight: true,
    title: t('FACEBOOK_SHARING', 'Facebook sharing'),
    description: t('FACEBOOK_SHARING_DESCRIPTION', 'Use this personalized link when posting on Facebook. This link works on desktop, mobile, tablet and helps you sell more through Facebook.')
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    type: "text",
    readonly: true,
    placeholder: linkToBusiness,
    style: {
      width: '85%'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '15%',
      fontSize: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_RiFileCopyLine.default, {
    onClick: function onClick() {
      return navigator.clipboard.writeText(linkToBusiness);
    }
  }))))), (item === null || item === void 0 ? void 0 : item.key) && ((_paragraphList$item$k = paragraphList[item === null || item === void 0 ? void 0 : item.key]) === null || _paragraphList$item$k === void 0 ? void 0 : _paragraphList$item$k.length) > 0 && paragraphList[item === null || item === void 0 ? void 0 : item.key].map(function (paragraph, i) {
    return /*#__PURE__*/_react.default.createElement(ParagraphSection, {
      key: i,
      title: paragraph.title,
      description: paragraph.description
    });
  }));
};
exports.BusinessPublishingOption = BusinessPublishingOption;