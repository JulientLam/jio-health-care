import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import "./style.css";
const { Link } = require("react-router-dom");

function buildFlug(srt) {
  return srt
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .replaceAll(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .replaceAll(/đ/g, "d")
    .replaceAll(/Đ/g, "D")
    .trim()
    .replaceAll(" ", "_");
}

function ProductItem(props) {
  const product = props.product;
  const dispatch = useDispatch();
  const imageStyle = (imgUrl) => ({
    backgroundImage: `url(${imgUrl})`,
  });

  const addToCart = () => {
    console.log("click");
    dispatch({ type: "ADD_ITEM", payload: { data: product } });
  };
  return (
    <div className="card jio-productitem animated fadeIn ">
      <Link
        to={{
          pathname: `/${buildFlug(product["title"])}_${
            product["ePProductVarietyID"]
          }`,
          state: {
            numberProduct: 1,
          },
        }}
        style={{ marginBottom: "auto" }}
      >
        <div
          className="card-img lazyloaded jio-productitem-image"
          style={imageStyle(product.images[0].images[0]["url"])}
        ></div>
        <div className="card-body">
          <div className="title-wrapper">
            <h6 className="jio-card-title" style={{ textAlign: "left" }}>
              {product["title"].length <= 50
                ? product["title"]
                : product["title"].substring(0, 50) + "..."}
            </h6>
            <p className="jio-text-grey jioline-clamp">
              {product["packaging"]}
            </p>
          </div>
          <div className="d-grid">
            <div className="price-wrapper">
              <h4 className="new-price mt-0 mb-0">
                <NumberFormat
                  value={product["afterTaxPrice"]}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix=" đ"
                />
              </h4>
            </div>
          </div>
        </div>
      </Link>
      <button
        className="btn btn-primary btn-primary-border btn-block"
        data-selectedproductid={product["ePProductVarietyID"]}
        onClick={addToCart}
      >
        Thêm Vào Giỏ Hàng
      </button>
    </div>
  );
}

export default ProductItem;
