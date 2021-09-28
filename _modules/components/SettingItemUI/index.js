"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingItemUI = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingItemUI = function SettingItemUI(props) {
  var isSkeleton = props.isSkeleton,
      active = props.active,
      icon = props.icon,
      title = props.title,
      description = props.description;
  return /*#__PURE__*/_react.default.createElement(_styles.SettingItemContainer, {
    active: !isSkeleton && active
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 24,
    height: 24
  }) : icon), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContent, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null) : /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, title)), isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50
  }) : /*#__PURE__*/_react.default.createElement(_styles.SettingItemDescription, null, description)));
};

exports.SettingItemUI = SettingItemUI;