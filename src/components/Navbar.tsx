"use client";

import { useRouter } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { NavContext } from "@/app/[username]/layout";

export default function Navbar({ username }) {
  const navpath = useContext(NavContext);
  const [path, setPath] = useState(navpath.nav.split("/").splice(1));
  useEffect(() => {
    setPath(navpath.nav.split("/").splice(1));
  }, [navpath.nav]);
  const router = useRouter();
  const ChangePath = (path) => {
    setPath(path.split("/").splice(1));
    router.push(path);
  };

  return (
    <div className="hov-container">
      <div className="hov-center">
        <div className="main-menu logo-header">
          <img alt="" src="/logo.png" width="30px" />
          <h1>YoungStorage</h1>
          <div className="beta">
            <b>beta</b>
          </div>
        </div>

        <div className="main-menu">
          {paths.mainpath.map((a) => (
            <div
              className={`cont ${
                path.length > 1
                  ? path[1] == String(a.pathname).toLocaleLowerCase() &&
                    "active"
                  : String(a.pathname).toLocaleLowerCase() == "home" && "active"
              }`}
              key={a.pathname}
              onClick={() =>
                ChangePath(`
                  /${username}${
                  String(a.pathname).toLocaleLowerCase() == "home"
                    ? ""
                    : "/" + String(a.pathname).toLocaleLowerCase()
                }`)
              }
            >
              <b className="mainnav">{a.svg}</b>
              <span className="align">{a.pathname}</span>
            </div>
          ))}
        </div>

        <div className="main-menu">
          {paths.subpath.map((a) => (
            <div
              className={`cont ${
                path.length > 1
                  ? path[1] == String(a.pathname).toLocaleLowerCase() &&
                    "active"
                  : ""
              }`}
              key={a.pathname}
              onClick={() =>
                ChangePath(`
                  /${username}/${String(a.pathname).toLocaleLowerCase()}`)
              }
            >
              <b className="subnav">{a.svg}</b>
              <span className="align">{a.pathname}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const paths = {
  mainpath: [
    {
      pathname: "networks",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M14.75 11.25V10.25H13.75H12.5C11.6648 10.25 11 9.58522 11 8.75V5C11 4.16478 11.6648 3.5 12.5 3.5H17.5C18.3352 3.5 19 4.16478 19 5V8.75C19 9.58522 18.3352 10.25 17.5 10.25H16.25H15.25V11.25V13.75V14.75H16.25H26.5V15.25H22.5H21.5V16.25V18.75V19.75H22.5H23.75C24.5852 19.75 25.25 20.4148 25.25 21.25V25C25.25 25.8352 24.5852 26.5 23.75 26.5H18.75C17.9148 26.5 17.25 25.8352 17.25 25V21.25C17.25 20.4148 17.9148 19.75 18.75 19.75H20H21V18.75V16.25V15.25H20H10H9V16.25V18.75V19.75H10H11.25C12.0852 19.75 12.75 20.4148 12.75 21.25V25C12.75 25.8352 12.0852 26.5 11.25 26.5H6.25C5.41478 26.5 4.75 25.8352 4.75 25V21.25C4.75 20.4148 5.41478 19.75 6.25 19.75H7.5H8.5V18.75V16.25V15.25H7.5H3.5V14.75H13.75H14.75V13.75V11.25ZM12.5 4H11.5V5V8.75V9.75H12.5H17.5H18.5V8.75V5V4H17.5H12.5ZM6.25 20.25H5.25V21.25V25V26H6.25H11.25H12.25V25V21.25V20.25H11.25H6.25ZM18.75 20.25H17.75V21.25V25V26H18.75H23.75H24.75V25V21.25V20.25H23.75H18.75Z"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      pathname: "Labs",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M8.75 12.5C8.75 10.7322 8.75 9.84835 9.29918 9.29918C9.84835 8.75 10.7322 8.75 12.5 8.75H17.5C19.2677 8.75 20.1516 8.75 20.7009 9.29918C21.25 9.84835 21.25 10.7322 21.25 12.5V17.5C21.25 19.2677 21.25 20.1516 20.7009 20.7009C20.1516 21.25 19.2677 21.25 17.5 21.25H12.5C10.7322 21.25 9.84835 21.25 9.29918 20.7009C8.75 20.1516 8.75 19.2677 8.75 17.5V12.5Z"
            //stroke="#B4B5B7"
            strokeWidth="2"
          />
          <path
            d="M15.5358 12.5L13.75 15H16.25L14.4642 17.5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 15C5 10.286 5 7.92894 6.46446 6.46446C7.92894 5 10.286 5 15 5C19.714 5 22.0711 5 23.5355 6.46446C25 7.92894 25 10.286 25 15C25 19.714 25 22.0711 23.5355 23.5355C22.0711 25 19.714 25 15 25C10.286 25 7.92894 25 6.46446 23.5355C5 22.0711 5 19.714 5 15Z"
            //stroke="#B4B5B7"
            strokeWidth="2"
          />
          <path
            d="M5 15H2.5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M27.5 15H25"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 11.25H2.5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M27.5 11.25H25"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 18.75H2.5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M27.5 18.75H25"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 25V27.5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 2.5V5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M11.25 25V27.5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M11.25 2.5V5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18.75 25V27.5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18.75 2.5V5"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      pathname: "home",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0,0,256,256"
          width="30px"
          height="24px"
          fill="none"
        >
          <g transform="scale(3.55556,3.55556)" strokeWidth="4">
            <path d="M36,10c-1.139,0 -2.27708,0.38661 -3.20508,1.16211l-21.27734,17.7793c-1.465,1.224 -1.96564,3.32881 -1.05664,5.00781c1.251,2.309 4.20051,2.79122 6.10352,1.19922l18.79492,-15.70313c0.371,-0.31 0.91025,-0.31 1.28125,0l18.79492,15.70313c0.748,0.626 1.6575,0.92969 2.5625,0.92969c1.173,0 2.33591,-0.51091 3.12891,-1.50391c1.377,-1.724 0.98597,-4.27055 -0.70703,-5.68555l-2.41992,-2.02148v-10.19922c0,-1.473 -1.19402,-2.66797 -2.66602,-2.66797h-2.66602c-1.473,0 -2.66797,1.19497 -2.66797,2.66797v3.51367l-10.79492,-9.01953c-0.928,-0.7755 -2.06608,-1.16211 -3.20508,-1.16211zM35.99609,22.92578l-22,18.37695v8.69727c0,4.418 3.582,8 8,8h28c4.418,0 8,-3.582 8,-8v-8.69727zM32,38h8c1.105,0 2,0.895 2,2v10h-12v-10c0,-1.105 0.895,-2 2,-2z" />
          </g>
        </svg>
      ),
    },
    {
      pathname: "services",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M8.75 10H5C3.625 10 2.5 8.875 2.5 7.5V5C2.5 3.625 3.625 2.5 5 2.5H8.75C10.125 2.5 11.25 3.625 11.25 5V7.5C11.25 8.875 10.125 10 8.75 10Z"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 8.75H21.5C20.675 8.75 20 8.07499 20 7.24999V5.25001C20 4.42501 20.675 3.75 21.5 3.75H26C26.825 3.75 27.5 4.42501 27.5 5.25001V7.24999C27.5 8.07499 26.825 8.75 26 8.75Z"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 18.125H21.5C20.675 18.125 20 17.45 20 16.625V14.625C20 13.8 20.675 13.125 21.5 13.125H26C26.825 13.125 27.5 13.8 27.5 14.625V16.625C27.5 17.45 26.825 18.125 26 18.125Z"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.25 6.25H20"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.625 6.25V22.5C15.625 23.875 16.75 25 18.125 25H20"
            // fill="#FBFBFB"
          />
          <path
            d="M15.625 6.25V22.5C15.625 23.875 16.75 25 18.125 25H20"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.625 15.625H20"
            //stroke="#B4B5B7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 27.5H21.5C20.675 27.5 20 26.825 20 26V24C20 23.175 20.675 22.5 21.5 22.5H26C26.825 22.5 27.5 23.175 27.5 24V26C27.5 26.825 26.825 27.5 26 27.5Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      pathname: "Domains",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M20.45 11.5H19.3215L19.4573 12.6203C19.5551 13.4273 19.625 14.2075 19.625 15C19.625 15.4534 19.6007 15.9052 19.5598 16.3624C19.3792 16.4643 19.2028 16.5726 19.031 16.6871C19.0875 16.1397 19.125 15.5778 19.125 15C19.125 14.0841 19.0308 13.1953 18.9156 12.3628L18.7961 11.5H17.925H12.075H11.2171L11.0866 12.3479C10.9551 13.2027 10.875 14.0915 10.875 15C10.875 15.9095 10.9553 16.7854 11.0863 17.6498L11.2151 18.5H12.075H17.0724C16.9452 18.662 16.8238 18.8288 16.7085 19H12.6125H11.2855L11.6512 20.2756C12.1979 22.1823 13.0874 23.9427 14.1776 25.5189L14.8556 26.4991C8.59863 26.421 3.5 21.2745 3.5 15C3.5 8.72619 8.55937 3.58331 14.8468 3.501L14.1776 4.46865C13.0861 6.0466 12.1974 7.8195 11.6512 9.72439L11.2855 11H12.6125H17.3875H18.7145L18.3488 9.72439C17.8026 7.8195 16.9139 6.0466 15.8224 4.46865L15.1532 3.50101C21.4061 3.58381 26.5 8.72841 26.5 15C26.5 15.2359 26.4915 15.4698 26.4755 15.7024C26.3141 15.6479 26.1503 15.5983 25.9843 15.5538C25.9945 15.3717 26 15.1871 26 15C26 14.041 25.861 13.121 25.6451 12.2575L25.4558 11.5H24.675H20.45ZM15.1346 26.4991L15.5335 25.9306C15.5826 26.1149 15.6377 26.2967 15.6988 26.4758C15.5117 26.4886 15.3237 26.4965 15.1346 26.4991ZM4.35486 17.7425L4.54422 18.5H5.325H9.55H10.6785L10.5427 17.3797C10.4449 16.5727 10.375 15.7925 10.375 15C10.375 14.2075 10.4449 13.4273 10.5427 12.6203L10.6785 11.5H9.55H5.325H4.54422L4.35486 12.2575C4.13896 13.121 4 14.041 4 15C4 15.959 4.13896 16.879 4.35486 17.7425ZM6.35 19H4.62034L5.48338 20.499C6.79112 22.7703 8.90809 24.5292 11.4245 25.3955L13.849 26.2302L12.6297 23.9745C11.9232 22.6674 11.3857 21.24 10.963 19.7304L10.7585 19H10H6.35ZM10 11H10.7585L10.963 10.2696C11.3857 8.76001 11.9232 7.33263 12.6297 6.02552L13.8403 3.78599L11.4291 4.60288C8.90835 5.45691 6.78975 7.21831 5.48208 9.5033L4.62553 11H6.35H10ZM18.5614 4.60392L16.1415 3.77535L17.3578 6.02552C18.0663 7.3362 18.6126 8.75911 18.9937 10.248L19.1863 11H19.9625H23.65H25.3835L24.5157 9.49937C23.1956 7.21679 21.0914 5.47017 18.5614 4.60392ZM23.5 22.5V19.75H24V22.5V23.5H25H27.75V24H25H24V25V27.75H23.5V25V24H22.5H19.75V23.5H22.5H23.5V22.5Z"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ],
  subpath: [
    // {
    //   pathname: "settings",
    //   svg: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="25"
    //       height="25"
    //       viewBox="0 0 32 32"
    //       fill="none"
    //     >
    //       <path
    //         d="M16 20.5C18.636 20.5 20.7729 18.4853 20.7729 16C20.7729 13.5147 18.636 11.5 16 11.5C13.364 11.5 11.2271 13.5147 11.2271 16C11.2271 18.4853 13.364 20.5 16 20.5Z"
    //         strokeWidth="3"
    //       />
    //       <path
    //         d="M18.8087 1.22836C18.2239 1 17.4826 1 16 1C14.5174 1 13.7762 1 13.1913 1.22836C12.4117 1.53285 11.7922 2.11687 11.4693 2.85195C11.3219 3.18751 11.2642 3.57775 11.2416 4.14699C11.2084 4.98352 10.7534 5.75784 9.98446 6.1764C9.21554 6.59494 8.27679 6.57931 7.49181 6.18814C6.95766 5.92195 6.57035 5.77393 6.18841 5.72653C5.35172 5.62267 4.50554 5.83644 3.83603 6.3208C3.33389 6.68407 2.96324 7.28935 2.22194 8.49989C1.48065 9.71045 1.11 10.3157 1.02738 10.9074C0.917238 11.6962 1.14397 12.494 1.65771 13.1252C1.89218 13.4134 2.22174 13.6555 2.73322 13.9585C3.48513 14.404 3.96892 15.1629 3.96888 16C3.96883 16.8371 3.48505 17.5958 2.7332 18.0412C2.22166 18.3443 1.89206 18.5866 1.65755 18.8748C1.14381 19.506 0.917079 20.3037 1.02724 21.0925C1.10984 21.6841 1.48049 22.2895 2.22179 23.5C2.9631 24.7105 3.33375 25.3159 3.83587 25.679C4.50538 26.1634 5.35156 26.3771 6.18825 26.2733C6.57016 26.2259 6.95745 26.0779 7.49157 25.8118C8.2766 25.4206 9.21542 25.405 9.9844 25.8235C10.7534 26.2421 11.2084 27.0164 11.2416 27.8531C11.2642 28.4222 11.3219 28.8125 11.4693 29.1481C11.7922 29.8831 12.4117 30.4672 13.1913 30.7717C13.7762 31 14.5174 31 16 31C17.4826 31 18.2239 31 18.8087 30.7717C19.5883 30.4672 20.2078 29.8831 20.5306 29.1481C20.6781 28.8125 20.7359 28.4223 20.7584 27.853C20.7915 27.0165 21.2466 26.2421 22.0155 25.8235C22.7844 25.4048 23.7232 25.4206 24.5084 25.8118C25.0424 26.0779 25.4297 26.2258 25.8115 26.2732C26.6482 26.3772 27.4945 26.1634 28.1639 25.679C28.666 25.3157 29.0367 24.7105 29.778 23.4999C30.5194 22.2894 30.8901 21.6841 30.9726 21.0925C31.0827 20.3037 30.856 19.5058 30.3423 18.8746C30.1078 18.5864 29.7781 18.3442 29.2666 18.0412C28.5149 17.5958 28.0311 16.837 28.0311 15.9998C28.0311 15.1627 28.5149 14.4042 29.2666 13.9588C29.7783 13.6557 30.1079 13.4135 30.3424 13.1252C30.8562 12.4941 31.0829 11.6963 30.9728 10.9075C30.8902 10.3158 30.5195 9.71055 29.7781 8.5C29.0369 7.28945 28.6662 6.68417 28.1641 6.3209C27.4946 5.83654 26.6484 5.62278 25.8117 5.72664C25.4298 5.77404 25.0426 5.92204 24.5084 6.1882C23.7234 6.57938 22.7845 6.59503 22.0156 6.17644C21.2466 5.75787 20.7915 4.98349 20.7584 4.14691C20.7359 3.57772 20.6781 3.1875 20.5306 2.85195C20.2078 2.11687 19.5883 1.53285 18.8087 1.22836Z"
    //         strokeWidth="3"
    //       />
    //     </svg>
    //   ),
    // },
    {
      pathname: "signout",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M10.0024 8.75C10.0176 6.03121 10.1381 4.55882 11.0986 3.59835C12.197 2.5 13.9648 2.5 17.5003 2.5H18.7503C22.2858 2.5 24.0536 2.5 25.1519 3.59835C26.2503 4.6967 26.2503 6.46446 26.2503 10V20C26.2503 23.5355 26.2503 25.3032 25.1519 26.4016C24.0536 27.5 22.2858 27.5 18.7503 27.5H17.5003C13.9648 27.5 12.197 27.5 11.0986 26.4016C10.1381 25.4411 10.0176 23.9687 10.0024 21.25"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M10 24.375C7.05373 24.375 5.58059 24.375 4.66529 23.4597C3.75 22.5444 3.75 21.0713 3.75 18.125V11.875C3.75 8.92873 3.75 7.45559 4.66529 6.54029C5.58059 5.625 7.05373 5.625 10 5.625"
            strokeWidth="2.2"
          />
          <path
            d="M18.75 15H7.5M7.5 15L10 17.5M7.5 15L10 12.5"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ],
};
