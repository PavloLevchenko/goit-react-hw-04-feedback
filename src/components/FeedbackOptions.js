import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <Box display="flex" gridGap={4}>
      {options.map(name => {
        return (
          <button
            type="button"
            key={name.toString()}
            style={{ cursor: 'pointer' }}
            onClick={() => onClickFeedback(name)}
          >
            {name}
          </button>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickFeedback: PropTypes.func.isRequired,
};
