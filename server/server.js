/**
 * reflex studio site generator server
 * @2020/10/29
 */
const path = require('path')
const dirTree = require("directory-tree")

const { fileToBuffer, zipBufferGen } = require('./utils')


const port = 3000

const express = require('express')
const app = express()


app.use(require('body-parser').json());
app.use(express.static(path.join(__dirname, '../static')));
app.use(express.static(path.join(__dirname, '../library')));
app.use(express.static(path.join(__dirname, '../starters')));

// https://masteringjs.io/tutorials/express/redirect
app.post('/starter.zip', (req, res) => {
  res.redirect(307, '/reflexgen.zip');
});

// accept client parameters to create a customized reflex site
app.post('/reflexgen.zip', (req, res) => {
  const params = req.body
  const themeFolder = params.starter
  const zip = zipBufferGen(themeFolder, params)
  zip.generateAsync({type:"nodebuffer"})
    .then(function(content) {
        // send blob to browser
        res.send(content)
    });
})

// JUST FOR TEST
app.get('/viewstarter', (req, res) => {
  let themeFolder = 'reflex-starter-acdm'
  if(req.params.starter) themeFolder = req.params.starter
  const folderPath = path.join(__dirname, `../starters/${themeFolder}`)
  const tree = dirTree(folderPath);
  res.json(tree)
})

app.get('/reflexgen.zip', (req, res) => {
  const themeFolder = 'reflex-starter-acdm'
  const zip = zipBufferGen(themeFolder)
  zip.generateAsync({type:"nodebuffer"})
    .then(function(content) {
        // send blob to browser
        res.send(content)
    });
})

app.get('/sample.zip', (req, res) => {
  fileToBuffer(__dirname + '/sample.zip', (err, buf) => {
    if(err) return res.send('Oops...something wrong!')

    res.send(buf)
  })
})

app.get('/hello', (req, res) => {
  res.send('world!')
})

app.listen(port, () => {
  console.log(`Reflex Studio App listening at http://localhost:${port}`)
})