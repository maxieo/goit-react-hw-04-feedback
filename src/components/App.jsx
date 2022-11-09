import { useState } from "react";
import { Feedback } from "./Feedback/Feedback.jsx";
import { Section } from "./Sections/Section.jsx";
import { Statistic } from "./Statistics/Statistic.jsx";
import { Notification } from "./Statistics/Notification.jsx";

function App () {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const onLeaveFeedback = (option) => { 
    setState(prevState => ({...prevState, [option]: prevState[option] +1 }))
  }

  const totalFeedback = () => { 
    return Object.values (state).reduce ((accum, item)=> accum + item, 0)
  }

  const positiveFeedbackPrecentage = () => { 
    return Number(
      Math.round ((state.good / totalFeedback())*100)
    )
  }

    const total = totalFeedback()
    const positive = positiveFeedbackPrecentage()
    return (
      <div className = 'feedback'>
        <Section title="Please leave your feedback">
          <Feedback
            options={state}
            onLeaveFeedback={onLeaveFeedback}
            
          />
        </Section>

        <Section title="Statistic">
          {total ? (
            <Statistic
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positive={positive}
          />
          ) :
            (<Notification message='There is no feedback'></Notification>)
          }
        </Section>
      </div>
  )
};



export default App
