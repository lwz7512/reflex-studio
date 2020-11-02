import React, {useState, useEffect} from "../web_modules/react.js";
import {
  Section,
  Container,
  Grid,
  Flexbox,
  H1,
  H2,
  P,
  Button,
  Img
} from "../web_modules/@reflexjs/ui.js";
import FileSaver from "../web_modules/file-saver.js";
import logo from "./Reflex-Studio.png.proxy.js";
import {Card} from "./Studio.js";
import {starters as starters2} from "./starters.js";
import {Ul, Li} from "../web_modules/@reflexjs/components.js";
function App() {
  const [themePlaceholder, setThemePlaceholder] = useState("placeholder2.jpg");
  const loadThemePreview = (url) => {
    setThemePlaceholder(url);
  };
  return /* @__PURE__ */ React.createElement(Section, {
    py: "1|2|4|6"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Grid, {
    col: "1|2|3",
    gap: "4|6|8"
  }, /* @__PURE__ */ React.createElement(Flexbox, {
    flexDirection: "column",
    alignItems: "flex-start",
    borderRight: "1"
  }, /* @__PURE__ */ React.createElement(Img, {
    src: logo,
    w: "80%"
  }), /* @__PURE__ */ React.createElement(P, {
    fontSize: "md|l",
    mt: "6",
    color: "#666",
    w: "80%",
    textAlign: "center"
  }, "Dev Experience Matters!"), /* @__PURE__ */ React.createElement(P, {
    fontSize: "1rem",
    width: "200",
    textAlign: "center"
  }, "@RCL"), /* @__PURE__ */ React.createElement(Ul, {
    paddingInlineStart: "10"
  }, /* @__PURE__ */ React.createElement(Li, null, "Step 1: Choose primary color"), /* @__PURE__ */ React.createElement(Li, null, "Step 2: Choose theme type"), /* @__PURE__ */ React.createElement(Li, null, "Step 3: Download theme zip file"), /* @__PURE__ */ React.createElement(Li, null, "Step 4: Extract theme zip file"), /* @__PURE__ */ React.createElement(Li, null, "Step 5: Enter theme folder"), /* @__PURE__ */ React.createElement(Li, null, "Step 6: Install dependency"), /* @__PURE__ */ React.createElement(Li, null, "Step 7: Start website with yarn")), /* @__PURE__ */ React.createElement(P, {
    fontSize: "sm",
    p: "2",
    mr: "20",
    backgroundColor: "#EEE",
    color: "#666",
    borderRadius: "4"
  }, "Fore More details, Checkout the README.md in the theme zip downloaded.")), /* @__PURE__ */ React.createElement(Flexbox, {
    flexDirection: "column",
    alignItems: "flex-start",
    h: "650px",
    overflowY: "scroll"
  }, starters2.map((theme, i) => /* @__PURE__ */ React.createElement(Card, {
    key: i,
    title: theme.title,
    description: theme.description,
    link: theme.link,
    screenshot: theme.screenshot,
    onPreview: loadThemePreview
  }))), /* @__PURE__ */ React.createElement(Flexbox, {
    flexDirection: "column",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Img, {
    src: themePlaceholder,
    w: "full"
  })))));
}
export default App;
