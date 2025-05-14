import React, { useState } from "react";
import axios from "axios"; // Vẫn import để giữ đúng theo yêu cầu, nhưng không sử dụng
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "option1",
    city: "",
    country: "Việt Nam",
    password: "",
    confirmPassword: "",
    agree: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    const newUser = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      city: formData.city,
      country: formData.country
    };

    // ✅ Lưu thông tin đăng ký vào localStorage
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    alert("Đăng ký thành công!");
    navigate("/login");
  };

  return (
    <section className="section-content padding-y">
      <div className="card mx-auto" style={{ marginTop: "40px", maxWidth: "520px" }}>
        <article className="card-body">
          <header className="mb-4"><h4 className="card-title">Đăng ký</h4></header>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col form-group">
                <label>Họ</label>
                <input type="text" className="form-control" name="firstname" value={formData.firstname} onChange={handleChange} />
              </div>
              <div className="col form-group">
                <label>Tên</label>
                <input type="text" className="form-control" name="lastname" value={formData.lastname} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
              <small className="form-text text-muted">Chúng tôi sẽ không chia sẻ email của bạn với ai khác.</small>
            </div>

            <div className="form-group">
              <label className="custom-control custom-radio custom-control-inline">
                <input className="custom-control-input" type="radio" name="gender" value="option1" checked={formData.gender === "option1"} onChange={handleChange} />
                <span className="custom-control-label"> Nam </span>
              </label>
              <label className="custom-control custom-radio custom-control-inline">
                <input className="custom-control-input" type="radio" name="gender" value="option2" checked={formData.gender === "option2"} onChange={handleChange} />
                <span className="custom-control-label"> Nữ </span>
              </label>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Thành phố</label>
                <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="form-group col-md-6">
                <label>Quốc gia</label>
                <select className="form-control" name="country" value={formData.country} onChange={handleChange}>
                  <option>Chọn...</option>
                  <option>Pháp</option>
                  <option>Nga</option>
                  <option>Việt Nam</option>
                  <option>Hàn Quốc</option>
                  <option>Thái Lan</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Tạo mật khẩu</label>
                <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <div className="form-group col-md-6">
                <label>Lặp lại mật khẩu</label>
                <input className="form-control" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" name="agree" checked={formData.agree} onChange={handleChange} />
                <div className="custom-control-label"> Tôi đồng ý <a href="#">điều khoản và quy định</a> </div>
              </label>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">Đăng ký</button>
            </div>
          </form>
        </article>
      </div>
      <p className="text-center mt-4">Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
      <br />
    </section>
  );
};

export default Content;
