import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Product } from "../types/types";
import { APIError } from "../types/types";

const useProducts = (id? : string) => {
  const api_string = process.env.REACT_APP_BASE_API_STRING;
  const req_string = api_string + "/image";
  const req_params =
    id !== null
      ? {
          id: id,
        }
      : {};


  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<AxiosError | APIError>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get<Product[]>(req_string, {
          params: req_params,
        });
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err as AxiosError<APIError>);
        } else {
          setError({ message: "Unknown error occured" });
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return { data, error, loading };
};

export default useProducts;
