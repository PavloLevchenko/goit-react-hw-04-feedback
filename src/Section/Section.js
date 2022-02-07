import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

class Section extends Component {
  static propTypes = {
    options: PropTypes.string,
    children: PropTypes.PropTypes.element.isRequired,
  };
  render() {
    const { title, children } = this.props;
    return (
      <section className={s.section}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}
export default Section;
