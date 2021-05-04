import React, { useEffect } from 'react'

export default function World(props) {

  const { damage, action, isTurn } = props

  useEffect(() => {
    if (isTurn) {
      action()
    }
  })

  return (
    <div>
      <div>WORLD (has taken {damage} damage.)</div>
    </div>
  )
}