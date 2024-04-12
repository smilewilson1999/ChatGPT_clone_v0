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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"(app-pages-browser)/./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [selectedConversationId, setSelectedConversationId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [isSending, setIsSending] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const latestMessageRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchConversations = async ()=>{\n            try {\n                const response = await fetch(\"/api/conversations\");\n                if (!response.ok) {\n                    throw new Error(\"Error: \".concat(response.status));\n                }\n                const data = await response.json();\n                setConversations(data);\n            } catch (error) {\n                console.error(\"Failed to fetch conversations\", error);\n            }\n        };\n        fetchConversations();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchMessages = async ()=>{\n            if (selectedConversationId === null) return;\n            try {\n                const response = await fetch(\"/api/conversation/\".concat(selectedConversationId));\n                if (!response.ok) {\n                    throw new Error(\"Error: \".concat(response.status));\n                }\n                const data = await response.json();\n                setChatHistory(data.map((msg)=>({\n                        message: msg.text,\n                        isUser: msg.is_user\n                    })));\n            } catch (error) {\n                console.error(\"Failed to fetch messages\", error);\n            }\n        };\n        fetchMessages();\n    }, [\n        selectedConversationId\n    ]);\n    const sendMessage = async (e)=>{\n        e.preventDefault();\n        if (!message || isSending) return;\n        setIsSending(true);\n        setMessage(\"\");\n        const payload = {\n            message,\n            conversation_id: selectedConversationId\n        };\n        setChatHistory((prev)=>[\n                ...prev,\n                {\n                    message,\n                    isUser: true\n                }\n            ]);\n        try {\n            const response = await fetch(\"/api/message\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(payload)\n            });\n            if (!response.ok) {\n                throw new Error(\"Error: \".concat(response.status));\n            }\n            const data = await response.json();\n            setChatHistory((prev)=>[\n                    ...prev,\n                    {\n                        message: data.response,\n                        isUser: false\n                    }\n                ]);\n            if (selectedConversationId === null) {\n                setSelectedConversationId(data.conversation_id);\n            }\n        } catch (error) {\n            console.error(\"Failed to send message\", error);\n        } finally{\n            setIsSending(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Scroll to the latest of the chat history\n        if (latestMessageRef.current) {\n            latestMessageRef.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        chatHistory\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Chat with GPT\"\n                }, void 0, false, {\n                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar),\n                children: conversations.map((conversation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().conversationItem),\n                        onClick: ()=>setSelectedConversationId(conversation.id),\n                        children: [\n                            \"Conversation \",\n                            conversation.id\n                        ]\n                    }, conversation.id, true, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"ChatGPT Beta\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatHistory),\n                        children: chatHistory.map((chat, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: index === chatHistory.length - 1 ? latestMessageRef : null,\n                                className: chat.isUser ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().userMessage) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().gptMessage),\n                                children: chat.message\n                            }, index, false, {\n                                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatBox),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: sendMessage,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    type: \"text\",\n                                    value: message,\n                                    onChange: (e)=>setMessage(e.target.value),\n                                    placeholder: \"Message ChatGPT...\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputField)\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    type: \"submit\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sendButton),\n                                    disabled: isSending,\n                                    children: isSending ? \"Sending...\" : \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                    lineNumber: 143,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"ihfqfsMROVzH6hTnLL95fpcsv6A=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsQ0FBQ25DLElBQTJDM0IsV0FBVzJCLEVBQUVvQyxNQUFNLENBQUNGLEtBQUs7b0NBQy9FRyxhQUFZO29DQUNadkIsV0FBVzVDLDJFQUFpQjs7Ozs7OzhDQUNsQyw4REFBQ0oseURBQU1BO29DQUFDbUUsTUFBSztvQ0FBU25CLFdBQVc1QywyRUFBaUI7b0NBQUVzRSxVQUFVNUQ7OENBQzNEQSxZQUFZLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFDO0dBcEl3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuaW50ZXJmYWNlIENvbnZlcnNhdGlvbiB7XG4gIGlkOiBudW1iZXI7XG4gIGxhc3RVcGRhdGVkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDaGF0TWVzc2FnZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgaXNVc2VyOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2NoYXRIaXN0b3J5LCBzZXRDaGF0SGlzdG9yeV0gPSB1c2VTdGF0ZTxDaGF0TWVzc2FnZVtdPihbXSk7XG4gIGNvbnN0IFtjb252ZXJzYXRpb25zLCBzZXRDb252ZXJzYXRpb25zXSA9IHVzZVN0YXRlPENvbnZlcnNhdGlvbltdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbnZlcnNhdGlvbklkLCBzZXRTZWxlY3RlZENvbnZlcnNhdGlvbklkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNTZW5kaW5nLCBzZXRJc1NlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBsYXRlc3RNZXNzYWdlUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hDb252ZXJzYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb252ZXJzYXRpb25zJyk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRDb252ZXJzYXRpb25zKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBjb252ZXJzYXRpb25zXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hDb252ZXJzYXRpb25zKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoTWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWRDb252ZXJzYXRpb25JZCA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2NvbnZlcnNhdGlvbi8ke3NlbGVjdGVkQ29udmVyc2F0aW9uSWR9YCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRDaGF0SGlzdG9yeShkYXRhLm1hcCgobXNnOiBhbnkpID0+ICh7IG1lc3NhZ2U6IG1zZy50ZXh0LCBpc1VzZXI6IG1zZy5pc191c2VyIH0pKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIG1lc3NhZ2VzXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hNZXNzYWdlcygpO1xuICB9LCBbc2VsZWN0ZWRDb252ZXJzYXRpb25JZF0pO1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIW1lc3NhZ2UgfHwgaXNTZW5kaW5nKSByZXR1cm47XG4gIFxuICAgIHNldElzU2VuZGluZyh0cnVlKTtcbiAgICBzZXRNZXNzYWdlKCcnKTtcbiAgXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBjb252ZXJzYXRpb25faWQ6IHNlbGVjdGVkQ29udmVyc2F0aW9uSWQsXG4gICAgfTtcbiAgXG4gICAgc2V0Q2hhdEhpc3RvcnkoKHByZXYpID0+IFsuLi5wcmV2LCB7IG1lc3NhZ2UsIGlzVXNlcjogdHJ1ZSB9XSk7XG4gIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL21lc3NhZ2UnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgICB9KTtcbiAgXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHNldENoYXRIaXN0b3J5KChwcmV2KSA9PiBbLi4ucHJldiwgeyBtZXNzYWdlOiBkYXRhLnJlc3BvbnNlLCBpc1VzZXI6IGZhbHNlIH1dKTtcbiAgICAgIGlmIChzZWxlY3RlZENvbnZlcnNhdGlvbklkID09PSBudWxsKSB7XG4gICAgICAgIHNldFNlbGVjdGVkQ29udmVyc2F0aW9uSWQoZGF0YS5jb252ZXJzYXRpb25faWQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZVwiLCBlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzU2VuZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBsYXRlc3Qgb2YgdGhlIGNoYXQgaGlzdG9yeVxuICAgIGlmIChsYXRlc3RNZXNzYWdlUmVmLmN1cnJlbnQpIHtcbiAgICAgIChsYXRlc3RNZXNzYWdlUmVmLmN1cnJlbnQgYXMgSFRNTERpdkVsZW1lbnQpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgfVxuICB9LCBbY2hhdEhpc3RvcnldKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2hhdCB3aXRoIEdQVDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XG4gICAgICAgIHtjb252ZXJzYXRpb25zLm1hcCgoY29udmVyc2F0aW9uKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2NvbnZlcnNhdGlvbi5pZH0gXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb252ZXJzYXRpb25JdGVtfSBcbiAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ29udmVyc2F0aW9uSWQoY29udmVyc2F0aW9uLmlkKX0+XG4gICAgICAgICAgICBDb252ZXJzYXRpb24ge2NvbnZlcnNhdGlvbi5pZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Q2hhdEdQVCBCZXRhPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SGlzdG9yeX0+XG4gICAgICAgICAge2NoYXRIaXN0b3J5Lm1hcCgoY2hhdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgIHJlZj17aW5kZXggPT09IGNoYXRIaXN0b3J5Lmxlbmd0aCAtIDEgPyBsYXRlc3RNZXNzYWdlUmVmIDogbnVsbH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjaGF0LmlzVXNlciA/IHN0eWxlcy51c2VyTWVzc2FnZSA6IHN0eWxlcy5ncHRNZXNzYWdlfT5cbiAgICAgICAgICAgICAge2NoYXQubWVzc2FnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Qm94fT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX0gXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UgQ2hhdEdQVC4uLlwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZH0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlbmRCdXR0b259IGRpc2FibGVkPXtpc1NlbmRpbmd9PlxuICAgICAgICAgICAgICB7aXNTZW5kaW5nID8gJ1NlbmRpbmcuLi4nIDogJ1NlbmQnfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiSGVhZCIsIklucHV0IiwiQnV0dG9uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJzdHlsZXMiLCJQYWdlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJjaGF0SGlzdG9yeSIsInNldENoYXRIaXN0b3J5IiwiY29udmVyc2F0aW9ucyIsInNldENvbnZlcnNhdGlvbnMiLCJzZWxlY3RlZENvbnZlcnNhdGlvbklkIiwic2V0U2VsZWN0ZWRDb252ZXJzYXRpb25JZCIsImlzU2VuZGluZyIsInNldElzU2VuZGluZyIsImxhdGVzdE1lc3NhZ2VSZWYiLCJmZXRjaENvbnZlcnNhdGlvbnMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hNZXNzYWdlcyIsIm1hcCIsIm1zZyIsInRleHQiLCJpc1VzZXIiLCJpc191c2VyIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXlsb2FkIiwiY29udmVyc2F0aW9uX2lkIiwicHJldiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJzaWRlYmFyIiwiY29udmVyc2F0aW9uIiwiY29udmVyc2F0aW9uSXRlbSIsIm9uQ2xpY2siLCJpZCIsIm1haW4iLCJoMSIsImNoYXQiLCJpbmRleCIsInJlZiIsImxlbmd0aCIsInVzZXJNZXNzYWdlIiwiZ3B0TWVzc2FnZSIsImNoYXRCb3giLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiaW5wdXRGaWVsZCIsInNlbmRCdXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});