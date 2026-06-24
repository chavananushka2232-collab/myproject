import React, { useState } from 'react';

const ColourPicker = () => {
  const [color, setColor] = useState('Blue');

  return (
    <div>
      <h2> Favorite Color Picker</h2>

      <h4>Selected Color: {color}</h4>

     <center> <div
        style={{
          width: '150px',
          height: '100px',
          border: '2px solid black',
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px'
        }}
      >
        {color}
      </div></center>

      <button onClick={() => setColor('Red')}>Red</button>{' '}
      <button onClick={() => setColor('Green')}>Green</button>{' '}
      <button onClick={() => setColor('Blue')}>Blue</button>{' '}
      <button onClick={() => setColor('Yellow')}>Yellow</button>
    </div>
  );
};

export default ColourPicker;