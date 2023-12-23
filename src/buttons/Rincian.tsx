import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const Rincian: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-3 max-w-fit flex flex-row items-center gap-2 text-white bg-black rounded-lg hover:bg-gray-900"
    >
      <FaInfoCircle /> Rincian
    </button>
  );
};
export default Rincian;
