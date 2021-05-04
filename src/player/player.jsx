import React from "react"

export default function Player(props) {

  const { damage, action, isTurn } = props

  return (
    <div>
      <div>PLAYER (has taken {damage} damage)</div>
      <button disabled={!isTurn} onClick={() => action()}>BONK the World</button>
    </div>
  )
}