"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PushTokens = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Pagination = require("../Pagination");
var _styles = require("./styles");
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
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PushTokens = function PushTokens(props) {
  var userId = props.userId,
    pushTokens = props.pushTokens;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var numberPerPage = 10;
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    currentPageTokens = _useState4[0],
    setCurrentPageTokens = _useState4[1];
  var sortedTokens = (0, _react.useMemo)(function () {
    var _tokens = _toConsumableArray(pushTokens);
    return _tokens.sort(function (a, b) {
      return b.id - a.id;
    });
  }, [pushTokens]);
  var handleChangePage = function handleChangePage(pageNumber) {
    setCurrentPage(pageNumber);
  };
  (0, _react.useEffect)(function () {
    var indexOfLastPost = currentPage * numberPerPage;
    var indexOfFirstPost = indexOfLastPost - numberPerPage;
    var _currentProducts = sortedTokens.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPageTokens(_currentProducts);
  }, [sortedTokens, currentPage]);
  (0, _react.useEffect)(function () {
    setCurrentPage(1);
  }, [userId]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, sortedTokens.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles.TableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Table, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('USER_ID_NUMBER', 'User ID')), /*#__PURE__*/_react.default.createElement("th", null, t('TOKEN', 'Token')), /*#__PURE__*/_react.default.createElement("th", null, t('APP', 'App')), /*#__PURE__*/_react.default.createElement("th", null, t('CREATED_AT', 'Created at')), /*#__PURE__*/_react.default.createElement("th", null, t('UPDATED_AT', 'Updated at')))), currentPageTokens.map(function (token) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: token.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, token === null || token === void 0 ? void 0 : token.user_id), /*#__PURE__*/_react.default.createElement("td", null, token === null || token === void 0 ? void 0 : token.token), /*#__PURE__*/_react.default.createElement("td", null, token === null || token === void 0 ? void 0 : token.app), /*#__PURE__*/_react.default.createElement("td", null, parseDate(token === null || token === void 0 ? void 0 : token.created_at, {
      utc: false
    })), /*#__PURE__*/_react.default.createElement("td", null, parseDate(token === null || token === void 0 ? void 0 : token.updated_at, {
      utc: false
    }))));
  }))) : /*#__PURE__*/_react.default.createElement("p", {
    className: "no-data"
  }, t('NO_DATA', 'No Data')), (sortedTokens === null || sortedTokens === void 0 ? void 0 : sortedTokens.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    isHidePagecontrol: true,
    currentPage: currentPage,
    totalPages: Math.ceil(sortedTokens.length / numberPerPage),
    handleChangePage: handleChangePage
  })));
};
exports.PushTokens = PushTokens;