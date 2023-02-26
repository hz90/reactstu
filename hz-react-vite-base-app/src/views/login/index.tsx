/*
 * @FilePath: /vite-project/src/views/login/index.tsx
 * @Description: login
 *
 */
import LoginForm from './components/loginForm';
import logo from '@/assets/images/logo.png';

import './index.less';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src={logo} alt="logo" />
            <span className="logo-text">React-Admin</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
