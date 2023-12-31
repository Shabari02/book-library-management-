import React, { useEffect, useState } from "react";

export const Card = ({ title, img, author, vol, available }) => {
  return (
    <>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href={vol.previewLink} target="_blank">
          <img src={img} className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              <span class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 mb-3 text-amber-700">
                <p class="whitespace-nowrap text-sm">
                  PageCount: {vol.pageCount}
                </p>
              </span>
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {title}
            </p>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {author}
            </p>
            <p className="text-sm font-semibold text-black cursor-auto my-3">
              {vol.categories?.[0]}
            </p>
            <div className="flex items-center space-around">
              <p className="text-sm font-semibold text-black cursor-auto my-3">
                {vol.publishedDate}
              </p>
              <p className="text-sm font-semibold text-black cursor-auto my-3 ml-2">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                  {available["isEbook"] ? "Available" : "Not Available"}
                </span>
              </p>
              <div className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
