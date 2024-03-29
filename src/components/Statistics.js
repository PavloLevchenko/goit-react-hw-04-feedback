import PropTypes from 'prop-types';

export const Statistics = ({
  options: { good, neutral, bad, total, positivePercentage },
}) => (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
};
