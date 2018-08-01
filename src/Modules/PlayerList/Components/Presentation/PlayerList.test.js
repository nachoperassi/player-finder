import React from 'react';

import { shallow, render, mount } from 'enzyme';

import sinon from 'sinon';

import PlayerList from './PlayerList';
import Player from './Player';
import { LinearProgress } from '@material-ui/core';
import ErrorMessage from './ErrorMessage';

it('renders without crashing', () => {
  shallow(<PlayerList classes={{}} players={[]} status={{}} />);
});

const statusLoading = {
  isLoading: true
}

it('renders LinearProgress when status propertie isLoading equals true', () => {
  const wrapper = mount(<PlayerList players={[]} status={statusLoading} />);
  expect(wrapper.find(LinearProgress)).toHaveLength(1);
  // console.log(wrapper.debug());
});

const statusError = {
  error: true
}

it('renders ErrorMessage when status propertie error equals true', () => {
  const wrapper = mount(<PlayerList players={[]} status={statusError} />);
  expect(wrapper.find(ErrorMessage)).toHaveLength(1);
  // console.log(wrapper.debug());
});

const players = [{
  contractUntil : "2022-06-30",
  age : 25,
  jerseyNumber : 9,
  name : "Romelu Lukaku",
  nationality : "Belgium",
  position : "Centre-Forward"
}, {
  contractUntil : "2019-06-30",
  age: 27,
  jerseyNumber : 1,
  name : "David de Gea",
  nationality : "Spain",
  position : "Keeper"
}, {
  contractUntil : "2021-06-30",
  age: 31,
  jerseyNumber : 20,
  name : "Sergio Romero",
  nationality : "Argentina",
  position : "Keeper"
}]

it('renders expected amount of Players', () => {
  const wrapper = mount(<PlayerList players={players} status={{}} />);
  expect(wrapper.find(Player)).toHaveLength(3);
})