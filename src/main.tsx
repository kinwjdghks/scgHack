import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Fragment } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Fragment>
    <div id="modalroot"></div>
    <App />
  </Fragment>
  // </React.StrictMode>,
);
