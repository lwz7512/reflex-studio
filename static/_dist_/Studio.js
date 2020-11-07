import React, {useState} from "../web_modules/react.js";
import FileSaver from "../web_modules/file-saver.js";
import {
  Button,
  Container,
  Grid,
  Section,
  Img,
  H1,
  H2,
  P,
  Strong,
  Div,
  Span,
  Figure,
  A
} from "../web_modules/@reflexjs/components.js";
import {Radio, Label} from "../web_modules/theme-ui.js";
import {themeColorMap} from "../web_modules/common.js";
const global_config = {
  COLOR_TYPE: "DEFAULT"
};
export const ColorOptions = ({onChange}) => {
  const colors = [
    {name: "DEFAULT", color: "#06f"},
    {name: "RED", color: "#f44336"},
    {name: "PINK", color: "#e91e63"},
    {name: "PURPLE", color: "#9c27b0"},
    {name: "INDIGO", color: "#3f51b5"},
    {name: "BLUE", color: "#2196f3"},
    {name: "CYAN", color: "#00bcd4"},
    {name: "GREEN", color: "#4caf50"},
    {name: "LIME", color: "#cddc39"},
    {name: "YELLOW", color: "#ffeb3b"},
    {name: "ORANGE", color: "#ff9800"},
    {name: "BROWN", color: "#795548"},
    {name: "BLUGREY", color: "#607d8b"}
  ];
  const [options, setOptions] = useState(colors);
  const [colorType, setColorType] = useState("DEFAULT");
  const optionChangeHandler = (evt) => {
    setColorType(evt.currentTarget.value);
    if (onChange)
      onChange(evt.currentTarget.value);
    global_config.COLOR_TYPE = evt.currentTarget.value;
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, options.map((c, i) => /* @__PURE__ */ React.createElement(Label, {
    key: i,
    style: {borderBottom: "1px solid #EEE", marginBottom: 10}
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "color-mode",
    value: c.name,
    checked: colorType == c.name,
    onChange: optionChangeHandler
  }), /* @__PURE__ */ React.createElement(Span, {
    w: "6",
    h: "6",
    bg: c.color,
    mr: "4"
  }), c.name)));
};
export const Card = ({image, title, description, link, screenshot, onPreview, ...props}) => {
  const [dnlding, setDnlding] = useState(false);
  const displayPreview = () => {
    if (onPreview)
      onPreview(link);
  };
  const downloadZip = () => {
    setDnlding(true);
    const colors = themeColorMap[global_config.COLOR_TYPE];
    const data = {
      starter: link,
      primaryColor: colors[0],
      primaryHoverColor: colors[1]
    };
    fetch("/starter.zip", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then((res) => res.blob()).then(function(blob) {
      FileSaver.saveAs(blob, `${link}.zip`);
      setDnlding(false);
    });
  };
  return /* @__PURE__ */ React.createElement(A, {
    d: "flex",
    w: "90%",
    flexDirection: "column",
    textAlign: "center",
    rounded: "lg",
    borderWidth: "2px",
    p: "2",
    mb: "2",
    color: "text",
    hoverColor: "text",
    hoverTransform: "translateY(-4px)",
    hoverBoxShadow: "2xl",
    transition: "all .15s ease-in",
    ...props
  }, /* @__PURE__ */ React.createElement(Div, {
    py: "2|3|4"
  }, /* @__PURE__ */ React.createElement(H2, {
    m: "0",
    fontSize: "3xl"
  }, title), /* @__PURE__ */ React.createElement(P, {
    fontSize: "xl"
  }, description), /* @__PURE__ */ React.createElement(Button, {
    as: "button",
    mr: "4",
    ...dnlding ? {disabled: true, variant: "accent"} : {variant: "primary"},
    onClick: downloadZip
  }, dnlding ? "Generating..." : "Download"), /* @__PURE__ */ React.createElement(Button, {
    as: "button",
    color: "#ffffff",
    bg: "#1d953f",
    onClick: displayPreview
  }, "Preview")));
};
