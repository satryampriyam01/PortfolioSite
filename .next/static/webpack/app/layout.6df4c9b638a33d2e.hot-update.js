"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ad78e7cd02a5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/Y2NmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImFkNzhlN2NkMDJhNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _navLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navLink */ \"(app-pages-browser)/./src/components/navLink.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst links = [\n    {\n        url: \"/\",\n        title: \"Home\"\n    },\n    {\n        url: \"/about\",\n        title: \"About\"\n    },\n    {\n        url: \"/portfolio\",\n        title: \"Portfolio\"\n    },\n    {\n        url: \"/contact\",\n        title: \"Contact\"\n    },\n    {\n        url: \"https://drive.google.com/file/d/1fGeNT2Oxod-lFUWPsXhWTgsMXj8Hk3rh/view?usp=sharing\",\n        title: \"Resume\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const topVariants = {\n        closed: {\n            rotate: 0\n        },\n        opened: {\n            rotate: 45,\n            backgroundColor: \"rgb(255,255,255)\"\n        }\n    };\n    const centerVariants = {\n        closed: {\n            opacity: 1\n        },\n        opened: {\n            opacity: 0\n        }\n    };\n    const bottomVariants = {\n        closed: {\n            rotate: 0\n        },\n        opened: {\n            rotate: -45,\n            backgroundColor: \"rgb(255,255,255)\"\n        }\n    };\n    const listVariants = {\n        closed: {\n            x: \"100vw\"\n        },\n        opened: {\n            x: 0,\n            transition: {\n                when: \"beforeChildren\",\n                staggerChildren: 0.2\n            }\n        }\n    };\n    const listItemVariants = {\n        closed: {\n            x: -10,\n            opacity: 0\n        },\n        opened: {\n            x: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex gap-4 w-1/3\",\n                children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        link: link\n                    }, link.title, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden lg:flex xl:w-1/3 xl:justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    className: \"text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-white mr-1\",\n                            children: \"Satyam\"\n                        }, void 0, false, {\n                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"w-12 h-8 rounded bg-white text-black flex items-center justify-center\",\n                            children: \"SDE\"\n                        }, void 0, false, {\n                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex gap-6 w-1/8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"https://github.com/satryampriyam01\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/github.png\",\n                            alt: \"\",\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"https://www.linkedin.com/in/satyampriyam01/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/linkedin.png\",\n                            alt: \"\",\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-10 h-8 flex flex-col justify-between z-50 relative\",\n                        onClick: ()=>setOpen((prev)=>!prev),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                variants: topVariants,\n                                animate: open ? \"opened\" : \"closed\",\n                                className: \"w-10 h-1 bg-black rounded origin-left\"\n                            }, void 0, false, {\n                                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                variants: centerVariants,\n                                animate: open ? \"opened\" : \"closed\",\n                                className: \"w-10 h-1 bg-black rounded\"\n                            }, void 0, false, {\n                                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                variants: bottomVariants,\n                                animate: open ? \"opened\" : \"closed\",\n                                className: \"w-10 h-1 bg-black rounded origin-left\"\n                            }, void 0, false, {\n                                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined),\n                    open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        variants: listVariants,\n                        initial: \"closed\",\n                        animate: \"opened\",\n                        className: \"absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40\",\n                        children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                variants: listItemVariants,\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: link.url,\n                                    children: link.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, link.title, false, {\n                                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                                lineNumber: 135,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/components/navbar.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUrQjtBQUNGO0FBQ0k7QUFDRDtBQUNPO0FBRXZDLE1BQU1LLFFBQVE7SUFDWjtRQUFFQyxLQUFLO1FBQUtDLE9BQU87SUFBTztJQUMxQjtRQUFFRCxLQUFLO1FBQVVDLE9BQU87SUFBUTtJQUNoQztRQUFFRCxLQUFLO1FBQWNDLE9BQU87SUFBWTtJQUN4QztRQUFFRCxLQUFLO1FBQVlDLE9BQU87SUFBVTtJQUNwQztRQUNFRCxLQUFJO1FBQXNGQyxPQUFNO0lBQ2xHO0NBQ0Q7QUFFRCxNQUFNQyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNUyxjQUFjO1FBQ2xCQyxRQUFRO1lBQ05DLFFBQVE7UUFDVjtRQUNBQyxRQUFRO1lBQ05ELFFBQVE7WUFDUkUsaUJBQWlCO1FBQ25CO0lBQ0Y7SUFDQSxNQUFNQyxpQkFBaUI7UUFDckJKLFFBQVE7WUFDTkssU0FBUztRQUNYO1FBQ0FILFFBQVE7WUFDTkcsU0FBUztRQUNYO0lBQ0Y7SUFFQSxNQUFNQyxpQkFBaUI7UUFDckJOLFFBQVE7WUFDTkMsUUFBUTtRQUNWO1FBQ0FDLFFBQVE7WUFDTkQsUUFBUSxDQUFDO1lBQ1RFLGlCQUFpQjtRQUNuQjtJQUNGO0lBRUEsTUFBTUksZUFBZTtRQUNuQlAsUUFBUTtZQUNOUSxHQUFHO1FBQ0w7UUFDQU4sUUFBUTtZQUNOTSxHQUFHO1lBQ0hDLFlBQVk7Z0JBQ1ZDLE1BQU07Z0JBQ05DLGlCQUFpQjtZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxtQkFBbUI7UUFDdkJaLFFBQVE7WUFDTlEsR0FBRyxDQUFDO1lBQ0pILFNBQVM7UUFDWDtRQUNBSCxRQUFRO1lBQ05NLEdBQUc7WUFDSEgsU0FBUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNackIsTUFBTXNCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ3pCLGdEQUFPQTt3QkFBQ3lCLE1BQU1BO3VCQUFXQSxLQUFLckIsS0FBSzs7Ozs7Ozs7OzswQkFJeEMsOERBQUNrQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3pCLGlEQUFJQTtvQkFDSDRCLE1BQUs7b0JBQ0xILFdBQVU7O3NDQUVWLDhEQUFDSTs0QkFBS0osV0FBVTtzQ0FBa0I7Ozs7OztzQ0FDbEMsOERBQUNJOzRCQUFLSixXQUFVO3NDQUF3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTTVGLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUN6QixpREFBSUE7d0JBQUM0QixNQUFLO2tDQUNULDRFQUFDN0Isa0RBQUtBOzRCQUFDK0IsS0FBSTs0QkFBY0MsS0FBSTs0QkFBR0MsT0FBTzs0QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDakMsaURBQUlBO3dCQUFDNEIsTUFBSztrQ0FDVCw0RUFBQzdCLGtEQUFLQTs0QkFBQytCLEtBQUk7NEJBQWdCQyxLQUFJOzRCQUFHQyxPQUFPOzRCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJekQsOERBQUNUO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ1M7d0JBQ0NULFdBQVU7d0JBQ1ZVLFNBQVMsSUFBTTFCLFFBQVEsQ0FBQzJCLE9BQVMsQ0FBQ0E7OzBDQUVsQyw4REFBQ2pDLGlEQUFNQSxDQUFDcUIsR0FBRztnQ0FDVGEsVUFBVTNCO2dDQUNWNEIsU0FBUzlCLE9BQU8sV0FBVztnQ0FDM0JpQixXQUFVOzs7Ozs7MENBRVosOERBQUN0QixpREFBTUEsQ0FBQ3FCLEdBQUc7Z0NBQ1RhLFVBQVV0QjtnQ0FDVnVCLFNBQVM5QixPQUFPLFdBQVc7Z0NBQzNCaUIsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDdEIsaURBQU1BLENBQUNxQixHQUFHO2dDQUNUYSxVQUFVcEI7Z0NBQ1ZxQixTQUFTOUIsT0FBTyxXQUFXO2dDQUMzQmlCLFdBQVU7Ozs7Ozs7Ozs7OztvQkFJYmpCLHNCQUNDLDhEQUFDTCxpREFBTUEsQ0FBQ3FCLEdBQUc7d0JBQ1RhLFVBQVVuQjt3QkFDVnFCLFNBQVE7d0JBQ1JELFNBQVE7d0JBQ1JiLFdBQVU7a0NBRVRyQixNQUFNc0IsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDeEIsaURBQU1BLENBQUNxQixHQUFHO2dDQUNUYSxVQUFVZDtnQ0FDVkUsV0FBVTswQ0FHViw0RUFBQ3pCLGlEQUFJQTtvQ0FBQzRCLE1BQU1ELEtBQUt0QixHQUFHOzhDQUFHc0IsS0FBS3JCLEtBQUs7Ozs7OzsrQkFGNUJxQixLQUFLckIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUvQjtHQWpJTUM7S0FBQUE7QUFtSU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzeD82NGNmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2TGluayBmcm9tIFwiLi9uYXZMaW5rXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyB1cmw6IFwiL1wiLCB0aXRsZTogXCJIb21lXCIgfSxcbiAgeyB1cmw6IFwiL2Fib3V0XCIsIHRpdGxlOiBcIkFib3V0XCIgfSxcbiAgeyB1cmw6IFwiL3BvcnRmb2xpb1wiLCB0aXRsZTogXCJQb3J0Zm9saW9cIiB9LFxuICB7IHVybDogXCIvY29udGFjdFwiLCB0aXRsZTogXCJDb250YWN0XCIgfSxcbiAge1xuICAgIHVybDpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWZHZU5UMk94b2QtbEZVV1BzWGhXVGdzTVhqOEhrM3JoL3ZpZXc/dXNwPXNoYXJpbmdcIiwgdGl0bGU6XCJSZXN1bWVcIlxuICB9LFxuXTtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9wVmFyaWFudHMgPSB7XG4gICAgY2xvc2VkOiB7XG4gICAgICByb3RhdGU6IDAsXG4gICAgfSxcbiAgICBvcGVuZWQ6IHtcbiAgICAgIHJvdGF0ZTogNDUsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwyNTUsMjU1KVwiLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IGNlbnRlclZhcmlhbnRzID0ge1xuICAgIGNsb3NlZDoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICB9LFxuICAgIG9wZW5lZDoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGJvdHRvbVZhcmlhbnRzID0ge1xuICAgIGNsb3NlZDoge1xuICAgICAgcm90YXRlOiAwLFxuICAgIH0sXG4gICAgb3BlbmVkOiB7XG4gICAgICByb3RhdGU6IC00NSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LDI1NSwyNTUpXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBsaXN0VmFyaWFudHMgPSB7XG4gICAgY2xvc2VkOiB7XG4gICAgICB4OiBcIjEwMHZ3XCIsXG4gICAgfSxcbiAgICBvcGVuZWQ6IHtcbiAgICAgIHg6IDAsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHdoZW46IFwiYmVmb3JlQ2hpbGRyZW5cIixcbiAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgbGlzdEl0ZW1WYXJpYW50cyA9IHtcbiAgICBjbG9zZWQ6IHtcbiAgICAgIHg6IC0xMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSxcbiAgICBvcGVuZWQ6IHtcbiAgICAgIHg6IDAsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBzbTpweC04IG1kOnB4LTEyIGxnOnB4LTIwIHhsOnB4LTQ4IHRleHQteGxcIj5cbiAgICAgIHsvKiBMSU5LUyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggZ2FwLTQgdy0xLzNcIj5cbiAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgIDxOYXZMaW5rIGxpbms9e2xpbmt9IGtleT17bGluay50aXRsZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBMT0dPICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW4gbGc6ZmxleCB4bDp3LTEvMyB4bDpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGJnLWJsYWNrIHJvdW5kZWQtbWQgcC0xIGZvbnQtc2VtaWJvbGQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtci0xXCI+U2F0eWFtPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMTIgaC04IHJvdW5kZWQgYmctd2hpdGUgdGV4dC1ibGFjayBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgU0RFXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBTT0NJQUwgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGdhcC02IHctMS84XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2F0cnlhbXByaXlhbTAxXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9naXRodWIucG5nXCIgYWx0PVwiXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2F0eWFtcHJpeWFtMDEvXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9saW5rZWRpbi5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17MjR9IGhlaWdodD17MjR9IC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIFJFU1BPTlNJVkUgTUVOVSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICAgIHsvKiBNRU5VIEJVVFRPTiAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC04IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHotNTAgcmVsYXRpdmVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17dG9wVmFyaWFudHN9XG4gICAgICAgICAgICBhbmltYXRlPXtvcGVuID8gXCJvcGVuZWRcIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMSBiZy1ibGFjayByb3VuZGVkIG9yaWdpbi1sZWZ0XCJcbiAgICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17Y2VudGVyVmFyaWFudHN9XG4gICAgICAgICAgICBhbmltYXRlPXtvcGVuID8gXCJvcGVuZWRcIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMSBiZy1ibGFjayByb3VuZGVkXCJcbiAgICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17Ym90dG9tVmFyaWFudHN9XG4gICAgICAgICAgICBhbmltYXRlPXtvcGVuID8gXCJvcGVuZWRcIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMSBiZy1ibGFjayByb3VuZGVkIG9yaWdpbi1sZWZ0XCJcbiAgICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgey8qIE1FTlUgTElTVCAqL31cbiAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17bGlzdFZhcmlhbnRzfVxuICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICAgICAgICBhbmltYXRlPVwib3BlbmVkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLXNjcmVlbiBiZy1ibGFjayB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC04IHRleHQtNHhsIHotNDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17bGlzdEl0ZW1WYXJpYW50c31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgIGtleT17bGluay50aXRsZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsudXJsfT57bGluay50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVN0YXRlIiwiTmF2TGluayIsIm1vdGlvbiIsImxpbmtzIiwidXJsIiwidGl0bGUiLCJOYXZiYXIiLCJvcGVuIiwic2V0T3BlbiIsInRvcFZhcmlhbnRzIiwiY2xvc2VkIiwicm90YXRlIiwib3BlbmVkIiwiYmFja2dyb3VuZENvbG9yIiwiY2VudGVyVmFyaWFudHMiLCJvcGFjaXR5IiwiYm90dG9tVmFyaWFudHMiLCJsaXN0VmFyaWFudHMiLCJ4IiwidHJhbnNpdGlvbiIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJsaXN0SXRlbVZhcmlhbnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibGluayIsImhyZWYiLCJzcGFuIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJvbkNsaWNrIiwicHJldiIsInZhcmlhbnRzIiwiYW5pbWF0ZSIsImluaXRpYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar.jsx\n"));

/***/ })

});