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
      className: "is-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx("i", {
      className: "fas fa-watch",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 32
      }
    }), " ", str1, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 69
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
    className: "jsx-2842007584" + " " + "hero-body is-fullheight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "columns is-vcentered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "column is-6 is-offset-1 landing-caption",
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
    className: "jsx-2842007584",
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
    className: "jsx-2842007584" + " " + "subtitle is-5 is-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E25\u0E34\u0E1B\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19", __jsx("strong", {
    className: "jsx-2842007584",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 102
    }
  }, "\u0E02\u0E49\u0E32\u0E23\u0E32\u0E0A\u0E01\u0E32\u0E23\u0E15\u0E38\u0E25\u0E32\u0E01\u0E32\u0E23"), "\u0E28\u0E32\u0E25\u0E22\u0E38\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21 "), __jsx("div", {
    className: "jsx-2842007584" + " " + "button-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("a", {
    onClick: handleClick,
    "data-value": "1",
    className: "jsx-2842007584" + " " + "button cta is-rounded primary-btn raised",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "\u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32"), __jsx("a", {
    onClick: handleClick,
    "data-value": "2",
    className: "jsx-2842007584" + " " + "button cta is-rounded",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48"))), __jsx("div", {
    "data-content": "OR",
    className: "jsx-2842007584" + " " + "is-divider-vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2842007584" + " " + "column is-5 text-align-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2842007584" + " " + "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "jsx-2842007584" + " " + "title has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")), __jsx("div", {
    className: "jsx-2842007584" + " " + "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "jsx-2842007584" + " " + "control has-icons-left",
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
    className: "jsx-2842007584" + " " + "input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "jsx-2842007584" + " " + "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-2842007584" + " " + "fas fa-user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-2842007584" + " " + "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "jsx-2842007584" + " " + "control has-icons-left has-icons-right",
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
    className: "jsx-2842007584" + " " + "input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "jsx-2842007584" + " " + "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-2842007584" + " " + "fas fa-lock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  })), __jsx("span", {
    className: "jsx-2842007584" + " " + "icon is-small is-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-2842007584" + " " + "fas fa-eye",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "jsx-2842007584" + " " + "buttons is-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "jsx-2842007584" + " " + "button is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), __jsx("br", {
    className: "jsx-2842007584",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 72
    }
  })), __jsx("div", {
    className: "jsx-2842007584" + " " + "felid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2842007584",
    __self: _this
  }, ".my-column.jsx-2842007584{pading:0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBjb2ovcHJvamVjdC9jb2otcGF5cm9sbC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR2tCLEFBRytCLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvYXBwY29qL3Byb2plY3QvY29qLXBheXJvbGwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWluSE9DIGZyb20gXCIuLi9jb21wb25lbnQvbWFpbi5ob2NcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgY29uc3QgdGl0bGVJbml0ID0gKHN0cjEsIHN0cjIsIHN0cjMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHAgY2xhc3NOYW1lPVwiaXMtZGFuZ2VyXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdhdGNoXCIgLz4ge3N0cjF9PHN0cm9uZz57c3RyMn08L3N0cm9uZz57c3RyM308L3A+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSh0aXRsZUluaXQoXCLguKrguLPguKvguKPguLHguJrguJ7guLTguKHguJ7guYzguKrguKXguLTguJvguYDguIfguLTguJnguYDguJTguLfguK3guJkgXCIsIFwi4Lij4Liy4Lii4Lia4Li44LiE4LiE4LilXCIsIFwiXCIpKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcblxuICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnZhbHVlID09IFwiMlwiKSB7XG5cbiAgICAgIHNldFRpdGxlKHRpdGxlSW5pdChcIuC4quC4s+C4q+C4o+C4seC4miBcIiwgXCLguYDguIjguYnguLLguKvguJnguYnguLLguJfguLXguYggXCIsIFwi4Lie4Li04Lih4Lie4LmM4Liq4Lil4Li04Lib4LmA4LiH4Li04LiZ4LmA4LiU4Li34Lit4LiZ4LiC4LmJ4Liy4Lij4Liy4LiK4LiB4Liy4Lij4LiV4Li44Lil4Liy4LiB4Liy4Lij4LiX4Lix4LmJ4LiH4Lir4LiZ4LmI4Lin4Lii4LiH4Liy4LiZXCIpKVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHNldFRpdGxlKHRpdGxlSW5pdChcIuC4quC4s+C4q+C4o+C4seC4muC4nuC4tOC4oeC4nuC5jOC4quC4peC4tOC4m+C5gOC4h+C4tOC4meC5gOC4lOC4t+C4reC4mSBcIiwgXCLguKPguLLguKLguJrguLjguITguITguKVcIiwgXCJcIikpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpbkhPQz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5IGlzLWZ1bGxoZWlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmNlbnRlcmVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy02IGlzLW9mZnNldC0xIGxhbmRpbmctY2FwdGlvblwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiIHdpZHRoPVwiMzAwXCIgLz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTUgaXMtbXV0ZWRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PuC4o+C4sOC4muC4muC4nuC4tOC4oeC4nuC5jOC4quC4peC4tOC4m+C5gOC4h+C4tOC4meC5gOC4lOC4t+C4reC4mTxzdHJvbmc+4LiC4LmJ4Liy4Lij4Liy4LiK4LiB4Liy4Lij4LiV4Li44Lil4Liy4LiB4Liy4LijPC9zdHJvbmc+4Lio4Liy4Lil4Lii4Li44LiV4Li04LiY4Lij4Lij4LihIDwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8YVxuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gY3RhIGlzLXJvdW5kZWQgcHJpbWFyeS1idG4gcmFpc2VkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOC4nOC4ueC5ieC4nuC4tOC4nuC4suC4geC4qeC4slxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gY3RhIGlzLXJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBkYXRhLXZhbHVlPVwiMlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg4LmA4LiI4LmJ4Liy4Lir4LiZ4LmJ4Liy4LiX4Li14LmIXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtZGl2aWRlci12ZXJ0aWNhbFwiIGRhdGEtY29udGVudD1cIk9SXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTUgdGV4dC1hbGlnbi10b3BcIj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGhhcy10ZXh0LWNlbnRlcmVkXCI+4LmA4LiC4LmJ4Liy4Liq4Li54LmI4Lij4Liw4Lia4LiaPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCIgPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXllXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyBpcy1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmtcIj7guYDguILguYnguLLguKrguLnguYjguKPguLDguJrguJo8L2J1dHRvbj48YnIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWxpZFwiPlxuXG4gICAgICAgICAgICAgICAge31cblxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2RpdiA+XG5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubXktY29sdW1ue1xuICAgICAgICAgIHBhZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L01haW5IT0MgPlxuXG5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/appcoj/project/coj-payroll/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.8a8c5a4aa1e82d4028b5.hot-update.js.map