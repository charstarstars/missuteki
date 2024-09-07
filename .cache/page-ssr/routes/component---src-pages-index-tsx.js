"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 7200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6779);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carbon_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6811);
/* harmony import */ var _carbon_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2411);


const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const IndexPage = () => {
  const defaultLetters = [{
    letter: "M",
    color: "#FF0000",
    fontFamily: "Arial",
    transform: "translate(2px, -3px) rotate(5deg)"
  }, {
    letter: "I",
    color: "#00FF00",
    fontFamily: "Arial",
    transform: "translate(-1px, 2px) rotate(-3deg)"
  }, {
    letter: "S",
    color: "#0000FF",
    fontFamily: "Arial",
    transform: "translate(3px, 1px) rotate(2deg)"
  }, {
    letter: "S",
    color: "#FF00FF",
    fontFamily: "Arial",
    transform: "translate(-2px, -2px) rotate(-4deg)"
  }, {
    letter: "U",
    color: "#00FFFF",
    fontFamily: "Arial",
    transform: "translate(1px, 3px) rotate(3deg)"
  }, {
    letter: "T",
    color: "#FFFF00",
    fontFamily: "Arial",
    transform: "translate(-3px, -1px) rotate(-2deg)"
  }, {
    letter: "E",
    color: "#FF0000",
    fontFamily: "Arial",
    transform: "translate(2px, 2px) rotate(4deg)"
  }, {
    letter: "K",
    color: "#8000FF",
    fontFamily: "Arial",
    transform: "translate(-1px, -3px) rotate(-5deg)"
  }, {
    letter: "I",
    color: "#008080",
    fontFamily: "Arial",
    transform: "translate(3px, -2px) rotate(3deg)"
  }];
  const [letters, setLetters] = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultLetters);
  const fonts = ['Arial', 'Verdana', 'Georgia', 'Courier', 'Times New Roman', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'];
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#00FFFF', '#FFFF00', '#FF8000', '#8000FF', '#008080', '#800000', '#008000', '#000080'];
  const handleClickLetter = letterIndex => () => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setLetters([...letters.slice(0, letterIndex), {
      ...letters[letterIndex],
      color: randomColor,
      fontFamily: randomFont
    }, ...letters.slice(letterIndex + 1)]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "flex justify-center items-center h-[100vh] flex-col gap-10",
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "word",
    className: "text-8xl mx-auto "
  }, letters.map(({
    letter,
    color,
    transform,
    fontFamily
  }, letterIndex) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "hover:animate-wiggle transition-all cursor-pointer inline-block mx-2",
      style: {
        color,
        transform,
        fontFamily
      },
      onClick: handleClickLetter(letterIndex)
    }, letter);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Ariel Liu makes art and makes art about art."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " flex space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.instagram.com/missuteki/",
    className: "flex items-center p-2",
    target: "_blank",
    style: {
      color: colors[Math.floor(Math.random() * colors.length)]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_1__/* .LogoInstagram */ .oE, {
    className: "mr-2"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Instagram")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://missuteki.substack.com/",
    className: "flex items-center p-2",
    target: "_blank",
    style: {
      color: colors[Math.floor(Math.random() * colors.length)]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_2__/* .Blog */ .l3, {
    className: "mr-2"
  }), " Newsletter")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home Page");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map