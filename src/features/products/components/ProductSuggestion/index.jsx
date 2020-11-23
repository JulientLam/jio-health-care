import productApi from "api/productApi";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import ProductItem from "../ProductItem";
import "./style.css";

export default function ProductSuggestion(props) {
  const [sugestedProducts, setSugestedProducts] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [productTotal, setProductTotal] = useState(0);
  const match = useRouteMatch();
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        productVarietyID: parseInt(
          match.params["productSlug"].split("_").slice(-1)
        ),
        limit: 12,
        offset: 0,
      };
      const response = await productApi.getProductsSuggestion(params);
      setSugestedProducts(response.data["products"]);
      setProductTotal(response.data["totalRecords"]);
    };
    fetchData();
  }, [match]);
  return sugestedProducts.leght === 0 ? (
    <div></div>
  ) : (
    <div className="container jio-product-suggest">
      <div className="row">
        <h5 className="jio-title-suggested-product">SẢN PHẨM NÊN MUA CÙNG</h5>
      </div>

      <div className="carousel slide">
        <div className="d-flex justify-content-between">
          {sugestedProducts.map((product, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-4 col-sm-6 col-6 carousel-item jio-carousel-item ${
                index >= currentPosition && index <= currentPosition + 3
                  ? "active"
                  : ""
              }`}
            >
              <ProductItem product={product} />
            </div>
          ))}
        </div>

        <div className="jio-carousel-control-nav">
          <div>
            <button
              type="button"
              role="presentation"
              className="carousel-control-prev"
              style={{
                pointerEvents: currentPosition - 1 < 0 ? "none" : "auto",
              }}
              onClick={() => {
                let position = currentPosition;
                setCurrentPosition(--position);
              }}
            >
              <img
                alt="Previous"
                className="carousel-control-prev-icon"
                src="https://pharmacy.jiohealth.com/assets/icons/prev-round.svg"
              />
            </button>
          </div>
          <button
            type="button"
            role="presentation"
            className="carousel-control-next"
            style={{
              pointerEvents:
                currentPosition + 4 >= productTotal ? "none" : "auto",
            }}
            onClick={() => {
              let position = currentPosition;
              setCurrentPosition(++position);
            }}
          >
            <img
              alt="Next"
              className="carousel-control-next-icon"
              src="https://pharmacy.jiohealth.com/assets/icons/next-round.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
