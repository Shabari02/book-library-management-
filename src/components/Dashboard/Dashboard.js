
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div>
        <section className="relative bg-[url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat ">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
          <div className=" relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="bg-[#f5f5f5] max-w-2xl text-center sm:text-left p-6 rounded-lg">
              <h1 className="text-3xl font-extrabold sm:text-5xl ">
                Let us find your
                <strong className="block font-extrabold text-rose-700">
                  Favorite Book.
                </strong>
              </h1>
              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Discover a treasure trove of books on our website, where captivating stories from various genres are waiting to be explored.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="/home"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </a>
                {/* <a
                  href=""
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Login
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
