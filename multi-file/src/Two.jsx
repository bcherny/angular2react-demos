import React from 'react'
import { react2angular } from 'react2angular'
import { Three } from './Three'

export let Two = ({ two }) =>
  <div>
    two: {two}
    <Three three={two * 2} />
  </div>

export let TwoAngular = react2angular(Two, ['two'])
