"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInfoSettingList = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessInfoSettingList = function BusinessInfoSettingList(props) {
  var selectedInfoItem = props.selectedInfoItem,
    handleSelectInfoItem = props.handleSelectInfoItem;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var listOptions = [{
    key: 'information',
    content: t('INFORMATION', 'Information')
  }, {
    key: 'owner',
    content: t('OWNER_ID', 'Owner')
  }, {
    key: 'categories',
    content: t('CATEGORIES', 'Categories')
  }, {
    key: 'location',
    content: t('LOCATION', 'Location')
  }, {
    key: 'images',
    content: t('IMAGES', 'Images')
  }, {
    key: 'videos',
    content: t('VIDEOS', 'Videos')
  }, {
    key: 'seo_options',
    content: t('SEO_OPTIONS', 'SEO Options')
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SettingListConatiner, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, listOptions.map(function (option) {
    return !((user === null || user === void 0 ? void 0 : user.level) === 2 && option.key === 'owner') && /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: option.key,
      active: selectedInfoItem === option.key,
      onClick: function onClick() {
        return handleSelectInfoItem(option.key);
      }
    }, option.content);
  }))));
};
exports.BusinessInfoSettingList = BusinessInfoSettingList;