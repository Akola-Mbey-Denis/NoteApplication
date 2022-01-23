import AsyncStorage from '@react-native-async-storage/async-storage';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';

export const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

export const middlewareConfig = {
  serializableCheck: {
    ignoredActions: [FLUSH, PAUSE, PURGE, PERSIST, REGISTER, REHYDRATE],
  },
};
