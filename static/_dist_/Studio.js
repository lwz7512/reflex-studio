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
export const Card = ({image, title, description, link, screenshot, onPreview, ...props}) => {
  const [dnlding, setDnlding] = useState(false);
  const displayPreview = () => {
    if (onPreview)
      onPreview(screenshot);
  };
  const downloadZip = () => {
    setDnlding(true);
    const data = {
      starter: link
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
