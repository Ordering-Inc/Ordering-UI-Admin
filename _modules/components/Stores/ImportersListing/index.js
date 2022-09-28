"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var _DisabledFeatureAlert = require("../../DisabledFeatureAlert");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ImportersListingUI = function ImportersListingUI(props) {
  var importerList = props.importerList,
      paginationDetail = props.paginationDetail,
      handleDeleteImporter = props.handleDeleteImporter,
      setExtraOpen = props.setExtraOpen,
      handleSuccessAddImporter = props.handleSuccessAddImporter,
      handleSuccessUpdateImporter = props.handleSuccessUpdateImporter;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var featureName = 'massive_importer';

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

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isDisabledFeature = _useState16[0],
      setIsDisabledFeature = _useState16[1];

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
  (0, _react.useEffect)(function () {
    if (configs && Object.keys(configs).length > 0 && user) {
      if (!Object.keys(configs).includes(featureName) && (user === null || user === void 0 ? void 0 : user.level) === 0) {
        setIsDisabledFeature(true);
      }
    }
  }, [configs]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ImportersListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, /*#__PURE__*/_react.default.createElement(_styles2.TitleContent, null, t('IMPORTERS', 'Importers')), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary",
    onClick: function onClick() {
      return setOpenImporterHelp(true);
    },
    disabled: isDisabledFeature
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null))), /*#__PURE__*/_react.default.createElement(_styles2.ActionButtons, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "5px",
    onClick: function onClick() {
      return addNewImporter();
    },
    disabled: isDisabledFeature
  }, t('ADD_IMPORTER', 'Add importer')))), /*#__PURE__*/_react.default.createElement(_ImportersList.ImportersList, {
    importerList: importerList,
    paginationDetail: paginationDetail,
    createImporterJob: createImporterJob,
    addNewImporter: addNewImporter,
    handleDeleteImporter: handleDeleteImporter,
    selectedImporter: selectedImporter,
    setSelectedImporter: setSelectedImporter,
    handleEditImporter: handleEditImporter,
    isDisabledFeature: isDisabledFeature
  }), isDisabledFeature && /*#__PURE__*/_react.default.createElement(_DisabledFeatureAlert.DisabledFeatureAlert, null), openNewImporter && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
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

exports.ImportersListingUI = ImportersListingUI;

var ImportersListing = function ImportersListing(props) {
  var importersListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ImportersListingUI,
    asDashboard: true
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ImporterListing, importersListingProps);
};

exports.ImportersListing = ImportersListing;