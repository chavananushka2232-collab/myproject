import React, { useState } from 'react';

const FeedbackCollector = () => {
  const [feedback, setFeedback] = useState('');
  const [count, setCount] = useState(0);

  const handleFeedback = (type) => {
    setFeedback(type);
    setCount(count + 1);
  };

  const getMessage = () => {
    if (feedback === 'Good') {
      return 'Thank you for your positive feedback!';
    } else if (feedback === 'Average') {
      return "We'll try to improve!";
    } else if (feedback === 'Poor') {
      return 'Sorry for the inconvenience!';
    }
    return '';
  };

  return (
    <div className="container">
      <h3>  🌼Feedback Collector🌼</h3>

    <br/>
      <button className="btn btn-success mx-1 px-2" onClick={() => handleFeedback('Good')}>
        😊 Good
      </button>

      <button  className="btn btn-warning mx-1 px-2" onClick={() => handleFeedback('Average')}>
        😐 Average
      </button>

      <button className="btn btn-danger mx-1 px-2" onClick={() => handleFeedback('Poor')}>
        ☹️ Poor
      </button>


<br/>
      {feedback && (
  <>
   <p><strong>★ Selected Feedback:</strong> {feedback}</p>
   <p><strong> Total Feedback Given:</strong> {count}</p>
    <p>{getMessage()}</p>
  </>
)}
</div>
  );
};

export default FeedbackCollector;