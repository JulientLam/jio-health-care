import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/Main";

function Product() {
  const match = useRouteMatch();
  return <Route strict path={`/:productSlug`} component={MainPage} />;
}

export default Product;
