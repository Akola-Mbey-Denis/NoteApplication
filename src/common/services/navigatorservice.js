import * as React from 'react';
import {routes} from '../constants';

export const isMountedRef = React.createRef();

export const navigatorRef = React.createRef;

export const navigate = (name, params) => {
  if (isMountedRef.current && navigatorRef.current) {
    // Perform navigation if the app has mounted
    navigatorRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};
export const dispatchNavAction = (action) => {
  if (isMountedRef.current && navigatorRef.current) {
    // Perform navigation if the app has mounted
    navigatorRef.current.dispatch(action);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const getOpenEditor = (noteId) => {
  return () => navigate(routes.editor, {noteId});
};

export const onNavigatorReady = () => {
  isMountedRef.current = true;
};