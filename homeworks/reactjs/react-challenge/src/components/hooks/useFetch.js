import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, fetchData];
};
export default useFetch;
