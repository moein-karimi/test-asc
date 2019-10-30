import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLogin } from '../redux/login/actions.login';

const Header = ({ login, isLogin }) => (
  <div style={{ margin: '10px 50px' }} className="ui inverted menu">
    <Link to="/" className="active item">
      خانه
    </Link>
    {login ? (
      <div onClick={() => isLogin()} className="item">
        خروج
      </div>
    ) : (
      <Link to="/login" className="item">
        ورود
      </Link>
    )}
  </div>
);

const mapStateToProps = state => {
  return { login: state.login.isLogin };
};

export default connect(
  mapStateToProps,
  { isLogin }
)(Header);
