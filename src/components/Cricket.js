import React from 'react';
import { cricketPlayers } from '../data/playerData';
import './PlayerCard.css';

const Cricket = () => {
  return (
    <div className="player-container">
      {cricketPlayers.map(player => (
        <div key={player.id} className="player-card">
          <img src={player.image} alt={player.name} />
          <h3>Crick-{player.name}</h3>
          <p>{player.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Cricket;
