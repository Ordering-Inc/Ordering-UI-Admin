"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportersListingUI = exports.ImportersListing = exports.ImportIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../../styles");

var _ImportersList = require("../ImportersList");

var _ImporterForm = require("../ImporterForm");

var _ImporterJobForm = require("../ImporterJobForm");

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
      getImporters = props.getImporters,
      paginationDetail = props.paginationDetail,
      paginationProps = props.paginationProps,
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
      openImportCsv = _useState4[0],
      setOpenImportCsv = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedImporter = _useState6[0],
      setSelectedImporter = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedImporterJob = _useState8[0],
      setSelectedImporterJob = _useState8[1];

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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ImportersListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('IMPORT', 'Import')), /*#__PURE__*/_react.default.createElement(_styles2.ActionButtons, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "5px",
    onClick: function onClick() {
      return addNewImporter();
    }
  }, t('ADD_IMPORTER', 'Add importer')))), /*#__PURE__*/_react.default.createElement(_ImportersList.ImportersList, {
    importerList: importerList,
    getImporters: getImporters,
    paginationProps: paginationProps,
    paginationDetail: paginationDetail,
    createImporterJob: createImporterJob,
    addNewImporter: addNewImporter,
    handleDeleteImporter: handleDeleteImporter,
    handleEditImporter: handleEditImporter
  }), openNewImporter && /*#__PURE__*/_react.default.createElement(_styles2.NewImporterWrapper, null, /*#__PURE__*/_react.default.createElement(_ImporterForm.ImporterForm, {
    openNewImporter: openNewImporter,
    selectedImporter: selectedImporter,
    onClose: function onClose() {
      return setOpenNewImporter(false);
    },
    handleSuccessAdd: handleSuccessAddImporter,
    handleSuccessUpdateImporter: handleSuccessUpdateImporter
  }))), openImportCsv && /*#__PURE__*/_react.default.createElement(_styles2.ImportCSVForm, null, /*#__PURE__*/_react.default.createElement(_ImporterJobForm.ImporterJobForm, {
    onClose: function onClose() {
      return setOpenImportCsv(false);
    },
    selectedImporter: selectedImporterJob
  })));
};

exports.ImportersListingUI = ImportersListingUI;

var ImportIcon = function ImportIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0.5 9.89999C0.632608 9.89999 0.759785 9.95267 0.853553 10.0464C0.947322 10.1402 1 10.2674 1 10.4V12.9C1 13.1652 1.10536 13.4196 1.29289 13.6071C1.48043 13.7946 1.73478 13.9 2 13.9H14C14.2652 13.9 14.5196 13.7946 14.7071 13.6071C14.8946 13.4196 15 13.1652 15 12.9V10.4C15 10.2674 15.0527 10.1402 15.1464 10.0464C15.2402 9.95267 15.3674 9.89999 15.5 9.89999C15.6326 9.89999 15.7598 9.95267 15.8536 10.0464C15.9473 10.1402 16 10.2674 16 10.4V12.9C16 13.4304 15.7893 13.9391 15.4142 14.3142C15.0391 14.6893 14.5304 14.9 14 14.9H2C1.46957 14.9 0.960859 14.6893 0.585786 14.3142C0.210714 13.9391 0 13.4304 0 12.9V10.4C0 10.2674 0.0526784 10.1402 0.146447 10.0464C0.240215 9.95267 0.367392 9.89999 0.5 9.89999Z",
    fill: "#748194"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.64599 1.14601C7.69244 1.09945 7.74761 1.0625 7.80836 1.0373C7.8691 1.01209 7.93422 0.999115 7.99999 0.999115C8.06576 0.999115 8.13088 1.01209 8.19162 1.0373C8.25237 1.0625 8.30755 1.09945 8.35399 1.14601L11.354 4.14601C11.4479 4.2399 11.5006 4.36723 11.5006 4.50001C11.5006 4.63278 11.4479 4.76012 11.354 4.85401C11.2601 4.9479 11.1328 5.00064 11 5.00064C10.8672 5.00064 10.7399 4.9479 10.646 4.85401L8.49999 2.70701V11.5C8.49999 11.6326 8.44731 11.7598 8.35354 11.8536C8.25978 11.9473 8.1326 12 7.99999 12C7.86738 12 7.74021 11.9473 7.64644 11.8536C7.55267 11.7598 7.49999 11.6326 7.49999 11.5V2.70701L5.35399 4.85401C5.3075 4.9005 5.25231 4.93737 5.19157 4.96253C5.13084 4.98769 5.06573 5.00064 4.99999 5.00064C4.93425 5.00064 4.86915 4.98769 4.80841 4.96253C4.74767 4.93737 4.69248 4.9005 4.64599 4.85401C4.5995 4.80752 4.56263 4.75233 4.53747 4.69159C4.51231 4.63085 4.49936 4.56575 4.49936 4.50001C4.49936 4.43426 4.51231 4.36916 4.53747 4.30843C4.56263 4.24769 4.5995 4.1925 4.64599 4.14601L7.64599 1.14601Z",
    fill: "#748194"
  }));
};

exports.ImportIcon = ImportIcon;

var ImportersListing = function ImportersListing(props) {
  var importersListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ImportersListingUI,
    asDashboard: true
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ImporterListing, importersListingProps);
};

exports.ImportersListing = ImportersListing;