import CategoryList from "features/categories/components/CategoryList";
import "./style.css";
function MainPage() {
  return (
    <div>
      <h1 className="jio-lable-content">
        Nhà thuốc trực tuyến thân thiện cho cả gia đình
      </h1>
      <p className="jio-baner-text">
        Mọi nhu cầu chăm sóc sức khoẻ của gia đình bạn sẽ được đáp ứng nhanh
        chóng, tận tâm, và hoàn toàn trực tuyến.
      </p>
      <CategoryList />
    </div>
  );
}

export default MainPage;
