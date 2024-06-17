/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import {
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";

import MainPage from "./mainPage";
import SecondPage from "./secondPage";

const Root: FC = () => {
  // const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage/>}
      />
      <Route
        path="/second-page"
        element={<SecondPage/>}
      />
    </Routes>
  )
};

Root.displayName = "root";

export default Root;
