/**
 * helper functions
 * @2020/10/29
 */

const fs = require('fs')
const path = require('path')
const dirTree = require("directory-tree")
const JSZip = require("jszip");

/**
 * object to be exported
 */
const Utils = {}

/**
 * fileToBuffer function attached to utils object
 */
Utils.fileToBuffer = (filename, cb) => {
  let readStream = fs.createReadStream(filename);
  let chunks = [];

  // Handle any errors while reading
  readStream.on('error', err => {
    console.error(err)
      // handle error
      // File could not be read
      return cb(err);
  });

  // Listen for data
  readStream.on('data', chunk => {
      chunks.push(chunk);
  });

  // File is done being read
  readStream.on('close', () => {
      // Create a buffer of the image from the stream
      return cb(null, Buffer.concat(chunks));
  });
}

/**
 * zip starter folder and replace some colors and metadata in theme/config files
 * 
 * themeFolder, string;
 * params, { primaryColor, primaryHoverColor }
 */
Utils.zipBufferGen = (themeFolder, params) => {
  console.log(`>>> read the starter folder : ${themeFolder}`)
  const folderPath = path.join(__dirname, `../starters/${themeFolder}`))
  console.log(`>>> zip folderPath: ${folderPath}`)
  const tree = dirTree(folderPath);
  // res.json(tree) // JUST FOR TEST
  const zip = new JSZip()
  const walkTree = function(tree, zipRoot){
    // create folder first
    // console.log(`got directory: ${tree.path}`)
    zipRoot.folder(tree.path.substr(12))

    let children = tree.children
    children.forEach(child => {
      // write normal file
      if(child.type == 'file' && child.name != 'theme.js'){
        // console.log(`got file: ${child.path}`)
        let data = fs.readFileSync(child.path)
        zipRoot.file(child.path.substr(12), data) // create file in zip
      }
      // replace theme colors in memory for theme.js
      if(child.name == 'theme.js'){
        // console.log('>>> got theme.js, to replace colors...')
        let lines = fs.readFileSync(child.path, 'utf8').split('\n')
        let newPrimary = params.primaryColor || '#06f'
        let newPrimaryHover = params.primaryHoverColor || '#005ae0'
        lines.forEach((line, i) => {
          if(line.includes('primary:') && !line.includes('{')){
            lines[i] = `    primary: "${newPrimary}",`
          }
          if(line.includes('primaryHover:')){
            lines[i] = `    primaryHover: "${newPrimaryHover}",`
          }
        })
        zipRoot.file(child.path.substr(12), lines.join('\n')) // create theme.js in zip
      }
      // iterate constantly...
      if(child.type == 'directory' && child.name != 'node_modules' && child.name != 'public'){
        walkTree(child, zipRoot) // iterate child
      }
    })
  }
  console.log('>>> creating the starer zip: ')
  walkTree(tree,zip)
  return zip
}


module.exports = Utils