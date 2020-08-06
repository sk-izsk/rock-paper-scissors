import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { ButtonContainer } from './ButtonContainer';

const mockData = {
  count: 1,
  handleTactical: jest.fn(),
  tacticalButtonText: 'mock text',
  handleRock: jest.fn(),
  handlePaper: jest.fn(),
  handleScissors: jest.fn(),
  handleLizard: jest.fn(),
  handleSpock: jest.fn(),
};

test('ButtonContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <ButtonContainer {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
