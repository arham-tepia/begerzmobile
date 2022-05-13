import React from 'react';
import {LogBox} from 'react-native';
import {Begerz} from './src/screens/begerz';

const App = () => {
  LogBox.ignoreAllLogs();
  return <Begerz />;
};

export default App;
