import withCountries from "../../hooks/withCountries";

function HocGetInfo({ props }) {
  const data = props.data;
  console.log("data:", data);
  const error = props.error;
  console.log("error:", error);
  return (
    <div>
      <p>HoC</p>
      {error !== "" ? <p>{error}</p> : ""}
      {data !== [] ? (
        <ul>
          <li key='2a'>Country capital: {data.capital}</li>
          <li key='3a'>Country region: {data.region}</li>
          <li key='4a'>Country flag: {data.flag}</li>
        </ul>
      ) : (
        <p>No result</p>
      )}
    </div>
  );
}

export default withCountries(HocGetInfo);
