import React, { useEffect, useState } from 'react';

import api from '../../../api/Api';
import './TopGames.css';
import { useGames } from './hooks/useGames';

export const TopGames = () => {
  const { gamesList, setGamesList } = useGames();
  
  useEffect(() => {
    const fetchTopGames = async () => {
      const result = await api.get('https://api.twitch.tv/helix/games/top')
      let dataArray = result.data.data
      dataArray.map(game => {
        let newURL = game.box_art_url.replace('{width}', 200).replace('{height}', 280)
        game.box_art_url = newURL
      })
      setGamesList(result.data.data)
    }

    fetchTopGames();
  }, gamesList)

  return (
    <div className="games-hero">
      <div className="games-list">
        {gamesList.map(g => (
          <div className="game-card" key={g.id}>
            <img src={g.box_art_url} />
            <div className="game-card-info" id="card-info">
              <button className="game-card-button" id="card-button">See more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

