import React, { useEffect } from 'react'

export default function World(props) {

  const { damage, bonk, isTurn } = props

  useEffect(() => {
    if (isTurn) {
      bonk()
    }
  })

  return (
    <div>
      <div>WORLD (has taken {damage} damage.)</div>
    </div>
  )
}