import React from 'react'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../Timer/Timer'
import './Task.css'

function Task({ itemText }) {
  const formatedDate = formatDistanceToNow(new Date(itemText.created), { includeSeconds: true })
  const dateToShow = `created ${formatedDate} ago`
  return (
    <>
      <span className="title">{itemText.description}</span>
      <span className="description">
        <Timer timer={itemText.timer} />
      </span>
      <span className="created">{dateToShow}</span>
    </>
  )
}

export default Task
