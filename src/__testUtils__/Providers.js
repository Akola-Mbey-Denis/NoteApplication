import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import useTheme from '../common/hooks/useTheme';
import {store} from '../common/redux/store';


export const TestReduxProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};


export const TestThemeProvider = (props) => {
  const {theme} = useTheme();
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};


const TestProvider = (props) => {
  return (
    <TestReduxProvider>
      <TestThemeProvider>{props.children}</TestThemeProvider>
    </TestReduxProvider>
  );
};

export default TestProvider;
