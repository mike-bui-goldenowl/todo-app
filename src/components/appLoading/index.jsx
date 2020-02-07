import React from 'react';
import {connect} from "react-redux";

//Spiner
import {DotLoader} from 'react-spinners';

import "./styles.scss";

function AppLoading({loading}){
    return(
        loading &&
        <div className="loading">
            <DotLoader size={70} />
          </div>
    )
}

const mapStateToDispatch = state =>({
    loading: state.app.loading
})


export default connect(mapStateToDispatch)(AppLoading);