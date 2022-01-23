import {renderHook} from '@testing-library/react-hooks';
import React from 'react';
import {TestReduxProvider} from './Providers';

const renderHookReduxWrap = (
  callback, options) => {
  return renderHook(callback, {
    ...options,
    wrapper: ({children}) => <TestReduxProvider>{children}</TestReduxProvider>,
  });
};

export default renderHookReduxWrap;
