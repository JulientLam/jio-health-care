import { getCategoryApi } from "actions/actionCreator";
import LoadingPage from "components/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../CategoryItem";
function CategoryList() {
  const categories = useSelector((state) => state.categories.list);
  const dispatch = useDispatch();
  console.log("CATEGORY: " + JSON.stringify(categories));
  useEffect(() => {
    const getData = async () => {
      dispatch(await getCategoryApi());
    };
    getData();
  }, []);

  return (
    <div className="row ">
      <LoadingPage isOpen={!categories.length} />
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          category={{
            name: category["name"],
            imageUrl: category.bgURLs[0].url,
            iconUrl: category.iconURLs[0].url,
            slug: category["slug"],
          }}
        />
      ))}
    </div>
  );
}
export default CategoryList;
