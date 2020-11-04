/**
 * theme screen shots generation
 */

const puppeteer = require('puppeteer');

// yarn workspace reflex-starter-acdm start -p 8001
const args = process.argv
// if(args.length>2 && args[3]==='-u') return // in no need to upload cloudflare
if(args.length==2) return console.log('NO theme color value assigned!')
if(args.length>2) console.log(`>>>> generate screens with color: ${args[2]}`)


console.info(`>>> launch browser...`)

const capture = async (starter, port, color) => {
  const browser = await puppeteer.launch();
  console.log('>>> open new page ...')
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 3000,
  });
  console.info(`goto page...`)
  await page.goto(`http://localhost:${port}`);
  await page.waitForTimeout(1000)
  const shotpath = __dirname + '/library/shots/' + starter + '-' + color + '.png'
  console.info(`Saving screenshot to ${shotpath}`)
  await page.screenshot({path: shotpath});
  await page.close()

  await browser.close();
}

const main = async (color) => {
  
  const starters = [
    {starer: 'reflex-starter-base', port: 8001},
    {starer: 'reflex-starter-biz',  port: 8002},
    {starer: 'reflex-starter-blog', port: 8003},
    {starer: 'reflex-starter-bost', port: 8004},
    {starer: 'reflex-starter-expe', port: 8005},
    {starer: 'reflex-starter-hero', port: 8006},
    {starer: 'reflex-starter-vdes', port: 8007},
    {starer: 'reflex-starter-vdrc', port: 8008},
    {starer: 'reflex-starter-acdm', port: 8009},
  ]

  // capture(theme.starer, theme.port, color)
  const tasks = starters.map(theme => capture(theme.starer, theme.port, color))
  Promise.all(tasks).then(() => console.log('>>>>> ALL DONE !!!'))
  
}

main(args[2])