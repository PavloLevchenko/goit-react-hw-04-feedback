import PropTypes from 'prop-types';

const Notification = ({ message }) => <div>{message}</div>;

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
