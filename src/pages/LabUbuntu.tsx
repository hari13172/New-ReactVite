import { SiQwiklabs } from "react-icons/si";
import BreadCrumb from "../components/BreadCrumb";
import Badge from "../components/Badge";
import pro from "../../public/images/pro.png";
import { FaCopy, FaPlay } from "react-icons/fa";
import Copy from "../components/Copy";
import { BiSolidUpArrow } from "react-icons/bi";
import LineChart from "../components/LineChart";
// import Line from "../components/Line";

function LabUbuntu() {
  const pageTitle = "Labs/ubuntu";

  return (
    <div className="w-full p-8">
      <span className="flex items-center gap-3 text-[#979797] font-medium">
        <BreadCrumb title={pageTitle} icon={<SiQwiklabs />} />
      </span>

      <div className="w-full flex mt-6 justify-between p-6 rounded-2xl bg-white shadow-lg">
        <div className="flex justify-between items-center gap-[30px]">
          <img alt="" src={pro} width="80px" />
          <div className="flex flex-col items-start justify-center gap-2">
            <h1>ubuntu labs</h1>
            <span>LTE 22.04 version with root access</span>
            <div className="flex justify-between items-center gap-2">
              <Badge value="notrunning" color="orange" />
              <Badge value="offline" color="red" />
              <Badge value="online" color="green"/>
            </div>
          </div>
        </div>
        <div className="w-fit h-[40px] mt-5 text-center flex px-4 gap-2 items-center bg-green-500">
          <FaPlay className="text-white text-2xl" />
          <button className="text-white">Deploy</button>
        </div>
      </div>

      <div className="w-full flex p-[20px] px-[38px] justify-between items-start rounded-2xl bg-white gap-[50px] mt-[30px] relative shadow-lg">
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
        <div className="left w-[50%] ">
          <div className=""></div>
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

        <div className="w-[50%] flex flex-col gap-4 px-2">
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

      {/* <div className="fixed bottom-0 right-0 z-20  lg:w-[calc(100%-90px)] bg-blue-950 rounded-lg shadow-2xl">
        <div className="flex items-center justify-between py-2 px-8 bg-white">
          <h1>Terminal</h1>
          <BiSolidUpArrow />
        </div>
      </div> */}




      <LineChart />
      {/* <Line /> */}
    </div>
  );
}

export default LabUbuntu;
