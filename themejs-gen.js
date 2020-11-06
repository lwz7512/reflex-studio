/**
 * generate theme.js for each theme by color type
 */

const fs = require('fs')
const { starters, themeColorMap } = require('common')

// console.log(starters)

// Write each theme.js with colors ...
var args = process.argv

if(args.length==2) return console.log('NO theme color value assigned!')

const COLOR_TYPE = args[2] // RED, PINK, PURPLE, ...
if(args.length>2) console.log('>>>> generate screens with color: '+COLOR_TYPE)



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