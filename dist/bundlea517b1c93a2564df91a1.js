/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/assets sync \\.(gif%7Cpng%7Cjpe?g%7Csvg)$":
      /*!********************************************************************!*\
  !*** ./src/assets/ sync nonrecursive \.(gif%7Cpng%7Cjpe?g%7Csvg)$ ***!
  \********************************************************************/
      /***/ (module) => {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        }
        webpackEmptyContext.keys = () => [];
        webpackEmptyContext.resolve = webpackEmptyContext;
        webpackEmptyContext.id =
          "./src/assets sync \\.(gif%7Cpng%7Cjpe?g%7Csvg)$";
        module.exports = webpackEmptyContext;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    const cache = {};
    function importAll(r) {
      // eslint-disable-next-line no-return-assign
      r.keys().forEach((key) => (cache[key] = r(key)));
    }
    const images = importAll(
      __webpack_require__("./src/assets sync \\.(gif%7Cpng%7Cjpe?g%7Csvg)$")
    );
    console.log("test");
    console.log("greg");
    console.log(images);
  })();

  /******/
})();
//# sourceMappingURL=bundlea517b1c93a2564df91a1.js.map
