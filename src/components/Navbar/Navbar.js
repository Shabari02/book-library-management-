"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useThemeContext } from "@/app/Context/store";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const {
    isLoggedIn,
    logout,
    toggleDropdown,
    isOpen,
    userDetails,
    userCurrentState,
    setUserCurrentState,
  } = useThemeContext();
  return (
    <>
      <div className="navbar  border-b-4">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <a>Dashboard</a>
              </li>
              <li tabIndex={0}>
                <Link href="/" className="justify-between">Books store</Link>
              </li>
            </ul>
          </div> */}
          {userCurrentState && (
            <div className="drawer md:hidden z-50">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn  drawer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <Link href="/">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/home">Books store</Link>
                  </li>
                  <li className="bg-red">
                    <button onClick={logout} >
                      Logout <FiLogOut size={19} color="red" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <a href="/" className="btn btn-ghost normal-case text-lg ">
            <h1 class="flex items-center sm:text-4xl font-extrabold lg:text-4xl ">
              Book
              <span class="bg-blue-100 text-blue-800 sm:text-2xl text-xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
                STORE
              </span>
            </h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          {userCurrentState && (
            <>
              <ul className="menu menu-horizontal px-1 ">
                <li>
                  <Link href="/"> Dashboard</Link>
                </li>
                <li tabIndex={0}>
                  <Link href="/home"> Books store</Link>
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="navbar-end">
          {userCurrentState ? (
            <>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar"
                  onClick={toggleDropdown}
                >
                  <div className="w-10 rounded-full">
                    <img src={userDetails.photoUrl} />
                  </div>
                </label>
                {isOpen && (
                  <>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link href="/profile" className="justify-between">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button onClick={logout}>
                          Logout <FiLogOut size={19} color="red" />
                        </button>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              {/* <button href="/" className="btn btn-outline" onClick={logout}>
                Logout
              </button> */}
              <Link href="/login" className="btn btn-outline">
                Login
              </Link>
              <Link href="/signup" className="btn btn-primary ml-4">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
