import Footer from "components/Footer";
import Header from "components/Header";
import NotFoundPage from "components/NotFound";
import Category from "features/categories";
import Product from "features/products";
import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="container jio-app-container">
          <Switch>
            <Route path="/">
              <Category />
              <Product />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
