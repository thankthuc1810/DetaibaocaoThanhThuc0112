import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const discount = Math.round(total * 0.1); // giả định giảm giá 10%
  const finalTotal = total - discount;

  const handleCheckout = () => {
    alert("Đi đến trang thanh toán!");
    navigate("/checkout");
  };

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <main className="col-md-9">
            <div className="card">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th>Sản phẩm</th>
                    <th width="120">Số lượng</th>
                    <th width="120">Giá tiền</th>
                    <th width="200" className="text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <figure className="itemside">
                          <div className="aside">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="img-sm"
                              style={{ width: "80px", height: "80px", objectFit: "cover" }}
                            />
                          </div>
                          <figcaption className="info">
                            <p className="title text-dark">{item.title}</p>
                            <p className="text-muted small">{item.description}</p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select className="form-control" defaultValue="1">
                          {[1, 2, 3, 4].map((n) => (
                            <option key={n}>{n}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <div className="price-wrap">
                          <var className="price">{Number(item.price).toLocaleString()} VNĐ</var>
                        </div>
                      </td>
                      <td className="text-right">
                        <button className="btn btn-light" onClick={() => alert("Thêm vào yêu thích")}>
                          <i className="fa fa-heart"></i>
                        </button>{" "}
                        <button className="btn btn-light">Đặt hàng</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="card-body border-top">
                <button onClick={handleCheckout} className="btn btn-primary float-md-right">
                  Đặt hàng ngay... <i className="fa fa-chevron-right"></i>
                </button>
                <a href="/" className="btn btn-light">
                  <i className="fa fa-chevron-left"></i> Mua thêm
                </a>
              </div>
            </div>

            <div className="alert alert-success mt-3">
              <p className="icontext">
                <i className="icon text-success fa fa-truck"></i> Thời gian giao hàng 1-2 ngày
              </p>
            </div>
          </main>

          <aside className="col-md-3">
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Phiếu giảm giá</label>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Thẻ ATM" />
                      <span className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          Áp dụng
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <dl className="dlist-align">
                  <dt>Tổng giá:</dt>
                  <dd className="text-right">{total.toLocaleString()} VNĐ</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Giảm giá:</dt>
                  <dd className="text-right">{discount.toLocaleString()} VNĐ</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Tổng cộng:</dt>
                  <dd className="text-right h5">
                    <strong>{finalTotal.toLocaleString()} VNĐ</strong>
                  </dd>
                </dl>
                <hr />
                <p className="text-center mb-3">
                  <img src={require("../../assets/images/misc/payments.png")} alt="" height="26" />
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContentCart;
