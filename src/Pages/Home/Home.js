import React from "react";
import Categories from "../Categories/Categories";
import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import ExtraService from "./ExtraService/ExtraService";

const Home = () => {
  return (
    <section>
      <Banner></Banner>
      <Categories></Categories>
      <Advertisement></Advertisement>
      <ExtraService></ExtraService>
    </section>
  );
};

export default Home;
