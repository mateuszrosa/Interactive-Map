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

eval("document.addEventListener('DOMContentLoaded', function() {\n\n    const submit = document.querySelector(\"form\");\n    const input = document.querySelector(\"input\");\n    const body = document.querySelector('body');\n    const name = document.querySelector(\"h3:nth-of-type(2)\");\n    const region = document.querySelector(\"h3:nth-of-type(3)\");\n    const subregion = document.querySelector(\"h3:nth-of-type(4)\");\n    const nativeName = document.querySelector(\"h3:nth-of-type(5)\");\n    const capital = document.querySelector(\"h3:nth-of-type(6)\");\n    const language = document.querySelector(\"h3:nth-of-type(7\");\n    const currency = document.querySelector(\"h3:nth-of-type(8)\");\n    const population = document.querySelector(\"h3:nth-of-type(9)\");\n    const img = document.querySelector(\".info img\");\n    const infos = document.querySelectorAll('.infos');\n\n    body.addEventListener('mouseenter', () => {\n        const land = body.querySelectorAll('.land');\n        const event = document.createEvent(\"Event\");\n        event.initEvent(\"click\", true, true);\n        [...land].forEach(function(item) {\n            item.addEventListener('click', function(e) {\n                input.value = \"Write country name:\";\n                land.forEach(function(item) {\n                    item.style.fill = \"#ac9d93\"\n                });\n                this.style.fill = \"gray\";\n                let value = this.getAttribute(\"title\");\n                if (value === \"South Korea\") {\n                    value = \"Korea (Republic of)\";\n                } else if (value === \"North Korea\") {\n                    value = \"Korea (Democratic People's Republic of)\";\n                } else if (value === \"Republic of Congo\") {\n                    value = \"Congo\";\n                } else if (value === \"Democratic Republic of Congo\") {\n                    value = \"Congo (Democratic Republic of the)\"\n                }\n                fetch(`https://restcountries.eu/rest/v2/name/` + value)\n                    .then(resp => {\n                        return resp.json()\n                    })\n                    .then(data => {\n                        let country = data[0];\n                        if (value === \"India\") {\n                            country = data[1];\n                        }\n                        name.textContent = \"Name: \" + country.name;\n                        region.textContent = \"Region: \" + country.region;\n                        subregion.textContent = \"Subregion: \" + country.subregion;\n                        nativeName.textContent = \"Native name: \" + data[0].nativeName;\n                        capital.textContent = \"Capital: \" + country.capital;\n                        language.textContent = \"Language: \" + country.languages[0].name;\n                        currency.textContent = \"Currency: \" + country.currencies[0].code;\n                        population.textContent = \"Population: \" + country.population.toLocaleString();\n                        img.setAttribute(\"src\", country.flag);\n                        img.style.boxShadow = '0 0 3px 3px gray';\n\n                    })\n            }, false);\n        })\n        input.addEventListener('click', () => {\n            input.value = \"\";\n            infos.forEach(item => {\n                item.textContent = \"\";\n            });\n            img.setAttribute(\"src\", \"\");\n            img.style.boxShadow = '0 0 0 0';\n        })\n        submit.addEventListener('submit', e => {\n            toTitleCase = str => {\n                return str.replace(/\\w\\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });\n            }\n            e.preventDefault();\n            const value = toTitleCase(input.value);\n            if (document.querySelector(`.map path[title=\"${value}\"]`) === null) {\n                input.value = \"Invalid country name\";\n            } else {\n                document.querySelector(`.map path[title=\"${value}\"]`).dispatchEvent(event);\n            }\n        })\n    })\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNERBQTRELGtFQUFrRSxFQUFFO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxNQUFNO0FBQ2pFO0FBQ0EsYUFBYTtBQUNiLDJEQUEyRCxNQUFNO0FBQ2pFO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoMilcIik7XG4gICAgY29uc3QgcmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDMpXCIpO1xuICAgIGNvbnN0IHN1YnJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg0KVwiKTtcbiAgICBjb25zdCBuYXRpdmVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDUpXCIpO1xuICAgIGNvbnN0IGNhcGl0YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoNilcIik7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoN1wiKTtcbiAgICBjb25zdCBjdXJyZW5jeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg4KVwiKTtcbiAgICBjb25zdCBwb3B1bGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDkpXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mbyBpbWdcIik7XG4gICAgY29uc3QgaW5mb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5mb3MnKTtcblxuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGFuZCA9IGJvZHkucXVlcnlTZWxlY3RvckFsbCgnLmxhbmQnKTtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoXCJjbGlja1wiLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgWy4uLmxhbmRdLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiV3JpdGUgY291bnRyeSBuYW1lOlwiO1xuICAgICAgICAgICAgICAgIGxhbmQuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZmlsbCA9IFwiI2FjOWQ5M1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5maWxsID0gXCJncmF5XCI7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiU291dGggS29yZWFcIikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiS29yZWEgKFJlcHVibGljIG9mKVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiTm9ydGggS29yZWFcIikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiS29yZWEgKERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJSZXB1YmxpYyBvZiBDb25nb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJDb25nb1wiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiBDb25nb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJDb25nbyAoRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vcmVzdGNvdW50cmllcy5ldS9yZXN0L3YyL25hbWUvYCArIHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gZGF0YVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJJbmRpYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeSA9IGRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gXCJOYW1lOiBcIiArIGNvdW50cnkubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lvbi50ZXh0Q29udGVudCA9IFwiUmVnaW9uOiBcIiArIGNvdW50cnkucmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VicmVnaW9uLnRleHRDb250ZW50ID0gXCJTdWJyZWdpb246IFwiICsgY291bnRyeS5zdWJyZWdpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVOYW1lLnRleHRDb250ZW50ID0gXCJOYXRpdmUgbmFtZTogXCIgKyBkYXRhWzBdLm5hdGl2ZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXBpdGFsLnRleHRDb250ZW50ID0gXCJDYXBpdGFsOiBcIiArIGNvdW50cnkuY2FwaXRhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlLnRleHRDb250ZW50ID0gXCJMYW5ndWFnZTogXCIgKyBjb3VudHJ5Lmxhbmd1YWdlc1swXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3kudGV4dENvbnRlbnQgPSBcIkN1cnJlbmN5OiBcIiArIGNvdW50cnkuY3VycmVuY2llc1swXS5jb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGlvbi50ZXh0Q29udGVudCA9IFwiUG9wdWxhdGlvbjogXCIgKyBjb3VudHJ5LnBvcHVsYXRpb24udG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgY291bnRyeS5mbGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDNweCAzcHggZ3JheSc7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBpbmZvcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiXCIpO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMCAwJztcbiAgICAgICAgfSlcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgICAgICAgdG9UaXRsZUNhc2UgPSBzdHIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbih0eHQpIHsgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvVGl0bGVDYXNlKGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFwIHBhdGhbdGl0bGU9XCIke3ZhbHVlfVwiXWApID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIkludmFsaWQgY291bnRyeSBuYW1lXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYXAgcGF0aFt0aXRsZT1cIiR7dmFsdWV9XCJdYCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);