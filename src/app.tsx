import * as React from "react";
import { createRoot } from "react-dom/client";
import { css } from "@linaria/core";

const appStyles = css`
    color: forestgreen;
`

function App() {
    return <div className={appStyles}>Hello World!</div>;
}

const root = createRoot(document.getElementsByTagName("main")[0]);

root.render(<App />);
