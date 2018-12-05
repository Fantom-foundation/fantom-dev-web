fantom-dev
==========
Developer ecosystem website for the Fantom Foundation platform.

Written in Angular with Material. Butchered angular.material.io.

## License
Like most everywhere we do at Fantom Foundation, this is open-source and free to use by all (incl. commercially).

## Install

Assumes you have latest Node.JS and npm on *nix machine, then just run:

    npm i -g @angular/cli typescript
    npm i

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy distribution
First [`npm i -g angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages), then:

    ng build --prod
    cp README.md dist/fantom-dev
    ngh --dir='dist/fantom-dev' --repo='https://github.com/Fantom-foundation/Fantom-foundation.github.io' --branch='master' --message='Using angular-cli-ghpages'

## Derived

Header, footer and subpage stolen from [https://material.angular.io](https://material.angular.io) ([src](https://github.com/angular/material.angular.io)).
