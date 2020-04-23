webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_main_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/main.hoc */ "./component/main.hoc.js");
var _this = undefined,
    _jsxFileName = "/Users/appcoj/project/coj-payroll/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Index = function Index() {
  var titleInit = function titleInit(str1, str2, str3) {
    return __jsx("div", {
      className: "tags has-addons",
      style: {
        marginBottom: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "tag is-warning",
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
        columnNumber: 42
      }
    })), __jsx("span", {
      className: "tag ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, " ", str1, "\xA0", __jsx("strong", {
      className: "has-text-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 45
      }
    }, str2), "\xA0", str3));
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(titleInit("สำหรับพิมพ์สลิปเงินเดือน ", "รายบุคคล", "")),
      title = _useState[0],
      setTitle = _useState[1];

  var handleClick = function handleClick(e) {
    if (e.target.dataset.value == "2") {
      setTitle(titleInit("สำหรับ ", "เจ้าหน้าที่ ", "พิมพ์สลิปเงินเดือนข้าราชการตุลาการทั้งหน่วยงาน"));
    } else {
      setTitle(titleInit("สำหรับพิมพ์สลิปเงินเดือน ", "รายบุคคล", ""));
    }
  };

  return __jsx(_component_main_hoc__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hero-body is-fullheight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "columns is-vcentered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "column is-6 is-offset-1 landing-caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/static/images/logo.png",
    alt: "Logo",
    width: "300",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }), __jsx("h2", {
    className: "subtitle is-5 is-muted",
    style: {
      marginTop: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E25\u0E34\u0E1B\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 102
    }
  }, "\u0E02\u0E49\u0E32\u0E23\u0E32\u0E0A\u0E01\u0E32\u0E23\u0E15\u0E38\u0E25\u0E32\u0E01\u0E32\u0E23"), "\u0E28\u0E32\u0E25\u0E22\u0E38\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21 "), __jsx("div", {
    className: "button-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "button cta is-rounded primary-btn raised",
    onClick: handleClick,
    "data-value": "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "\u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32"), __jsx("a", {
    className: "button cta is-rounded",
    onClick: handleClick,
    "data-value": "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48"))), __jsx("div", {
    className: "is-divider-vertical",
    "data-content": "OR",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "column is-5 text-align-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("article", {
    className: "panel is-warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "panel-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), __jsx("div", {
    className: "panel-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "control has-icons-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("input", {
    className: "input",
    type: "text",
    placeholder: "Username",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fas fa-user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  })))))), __jsx("div", {
    className: "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "title has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")), __jsx("div", {
    className: "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "control has-icons-left has-icons-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("input", {
    className: "input",
    type: "password",
    placeholder: "Password",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "icon is-small is-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-lock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  })), __jsx("span", {
    className: "icon is-small is-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-eye",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "buttons is-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "button is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 72
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e60221014d551f0d1e93.hot-update.js.map