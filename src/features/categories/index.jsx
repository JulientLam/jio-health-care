import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/Main";
import SubCategory from "./pages/SubCategory";

function Category() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      <Route exact path={`/category/:categorySlug`} component={SubCategory} />
    </Switch>
  );
}

export default Category;
