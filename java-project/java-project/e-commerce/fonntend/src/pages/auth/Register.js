import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import './register.css'; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Đăng ký thành công!");
    // Save user data or send API request to register the user
  };

  const handleSendVerificationCode = () => {
    // Logic to send verification code (for demo purposes, we just simulate it)
    const randomCode = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit code
    alert(`Mã xác nhận của bạn là: ${randomCode}`);
    setIsCodeSent(true);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="text-center mb-4">Đăng ký</h3>
              <Form onSubmit={handleRegister}>
                {/* Tên người dùng */}
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Tên người dùng</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên người dùng"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Tài khoản */}
                <Form.Group className="mb-3" controlId="formAccount">
                  <Form.Label>Tài khoản</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tài khoản"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Mật khẩu */}
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Gmail */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Số điện thoại */}
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Gửi mã xác nhận */}
                {!isCodeSent && (
                  <Button
                    variant="primary"
                    className="d-block w-100 mb-3"
                    onClick={handleSendVerificationCode}
                  >
                    Gửi mã xác nhận
                  </Button>
                )}

                {/* Xác nhận mã */}
                {isCodeSent && (
                  <Form.Group className="mb-3" controlId="formVerificationCode">
                    <Form.Label>Mã xác nhận</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập mã xác nhận"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      required
                    />
                  </Form.Group>
                )}

                <div className="d-grid">
                  <Button variant="dark" type="submit">
                    Đăng ký
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
