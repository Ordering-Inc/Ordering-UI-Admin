"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportersListingUI = exports.ImportersListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _ImportersList = require("../ImportersList");
var _ImporterForm = require("../ImporterForm");
var _ImporterJobForm = require("../ImporterJobForm");
var _ImporterHelpContent = require("../ImporterHelpContent");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ImportersListingUI = exports.ImportersListingUI = function ImportersListingUI(props) {
  var importerList = props.importerList,
    paginationDetail = props.paginationDetail,
    handleDeleteImporter = props.handleDeleteImporter,
    setExtraOpen = props.setExtraOpen,
    handleSuccessAddImporter = props.handleSuccessAddImporter,
    handleSuccessUpdateImporter = props.handleSuccessUpdateImporter;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openNewImporter = _useState2[0],
    setOpenNewImporter = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openImporterHelp = _useState4[0],
    setOpenImporterHelp = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openImportCsv = _useState6[0],
    setOpenImportCsv = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedImporter = _useState8[0],
    setSelectedImporter = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedImporterJob = _useState10[0],
    setSelectedImporterJob = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    importJobFormMoveDistance = _useState12[0],
    setImportJobFormMoveDistance = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    openMappingDetails = _useState14[0],
    setOpenMappingDetails = _useState14[1];
  var addNewImporter = function addNewImporter() {
    setSelectedImporter({});
    setOpenImportCsv(false);
    setOpenNewImporter(true);
    setExtraOpen(true);
  };
  var createImporterJob = function createImporterJob(importer) {
    setSelectedImporterJob(importer);
    setExtraOpen(false);
    setOpenImportCsv(true);
    setOpenNewImporter(false);
  };
  var handleEditImporter = function handleEditImporter(importer) {
    if (Object.keys(importer).length > 0) {
      setSelectedImporter(importer);
      setOpenNewImporter(true);
    }
  };
  (0, _react.useEffect)(function () {
    setExtraOpen && setExtraOpen(openNewImporter);
  }, [openNewImporter]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ImportersListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleContent, null, t('IMPORTERS', 'Importers')), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary",
    onClick: function onClick() {
      return setOpenImporterHelp(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null))), /*#__PURE__*/_react.default.createElement(_styles2.ActionButtons, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "5px",
    onClick: function onClick() {
      return addNewImporter();
    }
  }, t('ADD_IMPORTER', 'Add importer')))), /*#__PURE__*/_react.default.createElement(_ImportersList.ImportersList, {
    importerList: importerList,
    paginationDetail: paginationDetail,
    createImporterJob: createImporterJob,
    addNewImporter: addNewImporter,
    handleDeleteImporter: handleDeleteImporter,
    selectedImporter: selectedImporter,
    setSelectedImporter: setSelectedImporter,
    handleEditImporter: handleEditImporter
  }), openNewImporter && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: !openMappingDetails,
    open: openNewImporter,
    defaultSideBarWidth: openMappingDetails ? 1000 : 500,
    moveDistance: openMappingDetails ? 500 : 0,
    onClose: function onClose() {
      setOpenMappingDetails(false);
      setSelectedImporter({});
      setOpenNewImporter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ImporterForm.ImporterForm, {
    openNewImporter: openNewImporter,
    selectedImporter: selectedImporter,
    handleSuccessAdd: handleSuccessAddImporter,
    handleSuccessUpdateImporter: handleSuccessUpdateImporter,
    openMappingDetails: openMappingDetails,
    setOpenMappingDetails: setOpenMappingDetails,
    onClose: function onClose() {
      setSelectedImporter({});
      setOpenMappingDetails(false);
      setOpenNewImporter(false);
    }
  }))), openImportCsv && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openImportCsv,
    onClose: function onClose() {
      setOpenImportCsv(false);
      setImportJobFormMoveDistance(0);
    },
    defaultSideBarWidth: 500 + importJobFormMoveDistance,
    moveDistance: importJobFormMoveDistance
  }, /*#__PURE__*/_react.default.createElement(_ImporterJobForm.ImporterJobForm, {
    selectedImporter: selectedImporterJob,
    handleOpenChildForm: function handleOpenChildForm() {
      return setImportJobFormMoveDistance(500);
    },
    handleCloseChildForm: function handleCloseChildForm() {
      return setImportJobFormMoveDistance(0);
    },
    openMappingDetails: openMappingDetails,
    setOpenMappingDetails: setOpenMappingDetails,
    handleSuccessUpdateImporter: handleSuccessUpdateImporter,
    onClose: function onClose() {
      setOpenImportCsv(false);
      setImportJobFormMoveDistance(0);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: "",
    open: openImporterHelp,
    onClose: function onClose() {
      return setOpenImporterHelp(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ImporterHelpContent.ImporterHelpContent, null)));
};
var ImportersListing = exports.ImportersListing = function ImportersListing(props) {
  var importersListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ImportersListingUI,
    asDashboard: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ImporterListing, importersListingProps);
};