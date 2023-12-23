import { mutate } from "swr";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import bukuProvider from "../provider/bukuProvider";
import { axiosInstance } from "../axiosInstance/axiosInstance";

type EditForm = {
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
};

const EditBuku = () => {
  const navigate = useNavigate();
  const { id = "" } = useParams();
  const { register, handleSubmit } = useForm<EditForm>();
  const { data, error, isLoading } = bukuProvider(id);

  const onSubmit: SubmitHandler<EditForm> = async (data) => {
    try {
      data.price = Number(data.price);
      data.stock = Number(data.stock);
      await axiosInstance.put(`/buku/${id}`, data);
      mutate(`https://relieved-cheaply-drum.ngrok-free.app/buku`);
      navigate("/");
    } catch (error) {
      return;
    }
  };
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
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2 px-4">Edit Buku</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 px-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Nama buku</label>
                  <input
                    type="text"
                    id="name"
                    defaultValue={data.name}
                    {...register("name")}
                    className="border border-blue-400 rounded-lg px-4 py-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Harga</label>
                  <input
                    type="number"
                    min={1}
                    id="price"
                    defaultValue={data.price}
                    {...register("price")}
                    className="border border-blue-400 rounded-lg px-4 py-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="description">Deskripsi</label>
                  <textarea
                    id="description"
                    defaultValue={data.description}
                    {...register("description")}
                    className="border border-blue-400 rounded-lg px-4 py-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="image_url">URL Gambar</label>
                  <input
                    type="text"
                    defaultValue={data.image_url}
                    id="image_url"
                    {...register("image_url")}
                    className="border border-blue-400 rounded-lg px-4 py-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="stock">Stok</label>
                  <input
                    type="number"
                    id="stock"
                    min={0}
                    defaultValue={data.stock}
                    {...register("stock")}
                    className="border border-blue-400 rounded-lg px-4 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg px-4 py-2"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default EditBuku;
