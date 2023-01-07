import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(name) {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const resData = await response.data;
        // in case there are more than one result country
        if (resData.length > 1) {
          const result = resData.find(
            (country) =>
              country.name.common.toLowerCase() === name.toLowerCase()
          );
          setData(result);
        } else {
          setData(resData[0]);
        }
      } catch (err) {
        setErr(err.message);
      }
    };

    loadData();
  }, [name]);

  return [err, data];
}

export default useFetch;
