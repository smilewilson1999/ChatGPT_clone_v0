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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.0-canary.61_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"(app-pages-browser)/./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [chatHistory, setChatHistory] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [selectedConversationId, setSelectedConversationId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [isSending, setIsSending] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const latestMessageRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchConversations = async ()=>{\n            try {\n                const response = await fetch(\"/api/conversations\");\n                if (!response.ok) {\n                    throw new Error(\"Error: \".concat(response.status));\n                }\n                const data = await response.json();\n                setConversations(data);\n            } catch (error) {\n                console.error(\"Failed to fetch conversations\", error);\n            }\n        };\n        fetchConversations();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchMessages = async ()=>{\n            if (selectedConversationId === null) return;\n            try {\n                const response = await fetch(\"/api/conversation/\".concat(selectedConversationId));\n                if (!response.ok) {\n                    throw new Error(\"Error: \".concat(response.status));\n                }\n                const data = await response.json();\n                setChatHistory(data.map((msg)=>({\n                        message: msg.text,\n                        isUser: msg.is_user\n                    })));\n            } catch (error) {\n                console.error(\"Failed to fetch messages\", error);\n            }\n        };\n        fetchMessages();\n    }, [\n        selectedConversationId\n    ]);\n    const displayMessageGradually = (text, isUser)=>{\n        let displayText = \"\";\n        const intervalId = setInterval(()=>{\n            if (displayText.length < text.length) {\n                displayText += text[displayText.length];\n                setChatHistory((prev)=>[\n                        ...prev.slice(0, -1),\n                        {\n                            message: displayText,\n                            isUser\n                        }\n                    ]);\n            } else {\n                clearInterval(intervalId);\n            }\n        }, 5);\n    };\n    const sendMessage = async (e)=>{\n        e.preventDefault();\n        if (!message || isSending) return;\n        setIsSending(true);\n        setMessage(\"\");\n        const payload = {\n            message,\n            conversation_id: selectedConversationId\n        };\n        setChatHistory((prev)=>[\n                ...prev,\n                {\n                    message,\n                    isUser: true\n                }\n            ]);\n        try {\n            const response = await fetch(\"/api/message\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(payload)\n            });\n            if (!response.ok) {\n                throw new Error(\"Error: \".concat(response.status));\n            }\n            const data = await response.json();\n            setChatHistory((prev)=>[\n                    ...prev,\n                    {\n                        message: data.response,\n                        isUser: false\n                    }\n                ]);\n            displayMessageGradually(data.response, false);\n            if (selectedConversationId === null) {\n                setSelectedConversationId(data.conversation_id);\n            }\n        } catch (error) {\n            console.error(\"Failed to send message\", error);\n        } finally{\n            setIsSending(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Scroll to the latest of the chat history\n        if (latestMessageRef.current) {\n            latestMessageRef.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        chatHistory\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Chat with GPT\"\n                }, void 0, false, {\n                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar),\n                children: conversations.map((conversation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().conversationItem),\n                        onClick: ()=>setSelectedConversationId(conversation.id),\n                        children: [\n                            \"Conversation \",\n                            conversation.id\n                        ]\n                    }, conversation.id, true, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: \"ChatGPT Beta\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatHistory),\n                        children: chatHistory.map((chat, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: index === chatHistory.length - 1 ? latestMessageRef : null,\n                                className: chat.isUser ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().userMessage) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().gptMessage),\n                                children: chat.message\n                            }, index, false, {\n                                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatBox),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: sendMessage,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    type: \"text\",\n                                    value: message,\n                                    onChange: (e)=>setMessage(e.target.value),\n                                    placeholder: \"Message ChatGPT...\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputField)\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    type: \"submit\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().sendButton),\n                                    disabled: isSending,\n                                    children: isSending ? \"Sending...\" : \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                                    lineNumber: 157,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                            lineNumber: 151,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wilson/Documents/GitHub/ChatGPT_clone_v0/app/page.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"ihfqfsMROVzH6hTnLL95fpcsv6A=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0JJLFlBQVlvQixHQUFHLENBQUMsQ0FBQ3FDLE1BQU1DLHNCQUN0Qiw4REFBQ1o7Z0NBQ0NhLEtBQUtELFVBQVUxRCxZQUFZNkIsTUFBTSxHQUFHLElBQUlyQixtQkFBbUI7Z0NBQzNEdUMsV0FBV1UsS0FBS2xDLE1BQU0sR0FBRzNCLDRFQUFrQixHQUFHQSwyRUFBaUI7MENBQzlENkQsS0FBSzNELE9BQU87K0JBSEw0RDs7Ozs7Ozs7OztrQ0FPZCw4REFBQ1o7d0JBQUlDLFdBQVduRCx3RUFBYztrQ0FDNUIsNEVBQUNtRTs0QkFBS0MsVUFBVS9COzRCQUFhYyxXQUFXbkQscUVBQVc7OzhDQUNqRCw4REFBQ0wsdURBQUtBO29DQUFDMEUsTUFBSztvQ0FDTkMsT0FBT3BFO29DQUNQcUUsVUFBVSxDQUFDakMsSUFBMkNuQyxXQUFXbUMsRUFBRWtDLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDL0VHLGFBQVk7b0NBQ1p0QixXQUFXbkQsMkVBQWlCOzs7Ozs7OENBQ2xDLDhEQUFDSix5REFBTUE7b0NBQUN5RSxNQUFLO29DQUFTbEIsV0FBV25ELDJFQUFpQjtvQ0FBRTRFLFVBQVVsRTs4Q0FDM0RBLFlBQVksZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUM7R0FsSndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5pbnRlcmZhY2UgQ29udmVyc2F0aW9uIHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFzdFVwZGF0ZWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENoYXRNZXNzYWdlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBpc1VzZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbY2hhdEhpc3RvcnksIHNldENoYXRIaXN0b3J5XSA9IHVzZVN0YXRlPENoYXRNZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW2NvbnZlcnNhdGlvbnMsIHNldENvbnZlcnNhdGlvbnNdID0gdXNlU3RhdGU8Q29udmVyc2F0aW9uW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29udmVyc2F0aW9uSWQsIHNldFNlbGVjdGVkQ29udmVyc2F0aW9uSWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc1NlbmRpbmcsIHNldElzU2VuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGxhdGVzdE1lc3NhZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENvbnZlcnNhdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NvbnZlcnNhdGlvbnMnKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENvbnZlcnNhdGlvbnMoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGNvbnZlcnNhdGlvbnNcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaENvbnZlcnNhdGlvbnMoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZENvbnZlcnNhdGlvbklkID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvY29udmVyc2F0aW9uLyR7c2VsZWN0ZWRDb252ZXJzYXRpb25JZH1gKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENoYXRIaXN0b3J5KGRhdGEubWFwKChtc2c6IGFueSkgPT4gKHsgbWVzc2FnZTogbXNnLnRleHQsIGlzVXNlcjogbXNnLmlzX3VzZXIgfSkpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggbWVzc2FnZXNcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaE1lc3NhZ2VzKCk7XG4gIH0sIFtzZWxlY3RlZENvbnZlcnNhdGlvbklkXSk7XG5cbiAgY29uc3QgZGlzcGxheU1lc3NhZ2VHcmFkdWFsbHkgPSAodGV4dDpzdHJpbmcsIGlzVXNlcjpib29sZWFuKSA9PiB7XG4gICAgbGV0IGRpc3BsYXlUZXh0ID0gJyc7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChkaXNwbGF5VGV4dC5sZW5ndGggPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBkaXNwbGF5VGV4dCArPSB0ZXh0W2Rpc3BsYXlUZXh0Lmxlbmd0aF07XG4gICAgICAgIHNldENoYXRIaXN0b3J5KChwcmV2KSA9PiBbLi4ucHJldi5zbGljZSgwLCAtMSksIHsgbWVzc2FnZTogZGlzcGxheVRleHQsIGlzVXNlciB9XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgfVxuICAgIH0sIDUpO1xuICB9O1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIW1lc3NhZ2UgfHwgaXNTZW5kaW5nKSByZXR1cm47XG4gIFxuICAgIHNldElzU2VuZGluZyh0cnVlKTtcbiAgICBzZXRNZXNzYWdlKCcnKTtcbiAgXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBjb252ZXJzYXRpb25faWQ6IHNlbGVjdGVkQ29udmVyc2F0aW9uSWQsXG4gICAgfTtcbiAgXG4gICAgc2V0Q2hhdEhpc3RvcnkoKHByZXYpID0+IFsuLi5wcmV2LCB7IG1lc3NhZ2UsIGlzVXNlcjogdHJ1ZSB9XSk7XG4gIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL21lc3NhZ2UnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgICB9KTtcbiAgXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHNldENoYXRIaXN0b3J5KChwcmV2KSA9PiBbLi4ucHJldiwgeyBtZXNzYWdlOiBkYXRhLnJlc3BvbnNlLCBpc1VzZXI6IGZhbHNlIH1dKTtcbiAgICAgIGRpc3BsYXlNZXNzYWdlR3JhZHVhbGx5KGRhdGEucmVzcG9uc2UsIGZhbHNlKTtcblxuICAgICAgaWYgKHNlbGVjdGVkQ29udmVyc2F0aW9uSWQgPT09IG51bGwpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRDb252ZXJzYXRpb25JZChkYXRhLmNvbnZlcnNhdGlvbl9pZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIsIGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNTZW5kaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTY3JvbGwgdG8gdGhlIGxhdGVzdCBvZiB0aGUgY2hhdCBoaXN0b3J5XG4gICAgaWYgKGxhdGVzdE1lc3NhZ2VSZWYuY3VycmVudCkge1xuICAgICAgKGxhdGVzdE1lc3NhZ2VSZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICB9XG4gIH0sIFtjaGF0SGlzdG9yeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DaGF0IHdpdGggR1BUPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT5cbiAgICAgICAge2NvbnZlcnNhdGlvbnMubWFwKChjb252ZXJzYXRpb24pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17Y29udmVyc2F0aW9uLmlkfSBcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnZlcnNhdGlvbkl0ZW19IFxuICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDb252ZXJzYXRpb25JZChjb252ZXJzYXRpb24uaWQpfT5cbiAgICAgICAgICAgIENvbnZlcnNhdGlvbiB7Y29udmVyc2F0aW9uLmlkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5DaGF0R1BUIEJldGE8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRIaXN0b3J5fT5cbiAgICAgICAgICB7Y2hhdEhpc3RvcnkubWFwKChjaGF0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgcmVmPXtpbmRleCA9PT0gY2hhdEhpc3RvcnkubGVuZ3RoIC0gMSA/IGxhdGVzdE1lc3NhZ2VSZWYgOiBudWxsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NoYXQuaXNVc2VyID8gc3R5bGVzLnVzZXJNZXNzYWdlIDogc3R5bGVzLmdwdE1lc3NhZ2V9PlxuICAgICAgICAgICAgICB7Y2hhdC5tZXNzYWdlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRCb3h9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTWVzc2FnZX0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfSBcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSBDaGF0R1BULi4uXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VuZEJ1dHRvbn0gZGlzYWJsZWQ9e2lzU2VuZGluZ30+XG4gICAgICAgICAgICAgIHtpc1NlbmRpbmcgPyAnU2VuZGluZy4uLicgOiAnU2VuZCd9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiSW5wdXQiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIlBhZ2UiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImNoYXRIaXN0b3J5Iiwic2V0Q2hhdEhpc3RvcnkiLCJjb252ZXJzYXRpb25zIiwic2V0Q29udmVyc2F0aW9ucyIsInNlbGVjdGVkQ29udmVyc2F0aW9uSWQiLCJzZXRTZWxlY3RlZENvbnZlcnNhdGlvbklkIiwiaXNTZW5kaW5nIiwic2V0SXNTZW5kaW5nIiwibGF0ZXN0TWVzc2FnZVJlZiIsImZldGNoQ29udmVyc2F0aW9ucyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJmZXRjaE1lc3NhZ2VzIiwibWFwIiwibXNnIiwidGV4dCIsImlzVXNlciIsImlzX3VzZXIiLCJkaXNwbGF5TWVzc2FnZUdyYWR1YWxseSIsImRpc3BsYXlUZXh0IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwibGVuZ3RoIiwicHJldiIsInNsaWNlIiwiY2xlYXJJbnRlcnZhbCIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGF5bG9hZCIsImNvbnZlcnNhdGlvbl9pZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJzaWRlYmFyIiwiY29udmVyc2F0aW9uIiwiY29udmVyc2F0aW9uSXRlbSIsIm9uQ2xpY2siLCJpZCIsIm1haW4iLCJoMSIsImNoYXQiLCJpbmRleCIsInJlZiIsInVzZXJNZXNzYWdlIiwiZ3B0TWVzc2FnZSIsImNoYXRCb3giLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiaW5wdXRGaWVsZCIsInNlbmRCdXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});