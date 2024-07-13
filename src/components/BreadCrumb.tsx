import React from "react";

interface BreadCrumbProps {
  title: string;
  icon: React.ReactNode; // Accept any React node for the icon
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl">{icon}</span>
      <span className="text-lg font-semibold">{title}</span>
    </div>
  );
};

export default BreadCrumb;
