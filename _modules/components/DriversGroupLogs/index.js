"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupLogs = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Pagination = require("../Pagination");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversGroupLogsUI = function DriversGroupLogsUI(props) {
  var logsList = props.logsList,
      paginationProps = props.paginationProps,
      getDriversGroupLogs = props.getDriversGroupLogs;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var getAttributeName = function getAttributeName(key) {
    var attributes = [{
      key: 'autoassign_amount_drivers',
      content: t('AUTO_ASSIGN_GROUP_ORDERS_TO_DRIVERS', 'Auto assign the order of group to this amount of drivers')
    }, {
      key: 'orders_group_max_orders',
      content: t('MAX_NUMBER_ORDERS', 'Maximum Number of Orders')
    }, {
      key: 'autoassign_autoaccept_by_driver',
      content: t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver')
    }, {
      key: 'orders_group_max_time_between',
      content: t('MAX_ORDER_TIME_BETWEEN', 'Maximum time between orders in seconds')
    }, {
      key: 'orders_group_max_distance_between_pickup',
      content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters')
    }, {
      key: 'orders_group_max_distance_between_delivery',
      content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters')
    }, {
      key: 'orders_group_use_maps_api',
      content: t('USE_MAPS_API', 'Use maps api')
    }, {
      key: 'orders_group_max_time_between_pickup',
      content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters')
    }, {
      key: 'orders_group_max_time_between_delivery',
      content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters')
    }, {
      key: 'autoassign_forced_assignment',
      content: t('AUTO_ASSIGN_FORCED_ASSIGNMENT', 'Forced assignment')
    }, {
      key: 'autoassign_customer_max_distance_from_business',
      content: t('MAX_CUSTOMER_DISTANCE_FROM_BUSINESS', 'Max distance between customer and business')
    }, {
      key: 'autoassign_initial_radius',
      content: t('INITIAL_RADIUS', 'Initial radius in meters')
    }, {
      key: 'autoassign_increment_radius',
      content: t('INCREMENT_RADIUS', 'Radius increase in meters')
    }, {
      key: 'autoassign_max_radius',
      content: t('MAX_RADIUS', 'Maximum radius in meters')
    }, {
      key: 'autoassign_autoreject_time',
      content: t('AUTO_REJECT_ORDER_GROUP_AFTER', 'Auto reject Orders After')
    }, {
      key: 'autoassign_max_orders',
      content: t('MAX_AMOUNT_ORDERS_PER_DRIVER', 'Maximum amount of orders per drivers')
    }, {
      key: 'autoassign_max_in_pending',
      content: t('ORDER_PENDING', 'Pending')
    }];
    var found = attributes.find(function (attribute) {
      return attribute.key === key;
    });

    if (found) {
      return found.content;
    } else {
      return key;
    }
  };

  var handleChangePage = function handleChangePage(page) {
    getDriversGroupLogs(page, 10);
  };

  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    getDriversGroupLogs(expectedPage, pageSize);
  };

  (0, _react.useEffect)(function () {
    if (logsList.loading || logsList.logs.length > 0 || paginationProps.totalPages <= 1) return;

    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage);
    } else {
      handleChangePage(paginationProps.currentPage - 1);
    }
  }, [logsList.logs, paginationProps]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriversGroupLogsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TableWrapper, null, logsList.loading || logsList.logs.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles.Table, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('CONTROL_PANEL_USERS', 'Users')), /*#__PURE__*/_react.default.createElement("th", null, t('DETAILS', 'Details')), /*#__PURE__*/_react.default.createElement("th", null, t('EXPORT_DATE', 'Date')), /*#__PURE__*/_react.default.createElement("th", null, t('USER_AGENT', 'User agent')))), logsList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DataListTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DateTimeWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null))));
  }) : logsList.logs.map(function (log) {
    var _log$user, _log$user2, _log$user3;

    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: log.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, log === null || log === void 0 ? void 0 : (_log$user = log.user) === null || _log$user === void 0 ? void 0 : _log$user.name, " ", log === null || log === void 0 ? void 0 : (_log$user2 = log.user) === null || _log$user2 === void 0 ? void 0 : _log$user2.lastname), /*#__PURE__*/_react.default.createElement("p", null, log === null || log === void 0 ? void 0 : (_log$user3 = log.user) === null || _log$user3 === void 0 ? void 0 : _log$user3.email))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DataListTable, null, log === null || log === void 0 ? void 0 : log.data.map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement("tbody", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, getAttributeName(item === null || item === void 0 ? void 0 : item.attribute)), /*#__PURE__*/_react.default.createElement("td", null, "".concat(item === null || item === void 0 ? void 0 : item.new)), /*#__PURE__*/_react.default.createElement("td", null, "".concat(item === null || item === void 0 ? void 0 : item.old))));
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.DateTimeWrapper, null, parseDate(log.created_at, {
      utc: false
    }))), /*#__PURE__*/_react.default.createElement("td", null, log === null || log === void 0 ? void 0 : log.user_agent)));
  })) : /*#__PURE__*/_react.default.createElement(_styles.NoData, null, t('NO_DATA', 'No Data'))), (logsList === null || logsList === void 0 ? void 0 : logsList.logs.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    isHidePagecontrol: true,
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  }))));
};

var DriversGroupLogs = function DriversGroupLogs(props) {
  var driversGroupLogsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriversGroupLogsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupLogs, driversGroupLogsProps);
};

exports.DriversGroupLogs = DriversGroupLogs;