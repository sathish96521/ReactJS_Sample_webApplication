import React from 'react';
import { basketballPlayers } from '../data/playerData';
import './PlayerCard.css';

const Basketball = () => {
  return (
    <div className="player-container">
      {basketballPlayers.map(player => (
        <div key={player.id} className="player-card">
          <img src={player.image} alt={player.name} />
          <h3>Bask-{player.name}</h3>
          <p>{player.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Basketball;
