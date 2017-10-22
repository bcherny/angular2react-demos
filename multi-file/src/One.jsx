import { angular2react } from 'angular2react'
import { lazyInjector } from './lazyInjector'

export let OneAngular = {
  template: `
    one
    <two-angular two="2"></two-angular>
  `
}

export let One = angular2react('oneAngular', OneAngular, lazyInjector.$injector)
