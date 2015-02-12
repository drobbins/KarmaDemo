# Karma Demo

A demo using [Karma][4] to test [Angular][3], perhaps notably sans-Grunt. Definitely sans-Yeoman.

## Prerequisites

* [NodeJS](http://nodejs.org/). This tutorial was written with Node 0.10.33 and npm 2.1.18. Later minor versions should be ok.
      ```shell
      λ npm -v
      2.1.18
      
      λ node -v
      v0.10.33
      ```
    * You may need to upgrade npm. `npm update -g npm` works on most Unix-type machines. [Windows can be more complicated][1]
* [Bower][2]. Not strictly necessary, but very useful for managing front-end libraries.

## Getting Started

Note: Although I won't put distinct steps in place for commiting your progress into `git` or your source control tool of choice, feel free to do so liberally.

* Create a new folder
* Initialize your `package.json` file. Use defaults.

        npm init

* Initialize `bower.json`. Use defaults, except optionally marking the package as "private".

        bower init

* Install [Angular][3] and a few other packages using `bower`.

        bower install --save angular json3 es5-shim angular-animate angular-cookies angular-resource angular-route angular-sanitize angular-touch angular-ui-router
        bower install --save-dev angular-mocks angular-scenario

* Install [Karma][4] and a few packages using `npm`.

        npm install --save-dev karma karma-jasmine karma-phantomjs-launcher

* Initialize Karma with the following responses
        
        node .\node_modules\karma\bin\karma init karma.conf.js

    * `jasmine` as the testing framework.
    * `no` for RequireJS
    * `PhantomJS` for browser to capture automatically
    * `tests/**/*Spec.js` and `source/**/*.js` for file locations
    * leave file exclusions empty
    * `yes` for watching files

* Insert the following at the top of the "files" section of `karma.conf.js`

        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-touch/angular-touch.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',

* Configure `npm test` to run Karma in `package.json`

        ...
        "scripts": {
          "test": "node .\\node_modules\\karma\\bin\\karma start"
        },
        ...

* Run `npm test`. Put test files in `tests/` and source files in `source/`

[1]: https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows
[2]: http://bower.io/
[3]: https://angularjs.org/
[4]: http://karma-runner.github.io/
