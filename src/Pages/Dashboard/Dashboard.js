import React from "react";
import { useParams } from "react-router-dom";
import AdminPart from "./AdminPart";
import BuyerSide from "./BuyerSide";
import SellerSide from "./SellerSide";

const Dashboard = () => {
  const page = useParams().page;

  return (
    <div>
      {page === "all-buyers" ||
      page === "all-sellers" ||
      page === "reported-items" ? (
        <AdminPart></AdminPart>
      ) : page === "my-orders" ? (
        <BuyerSide></BuyerSide>
      ) : page === "my-products" || page === "add-product" ? (
        <SellerSide></SellerSide>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
