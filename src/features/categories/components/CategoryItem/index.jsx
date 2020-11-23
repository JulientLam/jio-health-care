import { PropTypes } from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";
import "./style.css";

CategoryItem.prototype = {
  category: PropTypes.object.isRequired,
};
CategoryItem.defaultProps = {
  category: null,
};

function CategoryItem(props) {
  const { category } = { ...props };
  const match = useRouteMatch();

  console.log(match.params + "-" + match.url);
  const categoryitemStyle = (url) => {
    return {
      backgroundImage: `url(${url})`,
      opacity: 1,
      transitionDelay: "0.1s",
    };
  };

  return (
    <div className=" col-md-4 col-sm-6 col-6">
      <div
        className=" jio-category jio-text-align"
        style={categoryitemStyle(category.imageUrl)}
      >
        <Link to={`category/${category.slug}`}> hide Link</Link>
        <i>{category["flug"]}</i>
        <div className="jio-category-overlay">
          <img
            alt={category.name}
            className="lazyloaded jio-categoryItem-icon"
            src={category.iconUrl}
          />
          <p className="text-center">{category.name}</p>
        </div>
      </div>
    </div>
  );
}
export default CategoryItem;
