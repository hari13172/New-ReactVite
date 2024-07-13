import React from "react";
import { TbInfoHexagonFilled } from "react-icons/tb";

function Alerts() {
  return (
    <div className="mt-4 flex items-center gap-5 p-4 pl-6 relative rounded-xl bg-[#5458f720]">
      <div
        className="absolute left-0 top-0 h-full bg-blue-500 rounded-l-lg"
        style={{ width: 10 }}
      ></div>
      <TbInfoHexagonFilled className="bg-blue-600 rounded-full w-12 h-12 p-2 text-white" />
      <div className="flex flex-col">
        <span>
          <h1 className="text-2xl font-semibold">info</h1>
        </span>
        <h5 className="text-base">
          Network Is A Area There We Can Generate A VPN And The Lab Will Be
          Connected Automatically In A Single Click And We Can Make It As
          Seamless
        </h5>
      </div>
    </div>
  );
}
export default Alerts;
