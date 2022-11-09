"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleContainer = exports.Title = exports.SettingItemDescription = exports.SettingItemContent = exports.SettingItemContainer = exports.IconWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SettingItemContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  margin: 15px 0;\n  padding: 20px 10px;\n  transition: all 0.3s;\n  border-radius: 8px;\n  cursor: pointer;\n  border: 1px solid transparent;\n\n  ", "\n\n  ", "\n\n  &:hover {\n    background: #E9F2FE;\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: 1px solid #2C7BE5 !important;\n  "])));
}, function (_ref2) {
  var disabledFeature = _ref2.disabledFeature;
  return disabledFeature && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: ", " !important;\n    cursor: not-allowed;\n  "])), function (props) {
    var _props$theme;

    return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.disabled;
  });
});

exports.SettingItemContainer = SettingItemContainer;

var IconWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 64px;\n  height: 64px;\n  min-width: 64px;\n  min-height: 64px;\n  background: #F8F9FA;\n  border-radius: 7.5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  margin-bottom: 10px;\n  ", "\n\n  @media (min-width: 577px) {\n    align-self: flex-start;\n    margin-bottom: 0;\n  }\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "])));
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.secundaryLight;
});

exports.IconWrapper = IconWrapper;

var SettingItemContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.SettingItemContent = SettingItemContent;

var TitleContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.TitleContainer = TitleContainer;

var Title = _styledComponents.default.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 13px;\n  color: #344050;\n  margin-bottom: 8px;\n"])));

exports.Title = Title;

var SettingItemDescription = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-weight: normal;\n  font-size: 12px;\n  color: #909BA9;\n\n  @media (min-width: 577px) {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n"])));

exports.SettingItemDescription = SettingItemDescription;