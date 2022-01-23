import '@testing-library/react-native';
import selectTheme from '../selectTheme';

const state = {
  settings: {
    theme: 'light',
  },
  notes: [],
};

describe('Redux state theme selector', () => {
  test('selects theme from state', () => {
    const theme = selectTheme(state);
    expect(theme).toEqual('light');
  });
});
