import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const bookCycle = (item) => {
  // axios.post("http://localhost:5000/booking", item).then((res) => {
  //   if (res.data.insertedId) {
  //     toast.success("Booked Successfully");
  //   }
  // });

  console.log(item);
};

const CategoriesCard = () => {
  const { user } = useAuth();
  const category = useParams().id;
  const [allItems, setAllItems] = useState([]);
  const [itemInfo, setItemInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => data.filter((x) => x?.category === category))
      .then((filteredData) => setAllItems(filteredData));
  }, [category]);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="grid grid-cols-3 justify-between m-10">
        {allItems?.map((x) => (
          <div
            key={x._id}
            className="max-w-lg p-4 shadow-md bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={x?.image}
                  alt={x?.itemName}
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="flex items-center text-xs">
                  <span>{x?.createDate}</span>
                </div>
                <div className="pb-2">
                  <h2>Seller Name: {x?.sellerName}</h2>
                  <h2>Location: {x?.location}</h2>
                </div>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">
                    Resale Price: {x?.resalePrice}
                  </div>
                  <div className="badge badge-outline">
                    Original Price: {x?.originalPrice}
                  </div>
                </div>
                <div className="card-actions justify-center">
                  <div className="badge badge-outline">
                    years of use: {x?.yearsOfUse}
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold dark:text-teal-400">
                  {x?.itemName}
                </h3>
                <button
                  className="btn btn-sm"
                  onClick={() => {
                    setItemInfo(x);
                    document.getElementById(
                      "booking-info-modal"
                    ).checked = true;
                  }}
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Modal */}
        <input
          type="checkbox"
          id="booking-info-modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Enter Name"
                className="input input-bordered w-full my-2"
                disabled
                defaultValue={user?.displayName ? user?.displayName : ""}
              />
              <input
                type="text"
                placeholder="Enter Email"
                className="input input-bordered w-full my-2"
                disabled
                defaultValue={user?.email ? user?.email : ""}
              />
              <input
                type="text"
                placeholder="Item Name"
                className="input input-bordered w-full my-2"
                disabled
                defaultValue={itemInfo?.itemName ? itemInfo?.itemName : ""}
              />
              <input
                type="text"
                placeholder="Item Price"
                className="input input-bordered w-full my-2"
                disabled
                defaultValue={
                  itemInfo?.resalePrice ? itemInfo?.resalePrice : ""
                }
              />
              <input
                type="text"
                id="meeting-location"
                placeholder="Enter Meeting Location"
                className="input input-bordered w-full my-2"
              />
              <input
                type="text"
                id="phone-no"
                placeholder="Enter Phone No."
                className="input input-bordered w-full my-2"
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                className="btn btn-sm btn-error mr-3"
                onClick={() => {
                  document.getElementById("booking-info-modal").checked = false;
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm btn-info"
                onClick={() => {
                  bookCycle({
                    meetingLocation:
                      document.getElementById("meeting-location").value,
                    phoneNo: document.getElementById("phone-no").value,
                    paid: false,
                    ...itemInfo,
                  });
                  document.getElementById("booking-info-modal").checked = false;
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
