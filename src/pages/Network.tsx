import { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Alerts from "../components/Alerts";
import Badge from "../components/Badge";
import qr from "../../public/images/qr.png";
import info from "../../public/images/information.png";
import DropDown from "../components/DropDown";
import { TbCloudNetwork } from "react-icons/tb";
import Card from '../components/Card'
// import  { useRef } from 'react';
// import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';




function Network() {
  const pageTitle = "Network";
  const [showModal, setShowModal] = useState(false);


  const options = [
    { label: "Laptop", value: "Laptop" },
    { label: "Desktop", value: "Desktop" },
    { label: "Mobile", value: "Mobile" },
    { label: "Tablet", value: "Tablet" },
    { label: "IOT", value: "IOT" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const addresses = [
    { label: "IP Address", value: "172.20.0.73" },
    { label: "Endpoint", value: "103.78.167.103" },
    { label: "Latest Handshake", value: "🚫" },
    { label: "Transfer", value: "0 Received , 0 Sent" },
  ];

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full p-8">
      <span className="flex items-center gap-3 text-[#979797] font-medium">
        <BreadCrumb title={pageTitle} icon={<TbCloudNetwork />} />
      </span>
      <div className="flex">
        <Alerts
          title="info"
          message="Network Is A Area There We Can Generate A VPN And The Lab Will Be Connected Automatically In A Single Click And We Can Make It As Seamless"
        />
      </div>
      <div className="w-full mt-6 flex flex-col items-start p-6 rounded-xl bg-white shadow-md">
        <div className="w-full flex items-center justify-between pb-4 border-b-2 border-gray-300">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={openModal}
              className="text-white text-center border-none text-lg font-semibold uppercase bg-green-500 inline-flex items-center gap-5 px-4 py-2 rounded-md"
            >
              add device
            </button>
            <button className="text-white text-center border-none text-lg font-semibold capitalize bg-blue-600 inline-flex items-center gap-4 px-4 py-2 rounded-md">
              3 / 4
            </button>
          </div>
        </div>
        <div className=" border-gray-600 w-full"></div>


        <Card />
        {/* <div className="device-list w-full mt-6 flex flex-wrap justify-center gap-8 ">
          <div className="device-box flex flex-col w-full md:w-3/4 lg:w-1/2 xl:w-1/3 rounded-lg p-6 border border-gray-200 bg-blue-300 bg-opacity-50 shadow-md gap-4">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-semibold">Ubuntu Labs</h3>
              <Badge value="Offline" />
            </div>

            <div className="lab flex items-center justify-between gap-4 border-b-2 border-black pb-2">
              <span>Laptop</span>
              <h6 className="text-gray-600 text-sm">1 Month ago</h6>
            </div>

            <div>
              {addresses.map((address, index) => (
                <div
                  key={index}
                  className="address w-full flex items-center justify-between gap-8"
                >
                  <span>{address.label}</span>
                  <span>{address.value}</span>
                </div>
              ))}
            </div>

            <div className="w-full flex border-0 border-t border-black outline-none justify-between py-2 transition-all duration-500 ease-in-out">
              <div className="flex justify-center items-center cursor-pointer">
                <img alt="" src={qr} width={20} height={20} />
                <span className="text-center items-center justify-center m-1 capitalize">
                  scan
                </span>
              </div>

              <div className="flex justify-center items-center cursor-pointer">
                <img alt="" src={info} width={20} height={20} />
                <span className="text-center items-center justify-center m-1 capitalize">
                  info
                </span>
              </div>

              <div className="flex justify-center items-center cursor-pointer">
                <RiDeleteBinLine className="w-[25px] h-[25px]" />
                <span className="text-center items-center justify-center m-1 capitalize">
                  Delete
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* Modal */}

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            onClick={closeModal}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          ></div>
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-auto z-50">
            {/* Increased max-w-3xl to widen the modal box */}
            <h2 className="text-xl font-semibold mb-4 px-4">
              Add New Device To The Network
            </h2>

            <div className=" flex flex-col gap-4">
              <div className=" border-2 border-gray-400 rounded-xl">
                <div className="  flex flex-col justify-start items-start p-4 gap-4 ">
                  <label className="font-semibold">Device Name</label>
                  <input
                    type="text"
                    placeholder="Test Device"
                    className="outline-none text-start w-full text-base font-light px-8 py-2  focus:outline-none border-b-2  border-gray-400"
                  />
                </div>
              </div>

              <div className="border-2 border-gray-400 rounded-xl">
                <div className="flex flex-col p-4 gap-4">
                  <label>Device Type</label>
                  {/* Example of a custom component (DropDown) */}
                  {/* Ensure the DropDown component handles its own width */}
                  <DropDown
                    className="border-none outline-none w-full text-base font-light px-8 py-2 rounded-md"
                    options={options}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center px-4">
              <button
                onClick={closeModal}
                className="bg-orange-400 text-white py-2 px-4 rounded-md mt-4"
              >
                Close Modal
              </button>
              <button
                onClick={closeModal}
                className="bg-red-600 text-white py-2 px-4 rounded-md mt-4"
              >
                Delete Device
              </button>
              <button
                onClick={closeModal}
                className="bg-[#19af66] text-white py-2 px-4 rounded-md mt-4"
              >
                Add Device
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Network;
