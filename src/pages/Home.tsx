import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { TbCloudNetwork } from "react-icons/tb";
import Broken from "../../public/images/Broken.png"


function Home() {
  const pageTitle = "Home";
  return (
    <div className="w-full p-8">
      <span className="flex items-center gap-3 text-[#979797] font-medium">
        <BreadCrumb title={pageTitle} icon={<TbCloudNetwork />} />
      </span>

      <div className="w-full p-4 flex flex-col border-dashed border-2 border-gray-400 gap-2 rounded-lg bg-white mt-4 relative z-10">
        <h1>Overview</h1>

        <div className="flex flex-wrap justify-between items-center gap-8">
          <div className="w-full flex flex-wrap justify-between items-center">
            {card.map((a, index) => (
              <div key={index} className={`flex items-center p-4 rounded-xl justify-between flex-wrap w-[22.5%] relative bg-gradient-to-br  ${a.gradientFrom} ${a.gradientTo}  z-50 cursor-pointer`}>
                <img src={a.img} alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                {a.svg}

                <div className="px-5 relative z-9">
                  <h3 className="text-3xl">{a.title}</h3>
                  <span>
                    <h1>{a.device}</h1>
                  </span>
                </div>


                <div className="text-2xl relative z-9">
                  <h1 className="text-5xl">{a.connected}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



const card = [
  {
    img: Broken,
    svg: (<svg
      className="h-full absolute right-[-5px]"
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="200"
      viewBox="0 0 78 125"
      fill="none"
    >
      <path
        d="M77.5 105V19.5C77.5 8.73045 68.7696 0 58 0H13.2292C10.6173 0 8.5 2.11735 8.5 4.72923C8.5 5.87104 8.08691 6.97429 7.33699 7.8353L2.4512 13.4449C-0.757831 17.1294 1.39539 22.9044 6.23325 23.5885L16.9996 25.111C21.9856 25.8161 22.1112 32.9722 17.153 33.8519C15.0398 34.2268 13.5 36.0638 13.5 38.2101V52.9677C13.5 60.1911 17.0407 66.9557 22.9763 71.0722L32.1362 77.4251C39.2229 82.34 41.5982 91.7291 37.7014 99.4228C31.882 110.912 40.231 124.5 53.1103 124.5H58C68.7696 124.5 77.5 115.77 77.5 105Z"
        fill="#ECECEC"
        fillOpacity="0.3"
      />
    </svg>),
    title: "device",
    device: "0/1",
    connected: "00",
    gradientFrom: "from-orange-400",
    gradientTo: "to-yellow-400",
  },

  {
    img: Broken,
    svg: (<svg
      className="h-full absolute right-[-5px]"
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="200"
      viewBox="0 0 78 125"
      fill="none"
    >
      <path
        d="M77.5 105V19.5C77.5 8.73045 68.7696 0 58 0H13.2292C10.6173 0 8.5 2.11735 8.5 4.72923C8.5 5.87104 8.08691 6.97429 7.33699 7.8353L2.4512 13.4449C-0.757831 17.1294 1.39539 22.9044 6.23325 23.5885L16.9996 25.111C21.9856 25.8161 22.1112 32.9722 17.153 33.8519C15.0398 34.2268 13.5 36.0638 13.5 38.2101V52.9677C13.5 60.1911 17.0407 66.9557 22.9763 71.0722L32.1362 77.4251C39.2229 82.34 41.5982 91.7291 37.7014 99.4228C31.882 110.912 40.231 124.5 53.1103 124.5H58C68.7696 124.5 77.5 115.77 77.5 105Z"
        fill="#ECECEC"
        fillOpacity="0.3"
      />
    </svg>),
    title: "device",
    device: "0/1",
    connected: "00",
    gradientFrom: "from-orange-400",
    gradientTo: "to-yellow-400",
  },

  {
    img: Broken,
    svg: (<svg
      className="h-full absolute right-[-5px]"
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="200"
      viewBox="0 0 78 125"
      fill="none"
    >
      <path
        d="M77.5 105V19.5C77.5 8.73045 68.7696 0 58 0H13.2292C10.6173 0 8.5 2.11735 8.5 4.72923C8.5 5.87104 8.08691 6.97429 7.33699 7.8353L2.4512 13.4449C-0.757831 17.1294 1.39539 22.9044 6.23325 23.5885L16.9996 25.111C21.9856 25.8161 22.1112 32.9722 17.153 33.8519C15.0398 34.2268 13.5 36.0638 13.5 38.2101V52.9677C13.5 60.1911 17.0407 66.9557 22.9763 71.0722L32.1362 77.4251C39.2229 82.34 41.5982 91.7291 37.7014 99.4228C31.882 110.912 40.231 124.5 53.1103 124.5H58C68.7696 124.5 77.5 115.77 77.5 105Z"
        fill="#ECECEC"
        fillOpacity="0.3"
      />
    </svg>),
    title: "device",
    device: "0/1",
    connected: "00",
    gradientFrom: "from-orange-400",
    gradientTo: "to-yellow-400",
  },

  {
    img: Broken,
    svg: (<svg
      className="h-full absolute right-[-5px]"
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="200"
      viewBox="0 0 78 125"
      fill="none"
    >
      <path
        d="M77.5 105V19.5C77.5 8.73045 68.7696 0 58 0H13.2292C10.6173 0 8.5 2.11735 8.5 4.72923C8.5 5.87104 8.08691 6.97429 7.33699 7.8353L2.4512 13.4449C-0.757831 17.1294 1.39539 22.9044 6.23325 23.5885L16.9996 25.111C21.9856 25.8161 22.1112 32.9722 17.153 33.8519C15.0398 34.2268 13.5 36.0638 13.5 38.2101V52.9677C13.5 60.1911 17.0407 66.9557 22.9763 71.0722L32.1362 77.4251C39.2229 82.34 41.5982 91.7291 37.7014 99.4228C31.882 110.912 40.231 124.5 53.1103 124.5H58C68.7696 124.5 77.5 115.77 77.5 105Z"
        fill="#ECECEC"
        fillOpacity="0.3"
      />
    </svg>),
    title: "device",
    device: "0/1",
    connected: "00",
    gradientFrom: "from-orange-400",
    gradientTo: "to-yellow-400",
  },
]
