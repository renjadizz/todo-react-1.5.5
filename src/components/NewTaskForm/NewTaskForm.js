import React from 'react'

import './NewTaskForm.css'
export default class NewTaskForm extends React.Component {
  state = {
    value: '',
    min: '',
    sec: '',
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  onChangeMin = (e) => {
    this.setState({
      min: e.target.value,
    })
  }
  onChangeSec = (e) => {
    this.setState({
      sec: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.value !== '') {
      if (this.state.min !== '' || this.state.sec !== '') {
        const timer = +this.state.min * 60 + this.state.sec
        this.props.onCreateTask(this.state.value, timer)
        this.setState({
          value: '',
          min: '',
          sec: '',
        })
      }
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
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          value={this.state.min}
          onChange={this.onChangeMin}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          value={this.state.sec}
          onChange={this.onChangeSec}
        />
        <input type="submit" hidden />
      </form>
    )
  }
}
