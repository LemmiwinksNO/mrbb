Installation and Heroku Deployment
----------------------------------

1. Install Node and NPM - [Install via package-manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
3. Install Bower - `npm install -g bower`
4. Install Grunt Command Line Interface - `npm install -g grunt-cli`
5. `$ git clone https://github.com/LemmiwinksNO/mrbb'
6. `cd mrbb`
7. `npm install`
8. `bower install`
9. `grunt bower` - moves what you need from /vendor into /assets/js/vendor and /assets/styles/vendor
10. Create new heroku app with nodej-grunt buildpack
  `heroku create myapp --buildpack https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git`
  This buildpack runs grunt after you push to heroku.
10b. Or add buildpack to existing heroku app
  `heroku config:add BUILDPACK_URL=https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git`
11. `heroku config:set NODE_ENV=production`
12. Create your own git repository
13. `git add`
14. `git commit -m "message"`
14. `git push heroku master`



Grunt
-----

* `grunt watch` - jshint's scripts; compiles less; compiles handlebars templates.
* `grunt release` - for production
* `grunt bower` - Updates bower packages and copies the relevant ones to assets/js/vendor and assets/styles/vendor.