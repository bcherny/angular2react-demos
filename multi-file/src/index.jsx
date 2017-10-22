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
import React from 'react'
import { render } from 'react-dom'
import { OneAngular, One } from './One'
import { TwoAngular } from './Two'
import { ThreeAngular } from './Three'
import { FourAngular } from './Four'
import { lazyInjector } from './lazyInjector'

// Expose components to Angular

angular
  .module('Demo', [])
  .component('oneAngular', OneAngular)
  .component('twoAngular', TwoAngular)
  .component('threeAngular', ThreeAngular)
  .component('fourAngular', FourAngular)
  .run(['$injector', function (_$injector) {
    lazyInjector.$injector = _$injector
    reactBootstrap()
  }])

angular.bootstrap(document.createElement('div'), ['Demo'])

function reactBootstrap () {
  render(<One />, document.querySelector('#App'))
}
