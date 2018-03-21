# Assignment 4: Practicing Property & Event Binding and View Encapsulatio
<ol>
  <li>Create three new components: GameControl, Odd and Even</li>
  <li>The GameControl Component should have buttons to start and stop the game</li>
  <li>When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())</li>
  <li>The event should be listenable from outside the component</li>
  <li>When stopping the game, no more events should get emitted (clearInterval(ref))</li>
  <li>A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)</li>
  <li>Simply output Odd - NUMBER or Even - NUMBER in the two components</li>
  <li>Style the element (e.g. paragraph) holding your output text differently in both components</li>
</ol>


# N5CompleteGuide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
