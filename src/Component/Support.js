import React, { useState } from 'react';
import '../Styles/support.css';
import { Data } from './Data';
import Info from './Info';
const Support = () => {
  const [question, setQuestions] = useState(Data);
  return (
    <>
      <h1>Support</h1>
      <section className="main_div">
        {question.map((curElem) => {
          const { info } = curElem;
          return <Info key={info} {...curElem} />;
        })}
      </section>
    </>
  );
};
export default Support;
