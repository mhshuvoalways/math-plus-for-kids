import React from "react";
import Helmet from "./Helmet";
import Components from "../components";
import Date from "../db/content";
import Math from "../db/math.json";

const App = () => {
  const data = Date;
  const math = Math;

  return (
    <div>
      <Helmet />
      <Components data={data} math={math} />
    </div>
  );
};

export default App;
