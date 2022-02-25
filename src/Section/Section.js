import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={s.section}>
    <h2>{title}</h2>
    {children}
  </section>
);
Section.propTypes = {
  options: PropTypes.string,
  children: PropTypes.PropTypes.element.isRequired,
};
export default Section;
