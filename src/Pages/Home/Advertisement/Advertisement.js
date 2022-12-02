import React, { useEffect, useState } from "react";

const handleReport = (item) => {
  delete item?._id;
  console.log(item);
};

const Advertisement = () => {
  const [adv, setAdv] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/advertise")
      .then((res) => res.json())
      .then((data) => setAdv(data));
  }, []);
  return (
    <section>
      <h1 className="mt-10 text-3xl font-semibold text-center">
        Advertisement
      </h1>
      <div className="grid lg:grid-cols-3 justify-between my-10 gap-10">
        {adv?.map((x) => (
          <div
            key={adv.indexOf(x)}
            className="max-w-lg p-4 shadow-md bg-gray-100 dark:bg-gray-900 dark:text-gray-100 mx-auto"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={x?.image}
                  alt={x?.itemName}
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
              </div>
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold dark:text-teal-400">
                  {x?.itemName}
                </h3>
                <h3 className="text-xl font-semibold dark:text-teal-400">
                  Price: {x?.resalePrice}
                </h3>
                <button
                  className="btn btn-sm"
                  onClick={() => {
                    handleReport(x);
                  }}
                >
                  Report
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advertisement;
