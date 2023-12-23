import { Link } from "react-router-dom";
import useCart from "./hooks/useCart";

const NavBar = () => {
  const { cart } = useCart();
  return (
    <div className="flex items-center justify-between">
      <Link to={"/"} className="text-lg font-semibold cursor-pointer">
        Toko Komputer
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link to={"/"}>Beranda | </Link>
        </li>
        <li>
          <Link to={"/tambah"}>Tambah Komputer | </Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart : {cart.length}</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
