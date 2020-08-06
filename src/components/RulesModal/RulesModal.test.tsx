import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { RulesModal } from './RulesModal';

const mockData = {
  visible: true,
  onClose: jest.fn(),
};

test('RulesModal renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <RulesModal {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
