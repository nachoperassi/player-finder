export const NAME = 'players';

export const initialState = {
  isFetching: false,
  error: false,
  errorMessage: '',
  items: []
}

export const PLAYERS_API_URL = 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty';