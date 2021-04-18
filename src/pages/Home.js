import React from "react";

import Slide from "../containers/slideSection/Slide";
import Brands from "../containers/brands/Brands";
import Product from "../containers/product/Product";
import Collection from "../containers/collection/Collection";
import PopularProduct from "../containers/popularProduct/PopularProduct";
import NewCollection from "../containers/newCollection/NewCollection";

const Home = () => {
  return (
    <>
      <Slide />
      <Brands />
      <Product />
      <Collection />
      <PopularProduct />
      <NewCollection />
    </>
  );
};
export default Home;
