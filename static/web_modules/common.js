/**
 * common configs
 * @2020/11/05
 */

const starters = [
  'reflex-starter-base',
  'reflex-starter-biz',
  'reflex-starter-blog',
  'reflex-starter-bost',
  'reflex-starter-expe',
  'reflex-starter-hero',
  'reflex-starter-vdes',
  'reflex-starter-vdrc',
  'reflex-starter-acdm',
];

const themeColorMap = {
  DEFAULT: ["#06f",    "#005ae0"],
  RED    : ["#f44336", "#b71c1c"],
  PINK   : ["#e91e63", "#880e4f"],
  PURPLE : ["#9c27b0", "#4a148c"],
  INDIGO : ["#3f51b5", "#1a237e"],
  BLUE   : ["#2196f3", "#0d47a1"],
  CYAN   : ["#00bcd4", "#006064"],
  GREEN  : ["#4caf50", "#1b5e20"],
  LIME   : ["#cddc39", "#827717"],
  YELLOW : ["#ffeb3b", "#f57f17"],
  ORANGE : ["#ff9800", "#e65100"],
  BROWN  : ["#795548", "#3e2723"],
  BLUGREY: ["#607d8b", "#263238"],
};

var common = {
  themeColorMap,
  starters,
};

var themeColorMap$1 = common.themeColorMap;
export { themeColorMap$1 as themeColorMap };
