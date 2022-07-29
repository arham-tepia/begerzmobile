import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {Begerz} from './src/screens/begerz';
import {allReducers} from './src/redux/reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StripeProvider} from '@stripe/stripe-react-native';
import {stripePublishableKey} from './src/constants/keys';

const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };
  const persistedReducer = persistReducer(persistConfig, allReducers);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  // const publishableKey =
  //   'pk_test_51LBRaPKBdppqN46ahkiNbyHp33HOI5uB0guAUVClKVAIBizsN9HkXoPOZ6em7nMOapjh9NGhtPix2oiIysMAAKAu000dNXzCi3';

  LogBox.ignoreAllLogs();
  return (
    <StripeProvider
      publishableKey={stripePublishableKey}
      // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Begerz />
        </PersistGate>
      </Provider>
    </StripeProvider>
  );
};

export default App;
