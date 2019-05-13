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

eval("document.addEventListener('DOMContentLoaded', function() {\n\n    const submit = document.querySelector(\"form\");\n    const inputName = document.querySelector(\"input\");\n    const body = document.querySelector('body');\n    const name = document.querySelector(\"h3:nth-of-type(2)\");\n    const region = document.querySelector(\"h3:nth-of-type(3)\");\n    const subregion = document.querySelector(\"h3:nth-of-type(4)\");\n    const nativeName = document.querySelector(\"h3:nth-of-type(5)\");\n    const capital = document.querySelector(\"h3:nth-of-type(6)\");\n    const language = document.querySelector(\"h3:nth-of-type(7\");\n    const currency = document.querySelector(\"h3:nth-of-type(8)\");\n    const population = document.querySelector(\"h3:nth-of-type(9)\");\n    const img = document.querySelector(\".info img\");\n    const infos = document.querySelectorAll('.infos');\n\n    const worldMap = () => {\n        const land = body.querySelectorAll('.land');\n        const event = document.createEvent(\"Event\");\n        event.initEvent(\"click\", true, true);\n\n        const markingCountry = () => {\n            [...land].forEach(item => {\n                item.addEventListener('click', e => {\n                    inputName.value = \"Write country name:\";\n                    inputName.style = \"color: black\";\n                    land.forEach(function(item) {\n                        item.style.fill = \"#ac9d93\"\n                    });\n                    e.target.style.fill = \"gray\";\n                    let value = e.target.getAttribute(\"title\");\n                    if (value === \"South Korea\") {\n                        value = \"Korea (Republic of)\";\n                    } else if (value === \"North Korea\") {\n                        value = \"Korea (Democratic People's Republic of)\";\n                    } else if (value === \"Republic of Congo\") {\n                        value = \"Congo\";\n                    } else if (value === \"Democratic Republic of Congo\") {\n                        value = \"Congo (Democratic Republic of the)\"\n                    }\n                    fetch(`https://restcountries.eu/rest/v2/name/` + value)\n                        .then(resp => {\n                            return resp.json()\n                        })\n                        .then(data => {\n                            let country = data[0];\n                            if (value === \"India\") {\n                                country = data[1];\n                            }\n                            name.innerHTML = `Name: <span class=\"inf\">${country.name}</span>`\n                            region.innerHTML = `Region: <span class=\"inf\">${country.region}</span>`\n                            subregion.innerHTML = `Subegion: <span class=\"inf\">${country.subregion}</span>`\n                            nativeName.innerHTML = `Native name: <span class=\"inf\">${country.nativeName}</span>`\n                            capital.innerHTML = `Capital: <span class=\"inf\">${country.capital}</span>`\n                            language.innerHTML = `Language: <span class=\"inf\">${country.languages[0].name}</span>`\n                            currency.innerHTML = `Currency: <span class=\"inf\">${country.currencies[0].code}</span>`\n                            population.innerHTML = `Population: <span class=\"inf\">${country.population.toLocaleString()}</span>`\n                            img.setAttribute(\"src\", country.flag);\n                            img.style.boxShadow = '0 0 3px 3px gray';\n\n                        })\n                }, false);\n            })\n        }\n\n        const byInput = () => {\n            inputName.addEventListener('click', function() {\n                inputName.value = \"\";\n                inputName.style = \"color: black\";\n                infos.forEach(item => {\n                    item.textContent = \"\";\n                });\n                land.forEach(function(item) {\n                    item.style.fill = \"#ac9d93\"\n                });\n                img.setAttribute(\"src\", \"\");\n                img.style.boxShadow = '0 0 0 0';\n            })\n        }\n\n        const clickSubmit = () => {\n            submit.addEventListener('submit', function(e) {\n                e.preventDefault();\n                toTitleCase = str => {\n                    return str.replace(/\\w\\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });\n                };\n                const value = toTitleCase(inputName.value);\n                const selection = document.querySelector(`.map path[title=\"${value}\"]`) !== null;\n                if (!selection) {\n                    inputName.value = \"Invalid country name\";\n                    inputName.style = \"color: red\";\n                } else {\n                    inputName.value = \"Write country name:\";\n                    document.querySelector(`.map path[title=\"${value}\"]`).dispatchEvent(event);\n                }\n            })\n        }\n\n        markingCountry()\n        byInput();\n        clickSubmit();\n    }\n\n    window.setTimeout(() => {\n        worldMap();\n    }, 500);\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsYUFBYTtBQUNyRiw0RUFBNEUsZUFBZTtBQUMzRixpRkFBaUYsa0JBQWtCO0FBQ25HLHFGQUFxRixtQkFBbUI7QUFDeEcsOEVBQThFLGdCQUFnQjtBQUM5RixnRkFBZ0YsMEJBQTBCO0FBQzFHLGdGQUFnRiwyQkFBMkI7QUFDM0csb0ZBQW9GLG9DQUFvQztBQUN4SDtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0VBQWtFLEVBQUU7QUFDcEk7QUFDQTtBQUNBLDZFQUE2RSxNQUFNO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLCtEQUErRCxNQUFNO0FBQ3JFO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSgyKVwiKTtcbiAgICBjb25zdCByZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoMylcIik7XG4gICAgY29uc3Qgc3VicmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDQpXCIpO1xuICAgIGNvbnN0IG5hdGl2ZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoNSlcIik7XG4gICAgY29uc3QgY2FwaXRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg2KVwiKTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg3XCIpO1xuICAgIGNvbnN0IGN1cnJlbmN5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDgpXCIpO1xuICAgIGNvbnN0IHBvcHVsYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoOSlcIik7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvIGltZ1wiKTtcbiAgICBjb25zdCBpbmZvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvcycpO1xuXG4gICAgY29uc3Qgd29ybGRNYXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhbmQgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kJyk7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KFwiY2xpY2tcIiwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgbWFya2luZ0NvdW50cnkgPSAoKSA9PiB7XG4gICAgICAgICAgICBbLi4ubGFuZF0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiV3JpdGUgY291bnRyeSBuYW1lOlwiO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dE5hbWUuc3R5bGUgPSBcImNvbG9yOiBibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICBsYW5kLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5maWxsID0gXCIjYWM5ZDkzXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmZpbGwgPSBcImdyYXlcIjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJTb3V0aCBLb3JlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiS29yZWEgKFJlcHVibGljIG9mKVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIk5vcnRoIEtvcmVhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJLb3JlYSAoRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJSZXB1YmxpYyBvZiBDb25nb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiQ29uZ29cIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJEZW1vY3JhdGljIFJlcHVibGljIG9mIENvbmdvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJDb25nbyAoRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvbmFtZS9gICsgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRyeSA9IGRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIkluZGlhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeSA9IGRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuaW5uZXJIVE1MID0gYE5hbWU6IDxzcGFuIGNsYXNzPVwiaW5mXCI+JHtjb3VudHJ5Lm5hbWV9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpb24uaW5uZXJIVE1MID0gYFJlZ2lvbjogPHNwYW4gY2xhc3M9XCJpbmZcIj4ke2NvdW50cnkucmVnaW9ufTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicmVnaW9uLmlubmVySFRNTCA9IGBTdWJlZ2lvbjogPHNwYW4gY2xhc3M9XCJpbmZcIj4ke2NvdW50cnkuc3VicmVnaW9ufTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlTmFtZS5pbm5lckhUTUwgPSBgTmF0aXZlIG5hbWU6IDxzcGFuIGNsYXNzPVwiaW5mXCI+JHtjb3VudHJ5Lm5hdGl2ZU5hbWV9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXBpdGFsLmlubmVySFRNTCA9IGBDYXBpdGFsOiA8c3BhbiBjbGFzcz1cImluZlwiPiR7Y291bnRyeS5jYXBpdGFsfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UuaW5uZXJIVE1MID0gYExhbmd1YWdlOiA8c3BhbiBjbGFzcz1cImluZlwiPiR7Y291bnRyeS5sYW5ndWFnZXNbMF0ubmFtZX08L3NwYW4+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5LmlubmVySFRNTCA9IGBDdXJyZW5jeTogPHNwYW4gY2xhc3M9XCJpbmZcIj4ke2NvdW50cnkuY3VycmVuY2llc1swXS5jb2RlfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGlvbi5pbm5lckhUTUwgPSBgUG9wdWxhdGlvbjogPHNwYW4gY2xhc3M9XCJpbmZcIj4ke2NvdW50cnkucG9wdWxhdGlvbi50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjb3VudHJ5LmZsYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDNweCAzcHggZ3JheSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ5SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZS5zdHlsZSA9IFwiY29sb3I6IGJsYWNrXCI7XG4gICAgICAgICAgICAgICAgaW5mb3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGFuZC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5maWxsID0gXCIjYWM5ZDkzXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDAgMCc7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xpY2tTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0b1RpdGxlQ2FzZSA9IHN0ciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbih0eHQpIHsgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTsgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvVGl0bGVDYXNlKGlucHV0TmFtZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1hcCBwYXRoW3RpdGxlPVwiJHt2YWx1ZX1cIl1gKSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIkludmFsaWQgY291bnRyeSBuYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0TmFtZS5zdHlsZSA9IFwiY29sb3I6IHJlZFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiV3JpdGUgY291bnRyeSBuYW1lOlwiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFwIHBhdGhbdGl0bGU9XCIke3ZhbHVlfVwiXWApLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBtYXJraW5nQ291bnRyeSgpXG4gICAgICAgIGJ5SW5wdXQoKTtcbiAgICAgICAgY2xpY2tTdWJtaXQoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdvcmxkTWFwKCk7XG4gICAgfSwgNTAwKTtcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);