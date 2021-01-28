import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './ducks/index';
import watcherSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['movies'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const storeEntry = createStore(persistedReducer, enhancer);

sagaMiddleware.run(watcherSaga);

export const store = storeEntry;
export const persistor = persistStore(storeEntry);