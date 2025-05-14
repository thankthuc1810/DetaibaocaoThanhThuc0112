import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SectionContent() {
  const productsPerPage = 4;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="hTitle">Sản phẩm</h2>
        </div>

        <Row md={6} className="g-4 mt-1">
          {displayedProducts.map((sv, index) => (
            <Col key={index}>
              <Link to={`/product/${index}`}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={sv.thumbnail}
                    style={{ height: "176px", width: "176px", objectFit: "cover" }}
                    alt="Product"
                  />
                  <Card.Body>
                    <Card.Title>{sv.title}</Card.Title>
                    <Card.Text>{sv.description}</Card.Text>
                    <Card.Text>
                      <b>Giá:</b> {Number(sv.price).toLocaleString()} VND
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>

      <div className="text-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SectionContent;
