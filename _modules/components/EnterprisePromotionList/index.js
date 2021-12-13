"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _ColumnAllowSettingPopover = require("../ColumnAllowSettingPopover");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("../../styles");

var _reactBootstrap = require("react-bootstrap");

var _styledComponents = require("styled-components");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Pagination = require("../Pagination");

var _Confirm = require("../Confirm");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EnterprisePromotionList = function EnterprisePromotionList(props) {
  var promotionListState = props.promotionListState,
      paginationProps = props.paginationProps,
      getPromotions = props.getPromotions,
      setPaginationProps = props.setPaginationProps,
      selectedPromotion = props.selectedPromotion,
      handleOpenDetails = props.handleOpenDetails,
      dataSelected = props.dataSelected,
      handleDragStart = props.handleDragStart,
      handleAllowDrop = props.handleAllowDrop,
      handleDrop = props.handleDrop,
      handleDragEnd = props.handleDragEnd,
      handleEnablePromotion = props.handleEnablePromotion,
      handleDeletePromotion = props.handleDeletePromotion;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parseDate = _useUtils2$.parseDate,
      optimizeImage = _useUtils2$.optimizeImage;

  var _useState = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      confirm = _useState2[0],
      setConfirm = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openPopover = _useState4[0],
      setOpenPopover = _useState4[1];

  var _useState5 = (0, _react.useState)({
    promotions: true,
    promotionType: true,
    how: true,
    dateRange: true,
    actions: true
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      allowColumns = _useState6[0],
      setAllowColumns = _useState6[1];

  var optionsDefault = [{
    value: 'promotions',
    content: t('PROMOTIONS', 'Promotions')
  }, {
    value: 'promotionType',
    content: t('PROMOTION_TYPE', 'Promotion type')
  }, {
    value: 'how',
    content: t('QUESTION_HOW', 'How?')
  }, {
    value: 'dateRange',
    content: t('DATE_RANGE', 'Date Range')
  }, {
    value: 'actions',
    content: t('ACTIONS', 'Actions')
  }];

  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };

  var getPromotionType = function getPromotionType(type) {
    var promotionTypes = [{
      type: 1,
      content: t('MOBILE_FRONT_SUB_TOTAL', 'Subtotal')
    }, {
      type: 2,
      content: t('DELIVERY_FEE', 'Delivery fee')
    }, {
      type: 3,
      content: t('BUSINESS_SERVICE_FEE', 'Service fee')
    }];
    var found = promotionTypes.find(function (item) {
      return item.type === type;
    });

    if (found) {
      return found.content;
    } else {
      return type;
    }
  };

  var onClickDeletePromotion = function onClickDeletePromotion(promotionId) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PROMOTION', 'Promotion')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeletePromotion(promotionId);
      }
    });
  };

  var handleChangePage = function handleChangePage(page) {
    getPromotions(page, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize);
  };

  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
      pageSize: pageSize
    }));
    getPromotions(expectedPage, pageSize);
  };

  var handleClickPromotion = function handleClickPromotion(e, promotion) {
    var inValid = e.target.closest('.enable_control') || e.target.closest('.promotion_actions');
    if (inValid) return;
    handleOpenDetails(promotion);
  };

  (0, _react.useEffect)(function () {
    if (promotionListState.loading || promotionListState.promotions.length > 0 || paginationProps.totalPages <= 1) return;

    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage);
    } else {
      handleChangePage(paginationProps.currentPage - 1);
    }
  }, [promotionListState.promotions, paginationProps]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionListTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotions) && /*#__PURE__*/_react.default.createElement("th", {
    className: "promotion"
  }, t('PROMOTIONS', 'Promotions')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotionType) && /*#__PURE__*/_react.default.createElement("th", null, t('PROMOTION_TYPES', 'Promotion types')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.how) && /*#__PURE__*/_react.default.createElement("th", null, t('QUESTION_HOW', 'How?')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateRange) && /*#__PURE__*/_react.default.createElement("th", {
    className: "date_range"
  }, t('DATE_RANGE', 'Date Range')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.actions) && /*#__PURE__*/_react.default.createElement("th", null, t('ACTIONS', 'Actions')), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_ColumnAllowSettingPopover.ColumnAllowSettingPopover, {
    open: openPopover,
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    onClick: function onClick() {
      return setOpenPopover(!openPopover);
    },
    onClose: function onClose() {
      return setOpenPopover(false);
    },
    handleChangeAllowColumns: handleChangeAllowColumns
  })))), promotionListState !== null && promotionListState !== void 0 && promotionListState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SinglePromotionTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotions) && /*#__PURE__*/_react.default.createElement("td", {
      className: "promotion"
    }, /*#__PURE__*/_react.default.createElement(_styles2.DragableContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 10,
      height: 20
    })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 40
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotionType) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.how) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateRange) && /*#__PURE__*/_react.default.createElement("td", {
      className: "date_range"
    }, /*#__PURE__*/_react.default.createElement(_styles2.PromotionDateRanageWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.actions) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "enable_control"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 30
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    }))));
  }) : promotionListState.promotions.map(function (promotion) {
    var _theme$images$icons;

    return /*#__PURE__*/_react.default.createElement(_styles2.SinglePromotionTbody, {
      key: promotion.id,
      className: (selectedPromotion === null || selectedPromotion === void 0 ? void 0 : selectedPromotion.id) === promotion.id ? 'draggable_promotion active' : 'draggable_promotion',
      onClick: function onClick(e) {
        return handleClickPromotion(e, promotion);
      },
      onDragOver: function onDragOver(e) {
        return handleAllowDrop(e, promotion.id);
      },
      onDrop: function onDrop(e) {
        return handleDrop(e, promotion);
      },
      onDragEnd: function onDragEnd(e) {
        return handleDragEnd(e);
      },
      isAccept: dataSelected && dataSelected === (promotion === null || promotion === void 0 ? void 0 : promotion.id)
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotions) && /*#__PURE__*/_react.default.createElement("td", {
      className: "promotion"
    }, /*#__PURE__*/_react.default.createElement(_styles2.DragableContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
      alt: "six dots",
      draggable: true,
      onDragStart: function onDragStart(e) {
        return handleDragStart(e, promotion);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, promotion !== null && promotion !== void 0 && promotion.image ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage(promotion === null || promotion === void 0 ? void 0 : promotion.image, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_styles2.DummyImageWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null))), /*#__PURE__*/_react.default.createElement("span", null, promotion === null || promotion === void 0 ? void 0 : promotion.name)), /*#__PURE__*/_react.default.createElement(_styles2.VerticalLine, null))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.promotionType) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionTypeWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, getPromotionType(promotion === null || promotion === void 0 ? void 0 : promotion.target)), /*#__PURE__*/_react.default.createElement(_styles2.VerticalLine, null))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.how) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionHow, null, /*#__PURE__*/_react.default.createElement("span", null, (promotion === null || promotion === void 0 ? void 0 : promotion.type) === 1 ? promotion !== null && promotion !== void 0 && promotion.auto ? t('AUTOMATIC_DISCOUNT', 'Automatic discount') : t('DISCOUNT', 'discount') : promotion !== null && promotion !== void 0 && promotion.auto ? t('AUTOMATIC_COUPON', 'Automatic coupon') : t('COUPON', 'Coupon')), /*#__PURE__*/_react.default.createElement(_styles2.VerticalLine, null))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateRange) && /*#__PURE__*/_react.default.createElement("td", {
      className: "date_range"
    }, /*#__PURE__*/_react.default.createElement(_styles2.PromotionDateRanageWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, parseDate(promotion === null || promotion === void 0 ? void 0 : promotion.start, {
      utc: false,
      outputFormat: 'YYYY-MM-DD'
    })), /*#__PURE__*/_react.default.createElement("p", null, parseDate(promotion === null || promotion === void 0 ? void 0 : promotion.end, {
      utc: false,
      outputFormat: 'YYYY-MM-DD'
    }))), /*#__PURE__*/_react.default.createElement(_styles2.VerticalLine, null))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.actions) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: promotion === null || promotion === void 0 ? void 0 : promotion.enabled,
      onChange: function onChange(enabled) {
        return handleEnablePromotion(promotion.id, enabled);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperActionSelector, {
      className: "promotion_actions"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDotsVertical, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick(e) {
        return handleClickPromotion(e, promotion);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return onClickDeletePromotion(promotion.id);
      }
    }, t('DELETE', 'Delete')))))));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.PromotionListBottom, null, /*#__PURE__*/_react.default.createElement(_styles2.AddNewButton, {
    onClick: function onClick() {
      return handleOpenDetails({});
    }
  }, t('ADD_NEW_PROMOTION', 'Add new promotion')), (promotionListState === null || promotionListState === void 0 ? void 0 : promotionListState.promotions.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    currentPage: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage,
    totalPages: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
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

exports.EnterprisePromotionList = EnterprisePromotionList;