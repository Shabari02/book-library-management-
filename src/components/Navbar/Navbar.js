"use client"
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Navbar() {
  // const router = useRouter();
  // const handleSignUpClick = () => {
  //   router.push("/signup");
  // };
  // const handleLoginClick = () => {
  //   router.push("/login");
  // };
  return (
    <>
      <div className="navbar  border-b-4">
        <div className="navbar-start">
          <div className="dropdown">
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
                <a>Books</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Favourite
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Book Store</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a>Books</a>
            </li>
            <li tabIndex={0}>
              <a>
                 Favourite
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/login" className="  btn btn-outline">Login</Link>
          <Link href="/signup" className="btn btn-primary ml-4">Signup</Link>
        </div>
      </div>
    </>
  );
}
