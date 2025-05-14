import React from 'react';

const Login = () => {
  return (
    <div className="container mt-5">
      <h2>Đăng Nhập</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Mật khẩu:</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-dark mt-3">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default Login;
