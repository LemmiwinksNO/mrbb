Installation and Heroku Deployment
----------------------------------

1. Install Node and NPM - [Install via package-manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
2. Install Bower - `npm install -g bower`
3. Install Grunt Command Line Interface - `npm install -g grunt-cli
4. Install Heroku Toolbelt - https://toolbelt.heroku.com/
5. Install MongoDb - http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
6. `git clone https://github.com/LemmiwinksNO/mrbb`
7. `cd mrbb`
8. `npm install`
9. `bower install`
10. `grunt bower` - moves what you need from /vendor into /assets/js/vendor and /assets/styles/vendor
11. Create new heroku app - `heroku create myapp'
12. `heroku config:set NODE_ENV=production`
13. Create your own git repository
14. `git add`
15. `git commit -m "message"`
16. Install git-subtree from here - https://github.com/jroper/git-subtree - So we can push only production directory(dist) to heroku. Grab git-subtree.sh and move it to wherever your git command files are. i.e. mv git-subtree.sh /usr/local/libexec/git-core/git-subtree (drop the .sh)
17. `grunt release` - Creates production directory dist, which you can push to heroku.
18. git add dist; git commit -m "dist"; git push
19. `grunt heroku` - Pushes to heroku using `git subtree push -f --prefix dist heroku master`



Grunt
-----

* `grunt` - jshints scripts; compiles less; compiles handlebars templates.
* `grunt watch` - jshint's scripts; compiles less; compiles handlebars templates.
* `grunt release` - Creates production directory - minified + concatenated + obsfucated JS; minified CSS; modified index.html.
* `grunt heroku` - Pushes the production directory to heroku.
* `grunt bower` - Updates bower packages and copies the relevant ones to assets/js/vendor and assets/styles/vendor.
