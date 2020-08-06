import { render } from '@testing-library/react';
import React from 'react';
import { TestContextProvider } from '../../TestContextProvider';
import { TextContainer } from './TextContainer';

test('TextContainer renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <TextContainer header='mock header'>Mock description</TextContainer>
    </TestContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
