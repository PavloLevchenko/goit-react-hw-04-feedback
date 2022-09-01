import React, { useState } from 'react';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Notification } from 'components/Notification';

export const App = () => {
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
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackOptions)}
          onClickFeedback={setFeedback}
        />
      </Section>
      <Section title="Statistics">
        {isLeaveFeedback ? (
          <Statistics
            options={{ good, neutral, bad, total, positivePercentage }}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};
