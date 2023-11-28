"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.ReviewHeader = exports.ReviewDetailsContainer = exports.ReviewContentWrapper = exports.ReviewComment = exports.ProductImageContainer = exports.NotReviewed = exports.LikeSignWrapper = exports.Image = exports.Header = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ReviewDetailsContainer = exports.ReviewDetailsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  padding: 20px;\n  box-sizing: border-box;\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "])));
});
var ProductImageContainer = exports.ProductImageContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n"])));
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n  border-radius: 8px;\n\n  > svg {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (_ref) {
  var isSmall = _ref.isSmall;
  return isSmall ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    max-width: 40px;\n    max-height: 40px;\n    height: 40px;\n    width: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    max-width: 120px;\n    max-height: 120px;\n    height: 120px;\n    width: 120px;\n  "])));
}, function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return isSkeleton ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    border: 1px solid #E3E3E3;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  "])));
});
var ImageStyled = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 8px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var ReviewContentWrapper = exports.ReviewContentWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n"])));
var ReviewHeader = exports.ReviewHeader = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n"])));
var LikeSignWrapper = exports.LikeSignWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n\n  svg {\n    color: ", ";\n    font-size: 22px;\n\n    &:first-child {\n      ", "\n    }\n  }\n"])), function (_ref3) {
  var isLike = _ref3.isLike;
  return isLike ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    > svg:first-child {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    > svg:last-child {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "])));
});
var ReviewComment = exports.ReviewComment = _styledComponents.default.p(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  margin: 15px 0;\n"])));
var NotReviewed = exports.NotReviewed = _styledComponents.default.p(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  font-size: 14px;\n"])));