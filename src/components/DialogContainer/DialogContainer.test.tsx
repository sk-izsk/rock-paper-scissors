import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { DialogContainer } from './DialogContainer';

const mockData = {
  inset: true,
  cardAction: <div>mock</div>,
  cardLoading: true,
  cardBordered: true,
  visible: true,
  onClose: jest.fn(),
};

test('DialogContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <DialogContainer {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
