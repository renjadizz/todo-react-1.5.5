import React from 'react'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: this.props.timer,
      timerOn: false,
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.timer !== 0 && this.state.timer === 0) {
      this.resetTimer()
    }
    if (prevState.timerOn === false && this.state.timerOn === true) {
      this.timer = setInterval(
        () =>
          this.setState((prevState) => ({
            timer: prevState.timer - 1,
          })),
        1000
      )
    }
  }
  componentWillUnmount() {
    this.resetTimer()
  }
  startTimer = () => {
    if (this.state.timer !== 0) {
      this.setState({
        timer: this.state.timer,
        timerOn: true,
      })
    }
  }
  stopTimer = () => {
    clearInterval(this.timer)
    this.setState({
      timerOn: false,
    })
  }
  resetTimer = () => {
    clearInterval(this.timer)
    this.setState({ timer: 0, timerOn: false })
  }
  addZero(n) {
    return n < 10 ? '0' + n : n
  }
  render() {
    const min = this.addZero(Math.floor(this.state.timer / 60))
    const sec = this.addZero(this.state.timer - min * 60)
    return (
      <>
        <button className="icon icon-play" onClick={this.startTimer}></button>
        <button className="icon icon-pause" onClick={this.stopTimer}></button>
        <span className="description__timer">
          {min}:{sec}
        </span>
      </>
    )
  }
}
