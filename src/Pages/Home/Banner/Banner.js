import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../Images/banner1.jpg";
import img2 from "../../../Images/banner2.jpg";
import img3 from "../../../Images/banner3.jpg";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: img1,
    prev: 3,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div>
      <section>
        <div className="bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              We take trust and integrity to a whole new level.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              Safety, transparency and professionalism throughout the entire
              process.
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                Categories
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
                >
                  Market Place
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500 carousel w-[70%]  mx-auto">
          {bannerData.map((slide) => (
            <BannerItem key={slide.id} slide={slide}></BannerItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;
