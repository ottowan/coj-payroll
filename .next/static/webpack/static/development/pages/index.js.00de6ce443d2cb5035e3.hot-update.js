webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_main_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/main.hoc */ "./component/main.hoc.js");
var _this = undefined,
    _jsxFileName = "/Users/appcoj/project/coj-payroll/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Index = function Index() {
  var titleInit = function titleInit(str1, str2, str3) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, str1, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 16
      }
    }, str2), str3);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(titleInit("สำหรับพิมพ์สลิปเงินเดือน ", "รายบุคคล", "")),
      title = _useState[0],
      setTitle = _useState[1];

  var handleClick = function handleClick(e) {
    if (e.target.dataset.value == "2") {
      setTitle(titleInit("สำหรับ ", "เจ้าหน้าที่ ", "พิมพ์สลิปเงินเดือนข้าราชการตุลาการทั้งหน่วยงาน"));
    } else {
      setTitle(titleInit("สำหรับพิมพ์สลิปเงินเดือน ", "รายบุคคล", ""));
    }
  };

  return __jsx(_component_main_hoc__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + "hero-body is-fullheight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + "columns is-vcentered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + "column is-6 is-offset-1 landing-caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/static/images/logo.png",
    alt: "Logo",
    width: "300",
    className: "jsx-4158932565",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }), __jsx("h2", {
    style: {
      marginTop: 20
    },
    className: "jsx-4158932565" + " " + "subtitle is-5 is-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E25\u0E34\u0E1B\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19", __jsx("strong", {
    className: "jsx-4158932565",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 102
    }
  }, "\u0E02\u0E49\u0E32\u0E23\u0E32\u0E0A\u0E01\u0E32\u0E23\u0E15\u0E38\u0E25\u0E32\u0E01\u0E32\u0E23"), "\u0E28\u0E32\u0E25\u0E22\u0E38\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21 "), __jsx("div", {
    className: "jsx-4158932565" + " " + "button-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("a", {
    onClick: handleClick,
    "data-value": "1",
    className: "jsx-4158932565" + " " + "button cta is-rounded primary-btn raised",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "\u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32"), __jsx("a", {
    onClick: handleClick,
    "data-value": "2",
    className: "jsx-4158932565" + " " + "button cta is-rounded",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48"))), __jsx("div", {
    "data-content": "OR",
    className: "jsx-4158932565" + " " + "is-divider-vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-4158932565" + " " + "column is-5 text-align-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-4158932565" + " " + "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "jsx-4158932565" + " " + "title has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")), __jsx("div", {
    className: "jsx-4158932565" + " " + "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "jsx-4158932565" + " " + "control has-icons-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Username",
    required: true,
    className: "jsx-4158932565" + " " + "input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "jsx-4158932565" + " " + "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-4158932565" + " " + "fas fa-user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-4158932565" + " " + "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "jsx-4158932565" + " " + "control has-icons-left has-icons-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "password",
    placeholder: "Password",
    required: true,
    className: "jsx-4158932565" + " " + "input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "jsx-4158932565" + " " + "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-4158932565" + " " + "fas fa-lock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  })), __jsx("span", {
    className: "jsx-4158932565" + " " + "icon is-small is-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-4158932565" + " " + "fas fa-eye",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-4158932565" + " " + "buttons is-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "jsx-4158932565" + " " + "button is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), __jsx("br", {
    className: "jsx-4158932565",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 72
    }
  })), __jsx("div", {
    className: "jsx-4158932565" + " " + "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      pading: 0
    },
    className: "jsx-4158932565" + " " + "column-1 my-colu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "jsx-4158932565" + " " + "fas fa-watch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  })), __jsx("div", {
    style: {
      pading: 0
    },
    className: "jsx-4158932565" + " " + "column is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, title)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4158932565",
    __self: _this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBjb2ovcHJvamVjdC9jb2otcGF5cm9sbC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR2tCIiwiZmlsZSI6Ii9Vc2Vycy9hcHBjb2ovcHJvamVjdC9jb2otcGF5cm9sbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1haW5IT0MgZnJvbSBcIi4uL2NvbXBvbmVudC9tYWluLmhvY1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICBjb25zdCB0aXRsZUluaXQgPSAoc3RyMSwgc3RyMiwgc3RyMykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8cD57c3RyMX08c3Ryb25nPntzdHIyfTwvc3Ryb25nPntzdHIzfTwvcD5cbiAgICApXG4gIH1cblxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlSW5pdChcIuC4quC4s+C4q+C4o+C4seC4muC4nuC4tOC4oeC4nuC5jOC4quC4peC4tOC4m+C5gOC4h+C4tOC4meC5gOC4lOC4t+C4reC4mSBcIiwgXCLguKPguLLguKLguJrguLjguITguITguKVcIiwgXCJcIikpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuXG4gICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQudmFsdWUgPT0gXCIyXCIpIHtcblxuICAgICAgc2V0VGl0bGUodGl0bGVJbml0KFwi4Liq4Liz4Lir4Lij4Lix4LiaIFwiLCBcIuC5gOC4iOC5ieC4suC4q+C4meC5ieC4suC4l+C4teC5iCBcIiwgXCLguJ7guLTguKHguJ7guYzguKrguKXguLTguJvguYDguIfguLTguJnguYDguJTguLfguK3guJnguILguYnguLLguKPguLLguIrguIHguLLguKPguJXguLjguKXguLLguIHguLLguKPguJfguLHguYnguIfguKvguJnguYjguKfguKLguIfguLLguJlcIikpXG4gICAgfSBlbHNlIHtcblxuICAgICAgc2V0VGl0bGUodGl0bGVJbml0KFwi4Liq4Liz4Lir4Lij4Lix4Lia4Lie4Li04Lih4Lie4LmM4Liq4Lil4Li04Lib4LmA4LiH4Li04LiZ4LmA4LiU4Li34Lit4LiZIFwiLCBcIuC4o+C4suC4ouC4muC4uOC4hOC4hOC4pVwiLCBcIlwiKSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNYWluSE9DPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHkgaXMtZnVsbGhlaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12Y2VudGVyZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTYgaXMtb2Zmc2V0LTEgbGFuZGluZy1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9XCIzMDBcIiAvPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNSBpcy1tdXRlZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+4Lij4Liw4Lia4Lia4Lie4Li04Lih4Lie4LmM4Liq4Lil4Li04Lib4LmA4LiH4Li04LiZ4LmA4LiU4Li34Lit4LiZPHN0cm9uZz7guILguYnguLLguKPguLLguIrguIHguLLguKPguJXguLjguKXguLLguIHguLLguKM8L3N0cm9uZz7guKjguLLguKXguKLguLjguJXguLTguJjguKPguKPguKEgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcFwiPlxuICAgICAgICAgICAgICAgIDxhXG5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBjdGEgaXMtcm91bmRlZCBwcmltYXJ5LWJ0biByYWlzZWRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBkYXRhLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg4Lic4Li54LmJ4Lie4Li04Lie4Liy4LiB4Lip4LiyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBjdGEgaXMtcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9XCIyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDguYDguIjguYnguLLguKvguJnguYnguLLguJfguLXguYhcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcy1kaXZpZGVyLXZlcnRpY2FsXCIgZGF0YS1jb250ZW50PVwiT1JcIj48L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNSB0ZXh0LWFsaWduLXRvcFwiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaGFzLXRleHQtY2VudGVyZWRcIj7guYDguILguYnguLLguKrguLnguYjguKPguLDguJrguJo8L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtcmlnaHRcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zIGlzLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlua1wiPuC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4mjwvYnV0dG9uPjxiciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLTEgbXktY29sdVwiIHN0eWxlPXt7IHBhZGluZzogMCB9fT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13YXRjaFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtbGVmdFwiIHN0eWxlPXt7IHBhZGluZzogMCB9fSA+XG4gICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXYgPlxuXG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9NYWluSE9DID5cblxuXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/appcoj/project/coj-payroll/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.00de6ce443d2cb5035e3.hot-update.js.map