import React, {Component} from "react"
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

export class App extends Component{

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage(total) {
    const {good} = this.state;
    const positiveFeedback = (total) ? Math.round(good / total * 100 ) :  0 ;
        
    return positiveFeedback;
  }


  handleChangeCount = (data) => {
    this.setState(prevState => ({
         [data]: prevState[data] + 1,
       }))
  }


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <Section title ="Please liave feedback" >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleChangeCount }
          />
        </Section>

        
        <Section title ="Statistic" >
          {(!this.countTotalFeedback())
          ? (<Notification message="There is no feedback" />)
          : (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage = {percentage}
          />)}
        </Section>
      </>
    )
  }
}