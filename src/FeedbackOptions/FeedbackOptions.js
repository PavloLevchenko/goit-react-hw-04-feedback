import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options }) => (
  <div>
    {Object.keys(options).map(name => {
      const click = () => {
        options[name](count => count + 1);
      };
      return (
        <button type="button" key={name} name={name} className={s.feedbackBtn} onClick={click}>
          {name}
        </button>
      );
    })}
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.object,
};
export default FeedbackOptions;
