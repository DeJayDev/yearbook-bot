const config = require('./config.json')

const moment = require('moment')
const jobMan = require('cron').CronJob;

var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

let tweetTask = new jobMan({
    cronTime: '0 7 * * *',
    onTick() {
        genTweet()
    },
    start: true,
    timeZone: 'America/Chicago'
})

function genTweet() {
    let days = (moment().isLeapYear ? 366 : 365)
    let tweet = `:book: Page ${moment().dayOfYear()} of ${days}`

    client.post('statuses/update', {status: tweet}, (error, tweet, response) => {
        if(error) throw error;
        console.log('Done. Day: ' + moment().dayOfYear())
    });
};
