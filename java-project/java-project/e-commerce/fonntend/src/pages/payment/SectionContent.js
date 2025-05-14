import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SectionContent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "Việt Nam",
    city: "",
    address: "",
    delivery: "giao hàng tiêu chuẩn",
    cardName: "",
    cardNumber: "",
    cvv: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Giỏ hàng đang trống!");
      return;
    }

    const order = {
      ...form,
      items: cart,
      total: cart.reduce((sum, item) => sum + Number(item.price || 0), 0),
      createdAt: new Date().toISOString()
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    alert("Đặt hàng thành công!");
    navigate("/");
  };

  return (
    <section className="section-content padding-y">
      <div className="container" style={{ maxWidth: "720px" }}>
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-title mb-3">Thông tin vận chuyển</h4>

            <div className="form-row">
              <div className="form-group col-sm-6">
                <label className="js-check box active">
                  <input type="radio" name="delivery" value="giao hàng tiêu chuẩn" checked={form.delivery === "giao hàng tiêu chuẩn"} onChange={handleChange} />
                  <h6 className="title">Giao hàng tiêu chuẩn</h6>
                  <p className="text-muted">Miễn phí trong vòng 20 ngày</p>
                </label>
              </div>
              <div className="form-group col-sm-6">
                <label className="js-check box">
                  <input type="radio" name="delivery" value="chuyển phát nhanh" checked={form.delivery === "chuyển phát nhanh"} onChange={handleChange} />
                  <h6 className="title">Chuyển phát nhanh</h6>
                  <p className="text-muted">Thêm 20.000đ phí</p>
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="col form-group">
                <label>Tên</label>
                <input type="text" className="form-control" name="firstname" onChange={handleChange} />
              </div>
              <div className="col form-group">
                <label>Họ</label>
                <input type="text" className="form-control" name="lastname" onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="col form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} />
              </div>
              <div className="col form-group">
                <label>Điện thoại</label>
                <input type="text" className="form-control" name="phone" onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Quốc gia</label>
                <select className="form-control" name="country" value={form.country} onChange={handleChange}>
                  <option>Việt Nam</option>
                  <option>Russia</option>
                  <option>Tiếng Anh</option>
                  <option>India</option>
                  <option>Pháp</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Thành phố</label>
                <input type="text" className="form-control" name="city" onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Địa chỉ</label>
              <textarea className="form-control" rows="2" name="address" onChange={handleChange}></textarea>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-title mb-4">Chi trả</h4>
            <form style={{ maxWidth: "380px" }}>
              <div className="form-group">
                <label>Tên thẻ</label>
                <input type="text" className="form-control" name="cardName" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Số thẻ</label>
                <input type="text" className="form-control" name="cardNumber" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input className="form-control" name="cvv" onChange={handleChange} />
              </div>

              <button type="button" className="btn btn-primary btn-block" onClick={handleSubmit}>
                Xác nhận
              </button>
            </form>
          </div>
        </div>

        <br />
      </div>
    </section>
  );
};

export default SectionContent;
