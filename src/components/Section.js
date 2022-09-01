import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section style={{ padding: 20 }}>
    <h2>{title}</h2>
    {children}
  </section>
);
Section.propTypes = {
  options: PropTypes.string,
  children: PropTypes.PropTypes.element.isRequired,
};
