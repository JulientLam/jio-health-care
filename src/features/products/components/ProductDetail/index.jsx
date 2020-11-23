import productApi from "api/productApi";
import LoadingPage from "components/Loading";
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { useLocation, useRouteMatch } from "react-router-dom";
import "./style.css";

function ProductDetail(props) {
  const match = useRouteMatch();
  const [disablePlus, setDisablePlus] = useState(true);
  const [disableMiss, setDisableMiss] = useState(true);
  const [amount, setAmount] = useState(1);
  const [productDetail, setProductDetail] = useState(null);
  const dispatch = useDispatch();
  const historyNumber = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const productId = parseInt(
        match.params["productSlug"].split("_").slice(-1)
      );
      const response = await productApi.getProductById(productId);
      const [product] = response.data.product_varieties.filter(
        (el) => el["ePProductVarietyID"] == productId
      );
      setProductDetail({ ...product });
      setAmount(historyNumber["total"] ? historyNumber["total"] : 1);
    };
    fetchData();
  }, [match.params]);

  const plusOne = () => {
    const currentAmount = amount;
    if (currentAmount >= 100) {
      const disable = disablePlus;
      setDisablePlus(!disable);
      return;
    }
    setAmount(currentAmount + 1);
  };

  const missOne = () => {
    const currentAmount = amount;
    if (currentAmount <= 1) {
      const disable = disableMiss;
      setDisableMiss(!disable);
      return;
    }
    setAmount(currentAmount - 1);
  };

  const changeNumber = (event) => {
    const input = parseInt(event.target.value);
    setAmount(input);
  };

  const addToCart = () => {
    console.log("click");
    dispatch({
      type: "ADD_ITEM",
      payload: { data: productDetail, number: amount },
    });
  };

  return productDetail === null ? (
    <LoadingPage />
  ) : (
    <div>
      <div className="container jio-product-detail-container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="img-zoom-container"
              style={{ position: "relative" }}
            >
              <div
                className="img-zoom-lens "
                style={{
                  paddingTop: "30px",
                }}
              ></div>
              <img
                className="cursor-crosshair jio-image"
                alt="backgroud of product"
                src={
                  productDetail["images"] &&
                  productDetail["images"].length !== 0
                    ? productDetail.images[0].images[0].url
                    : "#"
                }
              />
            </div>
          </div>
          <div className="col-md-6 ">
            <div
              className="row product-info mg-bottom-1rem"
              style={{ paddingTop: "30px" }}
            >
              <div className="col-sm-12">
                <h1 className="mg-bottom-0 jio-product-name">
                  {productDetail["title"]}
                </h1>

                <p className="text-grey mg-bottom-0" style={{ float: "left" }}>
                  Thương hiệu:
                  <button className="btn btn-link">
                    {productDetail["brand"]}
                  </button>
                  | Sản xuất tại:
                  {productDetail["madeIn"]}
                </p>
              </div>

              <div className="col-sm-12">
                <h2 style={{ textAlign: "left" }}>
                  <NumberFormat
                    value={productDetail["afterTaxPrice"]}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix=" đ"
                  />
                </h2>
              </div>

              <div className="col-sm-12 product-package">
                <button
                  type="button"
                  className="btn btn-info package-space h5 active"
                  style={{ float: "left" }}
                >
                  {productDetail["packaging"]}
                </button>
              </div>

              <div className=" col-sm-12 product-space distance-sm ">
                <div className="row">
                  <div className="col-sm-5">
                    <span className="qty" style={{ marginRight: "3px" }}>
                      Số lượng
                    </span>
                    <button
                      type="button"
                      className={`btn btn-light ${
                        disableMiss ? "disabled" : ""
                      }`}
                      onClick={missOne}
                    >
                      <h5>-</h5>
                    </button>
                    <input
                      type="number"
                      name="qty-products"
                      max="100"
                      maxLength="3"
                      min="1"
                      placeholder="1"
                      style={{ width: "3em" }}
                      value={amount}
                      onChange={changeNumber}
                    />
                    <button
                      type="button"
                      className={`btn btn-light ${
                        disablePlus ? "disabled" : ""
                      }`}
                      onClick={plusOne}
                    >
                      <h5>+</h5>
                    </button>
                  </div>
                  <div className="col-sm-5">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={addToCart}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container jio-view-direction">
        <div id="accordion">
          <div className="card jio-card">
            <div className="card-header jio-card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="fas fa-plus-circle"></i>
                  MÔ TẢ SẢN PHẨM
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div
                className="card-body"
                dangerouslySetInnerHTML={{
                  __html: productDetail["description"],
                }}
              ></div>
            </div>
          </div>
          <div className="card jio-card">
            <div className="card-header jio-card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  THÀNH PHẦN
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div
                className="card-body"
                dangerouslySetInnerHTML={{
                  __html: productDetail["ingredients"],
                }}
              ></div>
            </div>
          </div>
          <div className="card jio-card">
            <div className="card-header jio-card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  HƯỚNG DẪN SỬ DỤNG
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div
                className="card-body"
                dangerouslySetInnerHTML={{
                  __html: productDetail["directions"],
                }}
              ></div>
            </div>
          </div>
          <div className="card jio-card">
            <div className="card-header jio-card-header" id="headingFour">
              <h5 className="mb-0">
                <button
                  className="btn collapsed"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  BẢO QUẢN, CẨN TRỌNG
                </button>
              </h5>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordion"
            >
              <div
                className="card-body"
                dangerouslySetInnerHTML={{
                  __html: productDetail["drugFacts"],
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
