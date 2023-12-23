import useSWR from "swr";
import { axiosBase } from "./axios";

export interface IKomputer {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
}

const useKomputers = () => {
  const fetcher = (url: string) => axiosBase.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR<IKomputer[]>("/komputer", fetcher);

  return { komputers: data, isLoading, error };
};

export default useKomputers;
