import React from 'react'
import './NewTaskForm.css'

export default class NewTaskForm extends React.Component {
  state = {
    value: '',
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.value !== '') {
      this.props.onCreateTask(this.state.value)
      this.setState({
        value: '',
      })
    }
  }

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          value={this.state.value}
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onChange}
        />
        <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
      </form>
    )
  }
}
