!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["sidebar-menu-fvg"]=t(require("react")):e["sidebar-menu-fvg"]=t(e.react)}(self,(e=>(()=>{var t={155:t=>{"use strict";t.exports=e},556:(e,t,r)=>{e.exports=r(694)()},694:(e,t,r)=>{"use strict";var n=r(925);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.r(i),n.d(i,{default:()=>J});var e=n(155),t=n.n(e),r=n(556),o=n.n(r),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=e.createContext&&e.createContext(a),l=["attr","size","title"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){var n,i,o,a;n=e,i=t,o=r[t],(i="symbol"==typeof(a=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i))?a:a+"")in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(t){return t&&t.map(((t,r)=>e.createElement(t.tag,p({key:r},t.attr),f(t.child))))}function d(t){return r=>e.createElement(m,s({attr:p({},t.attr)},r),f(t.child))}function m(t){var r=r=>{var n,{attr:i,size:o,title:a}=t,c=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(t,l),u=o||r.size||"1em";return r.className&&(n=r.className),t.className&&(n=(n?n+" ":"")+t.className),e.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,c,{className:n,style:p(p({color:t.color||r.color},r.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&e.createElement("title",null,a),t.children)};return void 0!==c?e.createElement(c.Consumer,null,(e=>r(e))):r(a)}function y(e){return d({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function b(e){return d({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function v(e){return d({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}function g(e){return d({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const h=function(){var e=["admin","user"];return function(t){return t.some((function(t){return e.includes(t)}))}};function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return(t=function(e){var t=function(e){if("object"!=O(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==O(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){var r=e.children,n=e.href,i=e.isOpenMenu,o=e.hasPermission,a=e.isSubmenu,c=void 0!==a&&a,l=e.onClick,s=(0,e.isActive)(n,c),u=j(j({},C.styledLink),{},{color:s?"#5A2DB2":c?"#000":"#242433",justifyContent:i?"space-between":"",backgroundColor:s?"#EAE5FF":"",opacity:o?1:.5,marginLeft:c?"2.3rem":"",paddingRight:c?"17px":"",pointerEvents:R(o)});return t().createElement("a",{href:n,onClick:function(e){e.preventDefault(),e.stopPropagation(),l(n)},style:u,"data-id":n+"-link",onMouseEnter:function(e){s||(e.currentTarget.style.backgroundColor=C.styledLinkHover.backgroundColor,e.currentTarget.style.fontWeight=C.styledLinkHover.fontWeight,e.currentTarget.style.height=C.styledLinkHover.height)},onMouseLeave:function(e){s||(e.currentTarget.style.backgroundColor="",e.currentTarget.style.fontWeight="",e.currentTarget.style.height="")}},r)}x.propTypes={children:o().node.isRequired,href:o().string.isRequired,isOpenMenu:o().bool.isRequired,hasPermission:o().bool.isRequired,isSubmenu:o().bool,onClick:o().func.isRequired,isActive:o().func.isRequired};const M=x;function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return(t=function(e){var t=function(e){if("object"!=P(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==P(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C={styledLink:{fontFamily:"Roboto",fontSize:"14px",fontWeight:"400",textDecoration:"none",borderRadius:"8px",padding:"0.8rem 1rem",height:"45px",display:"flex",alignItems:"center",cursor:"pointer"},styledLinkHover:{backgroundColor:"#F0F0FA",fontWeight:"500",height:"45px"},collapsedDiv:{fontFamily:"Roboto",fontSize:"14px",textDecoration:"none",borderRadius:"8px",display:"flex",cursor:"pointer",height:"45px"},collapsedDivHover:{backgroundColor:"#F0F0FA",height:"45px"},styledUl:{listStyle:"none",margin:"0px",padding:"0px"},wrapper:{position:"relative",backgroundColor:"#FAFAFF"},arrowWrapper:{width:"100%",display:"flex",justifyContent:"end"},subMenuMainTitle:{marginLeft:"0.5rem",whiteSpace:"nowrap"},subMenuMainTitleHover:{fontWeight:"500"},sidebar:{height:"100vh",transition:"width 200ms",paddingTop:"16px",paddingBottom:"0px",paddingLeft:"10px",paddingRight:"10px",position:"sticky",top:"0"},sidebarLogo:{cursor:"pointer"},sidebarTop:{width:"max-content",display:"flex",alignItems:"center",gap:"0.5rem",paddingBottom:"1rem",marginLeft:"1rem",height:"40px"},logoName:{color:"#65657E",fontSize:"14px",lineHeight:"3",fontFamily:"Roboto",fontWeight:"400"},sidebarList:{listStyle:"none"},divider:{borderBottom:"1px solid #D5D5E7",height:"0.5px"},sidebarIcon:{fontSize:"1.2rem",display:"inline-block"},sidebarName:{marginLeft:"0.5rem"},submenuIcon:{fontSize:"0.8rem",display:"inline-block"},submenuName:{whiteSpace:"nowrap"},closeBtn:{position:"absolute",right:"0",top:"4.7rem",border:"1px solid #e5e7eb",borderRadius:"50%",backgroundColor:"#fff",width:"1.5rem",height:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",transform:"translateX(50%)",fontSize:"1.1rem"}},R=function(e){return e?"auto":"none"},A=function(e){var r=e.children,n=e.isOpenMenu;return t().createElement("div",{style:T(T({},C.wrapper),{},{width:n?"74px":"268px"})},r)},D=function(e){var r=e.children,n=e.isOpenMenu;return t().createElement("aside",{style:T(T({},C.sidebar),{},{width:n?"74px":"268px"})},r)},N=function(e){var r=e.children,n=e.isOpenMenu;return t().createElement("div",{style:T(T({},C.sidebarTop),{},{marginLeft:n?"":"1rem"})},r)},_=function(e){var r=e.children,n=e.onClick;return t().createElement("span",{style:C.sidebarLogo,onClick:n},r)},q=function(e){var r=e.children,n=e.isOpenMenu;return t().createElement("p",{style:T(T({},C.logoName),{},{display:n?"none":""})},r)},z=function(e){var r=e.children;return t().createElement("span",{style:C.sidebarIcon},r)},F=function(e){var r=e.children,n=e.isOpenMenu;return t().createElement("span",{style:T(T({},C.sidebarName),{},{display:n?"none":""})},r)},I=function(e){var r=e.children,n=e.isOpenMenu;return t().createElement("span",{style:T(T({},C.submenuName),{},{display:n?"none":""})},r)},W=function(e){var r=e.children,n=e.style,i=e.onClick,o=e.onMouseEnter,a=e.onMouseLeave;return t().createElement("div",{onClick:i,style:n,onMouseEnter:o,onMouseLeave:a},r)},B=function(e){var r=e.children;return t().createElement("ul",{style:C.styledUl},r)},U=function(e){var r=e.children;return t().createElement("span",{style:C.arrowWrapper},r)},H=function(e){var r=e.children,n=e.isMainElementActive,i=e.isOpenMenu;return t().createElement("span",{style:T(T({},C.subMenuMainTitle),{},{fontWeight:n?"500":"400",display:i?"none":""})},r)},G=function(e){var r,n=e.isOpenMenu;return t().createElement("div",{style:T(T({},C.divider),{},{width:(r=n,r?"55px":"248px")})})},V=function(e,t){switch(t.type){case"TOGGLE_MENU":return T(T({},e),{},{isOpenMenu:!e.isOpenMenu});case"TOGGLE_SUBMENU":return T(T({},e),{},{items:e.items.map((function(e){return e.name===t.payload?T(T({},e),{},{isOpen:!e.isOpen}):e}))});case"UPDATE_ITEMS":return T(T({},e),{},{items:t.payload});default:return e}},X=function(r){var n,i,o=r.handleNavigation,a=r.isActive,c=r.items,l=(n=(0,e.useReducer)(V,{isOpenMenu:!0,items:c}),i=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,i=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw i}}return c}}(n,i)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=l[0],u=l[1],p=s.isOpenMenu,f=s.items,d=h();(0,e.useEffect)((function(){u({type:"UPDATE_ITEMS",payload:c})}),[c]);var m=function(e){var t;t=e.name,u({type:"TOGGLE_SUBMENU",payload:t})};return t().createElement(A,{isOpenMenu:p},t().createElement(D,{isOpenMenu:p},t().createElement(N,{isOpenMenu:p},t().createElement(_,{onClick:function(){u({type:"TOGGLE_MENU"})}},p?t().createElement(y,{"data-id":"barsIcon"}):t().createElement(g,{"data-id":"closeButton"})),t().createElement(q,{isOpenMenu:p},"Cerrar")),t().createElement("span",{style:{display:"block",marginBottom:"1rem"}},t().createElement(G,{isOpenMenu:p})),t().createElement(B,null,null==f?void 0:f.map((function(e){return t().createElement("li",{key:e.name},!e.submenu&&t().createElement(M,{href:e.href||"",isOpenMenu:p,hasPermission:d(e.permissions||[]),onClick:o,isActive:a},t().createElement(z,null,e.icon),t().createElement(F,{isOpenMenu:p},e.name)),e.submenu&&t().createElement($,{item:e,isOpenMenu:p,updateList:m,handleNavigation:o,isActive:a}))})))))};X.propTypes={handleNavigation:o().func.isRequired,isActive:o().func.isRequired,items:o().arrayOf(o().shape({name:o().string.isRequired,isOpen:o().bool,href:o().string,permissions:o().arrayOf(o().string),icon:o().node,submenu:o().array})).isRequired};var Y=function(e){var r=e.active;return e.isOpenMenu?null:t().createElement(U,null,r?t().createElement(v,{size:"14px"}):t().createElement(b,{size:"14px"}))};Y.propTypes={active:o().bool,isOpenMenu:o().bool};var $=function(e){var r,n=e.item,i=e.isOpenMenu,o=e.updateList,a=e.handleNavigation,c=e.isActive,l=c(n.href||"",i),s=c(n.href||""),u=h(),p=n.isOpen,f=T(T({},C.collapsedDiv),{},{fontWeight:l?"500":"400",justifyContent:i?"center":"",alignItems:"center",padding:i?"8px":"0.8rem 1rem",backgroundColor:l?"#EAE5FF":""});return t().createElement("span",null,t().createElement(W,{onClick:function(e){e.stopPropagation(),o(n)},style:f},t().createElement(z,null,n.icon),t().createElement(H,{isMainElementActive:s,isOpenMenu:i},n.name),t().createElement(Y,{active:p,isOpenMenu:i})),p&&!i&&(null===(r=n.submenu)||void 0===r?void 0:r.map((function(e){return t().createElement("span",{key:e.name},t().createElement(M,{href:e.href||"",isOpenMenu:i,hasPermission:u(e.permissions||[]),isSubmenu:!0,onClick:a,isActive:c},t().createElement(I,{isOpenMenu:i},e.name)))}))))};$.propTypes={item:o().object.isRequired,isOpenMenu:o().bool.isRequired,updateList:o().func.isRequired,handleNavigation:o().func.isRequired,isActive:o().func.isRequired};const J=X})(),i})()));