"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessWidgets = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Select = require("../../../styles/Select");

var _styledComponents = require("styled-components");

var _utils = require("../../../utils");

var _styles = require("./styles");

var _styles2 = require("../../../styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessWidgets = function BusinessWidgets(props) {
  var business = props.business;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)('modal'),
      _useState2 = _slicedToArray(_useState, 2),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  var modalTypes = [{
    value: 'modal',
    content: t('TYPE_MODAL_POPUP', 'Button with modal style')
  }, {
    value: 'chat',
    content: t('TYPE_MODAL_CHAT', 'Chat style integration')
  }];
  var url = "".concat(_utils.widgetURL).concat(business === null || business === void 0 ? void 0 : business.slug);
  var color = theme.colors.primary;
  var widgetPopup = '<script type="text/javascript">window.onload=function(){function e(e,t){return!0===e||!1===e?e:t}function t(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}"undefined"==typeof orderingSettings&&(orderingSettings={});var i=orderingSettings,o=e(i.openOnMobile,!1),n=e(i.openOnDesktop,!1),s=!1,l=document.createElement("div");l.id="ordering_bot",l.style.height=0,l.style.width=0,l.style.position="fixed",l.style.right="20%",l.style.left="20%",l.style.top="7%",l.style.bottom="7%",l.style.borderRadius="5px",l.style.overflow="hidden",l.style.zIndex=99999,l.style.maxheight=window.innerHeight+"px",l.style["-webkit-transition"]="height 0.5s, width 0.5s",l.style["-moz-transition"]="height 0.5s, width 0.5s",l.style["-ms-transition"]="height 0.5s, width 0.5s",l.style["-o-transition"]="height 0.5s, width 0.5s",l.style.transition="height 0.5s, width 0.5s",l.style["-webkit-overflow-scrolling"]="touch",l.style["overflow-y"]="scroll",l.style.boxShadow="0 0 20px 0 #999";var r={insideIframe:!1};document.addEventListener("scroll",function(e){r.insideIframe&&(e.preventDefault(),window.scrollTo(0,0))});var d=document.createElement("div");d.style.height="40px",d.style.background="#ccc",d.style.width="100%",d.style.position="absolute";var a=document.createElement("div");a.style.height="40px",a.style.width="40px",a.style.float="right",a.style.fontSize="28px",a.style.lineHeight="25px",a.style.padding="5px",a.style.textAlign="center",a.style.boxSizing="border-box",a.style.color="#666",a.style.borderLeft="1px solid #bbb",a.style.cursor="pointer",a.innerHTML="&times;",d.appendChild(a);var h=document.createElement("iframe");function y(){s?(l.style.height="auto",l.style.width="auto",window.innerWidth<=480?(l.style.right=0,l.style.left=0,l.style.top=0,l.style.bottom=0,l.style.borderRadius=0):(window.innerWidth>480&&window.innerWidth<600?(l.style.left="10%",l.style.right="10%"):(l.style.left="20%",l.style.right="20%"),l.style.top="7%",l.style.bottom="7%",l.style.borderRadius="5px")):(l.style.height="0px",l.style.width="0px")}h.id="ordering_iframe",h.src="' + url + '",h.style.border=0,h.style.height="100%",h.style.width="100%",h.style.maxWidth="none",h.style.paddingTop="40px",h.style.boxSizing="border-box",h.style["-webkit-overflow-scrolling"]="touch",l.appendChild(d),l.appendChild(h),document.getElementsByTagName("body")[0].appendChild(l),window.toggleOrderingWidget=function(){(s=!s)?(t()&&(r.insideIframe=!0,document.body.style.overflow="hidden",document.body.style.height=window.innerHeight-150+"px"),r.insideIframe=!0,r.scrollX=window.scrollX,r.scrollY=window.scrollY,t()||(document.body.style.overflow="hidden")):(t()&&(r.insideIframe=!1,document.body.style.overflow="auto",document.body.style.height="auto"),r.insideIframe=!1,t()||(document.body.style.overflow="auto")),y()},y(),window.onresize=y,(t()&&o&&!(navigator.userAgent.match(/iPad/i)||(navigator.userAgent.match(/iPhone/i)||void 0))||!t()&&n)&&toggleOrderingWidget(),a.addEventListener("click",toggleOrderingWidget)};</script>';
  var widgetBot = '<script type="text/javascript">window.onload=function(){function e(e,t){return e===!0||e===!1||void 0!=e||null!=e?e:t}function t(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?!0:!1}function n(){return navigator.userAgent.match(/iPad/i)?"iPad":navigator.userAgent.match(/iPhone/i)?"iPhone":void 0}function i(){h=!h,h?(t()&&(w.insideIframe=!0,document.body.style.overflow="hidden",document.body.style.height=window.innerHeight-150+"px"),g.innerHTML=p.outerHTML):(t()&&(w.insideIframe=!1,document.body.style.overflow="auto",document.body.style.height="auto"),g.innerHTML=c.outerHTML),o(m)}function o(e){e.style.height=s(),e.style.width=r(),window.innerWidth<=480&&(e.style.top=0,e.style.left=0,e.style.right=0,e.style.bottom=0)}function s(){if(h){if(window.innerWidth<=480)return"100%";var e=window.innerHeight-70-10-20;return (e>570&&y.type=="chat")?"570px":e+"px"}return"0px"}function r(){return h?window.innerWidth<=480?"100%":"chat"==y.type?"370px":window.innerWidth-40+"px":"0px"}function l(){console.log("onresize"),window.innerWidth<=480?(m.style.position="fixed",m.style.bottom=0,m.style.right=0,m.style.borderRadius=0,f.style.display="block"):(m.style.position="fixed",m.style.bottom="80px",m.style.right="20px",m.style.borderRadius="10px",f.style.display="none"),m.style.height=s(),m.style.width=r()}var d="' + url + '";"undefined"==typeof orderingSettings&&(orderingSettings={});var a=orderingSettings,y={openOnMobile:e(a.openOnMobile,!1),openOnDesktop:e(a.openOnDesktop,!1),type:e(a.type,"chat")},h=!1,g=document.createElement("div"),c=document.createElement("img");c.src=d.split("/")[0]+"//"+d.split("/")[2]+"/templates/web/img/icon.png",c.style.width="30px",c.style.marginTop="9px",c.style.maxWidth="none";var p=document.createElement("div");p.innerHTML="&times;",p.style.display="block",p.style.color="#fff",p.style.font="Arial",p.style.fontSize="30px",p.style.margin="0 5px",p.style.borderRadius="50px",p.style.width="40px",p.style.height="40px",p.style.lineHeight="47px",p.style.fontWeight="400",g.style.position="fixed",g.style.bottom="20px",g.style.right="20px",g.style.width="50px",g.style.height="50px",g.style.background="' + color + '",g.style.borderRadius="50px",g.style.textAlign="center",g.style.cursor="pointer",g.style.outline="none",g.style.border=0,g.style.zIndex=99999,g.appendChild(c);var m=document.createElement("div");m.id="ordering_bot",m.style.height=0,m.style.width=0,m.style.position="fixed",m.style.bottom="80px",m.style.right="20px",m.style.borderRadius="10px",m.style.overflow="hidden",m.style.zIndex=99999,m.style.maxheight=window.innerHeight+"px",m.style["-webkit-transition"]="height 0.5s, width 0.5s",m.style["-moz-transition"]="height 0.5s, width 0.5s",m.style["-ms-transition"]="height 0.5s, width 0.5s",m.style["-o-transition"]="height 0.5s, width 0.5s",m.style.transition="height 0.5s, width 0.5s";var u=document.createElement("iframe");u.id="ordering_bot_iframe",u.src=d,u.setAttribute("allow", "geolocation"),u.style.border=0,u.style.height="125%",u.style.width="125%",u.style.maxWidth="none",u.style["-ms-zoom"]="0.8",u.style["-moz-transform"]="scale(0.8)",u.style["-moz-transform-origin"]="0 0",u.style["-o-transform"]="scale(0.8)",u.style["-o-transform-origin"]="0 0",u.style["-webkit-transform"]="scale(0.8)",u.style["-webkit-transform-origin"]="0 0";var w={insideIframe:!1};m.addEventListener("mouseenter",function(){w.insideIframe=!0,w.scrollX=window.scrollX,w.scrollY=window.scrollY,t()||(document.body.style.overflow="hidden")}),m.addEventListener("mouseleave",function(){w.insideIframe=!1,t()||(document.body.style.overflow="auto")}),document.addEventListener("scroll",function(e){w.insideIframe&&(e.preventDefault(),window.scrollTo(0,0))});var f=document.createElement("div");f.style.position="absolute",f.style.width="35px",f.style.height="35px",f.style.bottom="45px",f.style.left="50%",f.style.lineHeight="36px",f.style.background="transparent",f.style.borderColor="transparent";var x=document.createElement("div");x.innerHTML="&times;",x.style.position="relative",x.style.left="-50%",x.style.zIndex="999",x.style.width="40px",x.style.height="40px",x.style.background="rgba(0,0,0,0.2)",x.style.textAlign="center",x.style.border=0,x.style.borderRadius="35px",x.style.color="#fff",x.style.fontSize="30px",x.style.outline="none",x.style.cursor="pointer",f.appendChild(x),m.appendChild(f),m.appendChild(u),document.getElementsByTagName("body")[0].appendChild(g),document.getElementsByTagName("body")[0].appendChild(m),window.toggleOrderingWidget=i,g.onclick=i,f.onclick=i,l(),window.onresize=l,(t()&&y.openOnMobile&&!n()||!t()&&y.openOnDesktop)&&i(),setInterval(function(){n()&&window.innerHeight<m.clientHeight&&(u.style.height=.7*window.innerHeight+"px"),n()&&window.innerHeight==m.clientHeight&&(m.style.bottom=0,u.style.height="125%")},2e3)};</script>';
  var widgetInline = '<script type="text/javascript">var orderingInlineSettings = {baseUrl: "/"};</script><script type="text/javascript">window.onload=function(){var i={baseUrl:orderingInlineSettings&&orderingInlineSettings.baseUrl?orderingInlineSettings.baseUrl:"/inline/"},l=location.href.split(i.baseUrl)[0],e=location.href.split(i.baseUrl)[1],a="' + url + '",r=document.createElement("iframe");r.id="ordering_iframe",r.src=(a+"/"+e).replace(/([^:]\\/)\\/+/g,"$1"),r.style.border=0,r.style.height="100%",r.style.width="100%",r.style.maxWidth="none",r.allow="geolocation";var d=document.getElementById("ordering_iframe_inline");d.appendChild(r),r.addEventListener("load",function(){t(),setInterval(function(){var e=JSON.stringify({event:"body",data:{}});r.contentWindow.postMessage(e,a)},100)});function t(){var e=document.documentElement,t=window.innerwidth||e.clientWidth,n=window.innerHeight||e.clientHeight,o=(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0),i=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),l=JSON.stringify({event:"scroll",data:{top:i,left:o,width:t,height:n,offsetTop:s(r).top}});r.contentWindow.postMessage(l,a)}function s(e){for(var t=0,n=0;t+=e.offsetTop||0,n+=e.offsetLeft||0,e=e.offsetParent;);return{top:t,left:n}}window.addEventListener("message",function(e){var t=e.data;if("body"==t.event)d.style.height=t.data.height+"px";else if("scroll"==t.event)t.data.enable?document.getElementsByTagName("body")[0].style.overflowY="auto":document.getElementsByTagName("body")[0].style.overflowY="hidden";else if("url"==t.event){var n=document.createElement("a");n.href=t.data;var o=((l?l+"/":"")+i.baseUrl+"/"+n.pathname).replace(/([^:]\\/)\\/+/g,"$1");window.history.pushState("","",o),"http://localhost/"!=t.data&&window.scrollTo(0,s(r).top)}},!1),window.onscroll=function(e){t()}};</script><div style="height: 1000px;" id="ordering_iframe_inline"></div>';
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.PopupContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('INTEGRATION_WEBSITE', 'Integration on your website'), ": ", t('POPUP', 'Popup')), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE_MODAL', 'Modal style')), /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    isSecondIcon: true,
    notAsync: true,
    placeholder: t('SELECT_TYPE', 'Select Type'),
    defaultValue: selectedType,
    options: modalTypes,
    onChange: function onChange(val) {
      return setSelectedType(val);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, "1* ", t('INSERT_ON_DIV_DISPLAY', 'Insert in the div where you want to display it.')), /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    placeholder: t('CODE', 'Code'),
    defaultValue: "<button onclick=\"toggleOrderingWidget()\">".concat(t('Online_Ordering', 'Online Ordering'), "</button>"),
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, "2* ", t('INSERT_ON_END_BODY', 'Insert at the end of the body tag'), " (", t('IF_USED_PAYPALEXPRESS', 'Use only if Paypal Express is used'), ")"), /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    placeholder: t('CODE', 'Code'),
    defaultValue: "<script src=\"https://www.paypalobjects.com/api/checkout.js\"></script>",
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, "3* ", t('INSERT_ON_END_BODY', 'Insert at the end of the body tag')), /*#__PURE__*/_react.default.createElement(_styles2.TextArea, {
    placeholder: t('CODE', 'Code'),
    value: selectedType === 'modal' ? widgetPopup : widgetBot,
    disabled: true
  }))), /*#__PURE__*/_react.default.createElement(_styles.InlineContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('INTEGRATION_WEBSITE', 'Integration on your website'), ": ", t('INLINE', 'Inline')), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, "1* ", t('INSERT_ON_END_BODY', 'Insert at the end of the body tag'), " (", t('IF_USED_PAYPALEXPRESS', 'Use only if Paypal Express is used'), ")"), /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    placeholder: t('CODE', 'Code'),
    defaultValue: "<script src=\"https://www.paypalobjects.com/api/checkout.js\"></script>",
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, "2* ", t('INSERT_ON_DIV_DISPLAY', 'Insert in the div where you want to display it.')), /*#__PURE__*/_react.default.createElement(_styles2.TextArea, {
    placeholder: t('CODE', 'Code'),
    defaultValue: widgetInline,
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, "3* .htaccess"), /*#__PURE__*/_react.default.createElement(_styles2.TextArea, {
    placeholder: t('CODE', 'Code'),
    defaultValue: "RewriteEngine On\r RewriteRule ^inline/(.+)$ /inline/ [NC,L] #where inline is the folder",
    disabled: true
  }))), /*#__PURE__*/_react.default.createElement(_styles.GuideLink, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return window.open('https://support.ordering.co/hc/en-us/articles/360043529971-Widget-Integration', '_blank');
    }
  }, t('LEARN_HOW_TO_DO_IT', 'Learn how to do it'))));
};

exports.BusinessWidgets = BusinessWidgets;