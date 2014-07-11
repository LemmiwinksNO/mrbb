Installation and Heroku Deployment
----------------------------------

1. Install Node and NPM - [Install via package-manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
2. Install Bower - `npm install -g bower`
3. Install Grunt Command Line Interface - `npm install -g grunt-cli`
4. `git clone https://github.com/LemmiwinksNO/mrbb`
5. `cd mrbb`
6. `npm install`
7. `bower install`
8. `grunt bower` - moves what you need from /vendor into /assets/js/vendor and /assets/styles/vendor
9. Create new heroku app with nodej-grunt buildpack
  `heroku create myapp --buildpack https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git`
  This buildpack runs grunt after you push to heroku.
  Or add buildpack to existing heroku app
  `heroku config:add BUILDPACK_URL=https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git`
10. `heroku config:set NODE_ENV=production`
11. Create your own git repository
12. `git add`
13. `git commit -m "message"`
14. `git push heroku master`



Grunt
-----

* `grunt watch` - jshint's scripts; compiles less; compiles handlebars templates.
* `grunt release` - for production
* `grunt bower` - Updates bower packages and copies the relevant ones to assets/js/vendor and assets/styles/vendor.