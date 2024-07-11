import React from "react";
import BreadCrumb from "../components/BreadCrumb";

function Network() {
  const pageTitle = "Network";
  return (
    <div className="p-8">
      <span className="flex items-center gap-3 text-[#979797] font-medium">
        <BreadCrumb title={pageTitle} />
      </span>

      <Alert variant="primary" className="flex items-center mb-2">
        {({ dismiss }) => (
          <>
            <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome alert
            with icon
            <Alert.DismissButton
              type="button"
              className="text-white"
              aria-label="Close"
              onClick={dismiss}
            >
              <Lucide icon="X" className="w-4 h-4" />
            </Alert.DismissButton>
          </>
        )}
      </Alert>
    </div>
  );
}

export default Network;
