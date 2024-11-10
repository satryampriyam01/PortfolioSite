"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/portfolio/page",{

/***/ "(app-pages-browser)/./src/app/portfolio/page.jsx":
/*!************************************!*\
  !*** ./src/app/portfolio/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst items = [\n    {\n        id: 1,\n        color: \"from-blue-300 to-violet-300\",\n        title: \"AtomToByte\",\n        desc: \"Developed a full-stack web application for NGO AtomToByte, featuring a responsive frontend design to optimize user experience. The application facilitates seamless event communication and enhances collaboration by leveraging modern web technologies.\",\n        img: \"/AtomToByte.png\",\n        link: \"https://atomtobyte.netlify.app/\"\n    },\n    {\n        id: 2,\n        color: \"from-red-300 to-blue-300\",\n        title: \"OpenD\",\n        desc: \"Built a full-stack NFT marketplace on the Internet Computer platform using React.js, JavaScript, Motoko, using Web3 technology to enable users to buy and sell NFTs\",\n        img: \"/OpenD.jpeg\",\n        link: \"https://github.com/satryampriyam01/OpenD\"\n    },\n    {\n        id: 3,\n        color: \"from-violet-300 to-purple-300\",\n        title: \"SplitExpense\",\n        desc: \"Devised microservices using Spring Boot (Backend), MongoDB, Elastic Search to deliver RESTful APIs for user management and expense splitting\tEngineered robust back-end functionalities that enabled the creation of over 150 user groups and facilitated real-time balance tracking.\",\n        img: \"/splitExpense.webp\",\n        link: \"https://lama.dev\"\n    },\n    {\n        id: 4,\n        color: \"from-purple-300 to-red-300\",\n        title: \"Imager\",\n        desc: \"An image processing app with a GUI using Java, Swing and Junit, designed as an Adobe-like clone, providing users with functionalities such as image compression, blurring, color correction, and more. Built with Haar wavelet implementation, Gaussian functions, and various mathematical operations. \",\n        img: \"/imager.gif\",\n        link: \"https://lama.dev\"\n    },\n    {\n        id: 5,\n        color: \"from-pink-300 to-red-300\",\n        title: \"My Portfolio Website\",\n        desc: \"Created a personal portfolio using Next.js 13 with advanced animations via Framer Motion, SMTP API integration, and Tailwind CSS.\",\n        img: \"/PortfolioWebsite.jpeg\",\n        link: \"https://abhinavdholi.com/\"\n    },\n    {\n        id: 6,\n        color: \"from-grey-300 to-black-800\",\n        title: \"More project\",\n        desc: \"Take a dive into my GitHub wonderland! From full-stack web escapades to AI-fueled adventures, explore the wild variety of projects I've tackled—and probably still am as you read this! Who knows, you might just catch me mid-debug!\",\n        img: \"/Github.jpeg\",\n        link: \"https://github.com/satryampriyam01\"\n    }\n];\nconst PortfolioPage = ()=>{\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: ref\n    });\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"0%\",\n        \"-85%\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        className: \"h-full\",\n        initial: {\n            y: \"-200vh\"\n        },\n        animate: {\n            y: \"0%\"\n        },\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[600vh] relative\",\n                ref: ref,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center\",\n                        children: \"My Works\"\n                    }, void 0, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sticky top-0 flex h-screen gap-4 items-center overflow-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            style: {\n                                x\n                            },\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-screen w-screen flex items-center justify-center bg-gradient-to-r \".concat(item.color),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col gap-8 text-white\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    className: \"text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl\",\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                        src: item.img,\n                                                        alt: \"\",\n                                                        fill: true\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]\",\n                                                    children: item.desc\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    href: item.link,\n                                                    className: \"flex justify-end\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded\",\n                                                        children: \"View the Repository/Demo\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, item.id, false, {\n                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen h-screen flex flex-col gap-16 items-center justify-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-8xl\",\n                        children: \"Do you have a project?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.svg, {\n                                animate: {\n                                    rotate: 360\n                                },\n                                transition: {\n                                    duration: 8,\n                                    ease: \"linear\",\n                                    repeat: Infinity\n                                },\n                                viewBox: \"0 0 300 300\",\n                                className: \"w-64 h-64 md:w-[500px] md:h-[500px] \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            id: \"circlePath\",\n                                            d: \"M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                        fill: \"#000\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textPath\", {\n                                            xlinkHref: \"#circlePath\",\n                                            className: \"text-xl\",\n                                            children: \"Summer' 25 / Full Time Opportunities /\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/contact\",\n                                className: \"w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center\",\n                                children: \"Hire Me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PortfolioPage, \"IDWZ1rwRGGLMN8cPwdaVvM3r59c=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = PortfolioPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortfolioPage);\nvar _c;\n$RefreshReg$(_c, \"PortfolioPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9ydGZvbGlvL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dFO0FBQ2pDO0FBQ0Y7QUFDRTtBQUUvQixNQUFNTSxRQUFRO0lBQ1o7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsS0FBSztRQUNMQyxNQUFNO0lBQ1I7SUFFQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsS0FBSztRQUNMQyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsTUFBTTtJQUNSO0NBRUQ7QUFFRCxNQUFNQyxnQkFBZ0I7O0lBQ3BCLE1BQU1DLE1BQU1ULDZDQUFNQTtJQUVsQixNQUFNLEVBQUVVLGVBQWUsRUFBRSxHQUFHZCx3REFBU0EsQ0FBQztRQUFFZSxRQUFRRjtJQUFJO0lBQ3BELE1BQU1HLElBQUlmLDJEQUFZQSxDQUFDYSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQU07S0FBTztJQUU5RCxxQkFDRSw4REFBQ2YsaURBQU1BLENBQUNrQixHQUFHO1FBQ1RDLFdBQVU7UUFDVkMsU0FBUztZQUFFQyxHQUFHO1FBQVM7UUFDdkJDLFNBQVM7WUFBRUQsR0FBRztRQUFLO1FBQ25CRSxZQUFZO1lBQUVDLFVBQVU7UUFBRTs7MEJBRTFCLDhEQUFDTjtnQkFBSUMsV0FBVTtnQkFBcUJMLEtBQUtBOztrQ0FDdkMsOERBQUNJO3dCQUFJQyxXQUFVO2tDQUFzRjs7Ozs7O2tDQUdyRyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNuQixpREFBTUEsQ0FBQ2tCLEdBQUc7NEJBQUNPLE9BQU87Z0NBQUVSOzRCQUFFOzRCQUFHRSxXQUFVOzs4Q0FDbEMsOERBQUNEO29DQUFJQyxXQUFVOzs7Ozs7Z0NBQ2RiLE1BQU1vQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNUO3dDQUNDQyxXQUFXLHVFQUFrRixPQUFYUSxLQUFLbkIsS0FBSztrREFHNUYsNEVBQUNVOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1M7b0RBQUdULFdBQVU7OERBQ1hRLEtBQUtsQixLQUFLOzs7Ozs7OERBRWIsOERBQUNTO29EQUFJQyxXQUFVOzhEQUNiLDRFQUFDaEIsa0RBQUtBO3dEQUFDMEIsS0FBS0YsS0FBS2hCLEdBQUc7d0RBQUVtQixLQUFJO3dEQUFHQyxJQUFJOzs7Ozs7Ozs7Ozs4REFFbkMsOERBQUNDO29EQUFFYixXQUFVOzhEQUNWUSxLQUFLakIsSUFBSTs7Ozs7OzhEQUVaLDhEQUFDTixpREFBSUE7b0RBQUM2QixNQUFNTixLQUFLZixJQUFJO29EQUFFTyxXQUFVOzhEQUMvQiw0RUFBQ2U7d0RBQU9mLFdBQVU7a0VBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FicEhRLEtBQUtwQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXFCdEIsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1M7d0JBQUdULFdBQVU7a0NBQVc7Ozs7OztrQ0FDekIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ25CLGlEQUFNQSxDQUFDbUMsR0FBRztnQ0FDVGIsU0FBUztvQ0FBRWMsUUFBUTtnQ0FBSTtnQ0FDdkJiLFlBQVk7b0NBQUVDLFVBQVU7b0NBQUdhLE1BQU07b0NBQVVDLFFBQVFDO2dDQUFTO2dDQUM1REMsU0FBUTtnQ0FDUnJCLFdBQVU7O2tEQUVWLDhEQUFDc0I7a0RBQ0MsNEVBQUNDOzRDQUNDbkMsSUFBRzs0Q0FDSG9DLEdBQUU7Ozs7Ozs7Ozs7O2tEQUdOLDhEQUFDQzt3Q0FBS2IsTUFBSztrREFDVCw0RUFBQ2M7NENBQVNDLFdBQVU7NENBQWMzQixXQUFVO3NEQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLMUQsOERBQUNmLGlEQUFJQTtnQ0FDSDZCLE1BQUs7Z0NBQ0xkLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBM0VNTjs7UUFHd0JaLG9EQUFTQTtRQUMzQkMsdURBQVlBOzs7S0FKbEJXO0FBNkVOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9ydGZvbGlvL3BhZ2UuanN4PzAwMGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgY29sb3I6IFwiZnJvbS1ibHVlLTMwMCB0by12aW9sZXQtMzAwXCIsXG4gICAgdGl0bGU6IFwiQXRvbVRvQnl0ZVwiLFxuICAgIGRlc2M6IFwiRGV2ZWxvcGVkIGEgZnVsbC1zdGFjayB3ZWIgYXBwbGljYXRpb24gZm9yIE5HTyBBdG9tVG9CeXRlLCBmZWF0dXJpbmcgYSByZXNwb25zaXZlIGZyb250ZW5kIGRlc2lnbiB0byBvcHRpbWl6ZSB1c2VyIGV4cGVyaWVuY2UuIFRoZSBhcHBsaWNhdGlvbiBmYWNpbGl0YXRlcyBzZWFtbGVzcyBldmVudCBjb21tdW5pY2F0aW9uIGFuZCBlbmhhbmNlcyBjb2xsYWJvcmF0aW9uIGJ5IGxldmVyYWdpbmcgbW9kZXJuIHdlYiB0ZWNobm9sb2dpZXMuXCIsXG4gICAgaW1nOiBcIi9BdG9tVG9CeXRlLnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9hdG9tdG9ieXRlLm5ldGxpZnkuYXBwL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgY29sb3I6IFwiZnJvbS1yZWQtMzAwIHRvLWJsdWUtMzAwXCIsXG4gICAgdGl0bGU6IFwiT3BlbkRcIixcbiAgICBkZXNjOiBcIkJ1aWx0IGEgZnVsbC1zdGFjayBORlQgbWFya2V0cGxhY2Ugb24gdGhlIEludGVybmV0IENvbXB1dGVyIHBsYXRmb3JtIHVzaW5nIFJlYWN0LmpzLCBKYXZhU2NyaXB0LCBNb3Rva28sIHVzaW5nIFdlYjMgdGVjaG5vbG9neSB0byBlbmFibGUgdXNlcnMgdG8gYnV5IGFuZCBzZWxsIE5GVHNcIixcbiAgICBpbWc6IFwiL09wZW5ELmpwZWdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYXRyeWFtcHJpeWFtMDEvT3BlbkRcIixcbiAgfSxcbiAgXG4gIHtcbiAgICBpZDogMyxcbiAgICBjb2xvcjogXCJmcm9tLXZpb2xldC0zMDAgdG8tcHVycGxlLTMwMFwiLFxuICAgIHRpdGxlOiBcIlNwbGl0RXhwZW5zZVwiLFxuICAgIGRlc2M6IFwiRGV2aXNlZCBtaWNyb3NlcnZpY2VzIHVzaW5nIFNwcmluZyBCb290IChCYWNrZW5kKSwgTW9uZ29EQiwgRWxhc3RpYyBTZWFyY2ggdG8gZGVsaXZlciBSRVNUZnVsIEFQSXMgZm9yIHVzZXIgbWFuYWdlbWVudCBhbmQgZXhwZW5zZSBzcGxpdHRpbmdcdEVuZ2luZWVyZWQgcm9idXN0IGJhY2stZW5kIGZ1bmN0aW9uYWxpdGllcyB0aGF0IGVuYWJsZWQgdGhlIGNyZWF0aW9uIG9mIG92ZXIgMTUwIHVzZXIgZ3JvdXBzIGFuZCBmYWNpbGl0YXRlZCByZWFsLXRpbWUgYmFsYW5jZSB0cmFja2luZy5cIixcbiAgICBpbWc6IFwiL3NwbGl0RXhwZW5zZS53ZWJwXCIsXG4gICAgbGluazogXCJodHRwczovL2xhbWEuZGV2XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBjb2xvcjogXCJmcm9tLXB1cnBsZS0zMDAgdG8tcmVkLTMwMFwiLFxuICAgIHRpdGxlOiBcIkltYWdlclwiLFxuICAgIGRlc2M6IFwiQW4gaW1hZ2UgcHJvY2Vzc2luZyBhcHAgd2l0aCBhIEdVSSB1c2luZyBKYXZhLCBTd2luZyBhbmQgSnVuaXQsIGRlc2lnbmVkIGFzIGFuIEFkb2JlLWxpa2UgY2xvbmUsIHByb3ZpZGluZyB1c2VycyB3aXRoIGZ1bmN0aW9uYWxpdGllcyBzdWNoIGFzIGltYWdlIGNvbXByZXNzaW9uLCBibHVycmluZywgY29sb3IgY29ycmVjdGlvbiwgYW5kIG1vcmUuIEJ1aWx0IHdpdGggSGFhciB3YXZlbGV0IGltcGxlbWVudGF0aW9uLCBHYXVzc2lhbiBmdW5jdGlvbnMsIGFuZCB2YXJpb3VzIG1hdGhlbWF0aWNhbCBvcGVyYXRpb25zLiBcIixcbiAgICBpbWc6IFwiL2ltYWdlci5naWZcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vbGFtYS5kZXZcIixcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGNvbG9yOiBcImZyb20tcGluay0zMDAgdG8tcmVkLTMwMFwiLFxuICAgIHRpdGxlOiBcIk15IFBvcnRmb2xpbyBXZWJzaXRlXCIsXG4gICAgZGVzYzogXCJDcmVhdGVkIGEgcGVyc29uYWwgcG9ydGZvbGlvIHVzaW5nIE5leHQuanMgMTMgd2l0aCBhZHZhbmNlZCBhbmltYXRpb25zIHZpYSBGcmFtZXIgTW90aW9uLCBTTVRQIEFQSSBpbnRlZ3JhdGlvbiwgYW5kIFRhaWx3aW5kIENTUy5cIixcbiAgICBpbWc6IFwiL1BvcnRmb2xpb1dlYnNpdGUuanBlZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9hYmhpbmF2ZGhvbGkuY29tL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgY29sb3I6IFwiZnJvbS1ncmV5LTMwMCB0by1ibGFjay04MDBcIixcbiAgICB0aXRsZTogXCJNb3JlIHByb2plY3RcIixcbiAgICBkZXNjOiBcIlRha2UgYSBkaXZlIGludG8gbXkgR2l0SHViIHdvbmRlcmxhbmQhIEZyb20gZnVsbC1zdGFjayB3ZWIgZXNjYXBhZGVzIHRvIEFJLWZ1ZWxlZCBhZHZlbnR1cmVzLCBleHBsb3JlIHRoZSB3aWxkIHZhcmlldHkgb2YgcHJvamVjdHMgSSd2ZSB0YWNrbGVk4oCUYW5kIHByb2JhYmx5IHN0aWxsIGFtIGFzIHlvdSByZWFkIHRoaXMhIFdobyBrbm93cywgeW91IG1pZ2h0IGp1c3QgY2F0Y2ggbWUgbWlkLWRlYnVnIVwiLFxuICAgIGltZzogXCIvR2l0aHViLmpwZWdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYXRyeWFtcHJpeWFtMDFcIixcbiAgfSxcblxuXTtcblxuY29uc3QgUG9ydGZvbGlvUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7IHRhcmdldDogcmVmIH0pO1xuICBjb25zdCB4ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbXCIwJVwiLCBcIi04NSVcIl0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImgtZnVsbFwiXG4gICAgICBpbml0aWFsPXt7IHk6IFwiLTIwMHZoXCIgfX1cbiAgICAgIGFuaW1hdGU9e3sgeTogXCIwJVwiIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs2MDB2aF0gcmVsYXRpdmVcIiByZWY9e3JlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1bY2FsYygxMDB2aC02cmVtKV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC04eGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBNeSBXb3Jrc1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgZmxleCBoLXNjcmVlbiBnYXAtNCBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgc3R5bGU9e3sgeCB9fSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtMzAwIHRvLXJlZC0zMDBcIiAvPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JhZGllbnQtdG8tciAke2l0ZW0uY29sb3J9YH1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTggdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1kOnRleHQtNHhsIGxnOnRleHQtNnhsIHhsOnRleHQtOHhsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy04MCBoLTU2IG1kOnctOTYgbWQ6aC02NCBsZzp3LVs1MDBweF0gbGc6aC1bMzUwcHhdIHhsOnctWzYwMHB4XSB4bDpoLVs0MjBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWd9IGFsdD1cIlwiIGZpbGwgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy04MCBtZDp3OTYgbGc6dy1bNTAwcHhdIGxnOnRleHQtbGcgeGw6dy1bNjAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2N9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmxpbmt9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgdGV4dC1zbSBtZDpwLTQgbWQ6dGV4dC1tZCBsZzpwLTggbGc6dGV4dC1sZyBiZy13aGl0ZSB0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGQgbS00IHJvdW5kZWRcIj5WaWV3IHRoZSBSZXBvc2l0b3J5L0RlbW88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGZsZXggZmxleC1jb2wgZ2FwLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC04eGxcIj5EbyB5b3UgaGF2ZSBhIHByb2plY3Q/PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxtb3Rpb24uc3ZnXG4gICAgICAgICAgICBhbmltYXRlPXt7IHJvdGF0ZTogMzYwIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiA4LCBlYXNlOiBcImxpbmVhclwiLCByZXBlYXQ6IEluZmluaXR5IH19XG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwMCAzMDBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02NCBoLTY0IG1kOnctWzUwMHB4XSBtZDpoLVs1MDBweF0gXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBpZD1cImNpcmNsZVBhdGhcIlxuICAgICAgICAgICAgICAgIGQ9XCJNIDE1MCwgMTUwIG0gLTYwLCAwIGEgNjAsNjAgMCAwLDEgMTIwLDAgYSA2MCw2MCAwIDAsMSAtMTIwLDAgXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCIjMDAwXCI+XG4gICAgICAgICAgICAgIDx0ZXh0UGF0aCB4bGlua0hyZWY9XCIjY2lyY2xlUGF0aFwiIGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgICAgICAgICAgICBTdW1tZXInIDI1IC8gRnVsbCBUaW1lIE9wcG9ydHVuaXRpZXMgL1xuICAgICAgICAgICAgICA8L3RleHRQYXRoPlxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgIDwvbW90aW9uLnN2Zz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIi9jb250YWN0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgaC0xNiBtZDp3LTI4IG1kOmgtMjggYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgbS1hdXRvIGJnLWJsYWNrIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBIaXJlIE1lXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1BhZ2U7XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwiSW1hZ2UiLCJMaW5rIiwidXNlUmVmIiwiaXRlbXMiLCJpZCIsImNvbG9yIiwidGl0bGUiLCJkZXNjIiwiaW1nIiwibGluayIsIlBvcnRmb2xpb1BhZ2UiLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJ4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiLCJtYXAiLCJpdGVtIiwiaDEiLCJzcmMiLCJhbHQiLCJmaWxsIiwicCIsImhyZWYiLCJidXR0b24iLCJzdmciLCJyb3RhdGUiLCJlYXNlIiwicmVwZWF0IiwiSW5maW5pdHkiLCJ2aWV3Qm94IiwiZGVmcyIsInBhdGgiLCJkIiwidGV4dCIsInRleHRQYXRoIiwieGxpbmtIcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/portfolio/page.jsx\n"));

/***/ })

});