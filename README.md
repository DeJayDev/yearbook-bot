# Yearbook

<a href="http://www.wtfpl.net/"><img src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"/></a> 

[![GitHub issues](https://img.shields.io/github/stars/DeJayDev/yearbook-bot.svg?style=flat-square)](https://github.com/DeJayDev/yearbook-bot)

## Why

A friend of mine messaged me with their idea, and now here it is. Done purely on a whim.

![](https://u.dejay.dev/🧴🔨🌊.png)

## How

Clone the project, 

Then, Navigate to https://apps.twitter.com/

Select 'Create New App', then give it any name/description/website you'd like. 

Read and agree to the Twitter Developer Agreement and select the checkbox stating that you've done so, finally select "Create your Twitter Application".

Goto "Keys and Access Tokens" and select "Create my access token".

Then, open config.json.example and input the following data:

```json
{
    "consumer_key": "",
    "consumer_secret": "",
    "access_token_key": "",
    "access_token_secret": ""
}
```

`consumer_key`: Your "Consumer Key (API Key)"

`consumer_secret`: Your "Consumer Secret (API Secret)"

`access_token_key`: Your "Access Token"

`access_token_secret`: Your "Access Token Secret"

Finally run:
`npm install` to install required dependencies. After that has completed, run `node app.js`