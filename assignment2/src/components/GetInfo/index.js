import useFetch from "../../hooks/useCountry";

function GetInfo({ name }) {
  const [err, data] = useFetch(name);

  if (err) {
    return <div>{err}</div>;
  }

  //   console.log("data.name.official:", data.name.official);
  // sometime it throws error when run official name of the country(???)

  return (
    <div>
      <ul>
        {/* <li key='1a'>Country official name: {data.name.official}</li> */}
        <li key='2a'>Country capital: {data.capital}</li>
        <li key='3a'>Country region: {data.region}</li>
        <li key='4a'>Country flag: {data.flag}</li>
      </ul>
    </div>
  );
}

export default GetInfo;
