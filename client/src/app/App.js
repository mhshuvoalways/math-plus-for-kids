import React from "react";
import Helmet from "./Helmet";
import Router from "./Router";
import Context from "./Context";

const App = () => {
  return (
    <Context>
      <Helmet />
      <Router />
    </Context>
  );
};

export default App;
