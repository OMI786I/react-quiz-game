import "./App.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import TsParticleComponents from "./Components/TsParticleComponents";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app-container">
        <TsParticleComponents />
      </div>
      <div className="content">
        <p>Welcome To The Quiz Game</p>
        <Link to={"/question"}>
          {" "}
          <button className="btn btn-primary btn-lg">Start</button>
        </Link>
      </div>
    </>
  );
}

export default App;
