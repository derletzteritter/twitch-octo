import React from 'react';
import { atom, useRecoilState } from 'recoil';

export const streamersListState = atom({
  key: 'topStreamers',
  default: []
})

export const useStreamers = () => {
  const [streamersList, setStreamersList] = useRecoilState(streamersListState);
  return { streamersList, setStreamersList }
}