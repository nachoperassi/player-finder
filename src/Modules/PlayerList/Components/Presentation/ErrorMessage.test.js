import React from 'react';

import { shallow, mount } from 'enzyme';

import ErrorMessage from './ErrorMessage';

const mockError = 'mock error for testing purposes';

it('renders without crashing', () => {
  shallow(<ErrorMessage errorMessage={mockError} />);
});

it('renders errorMessage prop in span´s text', () => {
  const wrapper = mount(<ErrorMessage errorMessage={mockError} />);
  const span = wrapper.find('span');
  expect(span.render().text()).toEqual(mockError);
});