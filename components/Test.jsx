"use client"
import { useState } from 'react';
import React from 'react'


const Test = () => {


  const [letters, setLetters] = useState('');
  const [results, setResults] = useState([]);

  const solve = () => {
    const matches = words.filter(word => {
      const sortedWord = word.split('').sort().join('');
      const sortedLetters = letters.split('').sort().join('');
      return sortedWord === sortedLetters;
    })
    setResults(matches)
  }

  return (
    <div className='text-black'>
      <h1>Word Cookies Solver</h1>
      <input
        type="text"
        value={letters}
        onChange={e => setLetters(e.target.value)}
        placeholder="Enter scrambled letters"
      />
      <button onClick={solve}>Solve</button>
      <div>
        <h2>Results:</h2>
        <ul>
          {results.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

  
export default Test
