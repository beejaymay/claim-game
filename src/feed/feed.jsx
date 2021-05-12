import React from 'react'
import './feed.css'

export default function Feed(props) {
  const { feed } = props

  return (
    <div className='feed'>
      Here's what happened:
      { feed.map((item, idx) => {
        return <div key={`item${idx}`}>{item}</div>
      })}
    </div>
  )
}