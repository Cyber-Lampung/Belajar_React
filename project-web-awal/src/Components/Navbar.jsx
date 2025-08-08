import React from "react";
import { Link } from "react-router-dom";

function Navbar({ title, className, name }) {
  return (
    <header className="items-center sticky top-0 z-99999">
      <nav className={className}>
        <div className="flex gap-40 text-md items-center font-semibold">
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
          </div>
          <ul className="flex gap-5 text-sm">
            <li>
              <Link to={"/Produk"}>Product</Link>
            </li>
            <li>
              <Link to={"/Customor"}>Customor</Link>
            </li>
            <li>
              <Link to={"/Pricing"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/Learn"}>Learn</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5 font-semibold ">
            <Link to={"/Login"} className="border-2 border-stone-400 w-25 p-2.5 rounded-xl flex justify-center">Login</Link>
            <Link to={"/Register"} className="w-25 p-2.5 border-none  flex text-white justify-center rounded-xl" style={{background: "#219ebc",}}>Register</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
