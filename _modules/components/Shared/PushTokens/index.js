"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PushTokens = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Pagination = require("../Pagination");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PushTokens = exports.PushTokens = function PushTokens(props) {
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