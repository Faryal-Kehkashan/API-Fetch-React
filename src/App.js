import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState();
  const [prog, setProg] = useState();

  //API fetching through post mehtod

  const handlesubmit = () => {
    axios
      .post("http://localhost:5000/data", { name: state, program: prog })
      .then((res) => {
        console.log(res.data);
      });
  };

  //API fetching through delete mehtod

  const handledelete = () => {
    axios.delete("http://localhost:5000/data/3").then((res) => {
      console.log(res.data);
    });
  };

  //API fetching through update method

  const handleUpdate = () => {
    axios
      .put("http://localhost:5000/data/1", { name: "Faryal Kehkashan" })
      .then((res) => {
        console.log(res.data);
      });
  };

  //API fetching through get mehtod using useEffect Hook

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <label>Name</label>
      <input
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <label>Program</label>
      <input
        value={prog}
        onChange={(e) => {
          setProg(e.target.value);
        }}
      />
      <button onClick={handlesubmit}>Submit</button>
      <button onClick={handledelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
