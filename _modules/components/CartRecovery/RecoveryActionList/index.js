"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecoveryActionList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _styledComponents = require("styled-components");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RecoveryActionList = function RecoveryActionList(props) {
  var _recoveryActionList$a, _recoveryActionList$a2;
  var recoveryActionList = props.recoveryActionList,
    paginationProps = props.paginationProps,
    setPaginationProps = props.setPaginationProps,
    getRecoveryList = props.getRecoveryList,
    handleOpenDetail = props.handleOpenDetail,
    handleUpdateAction = props.handleUpdateAction,
    selectedAction = props.selectedAction,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openPopover = _useState2[0],
    setOpenPopover = _useState2[1];
  var _useState3 = (0, _react.useState)({
      name: true,
      description: true,
      actions: true
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    allowColumns = _useState4[0],
    setAllowColumns = _useState4[1];
  var optionsDefault = [{
    value: 'name',
    content: t('NAME', 'Name')
  }, {
    value: 'description',
    content: t('DESCRIPTION', 'Description')
  }, {
    value: 'actions',
    content: t('ACTIONS', 'Actions')
  }];
  var handleChangePage = function handleChangePage(page) {
    getRecoveryList(page, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
      pageSize: pageSize
    }));
    getRecoveryList(expectedPage, pageSize);
  };
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };
  var handleClickRecoverAction = function handleClickRecoverAction(e, action) {
    var inValid = e.target.closest('.enable_control');
    if (inValid) return;
    handleOpenDetail(action);
  };
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.currentPage) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.pageSize) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.totalPages)) return;
    (0, _utils.addQueryToUrl)({
      page: paginationProps.currentPage,
      pageSize: paginationProps.pageSize
    });
  }, [paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Table, {
    isRelative: (recoveryActionList === null || recoveryActionList === void 0 || (_recoveryActionList$a = recoveryActionList.actions) === null || _recoveryActionList$a === void 0 ? void 0 : _recoveryActionList$a.length) > 5
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('ACTION', 'Action')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("th", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement("th", {
    className: "allow-colums action"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
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
  })))), recoveryActionList !== null && recoveryActionList !== void 0 && recoveryActionList.loading ? _toConsumableArray(Array(8).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "actionInfo"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "drag-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 90
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    })), /*#__PURE__*/_react.default.createElement("td", {
      className: "action"
    }, /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "recovery-enabled"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 20
    })))));
  }) : recoveryActionList === null || recoveryActionList === void 0 ? void 0 : recoveryActionList.actions.map(function (action, i) {
    var _theme$images$icons;
    return /*#__PURE__*/_react.default.createElement(_styles2.Tbody, {
      key: i,
      onClick: function onClick(e) {
        return handleClickRecoverAction(e, action);
      },
      className: "".concat((selectedAction === null || selectedAction === void 0 ? void 0 : selectedAction.id) === action.id ? 'active' : '')
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "actionInfo"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "drag-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
      alt: "six dots",
      draggable: true
      // onDragStart={e => handleDragStart(e, product.id)}
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.name) && /*#__PURE__*/_react.default.createElement("p", null, action === null || action === void 0 ? void 0 : action.name)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("td", {
      className: "actionInfo"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react.default.createElement("span", null, action === null || action === void 0 ? void 0 : action.description)))), /*#__PURE__*/_react.default.createElement("td", {
      className: "action"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.actions) && /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "recovery-enabled"
    }, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: action === null || action === void 0 ? void 0 : action.enabled,
      onChange: function onChange(val) {
        return handleUpdateAction(action.id, {
          enabled: val
        });
      },
      className: "enable_control"
    })))));
  }))), !recoveryActionList.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenDetail({});
    }
  }, t('ADD_NEW_RECOVERY_ACTION', 'Add new recovery action')), (recoveryActionList === null || recoveryActionList === void 0 || (_recoveryActionList$a2 = recoveryActionList.actions) === null || _recoveryActionList$a2 === void 0 ? void 0 : _recoveryActionList$a2.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage,
    totalPages: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize,
    handleChangePageSize: handleChangePageSize
  })));
};
exports.RecoveryActionList = RecoveryActionList;