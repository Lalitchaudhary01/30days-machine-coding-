import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (!ignore) {
          setData(result);
        }
      } catch (error) {
        if (!ignore) {
          setError(error);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error }; // Custom hook to fetch data from a given URL
};
export default useFetch;
