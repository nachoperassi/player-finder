import React from 'react';

import { shallow, mount } from 'enzyme';

import Player from './Player';
import TableCell from '@material-ui/core/TableCell';

it('renders without crashing', () => {
  shallow(<Player player={[]} key={null} />);
});

it('renders four TableCell', () => {
  const wrapper = shallow(<Player player={[]} key={null} />);
  expect(wrapper.find(TableCell)).toHaveLength(4);
});

const player = {
  name: 'Ignacio',
  position: 'Keeper',
  nationality: 'argentine',
  age: 22
}

it('takes props', () => {
  const wrapper = mount(<Player player={player} key={1} />);
  expect(wrapper.prop('player')).toEqual(player);
});