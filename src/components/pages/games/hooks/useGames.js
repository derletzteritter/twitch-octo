import React from 'react';
import { atom, useRecoilState } from 'recoil';

export const gamesListState = atom({
  key: 'topGames',
  default: []
})

export const useGames = () => {
  const [gamesList, setGamesList] = useRecoilState(gamesListState);
  return { gamesList, setGamesList }
}