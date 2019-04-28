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

eval("document.addEventListener('DOMContentLoaded', function() {\n\n    const submit = document.querySelector(\"form\");\n    const input = document.querySelector(\"input\");\n    const body = document.querySelector('body');\n    const name = document.querySelector(\"h3:nth-of-type(2)\");\n    const region = document.querySelector(\"h3:nth-of-type(3)\");\n    const subregion = document.querySelector(\"h3:nth-of-type(4)\");\n    const nativeName = document.querySelector(\"h3:nth-of-type(5)\");\n    const capital = document.querySelector(\"h3:nth-of-type(6)\");\n    const language = document.querySelector(\"h3:nth-of-type(7\");\n    const currency = document.querySelector(\"h3:nth-of-type(8)\");\n    const population = document.querySelector(\"h3:nth-of-type(9)\");\n    const img = document.querySelector(\".info img\");\n\n    body.addEventListener('mouseenter', () => {\n        const land = body.querySelectorAll('.land');\n        const event = document.createEvent(\"Event\");\n        event.initEvent(\"click\", true, true);\n        [...land].forEach(function(item) {\n            item.addEventListener('click', function(e) {\n                input.value = \"Write country name:\";\n                land.forEach(function(item) {\n                    item.style.fill = \"#ac9d93\"\n                });\n                this.style.fill = \"gray\";\n                let value = this.getAttribute(\"title\");\n                if (value === \"South Korea\") {\n                    value = \"Korea (Republic of)\";\n                } else if (value === \"North Korea\") {\n                    value = \"Korea (Democratic People's Republic of)\";\n                } else if (value === \"Republic of Congo\") {\n                    value = \"Congo\";\n                } else if (value === \"Democratic Republic of Congo\") {\n                    value = \"Congo (Democratic Republic of the)\"\n                }\n                fetch(`https://restcountries.eu/rest/v2/name/` + value)\n                    .then(resp => {\n                        return resp.json()\n                    })\n                    .then(data => {\n                        let country = data[0];\n                        if (value === \"India\") {\n                            country = data[1];\n                        }\n                        name.textContent = \"Name: \" + country.name;\n                        region.textContent = \"Region: \" + country.region;\n                        subregion.textContent = \"Subregion: \" + country.subregion;\n                        nativeName.textContent = \"Native name: \" + data[0].nativeName;\n                        capital.textContent = \"Capital: \" + country.capital;\n                        language.textContent = \"Language: \" + country.languages[0].name;\n                        currency.textContent = \"Currency: \" + country.currencies[0].code;\n                        population.textContent = \"Population: \" + country.population.toLocaleString();\n                        img.setAttribute(\"src\", country.flag);\n                        img.style.boxShadow = '0 0 3px 3px gray';\n\n                    })\n            }, false);\n        })\n        input.addEventListener('click', () => {\n            input.value = \"\";\n            name.textContent = \"\";\n            region.textContent = \"\";\n            subregion.textContent = \"\";\n            nativeName.textContent = \"\";\n            capital.textContent = \"\";\n            language.textContent = \"\";\n            currency.textContent = \"\";\n            population.textContent = \"\";\n            img.setAttribute(\"src\", \"\");\n            img.style.boxShadow = '0 0 0 0';\n        })\n        submit.addEventListener('submit', e => {\n            toTitleCase = str => {\n                return str.replace(/\\w\\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });\n            }\n            e.preventDefault();\n            const value = toTitleCase(input.value);\n            if (document.querySelector(`.map path[title=\"${value}\"]`) === null) {\n                input.value = \"Invalid country name\";\n            } else {\n                document.querySelector(`.map path[title=\"${value}\"]`).dispatchEvent(event);\n            }\n        })\n    })\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNERBQTRELGtFQUFrRSxFQUFFO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxNQUFNO0FBQ2pFO0FBQ0EsYUFBYTtBQUNiLDJEQUEyRCxNQUFNO0FBQ2pFO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoMilcIik7XG4gICAgY29uc3QgcmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDMpXCIpO1xuICAgIGNvbnN0IHN1YnJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg0KVwiKTtcbiAgICBjb25zdCBuYXRpdmVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDUpXCIpO1xuICAgIGNvbnN0IGNhcGl0YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoNilcIik7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoN1wiKTtcbiAgICBjb25zdCBjdXJyZW5jeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg4KVwiKTtcbiAgICBjb25zdCBwb3B1bGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDkpXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mbyBpbWdcIik7XG5cbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhbmQgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kJyk7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KFwiY2xpY2tcIiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIFsuLi5sYW5kXS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIldyaXRlIGNvdW50cnkgbmFtZTpcIjtcbiAgICAgICAgICAgICAgICBsYW5kLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmZpbGwgPSBcIiNhYzlkOTNcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuZmlsbCA9IFwiZ3JheVwiO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlNvdXRoIEtvcmVhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIktvcmVhIChSZXB1YmxpYyBvZilcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIk5vcnRoIEtvcmVhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIktvcmVhIChEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mKVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiUmVwdWJsaWMgb2YgQ29uZ29cIikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiQ29uZ29cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIkRlbW9jcmF0aWMgUmVwdWJsaWMgb2YgQ29uZ29cIikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiQ29uZ28gKERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlKVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9uYW1lL2AgKyB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRyeSA9IGRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiSW5kaWFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnkgPSBkYXRhWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IFwiTmFtZTogXCIgKyBjb3VudHJ5Lm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpb24udGV4dENvbnRlbnQgPSBcIlJlZ2lvbjogXCIgKyBjb3VudHJ5LnJlZ2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnJlZ2lvbi50ZXh0Q29udGVudCA9IFwiU3VicmVnaW9uOiBcIiArIGNvdW50cnkuc3VicmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlTmFtZS50ZXh0Q29udGVudCA9IFwiTmF0aXZlIG5hbWU6IFwiICsgZGF0YVswXS5uYXRpdmVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwaXRhbC50ZXh0Q29udGVudCA9IFwiQ2FwaXRhbDogXCIgKyBjb3VudHJ5LmNhcGl0YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZS50ZXh0Q29udGVudCA9IFwiTGFuZ3VhZ2U6IFwiICsgY291bnRyeS5sYW5ndWFnZXNbMF0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5LnRleHRDb250ZW50ID0gXCJDdXJyZW5jeTogXCIgKyBjb3VudHJ5LmN1cnJlbmNpZXNbMF0uY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRpb24udGV4dENvbnRlbnQgPSBcIlBvcHVsYXRpb246IFwiICsgY291bnRyeS5wb3B1bGF0aW9uLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNvdW50cnkuZmxhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYm94U2hhZG93ID0gJzAgMCAzcHggM3B4IGdyYXknO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICByZWdpb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgc3VicmVnaW9uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIG5hdGl2ZU5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgY2FwaXRhbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBsYW5ndWFnZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjdXJyZW5jeS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBwb3B1bGF0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJcIik7XG4gICAgICAgICAgICBpbWcuc3R5bGUuYm94U2hhZG93ID0gJzAgMCAwIDAnO1xuICAgICAgICB9KVxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgICAgICB0b1RpdGxlQ2FzZSA9IHN0ciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uKHR4dCkgeyByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdG9UaXRsZUNhc2UoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYXAgcGF0aFt0aXRsZT1cIiR7dmFsdWV9XCJdYCkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiSW52YWxpZCBjb3VudHJ5IG5hbWVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1hcCBwYXRoW3RpdGxlPVwiJHt2YWx1ZX1cIl1gKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);