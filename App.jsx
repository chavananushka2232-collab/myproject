import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CharacterCounter from './components/CharacterCounter';
import ProductQuantity from './components/ProductQuantity';
import ColourPicker from './components/ColourPicker';
import UserProfileCard from './components/UserProfileCard';
import FeedbackCollector from './components/FeedbackCollector';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CharacterCounter />
      <hr />

      <ProductQuantity />
      <hr />

      <ColourPicker />
      <hr />

      <UserProfileCard />
      <hr />

      <FeedbackCollector />
      <hr />
    </>
  );
}

export default App;