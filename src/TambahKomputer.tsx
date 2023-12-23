import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosBase } from "./hooks/axios";

interface IFormInput {
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
}

const TambahKomputer = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const navigate = useNavigate();

  const onSubmit = async (data: IFormInput) => {
    try {
      await axiosBase.post("/komputer", {
        ...data,
        price: Number(data.price),
        stock: Number(data.stock),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4">
      <h1 className="text-sm">Tambah Komputer</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-2"
      >
        <input
          {...register("name")}
          placeholder="Nama Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
        />
        <input
          {...register("price")}
          placeholder="Harga Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
        />
        <input
          {...register("description")}
          placeholder="Deskripsi Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
        />
        <input
          {...register("image_url")}
          placeholder="URL Gambar Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
        />
        <input
          {...register("stock")}
          placeholder="Stok Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
        />
        <button type="submit" className="bg-gray-200 py-1 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TambahKomputer;
