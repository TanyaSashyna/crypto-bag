## About

The template application.

## Scripts

* `yarn start` - to run local server
* `yarn lint` - run eslint
* `yarn test` - run jest

## Using
- React.JS v18.3.1
- TypeScript v5.0.4
- Eslint v7.34.1
- Jest v29.7.0
- Mobx v6.12.3
- Styled components v6.1.11
- Tailwind CSS v3.4.4

## Node
node.js v18.18.0

### Jest
Example of usage Jest
```typescript
import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("renders and matches snapshot", () => {
    const { container, asFragment } = render(
      <App/>
    );
    expect(container).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
})
```

### Mobx
Example of usage store (Mobx)
```typescript
import { inject, observer } from "mobx-react";
import React, { FC } from "react";
import { Store } from "../../stores/Store";

type InjectedProps = {
  store: Store;
};

export const MainPage: FC<InjectedProps> = ({ store }) => {
  const { data } = store;
  return (
    <div>{data}</div>
  )
};

MainPage.displayName = "MainPage";
export default inject("store")(observer(MainPage)) as unknown as FC;
```

### Styled components
Example of usage styled-components
```typescript
import styled from "styled-components";

export const Container = styled("div")`
  color: #A52A2AFF;
`;
```