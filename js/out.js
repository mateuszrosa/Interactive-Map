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

eval("document.addEventListener('DOMContentLoaded', function() {\n\n    const submit = document.querySelector(\"form\");\n    const inputName = document.querySelector(\"input\");\n    const body = document.querySelector('body');\n    const name = document.querySelector(\"h3:nth-of-type(2)\");\n    const region = document.querySelector(\"h3:nth-of-type(3)\");\n    const subregion = document.querySelector(\"h3:nth-of-type(4)\");\n    const nativeName = document.querySelector(\"h3:nth-of-type(5)\");\n    const capital = document.querySelector(\"h3:nth-of-type(6)\");\n    const language = document.querySelector(\"h3:nth-of-type(7\");\n    const currency = document.querySelector(\"h3:nth-of-type(8)\");\n    const population = document.querySelector(\"h3:nth-of-type(9)\");\n    const img = document.querySelector(\".info img\");\n    const infos = document.querySelectorAll('.infos');\n\n    setTimeout(function() {\n\n\n        const land = body.querySelectorAll('.land');\n        const event = document.createEvent(\"Event\");\n        event.initEvent(\"click\", true, true);\n        [...land].forEach(function(item) {\n            item.addEventListener('click', function(e) {\n                inputName.value = \"Write country name:\";\n                land.forEach(function(item) {\n                    item.style.fill = \"#ac9d93\"\n                });\n                this.style.fill = \"gray\";\n                let value = this.getAttribute(\"title\");\n                if (value === \"South Korea\") {\n                    value = \"Korea (Republic of)\";\n                } else if (value === \"North Korea\") {\n                    value = \"Korea (Democratic People's Republic of)\";\n                } else if (value === \"Republic of Congo\") {\n                    value = \"Congo\";\n                } else if (value === \"Democratic Republic of Congo\") {\n                    value = \"Congo (Democratic Republic of the)\"\n                }\n                fetch(`https://restcountries.eu/rest/v2/name/` + value)\n                    .then(resp => {\n                        return resp.json()\n                    })\n                    .then(data => {\n                        let country = data[0];\n                        if (value === \"India\") {\n                            country = data[1];\n                        }\n                        name.textContent = \"Name: \" + country.name;\n                        region.textContent = \"Region: \" + country.region;\n                        subregion.textContent = \"Subregion: \" + country.subregion;\n                        nativeName.textContent = \"Native name: \" + country.nativeName;\n                        capital.textContent = \"Capital: \" + country.capital;\n                        language.textContent = \"Language: \" + country.languages[0].name;\n                        currency.textContent = \"Currency: \" + country.currencies[0].code;\n                        population.textContent = \"Population: \" + country.population.toLocaleString();\n                        img.setAttribute(\"src\", country.flag);\n                        img.style.boxShadow = '0 0 3px 3px gray';\n\n                    })\n            }, false);\n        })\n        inputName.addEventListener('click', () => {\n            inputName.value = \"\";\n            infos.forEach(item => {\n                item.textContent = \"\";\n            });\n            land.forEach(function(item) {\n                item.style.fill = \"#ac9d93\"\n            });\n            img.setAttribute(\"src\", \"\");\n            img.style.boxShadow = '0 0 0 0';\n        })\n\n        function clickSubmit(e) {\n            e.preventDefault();\n            toTitleCase = str => {\n                return str.replace(/\\w\\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });\n            };\n            const value1 = toTitleCase(inputName.value);\n            const selection = document.querySelector(`.map path[title=\"${value1}\"]`) !== null;\n            if (!selection) {\n                inputName.value = \"Invalid country name\";\n            } else {\n                inputName.value = \"Write country name:\";\n            }\n        }\n        submit.addEventListener('submit', clickSubmit);\n    }, 500);\n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxrRUFBa0UsRUFBRTtBQUNoSTtBQUNBO0FBQ0EseUVBQXlFLE9BQU87QUFDaEY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSgyKVwiKTtcbiAgICBjb25zdCByZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoMylcIik7XG4gICAgY29uc3Qgc3VicmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDQpXCIpO1xuICAgIGNvbnN0IG5hdGl2ZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoNSlcIik7XG4gICAgY29uc3QgY2FwaXRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg2KVwiKTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg3XCIpO1xuICAgIGNvbnN0IGN1cnJlbmN5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDgpXCIpO1xuICAgIGNvbnN0IHBvcHVsYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoOSlcIik7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvIGltZ1wiKTtcbiAgICBjb25zdCBpbmZvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvcycpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuXG4gICAgICAgIGNvbnN0IGxhbmQgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kJyk7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KFwiY2xpY2tcIiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIFsuLi5sYW5kXS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJXcml0ZSBjb3VudHJ5IG5hbWU6XCI7XG4gICAgICAgICAgICAgICAgbGFuZC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5maWxsID0gXCIjYWM5ZDkzXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLmZpbGwgPSBcImdyYXlcIjtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJTb3V0aCBLb3JlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJLb3JlYSAoUmVwdWJsaWMgb2YpXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJOb3J0aCBLb3JlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJLb3JlYSAoRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIlJlcHVibGljIG9mIENvbmdvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIkNvbmdvXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJEZW1vY3JhdGljIFJlcHVibGljIG9mIENvbmdvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIkNvbmdvIChEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvbmFtZS9gICsgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50cnkgPSBkYXRhWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIkluZGlhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5ID0gZGF0YVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiICsgY291bnRyeS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uLnRleHRDb250ZW50ID0gXCJSZWdpb246IFwiICsgY291bnRyeS5yZWdpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJyZWdpb24udGV4dENvbnRlbnQgPSBcIlN1YnJlZ2lvbjogXCIgKyBjb3VudHJ5LnN1YnJlZ2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU5hbWUudGV4dENvbnRlbnQgPSBcIk5hdGl2ZSBuYW1lOiBcIiArIGNvdW50cnkubmF0aXZlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcGl0YWwudGV4dENvbnRlbnQgPSBcIkNhcGl0YWw6IFwiICsgY291bnRyeS5jYXBpdGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UudGV4dENvbnRlbnQgPSBcIkxhbmd1YWdlOiBcIiArIGNvdW50cnkubGFuZ3VhZ2VzWzBdLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeS50ZXh0Q29udGVudCA9IFwiQ3VycmVuY3k6IFwiICsgY291bnRyeS5jdXJyZW5jaWVzWzBdLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0aW9uLnRleHRDb250ZW50ID0gXCJQb3B1bGF0aW9uOiBcIiArIGNvdW50cnkucG9wdWxhdGlvbi50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjb3VudHJ5LmZsYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgM3B4IDNweCBncmF5JztcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgaW5mb3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGFuZC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmZpbGwgPSBcIiNhYzlkOTNcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiXCIpO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMCAwJztcbiAgICAgICAgfSlcblxuICAgICAgICBmdW5jdGlvbiBjbGlja1N1Ym1pdChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b1RpdGxlQ2FzZSA9IHN0ciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uKHR4dCkgeyByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZTEgPSB0b1RpdGxlQ2FzZShpbnB1dE5hbWUudmFsdWUpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1hcCBwYXRoW3RpdGxlPVwiJHt2YWx1ZTF9XCJdYCkgIT09IG51bGw7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiSW52YWxpZCBjb3VudHJ5IG5hbWVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJXcml0ZSBjb3VudHJ5IG5hbWU6XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNsaWNrU3VibWl0KTtcbiAgICB9LCA1MDApO1xuXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);