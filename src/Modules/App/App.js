// react
import React, { Component } from 'react';

// assets
import 'typeface-roboto';
import './assets/App.css';

// components
import { CssBaseline } from '@material-ui/core';
import Search from '../Search';
import PlayerList from '../PlayerList';

const SearchPlayerContainer = Search.components.SearchPlayerContainer;
const PlayerListContainer = PlayerList.components.PlayerListContainer;

class App extends Component {
  render() {
    return (
      <div id="App">
        <CssBaseline />
        <SearchPlayerContainer />
        <PlayerListContainer />
      </div>
    );
  }
}

export default App;
