import React from 'react';
import { volleyballPlayers } from '../data/playerData';
import './PlayerCard.css';

const Volleyball = () => {
  return (
    <div className="player-container">
      {volleyballPlayers.map(player => (
        <div key={player.id} className="player-card">
          <img src={player.image} alt={player.name} />
          <h3>Vol-{player.name}</h3>
          <p>V-{player.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Volleyball;