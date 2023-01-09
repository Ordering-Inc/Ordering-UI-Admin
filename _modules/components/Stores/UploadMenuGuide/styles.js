"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadIconBox = exports.PdfIconBox = exports.Or = exports.FormControl = exports.FileUploadBox = exports.Container = exports.ButtonGroup = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 36px;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 8px;\n  }\n  > p {\n    width: 100%;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 18px;\n    text-align: center;\n    margin: 0 auto;\n  }\n\n  @media (min-width: 768px) {\n    > p {\n      width: 80%;\n    }\n  }\n"])));
exports.Container = Container;
var FileUploadBox = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 210px;\n  margin-top: 35px;\n  border-radius: 8px;\n  background-color: ", ";\n  position: relative;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  img, div {\n    width: 100%;\n    overflow: hidden;\n    height: 100%;\n  }\n  img {\n    object-fit: contain;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.FileUploadBox = FileUploadBox;
var UploadIconBox = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  > div {\n    color: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    svg {\n      width: 43px;\n      font-size: 40px;\n    }\n    p {\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 18px;\n      margin-bottom: 0;\n      margin-top: 8px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
});
exports.UploadIconBox = UploadIconBox;
var Or = _styledComponents.default.h6(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  margin: 27px 0;\n"])));
exports.Or = Or;
var FormControl = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 13px;\n  }\n  input {\n    width: 100%;\n    border-radius: 8px;\n    height: 44px;\n  }\n"])));
exports.FormControl = FormControl;
var ButtonGroup = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 30px;\n  > button {\n    width: 100%;\n    margin-top: 15px;\n    height: 44px;\n    border-radius: 8px;\n  }\n\n  @media (min-width: 576px) {\n    justify-content: space-between;\n    flex-direction: row;\n    > button {\n      width: 48%;\n    }\n  }\n"])));
exports.ButtonGroup = ButtonGroup;
var PdfIconBox = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    font-size: 150px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.danger;
});
exports.PdfIconBox = PdfIconBox;