import React, { useState } from 'react'

const Calculator = () => {

  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  

  const ops = ['/','*','-','+','.'];

  const calcHandler = (value) => {
    
    if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
      return;
    }

    setCalc(c => c + value.toString());

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }

  }

  const resultHandler = () =>{
    setCalc(eval(calc).toString());
    setResult('');
  }

  const clearHandler = () => {
    setCalc('');
    setResult('');
  }
  
  const removeDigitsHandler = () =>{

    const value = calc.slice(0, -1);
    
    setCalc(value);

    if(!ops.includes(value)){
      setResult(eval(value).toString());
    }
    
    
  }
  
  
  return (
    <div className="app">
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : ''}
          {calc || "0"}
        </div>

        <div className='digits-row1'>
          <button className='operators' onClick={clearHandler}>AC</button>
          <button className='operators' onClick={removeDigitsHandler}>D</button>
          <button className='operators' onClick={ () => calcHandler('/') }>/</button>
        </div>

        <div className='digits-row2'>
          <button className='digits' onClick={ () => calcHandler(7) }>7</button>
          <button className='digits' onClick={ () => calcHandler(8) }>8</button>
          <button className='digits' onClick={ () => calcHandler(9) }>9</button>
          <button className='operators' onClick={ () => calcHandler('*') }>x</button>
        </div>

        <div className='digits-row2'>
          <button className='digits' onClick={ () => calcHandler(4) }>4</button>
          <button className='digits' onClick={ () => calcHandler(5) }>5</button>
          <button className='digits' onClick={ () => calcHandler(6) }>6</button>
          <button className='operators' onClick={ () => calcHandler('-') }>-</button>
        </div>

        <div className='digits-row2'>
          <button className='digits' onClick={ () => calcHandler(1) }>1</button>
          <button className='digits' onClick={ () => calcHandler(2) }>2</button>
          <button className='digits' onClick={ () => calcHandler(3) }>3</button>
          <button className='operators' onClick={ () => calcHandler('+') }>+</button>
        </div>

        <div className='digits-row1'>
          <button className='digits' onClick={ () => calcHandler(0) }>0</button>
          <button className='digits' onClick={ () => calcHandler('.') }>.</button>
          <button className='operators' onClick={resultHandler}>=</button>
        </div>

      </div>
    </div>
  )
}

export default Calculator
