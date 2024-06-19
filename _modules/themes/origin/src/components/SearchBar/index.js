"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var SearchBar = exports.SearchBar = function SearchBar(_ref) {
  var _theme$images;
  var onSearch = _ref.onSearch,
    search = _ref.search,
    placeholder = _ref.placeholder;
  var theme = (0, _styledComponents.useTheme)();
  var timeout = null;
  var el = (0, _react.useRef)();
  var onChangeSearch = function onChangeSearch(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onSearch(e.target.value);
    }, 1000);
  };
  (0, _react.useEffect)(function () {
    el.current.onkeyup = onChangeSearch;
  }, []);
  (0, _react.useEffect)(function () {
    if (!search) {
      el.current.value = '';
    }
  }, [search]);
  return /*#__PURE__*/_react.default.createElement(_styles.OrdersSearch, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.search,
    alt: "search"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    ref: el,
    name: "search",
    placeholder: placeholder
  }));
};