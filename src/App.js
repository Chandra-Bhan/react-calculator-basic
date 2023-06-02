import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// create a basic calculator. Create 2 input fields and four buttons named addition, subtraction, multiplication and division add a H1 tag and show the results when you click on the specific button. Delete

export default function App() {
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    if (firstNum !== '' && secondNum !== '') {
      if (operation == 'add') {
        setResult(Number(firstNum) + Number(secondNum));
      } else if (operation == 'sub') {
        setResult(Number(firstNum) - Number(secondNum));
      } else if (operation == 'mul') {
        setResult(Number(firstNum) * Number(secondNum));
      } else if (operation == 'div') {
        setResult(Number(firstNum) / Number(secondNum));
      }
    } else {
      alert('Please fill all fields');
    }
  };

  const handleClear = () => {
    setFirstNum('');
    setSecondNum('');
    setResult('');
  };

  return (
    <div
      className="border p-5"
      style={{
        width: '37rem',
        margin: 'auto',
        marginTop: '5rem',
        textAlign: 'center',
      }}
    >
      <h1 className="text-primary">CALCULATOR</h1>
      <input
        className="form-control"
        style={{ width: '20rem', margin: 'auto' }}
        type="text"
        placeholder="First Number"
        value={firstNum}
        onChange={(e) => setFirstNum(e.target.value)}
      />
      <br />
      <input
        className="form-control"
        style={{ width: '20rem', margin: 'auto', marginBottom: '20px' }}
        type="text"
        placeholder="Second Number"
        value={secondNum}
        onChange={(e) => setSecondNum(e.target.value)}
      />
      <div>
        <button
          className="btn btn-success"
          onClick={() => handleOperation('add')}
        >
          Addition
        </button>
        <button
          className="btn btn-warning ms-1"
          onClick={() => handleOperation('sub')}
        >
          Subtraction
        </button>
        <button
          className="btn btn-danger ms-1"
          onClick={() => handleOperation('mul')}
        >
          Multiplication
        </button>
        <button
          className="btn btn-primary ms-1"
          onClick={() => handleOperation('div')}
        >
          Division
        </button>
        <button
          className="btn btn-secondary ms-1"
          onClick={() => handleClear()}
        >
          Clear
        </button>
      </div>
      <h1 className="border p-3 text-info" style={{ marginTop: '40px' }}>
        Result :- {result}
      </h1>
    </div>
  );
}
