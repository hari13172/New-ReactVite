import React from "react";
import { TbInfoHexagonFilled } from "react-icons/tb";

// Define props interface
interface AlertsProps {
  title: string;
  message: string;
}

const Alerts: React.FC<AlertsProps> = ({ title, message }) => {
  return (
    <div className="mt-4 flex items-center gap-5 p-4 pl-6 relative rounded-xl bg-[#5458f720]">
      <div
        className="absolute left-0 top-0 h-full bg-blue-500 rounded-l-lg"
        style={{ width: 10 }}
      ></div>
      <TbInfoHexagonFilled className="bg-blue-600 rounded-full w-12 h-12 p-2 text-white" />
      <div className="flex flex-col">
        <span>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </span>
        <h5 className="text-base">{message}</h5>
      </div>
    </div>
  );
};

export default Alerts;
