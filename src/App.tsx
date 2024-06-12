/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { Provider } from "mobx-react";
import { BrowserRouter } from 'react-router-dom';

import Root from "./pages/Root";
import stores from "./stores";

const App: FC = () => {
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <div>
          App
          <Root />
        </div>
      </BrowserRouter>
    </Provider>
  )
};

App.displayName = "app";

export default App;
