import React from 'react';
import { hockeyPlayers } from '../data/playerData';
import './PlayerCard.css';

const Hockey = () => {
  return (
    <div className="player-container">
      {hockeyPlayers.map(player => (
        <div key={player.id} className="player-card">
          <img src={player.image} alt={player.name} />
          <h3>Hock-{player.name}</h3>
          <p>{player.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Hockey;
