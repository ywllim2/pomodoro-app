import React from 'react';
import '../App.css';
import BreakInterval from './breakInterval';
import SessionLength from './sessionLength';
import Timer from './timer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false

    }

    this.onIncreaseBreakTime = this.onIncreaseBreakTime.bind(this);
    this.onDecreaseBreakTime = this.onDecreaseBreakTime.bind(this);
    this.onIncreaseSessionTime = this.onIncreaseSessionTime.bind(this);
    this.onDecreaseSessionTime = this.onDecreaseSessionTime.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onSessionBreakToggle = this.onSessionBreakToggle.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }
  

  onIncreaseBreakTime() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
     }
   });
  }

  onDecreaseBreakTime() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    });
  }

  onIncreaseSessionTime() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.timerMinute + 1
      }
    });
  }

  onDecreaseSessionTime() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.timerMinute - 1
      }
    });
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1,
      }
    });
  }

  onSessionBreakToggle(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
       });
      }
      else {
        this.setState({
          timerMinute: this.state.breakLength
        });
      }
    }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }

  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    })
  }

  render(){
  return (
    <main>
      <section className="title-container">
          <h2>Pomodoro Clock</h2>
      </section>
      
      <section className="interval-duration-container">
         <BreakInterval 
            isPlay = {this.state.isPlay}
            breakInterval={this.state.breakLength} 
            increaseBreak={this.onIncreaseBreakTime}
            decreaseBreak={this.onDecreaseBreakTime} />
         <SessionLength 
            isPlay = {this.state.isPlay}
            sessionLength={this.state.sessionLength} 
            increaseSession={this.onIncreaseSessionTime}
            decreaseSession={this.onDecreaseSessionTime} />
      </section>
      <Timer 
        isPlay = {this.state.isPlay}
        timerMinute = {this.state.timerMinute} 
        breakTimer = {this.state.breakLength}
        updateTimerMinute = {this.onUpdateTimerMinute}
        toggleSessionBreak = {this.onSessionBreakToggle}
        resetTimer = {this.onResetTimer}
        playStopTimer = {this.onPlayStopTimer} />


    </main>

      
    
  );
}

}

export default App;
