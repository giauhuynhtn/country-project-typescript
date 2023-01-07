import Segments from "../components/Segments";
import User from "../components/User";
import TotalSpent from "../components/TotalSpent";

function Rows() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid #ccc",
      }}>
      <p>Check</p>
      <User />
      <p>03/02/2020</p>
      <p>2</p>
      <TotalSpent />
      <p>05/10/2018, 02:49:45</p>
      <p>icon</p>
      <Segments />
    </div>
  );
}

export default Rows;
