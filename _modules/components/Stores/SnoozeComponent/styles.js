"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnoozeWrapper = exports.SnoozeTitle = exports.SnoozeContainer = exports.InfoContainer = exports.IconContainer = exports.DateContainer = exports.ButtonWrapper = exports.ButtonOptions = exports.Button = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var SnoozeContainer = exports.SnoozeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  transition: all 3s ease-in;\n\n  ", "\n"])), function (_ref) {
  var openCalendar = _ref.openCalendar;
  return openCalendar && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    height: 362px;\n  "])));
});
var SnoozeTitle = exports.SnoozeTitle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 16;\n  font-weight: 700;\n  margin-bottom: 30px;\n"])));
var SnoozeWrapper = exports.SnoozeWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 30px;\n\n  > div {\n    margin: auto 0;\n    > p {\n      margin: 0;\n    }\n  }\n\n  @media (min-width: 862px) {\n    flex-direction: row;\n  }\n"])));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n\n  > button {\n    margin-right: 20px;\n  }\n"])));
var Button = exports.Button = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 44px;\n  background: ", ";\n  color: ", ";\n  border-color: ", ";\n  border: 1px solid #CCC;\n  border-radius: 8px;\n  line-height: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all .2s ease-in;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: ", " !important;\n    color: #FFF !important;\n  "])), function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primary);
  });
}, function (_ref3) {
  var color = _ref3.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:hover {\n      background: ", ";\n    }\n    &:active {\n      background: ", ";\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return (0, _polished.darken)(0.04, props.theme.colors.primary);
  }, function (props) {
    return (0, _polished.darken)(0.1, props.theme.colors.primary);
  }, function (_ref4) {
    var outline = _ref4.outline;
    return outline && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
      var _props$theme$colors2;
      return ((_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.backgroundPage) || '#FFF';
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    });
  }, function (_ref5) {
    var circle = _ref5.circle;
    return circle && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    });
  }, function (_ref6) {
    var circle = _ref6.circle,
      outline = _ref6.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      var _props$theme$colors3;
      return ((_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.backgroundPage) || '#FFF';
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    });
  });
});
var ButtonOptions = exports.ButtonOptions = _styledComponents.default.button(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  min-width: 65px;\n  height: 44px;\n  background: ", ";\n  color: ", ";\n  border-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  line-height: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all .2s ease-in;\n\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  &:hover {\n    color: ", " !important;\n    border-color: ", ";\n  }\n  ", "\n"])), function (props) {
  var _props$theme$colors4;
  return ((_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.primary);
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref7) {
  var active = _ref7.active;
  return active && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    color: ", " !important;\n    border-color: ", ";\n    border-width: 2px;\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
var DateContainer = exports.DateContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 44px;\n  background: ", ";\n  color: ", ";\n  border-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  line-height: 30px;\n\n  ", "\n\n  input {\n    width: auto;\n    min-width: 220px;\n    border: 0px;\n    padding-left: 15px;\n    padding-right: 15px;\n    font-size: 14px;\n    cursor: pointer;\n    outline: none;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    transition: all .2s ease-in;\n  }\n\n  ", "\n\n  .react-datepicker-popper {\n    @media (min-width: 820px) {\n      transform: translate3d(-20px, 114px, 0px) !important;\n      right: 0px;\n      left: unset !important;\n    }\n  }\n  .react-datepicker__triangle {\n    display: none;\n  }\n"])), function (props) {
  var _props$theme$colors5;
  return ((_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (_ref8) {
  var active = _ref8.active;
  return active && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    color: ", " !important;\n    border-color: ", " !important;\n    border-width: 2px;\n\n    input {\n      color: ", " !important;\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    span {\n      margin-left: 10px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    span {\n      margin-right: 10px;\n    }\n  "])));
});
var IconContainer = exports.IconContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: none;\n  border-radius: 6px;\n  margin-left: 10px;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all .2s ease-in;\n"])));
var InfoContainer = exports.InfoContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: end;\n  justify-content: ", ";\n"])), function (_ref9) {
  var hasSnooze = _ref9.hasSnooze;
  return hasSnooze ? 'space-between' : 'flex-start';
});