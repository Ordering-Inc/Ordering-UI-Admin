"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.TableWrapper = exports.TBoday = exports.SearchWrapper = exports.ModifiedWrapper = exports.Image = exports.Container = exports.CheckBoxWrapper = exports.BusinessTable = exports.BusinessSelectOption = exports.BusinessInfoWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

exports.Container = Container;

var BusinessSelectOption = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n\n  > button {\n    margin-right: 16px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 16px;\n    "])));
});

exports.BusinessSelectOption = BusinessSelectOption;

var SearchWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"])));

exports.SearchWrapper = SearchWrapper;

var TableWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: auto;\n"])));

exports.TableWrapper = TableWrapper;

var BusinessTable = _styledComponents.default.table(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border-collapse: collapse;\n  width: 100%;\n  min-width: 500px;\n\n  > thead {\n    border-bottom: 1px solid ", ";\n    tr{\n      th {\n        padding: 12px 0px;\n        :not(.business-info) {\n          text-align: center;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
});

exports.BusinessTable = BusinessTable;

var TBoday = _styledComponents.default.tbody(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n  tr{\n    td {\n      padding: 12px 1px;\n    }\n  }\n  &:hover {\n    background: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: #F5F9FF;\n    td {\n      border-top: 1px solid ", ";\n      border-bottom: 1px solid ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});

exports.TBoday = TBoday;

var BusinessInfoWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > span {\n    font-size: 14px;\n    margin-left: 12px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 12px;\n      margin-left: 0;\n    "])));
});

exports.BusinessInfoWrapper = BusinessInfoWrapper;

var WrapperImage = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  max-width: 38px;\n  max-height: 38px;\n  height: 38px;\n  width: 38px;\n\n  ", "\n  border-radius: 8px;\n\n  > svg {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return isSkeleton ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    background: #F8F9FA;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  "])));
});

exports.WrapperImage = WrapperImage;

var ImageStyled = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 8px;\n"])));

var Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.Image = Image;

var CheckBoxWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));

exports.CheckBoxWrapper = CheckBoxWrapper;

var ModifiedWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n\n  svg {\n    font-size: 17px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (_ref3) {
  var isSkeleton = _ref3.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    > span {\n      font-size: 12px;\n      padding: 2px 8px;\n      background: #F5F9FF;\n      border-radius: 50px;\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});

exports.ModifiedWrapper = ModifiedWrapper;