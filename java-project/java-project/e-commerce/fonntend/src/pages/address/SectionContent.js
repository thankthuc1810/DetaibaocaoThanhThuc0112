import React, { useEffect, useState } from "react";

const SectionContent = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(stored);
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("addresses", JSON.stringify(data));
    setAddresses(data);
  };

  const addAddress = () => {
    if (!newAddress.trim()) return alert("Bạn chưa nhập địa chỉ");
    const newEntry = {
      id: Date.now(),
      text: newAddress.trim(),
      isDefault: addresses.length === 0, // địa chỉ đầu tiên là mặc định
    };
    const updated = [...addresses, newEntry];
    saveToStorage(updated);
    setNewAddress("");
    setShowForm(false);
  };

  const deleteAddress = (id) => {
    const updated = addresses.filter((addr) => addr.id !== id);
    saveToStorage(updated);
  };

  const setDefault = (id) => {
    const updated = addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === id,
    }));
    saveToStorage(updated);
  };

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <aside className="col-md-3">
            <nav className="list-group">
              <a className="list-group-item" href="#">Tổng quan về tài khoản</a>
              <a className="list-group-item active" href="#">Địa chỉ</a>
              <a className="list-group-item" href="#">Đơn hàng</a>
              <a className="list-group-item" href="#">Yêu thích</a>
              <a className="list-group-item" href="#">Cài đặt</a>
              <a className="list-group-item" href="#">Đăng xuất</a>
            </nav>
          </aside>
          <main className="col-md-9">
            <button onClick={() => setShowForm(!showForm)} className="btn btn-light mb-3">
              <i className="fa fa-plus"></i> Thêm địa chỉ mới
            </button>

            {showForm && (
              <div className="form-group mb-4">
                <input
                  className="form-control"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  placeholder="Nhập địa chỉ mới..."
                />
                <button className="btn btn-primary mt-2" onClick={addAddress}>
                  Lưu địa chỉ
                </button>
              </div>
            )}

            <div className="row">
              {addresses.map((addr) => (
                <div key={addr.id} className="col-md-6">
                  <article className="box mb-4">
                    <h6>{addr.text}</h6>
                    <button
                      className={`btn btn-light ${addr.isDefault ? "disabled" : ""}`}
                      onClick={() => setDefault(addr.id)}
                    >
                      {addr.isDefault ? <><i className="fa fa-check"></i> Mặc định</> : "Đặt làm mặc định"}
                    </button>{" "}
                    <button className="btn btn-light" onClick={() => deleteAddress(addr.id)}>
                      <i className="text-danger fa fa-trash"></i>
                    </button>
                  </article>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
