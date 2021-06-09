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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/helloworld.js":
/*!*************************************!*\
  !*** ./js/components/helloworld.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return helloWorld; });\nfunction helloWorld(name)\r\n{\r\n    return `\r\n        <h1>Olá Mundo!</h1>\r\n        <h1>Você está no ${name}</h1>\r\n        <hr/>\r\n    `;\r\n};\r\n\n\n//# sourceURL=webpack:///./js/components/helloworld.js?");

/***/ }),

/***/ "./js/components/list.js":
/*!*******************************!*\
  !*** ./js/components/list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lista; });\nfunction lista(data) {\r\n    return `<ul>\r\n        ${data.map(pessoa => `<li>${pessoa.nome} - ${pessoa.idade}</li>`).join(' ')}\r\n    </ul>`;\r\n} \r\n\r\n// export const lista = data => {\r\n//     return `<ul>\r\n//         ${data.map(pessoa => `<li>${pessoa.nome} - ${pessoa.idade}</li>`).join(' ')}\r\n//     </ul>`;\r\n// } \r\n\r\n    \n\n//# sourceURL=webpack:///./js/components/list.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/list */ \"./js/components/list.js\");\n/* harmony import */ var _components_helloworld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/helloworld */ \"./js/components/helloworld.js\");\n/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/utils */ \"./js/modules/utils.js\");\n/* harmony import */ var _mock_pessoas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/pessoas.js */ \"./js/mock/pessoas.js\");\n// como foi exportada como default, posso usar qq nome.\n\n\n\n\n\n//console.log(helloworld2('Programador a bordo!'));\nconsole.log(Object(_modules_utils__WEBPACK_IMPORTED_MODULE_2__[\"maiorDeIdade\"])(10));\nconst { maiores, menores } = Object(_modules_utils__WEBPACK_IMPORTED_MODULE_2__[\"agrupaPorMaiorOuMenor\"])(_mock_pessoas_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nconst html = `\n  ${Object(_components_helloworld__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Programador a bordo!')}\n  <h3>Maiores</h3>\n  ${Object(_components_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(maiores)}\n  <h3>Menores</h3>\n  ${Object(_components_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menores)}`;\n\ndocument.querySelector('#app').innerHTML = html;\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/mock/pessoas.js":
/*!****************************!*\
  !*** ./js/mock/pessoas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n   const pessoas = [\r\n    {\r\n      nome: 'Michel',\r\n      idade: 35\r\n    },\r\n    {\r\n      nome: 'Moisés',\r\n      idade: 60\r\n    },\r\n    {\r\n      nome: 'Ana',\r\n      idade: 5\r\n    }\r\n  ];\r\n\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (pessoas);           \n\n//# sourceURL=webpack:///./js/mock/pessoas.js?");

/***/ }),

/***/ "./js/modules/utils.js":
/*!*****************************!*\
  !*** ./js/modules/utils.js ***!
  \*****************************/
/*! exports provided: maiorDeIdade, agrupaPorMaiorOuMenor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maiorDeIdade\", function() { return maiorDeIdade; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"agrupaPorMaiorOuMenor\", function() { return agrupaPorMaiorOuMenor; });\n// export const maiorDeIdade = idade => idade > 17;\r\n\r\n//  export const agrupaPorMaiorOuMenor = pessoas =>\r\n//          pessoas.reduce((acumulado, valor) => \r\n//          {\r\n//              const maiorOuMenor = valor.idade > 18 ? 'maiores' : 'menores';\r\n//              acumulado[maiorOuMenor].push(valor);\r\n//              return acumulado;\r\n//          }, { maiores:[], menores:[] });\r\n\r\nfunction maiorDeIdade(idade) { return idade > 17 };\r\n\r\nfunction agrupaPorMaiorOuMenor(pessoas){\r\n   return pessoas.reduce(function(acumulado, valor) {\r\n        const maiorOuMenor = valor.idade > 18 ? 'maiores' : 'menores';\r\n        acumulado[maiorOuMenor].push(valor);\r\n        return acumulado;\r\n    }, { maiores: [], menores: [] });\r\n};\n\n//# sourceURL=webpack:///./js/modules/utils.js?");

/***/ })

/******/ });