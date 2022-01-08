import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    const btnNames = Object.keys(options);
    return (
      <div>
        {btnNames.map(name => {
          return (
            <button
              type="button"
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
