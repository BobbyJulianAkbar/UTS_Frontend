import { useParams, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaEdit } from "react-icons/fa";
import bukuProvider from "../provider/bukuProvider";
const RincianBuku = () => {
  const navigate = useNavigate();
  const { id = "" } = useParams();
  const { data, error, isLoading } = bukuProvider(id);
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col flex-1 items-center justify-center">
          <h1 className="text-2xl font-bold mb-2 px-4">Loading...</h1>
        </div>
      ) : error ? (
        <div className="flex flex-col flex-1 items-center justify-center">
          <h1 className="text-2xl font-bold mb-2 px-4">Error</h1>
        </div>
      ) : (
        <>
          <div className="flex-1 flex-col flex px-4">
            <div className="flex flex-row justify-between">
              <button
                onClick={() => navigate(-1)}
                className="max-w-fit flex flex-row items-center gap-2 mb-2"
              >
                <FaChevronLeft /> Kembali
              </button>
              <button
                onClick={() => navigate(`/edit-buku/${data.id}`)}
                className="max-w-fit flex flex-row items-center gap-2 mb-2"
              >
                <FaEdit /> Edit
              </button>
            </div>
            <figure className="w-[300px] h-[300px] self-center">
              <img
                src={data.image_url}
                alt={data.image_url}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex-1 flex-col flex">
              <h1 className="text-4xl font-bold text-center">{data.name}</h1>
              <div className="m-auto max-w-[400px] text-center flex-1 flex-col flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center">
                  {data.description} Stok buku terbatas hanya tersisa{" "}
                  {data.stock} pasang. Dapatkan segera dengan harga Rp
                  {data.price}!
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default RincianBuku;
