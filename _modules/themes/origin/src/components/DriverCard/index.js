"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _utils = require("../../utils");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styles = require("./styles");
var _Modal = require("../Modal");
var _DriverOrders = require("../DriverOrders");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverCard = function DriverCard(props) {
  var offline = props.offline,
    driver = props.driver,
    driversList = props.driversList,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    handleOpenOrderDetail = props.handleOpenOrderDetail;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    getTimeAgo = _useUtils2[0].getTimeAgo;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    ordersAndDriverModalOpen = _useState2[0],
    setOrdersAndDriverModalOpen = _useState2[1];
  var handleOpenDriverOrders = function handleOpenDriverOrders() {
    if (!offline) {
      setOrdersAndDriverModalOpen(true);
    }
  };
  var closeModal = function closeModal(e) {
    if (e.code === 'Escape') setOrdersAndDriverModalOpen(false);
  };
  (0, _react.useEffect)(function () {
    if (!ordersAndDriverModalOpen) return;
    document.addEventListener('keydown', closeModal);
    return function () {
      return document.removeEventListener('keydown', closeModal);
    };
  }, [ordersAndDriverModalOpen]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DrirverInfo, {
    offline: offline
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, null, driver.photo ? /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
    bgimage: driver.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.DriverInfoContent, null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h2", null, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement("h2", {
    onClick: function onClick() {
      return handleOpenDriverOrders();
    }
  }, driver.assigned_orders_count, " ", t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_styles.InfoCell, null, /*#__PURE__*/_react.default.createElement("p", null, getTimeAgo(driver.last_order_assigned_at)), /*#__PURE__*/_react.default.createElement(_styles.WrapperStar, {
    width: (0, _utils.getStarWidth)(driver.qualification)
  }))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "80%",
    height: "80vh",
    padding: "30px",
    open: ordersAndDriverModalOpen,
    onClose: function onClose() {
      return setOrdersAndDriverModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_DriverOrders.DriverOrders, {
    driver: driver,
    driversList: driversList,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail
  })));
};
exports.DriverCard = DriverCard;