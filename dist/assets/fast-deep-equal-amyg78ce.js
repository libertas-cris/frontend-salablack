function s(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var c=function o(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var f,e,u;if(Array.isArray(r)){if(f=r.length,f!=t.length)return!1;for(e=f;e--!==0;)if(!o(r[e],t[e]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(u=Object.keys(r),f=u.length,f!==Object.keys(t).length)return!1;for(e=f;e--!==0;)if(!Object.prototype.hasOwnProperty.call(t,u[e]))return!1;for(e=f;e--!==0;){var n=u[e];if(!o(r[n],t[n]))return!1}return!0}return r!==r&&t!==t};const l=s(c);export{s as g,l as i};
