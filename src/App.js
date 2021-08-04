import "./App.css";
import Cards from "./components/Cards";
/* import Toggle from "./components/Toggle"; */
import Cardg from "./components/Cardg";
function App() {
  return (
    <div className="App">
      <header className="header_top">
        <h1>Social Content Network</h1>
      </header>
      <main className="cont">
        <div className="top">
          <Cards />
        </div>
        <header className="header_down">
          <h3>Overview - Today</h3>
        </header>
        <div className="down">
          <Cardg />
        </div>
      </main>
    </div>
  );
}

export default App;
