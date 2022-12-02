import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const handleProductDelete = (id) => {
  const url = `https://best-sell-server.vercel.app/allProducts/${id}`;
  fetch(url, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      const confirm = window.confirm("Do you Want to Delete?");
      if (confirm) {
        if (data.deletedCount > 0) {
          toast.success("Product Deleted");
          window.location.reload();
        }
      }
    });
};

const advertise = (item) => {
  delete item?._id;
  axios
    .post("https://best-sell-server.vercel.app/advertise", item)
    .then((res) => {
      if (res.data.insertedId) {
        toast.success("advertised Published");
      }
    });
};

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

  const data = {
    itemName,
    itemRetailPrice,
    itemOriginalPrice,
    itemYearsUsed,
    itemLocation,
    itemImage,
    itemCategory,
    itemDate,
    itemSeller,
  };

  axios
    .post("https://best-sell-server.vercel.app/addProduct", data)
    .then((res) => {
      if (res.status === 200) {
        document.getElementById("item-name").value = "";
        document.getElementById("item-resell-price").value = "";
        document.getElementById("item-original-price").value = "";
        document.getElementById("item-years-used").value = "";
        document.getElementById("item-Location").value = "";
        document.getElementById("item-image").value = "";
        toast.success("Added Successfully");
      }
    });
};

const SellerSide = ({ data }) => {
  const { user } = useAuth();
  const pageParam = useParams().page;
  const [myProducts, setMyProducts] = useState();
  useEffect(() => {
    fetch("https://best-sell-server.vercel.app/allProducts")
      .then((res) => res.json())
      .then((data) => data?.filter((x) => x.sellerName === user?.displayName))
      .then((filteredData) => setMyProducts(filteredData));
  }, []);
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div className="flex items-center justify-end gap-3 mt-10 px-5">
        <Link to="/dashboard/add-product" className="btn btn-sm">
          Add Product
        </Link>
        <button
          onClick={() => {
            window.location.href = "/dashboard/my-products";
          }}
          className="btn btn-sm"
        >
          My Products
        </button>
      </div>

      {pageParam === "add-product" ? (
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
      ) : pageParam === "my-products" ? (
        <div className="m-10">
          <h1 className="mt-10 text-3xl font-semibold text-center">
            My Products
          </h1>
          <div className="grid grid-cols-3 justify-between mt-10 gap-10">
            {myProducts?.map((x) => (
              <div
                key={myProducts.indexOf(x)}
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
                      className="btn btn-sm"
                      onClick={() => {
                        handleProductDelete(x?._id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-sm"
                      onClick={() => {
                        advertise(x);
                      }}
                    >
                      advertise
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SellerSide;
