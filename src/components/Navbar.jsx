import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { StateContext } from "./Context/StateContext";

const Navbar = () => {
  const { menu, setMenu } = useContext(StateContext);
  useEffect(() => {}, [menu]);

  return (
    <div className=" ">
      <div className="md:flex md:justify-between w-[80%] mx-auto font-semibold py-4  text-xl">
        <NavLink to={"/"}>
          <p className=" inline-block py-2">The meal</p>
        </NavLink>
        <div
          onClick={() => setMenu(!menu)}
          className=" text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {menu ? (
            <ion-icon name="close"></ion-icon>
          ) : (
            <ion-icon name="menu"></ion-icon>
          )}
        </div>
        <ul
          className={`  transition-all ease-in duration-500
          md:pl-0 pl-9 md:flex md:static absolute bg-white md:z-auto z-[1]  left-0 w-full md:w-auto ${
            menu ? "top-20 opacity-100  " : "top-[-500px]"
          }  md:opacity-100 opacity-0`}
        >
          <NavLink to={"/"}>
            <li className=" hover:text-white md:mx-3 md:my-0 my-6 duration-200 hover:bg-amber-500  md:mr-auto mr-9  transition-all  ease-in py-2 text-gray-600 px-3">
              Home
            </li>
          </NavLink>
          <NavLink to={"/products"}>
            <li className=" hover:text-white md:mx-3 md:my-0 my-6 duration-200 hover:bg-amber-500  md:mr-auto mr-9  transition-all  ease-in py-2 text-gray-600 px-3">
              Products
            </li>
          </NavLink>
          <NavLink to={"/about"}>
            <li className=" hover:text-white md:mx-3 md:my-0 my-6 duration-200 hover:bg-amber-500  md:mr-auto mr-9  transition-all ease-in py-2 text-gray-600 px-3">
              About
            </li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li className=" hover:text-white md:mx-3 md:my-0 my-6 duration-200 hover:bg-amber-500  md:mr-auto mr-9  transition-all  ease-in py-2 text-gray-600 px-4">
              Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
