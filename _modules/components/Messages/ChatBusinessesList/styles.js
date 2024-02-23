"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.WrapperImage = exports.InfoContainer = exports.Image = exports.CustomersListConatainer = exports.Container = exports.Card = exports.AssignedOrdersCount = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0px 12px 15px 12px;\n  height: calc(100% - 140px);\n"])));
var CustomersListConatainer = exports.CustomersListConatainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-height: calc(100% - 50px);\n  overflow: auto;\n"])));
var Card = exports.Card = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  padding: 10px 15px;\n\n  &:hover {\n    background-color: ", ";\n  }\n  \n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  ", "\n  border-radius: 8px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"])), function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
var ImageStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var InfoContainer = exports.InfoContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n  > div:first-child {\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin: 0 5px;\n    }\n    \n    p {\n      font-size: 14px;\n      color: ", ";\n      font-weight: 600;\n      margin: 0px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "])));
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});
var AssignedOrdersCount = exports.AssignedOrdersCount = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  cursor: pointer;\n  color: ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    opacity: 0.5;\n  "])));
});
var WrapperPagination = exports.WrapperPagination = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));