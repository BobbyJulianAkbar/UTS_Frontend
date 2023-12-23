import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const HomeLayout = () => {
  return (
    <div className="max-w-lg min-h-screen bg-gray-100 mx-auto p-4">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
