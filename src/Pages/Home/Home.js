import React from "react";
import Categories from "../Categories/Categories";
import Banner from "./Banner/Banner";
import ExtraService from "./ExtraService/ExtraService";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <Categories></Categories>
      <ExtraService></ExtraService>
    </section>
  );
};

export default Home;
