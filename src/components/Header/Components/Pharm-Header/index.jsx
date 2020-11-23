import Search from "components/Search";
import CartModal from "features/cart/components/CartModal";
import { useState } from "react";
import "./style.css";
import useTotalCartItem from "./useTotalItem";
function PharmHeader() {
  const total = useTotalCartItem();
  const [isOpen, setIsOpen] = useState(false);
  const controlModal = () => {
    const open = isOpen;
    setIsOpen(!open);
  };

  return (
    <ul className="nav jio-header-nav">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          <img
            alt="logo-jio"
            width="109px"
            src="https://pharmacy.jiohealth.com/assets/images/icon_logo-white.png"
          />
        </a>
      </li>
      <li className="nav-item jio-search">
        <Search />
      </li>
      <li className="d-sm-none d-md-none d-lg-block nav-item">
        <button className="btn btn-light jio-btn-prescription" type="button">
          <img
            alt="icon-prescription"
            width="20px!important"
            src="https://pharmacy.jiohealth.com/assets/icons/web-prescription-icon@3x.png"
          />
          Tạo Đơn Thuốc
        </button>
      </li>
      <li className="d-sm-none d-lg-block d-md-block  nav-item">
        <button
          className="btn btn-light jio-btn-cart"
          type="button"
          onClick={controlModal}
        >
          <img
            alt=""
            src="https://pharmacy.jiohealth.com/assets/icons/web-cart-icon@3x.png"
            width="24px!important;"
          />
          Giỏ Hàng
          <span className="badge badge-danger">{total === 0 ? "" : total}</span>
        </button>
      </li>
      <CartModal isOpen={isOpen} controlModal={controlModal} />
    </ul>
  );
}

export default PharmHeader;
