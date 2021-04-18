import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Header from "../containers/header/Header";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Busket from "../containers/basket/Basket";
import ProductDetails from "../containers/productDetails/ProductDetails";
import Auth from "../containers/auth/Auth";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:productId" component={ProductDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/basket" component={Busket} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
