import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../Timer/Timer'
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
          <Timer timer={itemText.timer} />
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
