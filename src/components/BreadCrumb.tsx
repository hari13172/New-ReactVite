import React from "react";
import { FaNetworkWired } from "react-icons/fa";

function BreadCrumb({ title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl ">
        <FaNetworkWired />
      </span>
      <span>{title}</span>
    </div>
  );
}

export default BreadCrumb;
