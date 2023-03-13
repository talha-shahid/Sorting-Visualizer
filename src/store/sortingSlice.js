const { createSlice } = require("@reduxjs/toolkit");

const sortingSlice = createSlice({
  name: "sorting",
  initialState: {
    algorithm: "bubble",
    color: "#35c6ff",
    speed: 100,
    range: "30",
    play: false,
    values: [],
    timeouts: [],
  },
  reducers: {
    updateRange: (state, action) => {
      let arr = [];
      for (let i = 0; i < action.payload; i++)
        arr.push([Math.floor(Math.random() * 100) + 1, i]);
      state.range = action.payload;
      state.values = arr;
    },
    updateColor: (state, action) => {
      state.color = action.payload;
    },
    updateAlgorithm: (state, action) => {
      state.algorithm = action.payload;
    },
    updateSpeed: (state, action) => {
      state.speed = action.payload;
    },
    // updatePlay: (state, action) => {
    //   state.play = action.payload;
    // },
    updateValues: (state, action) => {
      state.values = action.payload;
    },
    // updateTimeouts: (state, action) => {
    //   state.timeouts = action.payload;
    // },
    changeValues: (state, action) => {
      console.log("change values");

      state.values = action.payload;
      // return (state.values = arr);
      // return { ...state, values: arr };
    },
    play_pause: (state, action) => {
      state.play = action.payload;
    },
  },
});

export const {
  updateRange,
  updateColor,
  updateAlgorithm,
  updateSpeed,
  play_pause,
} = sortingSlice.actions;
export default sortingSlice.reducer;
