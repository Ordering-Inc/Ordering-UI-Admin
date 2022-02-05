"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPromotionList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _reactBootstrap = require("react-bootstrap");

var _styledComponents = require("styled-components");

var _styles = require("../../../styles");

var _useWindowSize2 = require("../../../hooks/useWindowSize");

var _Shared = require("../../Shared");

var _BusinessPromotionGeneralForm = require("../BusinessPromotionGeneralForm");

var _BusinessPromotionCustomFields = require("../BusinessPromotionCustomFields");

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

var BusinessPromotionListUI = function BusinessPromotionListUI(props) {
  var business = props.business,
      setIsExtendExtraOpen = props.setIsExtendExtraOpen,
      promotionListState = props.promotionListState,
      handleChangePromotionActiveState = props.handleChangePromotionActiveState,
      handleDeletePromotion = props.handleDeletePromotion,
      handleSuccessUpdate = props.handleSuccessUpdate;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var theme = (0, _styledComponents.useTheme)();

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowForm = _useState2[0],
      setIsShowForm = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      curPromotion = _useState4[0],
      setCurPromotion = _useState4[1];

  var _useState5 = (0, _react.useState)('general'),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedTab = _useState6[0],
      setSelectedTab = _useState6[1];

  var _useState7 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      confirm = _useState8[0],
      setConfirm = _useState8[1];

  var handleOpenForm = function handleOpenForm(promotion) {
    setCurPromotion(promotion);
    setSelectedTab('general');
    setIsShowForm(true);
    setIsExtendExtraOpen(true);
  };

  var handleCloseForm = function handleCloseForm() {
    setIsShowForm(false);
    setCurPromotion(null);
    setIsExtendExtraOpen(false);
  };

  var handleDeleteClick = function handleDeleteClick(id) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_COUPON', 'Are you sure that you want to delete this coupon?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeletePromotion(id);
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessPromotionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PROMOTIONS', 'Promotions')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenForm({});
    }
  }, t('ADD_PROMOTION', 'Add promotion'))), /*#__PURE__*/_react.default.createElement(_styles2.PromotionsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('PROMOTIONS', 'Promotions')), /*#__PURE__*/_react.default.createElement("th", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement("th", null, t('DATES_RANGE', 'Date range')), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('ACTIONS', 'Actions')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LayoutThreeColumns, null))))), promotionListState.promotions.map(function (promotion) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: promotion.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionItem, null, /*#__PURE__*/_react.default.createElement("span", null, promotion === null || promotion === void 0 ? void 0 : promotion.name))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionItem, null, (promotion === null || promotion === void 0 ? void 0 : promotion.type) === 1 ? t('DISCOUNT', 'Discount') : t('COUPON', 'Coupon'))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionItem, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, parseDate(promotion === null || promotion === void 0 ? void 0 : promotion.start, {
      utc: false,
      outputFormat: 'YYYY-MM-DD'
    })), /*#__PURE__*/_react.default.createElement("p", null, parseDate(promotion === null || promotion === void 0 ? void 0 : promotion.end, {
      utc: false,
      outputFormat: 'YYYY-MM-DD'
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "business_enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: promotion === null || promotion === void 0 ? void 0 : promotion.enabled,
      onChange: function onChange(enabled) {
        return handleChangePromotionActiveState(enabled, promotion === null || promotion === void 0 ? void 0 : promotion.id);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.DropdownWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenForm(promotion);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleDeleteClick(promotion === null || promotion === void 0 ? void 0 : promotion.id);
      }
    }, t('DELETE', 'Delete'))))))));
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddNewPromotionText, {
    onClick: function onClick() {
      return handleOpenForm({});
    }
  }, t('ADD_NEW_PROMOTION', 'Add new promotion'))), isShowForm && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(BusinessPromotion, {
    isCloseButtonShow: true,
    curPromotion: curPromotion,
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab,
    handleCloseForm: handleCloseForm,
    handleChangePromotionActiveState: handleChangePromotionActiveState
  }, selectedTab === 'general' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionGeneralForm.BusinessPromotionGeneralForm, {
    promotion: curPromotion,
    business: business,
    handleCloseAddForm: handleCloseForm,
    handleSuccessUpdate: handleSuccessUpdate
  }), selectedTab === 'custom' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionCustomFields.BusinessPromotionCustomFields, {
    businessId: business === null || business === void 0 ? void 0 : business.id,
    offerId: curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.id
  })) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: isShowForm,
    onClose: function onClose() {
      return handleCloseForm();
    }
  }, /*#__PURE__*/_react.default.createElement(BusinessPromotion, {
    curPromotion: curPromotion,
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab,
    handleCloseForm: handleCloseForm,
    handleChangePromotionActiveState: handleChangePromotionActiveState
  }, selectedTab === 'general' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionGeneralForm.BusinessPromotionGeneralForm, {
    promotion: curPromotion,
    business: business,
    handleCloseAddForm: handleCloseForm,
    handleSuccessUpdate: handleSuccessUpdate
  }), selectedTab === 'custom' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionCustomFields.BusinessPromotionCustomFields, {
    businessId: business === null || business === void 0 ? void 0 : business.id,
    offerId: curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.id
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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

var BusinessPromotion = function BusinessPromotion(props) {
  var isCloseButtonShow = props.isCloseButtonShow,
      curPromotion = props.curPromotion,
      selectedTab = props.selectedTab,
      setSelectedTab = props.setSelectedTab,
      handleCloseForm = props.handleCloseForm,
      handleChangePromotionActiveState = props.handleChangePromotionActiveState;

  var _useLanguage3 = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  return /*#__PURE__*/_react.default.createElement(_styles2.PromotionEditFormContainer, null, isCloseButtonShow && /*#__PURE__*/_react.default.createElement(_styles2.CloseButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleCloseForm();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), Object.keys(curPromotion).length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.EditHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.EditTitleHeaderContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.name), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.enabled,
    onChange: function onChange(enabled) {
      return handleChangePromotionActiveState(enabled, curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.id);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.OptionTabsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.InnerTabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.AutoScroll, {
    innerScroll: true,
    scrollId: "promotion_edit"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedTab === 'general',
    onClick: function onClick() {
      return setSelectedTab('general');
    }
  }, t('GENERAL')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedTab === 'custom',
    onClick: function onClick() {
      return setSelectedTab('custom');
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')))))), props.children);
};

var BusinessPromotionList = function BusinessPromotionList(props) {
  var businessPromotionsController = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPromotionListUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPromotionList, businessPromotionsController);
};

exports.BusinessPromotionList = BusinessPromotionList;