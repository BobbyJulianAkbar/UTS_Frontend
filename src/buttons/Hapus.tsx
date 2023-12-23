import { FaTrash } from "react-icons/fa";

const Hapus: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-3 max-w-fit flex flex-row items-center gap-2 text-white hover:bg-red-400 bg-red-600 shadow-lg rounded-lg"
    >
      <FaTrash /> Hapus
    </button>
  );
};

export default Hapus;
