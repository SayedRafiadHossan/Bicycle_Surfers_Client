import React from "react";
import toast, { Toaster } from "react-hot-toast";

const paymentHandler = () => {
  const cardName = document.getElementById("card-name").value;
  const cardNumber = document.getElementById("card-number").value;
  toast.success("Payment Done");

  console.log(cardName, cardNumber);
};

const BuyerSide = () => {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <h1 className="mt-10 text-3xl font-semibold text-center">My Orders</h1>
      <div className="grid grid-cols-3 justify-between m-10">
        <div className="max-w-lg p-4 shadow-md bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src="https://i.ibb.co/njZ85xf/logo.png"
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold dark:text-teal-400">
                Road Cycle
              </h3>
              <h3 className="text-xl font-semibold dark:text-teal-400">
                Price: 1000
              </h3>
              <button
                className="btn btn-sm"
                onClick={() => {
                  document.getElementById("card-info-modal").checked = true;
                }}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
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
                paymentHandler();
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
