"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Button = exports.Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #CCC;\n  color: #151824;\n\n  border: 1px solid #1C202E;\n  border-radius: ", ";\n  line-height: 30px;\n  padding: 5px 15px;\n  font-size: 15px;\n  cursor: pointer;\n  outline: none;\n\n  &:active {\n    background: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n\n  ", "\n\n  ", "\n\n", "\n\n"])), function (_ref) {
  var borderRadius = _ref.borderRadius;
  return borderRadius || '40px';
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref2) {
  var withIcon = _ref2.withIcon;
  return withIcon && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    column-gap: 5px;\n  "])));
}, function (_ref3) {
  var color = _ref3.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n\n    &:active {\n      background: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.btnPrimary;
  }, function (props) {
    return props.theme.colors.btnPrimaryContrast;
  }, function (props) {
    return props.theme.colors.btnPrimary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.btnPrimary);
  });
}, function (_ref4) {
  var color = _ref4.color;
  return color === 'secondary' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n\n    &:active {\n      background: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.btnSecondary;
  }, function (props) {
    return props.theme.colors.btnSecondaryContrast;
  }, function (props) {
    return props.theme.colors.btnSecondary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.btnSecondary);
  });
}, function (_ref5) {
  var color = _ref5.color;
  return color === 'darkBlue' && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n\n    &:active {\n      background: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.btnDarkBlue;
  }, function (props) {
    return props.theme.colors.btnDarkBlueContrast;
  }, function (props) {
    return props.theme.colors.btnDarkBlue;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.btnDarkBlue);
  });
}, function (_ref6) {
  var color = _ref6.color;
  return color === 'offline' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: #fff;\n    border-color: ", ";\n\n    &:active {\n      background: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.offline;
  }, function (props) {
    return props.theme.colors.offline;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.offline);
  });
}, function (_ref7) {
  var color = _ref7.color;
  return color === 'modalAccept' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: #182964;\n    color: #FFFFFF;\n    font-size: 16px;\n    padding: 15px 0;\n    margin-top: 30px;\n    \n    &:active {\n      background: ", ";\n    }\n  "])), function (props) {
    return (0, _polished.darken)(0.07, '#182964');
  });
}, function (_ref8) {
  var outline = _ref8.outline;
  return outline && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: #151824;\n    border-color: #CCC;\n\n    &:active {\n      background: ", ";\n    }\n  "])), function (props) {
    var _props$theme$colors;
    return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
  }, (0, _polished.darken)(0.07, '#FFF'));
}, function (_ref9) {
  var circle = _ref9.circle;
  return circle && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background: #CCC;\n  color: #FFF;\n  border-color: #CCC;\n  padding: 0;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  border-radius: 50%;\n\n  &:active {\n    color: #FFF;\n    background: ", ";\n  }\n"])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref10) {
  var circle = _ref10.circle,
    outline = _ref10.outline;
  return circle && outline && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: #CCC;\n  border-color: #CCC;\n  padding: 0;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  border-radius: 50%;\n\n  ", "\n\n  &:active {\n    color: #FFF;\n    background: ", ";\n  }\n"])), function (props) {
    var _props$theme$colors2;
    return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
  }, function (_ref11) {
    var active = _ref11.active;
    return active && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    background-color: #000;\n  "])));
  }, (0, _polished.darken)(0.07, '#CCC'));
});