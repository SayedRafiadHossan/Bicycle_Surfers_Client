import React from "react";
import { useParams } from "react-router-dom";
import BuyerSide from "./BuyerSide";
import SellerSide from "./SellerSide";

const Dashboard = () => {
  const page = useParams().page;
  console.log(page);
  return (
    <div>
      {/* <BuyerSide></BuyerSide> */}
      <SellerSide></SellerSide>
    </div>
  );
};

export default Dashboard;
