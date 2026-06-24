import React, { useState } from "react";

function UserProfileCard() {
  const [player, setPlayer] = useState(null);

  const showPlayer = (name, role, country) => {
    setPlayer({ name, role, country });
  };

  return (
    <div className="container mt-4">
      <h2>User Profile Card</h2>

      <button
        className="btn btn-primary me-2"
        onClick={() => showPlayer("Virat Kohli", "Batsman", "India")}
      >
        Virat Kohli
      </button>

      <button
        className="btn btn-success me-2"
        onClick={() => showPlayer("Rohit Sharma", "Batsman", "India")}
      >
        Rohit Sharma
      </button>

      <button
        className="btn btn-warning"
        onClick={() => showPlayer("MS Dhoni", "Wicket Keeper", "India")}
      >
        MS Dhoni
      </button>

      {player && (
        <div className="mt-4">
          <h4>Name: {player.name}</h4>
          <h4>Role: {player.role}</h4>
          <h4>Country: {player.country}</h4>
        </div>
      )}
    </div>
  );
}

export default UserProfileCard;