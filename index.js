const https = require('https');
const cheerio = require("cheerio");

const url = 'https://www.bestbuy.com/site/nintendo-switch-32gb-console-neon-red-neon-blue-joy-con/6364255.p?skuId=6364255'

https.get(url, (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    checkAvailability(data)
    console.log('Done\n');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});

function checkAvailability(data) {
  const $ = cheerio.load(data); //use as JQuery
  var buttonText = $('.fulfillment-add-to-cart-button div button').text();
  console.log(buttonText + ' time: ' + new Date() + '\n')
  if (status != 'Sold Out') {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n')
  }
}