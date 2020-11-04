/**
 * helper functions
 * @2020/10/29
 */

const fs = require('fs')
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

Utils.zipBufferGen = (themeFolder, params) => {
  console.log('>>> read the starter folder ...')
  const tree = dirTree(`../starters/${themeFolder}`);
  // res.json(tree) // JUST FOR TEST
  const zip = new JSZip()
  const walkTree = function(tree, zipRoot){
    // create folder first
    // console.log(`got directory: ${tree.path}`)
    zipRoot.folder(tree.path.substr(12))

    let children = tree.children
    children.forEach(child => {
      if(child.type == 'file'){
        // console.log(`got file: ${child.path}`)
        const data = fs.readFileSync(child.path); 
        zipRoot.file(child.path.substr(12), data) // create file in zip
      }
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