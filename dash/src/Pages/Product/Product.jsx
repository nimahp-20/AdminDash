/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import Chart from "./../../Components/Chart/Chart";
import { productsData } from "../../datas";
import { products } from "../../datas";

import { useState } from "react";
import "./Product.css";

export default function Product() {
  let params = useParams();
  const [productData, setProductData] = useState(products);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            title="Sale in Month"
            data={productsData}
            dataKey="sale"
          ></Chart>
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="/images/index.jpeg" alt="" className="productInfoImg" />
            <span className="productName">Car</span>
          </div>
          <div className="productInfoButtom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">{params.productID}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name:</div>
              <div className="productInfoValue">
                {
                  productData.find(
                    (product) => product.id === +params.productID
                  ).title
                }
              </div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Price:</div>
              <div className="productInfoValue">
                {
                  productData.find(
                    (product) => product.id === +params.productID
                  ).price
                }
              </div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Status</div>
              <div className="productInfoValue">
                {
                  productData.find(
                    (product) => product.id === +params.productID
                  ).status
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productButtom">
        <div className="productFrom">
          <div className="productFormLeft">
            <label>Product Name</label>
          </div>
          <div className="productFormRight"></div>
        </div>
      </div>
    </div>
  );
}
