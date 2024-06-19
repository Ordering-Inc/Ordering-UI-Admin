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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CalendarHeader = exports.CalendarHeader = function CalendarHeader(props) {
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