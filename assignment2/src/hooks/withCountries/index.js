import { useState, useEffect } from "react";
import axios from "axios";

function withCountries({ WrappedComponent }) {
  return (props) => {
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");

    const country = props.country;
    console.log("country:", country);

    useEffect(() => {
      const loadData = async () => {
        try {
          const response = await axios.get(
            `https://restcountries.com/v3.1/name/${country}}`
          );
          const resData = await response.data;
          // in case there are more than one result country
          if (resData.length > 1) {
            const result = resData.find(
              (country) =>
                country.name.common.toLowerCase() === country.toLowerCase()
            );
            setData(result);
          } else {
            setData(resData[0]);
          }
        } catch (error) {
          setErr(error.message);
        }
      };

      loadData();
    }, [country]);

    return <WrappedComponent data={data} error={err} {...props} />;
  };
}

export default withCountries;
