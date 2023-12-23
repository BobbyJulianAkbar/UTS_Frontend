import { useNavigate, useParams } from "react-router-dom";
import useKomputer from "./hooks/useKomputer";
import { axiosBase } from "./hooks/axios";
import useCart from "./hooks/useCart";

const Detail = () => {
  const { error, isLoading, komputer } = useKomputer();

  const { addToCart } = useCart();

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const handleDelete = async () => {
    try {
      await axiosBase.delete(`/komputer/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="mt-4">
      <img
        src={komputer?.image_url}
        alt={komputer?.name}
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/150x150?text=No+Image";
        }}
        className="w-60 h-60 object-cover rounded-md mx-auto"
      />
      <h1 className="text-lg font-semibold mt-2">{komputer?.name}</h1>
      <p className="text-sm">Rp {komputer?.price}</p>
      <p className="text-xs">{komputer?.description}</p>
      <p className="text-xs mt-2">Stok: {komputer?.stock}</p>
      <div className="flex gap-2 mx-auto w-fit">
        <button
          className="bg-yellow-500 text-white px-4 py-1 rounded-md mt-4"
          onClick={() => navigate(`/edit/${komputer?.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded-md mt-4"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-md mt-4"
          onClick={() => addToCart(komputer!)}
        >
          Beli
        </button>
      </div>
    </div>
  );
};

export default Detail;
