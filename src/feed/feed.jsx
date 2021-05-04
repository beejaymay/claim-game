import React from 'react'

export default function Feed(props) {
  const { feed } = props

  return (
    <div>
      Here's what happened:
      { feed.map(item => {
        return <div>{item}</div>
      })}
    </div>
  )
}