/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function() {\n\n    const submit = document.querySelector(\"form\");\n    const input = document.querySelector(\"input\");\n    const body = document.querySelector('body');\n    const name = document.querySelector(\"h3:nth-of-type(2)\");\n    const region = document.querySelector(\"h3:nth-of-type(3)\");\n    const subregion = document.querySelector(\"h3:nth-of-type(4)\");\n    const nativeName = document.querySelector(\"h3:nth-of-type(5)\");\n    const capital = document.querySelector(\"h3:nth-of-type(6)\");\n    const language = document.querySelector(\"h3:nth-of-type(7\");\n    const currency = document.querySelector(\"h3:nth-of-type(8)\");\n    const population = document.querySelector(\"h3:nth-of-type(9)\");\n    const img = document.querySelector(\".info img\");\n\n    body.addEventListener('mouseenter', () => {\n        const land = body.querySelectorAll('.land');\n        const event = document.createEvent(\"Event\");\n        event.initEvent(\"click\", true, true);\n        [...land].forEach(function(item) {\n            item.addEventListener('click', function(e) {\n                input.value = \"Write country name:\";\n                land.forEach(function(item) {\n                    item.style.fill = \"#ac9d93\"\n                });\n                this.style.fill = \"gray\";\n                let value = this.getAttribute(\"title\");\n                if (value === \"South Korea\") {\n                    value = \"Korea (Republic of)\";\n                } else if (value === \"North Korea\") {\n                    value = \"Korea (Democratic People's Republic of)\";\n                } else if (value === \"Republic of Congo\") {\n                    value = \"Congo\";\n                } else if (value === \"Democratic Republic of Congo\") {\n                    value = \"Congo (Democratic Republic of the)\"\n                }\n                fetch(`https://restcountries.eu/rest/v2/name/` + value)\n                    .then(resp => {\n                        return resp.json()\n                    })\n                    .then(data => {\n                        let country = data[0];\n                        if (value === \"India\") {\n                            country = data[1];\n                        }\n                        name.textContent = \"Name: \" + country.name;\n                        region.textContent = \"Region: \" + country.region;\n                        subregion.textContent = \"Subregion: \" + country.subregion;\n                        nativeName.textContent = \"Native name: \" + data[0].nativeName;\n                        capital.textContent = \"Capital: \" + country.capital;\n                        language.textContent = \"Language: \" + country.languages[0].name;\n                        currency.textContent = \"Currency: \" + country.currencies[0].code;\n                        population.textContent = \"Population: \" + country.population.toLocaleString();\n                        img.setAttribute(\"src\", country.flag);\n                        img.style.boxShadow = '0 0 3px 3px gray';\n\n                    })\n            }, false);\n        })\n        input.addEventListener('click', () => {\n            input.value = \"\";\n        })\n        submit.addEventListener('submit', e => {\n            toTitleCase = str => {\n                return str.replace(/\\w\\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });\n            }\n            e.preventDefault();\n            const value = toTitleCase(input.value);\n            if (document.querySelector(`.map path[title=\"${value}\"]`) === null) {\n                alert('Invalid country name, try again');\n            } else {\n                document.querySelector(`.map path[title=\"${value}\"]`).dispatchEvent(event);\n            }\n        })\n    })\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDREQUE0RCxrRUFBa0UsRUFBRTtBQUNoSTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsTUFBTTtBQUNqRTtBQUNBLGFBQWE7QUFDYiwyREFBMkQsTUFBTTtBQUNqRTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDIpXCIpO1xuICAgIGNvbnN0IHJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSgzKVwiKTtcbiAgICBjb25zdCBzdWJyZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoNClcIik7XG4gICAgY29uc3QgbmF0aXZlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg1KVwiKTtcbiAgICBjb25zdCBjYXBpdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDYpXCIpO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDdcIik7XG4gICAgY29uc3QgY3VycmVuY3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoOClcIik7XG4gICAgY29uc3QgcG9wdWxhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg5KVwiKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8gaW1nXCIpO1xuXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBsYW5kID0gYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZCcpO1xuICAgICAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudChcImNsaWNrXCIsIHRydWUsIHRydWUpO1xuICAgICAgICBbLi4ubGFuZF0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJXcml0ZSBjb3VudHJ5IG5hbWU6XCI7XG4gICAgICAgICAgICAgICAgbGFuZC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5maWxsID0gXCIjYWM5ZDkzXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLmZpbGwgPSBcImdyYXlcIjtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJTb3V0aCBLb3JlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJLb3JlYSAoUmVwdWJsaWMgb2YpXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJOb3J0aCBLb3JlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJLb3JlYSAoRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIlJlcHVibGljIG9mIENvbmdvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIkNvbmdvXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJEZW1vY3JhdGljIFJlcHVibGljIG9mIENvbmdvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIkNvbmdvIChEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvbmFtZS9gICsgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50cnkgPSBkYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIkluZGlhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5ID0gZGF0YVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiICsgY291bnRyeS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uLnRleHRDb250ZW50ID0gXCJSZWdpb246IFwiICsgY291bnRyeS5yZWdpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJyZWdpb24udGV4dENvbnRlbnQgPSBcIlN1YnJlZ2lvbjogXCIgKyBjb3VudHJ5LnN1YnJlZ2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU5hbWUudGV4dENvbnRlbnQgPSBcIk5hdGl2ZSBuYW1lOiBcIiArIGRhdGFbMF0ubmF0aXZlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcGl0YWwudGV4dENvbnRlbnQgPSBcIkNhcGl0YWw6IFwiICsgY291bnRyeS5jYXBpdGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UudGV4dENvbnRlbnQgPSBcIkxhbmd1YWdlOiBcIiArIGNvdW50cnkubGFuZ3VhZ2VzWzBdLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeS50ZXh0Q29udGVudCA9IFwiQ3VycmVuY3k6IFwiICsgY291bnRyeS5jdXJyZW5jaWVzWzBdLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0aW9uLnRleHRDb250ZW50ID0gXCJQb3B1bGF0aW9uOiBcIiArIGNvdW50cnkucG9wdWxhdGlvbi50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjb3VudHJ5LmZsYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgM3B4IDNweCBncmF5JztcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSlcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgICAgICAgdG9UaXRsZUNhc2UgPSBzdHIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbih0eHQpIHsgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvVGl0bGVDYXNlKGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFwIHBhdGhbdGl0bGU9XCIke3ZhbHVlfVwiXWApID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgY291bnRyeSBuYW1lLCB0cnkgYWdhaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1hcCBwYXRoW3RpdGxlPVwiJHt2YWx1ZX1cIl1gKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);