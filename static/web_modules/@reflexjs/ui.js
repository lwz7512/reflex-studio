import { j as jsx$1, u as useThemeUI, i as index } from '../common/is-prop-valid.browser.esm-0e911ea7.js';
import '../common/_commonjsHelpers-8c19dec8.js';
import { r as react } from '../common/index-d9c98906.js';
import '../common/css.browser.esm-8f3047a1.js';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var cssProps = {
  alignContent: ["alignContent"],
  alignItems: ["alignItems"],
  alignSelf: ["alignSelf"],
  animation: ["animation"],
  animationDelay: ["animationDelay"],
  animationDirection: ["animationDirection"],
  animationDuration: ["animationDuration"],
  animationFillMode: ["animationFillMode"],
  animationIterationCount: ["animationIterationCount"],
  animationName: ["animationName"],
  animationPlayState: ["animationPlayState"],
  animationTimingFunction: ["animationTimingFunction"],
  appearance: ["appearance"],
  aspectRatio: ["aspectRatio"],
  backdropFilter: ["backdropFilter"],
  backfaceVisibility: ["backfaceVisibility"],
  background: ["background"],
  backgroundAttachment: ["backgroundAttachment"],
  backgroundBlendMode: ["backgroundBlendMode"],
  backgroundClip: ["backgroundClip"],
  backgroundColor: ["backgroundColor"],
  backgroundImage: ["backgroundImage"],
  backgroundOrigin: ["backgroundOrigin"],
  backgroundPosition: ["backgroundPosition"],
  backgroundPositionX: ["backgroundPositionX"],
  backgroundPositionY: ["backgroundPositionY"],
  backgroundRepeat: ["backgroundRepeat"],
  backgroundSize: ["backgroundSize"],
  blockOverflow: ["blockOverflow"],
  blockSize: ["blockSize"],
  border: ["border"],
  borderBlock: ["borderBlock"],
  borderBlockColor: ["borderBlockColor"],
  borderBlockEnd: ["borderBlockEnd"],
  borderBlockEndColor: ["borderBlockEndColor"],
  borderBlockEndStyle: ["borderBlockEndStyle"],
  borderBlockEndWidth: ["borderBlockEndWidth"],
  borderBlockStart: ["borderBlockStart"],
  borderBlockStartColor: ["borderBlockStartColor"],
  borderBlockStartStyle: ["borderBlockStartStyle"],
  borderBlockStartWidth: ["borderBlockStartWidth"],
  borderBlockStyle: ["borderBlockStyle"],
  borderBlockWidth: ["borderBlockWidth"],
  borderBottom: ["borderBottom"],
  borderBottomColor: ["borderBottomColor"],
  borderBottomLeftRadius: ["borderBottomLeftRadius"],
  borderBottomRightRadius: ["borderBottomRightRadius"],
  borderBottomStyle: ["borderBottomStyle"],
  borderBottomWidth: ["borderBottomWidth"],
  borderCollapse: ["borderCollapse"],
  borderColor: ["borderColor"],
  borderEndEndRadius: ["borderEndEndRadius"],
  borderEndStartRadius: ["borderEndStartRadius"],
  borderImage: ["borderImage"],
  borderImageOutset: ["borderImageOutset"],
  borderImageRepeat: ["borderImageRepeat"],
  borderImageSlice: ["borderImageSlice"],
  borderImageSource: ["borderImageSource"],
  borderImageWidth: ["borderImageWidth"],
  borderInline: ["borderInline"],
  borderInlineColor: ["borderInlineColor"],
  borderInlineEnd: ["borderInlineEnd"],
  borderInlineEndColor: ["borderInlineEndColor"],
  borderInlineEndStyle: ["borderInlineEndStyle"],
  borderInlineEndWidth: ["borderInlineEndWidth"],
  borderInlineStart: ["borderInlineStart"],
  borderInlineStartColor: ["borderInlineStartColor"],
  borderInlineStartStyle: ["borderInlineStartStyle"],
  borderInlineStartWidth: ["borderInlineStartWidth"],
  borderInlineStyle: ["borderInlineStyle"],
  borderInlineWidth: ["borderInlineWidth"],
  borderLeft: ["borderLeft"],
  borderLeftColor: ["borderLeftColor"],
  borderLeftStyle: ["borderLeftStyle"],
  borderLeftWidth: ["borderLeftWidth"],
  borderRadius: ["borderRadius"],
  borderRight: ["borderRight"],
  borderRightColor: ["borderRightColor"],
  borderRightStyle: ["borderRightStyle"],
  borderRightWidth: ["borderRightWidth"],
  borderSpacing: ["borderSpacing"],
  borderStartEndRadius: ["borderStartEndRadius"],
  borderStartStartRadius: ["borderStartStartRadius"],
  borderStyle: ["borderStyle"],
  borderTop: ["borderTop"],
  borderTopColor: ["borderTopColor"],
  borderTopLeftRadius: ["borderTopLeftRadius"],
  borderTopRightRadius: ["borderTopRightRadius"],
  borderTopStyle: ["borderTopStyle"],
  borderTopWidth: ["borderTopWidth"],
  borderWidth: ["borderWidth"],
  bottom: ["bottom"],
  boxDecorationBreak: ["boxDecorationBreak"],
  boxShadow: ["boxShadow"],
  boxSizing: ["boxSizing"],
  breakAfter: ["breakAfter"],
  breakBefore: ["breakBefore"],
  breakInside: ["breakInside"],
  captionSide: ["captionSide"],
  caretColor: ["caretColor"],
  clear: ["clear"],
  clipPath: ["clipPath"],
  color: ["color"],
  colorAdjust: ["colorAdjust"],
  columnCount: ["columnCount"],
  columnFill: ["columnFill"],
  columnGap: ["columnGap"],
  columnRule: ["columnRule"],
  columnRuleColor: ["columnRuleColor"],
  columnRuleStyle: ["columnRuleStyle"],
  columnRuleWidth: ["columnRuleWidth"],
  columns: ["columns"],
  columnSpan: ["columnSpan"],
  columnWidth: ["columnWidth"],
  contain: ["contain"],
  content: ["content"],
  counterIncrement: ["counterIncrement"],
  counterReset: ["counterReset"],
  counterSet: ["counterSet"],
  cursor: ["cursor"],
  direction: ["direction"],
  display: ["display"],
  emptyCells: ["emptyCells"],
  filter: ["filter"],
  flex: ["flex"],
  flexBasis: ["flexBasis"],
  flexDirection: ["flexDirection"],
  flexFlow: ["flexFlow"],
  flexGrow: ["flexGrow"],
  flexShrink: ["flexShrink"],
  flexWrap: ["flexWrap"],
  "float": ["float"],
  font: ["font"],
  fontFamily: ["fontFamily"],
  fontFeatureSettings: ["fontFeatureSettings"],
  fontKerning: ["fontKerning"],
  fontLanguageOverride: ["fontLanguageOverride"],
  fontOpticalSizing: ["fontOpticalSizing"],
  fontSize: ["fontSize"],
  fontSizeAdjust: ["fontSizeAdjust"],
  fontStretch: ["fontStretch"],
  fontStyle: ["fontStyle"],
  fontSynthesis: ["fontSynthesis"],
  fontVariant: ["fontVariant"],
  fontVariantCaps: ["fontVariantCaps"],
  fontVariantEastAsian: ["fontVariantEastAsian"],
  fontVariantLigatures: ["fontVariantLigatures"],
  fontVariantNumeric: ["fontVariantNumeric"],
  fontVariantPosition: ["fontVariantPosition"],
  fontVariationSettings: ["fontVariationSettings"],
  fontWeight: ["fontWeight"],
  gap: ["gap"],
  grid: ["grid"],
  gridArea: ["gridArea"],
  gridAutoColumns: ["gridAutoColumns"],
  gridAutoFlow: ["gridAutoFlow"],
  gridAutoRows: ["gridAutoRows"],
  gridColumn: ["gridColumn"],
  gridColumnEnd: ["gridColumnEnd"],
  gridColumnStart: ["gridColumnStart"],
  gridRow: ["gridRow"],
  gridRowEnd: ["gridRowEnd"],
  gridRowStart: ["gridRowStart"],
  gridTemplate: ["gridTemplate"],
  gridTemplateAreas: ["gridTemplateAreas"],
  gridTemplateColumns: ["gridTemplateColumns"],
  gridTemplateRows: ["gridTemplateRows"],
  hangingPunctuation: ["hangingPunctuation"],
  height: ["height"],
  hyphens: ["hyphens"],
  imageOrientation: ["imageOrientation"],
  imageRendering: ["imageRendering"],
  imageResolution: ["imageResolution"],
  initialLetter: ["initialLetter"],
  inlineSize: ["inlineSize"],
  inset: ["inset"],
  insetBlock: ["insetBlock"],
  insetBlockEnd: ["insetBlockEnd"],
  insetBlockStart: ["insetBlockStart"],
  insetInline: ["insetInline"],
  insetInlineEnd: ["insetInlineEnd"],
  insetInlineStart: ["insetInlineStart"],
  isolation: ["isolation"],
  justifyContent: ["justifyContent"],
  justifyItems: ["justifyItems"],
  justifySelf: ["justifySelf"],
  left: ["left"],
  letterSpacing: ["letterSpacing"],
  lineBreak: ["lineBreak"],
  lineClamp: ["lineClamp"],
  lineHeight: ["lineHeight"],
  lineHeightStep: ["lineHeightStep"],
  listStyle: ["listStyle"],
  listStyleImage: ["listStyleImage"],
  listStylePosition: ["listStylePosition"],
  listStyleType: ["listStyleType"],
  margin: ["margin"],
  marginBlock: ["marginBlock"],
  marginBlockEnd: ["marginBlockEnd"],
  marginBlockStart: ["marginBlockStart"],
  marginBottom: ["marginBottom"],
  marginInline: ["marginInline"],
  marginInlineEnd: ["marginInlineEnd"],
  marginInlineStart: ["marginInlineStart"],
  marginLeft: ["marginLeft"],
  marginRight: ["marginRight"],
  marginTop: ["marginTop"],
  mask: ["mask"],
  maskBorder: ["maskBorder"],
  maskBorderMode: ["maskBorderMode"],
  maskBorderOutset: ["maskBorderOutset"],
  maskBorderRepeat: ["maskBorderRepeat"],
  maskBorderSlice: ["maskBorderSlice"],
  maskBorderSource: ["maskBorderSource"],
  maskBorderWidth: ["maskBorderWidth"],
  maskClip: ["maskClip"],
  maskComposite: ["maskComposite"],
  maskImage: ["maskImage"],
  maskMode: ["maskMode"],
  maskOrigin: ["maskOrigin"],
  maskPosition: ["maskPosition"],
  maskRepeat: ["maskRepeat"],
  maskSize: ["maskSize"],
  maskType: ["maskType"],
  maxBlockSize: ["maxBlockSize"],
  maxHeight: ["maxHeight"],
  maxInlineSize: ["maxInlineSize"],
  maxLines: ["maxLines"],
  maxWidth: ["maxWidth"],
  minBlockSize: ["minBlockSize"],
  minHeight: ["minHeight"],
  minInlineSize: ["minInlineSize"],
  minWidth: ["minWidth"],
  mixBlendMode: ["mixBlendMode"],
  motion: ["motion"],
  motionDistance: ["motionDistance"],
  motionPath: ["motionPath"],
  motionRotation: ["motionRotation"],
  objectFit: ["objectFit"],
  objectPosition: ["objectPosition"],
  offset: ["offset"],
  offsetAnchor: ["offsetAnchor"],
  offsetDistance: ["offsetDistance"],
  offsetPath: ["offsetPath"],
  offsetRotate: ["offsetRotate"],
  offsetRotation: ["offsetRotation"],
  opacity: ["opacity"],
  order: ["order"],
  orphans: ["orphans"],
  outline: ["outline"],
  outlineColor: ["outlineColor"],
  outlineOffset: ["outlineOffset"],
  outlineStyle: ["outlineStyle"],
  outlineWidth: ["outlineWidth"],
  overflow: ["overflow"],
  overflowAnchor: ["overflowAnchor"],
  overflowBlock: ["overflowBlock"],
  overflowClipBox: ["overflowClipBox"],
  overflowInline: ["overflowInline"],
  overflowWrap: ["overflowWrap"],
  overflowX: ["overflowX"],
  overflowY: ["overflowY"],
  overscrollBehavior: ["overscrollBehavior"],
  overscrollBehaviorBlock: ["overscrollBehaviorBlock"],
  overscrollBehaviorInline: ["overscrollBehaviorInline"],
  overscrollBehaviorX: ["overscrollBehaviorX"],
  overscrollBehaviorY: ["overscrollBehaviorY"],
  padding: ["padding"],
  paddingBlock: ["paddingBlock"],
  paddingBlockEnd: ["paddingBlockEnd"],
  paddingBlockStart: ["paddingBlockStart"],
  paddingBottom: ["paddingBottom"],
  paddingInline: ["paddingInline"],
  paddingInlineEnd: ["paddingInlineEnd"],
  paddingInlineStart: ["paddingInlineStart"],
  paddingLeft: ["paddingLeft"],
  paddingRight: ["paddingRight"],
  paddingTop: ["paddingTop"],
  pageBreakAfter: ["pageBreakAfter"],
  pageBreakBefore: ["pageBreakBefore"],
  pageBreakInside: ["pageBreakInside"],
  paintOrder: ["paintOrder"],
  perspective: ["perspective"],
  perspectiveOrigin: ["perspectiveOrigin"],
  placeContent: ["placeContent"],
  placeItems: ["placeItems"],
  placeSelf: ["placeSelf"],
  pointerEvents: ["pointerEvents"],
  position: ["position"],
  quotes: ["quotes"],
  resize: ["resize"],
  right: ["right"],
  rotate: ["rotate"],
  rowGap: ["rowGap"],
  rubyAlign: ["rubyAlign"],
  rubyMerge: ["rubyMerge"],
  rubyPosition: ["rubyPosition"],
  scale: ["scale"],
  scrollbarColor: ["scrollbarColor"],
  scrollbarWidth: ["scrollbarWidth"],
  scrollBehavior: ["scrollBehavior"],
  scrollMargin: ["scrollMargin"],
  scrollMarginBlock: ["scrollMarginBlock"],
  scrollMarginBlockEnd: ["scrollMarginBlockEnd"],
  scrollMarginBlockStart: ["scrollMarginBlockStart"],
  scrollMarginBottom: ["scrollMarginBottom"],
  scrollMarginInline: ["scrollMarginInline"],
  scrollMarginInlineEnd: ["scrollMarginInlineEnd"],
  scrollMarginInlineStart: ["scrollMarginInlineStart"],
  scrollMarginLeft: ["scrollMarginLeft"],
  scrollMarginRight: ["scrollMarginRight"],
  scrollMarginTop: ["scrollMarginTop"],
  scrollPadding: ["scrollPadding"],
  scrollPaddingBlock: ["scrollPaddingBlock"],
  scrollPaddingBlockEnd: ["scrollPaddingBlockEnd"],
  scrollPaddingBlockStart: ["scrollPaddingBlockStart"],
  scrollPaddingBottom: ["scrollPaddingBottom"],
  scrollPaddingInline: ["scrollPaddingInline"],
  scrollPaddingInlineEnd: ["scrollPaddingInlineEnd"],
  scrollPaddingInlineStart: ["scrollPaddingInlineStart"],
  scrollPaddingLeft: ["scrollPaddingLeft"],
  scrollPaddingRight: ["scrollPaddingRight"],
  scrollPaddingTop: ["scrollPaddingTop"],
  scrollSnapAlign: ["scrollSnapAlign"],
  scrollSnapMargin: ["scrollSnapMargin"],
  scrollSnapMarginBottom: ["scrollSnapMarginBottom"],
  scrollSnapMarginLeft: ["scrollSnapMarginLeft"],
  scrollSnapMarginRight: ["scrollSnapMarginRight"],
  scrollSnapMarginTop: ["scrollSnapMarginTop"],
  scrollSnapStop: ["scrollSnapStop"],
  scrollSnapType: ["scrollSnapType"],
  shapeImageThreshold: ["shapeImageThreshold"],
  shapeMargin: ["shapeMargin"],
  shapeOutside: ["shapeOutside"],
  tableLayout: ["tableLayout"],
  tabSize: ["tabSize"],
  textAlign: ["textAlign"],
  textAlignLast: ["textAlignLast"],
  textCombineUpright: ["textCombineUpright"],
  textDecoration: ["textDecoration"],
  textDecorationColor: ["textDecorationColor"],
  textDecorationLine: ["textDecorationLine"],
  textDecorationSkip: ["textDecorationSkip"],
  textDecorationSkipInk: ["textDecorationSkipInk"],
  textDecorationStyle: ["textDecorationStyle"],
  textDecorationThickness: ["textDecorationThickness"],
  textDecorationWidth: ["textDecorationWidth"],
  textEmphasis: ["textEmphasis"],
  textEmphasisColor: ["textEmphasisColor"],
  textEmphasisPosition: ["textEmphasisPosition"],
  textEmphasisStyle: ["textEmphasisStyle"],
  textIndent: ["textIndent"],
  textJustify: ["textJustify"],
  textOrientation: ["textOrientation"],
  textOverflow: ["textOverflow"],
  textRendering: ["textRendering"],
  textShadow: ["textShadow"],
  textSizeAdjust: ["textSizeAdjust"],
  textTransform: ["textTransform"],
  textUnderlineOffset: ["textUnderlineOffset"],
  textUnderlinePosition: ["textUnderlinePosition"],
  top: ["top"],
  touchAction: ["touchAction"],
  transform: ["transform"],
  transformBox: ["transformBox"],
  transformOrigin: ["transformOrigin"],
  transformStyle: ["transformStyle"],
  transition: ["transition"],
  transitionDelay: ["transitionDelay"],
  transitionDuration: ["transitionDuration"],
  transitionProperty: ["transitionProperty"],
  transitionTimingFunction: ["transitionTimingFunction"],
  translate: ["translate"],
  unicodeBidi: ["unicodeBidi"],
  userSelect: ["userSelect"],
  verticalAlign: ["verticalAlign"],
  visibility: ["visibility"],
  whiteSpace: ["whiteSpace"],
  widows: ["widows"],
  width: ["width"],
  willChange: ["willChange"],
  wordBreak: ["wordBreak"],
  wordSpacing: ["wordSpacing"],
  wordWrap: ["wordWrap"],
  writingMode: ["writingMode"],
  zIndex: ["zIndex"],
  zoom: ["zoom"]
};
var aliasProps = {
  bg: ["backgroundColor"],
  col: ["gridTemplateColumns"],
  colEnd: ["gridColumnEnd"],
  colGap: ["gridColumnGap"],
  colStart: ["gridColumnStart"],
  d: ["display"],
  h: ["height"],
  m: ["margin"],
  maxH: ["maxHeight"],
  maxW: ["maxWidth"],
  mb: ["marginBottom"],
  minH: ["minHeight"],
  minW: ["minWidth"],
  ml: ["marginLeft"],
  mr: ["marginRight"],
  mt: ["marginTop"],
  mx: ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"],
  p: ["padding"],
  pb: ["paddingBottom"],
  pl: ["paddingLeft"],
  pr: ["paddingRight"],
  pt: ["paddingTop"],
  px: ["paddingLeft", "paddingRight"],
  py: ["paddingTop", "paddingBottom"],
  rounded: ["borderRadius"],
  roundedBottom: ["borderBottomLeftRadius", "borderBottomRightRadius"],
  roundedLeft: ["borderTopLeftRadius", "borderBottomLeftRadius"],
  roundedRight: ["borderTopRightRadius", "borderBottomRightRadius"],
  roundedTop: ["borderTopLeftRadius", "borderTopRightRadius"],
  row: ["gridTemplateRows"],
  rowEnd: ["gridRowEnd"],
  rowGap: ["gridRowGap"],
  rowStart: ["gridRowStart"],
  size: ["width", "height"],
  w: ["width"]
}; // Supported pseudo classes.

var pseudoClasses = [null, "active", "checked", "disabled", "focus", "hover", "visited"];
var allProps = _extends({}, cssProps, aliasProps, {
  variant: ["variant"]
});
var styleProps = {};
Object.keys(allProps).forEach(function (propName) {
  return pseudoClasses.forEach(function (pseudoClass) {
    return styleProps[pseudoClass === null ? propName : "" + pseudoClass + (propName.charAt(0).toUpperCase() + propName.slice(1))] = {
      pseudoClass: pseudoClass,
      names: allProps[propName]
    };
  });
});

var RESPONSIVE_SEPARATOR = "|";
var regex = new RegExp("^(" + Object.keys(styleProps).join("|") + ")$"); // Object.fromEntries ponyfill.

var fromEntries = function fromEntries(iterable) {
  return [].concat(iterable).reduce(function (obj, _ref) {
    var key = _ref[0],
        val = _ref[1];
    obj[key] = val;
    return obj;
  }, {});
}; // Helper to omit props.
// See https://github.com/styled-system/styled-system/tree/master/packages/props.

var omit = function omit(props) {
  var next = {};

  for (var key in props) {
    if (regex.test(key)) continue;
    next[key] = props[key];
  }

  return next;
}; // Helper to pick props.
// See https://github.com/styled-system/styled-system/tree/master/packages/props.

var pick = function pick(props) {
  var next = {};

  for (var key in props) {
    if (!regex.test(key)) continue;
    next[key] = props[key];
  }

  return next;
};
var split = function split(props) {
  return [pick(props), omit(props)];
};
var propsToSxProps = function propsToSxProps(props) {
  var _split = split(props),
      _styleProps = _split[0],
      otherProps = _split[1];

  var sxProps = {};
  Object.entries(_styleProps).forEach(function (_ref2) {
    var propName = _ref2[0],
        propValue = _ref2[1];

    // Handle responsive values.
    if (typeof propValue === "string") {
      // Allow responsive values to be written as "foo|bar|baz".
      propValue = propValue.split(RESPONSIVE_SEPARATOR).map(function (value) {
        if (value === "null") {
          return null;
        }

        return value.match(/^\d+$/) ? parseInt(value) : value;
      });
    }

    var _styleProps$propName = styleProps[propName],
        pseudoClass = _styleProps$propName.pseudoClass,
        names = _styleProps$propName.names;
    return names.forEach(function (name) {
      if (!pseudoClass) return sxProps[name] = propValue;
      var pseudoSelector = "&:" + pseudoClass;
      if (typeof sxProps[pseudoSelector] === "undefined") sxProps[pseudoSelector] = {};
      return sxProps[pseudoSelector][name] = propValue;
    });
  });
  var validProps = fromEntries(Object.entries(otherProps).filter(function (_ref3) {
    var prop = _ref3[0];
    return index(prop);
  }));
  return [sxProps, validProps];
};
var Box = /*#__PURE__*/react.forwardRef(function (_ref4, ref) {
  var _ref4$as = _ref4.as,
      as = _ref4$as === void 0 ? "div" : _ref4$as,
      __themeKey = _ref4.__themeKey,
      props = _objectWithoutPropertiesLoose(_ref4, ["as", "__themeKey"]);

  var _useThemeUI = useThemeUI(),
      theme = _useThemeUI.theme;

  var _propsToSxProps = propsToSxProps(props),
      _propsToSxProps$ = _propsToSxProps[0],
      variant = _propsToSxProps$.variant,
      sxProps = _objectWithoutPropertiesLoose(_propsToSxProps$, ["variant"]),
      otherProps = _propsToSxProps[1]; // Handle variants.


  var sx = _extends({}, theme[__themeKey]);

  if (variant) {
    variant.forEach(function (variants) {
      return variants.split(" ").map(function (v) {
        return sx = _extends({}, sx, theme[__themeKey][v]);
      });
    });
  }

  sx = _extends({}, sx, sxProps);
  return jsx$1(as, _extends({
    ref: ref,
    sx: sx
  }, otherProps));
});
var getTag = function getTag(tag, componentProps, __themeKey) {
  return /*#__PURE__*/react.forwardRef(function (props, ref) {
    props = _extends({}, componentProps, props);
    return jsx$1(Box, _extends({
      __themeKey: __themeKey || tag,
      ref: ref,
      as: tag
    }, props));
  });
};
var Button = getTag("button");
var H1 = getTag("h1");
var H2 = getTag("h2");
var H3 = getTag("h3");
var Img = getTag("img");
var P = getTag("p");
var Section = getTag("section");
var Span = getTag("span");

var Container = getTag("div", {
  mx: "auto"
}, "container");
var Flexbox = getTag("div", {
  d: "flex"
}, "flexbox");
var Grid = getTag("div", {
  d: "grid"
}, "grid");

export { Button, Container, Flexbox, Grid, H1, H2, H3, Img, P, Section, Span };
