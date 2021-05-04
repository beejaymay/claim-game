import React from "react"

export default function Player(props) {

  const { damage, bonk, clobber, isTurn } = props

  return (
    <div>
      <div>PLAYER (has taken {damage} damage)</div>
      <button disabled={!isTurn} onClick={() => bonk()}>BONK the World</button><br />
      <button disabled={!isTurn} onClick={() => clobber()}>CLOBBER the World (50% miss chance)</button>
    </div>
  )
}