import React from 'react';
import '..//../styles/Calculate.css';

function Calculate() {
  const countPercent = () => {
    console.log('click' + 1);
  };

  return (
    <div className='wrap-percent'>
      <div className='calculate'>
        <h1>Рассчитать процент красителя</h1>
        <section className='input'>
          <input placeholder='Введите вес сырья'></input>
        </section>
        <section className='check'>
          <input type='checkbox'></input>
          <span>2%</span>
          <input type='checkbox'></input>
          <span>1%</span>
        </section>
        <button onClick={countPercent} className='count-btn'>
          Рассчитать
        </button>
      </div>
    </div>
  );
}

export { Calculate };
