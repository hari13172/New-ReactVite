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

        <div className="">
          <div className="w-full flex lg:flex-row flex-col justify-between items-center gap-4">
            {card.map((a, index) => (
              <div key={index} className={`flex items-center p-4 rounded-xl justify-between flex-wrap lg:w-[22.5%]  w-[80%]  relative bg-gradient-to-br  ${a.gradientFrom} ${a.gradientTo}  z-50 cursor-pointer`}>
                <img src={a.img} alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                {a.svg}

                <div className="px-5 relative z-9">
                  <h3 className="text-3xl font-semibold">{a.title}</h3>
                  <span>
                    <h1>{a.device}</h1>
                  </span>
                </div>


                <div className="text-2xl relative z-9 ">
                  <h1 className="text-5xl font-semibold">{a.connected}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="display w-auto rounded-lg flex flex-col items-start bg-white shadow-xl p-20 gap-8">
        <h1 className="text-2xl font-semibold">How to Setup</h1>
        <h1 className="text-2xl font-semibold">Instance Deployment Roadmap</h1>

        <h2 className="text-2xl font-semibold">Step 1: Deploy Ubuntu Instance</h2>
        <ol>
          <li>1. Go to the <b>labs.youngstorage.in</b> website and log in to your account.</li>
          <li>2. Navigate to the <b>labs</b>section.</li>
          <li>3. Find the option to deploy an Ubuntu instance.</li>
          <li>4. Choose the desired configuration for the instance (CPU, RAM, storage, etc.).</li>
          <li>5. Start the deployment process and wait for the instance to be provisioned.</li>
        </ol>

        <h2 className="text-2xl font-semibold">Step 2: Obtain Instance Details</h2>
        <ol>
          <li>1. Once the instance is deployed, retrieve the IP address of the instance.</li>
          <li>2. Make sure you have the SSH login credentials (username and password) for the instance.</li>
        </ol>

        <h2 className="text-2xl font-semibold">Step 3: VPN Configuration</h2>
        <ol>
          <li>1. Go to the <b>Networks</b> tab on youngstorage.in.</li>
          <li>2. Find the VPN configuration section.</li>
          <li>3. Request a VPN configuration file for your device.</li>
          <li>4. Before requesting, ensure that you have the WireGuard application installed on your device/system.</li>
        </ol>

        <h2 className="text-2xl font-semibold">Step 4: VPN Peer Configuration</h2>
        <ol>
          <li>1. Once you receive the VPN configuration file, transfer it to your device.</li>
          <li>2. Install and configure the WireGuard application using the provided configuration file.</li>
          <li>3. Activate the VPN peer configuration on your device.</li>
          <li>4. Confirm the VPN connection by checking the latest handshake in the WireGuard application or on the
            <b>Networks</b> tab of <b>labs.youngstorage.in</b>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold">Step 5: Connect to Instance via SSH</h2>
        <ol>
          <li>1. Open <b>Visual Studio Code </b> (VSCode) on your local system.</li>
          <li>2. Install the "Remote - SSH" extension in VSCode.</li>
          <li>3. Use the SSH credentials obtained in Step 2 to connect to the Ubuntu instance.</li>
          <li>4. Once connected, you can work on the instance seamlessly through VSCode's remote capabilities.</li>
        </ol>

        <p>Remember to follow best practices for security, such as using strong passwords, keeping your instance and applications up to date, and configuring firewalls properly.</p>

        <p>Please note that the instructions provided are based on the information you provided, and the actual steps might vary slightly depending on the interface and features of youngstorage.in. Always refer to their official documentation or support if you encounter any issues during the deployment process.</p>
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
    title: "Device",
    device: "0/1",
    connected: "00",
    gradientFrom: "from-[#fbab7e]",
    gradientTo: "to-[#f7ce68]",
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
    title: "Instance",
    device: "0/1",
    connected: "00",
    gradientFrom: "from-[#cfeaa5]",
    gradientTo: "to-[#f9ffb6]",
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
    title: "Domain",
    device: "0/1",
    connected: "00",
    gradientFrom: "from-[#0396ff]",
    gradientTo: "to-[#abdcff]",
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
    title: "Service",
    device: "0/1",
    connected: "00",
    gradientFrom: "from-[#e96d71]",
    gradientTo: "to-[#fad7a1]",
  },
]
