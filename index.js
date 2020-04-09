const cheerio = require("cheerio");
const child_process = require("child_process");
const fs = require('fs');

// wget works but not curl before because missing the user-agent for curl
const downloadFromUrl = 'curl -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36" https://www.bestbuy.com/site/nintendo-switch-32gb-console-neon-red-neon-blue-joy-con/6364255.p?skuId=6364255 -o result.html'

startProcess();
setInterval(() => {  startProcess(); }, 1000000);
  
function startProcess() {
  child_process.exec(downloadFromUrl, (error, stdout) => {
    if (error) {
      console.log(error);
    }
    checkAvailability();
  });
}

function checkAvailability() {
  const $ = cheerio.load(fs.readFileSync('result.html')); //use as JQuery
  var buttonText = $('.fulfillment-add-to-cart-button div button').text();
  console.log(buttonText + ' time: ' + new Date())
  if (buttonText != 'Sold Out' && buttonText != 'Check Stores') {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
  }
}