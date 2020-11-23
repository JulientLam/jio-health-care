import MainPage from "features/categories/pages/Main";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CartModal from "./components/CartModal";

function Cart() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/user/cart`} component={MainPage} />
    </Switch>
  );
}
export default Cart;
