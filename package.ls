#!/usr/bin/env lsc -cj
author: 'Chia-liang Kao'
name: 'lyg0vtw'
description: 'ly.g0v.tw'
version: '0.2.0'
homepage: 'https://github.com/g0v/ly.g0v.tw'
repository:
  type: 'git'
  url: 'https://github.com/g0v/ly.g0v.tw'
engines:
  node: '0.10.x'
  npm: '1.3.x'
subdomain: 'lyg0vtw'
domains: <[ly.g0v.tw beta.ly.g0v.tw]>
scripts:
  republish: 'lsc -cj package.ls && lsc -cj bower.json.ls'
  build: 'gulp --require LiveScript build server'
  start: 'node ./server/app.js'
  test: 'gulp --require LiveScript build test:unit'
  protractor: 'gulp --require LiveScript test:e2e'
dependencies:
  express: '3.4.x'
  'prerender-node': '0.1.x'
  jade: '1.1.x'
  request: '2.27.x'
devDependencies:
  LiveScript: '1.2.x'
  brunch: '1.7.x'
  'javascript-brunch': '1.7.x'
  'LiveScript-brunch': '1.6.x'
  'css-brunch': '1.7.x'
  'sass-brunch': '1.7.x'
  'auto-reload-brunch': '1.7.x'
  'uglify-js-brunch': '1.7.x'
  'clean-css-brunch': '1.7.x'
  'jade-angularjs-brunch': '1.1.1'
  'jsenv-brunch': '1.4.2'
  'karma': '>= 0.11.13'
  'karma-live-preprocessor': 'git://github.com/clkao/karma-live-preprocessor#patch-1'
  'karma-mocha': '~0.1.0'
  'karma-chai': '~0.0.2'
  'karma-ng-scenario': '0.1.0'
  'karma-phantomjs-launcher': '~0.1.0'
  'bower': '1.2.x'
  'mocha': '~1.14.0'
  'chai': '~1.8.0'
  'protractor': 'git://github.com/czchen/protractor#feature/ls_conf'
  async: '~0.2.10'
  gulp: '~3.5.0'
  "gulp-util": '~2.2.13'
  "gulp-exec": '~1.0.4'
  "gulp-protractor": '~0.0.3'
  "gulp-livescript": '~0.1.1'
