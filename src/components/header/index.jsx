import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { connect } from 'react-redux';
// action
import { withRouter } from 'react-router-dom';

import { appLoading } from '../../actions';
// assets
import { LOGO } from '../../assets/images';


import './styles.scss';

const Header = ({ history, setAppLoading }) => {
  const handleLogOut = () => {
    setAppLoading();
    setTimeout(() => {
      setAppLoading();
      history.push('/login');
    }, 1000);
  };
  return (
    <div className="header">
      <div className="left">
        <img src={LOGO} alt="" />
        <div className="info">
          <p className="name">Mike - Hoàng</p>
          <p className="role">Xốp que Đì ve Lớp bơ</p>
          <p className="address">Viet Name - HCM</p>
        </div>

      </div>
      <div className="right" onClick={handleLogOut}>
        <AiOutlineLogout
          size={70}
          color="white"
          className="icon"
        />
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({ setAppLoading: () => dispatch(appLoading.request()) });

export default withRouter(connect(null, mapDispatchToProps)(Header));
