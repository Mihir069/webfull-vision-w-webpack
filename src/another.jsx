import React, { Suspense, lazy } from "react";
import "./index.css";
import img from "../public/img/img.png";

const Page1 = lazy(() => import("./page/page1.jsx"));

const Another = () => {
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
        <Page1 />
      </Suspense>
    </div>
  );
};

export default Another;
