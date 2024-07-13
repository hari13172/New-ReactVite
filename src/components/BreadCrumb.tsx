import React from "react";
import { TbCloudNetwork } from "react-icons/tb";

function BreadCrumb({ title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl">
        <TbCloudNetwork />
      </span>
      <span className="text-lg font-semibold">{title}</span>
    </div>
  );
}

export default BreadCrumb;
