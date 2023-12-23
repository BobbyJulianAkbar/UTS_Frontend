import { Link } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="bg-white top-0 sticky py-4 border-b-[1px] border-gray-500">
      <ul className="flex justify-between space-x-4">
        <li>
          <Link
            to="/"
            className="hover:text-gray-300 flex-row flex gap-2 items-center"
          >
            <FaHome className="text-black" /> Beranda
          </Link>
        </li>
        <li>
          <Link
            to="/tambah-buku-baru"
            className="text-black hover:text-gray-300 flex-row flex gap-2 items-center"
          >
            <FaBook /> Input Buku Baru
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
