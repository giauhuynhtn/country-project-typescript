import Search from "./components/Search";
import Functions from "./components/Functions";
import Content from "./components/Content";

function App() {
  return (
    <div className='App' style={{ marginLeft: 20, marginRight: 20 }}>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}>
        <Search />
        <Functions />
      </header>
      <Content />
    </div>
  );
}

export default App;
