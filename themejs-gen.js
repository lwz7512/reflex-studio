/**
 * generate theme.js for each theme by color type
 */

const fs = require('fs')

// Write each theme.js with colors ...
var args = process.argv

if(args.length==2) return console.log('NO theme color value assigned!')

const COLOR_TYPE = args[2] // RED, PINK, PURPLE, ...
if(args.length>2) console.log('>>>> generate screens with color: '+COLOR_TYPE)

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
]

const themeColorMap = {
  DEFAULT: ["#06f", "#005ae0"],
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
}

starters.forEach(starter => {
  let starterPath = __dirname + '/starters/' + starter + '/src/@reflexjs/gatsby-theme-base/theme.js'
  let lines = fs.readFileSync(starterPath, 'utf8').split('\n')
  let newPrimary = themeColorMap[COLOR_TYPE][0]
  let newPrimaryHover = themeColorMap[COLOR_TYPE][1]
  lines.forEach((line, i) => {
    if(line.includes('primary:') && !line.includes('{')){
      lines[i] = `    primary: "${newPrimary}",`
    }
    if(line.includes('primaryHover:')){
      lines[i] = `    primaryHover: "${newPrimaryHover}",`
    }
  })
  let newThemejs = fs.createWriteStream(starterPath)
  newThemejs.on('error', function(err) { /* error handling */ });
  lines.forEach(function(line, i) { 
    if(i < lines.length -1){
      newThemejs.write(line+'\n')
    }else{
      newThemejs.write(line)
    }
  })
  newThemejs.end()
  console.log(`>>> DONE: ${starterPath}`)
})