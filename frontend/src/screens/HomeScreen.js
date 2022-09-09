import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import data from "../data";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const HomeScreen = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setproducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Featured Products</h1>
          <div className="products">
            {products.map((product) => (
              <div key={product.slug} className="product text-center">
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <Link
                    to={`/product/${product.slug}`}
                    className="product__Title"
                  >
                    <p>{product.name}</p>
                  </Link>
                  <p className="product__price">
                    <strong>${product.price}</strong>
                  </p>
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeScreen;
