import React, { useState } from 'react';

const CharacterCounter = () => {
  const [sentence, setSentence] = useState('');

  const lengthOfsent = sentence.length;
  const wordCount = sentence.trim() === ''
      ? 0 : sentence.trim().split(/\s+/).length;

  return (
    <>
      <h1 className="text-center">Character Counter</h1>

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