import React, { useState } from 'react';
import Data from './data';
import './style.css'

const LoremIpsum = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0){
      amount = 1;
    }
    if(count >=8){
      amount = 8;
    }
    setText(Data.slice(0, amount));
  }

  return (
    <section className="section-center">
        <div className="header-section">
            <h3>Tired of bored lorem ipsum?</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amouint">
                paragraphs:
                </label>
                <input type="number" name='amount' id='amount'
                value={count}
                onChange={(e) => setCount(e.target.value)}
                />
                <button className='btn btn-lorem' type='submit'>
                Generate
                </button>
            </form>
        </div>
      <article className='lorem-text'>
        {text.map((item,index) => {
          return(
            <p key={index}>{item}</p>
          );
        })}
      </article>
    </section>
  );
}

export default LoremIpsum;
