import PharmHeader from "components/Header/Components/Pharm-Header";
import "./style.css";

function MainPage() {
  return (
    <>
      <div className="d-none d-lg-block d-md-block jio-header-top ">
        <div className="jio-nav-margin">
          <span className="jio-font-bold" tabIndex="0">
            <a href="/">Đăng Nhập</a>
          </span>
          <span className="jio-text-grey">hoặc</span>
          <span className="jio-font-bold" tabIndex="0">
            <a href="/">Tạo tài khoản</a>
          </span>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <div className="d-flex justify-content-start jio-header-top-nav">
          <div className="d-flex align-items-end jio-header-top-logo">
            {/* <img
              alt="logo"
              src="https://pharmacy.jiohealth.com/assets/images/navJioLogo@3x.png"
            /> */}
            <h4>Jio Health - Chúng Tôi Sinh Ra Vì Bạn</h4>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link " href="/">
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Nhà Thuốc
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Các Dịch Vụ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Giới Thiệu
              </a>
            </li>
          </ul>
        </div>

        <div
          style={{
            display: "block",
            backgroundColor: "#567fea",
            height: "20px",
          }}
        ></div>
      </div>

      <div className="d-none d-lg-block d-md-block jio-header-sticky">
        <PharmHeader />
      </div>
    </>
  );
}

export default MainPage;
