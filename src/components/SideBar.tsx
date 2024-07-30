import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { RiDashboardFill } from "react-icons/ri";
import { TbCloudNetwork, TbWorldPlus } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/images/logo.png";
import { MdArrowForwardIos } from "react-icons/md";

function SideBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [__, setBreadcrumbTitle] = useState("Home");

  const Menus = [
    { id: 1, title: "Home", path: "/1/home", icon: <FaHome /> },
    { id: 2, title: "Network", path: "/1/network", icon: <TbCloudNetwork /> },
    { id: 3, title: "Labs", path: "/2/labs" },
    { id: 4, title: "Service", path: "/3/service", icon: <GrServices /> },
    { id: 5, title: "Domains", path: "/4/domains", icon: <TbWorldPlus /> },
  ];

  const handleMenuClick = (title: any) => {
    setBreadcrumbTitle(title);
  };

  return (
    <div className="relative lg:block md:block hidden">
      <div
        className={`bg-[#00171f] h-screen p-5 pt-8 ${open ? "w-55" : "w-24"
          } duration-300 sticky top-0 left-0 z-50`}
      >
        <MdArrowForwardIos
          className={`bg-white text-purple-800 text-3xl p-2 rounded-full absolute -right-3 top-[50%] border border-purple-950 cursor-pointer ${!open && "rotate-180"
            }`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex flex-col mb-6">
          {/* <AiFillAlipaySquare className="text-4xl bg-amber-700 rounded cursor-pointer block float-left mr-3" /> */}
          <img
            src={logo}
            alt=""
            className={`rounded cursor-pointer block float-left mr-3 w-[50px] h-[50px] duration-300 ${!open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-white font-medium origin-left text-2xl duration-300 ${!open && "scale-0"
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
                className={`flex items-center gap-x-2 ${location.pathname === menu.path ? "" : ""
                  }`}
              >
                <span
                  className={`text-2xl float-left block p-1 rounded-md ${location.pathname === menu.path ? "bg-blue-700" : ""
                    }`}
                >
                  {menu.icon ? (
                    menu.icon
                  ) : (
                    <RiDashboardFill
                      className={`${location.pathname === menu.path ? "bg-blue-700" : ""
                        }`}
                    />
                  )}
                </span>
                <span
                  className={`text-lg font-medium flex-1  ${!open && "hidden"
                    } ${location.pathname === menu.path ? "text-blue-700" : ""}`}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </div>

        <div className="flex items-center pt-44 text-gray-300 gap-x-2 cursor-pointer p-4 hover:text-white">
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
