import React from 'react';
import './styles.css';
import PlayerX from "../../img/player-x.png";
import PlayerO from "../../img/player-o.png";

const Player = ({player}) => {
  const players = [];
  players['x'] = PlayerX;
  players['o'] = PlayerO;
  return (
    <button className='player'>
      <img src={players[player]} alt={`Player ${player.toUpperCase()}`}/>
    </button>
  )
}

export default Player;