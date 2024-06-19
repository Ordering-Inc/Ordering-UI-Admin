"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
var _CampaignUsersList = require("../CampaignUsersList");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CampaignList = exports.CampaignList = function CampaignList(props) {
  var _campaignList$campaig2, _campaignList$campaig3;
  var campaignList = props.campaignList,
    getCampaignList = props.getCampaignList,
    paginationProps = props.paginationProps,
    setPaginationProps = props.setPaginationProps,
    handleOpenDetail = props.handleOpenDetail,
    selectedCampaign = props.selectedCampaign,
    handleUpdateCampaign = props.handleUpdateCampaign,
    setSelectedCampaign = props.setSelectedCampaign,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openModal = _useState2[0],
    setOpenModal = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openUnsubscribed = _useState4[0],
    setOpenUnsubscribed = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openBounced = _useState6[0],
    setOpenBounced = _useState6[1];
  var _useState7 = (0, _react.useState)({
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
    _useState8 = _slicedToArray(_useState7, 2),
    allowColumns = _useState8[0],
    setAllowColumns = _useState8[1];
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
  var handleOpenUnsubscribed = function handleOpenUnsubscribed(campaign) {
    setSelectedCampaign(campaign);
    setOpenUnsubscribed(true);
  };
  var handleOpenBounced = function handleOpenBounced(campaign) {
    setSelectedCampaign(campaign);
    setOpenBounced(true);
  };
  (0, _react.useEffect)(function () {
    var _campaignList$campaig;
    if (campaignList !== null && campaignList !== void 0 && campaignList.loading || (campaignList === null || campaignList === void 0 || (_campaignList$campaig = campaignList.campaigns) === null || _campaignList$campaig === void 0 ? void 0 : _campaignList$campaig.length) > 0 || (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) <= 1) return;
    if ((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) !== (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages)) {
      handleChangePage(paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage);
    } else {
      handleChangePage((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) - 1);
    }
  }, [campaignList === null || campaignList === void 0 ? void 0 : campaignList.campaigns, paginationProps]);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.currentPage) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.pageSize) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.totalPages)) return;
    (0, _utils.addQueryToUrl)({
      page: paginationProps.currentPage,
      pageSize: paginationProps.pageSize
    });
  }, [paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Table, {
    isRelative: (campaignList === null || campaignList === void 0 || (_campaignList$campaig2 = campaignList.campaigns) === null || _campaignList$campaig2 === void 0 ? void 0 : _campaignList$campaig2.length) > 5
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
    }, (campaign === null || campaign === void 0 ? void 0 : campaign.open_count) || 0)), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.unsubscribed_count) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.LinkText, {
      onClick: function onClick() {
        return handleOpenUnsubscribed(campaign);
      },
      className: "opens"
    }, (campaign === null || campaign === void 0 ? void 0 : campaign.unsubscribed_count) || 0)), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.bounced_count) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.LinkText, {
      onClick: function onClick() {
        return handleOpenBounced(campaign);
      },
      className: "opens"
    }, (campaign === null || campaign === void 0 ? void 0 : campaign.bounced_count) || 0)), /*#__PURE__*/_react.default.createElement("td", null, (campaign === null || campaign === void 0 ? void 0 : campaign.audience_type) === 'dynamic' && /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", {
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
  }))), !campaignList.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenDetail({});
    }
  }, t('ADD_NEW_CAMPAIGN', 'Add new campaign')), (campaignList === null || campaignList === void 0 || (_campaignList$campaig3 = campaignList.campaigns) === null || _campaignList$campaig3 === void 0 ? void 0 : _campaignList$campaig3.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
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
    isOpens: true,
    title: t('OPENS', 'Opens'),
    campaignId: selectedCampaign === null || selectedCampaign === void 0 ? void 0 : selectedCampaign.id
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    open: openUnsubscribed,
    onClose: function onClose() {
      return setOpenUnsubscribed(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_CampaignUsersList.CampaignUserList, {
    title: t('UNSUBSCRIBED', 'Unsubscribed'),
    campaignId: selectedCampaign === null || selectedCampaign === void 0 ? void 0 : selectedCampaign.id
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    open: openBounced,
    onClose: function onClose() {
      return setOpenBounced(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_CampaignUsersList.CampaignUserList, {
    isBounces: true,
    title: t('BOUNCES', 'Bounces'),
    campaignId: selectedCampaign === null || selectedCampaign === void 0 ? void 0 : selectedCampaign.id
  })));
};