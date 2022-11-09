import { Component } from "react";
import { Feedback } from "./Feedback/Feedback.jsx";
import { Section } from "./Sections/Section.jsx";
import { Statistic } from "./Statistics/Statistic.jsx";
import { Notification } from "./Statistics/Notification.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = e => { 
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1 
    }))
  }

  totalFeedback = () => { 
    return Object.values (this.state).reduce ((accum, item)=> accum + item, 0)
  }

  positiveFeedbackPrecentage = () => { 
    return Number(
      Math.round ((this.state.good / this.totalFeedback())*100)
    )
  }

  render() { 
    const { good, neutral, bad } = this.state
    const total = this.totalFeedback()
    const positive = this.positiveFeedbackPrecentage()
    return (
      <div className = 'feedback'>
        <Section title="Please leave your feedback">
          <Feedback
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
            
          />
        </Section>

        <Section title="Statistic">
          {total ? (
            <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
          ) :
            (<Notification message='There is no feedback'></Notification>)
          }
        </Section>
      </div>
  )}
};



export default App
