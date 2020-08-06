import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { PlayerContainer } from './PlayerContainer';

test('PlayerContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <PlayerContainer />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
