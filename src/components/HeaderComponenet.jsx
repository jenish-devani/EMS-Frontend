import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponenet = () => {
  return (
    <div>
      <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white shadow-md rounded-md lg:px-8 lg:py-3 mt-10">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <NavLink to={"/"} className="flex items-center font-bold text-xl">
            Employee Management System
          </NavLink>

          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `flex items-center ${
                    isActive
                      ? "text-red-500 font-bold"
                      : "text-slate-600 hover:text-blue-500"
                  }`
                }
              >
                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 hover:text-blue-500">
                  <span className="material-symbols-outlined">view_list</span>
                  All Employees
                </li>
              </NavLink>
              <NavLink
                to={"/addEmployee"}
                className={({ isActive }) =>
                  `flex items-center ${
                    isActive
                      ? "text-red-500 font-bold"
                      : "text-slate-600 hover:text-blue-500"
                  }`
                }
              >
                <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 hover:text-blue-500 ">
                  <span className="material-symbols-outlined">person_add</span>
                  Add Employee
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponenet;
