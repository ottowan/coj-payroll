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
    return __jsx("div", {
      "class": "tags has-addons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "tag is-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("i", {
      className: "fas fa-watch",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 41
      }
    })), __jsx("span", {
      className: "tag ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, " ", str1, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 39
      }
    }, str2), str3)) // <p className="is-danger"><i className="fas fa-watch" /> {str1}<strong>{str2}</strong>{str3}</p>
    ;
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
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "hero-body is-fullheight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "columns is-vcentered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "column is-6 is-offset-1 landing-caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/static/images/logo.png",
    alt: "Logo",
    width: "300",
    className: "jsx-2842007584",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }), __jsx("h2", {
    style: {
      marginTop: 20
    },
    className: "jsx-2842007584" + " " + "subtitle is-5 is-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E25\u0E34\u0E1B\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19", __jsx("strong", {
    className: "jsx-2842007584",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 102
    }
  }, "\u0E02\u0E49\u0E32\u0E23\u0E32\u0E0A\u0E01\u0E32\u0E23\u0E15\u0E38\u0E25\u0E32\u0E01\u0E32\u0E23"), "\u0E28\u0E32\u0E25\u0E22\u0E38\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21 "), __jsx("div", {
    className: "jsx-2842007584" + " " + "button-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("a", {
    onClick: handleClick,
    "data-value": "1",
    className: "jsx-2842007584" + " " + "button cta is-rounded primary-btn raised",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "\u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32"), __jsx("a", {
    onClick: handleClick,
    "data-value": "2",
    className: "jsx-2842007584" + " " + "button cta is-rounded",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48"))), __jsx("div", {
    "data-content": "OR",
    className: "jsx-2842007584" + " " + "is-divider-vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2842007584" + " " + "column is-5 text-align-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "jsx-2842007584" + " " + "title has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")), __jsx("div", {
    className: "jsx-2842007584" + " " + "felid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, title), __jsx("div", {
    className: "jsx-2842007584" + " " + "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "jsx-2842007584" + " " + "control has-icons-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Username",
    required: true,
    className: "jsx-2842007584" + " " + "input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "jsx-2842007584" + " " + "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-2842007584" + " " + "fas fa-user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-2842007584" + " " + "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "jsx-2842007584" + " " + "control has-icons-left has-icons-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "password",
    placeholder: "Password",
    required: true,
    className: "jsx-2842007584" + " " + "input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "jsx-2842007584" + " " + "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-2842007584" + " " + "fas fa-lock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  })), __jsx("span", {
    className: "jsx-2842007584" + " " + "icon is-small is-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-2842007584" + " " + "fas fa-eye",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-2842007584" + " " + "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "column-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, title), __jsx("div", {
    className: "jsx-2842007584" + " " + "column-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2842007584" + " " + "buttons is-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "jsx-2842007584" + " " + "button is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), __jsx("br", {
    className: "jsx-2842007584",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 74
    }
  }))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2842007584",
    __self: _this
  }, ".my-column.jsx-2842007584{pading:0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBjb2ovcHJvamVjdC9jb2otcGF5cm9sbC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErR2tCLEFBRytCLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvYXBwY29qL3Byb2plY3QvY29qLXBheXJvbGwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWluSE9DIGZyb20gXCIuLi9jb21wb25lbnQvbWFpbi5ob2NcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgY29uc3QgdGl0bGVJbml0ID0gKHN0cjEsIHN0cjIsIHN0cjMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cInRhZ3MgaGFzLWFkZG9uc1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWcgaXMtZGFuZ2VyXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdhdGNoXCIgLz48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZyBcIj4ge3N0cjF9PHN0cm9uZz57c3RyMn08L3N0cm9uZz57c3RyM308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIC8vIDxwIGNsYXNzTmFtZT1cImlzLWRhbmdlclwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS13YXRjaFwiIC8+IHtzdHIxfTxzdHJvbmc+e3N0cjJ9PC9zdHJvbmc+e3N0cjN9PC9wPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUodGl0bGVJbml0KFwi4Liq4Liz4Lir4Lij4Lix4Lia4Lie4Li04Lih4Lie4LmM4Liq4Lil4Li04Lib4LmA4LiH4Li04LiZ4LmA4LiU4Li34Lit4LiZIFwiLCBcIuC4o+C4suC4ouC4muC4uOC4hOC4hOC4pVwiLCBcIlwiKSlcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG5cbiAgICBpZiAoZS50YXJnZXQuZGF0YXNldC52YWx1ZSA9PSBcIjJcIikge1xuXG4gICAgICBzZXRUaXRsZSh0aXRsZUluaXQoXCLguKrguLPguKvguKPguLHguJogXCIsIFwi4LmA4LiI4LmJ4Liy4Lir4LiZ4LmJ4Liy4LiX4Li14LmIIFwiLCBcIuC4nuC4tOC4oeC4nuC5jOC4quC4peC4tOC4m+C5gOC4h+C4tOC4meC5gOC4lOC4t+C4reC4meC4guC5ieC4suC4o+C4suC4iuC4geC4suC4o+C4leC4uOC4peC4suC4geC4suC4o+C4l+C4seC5ieC4h+C4q+C4meC5iOC4p+C4ouC4h+C4suC4mVwiKSlcbiAgICB9IGVsc2Uge1xuXG4gICAgICBzZXRUaXRsZSh0aXRsZUluaXQoXCLguKrguLPguKvguKPguLHguJrguJ7guLTguKHguJ7guYzguKrguKXguLTguJvguYDguIfguLTguJnguYDguJTguLfguK3guJkgXCIsIFwi4Lij4Liy4Lii4Lia4Li44LiE4LiE4LilXCIsIFwiXCIpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1haW5IT0M+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keSBpcy1mdWxsaGVpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZjZW50ZXJlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtNiBpcy1vZmZzZXQtMSBsYW5kaW5nLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiB3aWR0aD1cIjMwMFwiIC8+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy01IGlzLW11dGVkXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT7guKPguLDguJrguJrguJ7guLTguKHguJ7guYzguKrguKXguLTguJvguYDguIfguLTguJnguYDguJTguLfguK3guJk8c3Ryb25nPuC4guC5ieC4suC4o+C4suC4iuC4geC4suC4o+C4leC4uOC4peC4suC4geC4suC4ozwvc3Ryb25nPuC4qOC4suC4peC4ouC4uOC4leC4tOC4mOC4o+C4o+C4oSA8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGFcblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGN0YSBpcy1yb3VuZGVkIHByaW1hcnktYnRuIHJhaXNlZFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDguJzguLnguYnguJ7guLTguJ7guLLguIHguKnguLJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGN0YSBpcy1yb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZT1cIjJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOC5gOC4iOC5ieC4suC4q+C4meC5ieC4suC4l+C4teC5iFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzLWRpdmlkZXItdmVydGljYWxcIiBkYXRhLWNvbnRlbnQ9XCJPUlwiPjwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy01IHRleHQtYWxpZ24tdG9wXCI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoYXMtdGV4dC1jZW50ZXJlZFwiPuC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4mjwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVsaWRcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtcmlnaHRcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tOVwiPlxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi0xXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMgaXMtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmtcIj7guYDguILguYnguLLguKrguLnguYjguKPguLDguJrguJo8L2J1dHRvbj48YnIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2RpdiA+XG5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubXktY29sdW1ue1xuICAgICAgICAgIHBhZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L01haW5IT0MgPlxuXG5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/appcoj/project/coj-payroll/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3d9a6520c638904fd7f6.hot-update.js.map