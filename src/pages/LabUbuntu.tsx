import { SiQwiklabs } from "react-icons/si";
import BreadCrumb from "../components/BreadCrumb";
import Badge from "../components/Badge";
import pro from "../../public/images/pro.png";
import { FaCopy, FaPlay } from "react-icons/fa";
import Copy from "../components/Copy";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
// import LineChart from "../components/LineChart";
import { useState } from "react";
// import Line from "../components/Line";
import { Button } from 'primereact/button';

function LabUbuntu() {
  const pageTitle = "Labs/ubuntu";

  const [terminalState, SetTerminalState] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [deployed, setDeployed] = useState(false)
  const [showRedeployPopup, setShowRedeployPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setDeployed(true)
  };

  const toggleTerminal = () => {
    SetTerminalState(!terminalState)
  }

  const handleReDeploy = () => {
    setShowRedeployPopup(!showRedeployPopup)
  }

  return (
    <div className="w-full p-8">
      <span className={`flex items-center gap-3 text-[#979797] font-medium ${showPopup ? "filter blur-sm brightness-75" : ""}`}>
        <BreadCrumb title={pageTitle} icon={<SiQwiklabs />} />
      </span>

      <div className={`lg:w-full lg:flex mt-6 lg:justify-between justify-center items-center  p-6 rounded-2xl bg-white shadow-lg ${showPopup ? "filter blur-sm brightness-75" : ""} ${showRedeployPopup ? "filter blur-sm brightness-75" : ""}`}>
        <div className="flex justify-between items-center gap-[30px]">
          <img alt="" src={pro} width="80px" />
          <div className="flex flex-col items-start justify-center gap-2">
            <h1>ubuntu labs</h1>
            <span>LTE 22.04 version with root access</span>
            <div className="flex justify-between items-center gap-2">
              <Badge value="notrunning" color="orange" />
              <Badge value="offline" color="red" />
              <Badge value="online" color="green" />
            </div>
          </div>
        </div>

        <div>
          {!deployed ? (
            <div onClick={togglePopup} className="lg:w-fit p-2 mt-5  justify-center text-center flex px-4 gap-2 items-center bg-green-500">
              <FaPlay className="text-white text-2xl" />
              <button className="text-white">Deploy</button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <Button label="CODE" icon="pi pi-code" size="small" severity="info" pt={{
                icon() {
                  return "text-xl"
                },

              }} />
              <Button onClick={handleReDeploy} label="REDEPLOY" icon="pi pi-undo" size="small" severity="secondary" pt={{
                root() {
                  return "bg-[#f2c94c]"
                }
              }} />
              <Button label="STOP" icon="pi pi-times-circle" size="small" severity="danger" />
            </div>
          )}
        </div>
      </div>


      {showRedeployPopup && (
        <div className={`fixed inset-0 flex items-start py-10 justify-center z-50 transition-opacity  transform -translate-y-50px animate-action animate-duration-800 backdrop-blur-10"}`}>
          <div className="border-2 border-[#5458f7] rounded-lg p-8 shadow-lg transform transition-transform duration-300 ease-in-out w-full lg:w-[80%] bg-[#5458f720]">
            <h2 className="text-2xl font-semibold mb-4">Restart Lab</h2>
            <p className="text-lg text-black">
              Start Your Lab and Play With Your Coding Space
            </p>
            <div className="flex justify-center items-center gap-4 pt-10">
              <Button label="REDEPLOY INSTANCE" severity="success" size="small" />
              <Button label="CANCEL" severity="danger" size="small" />
            </div>
          </div>

        </div>
      )}

      {/* {showRedeployPopup && (
        <div className="fixed inset-0 flex items-start py-10 justify-center z-50 transition-opacity opacity-100">
          Your code for the Redeploy popup
        </div>
      )} */}



      {/* Popup */}
      <div
        className={`fixed inset-0 flex items-start py-10 justify-center z-50 transition-opacity  ${showPopup ? "opacity-100" : "opacity-0 pointer-events-none transform -translate-y-50px animate-action animate-duration-800 backdrop-blur-10"
          }`}
      >
        <div className="border-2 border-[#5458f7] rounded-lg p-8 shadow-lg transform transition-transform duration-300 ease-in-out w-full lg:w-[80%] bg-[#5458f720]">
          <h2 className="text-2xl font-semibold mb-4">Start Lab</h2>
          <p className="text-lg text-black">
            Start Your Lab and Play With Your Coding Space
          </p>
          <div className="flex justify-center items-center gap-4 pt-10">
            <Button label="START INSTANCE" severity="success" size="small" />
            <Button label="CANCEL" severity="danger" onClick={togglePopup} size="small" />
          </div>
        </div>
      </div>






      <div className="w-full flex lg:flex-row flex-col p-[20px] px-[38px] justify-between items-start rounded-2xl bg-white gap-[50px] mt-[30px] relative shadow-lg ">
        <style>{`
          .custom-divider {
            position: absolute;
            width: 2px;
            height: 90%;
            background-color: #555;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
          }
        `}</style>
        <div className=" lg:w-[50%] w-full ">
          <h3 className="text-lg rounded-md bg-gray-100 font-normal p-2 text-center">
            Read Me
          </h3>
          <p className="mt-4 text-justify text-sm">
            This server is accessible through Code or SSH. Code is accessible
            under VPN in one click and you do not have to SSH into your lab,
            because Code works on your browser without any additional setup.
            Just ensure you are connected to <b>VPN</b>
            {/* <Link href={`https://www.wireguard.com/`} target="_blank"></Link> */}
            . <br />
            Code is an embedded VS Code that runs from within this lab and lets
            you access your lab effortlessly over the web. To keep you secure,
            this password changes during every redeploy. For a more convenient
            development experience, consider installing{" "}
            <b>Visual Studio Code </b>
            {/* <Link href={`https://code.visualstudio.com/`} target="_blank"></Link> */}
            Desktop and connect via SSH.
          </p>
        </div>

        <div className="custom-divider"></div>

        <div className="lg:w-[50%] w-full flex flex-col gap-4 px-2">
          <h3 className="text-lg rounded-md bg-gray-100 font-normal p-2 text-center">
            Lab information
          </h3>

          <div className="flex px-2 py-0.5">
            <h4 className="w-[150px]">IP Address</h4>
            <span className="flex-1 overflow-hidden flex justify-between items-center relative">
              <b className="overflow-hidden w-9/10 font-thin text-sm">
                172.20.0.24
              </b>
              <Copy text="172.20.0.24" />
            </span>
          </div>

          <div className="flex px-2 py-0.5">
            <h4 className="w-[150px]">UserName</h4>
            <span className="flex-1 overflow-hidden flex justify-between items-center relative">
              <b className="overflow-hidden w-9/10 font-thin text-sm">
                haridiablo72
              </b>
              <Copy text="haridiablo72" />
            </span>
          </div>

          <div className="flex px-2 py-0.5">
            <h4 className="w-[150px]">Password</h4>
            <span className="flex-1 overflow-hidden flex justify-between items-center relative">
              <b className="overflow-hidden w-9/10 font-thin text-sm">
                haridiablo72@321
              </b>
              <Copy text="haridiablo72@321" />
            </span>
          </div>

          <div className="flex px-2 py-0.5">
            <h4 className="w-[150px]">SSH</h4>
            <span className="flex-1 overflow-hidden flex justify-between items-center relative">
              <b className="overflow-hidden w-9/10 font-thin text-sm">
                haridiablo72@172.20.0.24
              </b>
              <Copy text="haridiablo72@172.20.0.24" />
            </span>
          </div>

          <div className="flex px-2 py-0.5">
            <h4 className="w-[150px]">Code-Server</h4>
            <span className="flex-1 overflow-hidden flex justify-between items-center relative">
              <b className="overflow-hidden w-9/10 font-thin text-sm">
                https://409ef27f40f4685342dc678e9276af5a.youngstorage.cloud
              </b>
              <Copy text="https://409ef27f40f4685342dc678e9276af5a.youngstorage.cloud" />
            </span>
          </div>

          <div className="flex px-2 py-0.5">
            <h4 className="w-[150px]">Password</h4>
            <span className="flex-1 overflow-hidden flex justify-between items-center relative">
              <b className="overflow-hidden w-9/10 font-thin text-sm">
                IpV83fLmmI
              </b>
              <Copy text="IpV83fLmmI" />
            </span>
          </div>
        </div>
      </div>

      <div className={`fixed -right-0 bottom-0 w-full lg:w-[calc(100%-96px)] bg-blue-950  z-0 shadow-2xl  ${terminalState ? "top-[70%]" : "-bottom-7"}`}>
        <div className="flex items-center justify-between py-2 px-8 bg-white">
          <h1>Terminal</h1>
          <BiSolidUpArrow onClick={toggleTerminal} />
        </div>
        <div>
          <h1>(labs💻️youngstorage)$</h1>
          <h1>(labs💻️youngstorage)$</h1>
        </div>

      </div>


      {/* <div
        className={`fixed bottom-0 right-0 w-full bg-blue-950 z-50 shadow-2xl transition-transform duration-300 ${terminalState ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <div className="flex items-center justify-between  px-8 bg-white">
          <h1>Terminal</h1>
          {terminalState ? (
            <BiSolidDownArrow onClick={toggleTerminal} />
          ) : (
            <BiSolidUpArrow onClick={toggleTerminal} />
          )}
        </div>
        <div className="text-white p-4">
          <h1>(labs💻️youngstorage)$</h1>
          <h1>(labs💻️youngstorage)$</h1>
          <h1>(labs💻️youngstorage)$</h1>
          <h1>(labs💻️youngstorage)$</h1>
          <h1>(labs💻️youngstorage)$</h1>
          <h1>(labs💻️youngstorage)$</h1>
          <h1>(labs💻️youngstorage)$</h1>
        </div>
      </div> */}



      {/* <LineChart /> */}
      {/* <Line /> */}
    </div>
  );
}

export default LabUbuntu;
