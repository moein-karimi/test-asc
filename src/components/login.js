import React from 'react';
import { connect } from 'react-redux';
import { isLogin } from '../redux/login/actions.login';

const Login = ({ isLogin }) => (
  <div>
    <form onSubmit={e => e.preventDefault()} className="ui form">
      <div className="field">
        <label>نام</label>
        <input type="text" name="first-name" placeholder="آسان" />
      </div>
      <div className="field">
        <label>نام خانوادگی</label>
        <input type="text" name="last-name" placeholder="شهر" />
      </div>
      <button
        onClick={() => {
          isLogin();
        }}
        className="ui button"
        type="submit"
      >
        ورود
      </button>
    </form>
  </div>
);

export default connect(
  null,
  { isLogin }
)(Login);
