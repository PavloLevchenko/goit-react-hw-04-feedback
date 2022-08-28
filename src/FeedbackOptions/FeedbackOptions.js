import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClickFeedback }) =>
  options.map(name => {
    return (
      <button
        type="button"
        key={name.toString()}
        className={s.feedbackBtn}
        onClick={() => onClickFeedback(name)}
      >
        {name}
      </button>
    );
  });

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onClickFeedback: PropTypes.func,
};

export default FeedbackOptions;
