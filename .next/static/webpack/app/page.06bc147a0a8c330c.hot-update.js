"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"(app-pages-browser)/./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [selectedConversationId, setSelectedConversationId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchConversations = async ()=>{\n            try {\n                const response = await fetch(\"/api/conversations\");\n                if (!response.ok) {\n                    throw new Error(\"Error: \".concat(response.status));\n                }\n                const data = await response.json();\n                setConversations(data);\n            } catch (error) {\n                console.error(\"Failed to fetch conversations\", error);\n            }\n        };\n        fetchConversations();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchMessages = async ()=>{\n            if (selectedConversationId === null) return;\n            try {\n                const response = await fetch(\"/api/conversation/\".concat(selectedConversationId));\n                if (!response.ok) {\n                    throw new Error(\"Error: \".concat(response.status));\n                }\n                const data = await response.json();\n                setChatHistory(data.map((msg)=>({\n                        message: msg.text,\n                        isUser: msg.is_user\n                    })));\n            } catch (error) {\n                console.error(\"Failed to fetch messages\", error);\n            }\n        };\n        fetchMessages();\n    }, [\n        selectedConversationId\n    ]);\n    const sendMessage = async (e)=>{\n        e.preventDefault();\n        if (!message) return;\n        const payload = {\n            message,\n            conversation_id: selectedConversationId\n        };\n        setChatHistory((prev)=>[\n                ...prev,\n                {\n                    message,\n                    isUser: true\n                }\n            ]);\n        try {\n            const response = await fetch(\"/api/message\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(payload)\n            });\n            if (!response.ok) {\n                throw new Error(\"Error: \".concat(response.status));\n            }\n            const data = await response.json();\n            setChatHistory((prev)=>[\n                    ...prev,\n                    {\n                        message: data.response,\n                        isUser: false\n                    }\n                ]);\n            if (selectedConversationId === null) {\n                setSelectedConversationId(data.conversation_id);\n            }\n        } catch (error) {\n            console.error(\"Failed to send message\", error);\n        }\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Chat with GPT\"\n                }, void 0, false, {\n                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar),\n                children: conversations.map((conversation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().conversationItem),\n                        onClick: ()=>setSelectedConversationId(conversation.id),\n                        children: [\n                            \"Conversation \",\n                            conversation.id\n                        ]\n                    }, conversation.id, true, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"ChatGPT Beta\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatHistory),\n                        children: chatHistory.map((chat, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: chat.isUser ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().userMessage) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().gptMessage),\n                                children: chat.message\n                            }, index, false, {\n                                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"place-content-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: sendMessage,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    type: \"text\",\n                                    value: message,\n                                    onChange: (e)=>setMessage(e.target.value),\n                                    placeholder: \"Message ChatGPT...\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputField)\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    type: \"submit\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sendButton),\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"+/9+yOsbk3oFqMk84EIBfcvN4Do=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQUlDLFdBQVd0Qyx3RUFBYzswQkFDM0JNLGNBQWNlLEdBQUcsQ0FBQyxDQUFDcUIsNkJBQ2xCLDhEQUFDTDt3QkFDSUMsV0FBV3RDLGlGQUF1Qjt3QkFDbEM0QyxTQUFTLElBQU1uQywwQkFBMEJpQyxhQUFhRyxFQUFFOzs0QkFBRzs0QkFDaERILGFBQWFHLEVBQUU7O3VCQUhyQkgsYUFBYUcsRUFBRTs7Ozs7Ozs7OzswQkFRN0IsOERBQUNDO2dCQUFLUixXQUFXdEMscUVBQVc7O2tDQUMxQiw4REFBQytDO3dCQUFHVCxXQUFXdEMsc0VBQVk7a0NBQUU7Ozs7OztrQ0FDN0IsOERBQUNxQzt3QkFBSUMsV0FBV3RDLDRFQUFrQjtrQ0FDL0JJLFlBQVlpQixHQUFHLENBQUMsQ0FBQzJCLE1BQU1DLHNCQUN0Qiw4REFBQ1o7Z0NBQ0lDLFdBQVdVLEtBQUt4QixNQUFNLEdBQUd4Qiw0RUFBa0IsR0FBR0EsMkVBQWlCOzBDQUNqRWdELEtBQUs5QyxPQUFPOytCQUZMK0M7Ozs7Ozs7Ozs7a0NBTWQsOERBQUNaO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDYzs0QkFBS0MsVUFBVTNCOzs4Q0FDZCw4REFBQzlCLHVEQUFLQTtvQ0FBQzBELE1BQUs7b0NBQ05DLE9BQU9yRDtvQ0FDUHNELFVBQVUsQ0FBQzdCLElBQTJDeEIsV0FBV3dCLEVBQUU4QixNQUFNLENBQUNGLEtBQUs7b0NBQy9FRyxhQUFZO29DQUNacEIsV0FBV3RDLDJFQUFpQjs7Ozs7OzhDQUNsQyw4REFBQ0gseURBQU1BO29DQUFDeUQsTUFBSztvQ0FBU2hCLFdBQVd0QywyRUFBaUI7OENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhFO0dBcEh3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENoYW5nZUV2ZW50LCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5pbnRlcmZhY2UgQ29udmVyc2F0aW9uIHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFzdFVwZGF0ZWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENoYXRNZXNzYWdlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBpc1VzZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbY2hhdEhpc3RvcnksIHNldENoYXRIaXN0b3J5XSA9IHVzZVN0YXRlPENoYXRNZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW2NvbnZlcnNhdGlvbnMsIHNldENvbnZlcnNhdGlvbnNdID0gdXNlU3RhdGU8Q29udmVyc2F0aW9uW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29udmVyc2F0aW9uSWQsIHNldFNlbGVjdGVkQ29udmVyc2F0aW9uSWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENvbnZlcnNhdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NvbnZlcnNhdGlvbnMnKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENvbnZlcnNhdGlvbnMoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGNvbnZlcnNhdGlvbnNcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaENvbnZlcnNhdGlvbnMoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZENvbnZlcnNhdGlvbklkID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvY29udmVyc2F0aW9uLyR7c2VsZWN0ZWRDb252ZXJzYXRpb25JZH1gKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENoYXRIaXN0b3J5KGRhdGEubWFwKChtc2c6IGFueSkgPT4gKHsgbWVzc2FnZTogbXNnLnRleHQsIGlzVXNlcjogbXNnLmlzX3VzZXIgfSkpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggbWVzc2FnZXNcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaE1lc3NhZ2VzKCk7XG4gIH0sIFtzZWxlY3RlZENvbnZlcnNhdGlvbklkXSk7XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbWVzc2FnZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBjb252ZXJzYXRpb25faWQ6IHNlbGVjdGVkQ29udmVyc2F0aW9uSWQsXG4gICAgfTtcblxuICAgIHNldENoYXRIaXN0b3J5KChwcmV2KSA9PiBbLi4ucHJldiwgeyBtZXNzYWdlLCBpc1VzZXI6IHRydWUgfV0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbWVzc2FnZScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBzZXRDaGF0SGlzdG9yeSgocHJldikgPT4gWy4uLnByZXYsIHsgbWVzc2FnZTogZGF0YS5yZXNwb25zZSwgaXNVc2VyOiBmYWxzZSB9XSk7XG4gICAgICBpZiAoc2VsZWN0ZWRDb252ZXJzYXRpb25JZCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRTZWxlY3RlZENvbnZlcnNhdGlvbklkKGRhdGEuY29udmVyc2F0aW9uX2lkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG1lc3NhZ2VcIiwgZXJyb3IpO1xuICAgIH1cblxuICAgIHNldE1lc3NhZ2UoJycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DaGF0IHdpdGggR1BUPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT5cbiAgICAgICAge2NvbnZlcnNhdGlvbnMubWFwKChjb252ZXJzYXRpb24pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17Y29udmVyc2F0aW9uLmlkfSBcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnZlcnNhdGlvbkl0ZW19IFxuICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDb252ZXJzYXRpb25JZChjb252ZXJzYXRpb24uaWQpfT5cbiAgICAgICAgICAgIENvbnZlcnNhdGlvbiB7Y29udmVyc2F0aW9uLmlkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5DaGF0R1BUIEJldGE8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRIaXN0b3J5fT5cbiAgICAgICAgICB7Y2hhdEhpc3RvcnkubWFwKChjaGF0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjaGF0LmlzVXNlciA/IHN0eWxlcy51c2VyTWVzc2FnZSA6IHN0eWxlcy5ncHRNZXNzYWdlfT5cbiAgICAgICAgICAgICAge2NoYXQubWVzc2FnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTWVzc2FnZX0+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfSBcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSBDaGF0R1BULi4uXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VuZEJ1dHRvbn0+U2VuZDwvQnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJJbnB1dCIsIkJ1dHRvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiUGFnZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY2hhdEhpc3RvcnkiLCJzZXRDaGF0SGlzdG9yeSIsImNvbnZlcnNhdGlvbnMiLCJzZXRDb252ZXJzYXRpb25zIiwic2VsZWN0ZWRDb252ZXJzYXRpb25JZCIsInNldFNlbGVjdGVkQ29udmVyc2F0aW9uSWQiLCJmZXRjaENvbnZlcnNhdGlvbnMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hNZXNzYWdlcyIsIm1hcCIsIm1zZyIsInRleHQiLCJpc1VzZXIiLCJpc191c2VyIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXlsb2FkIiwiY29udmVyc2F0aW9uX2lkIiwicHJldiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwic2lkZWJhciIsImNvbnZlcnNhdGlvbiIsImNvbnZlcnNhdGlvbkl0ZW0iLCJvbkNsaWNrIiwiaWQiLCJtYWluIiwiaDEiLCJjaGF0IiwiaW5kZXgiLCJ1c2VyTWVzc2FnZSIsImdwdE1lc3NhZ2UiLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiaW5wdXRGaWVsZCIsInNlbmRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});