import React, { useState } from 'react'

import Task from '../Task/Task'
import './TaskList.css'

function TaskList({ taskItems, onChangeTaskState, onDeleteTaskItem, onEditStateTaskItem, onEditTaskItem }) {
  const [value, setValue] = useState('')
  const onEditClick = (text, id) => {
    setValue(text)
    onEditStateTaskItem(id)
  }
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (value !== '') {
      onEditTaskItem(e.target.getAttribute('taskid'), value)
    }
  }

  const taskItem = taskItems.map((item) => {
    const { id, state, ...itemText } = item
    return (
      <li key={id} className={state}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={state === 'completed' ? true : false}
            onChange={() => onChangeTaskState(id)}
          />
          <label>
            <Task itemText={itemText} />
          </label>
          <button className="icon icon-edit" onClick={() => onEditClick(itemText.description, id)}></button>
          <button className="icon icon-destroy" onClick={() => onDeleteTaskItem(id)}></button>
        </div>
        {state === 'editing' ? (
          <form onSubmit={onSubmit} taskid={id}>
            <input type="text" className="edit" value={value} onChange={onChange} />
          </form>
        ) : null}
      </li>
    )
  })
  return <ul className="todo-list">{taskItem}</ul>
}
export default TaskList
