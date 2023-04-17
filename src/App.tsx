import React, { useEffect } from "react";
import "./App.css";
import { db } from "./db/db";

function App() {
  useEffect(() => {
    db.adapter.read().then((data) => {
      console.log(data);
    });
  }, []);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
