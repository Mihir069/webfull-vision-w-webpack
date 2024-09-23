import React, { Suspense, lazy } from "react";
import "./index.css";
import img from "../public/img/img.png";

const Component = lazy(() => import("./component/component.jsx"));

const App = () => {
  const logNumber = (number) => {
    if (number > 0) {
      console.log(number);
    }
  };
  logNumber(10);

  return (
    <div>
      <h2>Component G</h2>
      <img src={img} alt="Descriptive text" />
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default App;
