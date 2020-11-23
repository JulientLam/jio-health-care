import { useState } from "react";
import "./style.css";
function Search() {
  const catagoryNames = [
    "Tất cả",
    "Thực phẩm chức năng",
    "Chăm sóc cá nhân",
    "Tủ thuốc gia đình",
    "Chăm sóc sắc đẹp",
    "Sức khỏe giới tính",
    "Dụng cụ y tế",
  ];

  const [dataSearch, setDataSearch] = useState("");
  const [tag, setTag] = useState("All");
  const changeInputSearch = (event) => {
    const dataSearch = event.target.value;
    setDataSearch(dataSearch);
  };

  const changeTagSeach = (event) => {
    const data = event.currentTarget.dataset["tag"];
    setTag(data);
  };

  return (
    <div className="wrapper-input input-group">
      <div className="input-group-prepend jio-element-search">
        <button
          aria-expanded="false"
          aria-haspopup="true"
          className="btn dropdown-toggle"
          data-toggle="dropdown"
          type="button"
        >
          {tag}
        </button>

        <div className="dropdown-menu">
          {catagoryNames.map((name, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              className="dropdown-item"
              href="#"
              onClick={changeTagSeach}
              data-tag={name}
              key={index}
            >
              {name}
            </a>
          ))}
        </div>
        <input
          autoComplete="off"
          className="form-control mr-sm-2"
          id="search-navbar"
          max="100"
          maxLength="100"
          name="search"
          placeholder="Tìm kiếm tên, nhãn hiệu, loại thuốc"
          value={dataSearch}
          onChange={changeInputSearch}
        />
        <img
          id="jio-search"
          alt=""
          src="https://pharmacy.jiohealth.com/assets/icons/search-icon@3x.png"
          width="22"
        ></img>
      </div>
    </div>
  );
}
export default Search;
