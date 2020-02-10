import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Input from '../../components/input';
import Footer from '../../components/footer';
// actions
import { appLoading } from '../../actions';
// assets
import { BG_HEADER } from '../../assets/images';

// styles
import './styles.scss';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

    handleChangeText = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleLogin = (e) => {
      const { setAppLoading, history } = this.props;
      e.preventDefault();
      setAppLoading();
      setTimeout(() => {
        history.push('/');
        setAppLoading();
      }, 2000);
    }


    render() {
      const { username, password } = this.state;
      return (
        <div className="section-login">
          <img src={BG_HEADER} alt="" />
          <div className="form">
            <h1>Welcome to us !!!</h1>
            <form onSubmit={this.handleLogin}>
              <div>
                <Input
                  username
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChangeText}
                  className="input"
                />
                <Input
                  password
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChangeText}
                  className="input"
                />
                <input hidden type="submit" value="Submit" />
              </div>


              <div className="forgot">
                <p>Forgot your password ?</p>
              </div>
              <div
                role="button"
                tabIndex={0}
                className="button"
                onClick={this.handleLogin}
                onKeyDown={this.handleLogin}
              >
                <p className="btn-login">Sign In</p>
              </div>
            </form>
            <p>or </p>
            <div className="button">
              <p className="btn-login sign-up">Sign Up</p>
            </div>

            <Footer className="footer" />
          </div>
        </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({ setAppLoading: () => dispatch(appLoading.request()) });

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
