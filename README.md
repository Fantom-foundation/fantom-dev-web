fantom-dev
==========
[![Build Status](https://travis-ci.org/Fantom-foundation/fantom-dev-web.svg?branch=master)](https://travis-ci.org/Fantom-foundation/fantom-dev-web)

Developer ecosystem website for the Fantom Foundation platform.

Written in Angular with Material. Butchered angular.material.io.

Generates from `/wiki` statically from https://github.com/Fantom-foundation/fantom-dev-web/wiki, using:
```bash
ng-git-gen -p "$PWD" -g 'https://github.com/Fantom-foundation/fantom-dev-web.wiki.git' -l
```

Generated from `/rfc` statically from https://github.com/Fantom-foundation/fantom-rfcs, using:
```bash
ng-git-gen -p "$PWD" -g 'https://github.com/Fantom-foundation/fantom-rfcs' -l -b 'make html_body' -e '.html' -r rfc
```

## License
Like most everywhere we do at Fantom Foundation, this is open-source and free to use by all (incl. commercially).

## Install

Assumes you have latest Node.JS and npm on *nix machine, then just run:

    npm i -g @angular/cli typescript
    npm i

## Deploy distribution
First [`npm i -g angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages), then:
    ng build --prod
    cp README.md dist/fantom-dev
    ngh --dir='dist/fantom-dev' --repo='https://github.com/Fantom-foundation/Fantom-foundation.github.io' --branch='master' --message='Using angular-cli-ghpages'

## Derived
Header, footer and subpage stolen from [https://material.angular.io](https://material.angular.io) ([src](https://github.com/angular/material.angular.io)).

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

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
