!function(){function e(e,n){function t(t){return e(function(e){function o(){r.removeChild(a),n.cancel(i),e()}var a=document.createElement("img"),i;a.src=t,a.height="96",a.width="96",a.style.opacity=0,i=n(function(){r.removeChild(a),a.removeEventListener("load",o),e()},5750),a.addEventListener("load",o),r.appendChild(a)})}function o(n){return n&&0!==n.length?e.all(n.map(function(e){return t(e)})):e.when()}var r=document.getElementsByTagName("body")[0];return{preloadImages:o}}angular.module("app").factory("ImagePreloader",e),e.$inject=["$q","$timeout"]}();