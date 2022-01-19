import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [startt, setStartt] = useState(0);
  const [endd, setEndl] = useState(0);
  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => {
          setStartt(e.target.value);
        }}
        placeholder="enter start in sec"
      />
      <input
        type="number"
        onChange={(e) => {
          setEndl(e.target.value);
        }}
        placeholder="enter end in sec"
      />

      {show ? <Timer start={Number(startt)} end={Number(endd)} /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
