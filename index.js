const cheerio = require("cheerio");
const child_process = require("child_process");
const fs = require('fs');

const wgetC = 'wget -O result.html https://www.bestbuy.com/site/nintendo-switch-32gb-console-neon-red-neon-blue-joy-con/6364255.p?skuId=6364255'

child_process.exec(wgetC, (error, stdout) => {
  if (error) {
    console.log(error);
  }
  console.log("2 " + stdout);
  checkAvailability()
});

function checkAvailability() {
  const $ = cheerio.load(fs.readFileSync('result.html')); //use as JQuery
  var buttonText = $('.fulfillment-add-to-cart-button div button').text();
  console.log(buttonText + ' time: ' + new Date() + '\n')
  if (buttonText != 'Sold Out' && buttonText != 'Check Stores') {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
  }
}