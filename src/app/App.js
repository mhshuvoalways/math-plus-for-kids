import React from "react";
import Helmet from "./Helmet";
import Components from "../components";
import DB from "../db";

const App = () => {
  const data = DB;

  return (
    <div>
      <Helmet />
      <Components data={data} />
    </div>
  );
};

export default App;
