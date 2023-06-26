"use client"
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { withAuth } from "../auth/auth";
import { useThemeContext } from "../Context/store";


function page() {
    const {userDetails} = useThemeContext()
    console.log(userDetails)
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-200 py-8">
        <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img src={userDetails.photoUrl} alt="Profile" className="w-24 h-24 rounded-full" />
          <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-4 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-800">
                  Personal Information
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                    &nbsp;Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {userDetails.userName}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                    &nbsp;Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {userDetails.email}
                    </dd>
                  </div>
                  {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                    &nbsp;Phone number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      (123) 456-7890
                    </dd>
                  </div> */}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}

export default withAuth(page);
