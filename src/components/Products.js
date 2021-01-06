import React, { useState } from "react";
import JsonData from "../data.json";
import "./css/Products.scss";
import TreeSeedling from "../assets/treeseedling1.jpg";
import MatureTree from '../assets/maturetree.jpg'
import Flowers from '../assets/flowers.jpg';
import Vegetables from '../assets/vegetables.jfif'
import Spices from '../assets/spices.jpg'
const Products = () => {
  const [product] = useState(JsonData.Products);

  return (
    <div className="products">
      <div className="container dispblock">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>

        <div className="row">
          <div className="col-md-4">
            {" "}
            <img src={TreeSeedling} ></img>
            <div className="service-desc">
              <h3>{product[0].name}</h3>
              <p>{product[0].text}</p>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <img src={MatureTree} ></img>
            <div className="service-desc">
              <h3>{product[1].name}</h3>
              <p>{product[1].text}</p>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <img src={Flowers} ></img>
            <div className="service-desc">
              <h3>{product[2].name}</h3>
              <p>{product[2].text}</p>
            </div>
          </div>
        </div>
        <div className="row" style ={{justifyContent: 'center' }}>
            <div className="col-md-4">
              {" "}
              <img src={Vegetables} ></img>
              <div className="service-desc">
                <h3>{product[3].name}</h3>
                <p>{product[3].text}</p>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <img src={Spices} ></img>
              <div className="service-desc">
                <h3>{product[4].name}</h3>
                <p>{product[4].text}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Products;
