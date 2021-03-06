import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { CardContainer } from './CardContainer';

const mockData = {
  inset: true,
  cardAction: <div>mock</div>,
  cardLoading: true,
  cardBordered: true,
};

test('CardContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <CardContainer {...mockData} />
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
