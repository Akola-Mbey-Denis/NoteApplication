jest.useFakeTimers();
jest.setTimeout(100000);

import {cleanup, render} from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../__testUtils__/Providers';
import Navigator from '../Navigator';

describe('Navigator', () => {
  afterEach(cleanup);
  test('Navigator renders correctly', () => {
    const navigator = render(
      <TestProvider>
        <Navigator />
      </TestProvider>,
    );

    expect(navigator.toJSON()).toMatchSnapshot();
  });

});
