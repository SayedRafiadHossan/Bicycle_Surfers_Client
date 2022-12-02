import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const paymentHandler = (productId, token) => {
  const cardName = document.getElementById("card-name").value;
  const cardNumber = document.getElementById("card-number").value;

  const finalData = { cardName, cardNumber, productId };

  fetch(`https://best-sell-server.vercel.app/booking/${productId}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    // body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  axios
    .post("https://best-sell-server.vercel.app/payment", finalData)
    .then((res) => {
      if (res.data.insertedId) {
        toast.success("Payment Successful");
        window.location.reload();
      }
    });
};

const BuyerSide = () => {
  const { token } = useAuth();
  const [myOrders, setMyOrders] = useState();
  const [productId, setProductId] = useState();
  useEffect(() => {
    fetch("https://best-sell-server.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <h1 className="mt-10 text-3xl font-semibold text-center">My Orders</h1>
      <div className="grid lg:grid-cols-3 justify-between m-10 gap-10">
        {myOrders?.map((x) => (
          <div
            key={myOrders.indexOf(x)}
            className="max-w-lg p-4 shadow-md bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={x?.itemImage}
                  alt={x?.itemName}
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold dark:text-teal-400">
                  {x?.itemName}
                </h3>
                <h3 className="text-xl font-semibold dark:text-teal-400">
                  Price: {x?.itemOriginalPrice}
                </h3>
                <button
                  className={
                    x?.paid === false
                      ? "btn btn-sm"
                      : "btn btn-sm bg-success border-success"
                  }
                  onClick={() => {
                    if (x?.paid === false) {
                      setProductId(x?._id);
                      document.getElementById("card-info-modal").checked = true;
                    }
                  }}
                >
                  {x?.paid === false ? "Pay" : "Paid"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* modal */}

      <input type="checkbox" id="card-info-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <div className="mb-2">
            <input
              type="text"
              id="card-name"
              placeholder="Enter Your Name"
              className="input input-bordered w-full my-2"
            />
            <input
              type="text"
              id="card-number"
              placeholder="Enter Card Number"
              className="input input-bordered w-full my-2"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="btn btn-sm btn-error mr-3"
              onClick={() => {
                document.getElementById("card-info-modal").checked = false;
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-sm btn-info"
              onClick={() => {
                paymentHandler(productId, token);
                document.getElementById("card-info-modal").checked = false;
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerSide;
