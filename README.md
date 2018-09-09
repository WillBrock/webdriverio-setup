# Webdriver version 5 setup with Chromedriver

Install chromedriver

```
npm install -g chromedriver
```

Start chromedriver

```
chromedriver --port=4444 --url-base=/wd/hub --verbose
```

Setup the repo

```
cd /path/to/repo
npm install
```

Run test

```
./node_modules/.bin/wdio wdio.conf.js
```