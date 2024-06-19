"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionSection = exports.AccordionItem = exports.AccordionContent = exports.Accordion = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var AccordionSection = exports.AccordionSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var isAccept = _ref.isAccept;
  return isAccept && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
var AccordionStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  .rotate {\n    transform: rotate(90deg);\n  }\n\n  .accordion__icon {\n    margin-right: 10px;\n    transition: transform 0.3s ease;\n    ", "\n  }\n\n  @media (min-width: 411px){\n    flex-direction: row;\n  }\n\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-left: initial;\n    "])));
});
var Accordion = exports.Accordion = function Accordion(props) {
  var style = {};
  return /*#__PURE__*/_react.default.createElement(AccordionStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var AccordionItem = exports.AccordionItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 10px;\n\n  > div {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    svg,\n    img {\n      ", "\n    }\n\n    span {\n      font-size: 14px;\n      font-weight: 500;\n    }\n  }\n\n  ", "\n\n  ", "\n  \n  border-radius: 8px;\n  &:hover {\n    background-color: ", ";\n  }\n  \n  ", "\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "])));
}, function (_ref2) {
  var isProduct = _ref2.isProduct;
  return isProduct && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    > div {\n      span {\n        font-weight: 400;\n      }\n    }\n  "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-right: ", ";\n  "])), function (_ref3) {
    var margin = _ref3.margin;
    return "".concat(margin, "px") || '0px';
  }) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: ", ";\n  "])), function (_ref4) {
    var margin = _ref4.margin;
    return "".concat(margin, "px") || '0px';
  });
}, function (props) {
  return props.theme.colors.secundary;
}, function (_ref5) {
  var active = _ref5.active;
  return active && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    background-color: ", " !important;\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref6) {
  var isAccept = _ref6.isAccept;
  return isAccept && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    border-radius: unset;\n    border: 1px solid ", ";\n    border-top: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.backgroundPage;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref7) {
  var isBorderBottom = _ref7.isBorderBottom;
  return isBorderBottom && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    border-radius: unset;\n    border: 1px solid ", ";\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.backgroundPage;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
var AccordionContent = exports.AccordionContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  width: 100%;\n"])));