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

eval("document.addEventListener('DOMContentLoaded', function() {\n\n    const submit = document.querySelector(\"form\");\n    const inputName = document.querySelector(\"input\");\n    const body = document.querySelector('body');\n    const name = document.querySelector(\"h3:nth-of-type(2)\");\n    const region = document.querySelector(\"h3:nth-of-type(3)\");\n    const subregion = document.querySelector(\"h3:nth-of-type(4)\");\n    const nativeName = document.querySelector(\"h3:nth-of-type(5)\");\n    const capital = document.querySelector(\"h3:nth-of-type(6)\");\n    const language = document.querySelector(\"h3:nth-of-type(7\");\n    const currency = document.querySelector(\"h3:nth-of-type(8)\");\n    const population = document.querySelector(\"h3:nth-of-type(9)\");\n    const img = document.querySelector(\".info img\");\n    const infos = document.querySelectorAll('.infos');\n\n\n    setTimeout(function() {\n        const land = body.querySelectorAll('.land');\n        const event = document.createEvent(\"Event\");\n        event.initEvent(\"click\", true, true);\n\n        [...land].forEach(function(item) {\n            item.addEventListener('click', function(e) {\n                inputName.value = \"Write country name:\";\n                inputName.style = \"color: black\";\n                land.forEach(function(item) {\n                    item.style.fill = \"#ac9d93\"\n                });\n                this.style.fill = \"gray\";\n                let value = this.getAttribute(\"title\");\n                if (value === \"South Korea\") {\n                    value = \"Korea (Republic of)\";\n                } else if (value === \"North Korea\") {\n                    value = \"Korea (Democratic People's Republic of)\";\n                } else if (value === \"Republic of Congo\") {\n                    value = \"Congo\";\n                } else if (value === \"Democratic Republic of Congo\") {\n                    value = \"Congo (Democratic Republic of the)\"\n                }\n                fetch(`https://restcountries.eu/rest/v2/name/` + value)\n                    .then(resp => {\n                        return resp.json()\n                    })\n                    .then(data => {\n                        let country = data[0];\n                        if (value === \"India\") {\n                            country = data[1];\n                        }\n                        name.textContent = \"Name: \" + country.name;\n                        region.textContent = \"Region: \" + country.region;\n                        subregion.textContent = \"Subregion: \" + country.subregion;\n                        nativeName.textContent = \"Native name: \" + country.nativeName;\n                        capital.textContent = \"Capital: \" + country.capital;\n                        language.textContent = \"Language: \" + country.languages[0].name;\n                        currency.textContent = \"Currency: \" + country.currencies[0].code;\n                        population.textContent = \"Population: \" + country.population.toLocaleString();\n                        img.setAttribute(\"src\", country.flag);\n                        img.style.boxShadow = '0 0 3px 3px gray';\n\n                    })\n            }, false);\n        })\n\n\n        inputName.addEventListener('click', () => {\n            inputName.value = \"\";\n            inputName.style = \"color: black\";\n            infos.forEach(item => {\n                item.textContent = \"\";\n            });\n            land.forEach(function(item) {\n                item.style.fill = \"#ac9d93\"\n            });\n            img.setAttribute(\"src\", \"\");\n            img.style.boxShadow = '0 0 0 0';\n        })\n\n        submit.addEventListener('submit', function(e) {\n            e.preventDefault();\n            console.log('click');\n            toTitleCase = str => {\n                return str.replace(/\\w\\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });\n            };\n            const value = toTitleCase(inputName.value);\n            const selection = document.querySelector(`.map path[title=\"${value}\"]`) !== null;\n            if (!selection) {\n                inputName.value = \"Invalid country name\";\n                inputName.style = \"color: red\";\n            } else {\n                inputName.value = \"Write country name:\";\n                document.querySelector(`.map path[title=\"${value}\"]`).dispatchEvent(event);\n            }\n        })\n\n    }, 500);\n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGtFQUFrRSxFQUFFO0FBQ2hJO0FBQ0E7QUFDQSx5RUFBeUUsTUFBTTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwyREFBMkQsTUFBTTtBQUNqRTtBQUNBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDIpXCIpO1xuICAgIGNvbnN0IHJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSgzKVwiKTtcbiAgICBjb25zdCBzdWJyZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoNClcIik7XG4gICAgY29uc3QgbmF0aXZlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg1KVwiKTtcbiAgICBjb25zdCBjYXBpdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDYpXCIpO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDdcIik7XG4gICAgY29uc3QgY3VycmVuY3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoOClcIik7XG4gICAgY29uc3QgcG9wdWxhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg5KVwiKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8gaW1nXCIpO1xuICAgIGNvbnN0IGluZm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm9zJyk7XG5cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGxhbmQgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kJyk7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KFwiY2xpY2tcIiwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgWy4uLmxhbmRdLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIldyaXRlIGNvdW50cnkgbmFtZTpcIjtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWUuc3R5bGUgPSBcImNvbG9yOiBibGFja1wiO1xuICAgICAgICAgICAgICAgIGxhbmQuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZmlsbCA9IFwiI2FjOWQ5M1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5maWxsID0gXCJncmF5XCI7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiU291dGggS29yZWFcIikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiS29yZWEgKFJlcHVibGljIG9mKVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiTm9ydGggS29yZWFcIikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiS29yZWEgKERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJSZXB1YmxpYyBvZiBDb25nb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJDb25nb1wiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiBDb25nb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJDb25nbyAoRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL25hbWUvYCArIHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gZGF0YVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJJbmRpYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeSA9IGRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gXCJOYW1lOiBcIiArIGNvdW50cnkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lvbi50ZXh0Q29udGVudCA9IFwiUmVnaW9uOiBcIiArIGNvdW50cnkucmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VicmVnaW9uLnRleHRDb250ZW50ID0gXCJTdWJyZWdpb246IFwiICsgY291bnRyeS5zdWJyZWdpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVOYW1lLnRleHRDb250ZW50ID0gXCJOYXRpdmUgbmFtZTogXCIgKyBjb3VudHJ5Lm5hdGl2ZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXBpdGFsLnRleHRDb250ZW50ID0gXCJDYXBpdGFsOiBcIiArIGNvdW50cnkuY2FwaXRhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlLnRleHRDb250ZW50ID0gXCJMYW5ndWFnZTogXCIgKyBjb3VudHJ5Lmxhbmd1YWdlc1swXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3kudGV4dENvbnRlbnQgPSBcIkN1cnJlbmN5OiBcIiArIGNvdW50cnkuY3VycmVuY2llc1swXS5jb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGlvbi50ZXh0Q29udGVudCA9IFwiUG9wdWxhdGlvbjogXCIgKyBjb3VudHJ5LnBvcHVsYXRpb24udG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY291bnRyeS5mbGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDNweCAzcHggZ3JheSc7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfSlcblxuXG4gICAgICAgIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBpbnB1dE5hbWUuc3R5bGUgPSBcImNvbG9yOiBibGFja1wiO1xuICAgICAgICAgICAgaW5mb3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGFuZC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmZpbGwgPSBcIiNhYzlkOTNcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiXCIpO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMCAwJztcbiAgICAgICAgfSlcblxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgICAgICAgICB0b1RpdGxlQ2FzZSA9IHN0ciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uKHR4dCkgeyByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvVGl0bGVDYXNlKGlucHV0TmFtZS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFwIHBhdGhbdGl0bGU9XCIke3ZhbHVlfVwiXWApICE9PSBudWxsO1xuICAgICAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIkludmFsaWQgY291bnRyeSBuYW1lXCI7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lLnN0eWxlID0gXCJjb2xvcjogcmVkXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiV3JpdGUgY291bnRyeSBuYW1lOlwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYXAgcGF0aFt0aXRsZT1cIiR7dmFsdWV9XCJdYCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9LCA1MDApO1xuXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);