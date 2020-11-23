import categoryApi from "api/categoryApi";
import CategoryBanner from "features/categories/components/CategoryBaner";
import CategoryNav from "features/categories/components/CategoryNav";
import ProductList from "features/products/pages/ProductList";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import imgBanner from "../../../../assets/image/spinner-category-banner.gif";
import categories from "../../../../categories.config.json";
import "./style.css";

function SubCategory() {
  const match = useRouteMatch();
  const [category, setCategory] = useState(null);
  const [curentCategoryId, setCurentCategoryId] = useState(0);
  const [limited, setLimited] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      var listCategories;
      try {
        const response = await categoryApi.getAll({ limited: 1782 });
        listCategories = response.data.slice(1);
      } catch (e) {
        listCategories = categories.slice(1);
      }
      let categoryId = 0;
      const [first] = listCategories.filter((element) => {
        if (element.slug === match.params["categorySlug"]) {
          categoryId = element.categoryID;
          return true;
        } else {
          return (
            element.subcategories &&
            element.subcategories.filter((subElement) => {
              if (subElement.slug === match.params["categorySlug"]) {
                categoryId = subElement.categoryID;
                return true;
              }
              return false;
            }).length
          );
        }
      });
      setCategory({ ...first });
      setCurentCategoryId(categoryId);
    };
    fetchData();
  }, [match]);

  return (
    <div>
      <div>
        <CategoryBanner
          bannerUrl={
            category === null ? imgBanner : category.bannerURLs[0]["url"]
          }
          name={
            category === null ? match.params["categorySlug"] : category.name
          }
          changeLimited={(data) => setLimited(data)}
        />
      </div>
      <div className="row">
        <div className="col-md-3 jio-static-position">
          <CategoryNav
            subCategory={category === null ? [] : category.subcategories}
          />
        </div>

        <div className="col-md-9 jio-container">
          <ProductList categoryID={curentCategoryId} limited={limited} />
        </div>
      </div>
    </div>
  );
}
export default SubCategory;
