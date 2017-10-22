import React from 'react'
import { react2angular } from 'react2angular'

export let Four = ({ four }) =>
  <div>
    four: {four}
  </div>

export let FourAngular = react2angular(Four, ['four'])
