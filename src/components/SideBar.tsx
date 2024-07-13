import React, { useState } from "react";
import { AiFillAlipaySquare } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { RiDashboardFill } from "react-icons/ri";
import { TbWorldPlus } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/images/logo.png";

function SideBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [breadcrumbTitle, setBreadcrumbTitle] = useState("Home");

  const Menus = [
    { id: 1, title: "Network", path: "/network", icon: <FaNetworkWired /> },
    { id: 2, title: "Labs", path: "/labs" },
    { id: 3, title: "Home", path: "/", icon: <FaHome /> },
    { id: 4, title: "Service", path: "/service", icon: <GrServices /> },
    { id: 5, title: "Domains", path: "/domains", icon: <TbWorldPlus /> },
  ];

  const handleMenuClick = (title) => {
    setBreadcrumbTitle(title);
  };

  return (
    <div className="flex">
      <div
        className={`bg-[#00171f] h-screen p-5 pt-8 ${
          open ? "w-60" : "w-28"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-purple-800 text-3xl rounded-full absolute -right-3 top-9 border border-purple-950 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex flex-col mb-6">
          {/* <AiFillAlipaySquare className="text-4xl bg-amber-700 rounded cursor-pointer block float-left mr-3" /> */}
          <img
            src={logo}
            alt=""
            className={`rounded cursor-pointer block float-left mr-3 w-[60px] h-[60px] duration-300 ${
              !open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white font-medium origin-left text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            YoungStorage
          </h1>
        </div>

        <div className="pt-24">
          {Menus.map((menu) => (
            <li
              key={menu.id}
              className="text-gray-300 text-sm flex items-center cursor-pointer p-2 hover:text-white mt-2"
              onClick={() => handleMenuClick(menu.title)}
            >
              <Link
                to={menu.path}
                className={`flex items-center gap-x-2 ${
                  location.pathname === menu.path ? "" : ""
                }`}
              >
                <span
                  className={`text-3xl float-left block p-1 rounded-md ${
                    location.pathname === menu.path ? "bg-blue-700" : ""
                  }`}
                >
                  {menu.icon ? (
                    menu.icon
                  ) : (
                    <RiDashboardFill
                      className={`${
                        location.pathname === menu.path ? "bg-blue-700" : ""
                      }`}
                    />
                  )}
                </span>
                <span
                  className={`text-lg font-medium flex-1  ${
                    !open && "hidden"
                  } ${location.pathname === menu.path ? "text-blue-700" : ""}`}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </div>

        <div className="flex items-center pt-28 text-gray-300 gap-x-2 cursor-pointer p-4 hover:text-white">
          <span className=" float-left block">
            <RiDashboardFill className="text-3xl" />
          </span>
          <span className={`text-lg font-medium flex-1 ${!open && "hidden"}`}>
            <Link to="/">SignOut</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
