import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useData = (endPoint, requestConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get(endPoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};
export default useData;
 