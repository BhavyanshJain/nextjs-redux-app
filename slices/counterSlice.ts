import { createSlice } from "@reduxjs/toolkit";

// It is a ts defination for our intial state
// We can use type or interface here, it's up to our preference
export interface CounterState {
  value: number;
}

// Defining the initial state
const initialState: CounterState = {
  value: 0,
};

// We will use the createSlice function form redux toolkit
export const counterSlice = createSlice({
  // We can name it anything according to our preference
  name: "counter",

  // Initial state
  initialState,

  // These are basically the actions or function which
  // we are gonna call from our code to manipulate the
  // values located in these different slices at that global data layer
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// We are exporting these two different functions
// so that we can call it form the outside
export const { increment, decrement } = counterSlice.actions;

// Exporting the counterSlice reducer so that we can connect it to the store
export default counterSlice.reducer;
