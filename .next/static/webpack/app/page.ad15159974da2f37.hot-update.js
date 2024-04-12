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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"(app-pages-browser)/./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [selectedConversationId, setSelectedConversationId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [isSending, setIsSending] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchConversations = async ()=>{\n            try {\n                const response = await fetch(\"/api/conversations\");\n                if (!response.ok) {\n                    throw new Error(\"Error: \".concat(response.status));\n                }\n                const data = await response.json();\n                setConversations(data);\n            } catch (error) {\n                console.error(\"Failed to fetch conversations\", error);\n            }\n        };\n        fetchConversations();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchMessages = async ()=>{\n            if (selectedConversationId === null) return;\n            try {\n                const response = await fetch(\"/api/conversation/\".concat(selectedConversationId));\n                if (!response.ok) {\n                    throw new Error(\"Error: \".concat(response.status));\n                }\n                const data = await response.json();\n                setChatHistory(data.map((msg)=>({\n                        message: msg.text,\n                        isUser: msg.is_user\n                    })));\n            } catch (error) {\n                console.error(\"Failed to fetch messages\", error);\n            }\n        };\n        fetchMessages();\n    }, [\n        selectedConversationId\n    ]);\n    const sendMessage = async (e)=>{\n        e.preventDefault();\n        if (!message || isSending) return;\n        setIsSending(true);\n        setMessage(\"\");\n        const payload = {\n            message,\n            conversation_id: selectedConversationId\n        };\n        setChatHistory((prev)=>[\n                ...prev,\n                {\n                    message,\n                    isUser: true\n                }\n            ]);\n        try {\n            const response = await fetch(\"/api/message\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(payload)\n            });\n            if (!response.ok) {\n                throw new Error(\"Error: \".concat(response.status));\n            }\n            const data = await response.json();\n            setChatHistory((prev)=>[\n                    ...prev,\n                    {\n                        message: data.response,\n                        isUser: false\n                    }\n                ]);\n            if (selectedConversationId === null) {\n                setSelectedConversationId(data.conversation_id);\n            }\n        } catch (error) {\n            console.error(\"Failed to send message\", error);\n        } finally{\n            setIsSending(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Chat with GPT\"\n                }, void 0, false, {\n                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar),\n                children: conversations.map((conversation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().conversationItem),\n                        onClick: ()=>setSelectedConversationId(conversation.id),\n                        children: [\n                            \"Conversation \",\n                            conversation.id\n                        ]\n                    }, conversation.id, true, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"ChatGPT Beta\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatHistory),\n                        children: chatHistory.map((chat, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: chat.isUser ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().userMessage) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().gptMessage),\n                                children: chat.message\n                            }, index, false, {\n                                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatBox),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: sendMessage,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    type: \"text\",\n                                    value: message,\n                                    onChange: (e)=>setMessage(e.target.value),\n                                    placeholder: \"Message ChatGPT...\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputField)\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    type: \"submit\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sendButton),\n                                    disabled: isSending,\n                                    children: isSending ? \"Sending...\" : \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"auL425ky42kZkOErKA7fVtP70f8=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENoYW5nZUV2ZW50LCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5pbnRlcmZhY2UgQ29udmVyc2F0aW9uIHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFzdFVwZGF0ZWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENoYXRNZXNzYWdlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBpc1VzZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbY2hhdEhpc3RvcnksIHNldENoYXRIaXN0b3J5XSA9IHVzZVN0YXRlPENoYXRNZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW2NvbnZlcnNhdGlvbnMsIHNldENvbnZlcnNhdGlvbnNdID0gdXNlU3RhdGU8Q29udmVyc2F0aW9uW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29udmVyc2F0aW9uSWQsIHNldFNlbGVjdGVkQ29udmVyc2F0aW9uSWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc1NlbmRpbmcsIHNldElzU2VuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENvbnZlcnNhdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NvbnZlcnNhdGlvbnMnKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENvbnZlcnNhdGlvbnMoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGNvbnZlcnNhdGlvbnNcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaENvbnZlcnNhdGlvbnMoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZENvbnZlcnNhdGlvbklkID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvY29udmVyc2F0aW9uLyR7c2VsZWN0ZWRDb252ZXJzYXRpb25JZH1gKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENoYXRIaXN0b3J5KGRhdGEubWFwKChtc2c6IGFueSkgPT4gKHsgbWVzc2FnZTogbXNnLnRleHQsIGlzVXNlcjogbXNnLmlzX3VzZXIgfSkpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggbWVzc2FnZXNcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaE1lc3NhZ2VzKCk7XG4gIH0sIFtzZWxlY3RlZENvbnZlcnNhdGlvbklkXSk7XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbWVzc2FnZSB8fCBpc1NlbmRpbmcpIHJldHVybjtcbiAgXG4gICAgc2V0SXNTZW5kaW5nKHRydWUpO1xuICAgIHNldE1lc3NhZ2UoJycpO1xuICBcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGNvbnZlcnNhdGlvbl9pZDogc2VsZWN0ZWRDb252ZXJzYXRpb25JZCxcbiAgICB9O1xuICBcbiAgICBzZXRDaGF0SGlzdG9yeSgocHJldikgPT4gWy4uLnByZXYsIHsgbWVzc2FnZSwgaXNVc2VyOiB0cnVlIH1dKTtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbWVzc2FnZScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICAgIH0pO1xuICBcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgc2V0Q2hhdEhpc3RvcnkoKHByZXYpID0+IFsuLi5wcmV2LCB7IG1lc3NhZ2U6IGRhdGEucmVzcG9uc2UsIGlzVXNlcjogZmFsc2UgfV0pO1xuICAgICAgaWYgKHNlbGVjdGVkQ29udmVyc2F0aW9uSWQgPT09IG51bGwpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRDb252ZXJzYXRpb25JZChkYXRhLmNvbnZlcnNhdGlvbl9pZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNTZW5kaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNoYXQgd2l0aCBHUFQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxuICAgICAgICB7Y29udmVyc2F0aW9ucy5tYXAoKGNvbnZlcnNhdGlvbikgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjb252ZXJzYXRpb24uaWR9IFxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udmVyc2F0aW9uSXRlbX0gXG4gICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENvbnZlcnNhdGlvbklkKGNvbnZlcnNhdGlvbi5pZCl9PlxuICAgICAgICAgICAgQ29udmVyc2F0aW9uIHtjb252ZXJzYXRpb24uaWR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkNoYXRHUFQgQmV0YTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdEhpc3Rvcnl9PlxuICAgICAgICAgIHtjaGF0SGlzdG9yeS5tYXAoKGNoYXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NoYXQuaXNVc2VyID8gc3R5bGVzLnVzZXJNZXNzYWdlIDogc3R5bGVzLmdwdE1lc3NhZ2V9PlxuICAgICAgICAgICAgICB7Y2hhdC5tZXNzYWdlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRCb3h9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTWVzc2FnZX0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfSBcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSBDaGF0R1BULi4uXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VuZEJ1dHRvbn0gZGlzYWJsZWQ9e2lzU2VuZGluZ30+XG4gICAgICAgICAgICAgIHtpc1NlbmRpbmcgPyAnU2VuZGluZy4uLicgOiAnU2VuZCd9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiSW5wdXQiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlBhZ2UiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImNoYXRIaXN0b3J5Iiwic2V0Q2hhdEhpc3RvcnkiLCJjb252ZXJzYXRpb25zIiwic2V0Q29udmVyc2F0aW9ucyIsInNlbGVjdGVkQ29udmVyc2F0aW9uSWQiLCJzZXRTZWxlY3RlZENvbnZlcnNhdGlvbklkIiwiaXNTZW5kaW5nIiwic2V0SXNTZW5kaW5nIiwiZmV0Y2hDb252ZXJzYXRpb25zIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImZldGNoTWVzc2FnZXMiLCJtYXAiLCJtc2ciLCJ0ZXh0IiwiaXNVc2VyIiwiaXNfdXNlciIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGF5bG9hZCIsImNvbnZlcnNhdGlvbl9pZCIsInByZXYiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsInNpZGViYXIiLCJjb252ZXJzYXRpb24iLCJjb252ZXJzYXRpb25JdGVtIiwib25DbGljayIsImlkIiwibWFpbiIsImgxIiwiY2hhdCIsImluZGV4IiwidXNlck1lc3NhZ2UiLCJncHRNZXNzYWdlIiwiY2hhdEJveCIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJpbnB1dEZpZWxkIiwic2VuZEJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});