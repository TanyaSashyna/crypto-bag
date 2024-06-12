/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, observer } from "mobx-react";
import React, { FC } from "react";

import { AppStore } from "../../stores/AppStore";

type InjectedProps = {
  appStore: AppStore;
};

export const SecondPage: FC<InjectedProps> = ({ appStore }) => {
  return (
    <div>SecondPage</div>
  )
};

SecondPage.displayName = "SecondPage";

export default inject("appStore")(observer(SecondPage)) as unknown as FC;
