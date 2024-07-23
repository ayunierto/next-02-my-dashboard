import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseByOne(state) {
      state.value++;
    },
    decreaseByOne(state) {
      if (state.value == 0) {
        return;
      }
      state.value--;
    },
    reset(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { increaseByOne, decreaseByOne, reset } = counterSlice.actions;

export default counterSlice.reducer;
