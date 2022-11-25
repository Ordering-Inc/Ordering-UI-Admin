"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = exports.SettingListConatiner = exports.PurchaseWrapper = exports.Paragraph = exports.LalaMoveConnectContainer = exports.HeaderIcons = exports.Header = exports.DropdownButtonWrapper = exports.DescriptionHeader = exports.Description = exports.Container = exports.CategoryExtraContent = exports.ApiKeysListTable = exports.AllSetting = exports.AddNewButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var LalaMoveConnectContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 26px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n  position: relative;\n\n  @media (min-width: 768px) {\n    padding: 26px 40px;\n  }\n"])));
exports.LalaMoveConnectContainer = LalaMoveConnectContainer;
var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n\n  ", "\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0px;\n  }\n\n  button {\n    line-height: 12px;\n    height: 16px;\n    font-size: 10px;\n    margin-left: 15px;\n    padding: 2px 8px;\n    border-radius: 50px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 35px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-right: 35px;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n      margin-left: 0px;\n    "])));
});
exports.Header = Header;
var ApiKeysListTable = _styledComponents.default.table(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 25px;\n\n  thead {\n    border-bottom: 1px solid ", ";\n    th {\n      padding: 10px 0;\n      &:last-child {\n        padding-left: 20px;\n        padding-right: 20px;\n      }\n    }\n  }\n  tr {\n    width: 100%;\n    th,\n    td {\n      font-size: 12px;\n      word-break: break-all;\n\n      &:last-child {\n        width: 100px;\n        > div {\n          padding-left: 20px;\n          padding-right: 20px;\n        }\n      }\n    }\n  }\n\n  tbody {\n    border-bottom: 1px solid ", ";\n    td {\n      padding-top: 9px;\n      padding-bottom: 9px;\n\n      &:last-child {\n        > div {\n          display: flex;\n          justify-content: flex-end;\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.borderColor;
});
exports.ApiKeysListTable = ApiKeysListTable;
var DropdownButtonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n  padding: 5px 20px;\n  button {\n    background: transparent !important;\n    border: none;\n    padding: 0px;\n    &:active,\n    &:focus {\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    svg {\n      color: ", ";\n    }\n\n    &:after {\n      display: none;\n    }\n  }\n\n  .show {\n    button {\n      background: ", " !important;\n      border-color: unset !important;\n      box-shadow: none !important;\n    }\n    >div {\n      border: 1px solid ", ";\n      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    }\n  }\n\n  > div {\n    > div {\n      border-radius: 8px;\n      .dropdown-item {\n        font-size: 12px;\n        color: ", ";\n      }\n      .dropdown-item:last-child {\n        color: #E63757;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return props !== null && props !== void 0 && (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border-right: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border-left: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.DropdownButtonWrapper = DropdownButtonWrapper;
var AddNewButton = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 12px;\n  color: ", ";\n  margin: 20px 0;\n  width: fit-content;\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
});
exports.AddNewButton = AddNewButton;
var AllSetting = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  user-select: none;\n  cursor: pointer;\n  margin-top: 36px;\n  cursor: pointer;\n  span {\n    font-weight: 600;\n    font-size: 14px;\n    color: ", ";\n  }\n  svg {\n    color: ", ";\n    margin-left: 5px;\n    transition: 0.2s linear;\n    ", "\n  }\n  &:hover {\n    svg {\n      transform: translateX(3px);\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0px;\n    "])));
});
exports.AllSetting = AllSetting;
var Description = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 40px;\n  font-size: 14px;\n  margin-bottom: 0px;\n  text-align: justify;\n\n  @media (min-width: 768px) {\n    text-align: initial;\n  }\n"])));
exports.Description = Description;
var CategoryExtraContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 26px 26px 60px 26px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow: auto;\n\n  ", "\n\n  > button {\n    z-index: 100;\n    position: absolute;\n    top: 25px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n  "])));
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      right: 20px;\n    "])));
});
exports.CategoryExtraContent = CategoryExtraContent;
var Container = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 0;\n  position: fixed;\n  box-shadow: -4px 0px 7px #ccc;\n\n  ", "\n  background: ", ";\n  height: calc(var(--vh, 1vh) * 100);\n  top: 0px;\n  z-index: 1001;\n  overflow-x: hidden;\n  transition: 0.3s;\n\n  ", "\n  @media print {\n    box-shadow: none;\n  }\n"])), function (_ref) {
  var isDriverOrders = _ref.isDriverOrders;
  return isDriverOrders && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    position: absolute;\n    box-shadow: none;\n\n    ", "\n  "])), function (props) {
    var _props$theme5;
    return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      border-right: 1px solid #CCC;\n    "]))) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      border-left: 1px solid #CCC;\n    "])));
  });
}, function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    right: 0px;\n  "])));
});
exports.Container = Container;
var DescriptionHeader = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"])));
exports.DescriptionHeader = DescriptionHeader;
var HeaderIcons = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  top: 25px;\n  right: 20px;\n\n  > button:first-child {\n    ", "\n  }\n"])), function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "])));
});
exports.HeaderIcons = HeaderIcons;
var SettingListConatiner = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 20px 0;\n  border-bottom: 1px solid #E9ECEF;\n"])));
exports.SettingListConatiner = SettingListConatiner;
var Tab = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  user-select: none;\n  padding: 10px 0px;\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n  white-space: nowrap;\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
}, function (props) {
  var _props$theme8;
  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    border-bottom: 2px solid;\n    font-weight: 500;\n  "])));
}, function (_ref3) {
  var active = _ref3.active;
  return !active && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    color: #909BA9;\n  "])));
});
exports.Tab = Tab;
var Paragraph = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  h2{\n    font-size: 16px;\n  }\n  p{\n    white-space: pre-line;\n    font-size: 12px;\n    margin: 0;\n  }\n  span {\n    font-size: 12px;\n  }\n  a {\n    text-decoration: underline !important;\n    cursor: pointer;\n    font-size: 12px;\n    color: ", " !important;\n  }\n  .bold {\n    font-weight: 600;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.Paragraph = Paragraph;
var PurchaseWrapper = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  button {\n    border-radius: 5px;\n  }\n  margin-top: 15px;\n"])));
exports.PurchaseWrapper = PurchaseWrapper;