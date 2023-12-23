import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Beranda from "./pages/Beranda";
import RincianBuku from "./pages/RincianBuku";
import EditBuku from "./pages/EditBuku";
import TambahBukuBaru from "./pages/TambahBuku";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Nav />
          <main className="flex flex-1 flex-col">
            <Outlet />
          </main>
          <Footer />
        </>
      }
    >
      <Route index element={<Beranda />} />
      <Route path="buku/:id" element={<RincianBuku />} />
      <Route path="edit-buku/:id" element={<EditBuku />} />
      <Route path="tambah-buku-baru" element={<TambahBukuBaru />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
