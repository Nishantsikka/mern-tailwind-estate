import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-violet-500">Ashiyana</span>
            <span className="text-violet-700">Associates</span>
          </h1>
        </Link>
        <form className="bg-slate-200  p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-violet-700 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline text-violet-700 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="sm:inline text-violet-700 hover:underline">
            <Link to="/sign-in">Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
