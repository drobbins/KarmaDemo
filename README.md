# Karma Demo

## Prerequisites

* [NodeJS](http://nodejs.org/)
    * You may need to upgrade npm. `npm update -g npm` works on most Unix-type machines. [Windows can be more complicated][1]
* [Bower][2]. Not strictly necessary, but very useful for managing front-end libraries.

## Getting Started

Note: Although I won't put distinct steps in place for commiting your progress into `git` or your source control tool of choice, feel free to do so liberally.

1. Create a new folder
2. Initialize your `package.json` file. Use defaults.

        npm init

3. Initialize `bower.json`. Use defaults, except optionally marking the package as "private".

        bower init

4. Install [Angular][3] and a few other packages using `bower`.

        bower install --save angular json3 es5-shim angular-animate angular-cookies angular-resource angular-route angular-sanitize angular-touch angular-ui-router
        bower install --save-dev angular-mocks angular-scenario

[1]: https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows
[2]: http://bower.io/
[3]: https://angularjs.org/
