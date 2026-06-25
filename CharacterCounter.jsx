import React, { useState } from 'react';

const CharacterCounter = () => {
  const [sentence, setSentence] = useState('');

  const lengthOfsent = sentence.length;
  const wordCount = sentence.trim() === ''
      ? 0 : sentence.trim().split(/\s+/).length;

  return (
    <>
      <h2 className="text-center"> Assignment 1: Character Counter</h2>

      <div className="container">
        <input
          type="text"
          placeholder="Enter sentence here"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />

        <br />

        <p>Text: {sentence}</p>
        <p>Characters: {lengthOfsent}</p>
        <p>Words: {wordCount}</p>
      </div>
    </>
  );
};

export default CharacterCounter;
