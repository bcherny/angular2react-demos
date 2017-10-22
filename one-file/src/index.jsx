/**
 * Angular2React demo
 *
 * DOM structure:
 *
 * #App           (Container)
 *  One           (Angular component)
 *    Two         (React component)
 *      Three     (Angular component)
 *        Four    (React component)
 */

import angular from 'angular'
import { angular2react } from 'angular2react'
import { render } from 'react-dom'
import { react2angular } from 'react2angular'

// Four

let Four = ({ four }) =>
  <div>
    four: {four}
  </div>
let FourAngular = react2angular(Four, ['four'])

// Three

let ThreeAngular = {
  bindings: {
    three: '<'
  },
  template: `
    <div>
      three: {{this.$ctrl.three}}
      <four-angular four="this.$ctrl.three * 2"></four-angular>
    </div>
  `
}

// Two

let Two = ({ two }) =>
  <div>
    two: {two}
    <Three three={two * 2} />
  </div>

let TwoAngular = react2angular(Two, ['two'])

// One

let OneAngular = {
  template: `
    one
    <two-angular two="2"></two-angular>
  `
}

// Expose components to Angular

let $injector
angular
  .module('Demo', [])
  .component('oneAngular', OneAngular)
  .component('twoAngular', TwoAngular)
  .component('threeAngular', ThreeAngular)
  .component('fourAngular', FourAngular)
  .run(['$injector', function (_$injector) { $injector = _$injector }])

angular.bootstrap(document.createElement('div'), ['Demo'])

// Expose components to React

let One = angular2react('oneAngular', OneAngular, $injector)
let Three = angular2react('threeAngular', ThreeAngular, $injector)

render(<One />, document.querySelector('#App'))
