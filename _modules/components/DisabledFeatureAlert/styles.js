"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.MoreInfo = exports.DisabledFeatureAlertContainer = exports.CommentContainer = exports.Comment = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DisabledFeatureAlertContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  min-width: 325px;\n  padding: 7px;\n  z-index: 1000;\n  top: 50px;\n  left: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  background-color: ", ";\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n"])), function (props) {
  return props !== null && props !== void 0 && props.containerWidth ? "calc(50vw - ".concat((props === null || props === void 0 ? void 0 : props.containerWidth) / 2, "px)") : '50vw';
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.lightPrimary;
});

exports.DisabledFeatureAlertContainer = DisabledFeatureAlertContainer;

var Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n"])));

exports.Wrapper = Wrapper;

var CommentContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-left: 7px;\n  margin-right: 7px;\n"])));

exports.CommentContainer = CommentContainer;

var Comment = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 12px;\n"])));

exports.Comment = Comment;

var MoreInfo = _styledComponents.default.a(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.MoreInfo = MoreInfo;