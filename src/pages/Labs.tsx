import React from "react";
import Alerts from "../components/Alerts";
import BreadCrumb from "../components/BreadCrumb";
import { RiDashboardFill } from "react-icons/ri";
import ubuntu from "../../public/images/ubuntu.png";
import parrot from "../../public/images/parrotos.png";
import { useNavigate } from "react-router-dom";



const Labs: React.FC = () => {
  const pageTitle = "Labs";

  const navigate = useNavigate();

  const handleUbnutuClick = () => {
    navigate("/labs/ubuntu");
  };

  return (
    <div className="w-full p-8 ml-28">
      <span className="flex items-center gap-3 text-[#979797] font-medium">
        <BreadCrumb title={pageTitle} icon={<RiDashboardFill />} />
      </span>
      <div className="flex">
        <Alerts
          title="info"
          message="You Can Access Our Various Labs And Gain Enormous Knowledge On Multiple Domains"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-6 relative justify-center">
        <div className="bg-white rounded-2xl relative flex flex-col overflow-hidden shadow-md">
          <img src={ubuntu} className="max-w-md h-full" alt="Ubuntu" />
          <button
            className="w-full bottom-0 left-0 p-3.5 pl-4 font-semibold text-dark cursor-pointer text-lg border-none outline-none text-center"
            onClick={handleUbnutuClick}
          >
            Dashboard
          </button>
        </div>
        <div className="bg-white rounded-2xl relative flex flex-col overflow-hidden shadow-md labs">
          <img src={parrot} className="max-w-md h-full" alt="Parrot OS" />
          <button className="w-full bottom-0 left-0 p-3.5 pl-4 font-semibold text-dark cursor-pointer text-lg border-none outline-none text-center">
            Dashboard
          </button>
        </div>
      </div>

      <style>{`
        .labs::after {
          content: "coming soon...";
          position: absolute;
          background-color: rgba(240, 242, 245, 0.37);
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          font-weight: 900;
          color: var(--white);
          backdrop-filter: blur(5px);
        }
      `}</style>
    </div>
  );
};

export default Labs;
