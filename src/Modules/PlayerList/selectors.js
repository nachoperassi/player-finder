import { createSelector } from 'reselect';

// Search Module API
import Search from '../Search/index';

const getPlayers = (state) => state.players;

export const getFilteredPlayersSelector = createSelector(
  [Search.selectors.getFiltersSelector, getPlayers],
  (filters, players) => (
    players.filter((player) => (
      (filters.name? player.name.includes(filters.name) : true) &&
      (filters.position? player.position.includes(filters.position) : true) &&
      (filters.age? player.age === filters.age : true)
    ))
  )
);