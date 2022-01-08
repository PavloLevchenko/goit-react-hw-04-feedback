import React, { Component } from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const btnNames = Object.keys(options);
    return (
      <div>
        {btnNames.map(name => {
          return (
            <button
              key={name}
              className={s.feedbackBtn}
              onClick={() => onLeaveFeedback(name, options[name])}
            >
              {name}
            </button>
          );
        })}
      </div>
    );
  }
}
export default FeedbackOptions;
