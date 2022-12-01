import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Images/road.png";
import img2 from "../../Images/mountain.png";
import img3 from "../../Images/electrics.png";

const Categories = () => {
  return (
    <section>
      <h1 className="text-4xl antialiased font-semibold leading-none text-center dark:text-gray-100">
        Products Categories
      </h1>
      <div className="grid grid-cols-3 m-10 ml-60">
        <div className="rounded-md shadow-md sm:w-96 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex items-center justify-between p-3"></div>
          <img
            src={img1}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Road bikes
              </h2>
              <p className="dark:text-gray-100">
                road bikes are optimised to make road cycling as efficient as
                possible, and because of that they'd perform terribly on a
                mountain dirt track.
              </p>
            </div>
            <Link to="/category/road-bikes">
              <button className="btn btn-sm">Show More</button>
            </Link>
          </div>
        </div>
        <div className="rounded-md shadow-md sm:w-96 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex items-center justify-between p-3"></div>
          <img
            src={img2}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Mountain bikes
              </h2>
              <p className="dark:text-gray-100">
                Wide, knobbly tyres for traction, and a wide range of gears to
                help you get up and over mountains or across fields.
              </p>
            </div>
            <Link to="/category/mountain-bikes">
              <button className="btn btn-sm">Show More</button>
            </Link>
          </div>
        </div>
        <div className="rounded-md shadow-md sm:w-96 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex items-center justify-between p-3"></div>
          <img
            src={img3}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Electric bikes
              </h2>
              <p className="dark:text-gray-100">
                They have a battery and a silent motor, and because of this
                they're heavier than other bikes..
              </p>
            </div>
            <Link to="/category/electric-bikes">
              <button className="btn btn-sm">Show More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
