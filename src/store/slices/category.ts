import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  show: boolean;
}

const initialState: InitialState = {
  show: true,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleShow(state) {
      state.show = !state.show;
      if (state.show === true) {
        ("dropdown-hidden");
      } else {
        ("dropdown-visible");
      }
    },
  },
});

export const { toggleShow } = todoSlice.actions;
export default todoSlice.reducer;
