"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));
var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
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
var DriversGroupsList = exports.DriversGroupsList = function DriversGroupsList(props) {
  var curDriversGroup = props.curDriversGroup,
    driversGroupsState = props.driversGroupsState,
    searchValue = props.searchValue,
    handleOpenDetails = props.handleOpenDetails,
    handleUpdateDriversGroup = props.handleUpdateDriversGroup,
    selectedGroupList = props.selectedGroupList,
    isFromStore = props.isFromStore,
    handleSelectGroup = props.handleSelectGroup,
    handleAllSelectGroup = props.handleAllSelectGroup,
    actionDisabled = props.actionDisabled,
    isUseQuery = props.isUseQuery,
    pagination = props.pagination,
    setPagination = props.setPagination;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];

  // Get current groups
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    currentGroups = _useState2[0],
    setCurrentGroups = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    totalPages = _useState4[0],
    setTotalPages = _useState4[1];
  var handleChangePage = function handleChangePage(page) {
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      currentPage: page
    }));
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      pageSize: pageSize
    }));
  };
  (0, _react.useEffect)(function () {
    if (driversGroupsState.loading) return;
    var groups = [];
    if (searchValue) {
      groups = driversGroupsState.groups.filter(function (plugin) {
        var _plugin$name;
        return (_plugin$name = plugin.name) === null || _plugin$name === void 0 ? void 0 : _plugin$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
      });
    } else {
      groups = _toConsumableArray(driversGroupsState.groups);
    }
    setTotalPages(pagination.totalPages);
    setCurrentGroups(groups);
  }, [driversGroupsState, searchValue]);
  var handleClickDriverGroup = function handleClickDriverGroup(e, group) {
    var isInvalid = e.target.closest('.group-checkbox') || e.target.closest('.group-enabled');
    if (isInvalid) return;
    !isFromStore && handleOpenDetails(group);
  };
  var getTypeTag = function getTypeTag(type) {
    switch (parseInt(type)) {
      case 0:
        return t('IN_HOUSE_DRIVERS', 'In house drivers');
      case 1:
        return t('DRIVER_COMPANIES', 'Driver companies');
    }
  };
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !totalPages) return;
    (0, _utils.addQueryToUrl)({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    });
  }, [pagination, totalPages]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriversGroupsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.TableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.GroupsTable, {
    "data-tour": "tour_delivery_completed",
    disabled: isFromStore
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.GroupIdWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    onClick: function onClick() {
      return handleAllSelectGroup();
    },
    isChecked: !driversGroupsState.loading && selectedGroupList.length === driversGroupsState.groups.length
  }, !isFromStore && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !driversGroupsState.loading && selectedGroupList.length === driversGroupsState.groups.length ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, null))), /*#__PURE__*/_react.default.createElement("span", null, t('ID', 'ID')))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.GroupNameContainer, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement("p", null, t('GROUP', 'Group')))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.DriverManagerContainer, {
    isHeader: true
  }, t('DRIVER_MANAGER', 'Driver manager'))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.DriverGroupTypeContainer, {
    isHeader: true
  }, t('TYPE', 'Type'))), !isFromStore && /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, t('ACTIONS', 'Actions'))))), driversGroupsState.loading ? _toConsumableArray(Array(pagination.pageSize).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.GroupIdWrapper, null, !isFromStore && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 18
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      style: {
        margin: '0px 5px'
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.GroupNameContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DriverManagerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DriverGroupTypeContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70
    }))), !isFromStore && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    }))))));
  }) : currentGroups.map(function (group) {
    var _group$administrator, _group$administrator2, _group$administrator3, _group$administrator4, _group$administrator5;
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: group.id,
      className: group.id === parseInt(curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.id) ? 'active' : null,
      onClick: function onClick(e) {
        return handleClickDriverGroup(e, group);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.GroupIdWrapper, null, !isFromStore && /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
      className: "group-checkbox",
      onClick: function onClick() {
        return handleSelectGroup(group.id);
      },
      isChecked: selectedGroupList.includes(group.id)
    }, selectedGroupList.includes(group.id) ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, null)), /*#__PURE__*/_react.default.createElement("span", null, group === null || group === void 0 ? void 0 : group.id))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.GroupNameContainer, null, /*#__PURE__*/_react.default.createElement("p", null, group === null || group === void 0 ? void 0 : group.name))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DriverManagerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, group !== null && group !== void 0 && (_group$administrator = group.administrator) !== null && _group$administrator !== void 0 && _group$administrator.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: group === null || group === void 0 || (_group$administrator2 = group.administrator) === null || _group$administrator2 === void 0 ? void 0 : _group$administrator2.photo
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, group === null || group === void 0 || (_group$administrator3 = group.administrator) === null || _group$administrator3 === void 0 ? void 0 : _group$administrator3.name, " ", group === null || group === void 0 || (_group$administrator4 = group.administrator) === null || _group$administrator4 === void 0 ? void 0 : _group$administrator4.lastname), /*#__PURE__*/_react.default.createElement("p", null, group === null || group === void 0 || (_group$administrator5 = group.administrator) === null || _group$administrator5 === void 0 ? void 0 : _group$administrator5.email)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.DriverGroupTypeContainer, null, getTypeTag(group === null || group === void 0 ? void 0 : group.type))), !isFromStore && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "group-enabled"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      disabled: actionDisabled,
      defaultChecked: group === null || group === void 0 ? void 0 : group.enabled,
      onChange: function onChange(enabled) {
        return handleUpdateDriversGroup === null || handleUpdateDriversGroup === void 0 ? void 0 : handleUpdateDriversGroup(group.id, {
          enabled: enabled
        });
      }
    }))))));
  }))), !driversGroupsState.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, !isFromStore && /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenDetails(null);
    },
    disabled: actionDisabled
  }, t('ADD_NEW_DRIVER_GROUP', 'Add new driver group')), (currentGroups === null || currentGroups === void 0 ? void 0 : currentGroups.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: pagination.totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagination.pageSize,
    handleChangePageSize: handleChangePageSize
  }))));
};