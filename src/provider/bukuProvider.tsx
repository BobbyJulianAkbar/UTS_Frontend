import useSWR from "swr";
import { axiosInstance } from "../axiosInstance/axiosInstance";
interface Buku {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description: string;
  stock: number;
}

const bukuProvider = (id: string) => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);
  const {
    data,
    error,
    isLoading,
  }: {
    data: Buku;
    error: any;
    isLoading: boolean;
  } = useSWR(`/buku/${id}`, fetcher);
  return { data, error, isLoading };
};

export default bukuProvider;
