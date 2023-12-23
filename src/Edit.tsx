import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { axiosBase } from "./hooks/axios";
import useKomputer from "./hooks/useKomputer";

interface IFormInput {
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
}

const Edit = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const { error, isLoading, komputer } = useKomputer();

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const onSubmit = async (data: IFormInput) => {
    try {
      await axiosBase.put(`/komputer/${id}`, {
        ...data,
        price: Number(data.price),
        stock: Number(data.stock),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="mt-4">
      <h1 className="text-sm">Edit Komputer</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-2"
      >
        <input
          {...register("name")}
          placeholder="Nama Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
          defaultValue={komputer?.name}
        />
        <input
          {...register("price")}
          placeholder="Harga Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
          defaultValue={komputer?.price}
        />
        <input
          {...register("description")}
          placeholder="Deskripsi Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
          defaultValue={komputer?.description}
        />
        <input
          {...register("image_url")}
          placeholder="URL Gambar Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
          defaultValue={komputer?.image_url}
        />
        <input
          {...register("stock")}
          placeholder="Stok Komputer"
          className="px-2 py-1 border border-gray-400 rounded-md"
          defaultValue={komputer?.stock}
        />
        <button type="submit" className="bg-gray-200 py-1 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
