import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./style.css";
CategoryNav.prototype = {
  subCategory: PropTypes.array,
};
CategoryNav.defaultProps = {
  subCategory: [],
};

function CategoryNav(props) {
  const subcategories = props.subCategory;
  return (
    <div className="jio-nav">
      <h5>Bộ lọc</h5>
      <h5>Danh Mục Con</h5>
      <ul className="nav jio-nav-flex-column">
        {subcategories.map((category, index) => {
          const path = `/category/${category.slug}`;
          return (
            <li className="nav-item" key={index}>
              <Link
                to={path}
                className="nav-link"
                data-id={category.categoryID}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CategoryNav;
