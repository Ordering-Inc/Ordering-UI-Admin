"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetailsMenu = void 0;

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

var UserDetailsMenu = function UserDetailsMenu(props) {
  var currentMenuSelected = props.currentMenuSelected,
      handleChangeMenu = props.handleChangeMenu,
      isDriverMenu = props.isDriverMenu;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var menuItems = isDriverMenu ? [{
    key: 'profile',
    content: t('PROFILE', 'Profile')
  }, {
    key: 'driver_group',
    content: t('DRIVER_GROUP', 'Driver group')
  }, {
    key: 'saved_places',
    content: t('SAVED_PLACES', 'Saved places')
  }, {
    key: 'metafields',
    content: t('METAFIELDS', 'Metafields')
  }, {
    key: 'personalization',
    content: t('PERSONALIZATION', 'Personalization')
  }] : [{
    key: 'profile',
    content: t('PROFILE', 'Profile')
  }, {
    key: 'saved_places',
    content: t('SAVED_PLACES', 'Saved places')
  }, {
    key: 'metafields',
    content: t('METAFIELDS', 'Metafields')
  }, {
    key: 'personalization',
    content: t('PERSONALIZATION', 'Personalization')
  }];
  return /*#__PURE__*/_react.default.createElement(_styles.UserDetailsMenuContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, menuItems.map(function (menu) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: menu.key,
      active: menu.key === currentMenuSelected,
      onClick: function onClick() {
        return handleChangeMenu(menu.key);
      }
    }, menu.content);
  })));
};

exports.UserDetailsMenu = UserDetailsMenu;