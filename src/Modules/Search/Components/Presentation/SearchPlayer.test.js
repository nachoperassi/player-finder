import React from 'react';

import { mount } from 'enzyme';
import sinon from 'sinon';

import SearchPlayer from './SearchPlayer';

const positions = [
  'Attacking Midfield',
  'Central Midfield',
  'Centre-Back',
  'Centre-Forward',
  'Centre-Forward',
  'Defensive Midfield',
  'Keeper',
  'Left Midfield',
  'Left Wing',
  'Left-Back',
  'Right-Back'
]

const filters = {
  name: 'Ignacio',
  position: 'Keeper',
  age: 22
}

it('calls componentDidMount', () => {
  sinon.spy(SearchPlayer.prototype, 'componentDidMount');
  mount(<SearchPlayer filters={filters} positions={positions} />);
  expect(SearchPlayer.prototype.componentDidMount)
    .toHaveProperty('callCount', 1);
});

it('calls onSubmit handler', () => {
  const mockOnSubmit = jest.fn();
  const wrapper = mount(
    <SearchPlayer filters={filters} positions={positions} onSubmit={mockOnSubmit} />);
  const form = wrapper.find('form');
  form.simulate('submit');
  expect(mockOnSubmit.mock.calls.length).toEqual(1);
});