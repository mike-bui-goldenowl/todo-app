import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { composeWithDevTools } from 'redux-devtools-extension';

import { createLogger } from 'redux-logger';

import { rootSaga } from '../sagas';

import rootReducer from './rootReducer';


const persitCongig = {
  key: 'root',
  storage,
};

const logger = createLogger({});

const persistedReducer = persistReducer(persitCongig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
const persistor = persistStore(store);


sagaMiddleware.run(rootSaga);

export { store, persistor };
