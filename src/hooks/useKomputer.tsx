import useSWR from "swr";
import { IKomputer } from "./useKomputers";
import { axiosBase } from "./axios";
import { useParams } from "react-router-dom";

const useKomputer = () => {
  const { id } = useParams<{ id: string }>();

  const fetcher = (url: string) => axiosBase.get(url).then((res) => res.data);

  const { data, isLoading, error } = useSWR<IKomputer>(
    `/komputer/${id}`,
    fetcher
  );

  return { komputer: data, isLoading, error };
};

export default useKomputer;
