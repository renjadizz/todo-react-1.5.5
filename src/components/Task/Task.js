import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './Task.css'

class Task extends React.Component {
  render() {
    const { itemText } = this.props
    const formatedDate = formatDistanceToNow(new Date(itemText.created), { includeSeconds: true })
    const dateToShow = `created ${formatedDate} ago`
    return (
      <>
        <span className="title">{itemText.description}</span>
        <span className="description">
          <button className="icon icon-play"></button>
          <button className="icon icon-pause"></button>
          <span className="description__timer">12:25</span>
        </span>
        <span className="created">{dateToShow}</span>
      </>
    )
  }
}

Task.propTypes = {
  itemText: PropTypes.object.isRequired,
}

export default Task
