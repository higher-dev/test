import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    startTime : 0,
    endTime : 0
};

export const timeSlice = createSlice({
  name: "timepicker",
  initialState,
  reducers: {
    setStartTime: (state,action) => {
      state.startTime = action.payload;
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload;
    },
    clearData: (state) => {
        state.startTime = 0;
        state.endTime = 0;
    }
  },
});

export const {
    setStartTime,
    setEndTime,
    clearData
} = timeSlice.actions;

export default timeSlice.reducer;