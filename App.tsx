import React from 'react';
import {LogBox} from 'react-native';
import {Begerz} from './src/screens/begerz';
import {allReducers} from './src/redux/reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };
  const persistedReducer = persistReducer(persistConfig, allReducers);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Begerz />
      </PersistGate>
    </Provider>
  );
};

export default App;
