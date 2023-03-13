import React, { useEffect } from "react";
import { Slider } from "@mui/material";
import "./SideBar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateRange,
  updateColor,
  updateAlgorithm,
  updateSpeed,
} from "./store/sortingSlice";

const SideBar = () => {
  const myState = useSelector((state) => state.sorting);
  const dispatch = useDispatch();

  //Handle Algorithm
  const handleAlgo = (algo) => {
    dispatch(updateAlgorithm(algo));
  };

  //Handle Range
  const handleRange = (range) => {
    // let new_arr = [...myState.values];
    // console.log(new_arr);
    //   for (let i = 0; i < new_arr.length; i++)
    //     document.getElementById(i).style.transform = `translateX(${i * 11}px)`;

    //   resetColor();

    dispatch(updateRange(range));
    // dispatch({
    //   type: "CHANGE_VALUES",
    // });
  };

  //Handle Color
  const handleColor = (color) => {
    console.log(color);
    dispatch(updateColor(color));
  };

  //Handle Speed
  const handleSpeed = (speed) => {
    dispatch(updateSpeed(speed));
  };

  //useEffect
  useEffect(() => {
    handleRange(30);
  }, []);

  return (
    <div>
      <div className="sidebar__option">
        <label htmlFor="algo">Algorithm: </label>
        <select
          name="algo"
          id="algo"
          onChange={(e) => handleAlgo(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option value="bubble">Bubble Sort </option>
          <option value="merge">Merge Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
      </div>

      <div className="sidebar__option">
        <label htmlFor="range">Range: </label>
        <Slider
          style={{ width: "180px" }}
          size="small"
          defaultValue={30}
          id="slider"
          min={1}
          className="slider"
          disabled={myState.play ? true : false}
          //   max={max}
          onChange={(e) => handleRange(e.target.value)}
          valueLabelDisplay="auto"
        />
      </div>

      <div className="sidebar__option">
        <label htmlFor="color">Color: </label>
        <select
          name="color"
          id="color"
          onChange={(e) => handleColor(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option
            value="rgb(0, 149, 199)"
            style={{ color: "rgb(0, 149, 199)" }}
          >
            Blue
          </option>
          <option value="rgb(85, 212, 0)" style={{ color: "rgb(10,200,20)" }}>
            Green
          </option>
          <option value="rgb(255, 112, 112)" style={{ color: "red" }}>
            Red
          </option>
          <option value="grey" style={{ color: "grey" }}>
            Black
          </option>
          <option value="#ddd902" style={{ color: "#ddd902" }}>
            Yellow
          </option>
        </select>
      </div>

      <div className="sidebar__option">
        <label htmlFor="speed">Speed: </label>
        <select
          name="speed"
          defaultValue={100}
          id="speed"
          onChange={(e) => handleSpeed(e.target.value)}
          disabled={myState.play ? true : false}
        >
          <option value={500}>Slow</option>
          <option value={200}>Medium</option>
          <option value={100}>Fast</option>
          <option value={20}>Super Fast</option>
          <option value={5}>Ultra Fast</option>
        </select>
      </div>
    </div>
  );
};

export default SideBar;
