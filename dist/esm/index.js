import e from"react";!function(e,t){void 0===t&&(t={});var l=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===l&&n.firstChild?n.insertBefore(d,n.firstChild):n.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}(".hello-default-button {\n  font-size: 60px;\n  border: 2px dotted var(--library-prime);\n}");const t=({label:t="Click Me",disabled:l=!1,onClick:n=(()=>null),className:d=""})=>e.createElement("button",{className:`hello-default-button ${d}`,onClick:n,disabled:l},t);export{t as Button};
//# sourceMappingURL=index.js.map
