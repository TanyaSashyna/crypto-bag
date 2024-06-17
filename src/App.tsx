/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { Provider } from "mobx-react";
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'

import Root from "./pages/Root";
import stores from "./stores";

const App: FC = () => {
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <NextUIProvider>
          {/* <div>
            App
          </div> */}
          <Root />
        </NextUIProvider>
      </BrowserRouter>
    </Provider>
  )
};

App.displayName = "app";

export default App;
