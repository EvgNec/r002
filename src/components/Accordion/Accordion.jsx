import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  AccordionSection,
  AccordionHeader,
  AccordionContent,
  Arrow,
} from './Accordion.styled';

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionSection>
      <AccordionHeader
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <Arrow>{isOpen ? '▲' : '▼'}</Arrow>
      </AccordionHeader>

      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionSection>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
