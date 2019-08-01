[![TypeScript version][ts-badge]][typescript-35]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][LICENSE]
[![Build Status][travis-badge]][travis-ci]

[![Donate][donate-badge]][donate]

# Workouts allocations manager api

An api to manage device to participant allocations during a beat81 workout.

endpoints:

#### Workouts
+ Kick off a workout
+ Subscribe to live changes of a workout

#### Allocations
+ List allocations
+ Create allocation
+ Read allocation
+ Update single allocation
+ Delete single allocation

#### Users
+ Verify is user has his own device

#### Devices
+ List devices
+ Create device
+ Read device

## Quick start


```sh
$ yarn test
```

```sh
$ yarn start
```

```sh
$ yarn build
```

## Directory structure

+ src
++++ providers: contains implementations of http providers in use in our apis
++++ resources: contains the resources definition
++++ repositories: contains the stores that leverage data to our apis
++++ controllers: contains our business logic by domain/context
++++ apis: contains implementation and serving logic of our apis
++++ index.ts: entrypoint

## Contributing

Please refer to our [contribution guide](https://github.com/jshrt/api/master#CONTRIBUTING.md)

## Available scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `build:watch` - interactive watch mode to automatically transpile source files,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests

## License
Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-3.5-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2010.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v10.x/docs/api/
[travis-badge]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate.svg?branch=master
[travis-ci]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate
[typescript]: https://www.typescriptlang.org/
[typescript-35]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-5.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE

[donate-badge]: https://img.shields.io/badge/☕-buy%20me%20a%20coffee-46b798.svg
[donate]: https://paypal.me/jaqb/5eur

[jest]: https://facebook.github.io/jest/
[tslint]: https://palantir.github.io/tslint/
[tslint-microsoft-contrib]: https://github.com/Microsoft/tslint-microsoft-contrib
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
