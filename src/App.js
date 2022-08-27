import React, { useState } from 'react';
import './App.css';
import Section from 'Section';
import Statistics from 'Statistics';
import FeedbackOptions from 'FeedbackOptions';
import Notification from 'Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const feedbackOptions = { good: setGood, neutral: setNeutral, bad: setBad };
  const setFeedback = type => {
    feedbackOptions[type](prev => prev + 1);
  };
  const positivePercentage = Math.round((good / total) * 100);
  const isLeaveFeedback = total > 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(feedbackOptions)} onClickFeedback={setFeedback} />
      </Section>
      <Section title="Statistics">
        {isLeaveFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
