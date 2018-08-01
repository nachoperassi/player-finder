import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerList from '../PlayerList';
import Search from '../Search';
import { shallow, render, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should render one SearchPlayerContainer', () => {
  const wrapper = shallow(<App />);
  const SearchPlayer = Search.components.SearchPlayerContainer;
  expect(wrapper.find(SearchPlayer)).toHaveLength(1);
});

it('should render one PlayerListContainer', () => {
  const wrapper = shallow(<App />);
  const List = PlayerList.components.PlayerListContainer;
  expect(wrapper.find(List)).toHaveLength(1);
});
