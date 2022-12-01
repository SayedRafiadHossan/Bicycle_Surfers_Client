import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import BuyerSide from "./BuyerSide";
import SellerSide from "./SellerSide";

const Dashboard = () => {
  const page = useParams().page;

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
