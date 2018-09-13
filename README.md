# Webdriver version 5 setup with Chromedriver

Install chromedriver

```
npm install -g chromedriver
```

Start chromedriver

```
chromedriver --port=4444 --url-base=/wd/hub --verbose
```

Let the terminal be open and start an other one.

Setup the repo

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
./node_modules/.bin/wdio wdio.conf.js --spec=tests/check-title.test
./node_modules/.bin/wdio wdio.conf.js --spec=tests/form-authentication.test
./node_modules/.bin/wdio wdio.conf.js --spec=tests/mocha-chai.test
./node_modules/.bin/wdio wdio.conf.js --spec=tests/selectors.test
./node_modules/.bin/wdio wdio.conf.js --spec=tests/waitfor-commands.test
```
Happy Testing with v5!
