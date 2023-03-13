import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  return (
    <div className="home">
      <SideBar />
      <Main />
    </div>
  );
};

export default SortingVisualizer;
