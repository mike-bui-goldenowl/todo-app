import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootSaga } from '../sagas';

import rootReducer from './rootReducer';


const persitCongig = {
  key: 'root',
  storage,
};

// const logger = createLogger({});

const persistedReducer = persistReducer(persitCongig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
const persistor = persistStore(store);


sagaMiddleware.run(rootSaga);

export { store, persistor };
