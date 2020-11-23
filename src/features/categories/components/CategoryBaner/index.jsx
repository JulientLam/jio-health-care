import { PropTypes } from "prop-types";
import "./style.css";
CategoryBanner.prototype = {
  bannerUrl: PropTypes.string,
};
CategoryBanner.defaultProps = {
  bannerUrl: null,
};

function CategoryBanner(props) {
  const { bannerUrl, name } = { ...props };
  const limitSize = [12, 20, 30, 40, 50];
  const changeLimited = props.changeLimited;
  const onChange = (event) => {
    const data = limitSize[parseInt(event.target.value)];
    changeLimited(data);
  };

  return (
    <div>
      <div className="row jio-banner">
        <img
          alt="banner"
          className=" lazyloaded jio-img-banner"
          src={`${bannerUrl}`}
        />
      </div>
      <div className="row d-flex justify-content-between">
        <h1 className="jio-lable-category">{name}</h1>

        <div
          className="float-right d-inline-flex"
          style={{ marginRight: "31px", fload: "right" }}
        >
          <h6 style={{ marginTop: "8px", marginRight: "4px" }}>
            Số sản phẩm 1 trang
          </h6>
          <label className="m-0">
            <select
              className="form-control"
              style={{ width: "auto", padding: 0 }}
              onChange={onChange}
            >
              {limitSize.map((element, index) => (
                <option value={index} key={index}>
                  {element}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
export default CategoryBanner;
