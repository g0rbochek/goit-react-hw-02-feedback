import { Component } from 'react'
import { FeedBack } from './FeedBack/FeedBack'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'

import { Section } from './Section/Section'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  buttonClick = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercent = () => {
    let { good, neutral, bad } = this.state;
    const procent = Math.ceil((good * 100) / (good + neutral + bad));
    if (!procent) {
      return 0;
    } else return procent;
  };


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
      <Section title= 'Please leave feedback' item="h1">
        <FeedBack
        buttonClick={this.buttonClick}
        options={Object.keys(this.state)}
        />
      </Section>
      <Section title='Statistics'>
      {good + neutral + bad > 0 ? (
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercent()}
              />            
          ) : (
            <Notification message ='There is no feedback'/>
          )}
      </Section>
      </>
    )
  }

}