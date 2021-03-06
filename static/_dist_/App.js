import React, {useState, useEffect} from "../web_modules/react.js";
import {
  A,
  Section,
  Container,
  Grid,
  Flexbox,
  H1,
  H2,
  H3,
  P,
  Button,
  Img,
  Span
} from "../web_modules/@reflexjs/ui.js";
import {Ul, Li} from "../web_modules/@reflexjs/components.js";
import {GitHubLogoIcon, AvatarIcon, PersonIcon} from "../web_modules/@modulz/radix-icons.js";
import FileSaver from "../web_modules/file-saver.js";
import logo from "./Reflex-Studio.png.proxy.js";
import {Card, ColorOptions, ThemePreviewer} from "./Studio.js";
import {starters as starters2} from "./starters.js";
function App() {
  const [color, setColor] = useState("DEFAULT");
  const [starter, setStarter] = useState("reflex-starter-base");
  const [themePreviewPath, setThemePreviewPath] = useState("favicon.png");
  useEffect(() => {
    let themePath = getThemePath("reflex-starter-base", "DEFAULT");
    setThemePreviewPath(themePath);
  }, []);
  const getThemePath = (theme, color2) => {
    let currentContext = window.location.protocol + "//" + window.location.host;
    const themePath = currentContext + "/shots/" + theme + "-" + color2 + ".png";
    return themePath;
  };
  const loadThemePreview = (theme) => {
    setStarter(theme);
    let themePath = getThemePath(theme, color);
    setThemePreviewPath(themePath);
  };
  const colorChangeHandler = (v) => {
    setColor(v);
    let themePath = getThemePath(starter, v);
    setThemePreviewPath(themePath);
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
    display: "flex",
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(A, {
    href: "http://wenzhi.me",
    target: "_blank",
    ml: "4"
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    width: "20",
    height: "20",
    color: "#333"
  })), /* @__PURE__ */ React.createElement(A, {
    href: "https://github.com/lwz7512/reflex-studio",
    target: "_blank",
    ml: "4"
  }, /* @__PURE__ */ React.createElement(GitHubLogoIcon, {
    width: "20",
    height: "20",
    color: "#333"
  }))), /* @__PURE__ */ React.createElement(Ul, {
    paddingInlineStart: "10"
  }, /* @__PURE__ */ React.createElement(Li, null, "Step 1: Choose primary color"), /* @__PURE__ */ React.createElement(Li, null, "Step 2: Choose theme type"), /* @__PURE__ */ React.createElement(Li, null, "Step 3: Download theme zip file"), /* @__PURE__ */ React.createElement(Li, null, "Step 4: Extract theme zip file"), /* @__PURE__ */ React.createElement(Li, null, "Step 5: Enter theme folder"), /* @__PURE__ */ React.createElement(Li, null, "Step 6: Install dependency"), /* @__PURE__ */ React.createElement(Li, null, "Step 7: Start website with yarn")), /* @__PURE__ */ React.createElement(P, {
    fontSize: "sm",
    p: "2",
    mr: "20",
    backgroundColor: "#EEE",
    color: "#666",
    borderRadius: "4"
  }, "Fore More details, Checkout the README.md in the theme zip file downloaded.")), /* @__PURE__ */ React.createElement(Flexbox, {
    flexDirection: "column",
    alignItems: "flex-start",
    h: "850px",
    overflowY: "scroll"
  }, /* @__PURE__ */ React.createElement(H3, {
    marginBlockStart: "8"
  }, "Step 1: select color"), /* @__PURE__ */ React.createElement(ColorOptions, {
    onChange: colorChangeHandler
  }), /* @__PURE__ */ React.createElement(H3, null, "Step 2: select theme"), starters2.map((theme, i) => /* @__PURE__ */ React.createElement(Card, {
    key: i,
    title: theme.title,
    description: theme.description,
    link: theme.link,
    screenshot: theme.screenshot,
    onPreview: loadThemePreview
  }))), /* @__PURE__ */ React.createElement(Flexbox, {
    flexDirection: "column",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(ThemePreviewer, {
    src: themePreviewPath
  })))));
}
export default App;
