import GetInfo from "./components/GetInfo";
import HocGetInfo from "./components/HocGetInfo";

function App() {
  return (
    <div className='App'>
      <GetInfo name='china' />
      <HocGetInfo country='suomi' />
    </div>
  );
}

export default App;
