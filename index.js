const cheerio = require("cheerio");
const child_process = require("child_process");
const fs = require('fs');

const wgetC = 'wget -O result.html https://www.bestbuy.com/site/nintendo-switch-32gb-console-neon-red-neon-blue-joy-con/6364255.p?skuId=6364255'

startProcess();
setInterval(() => {  startProcess(); }, 1000000);
  
function startProcess() {
  child_process.exec(wgetC, (error, stdout) => {
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