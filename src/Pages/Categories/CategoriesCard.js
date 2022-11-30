import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

// {
//   itemName: "Khankir Cycle",
//   location: "Dhaka,Bangladesh",
//   resalePrice: 1000,
//   originalPrice: 800,
//   yearsOfUse: 5,
//   createDate: "30/12/2022",
//   sellerName: "Khagani Khanki",
// }

const CategoriesCard = () => {
  const { user } = useContext(AuthContext);
  const category = useParams().id;
  const [itemInfo, setItemInfo] = useState({});
  console.log(user);
  return (
    <div className="grid grid-cols-3 justify-between m-10">
      <div className="max-w-lg p-4 shadow-md bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://i.ibb.co/njZ85xf/logo.png"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
            <div className="pb-2">
              <h2>Seller Name: Khagani Khanki</h2>
              <h2>Location: Dhaka,Bangladesh</h2>
            </div>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Resale Price: 100</div>
              <div className="badge badge-outline">Original Price: 10</div>
            </div>
            <div className="card-actions justify-center">
              <div className="badge badge-outline">years of use: 20</div>
            </div>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold dark:text-teal-400">
              Khankir Cycle
            </h3>
            <button
              className="btn btn-sm"
              onClick={() => {
                document.getElementById("booking-info-modal").checked = true;
              }}
            >
              Book now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <input type="checkbox" id="booking-info-modal" className="modal-toggle" />
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
              defaultValue={itemInfo?.resalePrice ? itemInfo?.resalePrice : ""}
            />
            <input
              type="text"
              placeholder="Enter Meeting Location"
              className="input input-bordered w-full my-2"
            />
            <input
              type="text"
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
            <button className="btn btn-sm btn-info">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
