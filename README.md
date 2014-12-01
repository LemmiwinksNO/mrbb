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
9. Create new heroku app - `heroku create myapp'
10. `heroku config:set NODE_ENV=production`
11. Create your own git repository
12. `git add`
13. `git commit -m "message"`
14. Install git-subtree from here - https://github.com/jroper/git-subtree - So we can push only production directory(dist) to heroku.
15. `grunt release` - Creates production directory dist, which you can push to heroku.
16. git add dist; git commit -m "dist"; git push
16. `grunt heroku` - Pushes to heroku using `git subtree push -f --prefix dist heroku master`



Grunt
-----

* `grunt` - jshints scripts; compiles less; compiles handlebars templates.
* `grunt watch` - jshint's scripts; compiles less; compiles handlebars templates.
* `grunt release` - Creates production directory - minified + concatenated + obsfucated JS; minified CSS; modified index.html.
* `grunt heroku` - Pushes the production directory to heroku.
* `grunt bower` - Updates bower packages and copies the relevant ones to assets/js/vendor and assets/styles/vendor.