import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../lib/store";

interface Counter {
  count: number;
}

const initialState: Counter = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;
