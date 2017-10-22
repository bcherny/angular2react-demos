import { angular2react } from 'angular2react'
import { lazyInjector } from './lazyInjector'

export let ThreeAngular = {
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

export let Three = angular2react('threeAngular', ThreeAngular, lazyInjector.$injector)
