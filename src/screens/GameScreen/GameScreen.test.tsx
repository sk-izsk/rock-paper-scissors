import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { GameScreen } from './GameScreen';

test('GameScreen renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <GameScreen />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
