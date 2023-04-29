import Main from './AccordionMain';
import data from '../data/accordiondata';
import React from 'react';

import './Accordion.css';

function Accordion() {
  const [questions, setQuestions] = React.useState(data);

  const questionElements = questions.map((question) => {
    return <Main key={question.id} {...question} />;
  });

  return (
    <div className='accord'>
      <div className='accordion'>
        <h1 className='accordion-heading'>
          FAQs
        </h1>
        <div className='section--accordions'>{questionElements}</div>
      </div>
    </div>
  );
}

export default Accordion;
