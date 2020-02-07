import { fork, all } from 'redux-saga/effects';

import { watchAddTodo, watchDeleteTodo, watchEditTodo, watchCompleteTodo } from './todo/todoSaga';
import { watchSetAppLoading} from './app/appSaga';

export function* rootSaga() {
    yield all([
        fork(watchAddTodo),
        fork(watchDeleteTodo),
        fork(watchEditTodo),
        fork(watchCompleteTodo),
        fork(watchSetAppLoading)
    ]);
}