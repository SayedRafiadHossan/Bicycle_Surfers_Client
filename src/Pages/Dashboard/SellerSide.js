import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const productHandler = (user) => {
  const itemName = document.getElementById("item-name").value;
  const itemRetailPrice = document.getElementById("item-resell-price").value;
  const itemOriginalPrice = document.getElementById(
    "item-original-price"
  ).value;
  const itemYearsUsed = document.getElementById("item-years-used").value;
  const itemLocation = document.getElementById("item-Location").value;
  const itemImage = document.getElementById("item-image").value;
  const itemCategory =
    document.getElementById("item-category").value === "Road Bikes"
      ? "road-bikes"
      : document.getElementById("item-category").value === "Mountain Bikes"
      ? "mountain-bikes"
      : "electric-bikes";
  const itemDate = new Date().getTime();
  const itemSeller = user?.displayName;

  console.log(
    itemName,
    itemRetailPrice,
    itemOriginalPrice,
    itemYearsUsed,
    itemLocation,
    itemImage,
    itemCategory,
    itemLocation,
    itemDate,
    itemSeller
  );
};

const SellerSide = () => {
  const { user } = useAuth();
  const [page, setPage] = useState("add-products");
  return (
    <div>
      <div className="flex items-center justify-end gap-3 mt-10 px-5">
        <button
          className="btn btn-sm"
          onClick={() => {
            setPage("add-products");
          }}
        >
          Add Product
        </button>
        <button
          className="btn btn-sm"
          onClick={() => {
            setPage("my-products");
          }}
        >
          My Products
        </button>
      </div>

      {page === "add-products" ? (
        <div className="m-10">
          <h1 className="mt-10 text-3xl font-semibold text-center">
            Add Products
          </h1>
          <div className="w-1/2 mx-auto mt-10">
            <input
              type="text"
              id="item-name"
              placeholder="Enter Item Name"
              className="input input-bordered w-full my-2"
            />
            <input
              type="text"
              id="item-resell-price"
              placeholder="Enter Resell Price"
              className="input input-bordered w-full my-2"
            />
            <input
              type="text"
              id="item-original-price"
              placeholder="Enter Original Price"
              className="input input-bordered w-full my-2"
            />
            <input
              type="text"
              id="item-years-used"
              placeholder="Enter Used Years"
              className="input input-bordered w-full my-2"
            />
            <input
              type="text"
              id="item-Location"
              placeholder="Enter Item Location"
              className="input input-bordered w-full my-2"
            />
            <input
              type="text"
              id="item-image"
              placeholder="Enter Item Image Link"
              className="input input-bordered w-full my-2"
            />
            <select
              className="select select-bordered w-full my-2"
              id="item-category"
            >
              <option>Road Bikes</option>
              <option>Mountain Bikes</option>
              <option>Electric Bikes</option>
            </select>
            <div className="flex items-center justify-center mt-2">
              <button
                type="submit"
                className="btn btn-sm"
                onClick={() => {
                  productHandler(user);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-10">
          <h1 className="mt-10 text-3xl font-semibold text-center">
            My Products
          </h1>
          <div className="grid grid-cols-3 justify-between mt-10">
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
        </div>
      )}
    </div>
  );
};

export default SellerSide;
