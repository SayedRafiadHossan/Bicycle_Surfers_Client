import React from "react";
import { useParams } from "react-router-dom";
import BuyerSide from "./BuyerSide";
import SellerSide from "./SellerSide";

const Dashboard = () => {
  const page = useParams().page;
  // const data = useLoaderData();

  return (
    <div>
      {page === "admin" ? (
        <BuyerSide></BuyerSide>
      ) : page === "my-orders" ? (
        <BuyerSide></BuyerSide>
      ) : (
        <SellerSide></SellerSide>
      )}
    </div>
  );
};

export default Dashboard;
