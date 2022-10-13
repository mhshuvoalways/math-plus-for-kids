import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Howitworks from "../pages/Howitworks";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import { Context } from "./Context";

const Router = () => {
  const context = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={context.data.header.nav[0].url} element={<Home />} />
        <Route path={context.data.header.nav[1].url} element={<Howitworks />} />
        <Route path={context.data.header.nav[2].url} element={<AboutUs />} />
        <Route path={context.data.footer.nav[1].url} element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
