import React from 'react'

export default function World(props) {

  const { damage, action, isTurn } = props

  return (
    <div>
      <div>WORLD (has taken {damage} damage.)</div>
      <button disabled={!isTurn} onClick={() => action()}>BONK the Player</button>
    </div>
  )
}