import React from 'react'
import ComponentB from './ComponentB'

const ComponenetA = ({name}) => {
  return (
    <div>
      <ComponentB name={name} />
    </div>
  )
}

export default ComponenetA
