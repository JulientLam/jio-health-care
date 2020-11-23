import ProductDetail from "features/products/components/ProductDetail";
import ProductSuggestion from "features/products/components/ProductSuggestion";
import "./style.css";

function MainPage() {
  console.log("main");
  return (
    <div>
      <div className="row">
        <ProductDetail />
      </div>
      <div className="row jio-product-suggest">
        <ProductSuggestion />
      </div>
    </div>
  );
}
export default MainPage;
