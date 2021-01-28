import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from './src/store';
import _App from './_App';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <_App />
      </PersistGate>
    </Provider>
  );
};

export default App;