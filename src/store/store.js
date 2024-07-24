import { configureStore } from "@reduxjs/toolkit";
import timepickerReducer  from "./timeReducer";

export const store = configureStore({
    reducer: {
        timepicker : timepickerReducer,
    },
})