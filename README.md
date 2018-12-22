# Webdriver version 5 setup with Chromedriver

[YouTube video tutorials based on this setup](https://www.youtube.com/playlist?list=PL8HowI-L-3_9Ep7lxVrRDF-az5ku4sur_)

## Setup Chromedriver

Install chromedriver

```
npm install -g chromedriver
```

Start chromedriver

```
chromedriver --port=4444 --url-base=/wd/hub --verbose
```

Keep this terminal open and start another one so that Chromedriver continues to run.

## Setup the repo

```
cd /path/to/repo
npm install
```

Run all tests using the below command

```
./node_modules/.bin/wdio wdio.conf.js
```

To run each test individually, pass spec file path as parameter

```
./node_modules/.bin/wdio wdio.conf.js --spec tests/check-title.test.js
./node_modules/.bin/wdio wdio.conf.js --spec tests/form-authentication.test.js
./node_modules/.bin/wdio wdio.conf.js --spec tests/mocha-chai.test.js
./node_modules/.bin/wdio wdio.conf.js --spec tests/selectors.test.js
./node_modules/.bin/wdio wdio.conf.js --spec tests/waitfor-commands.test.js
```
Happy Testing with v5!
