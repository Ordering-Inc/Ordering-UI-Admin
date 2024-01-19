"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderContentHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _SearchBar = require("../SearchBar");
var _Modal = require("../Modal");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _OrdersDashboardSwitch = require("../OrdersDashboardSwitch");
var _FilterGroupList = require("../FilterGroupList");
var _DeadlineSettingInterface = require("../DeadlineSettingInterface");
var _MdcFilterOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOutline"));
var _MdcFilterOff = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOff"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import { DeadlinesTypeSelector } from '../DeadlinesTypeSelector'
var OrderContentHeader = exports.OrderContentHeader = function OrderContentHeader(props) {
  var activeSwitch = props.activeSwitch,
    handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    filterValues = props.filterValues,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleSwitch = props.handleSwitch;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    filterModalOpen = _useState2[0],
    setFilterModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    filterApplied = _useState4[0],
    setFilterApplied = _useState4[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    deadlineSettingModalOpen = _useState6[0],
    setDeadlineSettingModalOpen = _useState6[1];
  // const [deadlineType, setDeadlineType] = useState(0)

  // const handleChangeDeadlineType = (deadlineType) => {
  //   setDeadlineType(deadlineType)

  //   if (deadlineType === 4) {
  //     setDeadlineSettingModalOpen(true)
  //   }
  // }

  var handleDeadlineSetting = function handleDeadlineSetting() {
    setDeadlineSettingModalOpen(false);
  };
  var handleCloseFilterModal = function handleCloseFilterModal() {
    setFilterModalOpen(false);
  };
  var closeModal = function closeModal(e) {
    if (e.code === 'Escape' && width >= 1000) setFilterModalOpen(false);
  };
  (0, _react.useEffect)(function () {
    var _filterApplied = false;
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false;
    } else {
      _filterApplied = filterValues.businessIds.length > 0 || filterValues.cityIds.length > 0 || filterValues.deliveryEndDatetime !== null || filterValues.deliveryFromDatetime !== null || filterValues.deliveryTypes.length > 0 || filterValues.driverIds.length > 0 || filterValues.paymethodIds.length > 0 || filterValues.statuses.length > 0;
    }
    setFilterApplied(_filterApplied);
  }, [filterValues]);
  (0, _react.useEffect)(function () {
    if (!filterModalOpen) return;
    document.addEventListener('keydown', closeModal);
    return function () {
      return document.removeEventListener('keydown', closeModal);
    };
  }, [filterModalOpen]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderContentHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderSection, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitle, null, (activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.orders) && t('ORDERS', 'orders'), (activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.deliveries) && t('DASHBOARD', 'Dashboard'), (activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.messages) && t('MESSAGES', 'Messages')), /*#__PURE__*/_react.default.createElement(_styles.WrapperHeaderRightSection, null, /*#__PURE__*/_react.default.createElement(_OrdersDashboardSwitch.OrdersDashboardSwitch, {
    activeSwitch: activeSwitch,
    handleSwitch: handleSwitch
  }))), /*#__PURE__*/_react.default.createElement(_styles.TopRightSection, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperSearchAndFilter, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }), /*#__PURE__*/_react.default.createElement(_styles.FilterButton, {
    onClick: function onClick() {
      return setFilterModalOpen(true);
    },
    name: "filter-btn"
  }, filterApplied ? /*#__PURE__*/_react.default.createElement(_MdcFilterOutline.default, null) : /*#__PURE__*/_react.default.createElement(_MdcFilterOff.default, null))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDeadlineAndSwitch, null, /*#__PURE__*/_react.default.createElement(_OrdersDashboardSwitch.OrdersDashboardSwitch, {
    activeSwitch: activeSwitch,
    handleSwitch: handleSwitch
  })))), /*#__PURE__*/_react.default.createElement(_FilterGroupList.FilterGroupList, {
    open: filterModalOpen,
    handleCloseFilterModal: handleCloseFilterModal,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    handleChangeFilterValues: handleChangeFilterValues
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('SETTINGS', 'Settings'),
    width: "50%",
    padding: "30px",
    open: deadlineSettingModalOpen,
    onClose: function onClose() {
      return setDeadlineSettingModalOpen(false);
    },
    acceptText: t('ACCEPT', 'Accept'),
    onAccept: function onAccept() {
      return handleDeadlineSetting();
    }
  }, /*#__PURE__*/_react.default.createElement(_DeadlineSettingInterface.DeadlineSettingInterface, null)));
};