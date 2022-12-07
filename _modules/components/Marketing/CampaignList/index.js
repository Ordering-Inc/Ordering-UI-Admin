"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
var _CampaignUsersList = require("../CampaignUsersList");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CampaignList = function CampaignList(props) {
  var _campaignList$campaig, _campaignList$campaig2;
  var campaignList = props.campaignList,
    getCampaignList = props.getCampaignList,
    paginationProps = props.paginationProps,
    setPaginationProps = props.setPaginationProps,
    handleOpenDetail = props.handleOpenDetail,
    selectedCampaign = props.selectedCampaign,
    handleUpdateCampaign = props.handleUpdateCampaign,
    setSelectedCampaign = props.setSelectedCampaign;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openModal = _useState2[0],
    setOpenModal = _useState2[1];
  var _useState3 = (0, _react.useState)({
      campaign: true,
      contact_type: true,
      audience: true,
      in_queue: true,
      sent_count: true,
      open_count: true,
      unsubscribed_count: true,
      bounced_count: true
      // update: true,
      // actions: true
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    allowColumns = _useState4[0],
    setAllowColumns = _useState4[1];
  var optionsDefault = [{
    value: 'campaign',
    content: t('CAMPAIGN', 'Campaign')
  }, {
    value: 'contact_type',
    content: t('CONTACT_TYPE', 'Contact type')
  }, {
    value: 'audience',
    content: t('AUDIENCE', 'Audience')
  }, {
    value: 'in_queue',
    content: t('IN_QUEUE', 'In Queue')
  }, {
    value: 'sent_count',
    content: t('SENT', 'Sent')
  }, {
    value: 'open_count',
    content: t('OPENS', 'Opens')
  }, {
    value: 'unsubscribed_count',
    content: t('UNSUBSCRIBED', 'Unsubscribed')
  }, {
    value: 'bounced_count',
    content: t('BOUNCES', 'Bounces')
  }
  // {
  //   value: 'update',
  //   content: t('UPDATE', 'Update')
  // },
  // {
  //   value: 'actions',
  //   content: t('ACTIONS', 'Actions')
  // }
  ];

  var checkColor = function checkColor(status) {
    var index = status.toLocaleLowerCase();
    if (index === 'ended') return '#00D27A';else if (index === 'scheduled') return '#FFC700';else if (index === 'draft') return '#E9ECEF';else return '#E9ECEF';
  };
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };
  var handleChangePage = function handleChangePage(page) {
    getCampaignList(page, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
      pageSize: pageSize
    }));
    getCampaignList(expectedPage, pageSize);
  };
  var handleClickCampaign = function handleClickCampaign(e, campaign) {
    var inValid = e.target.closest('.enable_control') || e.target.closest('.opens');
    if (inValid) return;
    handleOpenDetail(campaign);
  };
  var handleOpens = function handleOpens(campaign) {
    setSelectedCampaign(campaign);
    setOpenModal(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Table, {
    isRelative: (campaignList === null || campaignList === void 0 ? void 0 : (_campaignList$campaig = campaignList.campaigns) === null || _campaignList$campaig === void 0 ? void 0 : _campaignList$campaig.length) > 5
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.campaign) && /*#__PURE__*/_react.default.createElement("th", null, t('CAMPAIGN', 'Campaign')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.contact_type) && /*#__PURE__*/_react.default.createElement("th", null, t('CONTACT_TYPE', 'Contact type')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.audience) && /*#__PURE__*/_react.default.createElement("th", null, t('AUDIENCE', 'Audience')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.in_queue) && /*#__PURE__*/_react.default.createElement("th", null, t('IN_QUEUE', 'In Queue')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.sent_count) && /*#__PURE__*/_react.default.createElement("th", null, t('SENT', 'Sent')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.open_count) && /*#__PURE__*/_react.default.createElement("th", null, t('OPENS', 'Opens')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.unsubscribed_count) && /*#__PURE__*/_react.default.createElement("th", null, t('UNSUBSCRIBED', 'Unsubscribed')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.bounced_count) && /*#__PURE__*/_react.default.createElement("th", null, t('BOUNCES', 'Bounces')), /*#__PURE__*/_react.default.createElement("th", {
    className: "allow-colums action"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    handleChangeAllowColumns: handleChangeAllowColumns,
    title: t('DISPLAYED_DATA_THE_ORDER', 'Displayed data the order')
  })))), campaignList !== null && campaignList !== void 0 && campaignList.loading ? _toConsumableArray(Array(8).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.campaign) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 20
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.contact_type) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 20
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.audience) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 20
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.in_queue) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 20
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.sent_count) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 20
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.open_count) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 20
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.unsubscribed_count) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 20
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.bounced_count) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 20
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "campaign-enabled"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 20
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 20
    })))));
  }) : campaignList === null || campaignList === void 0 ? void 0 : campaignList.campaigns.map(function (campaign, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tbody, {
      key: i,
      className: (selectedCampaign === null || selectedCampaign === void 0 ? void 0 : selectedCampaign.id) === campaign.id ? 'active' : '',
      onClick: function onClick(e) {
        return handleClickCampaign(e, campaign);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.campaign) && /*#__PURE__*/_react.default.createElement("td", {
      className: "right-border"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, campaign === null || campaign === void 0 ? void 0 : campaign.name))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.contact_type) && /*#__PURE__*/_react.default.createElement("td", null, campaign === null || campaign === void 0 ? void 0 : campaign.contact_type), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.audience) && /*#__PURE__*/_react.default.createElement("td", null, campaign === null || campaign === void 0 ? void 0 : campaign.audience_type), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.in_queue) && /*#__PURE__*/_react.default.createElement("td", null, typeof (campaign === null || campaign === void 0 ? void 0 : campaign.audience_count) !== 'undefined' && typeof (campaign === null || campaign === void 0 ? void 0 : campaign.sent_count) !== 'undefined' ? (campaign === null || campaign === void 0 ? void 0 : campaign.audience_count) - (campaign === null || campaign === void 0 ? void 0 : campaign.sent_count) : 0), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.sent_count) && /*#__PURE__*/_react.default.createElement("td", null, (campaign === null || campaign === void 0 ? void 0 : campaign.sent_count) || 0), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.open_count) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.LinkText, {
      onClick: function onClick() {
        return handleOpens(campaign);
      },
      className: "opens"
    }, (campaign === null || campaign === void 0 ? void 0 : campaign.open_count) || 0)), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.unsubscribed_count) && /*#__PURE__*/_react.default.createElement("td", null, (campaign === null || campaign === void 0 ? void 0 : campaign.unsubscribed_count) || 0), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.bounced_count) && /*#__PURE__*/_react.default.createElement("td", null, (campaign === null || campaign === void 0 ? void 0 : campaign.bounced_count) || 0), /*#__PURE__*/_react.default.createElement("td", null, (campaign === null || campaign === void 0 ? void 0 : campaign.audience_type) === 'dynamic' && /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "campaign-enabled"
    }, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: campaign === null || campaign === void 0 ? void 0 : campaign.enabled,
      onChange: function onChange(val) {
        return handleUpdateCampaign(campaign.id, {
          enabled: val
        });
      },
      className: "enable_control"
    })), (campaign === null || campaign === void 0 ? void 0 : campaign.audience_type) === 'fixed' && /*#__PURE__*/_react.default.createElement(_styles2.StatusWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, campaign === null || campaign === void 0 ? void 0 : campaign.status), /*#__PURE__*/_react.default.createElement(_styles2.StatusPoint, {
      style: {
        background: checkColor(campaign === null || campaign === void 0 ? void 0 : campaign.status)
      }
    })))));
  }))), !campaignList.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.AddNewPageButton, {
    onClick: function onClick() {
      return handleOpenDetail({});
    }
  }, t('ADD_NEW_CAMPAIGN', 'Add new campaign')), (campaignList === null || campaignList === void 0 ? void 0 : (_campaignList$campaig2 = campaignList.campaigns) === null || _campaignList$campaig2 === void 0 ? void 0 : _campaignList$campaig2.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage,
    totalPages: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize,
    handleChangePageSize: handleChangePageSize
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    open: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_CampaignUsersList.CampaignUserList, {
    campaignId: selectedCampaign === null || selectedCampaign === void 0 ? void 0 : selectedCampaign.id
  })));
};
exports.CampaignList = CampaignList;