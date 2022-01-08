import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(name => {
          return (
            <button
              type="button"
              key={name}
              name={name}
              className={s.feedbackBtn}
              onClick={onLeaveFeedback}
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
