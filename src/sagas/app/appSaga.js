import { takeLatest,put} from 'redux-saga/effects';
import {appLoading} from '../../actions';
import { APP_SET_LOADING_REQUEST} from '../../constants/actionTypes';
function* setAppLoadingRequest(){
        yield put(appLoading.success());
}

export function* watchSetAppLoading(){
    yield takeLatest(APP_SET_LOADING_REQUEST,setAppLoadingRequest);
}