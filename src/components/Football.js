import React from 'react';
import { footballPlayers } from '../data/playerData';
import './PlayerCard.css';

const Football = () => {
  return (
    <div className="player-container">
      {footballPlayers.map(player => (
        <div key={player.id} className="player-card">
          <img src={player.image} alt={player.name} />
          <h3>Foot-{player.name}</h3>
          <p>{player.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Football;
