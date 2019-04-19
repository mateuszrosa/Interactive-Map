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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.addEventListener('DOMContentLoaded', function () {

    var submit = document.querySelector("form");
    var input = document.querySelector("input");
    var body = document.querySelector('body');
    var name = document.querySelector("h3:nth-of-type(2)");
    var region = document.querySelector("h3:nth-of-type(3)");
    var subregion = document.querySelector("h3:nth-of-type(4)");
    var nativeName = document.querySelector("h3:nth-of-type(5)");
    var capital = document.querySelector("h3:nth-of-type(6)");
    var language = document.querySelector("h3:nth-of-type(7");
    var currency = document.querySelector("h3:nth-of-type(8)");
    var population = document.querySelector("h3:nth-of-type(9)");
    var img = document.querySelector(".info img");

    body.addEventListener('mouseenter', function () {
        var land = body.querySelectorAll('.land');
        var event = document.createEvent("Event");
        event.initEvent("click", true, true);
        [].concat(_toConsumableArray(land)).map(function (item) {
            item.addEventListener('click', function (e) {
                input.value = "Write country name:";
                land.forEach(function (item) {
                    item.style.fill = "#ac9d93";
                });
                this.style.fill = "gray";
                var value = this.getAttribute("title");
                console.log(value);
                if (value === "South Korea") {
                    value = "Korea (Republic of)";
                } else if (value === "North Korea") {
                    value = "Korea (Democratic People's Republic of)";
                } else if (value === "Republic of Congo") {
                    value = "Congo";
                } else if (value === "Democratic Republic of Congo") {
                    value = "Congo (Democratic Republic of the)";
                }
                fetch("https://restcountries.eu/rest/v2/name/" + value).then(function (resp) {
                    return resp.json();
                }).then(function (data) {
                    var country = data[0];
                    if (value === "India") {
                        country = data[1];
                    }
                    name.textContent = "Name: " + country.name;
                    region.textContent = "Region: " + country.region;
                    subregion.textContent = "Subregion: " + country.subregion;
                    nativeName.textContent = "Native name: " + data[0].nativeName;
                    capital.textContent = "Capital: " + country.capital;
                    language.textContent = "Language: " + country.languages[0].name;
                    currency.textContent = "Currency: " + country.currencies[0].code;
                    population.textContent = "Population: " + country.population.toLocaleString();
                    img.setAttribute("src", country.flag);
                    img.style.boxShadow = '0 0 3px 3px gray';
                });
            }, false);
        });
        input.addEventListener('click', function () {
            input.value = "";
        });
        submit.addEventListener('submit', function (e) {
            toTitleCase = function toTitleCase(str) {
                return str.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            };
            e.preventDefault();
            var value = toTitleCase(input.value);
            document.querySelector('div.map path[title="' + value + '"]').dispatchEvent(event);
        });
    });
});

/***/ })
/******/ ]);