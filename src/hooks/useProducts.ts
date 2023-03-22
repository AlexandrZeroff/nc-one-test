import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Product } from "../types/types";
import { APIError } from "../types/types";

const useProducts = () => {
  const req_string = process.env.REACT_APP_REQUEST_API_STRING as string;
  

  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<AxiosError | APIError>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get<Product[]>(req_string);
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
  }, [req_string]);

  return { data, error, loading };
};

export default useProducts;
