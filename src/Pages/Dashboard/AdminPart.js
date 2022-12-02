import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminPart = () => {
  const { token } = useAuth();
  const pageParam = useParams().page;
  const [allUsers, setAllUsers] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/allUsers")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);
  const [allBuyers, setAllBuyers] = useState();
  const [allSellers, setAllSellers] = useState();
  useEffect(() => {
    setAllBuyers(allUsers?.filter((x) => x.role === "buyer"));
    setAllSellers(allUsers?.filter((x) => x.role === "seller"));
  }, [allUsers]);

  const verifySeller = (email) => {
    const user = { email };

    fetch(`http://localhost:5000/updateSellerStatus`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Seller Verified");
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <div className="flex items-center justify-end gap-3 mt-10 px-5">
        <Link to="/dashboard/all-buyers" className="btn btn-sm">
          All Buyers
        </Link>
        <Link to="/dashboard/all-sellers" className="btn btn-sm">
          All Sellers
        </Link>
        <Link to="/dashboard/reported-items" className="btn btn-sm">
          Reported Items
        </Link>
      </div>

      {pageParam === "all-buyers" ? (
        <div>
          <h1 className="mt-10 text-3xl font-semibold text-center">
            All Buyers
          </h1>
          <div className="overflow-x-auto w-1/2 mx-auto my-10">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {allBuyers?.map((x) => (
                  <tr key={allBuyers.indexOf(x)} className="hover">
                    <th className="bg-gray-50">{allBuyers.indexOf(x) + 1}</th>
                    <td className="bg-gray-50">{x?.displayName}</td>
                    <td className="bg-gray-50">{x?.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : pageParam === "all-sellers" ? (
        <div>
          <h1 className="mt-10 text-3xl font-semibold text-center">
            All Sellers
          </h1>
          <div className="overflow-x-auto w-1/2 mx-auto my-10">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allSellers?.map((x) => (
                  <tr key={allSellers.indexOf(x)} className="hover">
                    <th className="bg-gray-50">{allSellers.indexOf(x) + 1}</th>
                    <td className="bg-gray-50">
                      {x?.displayName}{" "}
                      {x?.verified === true ? (
                        <div
                          className="tooltip cursor-pointer"
                          data-tip="Verified"
                        >
                          ✅
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="bg-gray-50">{x?.email}</td>
                    <td className="bg-gray-50">
                      <button
                        className="btn btn-sm"
                        onClick={() => {
                          if (x?.verified !== true) {
                            verifySeller(x?.email);
                          }
                        }}
                      >
                        Verify
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : pageParam === "reported-items" ? (
        <div>
          <h1 className="mt-10 text-3xl font-semibold text-center">
            Reported Items
          </h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminPart;
