import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { NameModal } from './NameModal';

const mockData = {
  visible: true,
  value: 'mock value',
  onClose: jest.fn(),
  handleValue: jest.fn(),
};

test('NameModal renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <NameModal {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
