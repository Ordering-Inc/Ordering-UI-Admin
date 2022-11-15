"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSummary = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));
var _styledComponents = require("styled-components");
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _BusinessPreview = require("../BusinessPreview");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var BusinessSummary = function BusinessSummary(props) {
  var _businessState$busine3, _businessState$busine4, _businessState$busine5, _businessState$busine6, _theme$images, _theme$images$dummies, _businessState$busine7;
  var isAdmin = props.isAdmin,
    businessState = props.businessState,
    actionSidebar = props.actionSidebar,
    handleChangeActiveBusiness = props.handleChangeActiveBusiness,
    selectedItem = props.selectedItem,
    handleSelectedItem = props.handleSelectedItem,
    handleDuplicateBusiness = props.handleDuplicateBusiness,
    handleDeleteBusiness = props.handleDeleteBusiness;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isBusinessPreview = _useState2[0],
    setIsBusinessPreview = _useState2[1];
  var _useState3 = (0, _react.useState)('desktop'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedView = _useState4[0],
    setSelectedView = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var handleOpenCategory = function handleOpenCategory() {
    var _businessState$busine;
    events.emit('go_to_page', {
      page: 'store',
      params: {
        store: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.slug
      }
    });
  };
  var handleOpenSite = function handleOpenSite() {
    var _businessState$busine2;
    window.open("https://".concat(ordering.project, ".tryordering.com/store/").concat(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.slug), '_blank');
  };
  var itemsExcluded = ['publishing'];
  var businessConfigs = [{
    key: 'store_details',
    value: t('STORE_DETAILS', 'Store details')
  }, {
    key: 'schedule',
    value: t('SCHEDULE', 'Schedule')
  }, {
    key: 'menu',
    value: t('MENU_V21', 'Menu')
  }, {
    key: 'delivery_pickup_more',
    value: t('DELIVERY_PICKUP_MORE', 'Delivery, pickup & more')
  }, {
    key: 'notifications',
    value: t('NOTIFICATIONS', 'Notifications')
  }, {
    key: 'payment_methods',
    value: t('PAYMENTS_METHODS', 'Payment methods')
  }, {
    key: 'tax_fees',
    value: t('TAX_AND_FEES', 'Tax & fees')
  }, {
    key: 'promotions',
    value: t('PROMOTIONS', 'Promotions')
  }, {
    key: 'preorder',
    value: t('PREORDER_SETTING', 'Preorder')
  }, {
    key: 'custom_fields',
    value: t('CUSTOM_FIELDS', 'Custom fields')
  }, {
    key: 'personalization',
    value: t('PERSONALIZATION', 'Personalization')
  }, {
    key: 'ordering_channels',
    value: t('ORDERING_CHANNELS', 'Ordering channels')
  },
  // {
  //   key: 'publishing',
  //   value: t('PUBLISHING', 'Publishing')
  // },
  {
    key: 'layout',
    value: t('LAYOUT', 'Layout')
  }, {
    key: 'webhooks',
    value: t('WEBHOOKS', 'Webhooks')
  }];
  var onClickDeleteBusiness = function onClickDeleteBusiness() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_BUSINESS', 'Are you sure that you want to delete this business?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteBusiness();
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.name), businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.enabled,
    onChange: handleChangeActiveBusiness
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    disabled: true
    // onClick={() => handleSelectedItem('support')}
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setIsBusinessPreview(true);
    }
  }, t('PREVIEW', 'Preview')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDuplicateBusiness();
    }
  }, t('DUPLICATE', 'Duplicate')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleSelectedItem('personalization');
    }
  }, t('PERSONALIZATION', 'Personalization')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleSelectedItem('custom_fields');
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDeleteBusiness();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BusinessHeader, {
    isSkeleton: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 60
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.BusinessHeader, {
    bgimage: optimizeImage(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.header, 'h_200,c_limit')
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogo, {
    bgimage: optimizeImage((businessState === null || businessState === void 0 ? void 0 : (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_100,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessDetailsContent, null, /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: handleOpenCategory,
    disabled: businessState === null || businessState === void 0 ? void 0 : businessState.loading
  }, t('CATEGORIES_AND_PRODUCTS', 'Categories & products')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    borderRadius: "8px",
    onClick: handleOpenSite,
    disabled: businessState === null || businessState === void 0 ? void 0 : businessState.loading
  }, t('STORE_WEBSITE', 'Store website'))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessDescription, null, businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 300
  }) : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.description), /*#__PURE__*/_react.default.createElement(_styles2.BusinessConfigsContainer, {
    isLoading: businessState === null || businessState === void 0 ? void 0 : businessState.loading
  }, (isAdmin ? businessConfigs : businessConfigs.filter(function (c) {
    return !itemsExcluded.includes(c.key);
  })).map(function (config) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessConfigItem, {
      key: config.key,
      active: selectedItem === config.key,
      onClick: function onClick() {
        return handleSelectedItem(config.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, config.value), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null));
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "900px",
    open: isBusinessPreview,
    onClose: function onClose() {
      setIsBusinessPreview(false);
      setSelectedView('desktop');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessPreviewHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PREVIEW', 'Preview')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: selectedView === 'desktop' ? 'primary' : 'black',
    onClick: function onClick() {
      return setSelectedView('desktop');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Laptop, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: selectedView === 'mobile' ? 'primary' : 'black',
    onClick: function onClick() {
      return setSelectedView('mobile');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null)))), /*#__PURE__*/_react.default.createElement(_BusinessPreview.BusinessPreview, {
    isMobileView: selectedView === 'mobile',
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business
  })));
};
exports.BusinessSummary = BusinessSummary;