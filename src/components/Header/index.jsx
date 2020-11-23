import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./Page/Main";

function Header() {
  const match = useRouteMatch();
  console.log("URL: " + match.url);
  return (
    <Switch>
      <Route path={match.url} component={MainPage} />
    </Switch>
  );
}

export default Header;
