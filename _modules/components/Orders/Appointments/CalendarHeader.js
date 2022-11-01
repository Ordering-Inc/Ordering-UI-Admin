"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _constants = require("react-big-calendar/lib/utils/constants");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _MdcViewWeekOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcViewWeekOutline"));
var _MdcViewWeek = _interopRequireDefault(require("@meronex/icons/mdc/MdcViewWeek"));
var _MdcViewAgendaOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcViewAgendaOutline"));
var _MdcViewDayOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcViewDayOutline"));
var _reactBootstrap = require("react-bootstrap");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CalendarHeader = function CalendarHeader(props) {
  var label = props.label,
    view = props.view,
    views = props.views,
    onView = props.onView,
    onNavigate = props.onNavigate;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var viewsList = {
    month: {
      title: t('MONTH', 'Month'),
      icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Grid3x2, null)
    },
    week: {
      title: t('WEEK', 'Week'),
      icon: /*#__PURE__*/_react.default.createElement(_MdcViewWeekOutline.default, null)
    },
    work_week: {
      title: t('WORK_WEEK', 'Work week'),
      icon: /*#__PURE__*/_react.default.createElement(_MdcViewWeek.default, null)
    },
    day: {
      title: t('DAY', 'Day'),
      icon: /*#__PURE__*/_react.default.createElement(_MdcViewDayOutline.default, null)
    },
    agenda: {
      title: t('AGENDA', 'Agenda'),
      icon: /*#__PURE__*/_react.default.createElement(_MdcViewAgendaOutline.default, null)
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.CalendarHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CalendarLabelContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onNavigate(_constants.navigate.PREVIOUS);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronLeft, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "label"
  }, label), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onNavigate(_constants.navigate.NEXT);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))), /*#__PURE__*/_react.default.createElement(_styles2.ViewButtonsWrapper, null, views.map(function (name, i) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      key: i,
      placement: "bottom",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, viewsList[name].title)
    }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: view === name ? 'primary' : 'black',
      onClick: function onClick() {
        return onView(name);
      }
    }, viewsList[name].icon));
  })));
};
exports.CalendarHeader = CalendarHeader;