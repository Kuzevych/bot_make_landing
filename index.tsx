import * as React from "react";
import * as ReactDOM from "react-dom";
import { debugContextDevtool } from 'react-context-devtool';

import App from "./src/components";

// import './src/styles/index.css';

const container = document.getElementById("output");

ReactDOM.render(
  <App/>,
  container
);

debugContextDevtool(container);