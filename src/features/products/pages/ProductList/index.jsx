import productApi from "api/productApi";
import ProductItem from "features/products/components/ProductItem";
import ProductPaging from "features/products/components/ProductPaging";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

ProductList.prototype = {
  limited: PropTypes.number,
  categoryID: PropTypes.number.isRequired,
};
ProductList.defaultProps = {
  limited: 12,
};
function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const { categoryID, limited } = props;

  useEffect(() => {
    setOffset(0);
  }, [categoryID]);

  useEffect(() => {
    async function fetchData() {
      const response = await productApi.getProductByCategory({
        offset: offset,
        limit: limited,
        categories: categoryID,
      });
      setProducts(response.data.products);
      setTotal(response.data.totalRecords);
    }
    fetchData();
  }, [categoryID, offset, limited]);

  const changeOffset = (newData) => {
    setOffset(newData);
  };

  return (
    <div className="row">
      <div className="row">
        {products.map((product, index) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-6 jio-static-position "
            style={{ marginBottom: "10px" }}
            key={index}
          >
            <ProductItem product={product} />
          </div>
        ))}
      </div>
      <div className="w-100"></div>
      <div style={{ margin: "auto" }}>
        <ProductPaging
          changeOffset={changeOffset}
          total={total}
          limited={limited}
          offset={offset}
        />
      </div>
    </div>
  );
}
export default ProductList;
