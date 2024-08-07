"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));
var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var DriversGroupsList = function DriversGroupsList(props) {
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
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;

  // Change page
  var _useState = (0, _react.useState)(Number(defaultPage) || 1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)(Number(defaultPageSize) || 10),
    _useState4 = _slicedToArray(_useState3, 2),
    groupsPerPage = _useState4[0],
    setGroupsPerPage = _useState4[1];

  // Get current groups
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    currentGroups = _useState6[0],
    setCurrentGroups = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    totalPages = _useState8[0],
    setTotalPages = _useState8[1];
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * groupsPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setGroupsPerPage(pageSize);
  };
  (0, _react.useEffect)(function () {
    if (driversGroupsState.loading) return;
    var _totalPages;
    var groups = [];
    if (searchValue) {
      groups = driversGroupsState.groups.filter(function (plugin) {
        var _plugin$name;
        return (_plugin$name = plugin.name) === null || _plugin$name === void 0 ? void 0 : _plugin$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
      });
    } else {
      groups = _toConsumableArray(driversGroupsState.groups);
    }
    if (groups.length > 0) {
      _totalPages = Math.ceil(groups.length / groupsPerPage);
    }
    var indexOfLastPost = currentPage * groupsPerPage;
    var indexOfFirstPost = indexOfLastPost - groupsPerPage;
    var _currentGroups = groups.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentGroups(_currentGroups);
  }, [driversGroupsState, currentPage, groupsPerPage, searchValue]);
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
    if (!isUseQuery || !currentPage || !groupsPerPage || !totalPages) return;
    (0, _utils.addQueryToUrl)({
      page: currentPage,
      pageSize: groupsPerPage
    });
  }, [currentPage, groupsPerPage, totalPages]);
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
  }, t('TYPE', 'Type'))), !isFromStore && /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, t('ACTIONS', 'Actions'))))), driversGroupsState.loading ? _toConsumableArray(Array(groupsPerPage).keys()).map(function (i) {
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
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: groupsPerPage,
    handleChangePageSize: handleChangePageSize
  }))));
};
exports.DriversGroupsList = DriversGroupsList;