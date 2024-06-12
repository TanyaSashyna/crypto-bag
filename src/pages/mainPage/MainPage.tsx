/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, observer } from "mobx-react";
import React, { FC, useEffect } from "react";

import { AppStore } from "../../stores/AppStore";

import { Container } from "./MainPage.styles";

type InjectedProps = {
  appStore: AppStore;
};

export const MainPage: FC<InjectedProps> = ({ appStore }) => {
  const { data } = appStore;
  console.log('data: ', data)

  useEffect(() => {
    appStore.getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>MainPage</Container>
  )
};

MainPage.displayName = "MainPage";

export default inject("appStore")(observer(MainPage)) as unknown as FC;
