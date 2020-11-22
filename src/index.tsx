import { makeStyles } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";

import App from './components/App/App'

import './main.css'

const Root = () => (
  <App />
);

ReactDOM.render(
  <Root />,
  document.getElementById("root")
);