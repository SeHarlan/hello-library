"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));!function(e,t){void 0===t&&(t={});var l=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===l&&n.firstChild?n.insertBefore(d,n.firstChild):n.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}(".hello-default-button {\n  font-size: 60px;\n  border: 2px dotted var(--library-prime);\n}");exports.Button=({label:e="Click Me",disabled:l=!1,onClick:n=(()=>null),className:d=""})=>t.default.createElement("button",{className:`hello-default-button ${d}`,onClick:n,disabled:l},e);
//# sourceMappingURL=index.js.map
