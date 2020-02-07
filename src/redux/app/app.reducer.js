import {APP_SET_LOADING} from '../../constants/actionTypes';
const INITIAL_STATE = {
    loading: false
};

const appReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case APP_SET_LOADING:
            return{
                ...state,
                loading:!state.loading
            };
        default: return {...state};
    }
};

export default appReducer;