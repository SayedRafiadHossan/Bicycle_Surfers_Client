import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const AdminPart = () => {
  const pageParam = useParams().page;
  useEffect(() => {
    fetch("");
  }, []);
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
                <tr className="hover">
                  <th>1</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : pageParam === "all-sellers" ? (
        <div>
          <h1 className="mt-10 text-3xl font-semibold text-center">
            All Sellers
          </h1>
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
