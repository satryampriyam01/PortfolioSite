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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst items = [\n    {\n        id: 1,\n        color: \"from-blue-300 to-violet-300\",\n        title: \"AtomToByte\",\n        desc: \"Developed a full-stack web application for NGO AtomToByte, featuring a responsive frontend design to optimize user experience. The application facilitates seamless event communication and enhances collaboration by leveraging modern web technologies.\",\n        img: \"https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load\",\n        link: \"https://atomtobyte.netlify.app/\"\n    },\n    {\n        id: 2,\n        color: \"from-red-300 to-blue-300\",\n        title: \"OpenD\",\n        desc: \"Built a full-stack NFT marketplace on the Internet Computer platform using React.js, JavaScript, Motoko, using Web3 technology to enable users to buy and sell NFTs\",\n        img: \"https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load\",\n        link: \"https://github.com/satryampriyam01/OpenD\"\n    },\n    {\n        id: 3,\n        color: \"from-violet-300 to-purple-300\",\n        title: \"SplitExpense\",\n        desc: \"Devised microservices using Spring Boot (Backend), MongoDB, Elastic Search to deliver RESTful APIs for user management and expense splitting\tEngineered robust back-end functionalities that enabled the creation of over 150 user groups and facilitated real-time balance tracking.\",\n        img: \"https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load\",\n        link: \"https://lama.dev\"\n    },\n    {\n        id: 4,\n        color: \"from-purple-300 to-red-300\",\n        title: \"Imager\",\n        desc: \"An image processing app with a GUI using Java, Swing and Junit, designed as an Adobe-like clone, providing users with functionalities such as image compression, blurring, color correction, and more. Built with Haar wavelet implementation, Gaussian functions, and various mathematical operations. \",\n        img: \"https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\",\n        link: \"https://lama.dev\"\n    },\n    {\n        id: 5,\n        color: \"from-pink-300 to-red-300\",\n        title: \"My Portfolio Website\",\n        desc: \"Created a personal portfolio using Next.js 13 with advanced animations via Framer Motion, SMTP API integration, and Tailwind CSS.\",\n        img: \"/dummy.png\",\n        link: \"https://abhinavdholi.com/\"\n    },\n    {\n        id: 6,\n        color: \"from-grey-300 to-black-800\",\n        title: \"More project\",\n        desc: \"Take a dive into my GitHub wonderland! From full-stack web escapades to AI-fueled adventures, explore the wild variety of projects I've tackled—and probably still am as you read this! Who knows, you might just catch me mid-debug!\",\n        img: \"https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\",\n        link: \"https://github.com/satryampriyam01\"\n    }\n];\nconst PortfolioPage = ()=>{\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: ref\n    });\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"0%\",\n        \"-80%\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        className: \"h-full\",\n        initial: {\n            y: \"-200vh\"\n        },\n        animate: {\n            y: \"0%\"\n        },\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[600vh] relative\",\n                ref: ref,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center\",\n                        children: \"My Works\"\n                    }, void 0, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sticky top-0 flex h-screen gap-4 items-center overflow-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            style: {\n                                x\n                            },\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-screen w-screen flex items-center justify-center bg-gradient-to-r \".concat(item.color),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col gap-8 text-white\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    className: \"text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl\",\n                                                    children: item.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                        src: item.img,\n                                                        alt: \"\",\n                                                        fill: true\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]\",\n                                                    children: item.desc\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    href: item.link,\n                                                    className: \"flex justify-end\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded\",\n                                                        children: \"View the Repository/Demo\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, item.id, false, {\n                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen h-screen flex flex-col gap-16 items-center justify-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-8xl\",\n                        children: \"Do you have a project?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.svg, {\n                                animate: {\n                                    rotate: 360\n                                },\n                                transition: {\n                                    duration: 8,\n                                    ease: \"linear\",\n                                    repeat: Infinity\n                                },\n                                viewBox: \"0 0 300 300\",\n                                className: \"w-64 h-64 md:w-[500px] md:h-[500px] \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            id: \"circlePath\",\n                                            d: \"M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                        fill: \"#000\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textPath\", {\n                                            xlinkHref: \"#circlePath\",\n                                            className: \"text-xl\",\n                                            children: \"Summer' 25 / Full Time Opportunities /\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/contact\",\n                                className: \"w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center\",\n                                children: \"Hire Me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/satyampriyam/Documents/GitHub/PortfolioSite/src/app/portfolio/page.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PortfolioPage, \"IDWZ1rwRGGLMN8cPwdaVvM3r59c=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = PortfolioPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortfolioPage);\nvar _c;\n$RefreshReg$(_c, \"PortfolioPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9ydGZvbGlvL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2dFO0FBQ2pDO0FBQ0Y7QUFDRTtBQUUvQixNQUFNTSxRQUFRO0lBQ1o7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsS0FBSztRQUNMQyxNQUFNO0lBQ1I7SUFFQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsS0FBSztRQUNMQyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsTUFBTTtJQUNSO0NBRUQ7QUFFRCxNQUFNQyxnQkFBZ0I7O0lBQ3BCLE1BQU1DLE1BQU1ULDZDQUFNQTtJQUVsQixNQUFNLEVBQUVVLGVBQWUsRUFBRSxHQUFHZCx3REFBU0EsQ0FBQztRQUFFZSxRQUFRRjtJQUFJO0lBQ3BELE1BQU1HLElBQUlmLDJEQUFZQSxDQUFDYSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQU07S0FBTztJQUU5RCxxQkFDRSw4REFBQ2YsaURBQU1BLENBQUNrQixHQUFHO1FBQ1RDLFdBQVU7UUFDVkMsU0FBUztZQUFFQyxHQUFHO1FBQVM7UUFDdkJDLFNBQVM7WUFBRUQsR0FBRztRQUFLO1FBQ25CRSxZQUFZO1lBQUVDLFVBQVU7UUFBRTs7MEJBRTFCLDhEQUFDTjtnQkFBSUMsV0FBVTtnQkFBcUJMLEtBQUtBOztrQ0FDdkMsOERBQUNJO3dCQUFJQyxXQUFVO2tDQUFzRjs7Ozs7O2tDQUdyRyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNuQixpREFBTUEsQ0FBQ2tCLEdBQUc7NEJBQUNPLE9BQU87Z0NBQUVSOzRCQUFFOzRCQUFHRSxXQUFVOzs4Q0FDbEMsOERBQUNEO29DQUFJQyxXQUFVOzs7Ozs7Z0NBQ2RiLE1BQU1vQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNUO3dDQUNDQyxXQUFXLHVFQUFrRixPQUFYUSxLQUFLbkIsS0FBSztrREFHNUYsNEVBQUNVOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1M7b0RBQUdULFdBQVU7OERBQ1hRLEtBQUtsQixLQUFLOzs7Ozs7OERBRWIsOERBQUNTO29EQUFJQyxXQUFVOzhEQUNiLDRFQUFDaEIsa0RBQUtBO3dEQUFDMEIsS0FBS0YsS0FBS2hCLEdBQUc7d0RBQUVtQixLQUFJO3dEQUFHQyxJQUFJOzs7Ozs7Ozs7Ozs4REFFbkMsOERBQUNDO29EQUFFYixXQUFVOzhEQUNWUSxLQUFLakIsSUFBSTs7Ozs7OzhEQUVaLDhEQUFDTixpREFBSUE7b0RBQUM2QixNQUFNTixLQUFLZixJQUFJO29EQUFFTyxXQUFVOzhEQUMvQiw0RUFBQ2U7d0RBQU9mLFdBQVU7a0VBQW1HOzs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FicEhRLEtBQUtwQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXFCdEIsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1M7d0JBQUdULFdBQVU7a0NBQVc7Ozs7OztrQ0FDekIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ25CLGlEQUFNQSxDQUFDbUMsR0FBRztnQ0FDVGIsU0FBUztvQ0FBRWMsUUFBUTtnQ0FBSTtnQ0FDdkJiLFlBQVk7b0NBQUVDLFVBQVU7b0NBQUdhLE1BQU07b0NBQVVDLFFBQVFDO2dDQUFTO2dDQUM1REMsU0FBUTtnQ0FDUnJCLFdBQVU7O2tEQUVWLDhEQUFDc0I7a0RBQ0MsNEVBQUNDOzRDQUNDbkMsSUFBRzs0Q0FDSG9DLEdBQUU7Ozs7Ozs7Ozs7O2tEQUdOLDhEQUFDQzt3Q0FBS2IsTUFBSztrREFDVCw0RUFBQ2M7NENBQVNDLFdBQVU7NENBQWMzQixXQUFVO3NEQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLMUQsOERBQUNmLGlEQUFJQTtnQ0FDSDZCLE1BQUs7Z0NBQ0xkLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBM0VNTjs7UUFHd0JaLG9EQUFTQTtRQUMzQkMsdURBQVlBOzs7S0FKbEJXO0FBNkVOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9ydGZvbGlvL3BhZ2UuanN4PzAwMGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgY29sb3I6IFwiZnJvbS1ibHVlLTMwMCB0by12aW9sZXQtMzAwXCIsXG4gICAgdGl0bGU6IFwiQXRvbVRvQnl0ZVwiLFxuICAgIGRlc2M6IFwiRGV2ZWxvcGVkIGEgZnVsbC1zdGFjayB3ZWIgYXBwbGljYXRpb24gZm9yIE5HTyBBdG9tVG9CeXRlLCBmZWF0dXJpbmcgYSByZXNwb25zaXZlIGZyb250ZW5kIGRlc2lnbiB0byBvcHRpbWl6ZSB1c2VyIGV4cGVyaWVuY2UuIFRoZSBhcHBsaWNhdGlvbiBmYWNpbGl0YXRlcyBzZWFtbGVzcyBldmVudCBjb21tdW5pY2F0aW9uIGFuZCBlbmhhbmNlcyBjb2xsYWJvcmF0aW9uIGJ5IGxldmVyYWdpbmcgbW9kZXJuIHdlYiB0ZWNobm9sb2dpZXMuXCIsXG4gICAgaW1nOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE4MDIzNzcyL3BleGVscy1waG90by0xODAyMzc3Mi9mcmVlLXBob3RvLW9mLWNsb3NlLXVwLW9mLWEtcGVyc29uLWhvbGRpbmctYS13cmlzdHdhdGNoLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTE2MDAmbGF6eT1sb2FkXCIsXG4gICAgbGluazogXCJodHRwczovL2F0b210b2J5dGUubmV0bGlmeS5hcHAvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBjb2xvcjogXCJmcm9tLXJlZC0zMDAgdG8tYmx1ZS0zMDBcIixcbiAgICB0aXRsZTogXCJPcGVuRFwiLFxuICAgIGRlc2M6IFwiQnVpbHQgYSBmdWxsLXN0YWNrIE5GVCBtYXJrZXRwbGFjZSBvbiB0aGUgSW50ZXJuZXQgQ29tcHV0ZXIgcGxhdGZvcm0gdXNpbmcgUmVhY3QuanMsIEphdmFTY3JpcHQsIE1vdG9rbywgdXNpbmcgV2ViMyB0ZWNobm9sb2d5IHRvIGVuYWJsZSB1c2VycyB0byBidXkgYW5kIHNlbGwgTkZUc1wiLFxuICAgIGltZzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xODA3MzM3Mi9wZXhlbHMtcGhvdG8tMTgwNzMzNzIvZnJlZS1waG90by1vZi15b3VuZy1tYW4tc2l0dGluZy1pbi1hLWNhci1vbi1hLW5pZ2h0LXN0cmVldC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xNjAwJmxhenk9bG9hZFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NhdHJ5YW1wcml5YW0wMS9PcGVuRFwiLFxuICB9LFxuICBcbiAge1xuICAgIGlkOiAzLFxuICAgIGNvbG9yOiBcImZyb20tdmlvbGV0LTMwMCB0by1wdXJwbGUtMzAwXCIsXG4gICAgdGl0bGU6IFwiU3BsaXRFeHBlbnNlXCIsXG4gICAgZGVzYzogXCJEZXZpc2VkIG1pY3Jvc2VydmljZXMgdXNpbmcgU3ByaW5nIEJvb3QgKEJhY2tlbmQpLCBNb25nb0RCLCBFbGFzdGljIFNlYXJjaCB0byBkZWxpdmVyIFJFU1RmdWwgQVBJcyBmb3IgdXNlciBtYW5hZ2VtZW50IGFuZCBleHBlbnNlIHNwbGl0dGluZ1x0RW5naW5lZXJlZCByb2J1c3QgYmFjay1lbmQgZnVuY3Rpb25hbGl0aWVzIHRoYXQgZW5hYmxlZCB0aGUgY3JlYXRpb24gb2Ygb3ZlciAxNTAgdXNlciBncm91cHMgYW5kIGZhY2lsaXRhdGVkIHJlYWwtdGltZSBiYWxhbmNlIHRyYWNraW5nLlwiLFxuICAgIGltZzogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82ODk0NTI4L3BleGVscy1waG90by02ODk0NTI4LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTE2MDAmbGF6eT1sb2FkXCIsXG4gICAgbGluazogXCJodHRwczovL2xhbWEuZGV2XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBjb2xvcjogXCJmcm9tLXB1cnBsZS0zMDAgdG8tcmVkLTMwMFwiLFxuICAgIHRpdGxlOiBcIkltYWdlclwiLFxuICAgIGRlc2M6IFwiQW4gaW1hZ2UgcHJvY2Vzc2luZyBhcHAgd2l0aCBhIEdVSSB1c2luZyBKYXZhLCBTd2luZyBhbmQgSnVuaXQsIGRlc2lnbmVkIGFzIGFuIEFkb2JlLWxpa2UgY2xvbmUsIHByb3ZpZGluZyB1c2VycyB3aXRoIGZ1bmN0aW9uYWxpdGllcyBzdWNoIGFzIGltYWdlIGNvbXByZXNzaW9uLCBibHVycmluZywgY29sb3IgY29ycmVjdGlvbiwgYW5kIG1vcmUuIEJ1aWx0IHdpdGggSGFhciB3YXZlbGV0IGltcGxlbWVudGF0aW9uLCBHYXVzc2lhbiBmdW5jdGlvbnMsIGFuZCB2YXJpb3VzIG1hdGhlbWF0aWNhbCBvcGVyYXRpb25zLiBcIixcbiAgICBpbWc6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTg1NDAyMDgvcGV4ZWxzLXBob3RvLTE4NTQwMjA4L2ZyZWUtcGhvdG8tb2Ytd29vZC1sYW5kc2NhcGUtd2F0ZXItaGlsbC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIsXG4gICAgbGluazogXCJodHRwczovL2xhbWEuZGV2XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBjb2xvcjogXCJmcm9tLXBpbmstMzAwIHRvLXJlZC0zMDBcIixcbiAgICB0aXRsZTogXCJNeSBQb3J0Zm9saW8gV2Vic2l0ZVwiLFxuICAgIGRlc2M6IFwiQ3JlYXRlZCBhIHBlcnNvbmFsIHBvcnRmb2xpbyB1c2luZyBOZXh0LmpzIDEzIHdpdGggYWR2YW5jZWQgYW5pbWF0aW9ucyB2aWEgRnJhbWVyIE1vdGlvbiwgU01UUCBBUEkgaW50ZWdyYXRpb24sIGFuZCBUYWlsd2luZCBDU1MuXCIsXG4gICAgaW1nOiBcIi9kdW1teS5wbmdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vYWJoaW5hdmRob2xpLmNvbS9cIixcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIGNvbG9yOiBcImZyb20tZ3JleS0zMDAgdG8tYmxhY2stODAwXCIsXG4gICAgdGl0bGU6IFwiTW9yZSBwcm9qZWN0XCIsXG4gICAgZGVzYzogXCJUYWtlIGEgZGl2ZSBpbnRvIG15IEdpdEh1YiB3b25kZXJsYW5kISBGcm9tIGZ1bGwtc3RhY2sgd2ViIGVzY2FwYWRlcyB0byBBSS1mdWVsZWQgYWR2ZW50dXJlcywgZXhwbG9yZSB0aGUgd2lsZCB2YXJpZXR5IG9mIHByb2plY3RzIEkndmUgdGFja2xlZOKAlGFuZCBwcm9iYWJseSBzdGlsbCBhbSBhcyB5b3UgcmVhZCB0aGlzISBXaG8ga25vd3MsIHlvdSBtaWdodCBqdXN0IGNhdGNoIG1lIG1pZC1kZWJ1ZyFcIixcbiAgICBpbWc6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTg1NDAyMDgvcGV4ZWxzLXBob3RvLTE4NTQwMjA4L2ZyZWUtcGhvdG8tb2Ytd29vZC1sYW5kc2NhcGUtd2F0ZXItaGlsbC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIsXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vc2F0cnlhbXByaXlhbTAxXCIsXG4gIH0sXG5cbl07XG5cbmNvbnN0IFBvcnRmb2xpb1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoeyB0YXJnZXQ6IHJlZiB9KTtcbiAgY29uc3QgeCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgW1wiMCVcIiwgXCItODAlXCJdKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCJoLWZ1bGxcIlxuICAgICAgaW5pdGlhbD17eyB5OiBcIi0yMDB2aFwiIH19XG4gICAgICBhbmltYXRlPXt7IHk6IFwiMCVcIiB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNjAwdmhdIHJlbGF0aXZlXCIgcmVmPXtyZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtW2NhbGMoMTAwdmgtNnJlbSldIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtOHhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgTXkgV29ya3NcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIGZsZXggaC1zY3JlZW4gZ2FwLTQgaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7IHggfX0gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTMwMCB0by1yZWQtMzAwXCIgLz5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtc2NyZWVuIHctc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLXIgJHtpdGVtLmNvbG9yfWB9XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC04IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtZDp0ZXh0LTR4bCBsZzp0ZXh0LTZ4bCB4bDp0ZXh0LTh4bFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctODAgaC01NiBtZDp3LTk2IG1kOmgtNjQgbGc6dy1bNTAwcHhdIGxnOmgtWzM1MHB4XSB4bDp3LVs2MDBweF0geGw6aC1bNDIwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJcIiBmaWxsIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctODAgbWQ6dzk2IGxnOnctWzUwMHB4XSBsZzp0ZXh0LWxnIHhsOnctWzYwMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5saW5rfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIHRleHQtc20gbWQ6cC00IG1kOnRleHQtbWQgbGc6cC04IGxnOnRleHQtbGcgYmctd2hpdGUgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIG0tNCByb3VuZGVkXCI+VmlldyB0aGUgUmVwb3NpdG9yeS9EZW1vPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGdhcC0xNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtOHhsXCI+RG8geW91IGhhdmUgYSBwcm9qZWN0PzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8bW90aW9uLnN2Z1xuICAgICAgICAgICAgYW5pbWF0ZT17eyByb3RhdGU6IDM2MCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogOCwgZWFzZTogXCJsaW5lYXJcIiwgcmVwZWF0OiBJbmZpbml0eSB9fVxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMDAgMzAwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjQgaC02NCBtZDp3LVs1MDBweF0gbWQ6aC1bNTAwcHhdIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGVQYXRoXCJcbiAgICAgICAgICAgICAgICBkPVwiTSAxNTAsIDE1MCBtIC02MCwgMCBhIDYwLDYwIDAgMCwxIDEyMCwwIGEgNjAsNjAgMCAwLDEgLTEyMCwwIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICA8dGV4dCBmaWxsPVwiIzAwMFwiPlxuICAgICAgICAgICAgICA8dGV4dFBhdGggeGxpbmtIcmVmPVwiI2NpcmNsZVBhdGhcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgU3VtbWVyJyAyNSAvIEZ1bGwgVGltZSBPcHBvcnR1bml0aWVzIC9cbiAgICAgICAgICAgICAgPC90ZXh0UGF0aD5cbiAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICA8L21vdGlvbi5zdmc+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvY29udGFjdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgbWQ6dy0yOCBtZDpoLTI4IGFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIG0tYXV0byBiZy1ibGFjayB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSGlyZSBNZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9QYWdlO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIkltYWdlIiwiTGluayIsInVzZVJlZiIsIml0ZW1zIiwiaWQiLCJjb2xvciIsInRpdGxlIiwiZGVzYyIsImltZyIsImxpbmsiLCJQb3J0Zm9saW9QYWdlIiwicmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0IiwieCIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInN0eWxlIiwibWFwIiwiaXRlbSIsImgxIiwic3JjIiwiYWx0IiwiZmlsbCIsInAiLCJocmVmIiwiYnV0dG9uIiwic3ZnIiwicm90YXRlIiwiZWFzZSIsInJlcGVhdCIsIkluZmluaXR5Iiwidmlld0JveCIsImRlZnMiLCJwYXRoIiwiZCIsInRleHQiLCJ0ZXh0UGF0aCIsInhsaW5rSHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/portfolio/page.jsx\n"));

/***/ })

});