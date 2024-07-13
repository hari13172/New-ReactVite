import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

interface CopyToClipboardProps {
  text: string;
  message?: string;
}

const Copy: React.FC<CopyToClipboardProps> = ({
  text,
  message = "Text copied to clipboard!",
}) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 1000); // Alert is visible for 3 seconds
  };

  return (
    <div>
      <FaCopy onClick={handleCopy} className="cursor-pointer" />
      {alertVisible && <div className="alert">{message}</div>}
      <style>{`
        .alert {
          position: fixed;
          top: 20px;
          right: -300px;
          background: #4caf50;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          animation: slideIn 0.5s forwards, fadeOut 0.5s 2.5s forwards;
        }

        @keyframes slideIn {
          from {
            right: -300px;
          }
          to {
            right: 20px;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Copy;
