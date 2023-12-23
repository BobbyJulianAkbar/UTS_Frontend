import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Home from "./Home";
import TambahKomputer from "./TambahKomputer";
import Detail from "./Detail";
import Edit from "./Edit";
import Cart from "./Cart";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tambah" element={<TambahKomputer />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
