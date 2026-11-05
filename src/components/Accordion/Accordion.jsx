import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Accordion.module.css';

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={css.accordion}>
      <button
        type="button"
        className={css.header}
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={css.arrow}>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && <div className={css.content}>{children}</div>}
    </section>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
