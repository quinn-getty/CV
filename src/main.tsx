import * as React from "react";
import * as ReactDOM from "react-dom";
import Base from "./components/Base";
import Work from "./components/Work";
import Project from "./components/Project";
import Other from "./components/Other";

const App = () => {
  const day = new Date();
  document.title = `高强强-前端-${day.getFullYear()}`;
  return (
    <>
      <Base />
      <Work />
      <Project />
      <Other />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
