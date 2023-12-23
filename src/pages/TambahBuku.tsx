import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axiosInstance/axiosInstance";
import { mutate } from "swr";

type InputForm = {
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
};

const TambahBukuBaru = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<InputForm>();

  const onSubmit: SubmitHandler<InputForm> = async (data) => {
    try {
      data.price = Number(data.price);
      data.stock = Number(data.stock);
      await axiosInstance.post(`/buku`, data);
      mutate(`https://relieved-cheaply-drum.ngrok-free.app/buku`);
      navigate("/");
    } catch (error) {
      return;
    }
  };
  return (
    <>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2 px-4">Tambah Buku</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 px-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Nama buku</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="border border-blue-400 rounded-lg px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Harga</label>
              <input
                type="number"
                id="price"
                {...register("price")}
                className="border border-blue-400 rounded-lg px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Deskripsi</label>
              <textarea
                id="description"
                {...register("description")}
                className="border border-blue-400 rounded-lg px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="image_url">URL Gambar</label>
              <input
                type="text"
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
                {...register("stock")}
                className="border border-blue-400 rounded-lg px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg px-4 py-2"
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TambahBukuBaru;
