import fetch from 'cross-fetch'

import { PLAYERS_API_URL } from './constants';

import calculateAge from '../../helpers/calculateAge';

import { RECEIVE_PLAYERS } from './actionTypes';

import Status from '../Status/index';

export const receivePlayers = (players) => ({
  type: RECEIVE_PLAYERS,
  players: players
});

export const loadPlayers = () => {
  return async (dispatch) => {
    dispatch(Status.actions.loadStatus());
    try {
      // fetch players and add age propertie
      const res = await fetch(PLAYERS_API_URL);
      if (res.status > 400) throw new Error(res.statusText);
      const json = await res.json();
      const players = json.map(player => ({
        ...player,
        age: calculateAge(player.dateOfBirth)
      }));
      dispatch(Status.actions.okStatus());
      dispatch(receivePlayers(players));
    } catch(err) {
        dispatch(Status.actions.errorStatus(err.message))
    }
  }
}