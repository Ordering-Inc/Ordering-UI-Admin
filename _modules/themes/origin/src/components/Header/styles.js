"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendFeedback = exports.RightHeader = exports.OverViewControlButton = exports.LogoHeader = exports.LeftHeader = exports.InnerHeader = exports.HeaderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0px;\n  z-index: 1000;\n  background: ", ";\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  box-shadow: 0px 2px 2px #00000029;\n\n  @media print {\n    display: none;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});

exports.HeaderContainer = HeaderContainer;

var InnerHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  color: #151824;\n  justify-content: space-between;\n  width: 98%;\n  margin: 10px auto;\n"])));

exports.InnerHeader = InnerHeader;

var LogoHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  img {\n    width: 150px;\n    height: 45px;\n    margin: 0;\n    vertical-align: middle;\n\n    @media (max-width: 768px) {\n      width: 150px;\n    }\n\n    @media (max-width: 576px) {\n      width: 55px;\n    }\n  }\n\n  img:nth-child(2) {\n    display: none;\n  }\n\n  @media (max-width: 576px) {\n    img:nth-child(1) {\n      display: none;\n    }\n    img:nth-child(2) {\n      display: block;\n    }\n  }\n"])));

exports.LogoHeader = LogoHeader;

var LeftHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n"])));

exports.RightHeader = RightHeader;

var OverViewControlButton = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 100%;\n  border: none;\n  outline: none;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  \n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: #333;\n  }\n\n  @media (min-width: 1400px) {\n    display: none;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.OverViewControlButton = OverViewControlButton;

var SendFeedback = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([""])));

exports.SendFeedback = SendFeedback;